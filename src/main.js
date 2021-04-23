import Vue from 'vue'
import './assets/rem'
import App from './App.vue'
import router from './router'
import fastclick from"fastclick"
import axios from 'axios'
import {Toast,Field,Checkbox,SubmitBar,NavBar, Dialog , Card,GoodsAction, GoodsActionIcon, GoodsActionButton,PullRefresh,Cell,CellGroup, List , Tag, Sticky ,Grid, GridItem,Icon, Tab, Tabs,Search,Col, Row,Lazyload,Button ,Tabbar, TabbarItem} from 'vant';
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import "./assets/iconfont/iconfont.css"
import store from './store/store'  
Vue.use(Toast);
Vue.use(Field)
Vue.use(GoodsAction)
Vue.use(SubmitBar)
Vue.use(Checkbox)
Vue.use(NavBar)
Vue.use(Dialog)
Vue.use(Card)
Vue.use(GoodsActionIcon)
Vue.use( GoodsActionButton)
Vue.use(PullRefresh)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(List)
Vue.config.productionTip = false
Vue.use(vueSwiper)
Vue.use(Tag)
Vue.use(Sticky)
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon)
Vue.use(Button)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar)
Vue.use(Search)
Vue.use(TabbarItem)
Vue.use(Col);
Vue.use(Row);
Vue.use(Lazyload);
Vue.prototype.$http = axios
//解决移动端按钮点击延迟300ms
fastclick.attach(document.body)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
