import Vue from 'vue'
import Vuex from 'vuex'
import { fetchData,addCard } from '@/api/request'
//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        //存放的键值对就是所要管理的状态
        name: 'helloVueX',
        data: {},
        cardlists:[],
        sum:0,

    },
    getters:{
        SUM:(state)=>{
            let sum=0;
            for(let i=0;i<state.cardlists.length;i++){
                if(state.cardlists[i].ischeck==true){
                      sum=sum+(state.cardlists[i].goods_price*state.cardlists[i].num)
                }
            }
            return sum*100
                 
        }
    },
    mutations: {
        SET_DATA: (state, { data }) => {
            state.data = data;
        },
        SET_CARDs: (state, { data }) => {
            state.cardlists = state.cardlists.concat(data);
        },
        ADD_NUM:(state,i)=>{
             state.cardlists[i].num+=1
        },
        C_NUM:(state,i)=>{
            state.cardlists[i].num-=1
       },
     
          
    },
    actions: {
        FETCH_DATA: ({ commit }) => {
            return new Promise((resolve, reject) => {
                fetchData().then(res => {
                    commit('SET_DATA', { data: res.data })
                    resolve()
                })
            })
        },
        FETCH_GETCARD: ({ commit },params) => {
            return new Promise((resolve, reject) => {
                addCard(params).then(res => { 
                    var data=res.data.message;
                      data.num=1
                      data.ischeck=false;
                    commit('SET_CARDs', { data:data})
                    resolve()
                })
            })
        }
    }

})

export default store