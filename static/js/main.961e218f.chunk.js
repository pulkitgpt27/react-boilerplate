(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{19:function(t,e,n){"use strict";e.a={apiRoutes:{fetchPost:"https://jsonplaceholder.typicode.com/todos/"},routes:{homePage:"/homePage",login:"/login",postPage:"/postPage",lazyImage:"/lazyimage",noMatch:"*"}}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return i}));var r,c=n(42),a=n(18);!function(t){t.FETCH_POST_REQUEST="FETCH_POST_REQUEST",t.FETCH_POST_SUCCESS="FETCH_POST_SUCCESS",t.FETCH_POST_FAILURE="FETCH_POST_FAILURE"}(r||(r={}));var u=function(t){return{type:r.FETCH_POST_REQUEST,payload:t}},o=function(t){return{type:r.FETCH_POST_SUCCESS,payload:t}},i=function(t){return{type:r.FETCH_POST_FAILURE,payload:t}},s={posts:[],error:null,postLoading:null};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.FETCH_POST_REQUEST:return Object(a.a)(Object(a.a)({},t),{},{pending:!0});case r.FETCH_POST_SUCCESS:var n=Object(c.a)(t.posts);return n.push(e.payload),Object(a.a)(Object(a.a)({},t),{},{posts:n,postLoading:!1,error:null});case r.FETCH_POST_FAILURE:return Object(a.a)(Object(a.a)({},t),{},{error:e.payload.error});default:return Object(a.a)({},t)}}},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),c=n(25),a={signIn:function(t){setTimeout(t,100)},signOut:function(t){setTimeout(t,100)}},u=function(){var t=Object(r.useState)(null),e=Object(c.a)(t,2),n=e[0],u=e[1];return{user:n,signIn:function(t){a.signIn((function(){u("foo"),t()}))},signOut:function(t){a.signOut((function(){u(null),t()}))}}},o=n(5),i=Object(r.createContext)(null);e.b=function(t){var e=t.children,n=u();return Object(o.jsx)(i.Provider,{value:n,children:e})}},38:function(t,e,n){"use strict";function r(t){return t.text().then((function(e){return t.ok?e:Promise.reject({status:t.status,statusText:t.statusText,err:e})}))}function c(t){var e=t.headers.get("content-type");if(e.includes("application/json"))return function(t){return t.json().then((function(e){return t.ok?e:Promise.reject(Object.assign({},e,{status:t.status,statusText:t.statusText}))}))}(t);if(e.includes("text/html"))return r(t);if(e.includes("text/plain"))return r(t);if(null===e)return Promise.resolve(null);throw new Error("Sorry, content-type ".concat(e," not supported"))}n.d(e,"a",(function(){return a}));var a=function(t){return fetch(t,{}).then(c).then((function(t){return t})).catch((function(t){return t}))}},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var r=n(0),c=n(35),a=n(7),u=n(19),o=n(5),i=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,62))})),s=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,67))})),l=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,63))})),f=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,64))})),O=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,65))})),b=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,68))})),d=function(){return Object(o.jsx)(c.a,{children:Object(o.jsxs)(a.d,{children:[Object(o.jsx)(a.b,{path:u.a.routes.homePage,children:Object(o.jsx)(l,{})}),Object(o.jsx)(a.b,{path:u.a.routes.login,children:Object(o.jsx)(O,{})}),Object(o.jsx)(a.b,{path:u.a.routes.lazyImage,children:Object(o.jsx)(s,{})}),Object(o.jsx)(b,{path:u.a.routes.postPage,children:Object(o.jsx)(i,{})}),Object(o.jsx)(a.b,{path:u.a.routes.noMatch,component:f})]})})},j=n(36),p=n(21),h=n(25),T=n(41),x=n(9);n(55);var v=function(t){var e=Object(r.useState)(!0),n=Object(h.a)(e,2),c=n[0],a=n[1];return Object(o.jsx)(T.a,{className:"wrapper",show:c,variant:function(t){switch(t){case x.a.Success:return"success";case x.a.Warning:return"warning";case x.a.Error:return"danger";case x.a.Info:default:return"info"}}(t.notification.level),onClose:function(){return a(!1),void t.onClose()},dismissible:!0,children:t.notification.message},t.notification.id)};n(56);var g=function(t){var e=Object(p.c)(Object(x.d)()).filter((function(e,n){return n<t.maxAlerts})),n=Object(p.b)(),r=function(t){n(Object(x.e)(t.id))};return Object(o.jsx)("div",{className:"notificationQueue",children:e.reverse().map((function(t){return Object(o.jsx)(v,{notification:t,onClose:function(){return r(t)},onHide:function(){return r(t)}},t.id)}))})},E={id:1,name:"Pulkit"},S=Object(r.createContext)(null);e.b=function(){return Object(o.jsxs)(r.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading..."}),children:[Object(o.jsx)(g,{maxAlerts:3}),Object(o.jsx)(S.Provider,{value:E,children:Object(o.jsx)(j.b,{children:Object(o.jsx)(d,{})})})]})}},51:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(16),u=n.n(a),o=n(21),i=(n(51),n(39)),s=function(t){t&&t instanceof Function&&n.e(9).then(n.bind(null,66)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),a(t),u(t)}))},l=n(17),f=n(40),O=n(43),b=n(15),d=n.n(b),j=n(11),p=n(20),h=n(38),T=n(19),x=n(9),v=d.a.mark(S),g=d.a.mark(I),E=d.a.mark(C);function S(t){var e,n;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(j.b)(h.a,"".concat(T.a.apiRoutes.fetchPost,"/").concat(t.payload.postId));case 3:if(e=r.sent,console.log("res",e),!(e&&e.status&&e.status>300)){r.next=12;break}return r.next=8,Object(j.d)(Object(x.b)("Unable to fetch post",x.a.Error));case 8:return r.next=10,Object(j.d)(p.c({error:"".concat(e.status)}));case 10:r.next=14;break;case 12:return r.next=14,Object(j.d)(p.e(e));case 14:r.next=25;break;case 16:return r.prev=16,r.t0=r.catch(0),n=r.t0.message?r.t0.message.toString():"",r.next=21,Object(j.d)(Object(x.b)(n,x.a.Error));case 21:return r.next=23,Object(j.d)(p.c({error:r.t0}));case 23:return r.next=25,console.log(r.t0);case 25:case"end":return r.stop()}}),v,null,[[0,16]])}function I(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.e)(p.a.FETCH_POST_REQUEST,S);case 2:case"end":return t.stop()}}),g)}function C(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)([Object(j.c)(I)]);case 2:case"end":return t.stop()}}),E)}var _=d.a.mark(m);function m(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)([Object(j.c)(C)]);case 2:case"end":return t.stop()}}),_)}var F=Object(l.combineReducers)({posts:p.b,notifications:x.c}),P=function(t,e){return F(t,e)},y=Object(O.a)(),A=Object(l.createStore)(P,Object(f.composeWithDevTools)(Object(l.applyMiddleware)(y)));y.run(m);var N=A,R=n(5);u.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(o.a,{store:N,children:Object(R.jsx)(i.b,{})})}),document.getElementById("root")),s()},9:function(t,e,n){"use strict";var r,c;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return s})),function(t){t.Success="SUCCESS",t.Error="ERROR",t.Warning="WARNING",t.Info="INFO"}(r||(r={})),function(t){t.ADD_NOTIFICATION="ADD_NOTIFICATION",t.TOGGLE_NOTIFICATION_READ="TOGGLE_NOTIFICATION_READ"}(c||(c={}));var a=function(t,e){return{type:c.ADD_NOTIFICATION,errorMessage:t,level:e}},u=function(t){return{type:c.TOGGLE_NOTIFICATION_READ,id:t}},o=[],i=0,s=function(){return function(t){return t.notifications.filter((function(t){return!t.read}))}};e.c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.ADD_NOTIFICATION:var n={id:""+i++,message:e.errorMessage,level:e.level,read:!1};return t.push(n),t;case c.TOGGLE_NOTIFICATION_READ:var r=t.map((function(t){return t.id===e.id&&(t.read=!t.read),t}));return r;default:return o}}}},[[58,1,2]]]);
//# sourceMappingURL=main.961e218f.chunk.js.map