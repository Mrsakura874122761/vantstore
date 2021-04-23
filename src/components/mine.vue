<template>
    <div>
        <div v-if="islogin">
            <van-nav-bar title="个人信息"  left-text="返回"
  left-arrow
  @click-left="onClickLeft" >
  
</van-nav-bar>
    <div class="mine">
      <div >
<img class="headerimg" src="../assets/hui.jpg" alt="">
      </div>
      <div style="margin-left:10px" >
            <p>用户名:admin</p>
            <p>id:um165651</p>
      </div>
    </div>
     
  
      
<van-button  style="margin-top:200px;margin-right:10px" type="danger" @click="order">我的订单</van-button>
  <van-button  style="margin-top:200px" type="danger" @click="loginOut">退出登录</van-button>
       </div>
       <div v-else>
           <van-nav-bar title="我的"  left-text="返回"
  left-arrow
  @click-left="onClickLeft" >
</van-nav-bar>
            <van-button style="margin-top:200px" @click="gologin()" type="primary">去登录</van-button>
       </div>
         <FooterTabbar></FooterTabbar>
    </div>
</template>
<script>
import FooterTabbar from '../components/footertarbar'
export default {
    data(){
     return{
          islogin:false,
     }
    },
    name:"mine",
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
    methods:{onClickLeft(){
           this.$router.go(-1)
    },
         loginOut(){
             window.sessionStorage.removeItem('token')
             console.log(window.sessionStorage.getItem('token'));
              this.$router.push("/login")
         },
         gologin(){
               this.$router.push("/login")
         },
         order(){
 this.$router.push("/order")
         }
    }
}
</script>
<style scoped>
.headerimg{
  
   height: 100px;
   width: 100px;
   border-radius: 50px;
}
.mine{
  padding: 10px;
    display:flex;
    align-items: center;
}
</style>