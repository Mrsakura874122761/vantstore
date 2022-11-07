<template>
  <div>
    <van-sticky>
      <div class="headers">
        <van-row
          style="background-color: #e93b3d"
          type="flex"
          justify="center"
          align="center"
        >
          <van-col span="4">
            <div @click="fenlei()">
              <i
                class="iconfont icon-fenlei"
                style="color: #fff; font-size: 25px"
              ></i>
            </div>
          </van-col>
          <van-col span="16"
            ><van-search
              @click="onSearch()"
              v-model="value"
              show-action
              placeholder="请输入商品关键字"
            >
              <template #action> </template> </van-search
          ></van-col>
          <van-col v-if="islogin" span="4"
            ><div style="color: #fff">已登录</div>
          </van-col>
          <van-col v-else span="4"
            ><div style="color: #fff" @click="gologin()">登录</div>
          </van-col>
        </van-row>
      </div>
      <!-- <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="Swiper" :key="index" v-for="(img, index) in images"
        ><img class="img" :src="img" alt=""
      /></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
      <div class="nav">
        <van-tabs animated>
          <van-tab
            replace
            :to="tabitem.path"
            :key="index"
            v-for="(tabitem, index) in tablist"
            :title="tabitem.name"
          >
          </van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <FooterTabbar></FooterTabbar>
  </div>
</template>
<script>
import FooterTabbar from "../components/footertarbar";
// import wx from "weixin-js-sdk";
export default {
  name: "home",
  data() {
    return {
      isActive: false,
      navIndex: 0,
      islogin: false,
      tablist: [
        {
          name: "衣服",
          path: "/home/nenmo",
        },
        {
          name: "水果",
          path: "/home/fruits",
        },
        {
          name: "日常用品",
          path: "/home/sex",
        },
        {
          name: "游戏",
          path: "/home/game",
        },
        {
          name: "家电",
          path: "/home/dianqi",
        },
      ],
      value: "",
      active: 0,
      //   swiperOption: {
      //   observer: true, //修改swiper自己或子元素时，自动初始化swiper
      //   observeParents: true, //修改swiper的父元素时，自动初始化swiper
      //   loop: true,
      //   autoplay: {
      //     delay: 2000,
      //   },
      //   speed: 800,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     dynamicBullets: true,
      //   },
      // },
      // images: [
      //   require("../assets/sakura.jpg"),
      //   require("../assets/sakuratree.jpg"),
      //   require("../assets/hui.jpg"),
      // ],
    };
  },
  created() {
    if (window.sessionStorage.getItem("token")) {
      this.islogin = true;
      console.log(window.sessionStorage.getItem("token"));
    } else {
      this.islogin = false;
    }
    //  await this.$http.get("/tab/tablist").then(res=>{
    //               console.log(res.data);
    //              this.tablist=res.data;
    //  })
  },
  mounted() {
    // console.log(wx);
  },

  components: {
    FooterTabbar,
  },
  methods: {
    sdks() {},
    gologin() {
      this.$router.push("/login");
    },
    fenlei() {
      this.$router.push("/message");
    },
    onSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style>
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
  color: white;
  padding: 0px 10px;
  background: rgb(241, 179, 86);
  border-radius: 15px;
}
.van-search__content {
  /* background: rgb(206, 204, 201); */
  border-radius: 40px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}
.img {
  width: 100%;
  height: 100%;
}
.Swiper {
  height: 200px;
}
</style>