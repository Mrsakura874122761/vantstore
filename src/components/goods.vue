<template>
  <div class="cardDetail">
    <div class="img">
      <div class="topContent">
        <div @click="goback()" class="goback">
          <i
            class="iconfont icon-fanhui"
            style="color: white; font-size: 25px"
          ></i>
        </div>
        <div class="goback">
          <van-icon color="white" size="25px" name="ellipsis" />
        </div>
      </div>
      <img :src="img" alt="暂无图片" width="100%" height="auto" />
    </div>
       <em>
             ￥
                <span class="price">{{gooddetail.goods_price }}</span>
                .00
              </em>
               <div class="goodsatr">
                <span> 重量 :{{ gooddetail.goods_weight }}g</span>
                <span> 数量:{{ gooddetail.goods_number }}</span>
              </div>
    <div class="name" ><h2>{{this.gooddetail.goods_name}}</h2></div>
    <h2 style="text-align: center;">商品详情</h2>
   <div v-html="gooddetail.goods_introduce">{{gooddetail.goods_introduce}}</div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="cardlists.length" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button
        type="warning"
        @click="addcard()"
        :text="this.text"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<style  >
.goodsatr {
  padding: 10px 20px ;
  color: #e4393c;
}
.goodsatr span {
  padding: 2px;
  margin-left: 5px;
  border: 1px solid #e4393c;
}
.name{
      padding: 10px 20px ;
      font-size: 10px;
    color: rgba(0,0,0,.87);
    text-overflow: ellipsis;
}
em {
  padding: 10px 20px ;
  color: #e4393c;
}
.price {
  
  font-weight: 400;
  font-size: 18px;
}
.cardDetail{
  padding-bottom:50px ;
   text-align: left;
}
.img {
  
  position: relative;
}
.goback {
  text-align: center;
  margin: 7px 5px;
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
import { mapState } from 'vuex';
export default {
  name: "goods",
  data() {
    return {
      text:"加入购物车",
      img: "",
      gooddetail:"",
      id: this.$route.query.goodId,
    };
  },
  computed:{
     ...mapState(["cardlists"]),
  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    addcard() {
     return new Promise((resolve, reject) => {
        Promise.all([this.$store.dispatch("FETCH_GETCARD", {goods_id:this.id})]).finally(() => {
               console.log("请求成功");
               console.log(this.cardlists);
                 this.$dialog.alert({
      message: '加入购物车成功',
    });
        })
        .catch(reject);
      })
      
      
          
         
        
    
        
    },
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
           this.gooddetail=res.data.message
          console.log(res.data.message);
        } else {
          console.log("搜索失败");
        }
      })
      .catch();
  },
};
</script>