<template>
    <div>
      <van-tabbar v-model="active" route inactive-color="#45F8C2">
  <van-tabbar-item   to="/home/nenmo" icon="home-o" >
    首页
  </van-tabbar-item>
  <van-tabbar-item  to="/message" icon="apps-o">
    分类
  </van-tabbar-item>
  <van-tabbar-item  to="/cart" icon="cart-o">
    购物车
  </van-tabbar-item>
  
  <van-tabbar-item to="/mine" icon="contact">
  我的
  </van-tabbar-item>
</van-tabbar>
    </div>
</template>
<script>
export default {
  created(){
	console.log (this.$route.path ) 
},
    name:"footernarbar",
    data(){
        return{
            active:0,
           isActive:false
        }
      
    },
  

}
</script>
<style >
.act{
  background-color: #fff;
    color: #1989fa;
}

</style>