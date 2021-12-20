var express = require('express');
var app = express();
var http =require('http')

app.get('/tablist', function (req, res) {

    var tablist = [
        {
            name: "衣服",
            path: "/home/nenmo",
        },
        {
            name: "水果",
            path: "/home/fruits",
        },
        {
            name: "日常用品",
            path: "/home/sex",
        },
        {
            name: "游戏",
            path: "/home/game",
        },
        {
            name: "家电",
            path: "/home/dianqi",
        },
    ];
    res.send(tablist);
});
app.get('/newgoods', function (req, res) {
    
    var   newgoods=[
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自便携饮水机便携饮水机便携饮水机便携饮水机便携饮水机便携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自便携饮水机便携饮水机便携饮水机携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动停便携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动停止 携饮水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动停止 3水机",
            price:55.5,
            type:0
        },
        {
            url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",
            text:"折叠出水口可自动水机",
            price:55.5,
            type:0
        },

      ];
    res.send(newgoods);
});
app.get('/goodslist', function (req, res) {
    
    var   goodslist=[
        {
            url:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
            name:"新品首发"
        },
           {
            url:"https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
            name:"居家生活"
        },
          {
            url:"https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
            name:"服饰鞋包"
        },
          {
            url:"https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
            name:"美食酒水"
        },
        {
            url:"https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
            name:"个护清洁"
        },
           {
            url:"https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
            name:"母婴亲子"
        },
          {
            url:"https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
            name:"运动旅游"
        },
          {
            url:"https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
            name:"好货抄底"
        },
      
        ];
    res.send(goodslist);
});
app.get('/swiper', function (req, res) {
    
    var   swiperurl=[
      "https://yanxuan.nosdn.127.net/e8ba660c420dfcc4a8e07365b7ace17b.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/7c7bdf652f665b94f35495ac69347521.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/1e74cd59e8c7f34882056e9ec1fb14d0.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
       ];
    res.send(swiperurl);
});

app.listen(5555, function (req, res) { console.log('对接成功') });

