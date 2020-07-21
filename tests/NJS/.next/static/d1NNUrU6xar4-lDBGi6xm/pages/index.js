/*! For license information please see index.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Ht3s:function(t,e,n){!function(t,e,n){"use strict";var r="default"in e?e.default:e,c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var c in e=arguments[n])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}).apply(this,arguments)},o=function(t){for(var e=[],r=0,c=t;r<c.length;r++){var o=c[r];if(o instanceof n.Model)e.push(o.to().plain());else{console.log(o,o instanceof n.Model);var u=o();u instanceof n.Model?e.push(u.to().plain()):e.push(u)}}return JSON.stringify(e)},u=function(t){for(var e=0,n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e};t.connect=function(t){return void 0===t&&(t=[]),function(t,e){var r=e+"'s first parameter must be an Array of Model, Collection, or unexecuted getters.";if(!Array.isArray(t))throw new Error(r);for(var c=0;c<t.length;c++){var o=t[c];if(!(o instanceof n.Model)&&"function"!==typeof o)throw new Error("\n                "+r+"\n                Please check the "+(c+1)+(0==c?"st":1==c?"nd":"st")+" element of the Array. Currently typed as a : "+typeof o+".\n            ")}}(t,"connect"),function(a){return e.forwardRef((function(i,f){var l=e.useState(o(t)),s=l[0],d=l[1];return e.useEffect((function(){var e=s;n.manager.subscribers().add((function(){var n=o(t);e!=n&&(e=n,d(n))}))}),[]),r.createElement(a,c({},i,{__aceyTransitionID:u(s),ref:f}))}))}},t.useAcey=function(t){void 0===t&&(t=[]);var r=e.useState(o(t)),c=r[0],u=r[1];e.useEffect((function(){var e=c;n.manager.subscribers().add((function(){var n=o(t);e!=n&&(e=n,u(n))}))}),[])},Object.defineProperty(t,"__esModule",{value:!0})}(e,n("q1tI"),n("6b8u"))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return x}));var r=n("1OyB"),c=n("JX7q"),o=n("Ji7U"),u=n("md7G"),a=n("foSv"),i=n("rePB"),f=n("q1tI"),l=n.n(f),s=n("Ht3s"),d=n("6b8u");function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var b=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{counter:0},u=arguments.length>1?arguments[1]:void 0;return Object(r.a)(this,n),t=e.call(this,o,u),Object(i.a)(Object(c.a)(t),"get",(function(){return t.state.counter})),Object(i.a)(Object(c.a)(t),"increment",(function(){return t.setState({counter:t.get()+1}).save()})),Object(i.a)(Object(c.a)(t),"decrement",(function(){return t.setState({counter:t.get()-1}).save()})),t}return n}(d.Model);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var p={content:"",id:0,counter:{counter:0}},O=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,u=arguments.length>1?arguments[1]:void 0;return Object(r.a)(this,n),t=e.call(this,o,u),Object(i.a)(Object(c.a)(t),"counter",(function(){return t.state.counter})),Object(i.a)(Object(c.a)(t),"content",(function(){return t.state.content})),Object(i.a)(Object(c.a)(t),"ID",(function(){return t.state.id})),t.setState({counter:new b(o.counter,t.kids())}),t}return n}(d.Model);function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var y=function(t){Object(o.a)(n,t);var e=j(n);function n(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;return Object(r.a)(this,n),t=e.call(this,o,[O,n],u),Object(i.a)(Object(c.a)(t),"add",(function(){return t.push({content:Math.random().toString(),id:Math.random()}).save()})),Object(i.a)(Object(c.a)(t),"deleteLast",(function(){return t.deleteIndex(t.count()-1).save()})),Object(i.a)(Object(c.a)(t),"deleteFirst",(function(){return t.deleteIndex(0).save()})),Object(i.a)(Object(c.a)(t),"toZZZLast",(function(){return t.nodeAt(t.count()-1).setState({content:"ZZZ",id:"ZZZ"}).save()})),t}return n}(d.Collection);function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var g={first_name:"",counter:0},R=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,u=arguments.length>1?arguments[1]:void 0;return Object(r.a)(this,n),t=e.call(this,o,u),Object(i.a)(Object(c.a)(t),"counter",(function(){return t.state.counter})),Object(i.a)(Object(c.a)(t),"todolist",(function(){return t.state.todolist})),Object(i.a)(Object(c.a)(t),"firstName",(function(){return t.state.first_name})),t.setState({counter:new b({counter:o.counter},t.kids()),todolist:new y([],t.kids())}).save(),t}return n}(d.Model),w=new b(void 0,{connected:!0,key:"counter"}),S=new R(void 0,{connected:!0,key:"user"}),k=new y([],{connected:!0,key:"todolist"}),D=l.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var Z="store",C=function(t){Object(o.a)(n,t);var e=_(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return t=e.call.apply(e,[this].concat(u)),Object(i.a)(Object(c.a)(t),"render",(function(){return D("p",null," connected class: ",S.counter().get()," ")})),t}return n}(l.a.Component),P=Object(s.connect)([S])(C);var x=!0;e.default=function(t){var e=[k,S.todolist()],n=[w,S.counter()];Object(s.useAcey)([w,k,S]);var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t.forEach((function(t){var r=t[e]();n&&r[n]()}))};return D("div",{className:"container"},D("h1",null,t.id),D("button",{onClick:function(){k.localStore().remove(),w.localStore().remove(),S.localStore().remove(),location.reload()}},"clear local stores"),D("br",null),D("br",null),D(P,null),D("br",null),D("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r(n,"decrement",t);var c=[];e.map((function(t){return t.map((function(t){return c.push(t.counter())}))})),r(c,"decrement",t)}(Z)}},"decrement"),n.map((function(t,e){return D("span",{style:{marginLeft:10,marginRight:10},key:e},t.get())})),D("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r(n,"increment",t);var c=[];e.map((function(t){return t.map((function(t){return c.push(t.counter())}))})),r(c,"increment",t)}(Z)}},"increment"),D("br",null),D("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r(e,"add",t)}(Z)}},"Add element"),D("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r(e,"deleteFirst",t)}(Z)}},"Del 1st element"),D("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r(e,"deleteLast",t)}(Z)}},"Del last element"),D("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r(e,"toZZZLast",t)}(Z)}},"ToZZ last"),D("div",null,e.map((function(t,e){return D("div",{key:e},D("h1",null,"Todolist ",e),t.map((function(t,e){return D("div",{key:e},D("span",null,t.content()),D("span",null," : "),D("span",null,t.ID()),D("span",null," = "),D("span",{style:{color:"red"}},t.counter().get()))})))}))))}},"m0L+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["m0L+",0,1,4,3]]]);