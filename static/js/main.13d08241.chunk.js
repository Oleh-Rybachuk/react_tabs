(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),d=n(1),s=(n(9),n(10),n(11),n(0)),b=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected;if(!e)return null;var i=e.find((function(t){return t.id===n}))||e[0],a=i.content;return Object(s.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(s.jsx)("div",{className:"tabs is-boxed",children:Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)("li",{className:i.id===t.id?"is-active":"","data-cy":"Tab",children:Object(s.jsx)("a",{title:t.title,href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){n!==t.id&&c(t)}(t)},children:t.title})},t.id)}))})}),Object(s.jsx)("div",{className:"block","data-cy":"TabContent",children:a})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var t=Object(d.useState)(l[0].id),e=Object(a.a)(t,2),n=e[0],c=e[1],i=((null===l||void 0===l?void 0:l.find((function(t){return t.id===n})))||l[0]).title;return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsxs)("h1",{className:"title",children:["Selected tab is"," ".concat(i)]}),Object(s.jsx)(b,{tabs:l,selectedTabId:n,onTabSelected:function(t){c(t.id)}})]})};i.a.render(Object(s.jsx)(o,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.13d08241.chunk.js.map