(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6391577e"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7");function r(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,s,"next",t)}function s(t){r(i,a,o,c,s,"throw",t)}c(void 0)}))}}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new P(r||[]);return o._invoke=O(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",y={};function v(){}function m(){}function g(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(G([])));x&&x!==n&&r.call(x,o)&&(w=x);var _=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"===typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;function o(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function O(t,e,n){var r=p;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw o;return N()}n.method=a,n.arg=o;while(1){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){while(++a<t.length)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=_.constructor=g,g.constructor=m,m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new L(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),s(_,c,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:G(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},b100:function(t,e,n){"use strict";n("b604")},b604:function(t,e,n){},bfee:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.images.length>0?n("swiper",{ref:t.swiperOption,staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.images,(function(t,e){return n("swiper-slide",{key:e,staticClass:"Swiper"},[n("img",{staticClass:"img",attrs:{src:t.image_src,alt:""}})])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),n("van-row",{staticClass:"rowss",attrs:{type:"flex",justify:"center",align:"center"}},[n("van-col",{attrs:{span:"8"}},[n("van-icon",{attrs:{color:"#E57DE7",name:"star-o"}}),t._v("SAKURA品牌")],1),n("van-col",{attrs:{span:"8"}},[n("van-icon",{attrs:{color:"#E57DE7",name:"star-o"}}),t._v("3天内包邮退货")],1),n("van-col",{attrs:{span:"8"}},[n("van-icon",{attrs:{color:"#E57DE7",name:"star-o"}}),t._v("7天无理由退货")],1)],1),n("van-grid",t._l(t.goodslist,(function(t,e){return n("van-grid-item",{key:e,staticClass:"icons",attrs:{text:t.name,icon:t.url}})})),1),n("div",{staticClass:"more"},[n("h1",[t._v("新品首发")]),n("span",{on:{click:function(e){return t.more()}}},[t._v("更多>")])]),n("van-grid",{attrs:{"column-num":3,boder:!1,center:!1}},t._l(t.newgoods,(function(e,r){return n("van-grid-item",{key:r},[n("div",{staticClass:"goodsimg"},[n("img",{attrs:{src:e.url,alt:""}}),n("div",[t._v(t._s(e.text))]),n("div",{staticClass:"price"},[t._v("￥"+t._s(e.price))])])])})),1),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ft"},[n("div",{staticClass:"down"},[n("a",{staticClass:"button",attrs:{href:""}},[t._v("下载APP")]),n("a",{staticClass:"button",attrs:{href:""}},[t._v("电脑版")])]),n("p",[t._v("濠帅公司版权所有 © 1997-2021")]),n("p",[t._v("食品经营许可证：JY133010801117179")])])}],o=n("1da1"),i=(n("96cf"),{methods:{more:function(){}},name:"nenmo",mounted:function(){},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata");case 2:n=e.sent,r=n.data,200==r.meta.status?(t.images=r.message,console.log(t.images[0].image_src)):console.log("轮播图请求失败");case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{swiperOption:{observer:!0,observeParents:!0,loop:!0,autoplay:{delay:2e3},speed:1800,pagination:{el:".swiper-pagination",dynamicBullets:!0}},goodslist:[{url:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",name:"新品首发"},{url:"https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",name:"居家生活"},{url:"https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",name:"服饰鞋包"},{url:"https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",name:"美食酒水"},{url:"https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",name:"个护清洁"},{url:"https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",name:"母婴亲子"},{url:"https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",name:"运动旅游"},{url:"https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",name:"好货抄底"}],images:"",newgoods:[{url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",text:"折叠出水口可自便携饮水机便携饮水机便携饮水机便携饮水机便携饮水机便携饮水机",price:55.5,type:0},{url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",text:"折叠出水口可自便携饮水机便携饮水机便携饮水机携饮水机",price:55.5,type:0},{url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",text:"折叠出水口可自动停便携饮水机",price:55.5,type:0},{url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",text:"折叠出水口可自动停止 携饮水机",price:55.5,type:0},{url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",text:"折叠出水口可自动停止 3水机",price:55.5,type:0},{url:"https://yanxuan-item.nosdn.127.net/149ce48ad94eb6ef50c973b4794edc8b.png?type=webp&imageView&quality=65&thumbnail=330x330",text:"折叠出水口可自动水机",price:55.5,type:0}]}},components:{}}),c=i,s=(n("b100"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports}}]);