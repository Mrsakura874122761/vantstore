import axios from 'axios'
const instance=axios.create({
        baseURL:"https://api-hmugo-web.itheima.net"
})
export default instance