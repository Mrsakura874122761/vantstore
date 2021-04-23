<template>
    <div>
        <div >
   <van-nav-bar 
   left-text="返回"
  left-arrow
  @click-left="onClickLeft" title="好多多注册"   >
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
  <van-field
    v-model="loginForm.passwords"
    required
     type="password"
    label="确认密码"
    placeholder="请再次输入密码"
    
  />
</van-cell-group>
<div class="btn">
    <van-button type="primary" @click="goback()">返回登录</van-button>
<van-button type="info" @click="registered()">注册</van-button>
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
    name:"sex",
    data(){
        return{
     
    loginForm: {
        username: "",
        password: "",
        passwords:""
      },
       loginForms: {
        username: "admin",
        password: "123456",
        passwords:"123456"
      },
        }
    },
    methods:{
        onClickLeft(){
              this.$router.go(-1)
             console.log("1")
        },
        registered(){
            if(this.loginForm.passwords!=this.loginForm.password){
                   this.$toast.fail('两次输入密码不一致');
            }else{  
                     this.$toast.success('注册成功');
                        this.$router.push("/login")
            }
           
        },
        goback(){
          this.$router.go(-1)
          console.log("1")
        },
       
        gohome(){
            this.$router.push("/home")
        }
    }
    
    
}
</script>