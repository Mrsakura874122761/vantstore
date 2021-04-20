<template>
  <div>
    <swiper
      :ref="swiperOption"
      class="swiper"
      :options="swiperOption"
      v-if="images.length > 0"
    >
      <swiper-slide class="Swiper" :key="index" v-for="(img, index) in images"
        ><img class="img" :src="img.image_src" alt=""
      /></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <van-row class="rowss" type="flex" justify="center" align="center">
      <van-col span="8"
        ><van-icon color="#E57DE7" name="star-o" />SAKURA品牌</van-col
      >
      <van-col span="8"
        ><van-icon color="#E57DE7" name="star-o" />3天内包邮退货</van-col
      >
      <van-col span="8"
        ><van-icon color="#E57DE7" name="star-o" />7天无理由退货</van-col
      >
    </van-row>
    <van-grid>
      <van-grid-item
        class="icons"
        :text="itemimg.name"
        v-for="(itemimg, index) in goodslist"
        :icon="itemimg.url"
        :key="index"
      />
    </van-grid>
    <div class="more">
      <h1>新品首发</h1>
      <span @click="more()">更多></span>
    </div>
    <van-grid :column-num="3" :boder="false" :center="false">
      <van-grid-item v-for="(good, index) in newgoods" :key="index">
        <div class="goodsimg">
          <img :src="good.url" alt="" />
          <div>{{ good.text }}</div>
          <div class="price">￥{{ good.price }}</div>
        </div>
      </van-grid-item>
    </van-grid>
    <div class="ft">
      <div class="down">
        <a href="" class="button">下载APP</a>
        <a href="" class="button">电脑版</a>
      </div>
      <p>濠帅公司版权所有 © 1997-2021</p>
      <p>食品经营许可证：JY133010801117179</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    more() {},
  },
  name:"nenmo",
  mounted() {
  },
  async created() {
     this.$http
      .get("http://sport-booking.tiger.wizmacau.com/pool/api/venue/get", {
       
      })
      .then((res) => {
          console.log(res);
      })
      .catch();
    const { data: res } = await this.$http.get(
      "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
    );
    if (res.meta.status == 200) {
      this.images = res.message;
      console.log(this.images[0].image_src);
    } else {
      console.log("轮播图请求失败");
    }

    // const { data: goodslist } = await this.$http.get("/tab/goodslist");
    // this.goodslist = goodslist;
    // const { data: newgoods } = await this.$http.get("/tab/newgoods");
    // this.newgoods = newgoods;
      
  },
  data() {
    return {
      swiperOption: {  
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: {
          delay: 2000,
        },
        speed: 1800,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
      goodslist: [
        {
          url:
            "https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
          name: "新品首发",
        },
        {
          url:
            "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
          name: "居家生活",
        },
        {
          url:
            "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
          name: "服饰鞋包",
        },
        {
          url:
            "https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
          name: "美食酒水",
        },
        {
          url:
            "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
          name: "个护清洁",
        },
        {
          url:
            "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
          name: "母婴亲子",
        },
        {
          url:
            "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
          name: "运动旅游",
        },
        {
          url:
            "https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
          name: "好货抄底",
        },
      ],
      images: "",
      newgoods:[
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自便携饮水机便携饮水机便携饮水机便携饮水机便携饮水机便携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自便携饮水机便携饮水机便携饮水机携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动停便携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动停止 携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动停止 3水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动水机",
            price:55.5,
            type:0
        },

      ],
    };
  },
  components: {},
 
};
</script>
<style >
.ft p {
  font-size: 10px;
  color: #fff;
}
.down {
  padding: 20px;
  color: #fff;
  background-color: transparent;
}
.down a {
  font-size: 10px;
  display: inline;
  box-sizing: border-box;
  margin-right: 15px;
  padding: 5px;
  color: #fff;
  border: 1px #fff solid;
}
.ft {
  height: 150px;
  background-color: #333;
}
.price {
  color: crimson;
}
.goodsimg {
  color: #000;
  font-size: 10px;
  text-align: left;
}
.goodsimg img {
  width: 100%;
}
.icons .van-icon__image {
  width: 50px;
  height: 50px;
}
.rowss {
  margin-top: 10px;
}
.more {
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-self: center;
}
.more > h1 {
  font-size: 20px;
}
.more > span {
  color: red;
}
</style>