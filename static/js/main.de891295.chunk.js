(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{79:function(e,t,a){e.exports=a(98)},98:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=a(61),u=a(28),l=a(24),d=a(147),s=a(148),p=a(152),m=a(68),f=Object(p.a)(Object(m.a)({palette:{background:{default:"#F0F0F0"}},typography:{fontFamily:"Avenir",h5:{fontWeight:600}},overrides:{MuiButton:{contained:{boxShadow:"none","&:hover":{boxShadow:"none"}},label:{fontWeight:600,textTransform:"none"}},MuiCard:{root:{boxShadow:"0 0 10px gray"}}}})),b=a(14),g={openCreateTodoDialog:!1};var h={todos:[]};var E=Object(u.c)({modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a={};switch(t.type){case"OPEN_CREATE_TODO_DIALOG":a={openCreateTodoDialog:!0};break;case"CLOSE_CREATE_TODO_DIALOG":a={openCreateTodoDialog:!1};break;default:a={}}return Object(b.a)(Object(b.a)({},e),a)},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a={};switch(t.type){case"GET_TODO_ITEMS":a={todos:t.payload};break;case"CREATE_TODO_ITEM":var n={id:(new Date).getTime(),title:t.payload.title,description:t.payload.description,done:!1},o=e.todos.slice();o.push(n),a={todos:o};break;case"DELETE_TODO_ITEM":var r=e.todos.filter((function(e){return e.id!==t.payload.id}));a={todos:r};break;case"TOGGLE_TODO_ITEM_STATUS":var c=e.todos.map((function(e){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),{},{done:!e.done}):e}));a={todos:c};break;default:a={}}return Object(b.a)(Object(b.a)({},e),a)}}),T=a(38),O=a(130),y=a(153),v=a(144),D=a(145),j=a(71),w=a(136),k=a(146),x=a(132),C=a(134),I=a(135),_=a(11),S=a.n(_),R=a(22),A=a(49),L=a.n(A);a(92),a(99);L.a.initializeApp({apiKey:"AIzaSyCD7Ysa5TF_Sn6RdPOsSUl5VvjSDVO9n-s",authDomain:"todoapp-23c28.firebaseapp.com",databaseURL:"https://todoapp-23c28.firebaseio.com",projectId:"todoapp-23c28",storageBucket:"todoapp-23c28.appspot.com",messagingSenderId:"1077121620227",appId:"1:1077121620227:web:2befc9622a18f050b97136",measurementId:"G-R09HBMG3EX"}),L.a.analytics();var G=L.a,M=function(){var e=G.firestore().collection("todos");function t(){return(t=Object(R.a)(S.a.mark((function t(){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,e.get().then((function(e){return e.forEach((function(e){var t=Object(b.a)({id:e.id},e.data());a.push(t)}))}));case 3:return t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(R.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.id.toString(),t.next=3,e.doc(n).set({title:a.title,description:a.description,done:a.done});case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(R.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.id.toString(),t.next=3,e.doc(n).delete();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(){return(o=Object(R.a)(S.a.mark((function t(a){var n,o,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.toString(),t.next=3,e.doc(n).get();case 3:return o=t.sent,r=o.done,t.next=7,e.doc(n).update({done:!r});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{getTodos:function(){return t.apply(this,arguments)},addTodo:function(e){return a.apply(this,arguments)},deleteTodoWithId:function(e){return n.apply(this,arguments)},toggleTodoStatusWithId:function(e){return o.apply(this,arguments)}}}(),W={id:(new Date).getTime(),title:"Create your first todo",description:"Create your first todo by clicking on the button located on the top-right.",done:!1};var B=Object(O.a)((function(){return Object(y.a)({root:{opacity:function(e){return e.done?.35:1},width:345,maxWidth:"100%"}})})),N=Object(l.b)(null,(function(e){return{deleteTodoItem:function(t){e(function(e){return function(){var t=Object(R.a)(S.a.mark((function t(a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.deleteTodoWithId(e);case 2:return t.abrupt("return",a({type:"DELETE_TODO_ITEM",payload:e}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},toggleTodoItemStatus:function(t){e(function(e){return function(){var t=Object(R.a)(S.a.mark((function t(a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.toggleTodoStatusWithId(e.id);case 2:return t.abrupt("return",a({type:"TOGGLE_TODO_ITEM_STATUS",payload:e}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.deleteTodoItem,a=e.toggleTodoItemStatus,n=e.id,r=e.title,c=e.body,i=e.done,u=B({done:i});return o.a.createElement(x.a,{className:u.root},o.a.createElement(C.a,null,o.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2"},r),o.a.createElement(j.a,{variant:"body2",color:"textSecondary",component:"p"},c)),o.a.createElement(I.a,null,o.a.createElement(w.a,{onClick:function(){return a({id:n})},size:"small",color:"primary"},i?"Done":"Mark as done"),o.a.createElement(w.a,{onClick:function(){return t({id:n})},size:"small",color:"secondary"},"Delete")))})),F=a(137),z=a(139),U=a(67),P=a.n(U),V=a(138),H=Object(O.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function J(e){var t=e.children,a=e.window,n=H(),r=Object(F.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return o.a.createElement(V.a,{in:r},o.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root},t))}var q=function(e){return o.a.createElement(J,e,o.a.createElement(z.a,{color:"secondary",size:"small","aria-label":"scroll to top"},o.a.createElement(P.a,null)))},K=a(151),X=a(140),Y=a(141),Q=a(142),Z=a(149),$=a(143),ee=Object(l.b)((function(e){return{openCreateTodoDialog:e.modals.openCreateTodoDialog}}),(function(e){return{createTodoItem:function(t){e(function(e){return function(){var t=Object(R.a)(S.a.mark((function t(a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.addTodo(e);case 2:return t.abrupt("return",a({type:"CREATE_TODO_ITEM",payload:e}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},closeCreateTodoDialog:function(){e({type:"CLOSE_CREATE_TODO_DIALOG"})}}}))((function(e){var t=e.createTodoItem,a=e.openCreateTodoDialog,r=e.closeCreateTodoDialog,c=Object(n.useRef)(null),i=Object(n.useRef)(null),u=r,l=function(){var e={id:(new Date).getTime(),title:c.current.value?c.current.value:"The nameless todo",description:i.current.value?i.current.value:"This todo item does not have a body.",done:!1};t(Object(b.a)({},e)),u()};return o.a.createElement("div",null,o.a.createElement(K.a,{open:a,onClose:u,"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:"sm"},o.a.createElement(X.a,{id:"form-dialog-title"},"Create a new Todo item"),o.a.createElement(Y.a,null,o.a.createElement(Q.a,null,"Title"),o.a.createElement(Z.a,{autoFocus:!0,inputRef:c,margin:"dense",id:"title",placeholder:"Title of your todo item",onSubmit:l,fullWidth:!0})),o.a.createElement(Y.a,null,o.a.createElement(Q.a,null,"Description"),o.a.createElement(Z.a,{inputRef:i,margin:"dense",id:"body",placeholder:"Describe your todo item",onSubmit:l,fullWidth:!0})),o.a.createElement($.a,null,o.a.createElement(w.a,{onClick:u,color:"secondary"},"Cancel"),o.a.createElement(w.a,{onClick:l,color:"primary"},"Create"))))})),te=Object(O.a)((function(e){var t;return Object(y.a)({root:(t={flexGrow:1,marginLeft:e.spacing(4),marginRight:e.spacing(4)},Object(T.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(6),marginRight:e.spacing(6)}),Object(T.a)(t,e.breakpoints.up("md"),{marginLeft:e.spacing(8),marginRight:e.spacing(8)}),t),appBar:{boxShadow:"none",paddingLeft:e.spacing(0),paddingRight:e.spacing(0)},toolbar:{paddingLeft:e.spacing(0),paddingRight:e.spacing(0)},title:{flexGrow:1,marginTop:e.spacing(4),marginBottom:e.spacing(4)},body:{}})})),ae=Object(l.b)((function(e){return{todos:e.todos.todos}}),(function(e){return{openCreateTodoDialog:function(){e({type:"OPEN_CREATE_TODO_DIALOG"})},fetchTodoItems:function(){e(function(){var e=Object(R.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getTodos();case 2:if(0!==(a=e.sent).length){e.next=7;break}return e.next=6,M.addTodo(W);case 6:a.push(W);case 7:return e.abrupt("return",t({type:"GET_TODO_ITEMS",payload:a}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.openCreateTodoDialog,a=e.fetchTodoItems,r=e.todos,c=te();return Object(n.useEffect)((function(){a()}),[a]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:c.root},o.a.createElement(v.a,{className:c.appBar,position:"static",color:"transparent"},o.a.createElement(D.a,{id:"back-to-top-anchor",className:c.toolbar},o.a.createElement(j.a,{variant:"h5",className:c.title},"Todo App"),o.a.createElement(w.a,{variant:"contained",onClick:t,color:"primary",size:"large"},"Create Todo"))),o.a.createElement(q,null),o.a.createElement(k.a,{container:!0,spacing:4},r.map((function(e){return o.a.createElement(k.a,{key:e.id,item:!0},o.a.createElement(N,{key:e.id,id:e.id,title:e.title,body:e.description,done:e.done}))})))),o.a.createElement(ee,null))}));document.title="Todo App";var ne=Object(u.d)(E,Object(u.a)(i.a));c.a.render(o.a.createElement(d.a,{theme:f},o.a.createElement(l.a,{store:ne},o.a.createElement(s.a,null),o.a.createElement(ae,null))),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.de891295.chunk.js.map