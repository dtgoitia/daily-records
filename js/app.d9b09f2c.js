(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/daily-records/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"17bf":function(e,t,n){},"234e":function(e,t,n){},"241b":function(e,t,n){},"362b":function(e,t,n){"use strict";var o=n("241b"),r=n.n(o);r.a},4178:function(e,t,n){"use strict";var o=n("17bf"),r=n.n(o);r.a},"4bd8":function(e,t,n){},5127:function(e,t,n){},5674:function(e,t,n){"use strict";var o=n("234e"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{click:e.updateLocalStorage}},[n("Push"),n("div",{staticClass:"days"},e._l(e.records,function(t,o){return n("Day",{key:t.date,attrs:{dayData:t,showLabels:o===e.records.length-1}})}),1)],1)},a=[],c=n("f499"),i=n.n(c),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"day"},[n("DayDate",{attrs:{date:e.dayData.date}}),n("div",{staticClass:"record-container"},e._l(e.dayData.record,function(t,o,r){return n("RecordItem",{key:r+"-"+o,attrs:{name:o,checked:t,showLabels:e.showLabels},on:{"toggle-check":e.toggleCheck}})}),1),n("DayLock",{attrs:{locked:e.locked},on:{"toggle-lock":e.toggleLock}})],1)},l=[],u=(n("7f7f"),n("0a0d")),d=n.n(u),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"date"},[n("div",{staticClass:"day"},[e._v(e._s(e.getDay()))]),n("div",{staticClass:"month"},[e._v(e._s(e.getMonth()))])])},h=[],p={name:"DayDate",props:{date:String},computed:{months:function(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},currentDate:function(){return new Date(this.date)}},methods:{getMonth:function(){return this.months[this.currentDate.getMonth()]},getDay:function(){return this.currentDate.getDate()}}},g=p,v=(n("e09c"),n("2877")),m=Object(v["a"])(g,f,h,!1,null,"5e4ab7d3",null),b=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.locked?n("div",{staticClass:"lock-container",on:{click:function(t){return e.$emit("toggle-lock")}}},[n("svg",{staticClass:"lock locked",attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}})])]):n("div",{staticClass:"lock-container",on:{click:function(t){return e.$emit("toggle-lock")}}},[n("svg",{staticClass:"lock open",attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}})])])},D=[],k={name:"DayLock",props:{locked:Boolean}},w=k,_=(n("4178"),Object(v["a"])(w,y,D,!1,null,"8e6becd6",null)),C=_.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.getClass(),on:{click:function(t){return e.$emit("toggle-check",e.name)}}},[n("div",{staticClass:"square"},[e._v(" ")]),e.showLabels?n("div",{staticClass:"label"},[e._v("\n    "+e._s(this.getContent())+"\n  ")]):e._e()])},O=[],j={name:"RecordItem",props:{name:String,checked:Boolean,showLabels:Boolean},methods:{getClass:function(){return this.checked?"record-item checked":"record-item"},getContent:function(){return this.name.length>0?this.name:"&nbsp;"}}},x=j,P=(n("362b"),Object(v["a"])(x,S,O,!1,null,"4f7e4448",null)),z=P.exports,L=864e5,E={name:"Day",props:{dayData:Object,showLabels:Boolean},data:function(){return{locked:Date.parse(this.dayData.date)<d()()-L}},computed:{is_past:function(){return Date.parse(this.dayData.date)<d()()-L}},methods:{toggleLock:function(){this.locked=!this.locked},toggleCheck:function(e){this.locked||(this.dayData.record[e]=!this.dayData.record[e])}},components:{DayDate:b,DayLock:C,RecordItem:z}},M=E,N=(n("5674"),Object(v["a"])(M,s,l,!1,null,"f495e0e4",null)),T=N.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"push"},on:{click:e.showNotification}},[e._v("\n  Click me to get a push notification!\n")])},$=[],R={name:"Push",methods:{showNotification:function(){Notification.requestPermission(function(e){"granted"===e&&navigator.serviceWorker.ready.then(function(e){e.showNotification("Vibration Sample",{body:"Buzz! Buzz!",icon:"./assets/logo.png",vibrate:[200,100,200,100,200,100,200],tag:"vibration-sample"})})})}}},V=R,A=(n("7066"),Object(v["a"])(V,B,$,!1,null,null,null)),J=A.exports,U=864e5,q={name:"app",data:function(){return{appTitle:"Daily records",records:[{date:"2019-02-04T20:06:27.827Z",record:{backPain:!1,allergy:!1,irritatedEyes:!1,mugs:!1,phlegm:!1,throatPain:!1,soreness:!1,sternumPain:!1}}],recordsStart:new Date(Date.UTC(2019,2,1))}},methods:{addDay:function(e){var t={date:e.toISOString(),record:{backPain:!1,allergy:!1,irritatedEyes:!1,mugs:!1,phlegm:!1,throatPain:!1,soreness:!1,sternumPain:!1}};this.records.push(t)},addRequiredRecords:function(){var e=new Date,t=this.sanitizeDate(e),n=new Date(Date.parse(this.records[this.records.length-1].date)),o=this.sanitizeDate(n);while(o<t){var r=this.nextDay(o),a=this.sanitizeDate(r);this.addDay(a),o=r}},nextDay:function(e){return new Date(e.getTime()+U)},sanitizeDate:function(e){return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()))},updateLocalStorage:function(){localStorage.records=i()(this.records)}},mounted:function(){localStorage.records&&void 0!==localStorage.records&&(this.records=JSON.parse(localStorage.records)),this.addRequiredRecords()},watch:{records:function(e){e&&(localStorage.records=i()(this.records))}},components:{Day:T,Push:J}},F=q,H=(n("034f"),Object(v["a"])(F,r,a,!1,null,null,null)),I=H.exports,W=n("9483"),Y="/daily-records/";Object(W["a"])("".concat(Y,"service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.dir(Object({NODE_ENV:"production",BASE_URL:"/daily-records/"})),console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(I)}}).$mount("#app")},"64a9":function(e,t,n){},7066:function(e,t,n){"use strict";var o=n("4bd8"),r=n.n(o);r.a},e09c:function(e,t,n){"use strict";var o=n("5127"),r=n.n(o);r.a}});
//# sourceMappingURL=app.d9b09f2c.js.map