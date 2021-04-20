<template>
  <div>
    <div class="content">
      <div class="left">
        <ul
          :class="indexs == index ? 'leftactvie' : ''"
          v-for="(item, index) in list"
          :key="index"
          @click="leftClick(index)"
        >
          <li :id="'id'+index">{{ item.cat_name }}</li>
        </ul>
      </div>
      <div class="right">
        <div
          class="rightitem"
          :key="rindex"
          v-for="(ritem, rindex) in list[this.indexs].children"
        >
          <h3>{{ ritem.cat_name}}</h3>
          <van-grid :column-num="3"    icon-size="70px">
            <van-grid-item
              v-for="(item, index) in ritem['children']"
              :key="index"
              :icon="item.cat_icon"
              :text="item.cat_name" 
              @click="gogoods(item.cat_name)" 
            >
              <!-- <img width="70px" :src="item.cat_icon" alt=""> -->
            </van-grid-item>
          </van-grid>
         
        </div>
      </div>
    </div>
    <FooterTabbar></FooterTabbar>
  </div>
</template>
<style  scoped>
.content {
  display: flex;
  height: 100vh;
}
.leftactvie {
  color: #e93b3d;
  background-color: rgb(250, 249, 246);
}
.left {
  width: 85px;
  overflow: scroll;

  /** 要是家上导航烂要减去导航栏 */
  height: calc(100% - 50px);
}
.left ul li {
  height: 46px;
  width: 85px;
  line-height: 46px;
}
.right {
  height: calc(100% - 50px);
  flex: 6;
  overflow: scroll;
}
.rightitem {
  margin: 12px 10px;
}
.img ul li {
  width: 90px;
}
h3 {
  text-align: left;
}
</style>
<script>
import FooterTabbar from "../components/footertarbar";
export default {
  data() {
    return {
      indexs: 0,
      list: "",
    };
  },
  name: "message",
  components: {
    FooterTabbar,
  },
  methods: {
    gogoods(name){
      this.$router.push({path:"/search",query: {goodsname:name}})
    },
    leftClick(index) {
      this.indexs = index;
      var top = document.documentElement.scrollTop || document.body.scrollTop;
            document.getElementById("id"+index).scrollTop 
          console.log(top)
      //   document.documentElement.scrollTop = 46 * index;
      //   if (
      //     document.documentElement.scrollTop % 46 != 0 &&
      //     document.documentElement.scrollTop % 48 >= 23
      //   ) {
      //     console.log("第一个条件出发" + document.documentElement.scrollTop);
      //     while (document.documentElement.scrollTop % 46 == 0) {
      //       document.documentElement.scrollTop++;
      //     }
      //   } else if (
      //     document.documentElement.scrollTop % 46 != 0 &&
      //     document.documentElement.scrollTop % 46 < 23
      //   ) {
      //     console.log("第二个条件出发" + document.documentElement.scrollTop);
      //     while (document.documentElement.scrollTop % 46 == 0) {
      //       document.documentElement.scrollTop--;
      //       console.log("第二个条件出发" + document.documentElement.scrollTop);
      //     }
      //   }
      //   console.log(document.documentElement.scrollTop);
      //
    },
    async getlist() {
      this.$http
        .get("https://api-hmugo-web.itheima.net/api/public/v1/categories")
        .then((res) => {
          this.list = res.data["message"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getlist();
  },
};
</script>