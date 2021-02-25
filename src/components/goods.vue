<template>
  <div>
    <div class="img">
      <div class="topContent">
        <div class="goback">
          <i
            class="iconfont icon-fanhui"
            style="color: white; font-size: 25px"
          ></i>
        </div>
        <div class="goback"><van-icon color="white" size="25px" name="ellipsis" /></div>
      </div>
      <img :src="img" alt="暂无图片" width="100%" height="auto" />
    </div>
     <div class="price">
       
     </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<style  >
.img {
  position: relative;
}
.goback {
  text-align: center;
  margin: 7px  5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #666666;
  line-height: 30px;
}
 
 
.topContent {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
  position: absolute;
}
</style>
<script>
export default {
  name: "goods",
  data() {
    return {
      img: "",
      goodsname: "",
      id: this.$route.query.goodId,
    };
  },
  created() {
    this.$http
      .get("https://api-hmugo-web.itheima.net/api/public/v1/goods/detail", {
        params: { goods_id: this.id },
      })
      .then((res) => {
        if (res.data.meta.status == 200) {
          if (res.data.message.pics[0].pics_big_url != null) {
            this.img = res.data.message.pics[0].pics_big_url;
          }

          this.goodsname = res.data.message.goods_name;
        } else {
          console.log("搜索失败");
        }
      })
      .catch();
  },
};
</script>