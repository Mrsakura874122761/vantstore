(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c4ef083"],{"0ead":function(o,t,s){"use strict";s("c0c9")},"23a1":function(o,t,s){"use strict";s.r(t);var e=function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("div",[s("div",[s("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":"",title:"好多多注册"},on:{"click-left":o.onClickLeft}}),s("div",{staticClass:"center"},[s("img",{staticStyle:{"margin-bottom":"50px",width:"100px",height:"100px","border-radius":"50%"},attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=194597795,41411337&fm=26&gp=0.jpg",alt:"www.xxx.com",width:"200px",height:"100px"}}),s("van-cell-group",[s("van-field",{attrs:{required:"",label:"用户名",placeholder:"请输入用户名"},model:{value:o.loginForm.username,callback:function(t){o.$set(o.loginForm,"username",t)},expression:"loginForm.username"}}),s("van-field",{attrs:{required:"",type:"password",label:"密码",placeholder:"请输入密码"},model:{value:o.loginForm.password,callback:function(t){o.$set(o.loginForm,"password",t)},expression:"loginForm.password"}}),s("van-field",{attrs:{required:"",type:"password",label:"确认密码",placeholder:"请再次输入密码"},model:{value:o.loginForm.passwords,callback:function(t){o.$set(o.loginForm,"passwords",t)},expression:"loginForm.passwords"}})],1),s("div",{staticClass:"btn"},[s("van-button",{attrs:{type:"primary"},on:{click:function(t){return o.goback()}}},[o._v("返回登录")]),s("van-button",{attrs:{type:"info"},on:{click:function(t){return o.registered()}}},[o._v("注册")])],1)],1)],1)])},r=[],n={name:"sex",data:function(){return{loginForm:{username:"",password:"",passwords:""},loginForms:{username:"admin",password:"123456",passwords:"123456"}}},methods:{onClickLeft:function(){this.$router.go(-1),console.log("1")},registered:function(){this.loginForm.passwords!=this.loginForm.password?this.$toast.fail("两次输入密码不一致"):(this.$toast.success("注册成功"),this.$router.push("/login"))},goback:function(){this.$router.go(-1),console.log("1")},gohome:function(){this.$router.push("/home")}}},a=n,i=(s("0ead"),s("2877")),l=Object(i["a"])(a,e,r,!1,null,null,null);t["default"]=l.exports},c0c9:function(o,t,s){}}]);