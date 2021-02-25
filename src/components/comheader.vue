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
        ><van-search v-model="query" show-action placeholder="请输入商品关键字">
          <template #action> </template> </van-search
      ></van-col>
      <van-col span="4"
        ><div class="Searchbtn" @click="onSearch()">搜索</div>
      </van-col>
    </van-row>
  </div>
</template>
<style  >
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
</style>
<script>
export default {
  data() {
    return {
      query: "",
    };
  },

  methods: {
    gologin() {
      this.$router.push("/mine");
    },
    goback() {
      this.$router.go(-1);
    },
    onSearch() {
      console.log(this.query);
      this.$http
        .get("https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch", {
          params: { query: this.query },
        })
        .then((res) => {
          if (res.data.meta.status == 200) {
            console.log(res.data);
          } else {
            console.log("搜索失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>