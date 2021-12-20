import axios from 'axios'
const instance=axios.create({
        baseURL:"https://api-hmugo-web.itheima.net"
})
instance.interceptors.request.use(config=>{
        console.log(config);
})
export default instance