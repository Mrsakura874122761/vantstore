var express = require('express');
var app = express();
var http = require('http')
var request = require('axios')
//cors解决跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5502");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
});
app.get('/api/getToken', function (req, res) {
    // console.log(123);
    let appid = "wxfd4d9879fa70c104"
    let secret = "5ba121a42a9b294d4bfcecb792e5192a"
    let that=this
    console.log(appid, secret, req.query.js_code);
    request.post(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${req.query.js_code}&grant_type=authorization_code`).then((rs) => { 
      console.log(rs);
      res.send({
        status: 0,
        msg: "test",
        data: rs.data
    });
       })



});
app.get('/api/getAwardlist', function (req, res) {
    var newgoods =[
        // 奖品列表
        {
          id: 1,
          runId: 0,
          name: "奖品1",
        },
        {
          id: 2,
          runId: 1,
          name: "奖品2",
        },
        {
          id: 3,
          runId: 2,
          name: "奖品3",
        },
        {
          id: 4,
          runId: 7,
          name: "奖品4",
        },
        {
          id: 5,
          runId: 3,
          name: "奖品5",
        },
        {
          id: 6,
          runId: 6,
          name: "奖品6",
        },
        {
          id: 7,
          runId: 5,
          name: "奖品7",
        },
        {
          id: 8,
          runId: 4,
          name: "奖品8",
        },
      ]
     setTimeout(()=>{
        res.send(newgoods);
     })
});
app.get('/goodslist', function (req, res) {

    var goodslist = [
        {
            url: "https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
            name: "新品首发"
        },
        {
            url: "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
            name: "居家生活"
        },
        {
            url: "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
            name: "服饰鞋包"
        },
        {
            url: "https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
            name: "美食酒水"
        },
        {
            url: "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
            name: "个护清洁"
        },
        {
            url: "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
            name: "母婴亲子"
        },
        {
            url: "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
            name: "运动旅游"
        },
        {
            url: "https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
            name: "好货抄底"
        },

    ];
    res.send(goodslist);
});
app.get('/swiper', function (req, res) {

    var swiperurl = [
        "https://yanxuan.nosdn.127.net/e8ba660c420dfcc4a8e07365b7ace17b.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/7c7bdf652f665b94f35495ac69347521.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/1e74cd59e8c7f34882056e9ec1fb14d0.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
    ];
    res.send(swiperurl);
});

app.listen(8888, function (req, res) { console.log('对接成功') });

