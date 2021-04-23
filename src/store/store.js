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
        order:[],
        sum:0,
        sums:0,

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
                 
        },
        SUMS:(state)=>{
            let sums=0;
            for(let i=0;i<state.order.length;i++){
                if(state.order[i].ischeck==true){
                      sums=sums+(state.order[i].goods_price*state.order[i].num)
                }
            }
            return sums*100
                 
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
       ORDER:(state)=>{
           let list=state.cardlists;
           console.log(state.cardlists.length);
        for(let i=0;i<state.cardlists.length;i++){
            if(state.cardlists[i].ischeck==true){
                  state.order.push(state.cardlists[i])
                  list.splice((i),1)
                  i= i-1
            }
        }
        state.cardlists=list
        console.log(state.order);
        console.log(state.cardlists);
       },
        DEL:(state)=>{
            let list=state.cardlists;
            console.log(state.cardlists.length);
         for(let i=0;i<state.cardlists.length;i++){
             if(state.cardlists[i].ischeck==true){
                   list.splice((i),1)
                   i= i-1
             }
         }
         state.cardlists=list
        },
        DELS:(state)=>{
            let list=state.order;
            console.log(state.order.length);
         for(let i=0;i<state.order.length;i++){
             if(state.order[i].ischeck==true){
                   list.splice((i),1)
                   i= i-1
             }
         }
            state.order=list
        }
     
          
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