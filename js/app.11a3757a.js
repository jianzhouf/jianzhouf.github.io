(function(e){function n(n){for(var c,u,o=n[0],i=n[1],h=n[2],d=0,f=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},u={app:0},r={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0aa83d48":"57587a55","chunk-0c45b438":"0d4483d5","chunk-1007ea36":"2e108e79","chunk-454b250a":"698cd008","chunk-46dfd183":"83009212","chunk-4aa05e90":"979576a5","chunk-5286d543":"738781a0","chunk-690474e7":"e1ec3381","chunk-07b53f69":"f23dfda4","chunk-6e74193e":"952f0ba6","chunk-6f74fd7c":"ab9c69a7","chunk-7e2cbc8a":"00d03f8b","chunk-87c2b568":"8e122b98","chunk-a2218de4":"3e96391c","chunk-e44a0782":"1642b68e"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0aa83d48":1,"chunk-0c45b438":1,"chunk-1007ea36":1,"chunk-454b250a":1,"chunk-46dfd183":1,"chunk-4aa05e90":1,"chunk-5286d543":1,"chunk-690474e7":1,"chunk-07b53f69":1,"chunk-6e74193e":1,"chunk-6f74fd7c":1,"chunk-7e2cbc8a":1,"chunk-87c2b568":1,"chunk-a2218de4":1,"chunk-e44a0782":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0aa83d48":"d8ab2aa5","chunk-0c45b438":"4ab04a98","chunk-1007ea36":"04a62e96","chunk-454b250a":"18a8d133","chunk-46dfd183":"1fe4a493","chunk-4aa05e90":"ad728ec7","chunk-5286d543":"8b6fafee","chunk-690474e7":"2602f536","chunk-07b53f69":"6eb71bad","chunk-6e74193e":"1bac99cd","chunk-6f74fd7c":"10c0378f","chunk-7e2cbc8a":"55a99f2e","chunk-87c2b568":"45ab2a10","chunk-a2218de4":"e8e66e6f","chunk-e44a0782":"b00986d1"}[e]+".css",r=i.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===c||d===r))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){h=f[o],d=h.getAttribute("data-href");if(d===c||d===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete u[e],l.parentNode.removeChild(l),t(a)},l.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){u[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=a);var h,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var f=new Error;h=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+u+")",f.name="ChunkLoadError",f.type=c,f.request=u,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:d})}),12e4);d.onerror=d.onload=h,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],d=h.push.bind(h);h.push=n,h=h.slice();for(var f=0;f<h.length;f++)n(h[f]);var l=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"471a":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("77ad"),t("e35a"),t("5e9f"),t("a163");var c=t("79e7"),u=(t("9ce7"),t("43e4")),r=(t("697c"),t("84c2")),a=(t("d14b"),t("f15d")),o=(t("8f90"),t("5db7")),i=(t("7193"),t("531d")),h=(t("bded"),t("bbd6")),d=(t("9f0c"),t("84c9")),f=(t("cad9"),t("8df7")),l=(t("f53e"),t("b4ce")),p=(t("a133"),t("ed0d"),t("f09c"),t("e117"),t("0261")),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},b=[],k={name:"App",data:function(){return{histroyList:[]}},components:{},created:function(){}},m=k,v=(t("7c55"),t("4023")),g=Object(v["a"])(m,s,b,!1,null,null,null),y=g.exports,w=t("a18c");p["a"].use(l["a"]),p["a"].use(f["a"]),p["a"].use(d["a"]),p["a"].use(h["a"]),p["a"].use(i["a"]),p["a"].use(o["a"]),p["a"].use(a["a"]),p["a"].use(r["a"]),p["a"].use(u["a"]),p["a"].use(c["a"]),p["a"].config.productionTip=!1;var O=[];p["a"].prototype.myPush=function(e){O.push(e),console.log(O),this.$router.replace(e)},p["a"].prototype.myBack=function(){var e=O.length-2;if(e>=0){var n=O[e];O=O.slice(0,e+1),this.$router.replace(n)}},w["a"].beforeEach((function(e,n,t){0===O.length&&O.push(e),t()})),new p["a"]({router:w["a"],render:function(e){return e(y)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var c=t("471a"),u=t.n(c);u.a},a18c:function(e,n,t){"use strict";t.d(n,"b",(function(){return r}));t("b4fb"),t("e18c");var c=t("0261"),u=t("fe79");c["a"].use(u["a"]);var r=[{path:"/",component:function(){return t.e("chunk-5286d543").then(t.bind(null,"6076"))}},{path:"/end/word",component:function(){return t.e("chunk-690474e7").then(t.bind(null,"6f9b"))}},{path:"/end/exam",component:function(){return t.e("chunk-e44a0782").then(t.bind(null,"ddec"))}},{path:"/eg",component:function(){return t.e("chunk-6e74193e").then(t.bind(null,"857f"))}},{path:"/setting",component:function(){return t.e("chunk-1007ea36").then(t.bind(null,"ff38"))}},{path:"/setting/familiarWord",component:function(){return t.e("chunk-454b250a").then(t.bind(null,"c90b"))}},{path:"/setting/buyHistory",component:function(){return t.e("chunk-4aa05e90").then(t.bind(null,"9b00"))}},{path:"/introduceB",component:function(){return t.e("chunk-6f74fd7c").then(t.bind(null,"bbc9"))}},{path:"/movie",component:function(){return t.e("chunk-0c45b438").then(t.bind(null,"cf68"))}},{path:"/tool",component:function(){return t.e("chunk-87c2b568").then(t.bind(null,"a6c3"))}},{path:"/exam",component:function(){return t.e("chunk-7e2cbc8a").then(t.bind(null,"9bdc"))}},{path:"/word",component:function(){return t.e("chunk-a2218de4").then(t.bind(null,"9266"))}},{path:"/wordSimple",component:function(){return t.e("chunk-46dfd183").then(t.bind(null,"cda5"))}},{path:"/study",component:function(){return Promise.all([t.e("chunk-690474e7"),t.e("chunk-07b53f69")]).then(t.bind(null,"7a88"))}}],a=new u["a"]({routes:[].concat(r,[{path:"/nav",component:function(){return t.e("chunk-0aa83d48").then(t.bind(null,"7df2"))}}])});n["a"]=a}});