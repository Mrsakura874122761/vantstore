import Vue from 'vue'
import VueRouter from 'vue-router'
const home= () => import('../components/home.vue')
const message= () => import('../components/message.vue')
const cart= () => import('../components/shoppingCart.vue')
const mine= () => import('../components/mine.vue')
const login= () => import('../components/login/login.vue')
const dianqi=()=> import('../components/hometabpage/dianqi.vue')
const sex=()=> import('../components/hometabpage/sex.vue')
const game=()=> import('../components/hometabpage/game.vue')
const  nenmo=()=> import('../components/hometabpage/nenmo.vue')
const fruits=()=> import('../components/hometabpage/Fruits.vue')
const search=()=> import('../components/search.vue')
const goods=()=> import('../components/goods.vue')
const registered  =()=> import('../components/login/registered.vue')
const order  =()=> import('../components/order')
Vue.use(VueRouter)
const routes=[
{
    path: '',
    redirect: '/home/nenmo',
},
{
    path:"/login",
    component:login  
},
{
    path:"/registered",
    component:registered  
},
{
    path:"/order",
    component:order  
},
{
     path:"/home",
     component:home,
     redirect: '/home/nenmo',
     children:[
        {
            path:"/home/dianqi",
            name:"dianqi",
            component:dianqi 
        },
        {
            path:"/home/sex",
            name:"sex",
            component:sex  
        },
        {
            path:"/home/game",
            name:"game",
            component:game  
        },
        {
            path:"/home/nenmo",
            name:"nenmo",
            component:nenmo,
            meta: {
                keepAlive:true,
              },
        },
        {
            path:"/home/fruits",
            name:"fruits",
            component:fruits  
        },
     ]
     
},
{
    path:"/goods",
    component:goods
},
{
    path:"/message",
    component:message
},
{
    path:"/cart",
    component:cart
},
{
    path:"/mine",
    component:mine
},{
    path:"/search",
    component:search
}


]

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
   }
const router = new VueRouter({
    mode: "hash",
    routes,
    acrtiveClass: 'active'
  })
export default router