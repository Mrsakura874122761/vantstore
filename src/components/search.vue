<template>
  <div>
    <van-row
      style="
        background-color: #fff;
        border-bottom: rgb(199, 196, 196) 1px solid;
      "
      type="flex"
      justify="center"
      align="center"
    >
      <van-col span="4">
        <div @click="goback()">
          <i
            class="iconfont icon-fanhui"
            style="color: grey; font-size: 25px"
          ></i>
        </div>
      </van-col>
      <van-col span="16"
        ><van-search
          v-model="query"
          @input="inputing()"
          show-action
          placeholder="请输入商品关键字"
        >
          <template #action> </template> </van-search
      ></van-col>
      <van-col span="4"
        ><div class="Searchbtn" @click="onSearch()">搜索</div>
      </van-col>
    </van-row>
    <div
      v-if="(searchlist == false && isshowkeyword == false) || query == ''"
      class="searchcontent"
    >
      <div class="searchhistory" v-if="searchoverlist != false">
        <p>最近搜索</p>
        <span @click="clear()">
          <i
            class="iconfont icon-SHANCHU"
            style="color: grey; font-size: 20px"
          ></i
        ></span>
      </div>
      <div class="card">
        <span :key="index" v-for="(item, index) in searchoverlist">
          <van-tag
            closeable
            @close="deletehistorytiem(index)"
            class="cardbg"
            @click="onhistory(index)"
            text-color="#686868"
            size="medium"
          >
            {{ item }}
          </van-tag>
        </span>
      </div>
      <div class="searchhistory">
        <p>热门搜索</p>
        <span @click="hidden()"> 隐藏 </span>
      </div>
      <div class="card" v-if="listhidden == true">
        <span :key="index" v-for="(item, index) in hotlist">
          <van-tag
            class="cardbg"
            @click="onhot(index)"
            text-color="#686868"
            size="medium"
          >
            {{ item }}
          </van-tag>
        </span>
      </div>
      <div v-if="listhidden == false">
        <p>已隐藏搜索发现</p>
      </div>
    </div>
    <div v-if="isshowkeyword == true">
      <div class="wordlist" :key="index" v-for="(word, index) in keyword">
        <p @click="gokeyword(word.goods_name)">{{ word.goods_name }}</p>
      </div>
    </div>

    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      v-if="searchlist != false && query != '' && isshowkeyword == false"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item, index) in searchlist" :key="index">
          <div class="goodsitem" @click="gogoods(item.goods_id)">
            <div class="goodsimg">
              <img :src="item.goods_small_logo" alt="" />
            </div>
            <div class="goodscontent">
              <div class="goodsname">
                {{ item.goods_name }}
              </div>
              <em>
                ￥
                <span class="price">{{ item.goods_price }}</span>
                .00
              </em>
              <div class="goodsatr">
                <span> 重量 :{{ item.goods_weight }}g</span>
                <span> 数量:{{ item.goods_number }}</span>
              </div>
              <div style="display: flex; justify-content: space-between">
                <div class="storename">
                  <span style="align-self: center"> 濠帅京东自营店 </span>
                  <van-icon style="align-self: center" name="arrow" />
                </div>
                <van-icon
                  color="#e4393c"
                  size="20"
                  style="align-self: center"
                  name="cart-o"
                />
              </div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<style  >
.wordlist {
  padding: 5px;
  width: 100%;
  border-top: #f0f2f5 1px solid;
  border-bottom: #f0f2f5 1px solid;
}
.wordlist p {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.storename {
  display: flex;
}
.goodsatr {
  color: #e4393c;
}
.goodsatr span {
  padding: 2px;
  margin-left: 5px;
  border: 1px solid #e4393c;
}
em {
  color: #e4393c;
}
.price {
  font-weight: 400;
  font-size: 18px;
}
.goodsname {
  margin-bottom: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 38px;
  color: #333;
  line-height: 1.36;
}
.goodsitem {
  display: flex;
}
.goodsimg {
  flex: 3;
}
.goodsimg img {
  width: 100%;
}
.goodscontent {
  padding: 5px 10px;
  flex: 6;
}
.cardbg {
  background-color: #f0f2f5;
}
.card {
  text-align: left;
}
.card span {
  margin-left: 5px;
  margin-top: 5px;
}
.van-search {
  background-color: transparent;
}
.action {
  padding-top: 10px !important;
  width: 50px;
}
.leader {
  width: 50px;
}
.Searchbtn {
  line-height: 34px;
  height: 34px;
  color: white;
  background: rgb(233, 59, 61);
  border-radius: 15px;
}
.van-search__content {
  /* background: rgb(206, 204, 201); */
  border-radius: 40px;
}
.searchhistory {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-self: center;
}
.searchcontent {
  padding: 0 12px;
  margin-top: 12px;
}
</style>
<script>
export default {
  data() {
    return {
      //搜索词
      query: "",
      //搜索历史
      searchoverlist: [],
      //热们推荐
      hotlist: [
        "韩都衣舍2017韩版",
        "妈咪包",
        "电脑",
        "电视",
        "洗衣机",
        "冰箱",
        "零食",
      ],

      //搜索关键词
      keyword: [],
      //推荐关键词的列表显示
      isshowkeyword: false,

      //搜索返回商品列表
      searchlist: [],
      //隐藏推荐
      //
      pagenum: 0,
      listhidden: true,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },

  created() {
     if(this.$route.query.goodsname){
            this.query = this.$route.query.goodsname;
      this.onSearch();
        this.isshowkeyword = false;
     }
    let receive = localStorage.getItem("historySearch");
    if (!receive) {
      receive = [];
    } else {
      this.searchoverlist = JSON.parse(receive);
    }
  },
  methods: {
    gogoods(id){
      this.$router.push({path:"/goods",query:{
          goodId:id
      }})

    },
    gokeyword(querys) {
      this.pagenum = 0;
      this.finished = false;
      this.$http
        .get("https://api-hmugo-web.itheima.net/api/public/v1/goods/search", {
          params: { query: querys, pagesize: 20, pagenum: 0 },
        })
        .then((res) => {
          if (res.data.meta.status == 200) {
            console.log(res.data.message.goods);
            this.searchlist = res.data.message.goods;
          } else {
            console.log("搜索失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      if (this.searchoverlist.length == 0) {
        this.searchoverlist.push(this.query);
        console.log("ss");
      } else {
        for (let i = 0; i < this.searchoverlist.length; i++) {
          if (this.searchoverlist.indexOf(this.query) == -1) {
            this.searchoverlist.push(this.query);
            break;
          }
        }
        console.log(this.searchoverlist);
        this.savesearch();
      }
      this.isshowkeyword = false;
    },
    inputing() {
      this.isshowkeyword = true;
      console.log(this.isshowkeyword);
      // if (
      //   typeof this.query == "undefined" ||
      //   this.query == null ||
      //   this.query == ""
      // ) {
      //   console.log("输入搜索词为空串");
      // } else {
      this.$http
        .get("https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch", {
          params: { query: this.query },
        })
        .then((res) => {
          if (res.data.meta.status == 200) {
            console.log(res.data.message);
            this.keyword = res.data.message;
          } else {
            console.log("搜索失败");
            this.keyword = [];
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // if (this.searchoverlist.length == 0) {
      //   this.searchoverlist.push(this.query);
      //   console.log("ss");
      // } else {
      //   for (let i = 0; i < this.searchoverlist.length; i++) {
      //     if (this.searchoverlist.indexOf(this.query) == -1) {
      //       this.searchoverlist.push(this.query);
      //       break;
      //     }
      //   }
      //   console.log(this.searchoverlist);
      //   this.savesearch();
      // }
      // }
    },
    onLoad() {
      setTimeout(() => {
        this.pagenum++;
        if (this.refreshing) {
          this.searchlist = [];
          this.refreshing = false;
        }

        this.$http
          .get("https://api-hmugo-web.itheima.net/api/public/v1/goods/search", {
            params: { query: this.query, pagesize: 20, pagenum: this.pagenum },
          })
          .then((res) => {
            if (res.data.meta.status == 200) {
              console.log(res.data.message.goods + this.pagenum);
              for (var i = 0; i < res.data.message.goods.length; i++) {
                this.searchlist.push(res.data.message.goods[i]);
              }
              this.loading = false;

              if (res.data.message.goods.length == 0) {
                this.pagenum = 0;
                console.log(this.pagenum);
                this.finished = true;
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      this.pagenum = 0;
      console.log(this.pagenum);
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    //保存搜索记录
    savesearch() {
      localStorage.setItem(
        "historySearch",
        JSON.stringify(this.searchoverlist)
      );
    },
    //点击最近历史小标签
    onhistory(index) {
      this.pagenum = 0;
      this.finished = false;
      this.query = this.searchoverlist[index];
      this.onSearch();
      this.isshowkeyword = false;
    },
    //点击热门推荐小标签
    onhot(index) {
      this.pagenum = 0;
      this.query = this.hotlist[index];
      this.onSearch();
      if (this.searchoverlist.length == 0) {
        this.searchoverlist.push(this.hotlist[index]);
        console.log("ss");
      } else {
        for (let i = 0; i < this.searchoverlist.length; i++) {
          if (this.searchoverlist.indexOf(this.hotlist[index]) == -1) {
            this.searchoverlist.push(this.hotlist[index]);
            break;
          }
        }
      }

      this.savesearch();
      this.finished = false;
      this.isshowkeyword = false;
    },

    //历史搜索单个小标签删除
    deletehistorytiem(index) {
      this.searchoverlist.splice(index, 1);
      this.savesearch();
    },
    //热门推荐小标签删除
    deleteitem(index) {
      this.hotlist.delete(index);
    },
    //隐藏推荐
    hidden() {
      this.listhidden = !this.listhidden;
    },
    //清空历史记录
    clear() {
      this.searchoverlist = [];
      this.savesearch();
    },
    //头部返回
    goback() {
      this.$router.go(-1);
    },
    //搜索
    onSearch() {
      this.pagenum = 0;
      this.finished = false;
      this.isshowkeyword = false;
      if (
        typeof this.query == "undefined" ||
        this.query == null ||
        this.query == ""
      ) {
        console.log("输入搜索词为空串");
      } else {
        this.$http
          .get("https://api-hmugo-web.itheima.net/api/public/v1/goods/search", {
            params: { query: this.query, pagesize: 20, pagenum: 0 },
          })
          .then((res) => {
            if (res.data.meta.status == 200) {
              console.log(res.data.message.goods);
              this.searchlist = res.data.message.goods;
            } else {
              console.log("搜索失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
        if (this.searchoverlist.length == 0) {
          this.searchoverlist.push(this.query);
          console.log("ss");
        } else {
          for (let i = 0; i < this.searchoverlist.length; i++) {
            if (this.searchoverlist.indexOf(this.query) == -1) {
              this.searchoverlist.push(this.query);
              break;
            }
          }
          this.savesearch();
        }
      }
    },
  },
};
</script>