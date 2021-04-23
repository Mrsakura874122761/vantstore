<template>
    <div>
       <div v-if="islogin">
         <van-nav-bar
  title="我的订单"
  left-text="返回"
  right-text="编辑"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>    
     <van-row 
     style="margin-top:15px"
          type=“flex”
     v-for="(i,index) in order"
          :key="index"> 
  <van-col style="margin-top:40px" offset="1" span="3" > <van-checkbox v-model="i.ischeck" @click="Check()"></van-checkbox></van-col>
  <van-col span="20">  <van-card
        style="text-align:left;padding-top:20px"
         
  :num="i.num"
  :price="i.goods_price"
  desc="描述信息"
  :title="i.goods_name"
  :thumb="i.pics[0].pics_big_url"
>
  <template #footer>
    <van-button size="mini" @click="add(index)">+</van-button>
    <van-button size="mini" @click="cdd(index,i.num)">-</van-button>
  </template>
</van-card></van-col>
 
</van-row>
        <!-- <van-card
        style="text-align:left;padding-top:20px"
             v-for="(i,index) in cardlists"
          :key="index"
  :num="i.num"
  :price="i.goods_price"
  desc="描述信息"
  :title="i.goods_name"
  :thumb="i.pics[0].pics_big_url"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini" @click="add(index)">+</van-button>
    <van-button size="mini" @click="cdd(index,i.num)">-</van-button>
  </template>
</van-card> -->
  <van-submit-bar  :price="SUMS" button-text="去结算" @submit="onSubmit">
  <van-checkbox v-model="checked" @click="allCheck()">全选</van-checkbox>
</van-submit-bar>
      
         <FooterTabbar></FooterTabbar>
       </div>
       <div v-else>
              <van-nav-bar
  title="我的订单"
  left-text="返回"
  right-text="编辑"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>  
             <van-button style="margin-top:200px" @click="gologin()" type="primary">去登录</van-button>
               <FooterTabbar></FooterTabbar>
       </div>
    </div>
</template>
<script>

import FooterTabbar from '../components/footertarbar'
import { mapState,mapGetters } from 'vuex'
export default {
   data() {
    return {
       checked:false,
       islogin:false,
    }},
    name:"cart",
      components:{
        FooterTabbar 
    },
    created(){
      if(window.sessionStorage.getItem('token')){
            this.islogin=true
            console.log(window.sessionStorage.getItem('token'));
      }else{
        this.islogin=false
      }
    
    },
     computed:{
          ...mapState(["order"]),
          ...mapGetters(["SUMS"])
    },
      methods: {
        Check(){
         
        },
      allCheck(){
        this.checked!=this.checked;
      },
        add(i){
             this.$store.commit('ADD_NUM',i)
        },
         
        cdd(i,num){
           if(num>0){
              this.$store.commit('C_NUM',i)
           }
      
        },
    onClickLeft() {
       this.$router.go(-1)
    },
    onClickRight() {
     this.$store.commit('DELS')
    },
    onSubmit(){
     
    },
     gologin(){
               this.$router.push("/login")
         }
  },
}
</script>