<template>
    <div>
        <div >
   <van-nav-bar title="好多多登录"  left-text="返回"
  left-arrow
  @click-left="onClickLeft" >
</van-nav-bar>
       <div class="center">
            <img
      style="
        margin-bottom: 50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      "
      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=194597795,41411337&fm=26&gp=0.jpg"
      alt="www.xxx.com"
      width="200px"
      height="100px"
    />
             <van-cell-group>
  <van-field
    v-model="loginForm.username"
    required
    label="用户名"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="loginForm.password"
    required
    type="password"
    label="密码"
    placeholder="请输入密码"
    
  />
</van-cell-group>
<div class="btn">
    <van-button type="primary" @click="login()">登录</van-button>
<van-button type="info" @click="gohome">注册</van-button>
</div>
       </div>
        </div>
    </div>
</template>
<style>
.btn{
  
    padding:20px ;
    display: flex;
    justify-content: space-between;
}
   .center{
         margin-top: 100px;
       padding: 20px;
       text-align: center;
   }
</style>
<script>
export default {
    name:"login",
    data(){
        return{
        loginForm: {
        username: "",
        password: "",
      },
             
        }
    },
    methods:{
          onClickLeft(){
              this.$router.go(-1)
             console.log("1")
        },
        login(){
             this.$http
      .post("https://www.liulongbin.top:8888/api/private/v1/login",this.loginForm).then((res)=>{
             if (res.data.meta.status !== 200) {
            this.$toast.fail('登录失败');
        } else {
             this.$toast.success('登录成功');
          console.log(res.data.data.token);
          window.sessionStorage.setItem('token',res.data.data.token);
          this.$router.push("/home")
          
        }
           
      })
        }
        ,
        goback(){
          this.$router.go(-1)
          console.log("1")
        },
       
        gohome(){
            this.$router.push("/registered")
        }
    }
    
    
}
</script>