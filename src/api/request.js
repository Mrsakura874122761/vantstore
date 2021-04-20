import request from '@/utils/request'

export function fetchData(){
   return request.get('/api/public/v1/home/swiperdata')
}
export function addCard(params){
   return request.get('/api/public/v1/goods/detail',{params})
}