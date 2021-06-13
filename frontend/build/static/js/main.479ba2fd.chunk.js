(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{368:function(e,t,n){},395:function(e,t){},397:function(e,t){},425:function(e,t){},426:function(e,t){},540:function(e,t){},542:function(e,t){},570:function(e,t){},572:function(e,t){},573:function(e,t){},578:function(e,t){},580:function(e,t){},586:function(e,t){},588:function(e,t){},607:function(e,t){},619:function(e,t){},622:function(e,t){},795:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(46),a=n.n(r),s=n(15),o=n(110),i=n(348),l=n(349),j=n(69),u="USER_LOGIN_REQUEST",d="USER_LOGIN_SUCCESS",h="USER_LOGIN_FAIL",b="USER_LOGOUT",O="USER_REGISTER_REQUEST",p="USER_REGISTER_SUCCESS",x="USER_REGISTER_FAIL",m="USER_LIST_REQUEST",f="USER_LIST_SUCCESS",g="USER_LIST_FAIL",y="USER_LIST_RESET",S="USER_DETAILS_REQUEST",E="USER_DETAILS_SUCCESS",v="USER_DETAILS_FAIL",C="USER_DETAILS_RESET",k="CUSTOMER_LIST_REQUEST",I="CUSTOMER_LIST_SUCCESS",T="CUSTOMER_LIST_FAIL",L="CUSTOMER_LIST_RESET",_="CUSTOMER_DELETE_REQUEST",R="CUSTOMER_DELETE_SUCCESS",U="CUSTOMER_DELETE_FAIL",w="CUSTOMER_DETAILS_REQUEST",N="CUSTOMER_DETAILS_SUCCESS",A="CUSTOMER_DETAILS_FAIL",D="CUSTOMER_DETAILS_RESET",G="CUSTOMER_UPDATE_REQUEST",M="CUSTOMER_UPDATE_SUCCESS",P="CUSTOMER_UPDATE_FAIL",F="CUSTOMER_UPDATE_RESET",Q="CUSTOMER_CREATE_REQUEST",V="CUSTOMER_CREATE_SUCCESS",z="CUSTOMER_CREATE_FAIL",B="CUSTOMER_CREATE_RESET",J=Object(o.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0};case d:return{loading:!1,userInfo:t.payload};case h:return{loading:!1,error:t.payload};case b:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0};case p:return{loading:!1,userInfo:t.payload};case x:return{loading:!1,error:t.payload};case b:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case E:return{loading:!1,user:t.payload};case v:return{loading:!1,error:t.payload};case C:return{user:{}};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0};case f:return{loading:!1,user:t.payload};case g:return{loading:!1,error:t.payload};case y:return{users:[]};default:return e}},customerList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{customers:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0,customers:[]};case I:return{loading:!1,customers:t.payload};case T:return{loading:!1,error:t.payload};case L:return{};default:return e}},customerDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(j.a)({loading:!0},e);case R:return{loading:!1,success:!0};case U:return{loading:!1,error:t.payload};default:return e}},customerCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return{loading:!0};case V:return{loading:!1,success:!0,customer:t.payload};case z:return{loading:!1,error:t.payload};case B:return{};default:return e}},customerDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{customer:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case N:return{loading:!1,customer:t.payload};case A:return{loading:!1,error:t.payload};case D:return{};default:return e}},customerUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{customer:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return{loading:!0};case M:return{loading:!1,success:!0};case P:return{loading:!1,error:t.payload};case F:return{customer:{}};default:return e}}}),H={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):localStorage.clear()}},W=[i.a],q=Object(o.createStore)(J,H,Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,W))),K=(n(368),n(45)),X=n(20),Y=n(800),Z=n(17),$=n(805),ee=n(351),te=n(801),ne=n(350),ce=n(2),re=function(e){var t=e.children;return Object(ce.jsx)(Y.a,{children:Object(ce.jsx)(te.a,{className:"justify-content-md-center",children:Object(ce.jsx)(ne.a,{ms:12,md:6,children:t})})})},ae=n(21),se=n.n(ae),oe=n(41),ie=n(42),le=n.n(ie),je=function(e){var t=e.location,n=e.history,r=Object(c.useState)(""),a=Object(Z.a)(r,2),o=a[0],i=a[1],l=Object(c.useState)(""),j=Object(Z.a)(l,2),b=j[0],O=j[1],p=Object(s.b)(),x=Object(s.c)((function(e){return e.userLogin})).userInfo,m=t.search?t.search.split("=")[2]:"/customer";Object(c.useEffect)((function(){x&&n.push(m)}),[n,x,m]);return Object(ce.jsxs)(re,{children:[Object(ce.jsx)("br",{}),Object(ce.jsx)("h2",{children:"Sign In"}),Object(ce.jsxs)($.a,{onSubmit:function(e){e.preventDefault(),p(function(e,t){return function(){var n=Object(oe.a)(se.a.mark((function n(c){var r,a,s;return se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:u}),r={headers:{"Content-Type":"application/json"}},n.next=5,le.a.post("/api/users/login",{email:e,password:t},r);case 5:a=n.sent,s=a.data,c({type:d,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),c({type:h,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(o,b))},children:[Object(ce.jsxs)($.a.Group,{controlId:"email",children:[Object(ce.jsx)($.a.Label,{children:"Email Address"}),Object(ce.jsx)($.a.Control,{type:"email",placeholder:"Enter email",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"password",children:[Object(ce.jsx)($.a.Label,{children:"Password Address"}),Object(ce.jsx)($.a.Control,{type:"password",placeholder:"Enter password",value:b,onChange:function(e){return O(e.target.value)}})]}),Object(ce.jsx)(ee.a,{type:"submit",variant:"primary",children:"Sign In"}),Object(ce.jsx)(te.a,{className:"py-3",children:Object(ce.jsxs)(ne.a,{children:["New User? \xa0",Object(ce.jsx)(K.Link,{to:m?"/register?redirect=".concat(m):"/register",children:"Register"})]})})]})]})},ue=function(e){var t=e.location,n=e.history,r=Object(c.useState)(""),a=Object(Z.a)(r,2),o=a[0],i=a[1],l=Object(c.useState)(""),j=Object(Z.a)(l,2),u=j[0],h=j[1],b=Object(c.useState)(""),m=Object(Z.a)(b,2),f=m[0],g=m[1],y=Object(c.useState)(""),S=Object(Z.a)(y,2),E=S[0],v=S[1],C=Object(s.b)(),k=Object(s.c)((function(e){return e.userRegister})).userInfo,I=t.search?t.search.split("=")[1]:"/";Object(c.useEffect)((function(){k&&n.push(I)}),[n,k,I]);return Object(ce.jsxs)(re,{children:[Object(ce.jsx)("br",{}),Object(ce.jsx)("h2",{children:"Register"}),Object(ce.jsxs)($.a,{onSubmit:function(e){e.preventDefault(),f!==E&&alert("Password do not match"),C(function(e,t,n){return function(){var c=Object(oe.a)(se.a.mark((function c(r){var a,s,o;return se.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r({type:O}),a={headers:{"Content-Type":"application/json"}},c.next=5,le.a.post("/api/users",{name:e,email:t,password:n},a);case 5:s=c.sent,o=s.data,r({type:p,payload:o}),r({type:d,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),r({type:x,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 15:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()}(o,u,f))},children:[Object(ce.jsxs)($.a.Group,{controlId:"name",children:[Object(ce.jsx)($.a.Label,{children:"Name"}),Object(ce.jsx)($.a.Control,{type:"name",placeholder:"Enter name",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"email",children:[Object(ce.jsx)($.a.Label,{children:"Email Address"}),Object(ce.jsx)($.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"password",children:[Object(ce.jsx)($.a.Label,{children:"Password "}),Object(ce.jsx)($.a.Control,{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"confirmpassword",children:[Object(ce.jsx)($.a.Label,{children:"Confirm Password"}),Object(ce.jsx)($.a.Control,{type:"password",placeholder:"Confirm password",value:E,onChange:function(e){return v(e.target.value)}})]}),Object(ce.jsx)(ee.a,{type:"submit",variant:"primary",children:"Register"}),Object(ce.jsx)(te.a,{className:"py-3",children:Object(ce.jsx)(ne.a,{children:Object(ce.jsx)(K.Link,{to:I?"/?redirect=".concat(I):"/",children:"Sign In"})})})]})]})},de=n(33),he=n(804),be=n(806),Oe=n(803),pe=(n(205),function(e){var t=e.history,n=Object(s.b)(),c=Object(s.c)((function(e){return e.userLogin})).userInfo;return Object(ce.jsx)("header",{children:Object(ce.jsx)(he.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(ce.jsxs)(Y.a,{children:[Object(ce.jsx)(de.LinkContainer,{to:"/customer",children:Object(ce.jsx)(he.a.Brand,{children:"MyWork"})}),Object(ce.jsx)(he.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(ce.jsx)(he.a.Collapse,{id:"basic-navbar-nav",children:Object(ce.jsxs)(be.a,{className:"ml-auto",children:[c?Object(ce.jsx)(Oe.a,{title:c.name,id:"username",children:Object(ce.jsx)(de.LinkContainer,{to:"/customer",children:Object(ce.jsx)(Oe.a.Item,{children:"Customer"})})}):Object(ce.jsx)(de.LinkContainer,{to:"/",children:Object(ce.jsxs)(be.a.Link,{children:[Object(ce.jsx)("i",{className:"fa fa-sign-in"})," Sign In"]})}),c?Object(ce.jsxs)(be.a.Link,{onClick:function(){n((function(e){localStorage.removeItem("userInfo"),localStorage.removeItem("customerInfo"),e({type:b}),e({type:C}),e({type:y}),e({type:L}),e({type:D}),document.location.href="/"})),t.push("/")},children:[Object(ce.jsx)("i",{className:"fa fa-sign-in"})," Logout"]}):null]})})]})})})}),xe=n(802),me=function(e){return function(){var t=Object(oe.a)(se.a.mark((function t(n,c){var r,a,s,o,i,l;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:w}),r=c(),a=r.userLogin.userInfo,s={headers:{Authorization:"Pah ".concat(a.token)}},t.next=6,le.a.get("/api/customers/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:N,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorizated, token fail"===(l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&n({type:A,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},fe=function(e){var t=e.history,n=Object(s.b)(),r=Object(s.c)((function(e){return e.customerList})).customers,a=Object(s.c)((function(e){return e.userLogin})).userInfo,o=Object(s.c)((function(e){return e.customerDelete})).success;Object(c.useEffect)((function(){n(function(){var e=Object(oe.a)(se.a.mark((function e(t){var n,c,r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:k}),e.next=4,le.a.get("/api/customers");case 4:n=e.sent,c=n.data,t({type:I,payload:c}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),'"CAN\'T SHOW CUSTOMER IN DATABASE "'===(r=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message)&&t({type:T,payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[n,t,a,o]);var i=function(e){window.confirm("\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48")&&n(function(e){return function(){var t=Object(oe.a)(se.a.mark((function t(n,c){var r,a,s,o;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:_}),r=c(),a=r.userLogin.userInfo,s={headers:{Authorization:"Pah ".concat(a.token)}},t.next=6,le.a.delete("/api/customers/".concat(e),s);case 6:n({type:R}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),"Not authorizated , token failed"===(o=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&n({type:U,payload:o});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()}(e))};return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)("br",{}),Object(ce.jsxs)(te.a,{children:[Object(ce.jsx)(ne.a,{className:"md-4 ",children:Object(ce.jsx)("h1",{children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})}),Object(ce.jsx)(ne.a,{className:"md-4 text-right",children:Object(ce.jsx)(de.LinkContainer,{to:"/customer/add",children:Object(ce.jsxs)(ee.a,{className:"my-3",children:[Object(ce.jsx)("i",{className:"fa fa-plus"})," Create Product"]})})})]}),Object(ce.jsx)("br",{}),a&&a.isAdmin?Object(ce.jsx)(te.a,{children:Object(ce.jsx)(ne.a,{children:Object(ce.jsxs)(xe.a,{bordered:!0,responsive:!0,hover:!0,className:"table-lg",children:[Object(ce.jsx)("thead",{children:Object(ce.jsxs)("tr",{children:[Object(ce.jsx)("th",{children:"Id"}),Object(ce.jsx)("th",{children:"Name"}),Object(ce.jsx)("th",{children:"Email"}),Object(ce.jsx)("th",{children:"Phone"}),Object(ce.jsx)("th",{children:"House"}),Object(ce.jsx)("th",{children:"Description"}),Object(ce.jsx)("th",{children:"User"}),Object(ce.jsx)("th",{children:"Date"}),Object(ce.jsx)("th",{children:"Update time"}),Object(ce.jsx)("th",{children:"Edit"}),Object(ce.jsx)("th",{children:"Delete"}),Object(ce.jsx)("th",{children:"PDF"}),Object(ce.jsx)("th",{children:"Status"})]})}),Object(ce.jsx)("tbody",{children:r.map((function(e){return Object(ce.jsxs)("tr",{children:[Object(ce.jsx)("td",{children:Object(ce.jsx)(K.Link,{to:"/customer/".concat(e._id),children:e._id})}),Object(ce.jsx)("td",{children:e.name}),Object(ce.jsx)("td",{children:e.email}),Object(ce.jsx)("td",{children:e.phone}),Object(ce.jsx)("td",{children:e.house}),Object(ce.jsx)("td",{children:e.description}),Object(ce.jsx)("td",{children:e.user.name}),Object(ce.jsx)("td",{children:e.createdAt.substring(0,10)}),Object(ce.jsx)("td",{children:e.updatedAt.substring(0,10)}),Object(ce.jsx)("td",{children:Object(ce.jsx)(de.LinkContainer,{to:"/customer/".concat(e._id,"/edit"),children:Object(ce.jsx)(ee.a,{variant:"light",className:"btn-sm",children:Object(ce.jsx)("i",{className:"fa fa-edit"})})})}),Object(ce.jsx)("td",{children:Object(ce.jsx)(ee.a,{variant:"danger",className:"btn-sm",onClick:function(){return i(e._id)},children:Object(ce.jsx)("i",{className:"fa fa-trash"})})}),Object(ce.jsx)("td",{children:Object(ce.jsx)(de.LinkContainer,{to:"/customer/".concat(e._id,"/pdf"),children:Object(ce.jsx)(ee.a,{variant:"dark",className:"btn-sm",children:Object(ce.jsx)("i",{className:"fa fa-file-pdf-o"})})})}),Object(ce.jsxs)("td",{children:[e.status1?Object(ce.jsx)("i",{className:"fa fa-check",style:{color:"yellow"},children:"\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08"}):null,e.status2?Object(ce.jsx)("i",{className:"fa fa-check",style:{color:"orange"},children:"\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32"}):null,e.status3?Object(ce.jsx)("i",{className:"fa fa-check",style:{color:"green"},children:"\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34"}):null,e.status4?Object(ce.jsx)("i",{className:"fa fa-times",style:{color:"red"},children:"\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18"}):null]})]},e._id)}))})]})})}):Object(ce.jsx)(te.a,{children:Object(ce.jsx)(ne.a,{children:Object(ce.jsxs)(xe.a,{bordered:!0,responsive:!0,hover:!0,className:"table-lg",children:[Object(ce.jsx)("thead",{children:Object(ce.jsxs)("tr",{children:[Object(ce.jsx)("th",{children:"Id"}),Object(ce.jsx)("th",{children:"Name"}),Object(ce.jsx)("th",{children:"Email"}),Object(ce.jsx)("th",{children:"Phone"}),Object(ce.jsx)("th",{children:"House"}),Object(ce.jsx)("th",{children:"Description"}),Object(ce.jsx)("th",{children:"Date"}),Object(ce.jsx)("th",{children:"Update Time"}),Object(ce.jsx)("th",{children:"Edit"}),Object(ce.jsx)("th",{children:"Delete"})]})}),Object(ce.jsx)("tbody",{children:r.map((function(e){return Object(ce.jsxs)("tr",{children:[Object(ce.jsx)("td",{children:e._id}),Object(ce.jsx)("td",{children:e.name}),Object(ce.jsx)("td",{children:e.email}),Object(ce.jsx)("td",{children:e.phone}),Object(ce.jsx)("td",{children:e.house}),Object(ce.jsx)("td",{children:e.description}),Object(ce.jsx)("td",{children:e.createdAt.substring(0,10)}),Object(ce.jsx)("td",{children:e.updatedAt.substring(0,10)}),Object(ce.jsx)("td",{children:Object(ce.jsx)(de.LinkContainer,{to:"/customer/".concat(e._id,"/edit"),children:Object(ce.jsx)(ee.a,{variant:"light",className:"btn-sm",children:Object(ce.jsx)("i",{className:"fa fa-edit"})})})}),Object(ce.jsx)("td",{children:Object(ce.jsx)(ee.a,{type:"button",variant:"danger",className:"btn-sm",onClick:function(){return i(e._id)},children:Object(ce.jsx)("i",{className:"fa fa-trash"})})})]},e._id)}))})]})})})]})},ge=function(e){var t=e.match,n=e.history,r=t.params.id,a=Object(s.c)((function(e){return e.userLogin})).userInfo,o=Object(c.useState)(""),i=Object(Z.a)(o,2),l=i[0],j=i[1],u=Object(c.useState)(""),d=Object(Z.a)(u,2),h=d[0],b=d[1],O=Object(c.useState)(""),p=Object(Z.a)(O,2),x=p[0],m=p[1],f=Object(c.useState)(""),g=Object(Z.a)(f,2),y=g[0],S=g[1],E=Object(c.useState)(""),v=Object(Z.a)(E,2),C=v[0],k=v[1],I=Object(c.useState)(!1),T=Object(Z.a)(I,2),L=T[0],_=T[1],R=Object(c.useState)(!1),U=Object(Z.a)(R,2),w=U[0],A=U[1],D=Object(c.useState)(!1),Q=Object(Z.a)(D,2),V=Q[0],z=Q[1],B=Object(c.useState)(!1),J=Object(Z.a)(B,2),H=J[0],W=J[1],q=Object(s.b)(),K=Object(s.c)((function(e){return e.customerDetails})).customer,X=Object(s.c)((function(e){return e.customerUpdate})).success;Object(c.useEffect)((function(){X?(q({type:F}),n.push("/")):(j(K.name),b(K.email),m(K.phone),S(K.house),k(K.description),_(K.status1),A(K.status2),z(K.status3),W(K.status4)),K.name&&K._id===r?(j(K.name),b(K.email),m(K.phone),S(K.house),k(K.description),_(K.status1),A(K.status2),z(K.status3),W(K.status4)):q(me(r))}),[q,n,r,K,X]);return Object(ce.jsx)(Y.a,{children:Object(ce.jsxs)(te.a,{className:"pt-4",children:[Object(ce.jsx)(de.LinkContainer,{to:"/",className:"float-right",children:Object(ce.jsx)("button",{className:"btn btn-light",children:"Go Back"})}),Object(ce.jsxs)(re,{children:[Object(ce.jsx)("br",{}),Object(ce.jsx)("h2",{children:"Edit Customer"}),Object(ce.jsxs)($.a,{onSubmit:function(e){e.preventDefault(),q(function(e){return function(){var t=Object(oe.a)(se.a.mark((function t(n,c){var r,a,s,o,i,l;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:G}),r=c(),a=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Pah ".concat(a.token)}},t.next=6,le.a.put("/api/customers/".concat(e._id),e,s);case 6:o=t.sent,i=o.data,n({type:M}),n({type:N,payload:i}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),"Not authorizated, token fail"===(l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&n({type:P,payload:l});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}({_id:r,name:l,email:h,phone:x,house:y,description:C,status1:L,status2:w,status3:V,status4:H}))},children:[Object(ce.jsxs)($.a.Group,{controlId:"name",children:[Object(ce.jsx)($.a.Label,{children:"Name"}),Object(ce.jsx)($.a.Control,{type:"name",placeholder:"Enter name",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"email",children:[Object(ce.jsx)($.a.Label,{children:"Email"}),Object(ce.jsx)($.a.Control,{type:"email",placeholder:"Enter email",value:h,onChange:function(e){return b(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"phone",children:[Object(ce.jsx)($.a.Label,{children:"Phone"}),Object(ce.jsx)($.a.Control,{type:"phone",placeholder:"Enter phone",value:x,onChange:function(e){return m(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"house",children:[Object(ce.jsx)($.a.Label,{children:"House"}),Object(ce.jsx)($.a.Control,{type:"house",placeholder:"Enter house",value:y,onChange:function(e){return S(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"description",children:[Object(ce.jsx)($.a.Label,{children:"Description"}),Object(ce.jsx)($.a.Control,{as:"textarea",rows:3,type:"description",placeholder:"Enter description",value:C,onChange:function(e){return k(e.target.value)}})]}),a&&a.isAdmin?Object(ce.jsxs)($.a.Group,{controlId:"status",children:[Object(ce.jsx)($.a.Label,{children:"Status \xa0"}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08",name:"group1",id:"checkbox1",checked:L,onChange:function(e){return _(e.target.checked)}}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32",name:"group2",id:"checkbox2",checked:w,onChange:function(e){return A(e.target.checked)}}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34",name:"group3",id:"checkbox3",checked:V,onChange:function(e){return z(e.target.checked)}}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18",name:"group4",id:"checkbox4",checked:H,onChange:function(e){return W(e.target.checked)}})]}):null,Object(ce.jsx)(ee.a,{className:"btn-lg btn-dark",type:"submit",variant:"primary",children:"Update"})]})]})]})})},ye=function(e){var t=e.history,n=Object(s.b)(),r=Object(c.useState)(""),a=Object(Z.a)(r,2),o=a[0],i=a[1],l=Object(c.useState)(""),j=Object(Z.a)(l,2),u=j[0],d=j[1],h=Object(c.useState)(""),b=Object(Z.a)(h,2),O=b[0],p=b[1],x=Object(c.useState)(""),m=Object(Z.a)(x,2),f=m[0],g=m[1],y=Object(c.useState)(""),S=Object(Z.a)(y,2),E=S[0],v=S[1],C=Object(c.useState)(!1),k=Object(Z.a)(C,2),I=k[0],T=k[1],L=Object(c.useState)(!1),_=Object(Z.a)(L,2),R=_[0],U=_[1],w=Object(c.useState)(!1),N=Object(Z.a)(w,2),A=N[0],D=N[1],G=Object(c.useState)(!1),M=Object(Z.a)(G,2),P=M[0],F=M[1],B=Object(s.c)((function(e){return e.customerCreate})),J=B.customerInfo,H=B.success,W=Object(s.c)((function(e){return e.userLogin})).userInfo;Object(c.useEffect)((function(){H&&t.push("/customer")}),[t,J,H]);return Object(ce.jsxs)(re,{children:[Object(ce.jsx)("br",{}),Object(ce.jsx)("h2",{children:"Create Customer"}),Object(ce.jsxs)($.a,{onSubmit:function(e){e.preventDefault(),n(function(e,t,n,c,r,a,s,o,i){return function(){var l=Object(oe.a)(se.a.mark((function l(j,u){var d,h,b,O,p;return se.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,j({type:Q}),d=u(),h=d.userLogin.userInfo,b={headers:{"Content-Type":"application/json",Authorization:"Pah ".concat(h.token)}},l.next=6,le.a.post("/api/customers",{name:e,email:t,phone:n,house:c,description:r,status1:a,status2:s,status3:o,status4:i},b);case 6:O=l.sent,p=O.data,j({type:V,payload:p}),localStorage.setItem("customerInfo",JSON.stringify(p)),l.next=15;break;case 12:l.prev=12,l.t0=l.catch(0),j({type:z,payload:l.t0.response&&l.t0.response.data.message?l.t0.response.data.message:l.t0.message});case 15:case"end":return l.stop()}}),l,null,[[0,12]])})));return function(e,t){return l.apply(this,arguments)}}()}(o,u,O,f,E,I,R,A,P))},children:[Object(ce.jsxs)($.a.Group,{controlId:"name",children:[Object(ce.jsx)($.a.Label,{children:"Name"}),Object(ce.jsx)($.a.Control,{type:"name",placeholder:"Enter name",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"email",children:[Object(ce.jsx)($.a.Label,{children:"Email"}),Object(ce.jsx)($.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"phone",children:[Object(ce.jsx)($.a.Label,{children:"Phone"}),Object(ce.jsx)($.a.Control,{type:"phone",placeholder:"Enter phone",value:O,onChange:function(e){return p(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"house",children:[Object(ce.jsx)($.a.Label,{children:"House"}),Object(ce.jsx)($.a.Control,{type:"house",placeholder:"Enter house",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(ce.jsxs)($.a.Group,{controlId:"description",children:[Object(ce.jsx)($.a.Label,{children:"Description"}),Object(ce.jsx)($.a.Control,{type:"description",placeholder:"Enter description",value:E,onChange:function(e){return v(e.target.value)}})]}),W&&W.isAdmin?Object(ce.jsxs)($.a.Group,{controlId:"status",children:[Object(ce.jsx)($.a.Label,{children:"Status \xa0"}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08",name:"group1",id:"checkbox1",checked:I,onChange:function(e){return T(e.target.checked)}}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32",name:"group2",id:"checkbox2",checked:R,onChange:function(e){return U(e.target.checked)}}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34",name:"group3",id:"checkbox3",checked:A,onChange:function(e){return D(e.target.checked)}}),Object(ce.jsx)($.a.Check,{inline:!0,type:"checkbox",label:"\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18",name:"group4",id:"checkbox4",checked:P,onChange:function(e){return F(e.target.checked)}})]}):null,Object(ce.jsx)(ee.a,{className:"btn-lg btn-dark",type:"submit",variant:"primary",children:"Create"})]})]})};function Se(e){var t=e.match.params.id,n=Object(s.b)(),r=Object(s.c)((function(e){return e.customerDetails})).customer,a=Object(s.c)((function(e){return e.userLogin})).userInfo;return Object(c.useEffect)((function(){n(me(t))}),[n,t,r,a]),Object(ce.jsx)(ce.Fragment,{children:Object(ce.jsxs)(Y.a,{className:"mt-5 pt-3 border hovor",children:[Object(ce.jsxs)(te.a,{children:[Object(ce.jsx)(ne.a,{children:Object(ce.jsx)("h2",{children:"Mywork"})}),Object(ce.jsxs)(ne.a,{children:[Object(ce.jsxs)("h4",{children:[r._id," "]}),Object(ce.jsxs)("p",{children:["\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07 ",r.createdAt]}),Object(ce.jsxs)("p",{children:["\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 ",r.updatedAt]})]})]}),Object(ce.jsxs)(te.a,{children:[Object(ce.jsxs)(ne.a,{children:[Object(ce.jsxs)("h3",{children:["\u0e0a\u0e37\u0e48\u0e2d ",r.name]}),Object(ce.jsxs)("h3",{children:["\u0e2d\u0e35\u0e40\u0e21\u0e25 ",r.email]}),Object(ce.jsxs)("h3",{children:["\u0e1a\u0e49\u0e32\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48 ",r.house]}),Object(ce.jsxs)("h3",{children:["\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 ",r.description]}),Object(ce.jsxs)("h3",{children:["\u0e1c\u0e39\u0e49\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 ",r.user.name]})]}),Object(ce.jsx)(ne.a,{children:Object(ce.jsx)(de.LinkContainer,{to:"/customer/".concat(r._id,"/pdf"),children:Object(ce.jsx)(ee.a,{className:"btn btn-danger btn-lg",children:" PDF "})})})]})]})})}var Ee=n(19),ve=n(194),Ce=n.n(ve),ke=Ee.StyleSheet.create({page:{flexDirection:"row",backgroundColor:"#E4E4E4"},section:{margin:10,padding:10,flexGrow:1}}),Ie=["1"],Te=function(e){var t=e.match.params.id,n=Object(s.b)(),r=Object(s.c)((function(e){return e.customerDetails})).customer,a=Object(s.c)((function(e){return e.userLogin})).userInfo;return Object(c.useEffect)((function(){n(me(t))}),[n,t,r,a]),Object(ce.jsx)(Y.a,{children:Object(ce.jsx)(te.a,{children:Object(ce.jsx)(Ce.a,{children:Object(ce.jsxs)(ne.a,{id:Ie[0],style:{width:"210mm",height:"297mm"},children:[Object(ce.jsx)(ee.a,{type:"button",style:{position:"relative",float:"right"},onClick:function(){return Object(ve.print)(Ie)},value:r.name,children:"Download"}),Object(ce.jsx)(Ee.Document,{children:Object(ce.jsxs)(Ee.Page,{size:"A4",style:ke.page,children:[Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r._id})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.createdAt})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.updatedAt})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.name})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.email})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.phone})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.house})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.description})}),Object(ce.jsx)(Ee.View,{style:ke.section,children:Object(ce.jsx)(Ee.Text,{children:r.user.name})})]})})]})})})})},Le=function(){return Object(ce.jsxs)(K.BrowserRouter,{basename:"/",children:[Object(ce.jsx)(pe,{}),Object(ce.jsx)("main",{className:"py-3",children:Object(ce.jsx)(Y.a,{children:Object(ce.jsxs)(X.g,{children:[Object(ce.jsx)(X.d,{path:"/",exact:!0,component:je}),Object(ce.jsx)(X.d,{path:"/register",exact:!0,component:ue}),Object(ce.jsx)(X.d,{path:"/customer",exact:!0,component:fe}),Object(ce.jsx)(X.d,{path:"/customer/add",exact:!0,component:ye}),Object(ce.jsx)(X.d,{path:"/customer/:id/edit",exact:!0,component:ge}),Object(ce.jsx)(X.d,{path:"/customer/:id/pdf",component:Te}),Object(ce.jsx)(X.d,{path:"/customer/:id",component:Se})]})})})]})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,807)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(794);a.a.render(Object(ce.jsxs)(s.a,{store:q,children:[Object(ce.jsx)(Le,{}),","]}),document.getElementById("root")),_e()}},[[795,1,2]]]);
//# sourceMappingURL=main.479ba2fd.chunk.js.map