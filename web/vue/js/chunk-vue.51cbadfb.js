(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vue"],{2638:function(n,r,e){"use strict";function t(){return t=Object.assign||function(n){for(var r,e=1;e<arguments.length;e++)for(var t in r=arguments[e],r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t]);return n},t.apply(this,arguments)}var i=["attrs","props","domProps"],o=["class","style","directives"],a=["on","nativeOn"],s=function(n){return n.reduce((function(n,r){for(var e in r)if(n[e])if(-1!==i.indexOf(e))n[e]=t({},n[e],r[e]);else if(-1!==o.indexOf(e)){var s=n[e]instanceof Array?n[e]:[n[e]],f=r[e]instanceof Array?r[e]:[r[e]];n[e]=s.concat(f)}else if(-1!==a.indexOf(e))for(var p in r[e])if(n[e][p]){var u=n[e][p]instanceof Array?n[e][p]:[n[e][p]],l=r[e][p]instanceof Array?r[e][p]:[r[e][p]];n[e][p]=u.concat(l)}else n[e][p]=r[e][p];else if("hook"==e)for(var v in r[e])n[e][v]=n[e][v]?c(n[e][v],r[e][v]):r[e][v];else n[e]=r[e];else n[e]=r[e];return n}),{})},c=function(n,r){return function(){n&&n.apply(this,arguments),r&&r.apply(this,arguments)}};n.exports=s}}]);