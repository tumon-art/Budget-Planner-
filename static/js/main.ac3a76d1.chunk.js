(this.webpackJsonpbudget_planner=this.webpackJsonpbudget_planner||[]).push([[0],{10:function(e,t,n){e.exports={form:"AddExpense_form__3s6o2"}},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(9),r=n.n(a),i=(n(16),n(2)),u=n(3),j=n(11),d=n(4),o=n(0),b={budget:2e3,expenses:[{id:Object(u.a)(),name:"Shoping",cost:33},{id:Object(u.a)(),name:"Haircut",cost:83},{id:Object(u.a)(),name:"Bill",cost:53},{id:Object(u.a)(),name:"Wifi Bill",cost:33},{id:Object(u.a)(),name:"Mobile Data",cost:63},{id:Object(u.a)(),name:"Drinks",cost:13}]},l=function(e,t){switch(t.type){case"ADD_EXPENSES":return Object(d.a)(Object(d.a)({},e),{},{expenses:[].concat(Object(j.a)(e.expenses),[t.payload])});case"DELETE_ARRAY":return Object(d.a)(Object(d.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"BUDGET_INPUT":return Object(d.a)(Object(d.a)({},e),{},{budget:t.payload});default:return e}},O=s.a.createContext(),p=function(e){var t=e.children,n=Object(c.useReducer)(l,b),s=Object(i.a)(n,2),a=s[0],r=s[1];return Object(o.jsx)("div",{children:Object(o.jsx)(O.Provider,{value:{budget:a.budget,expenses:a.expenses,dispatch:r},children:t})})},x=n(10),h=n.n(x),m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),j=Object(i.a)(r,2),d=j[0],b=j[1],l=s.a.useContext(O).dispatch;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(u.a)(),name:n,cost:parseInt(d)};l({type:"ADD_EXPENSES",payload:t}),a(""),b("")},className:h.a.form,children:[Object(o.jsx)("label",{children:" Name "}),Object(o.jsx)("input",{required:"required",type:"text",id:"cost",value:n,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:" Cost"}),Object(o.jsx)("input",{required:"required",type:"number",id:"cost",value:d,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("button",{type:"submit",children:" Add"})]})})},f=function(){var e=s.a.useContext(O),t=e.budget,n=e.dispatch,a=Object(c.useState)(!1),r=Object(i.a)(a,2),u=r[0],j=r[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),l=b[0],p=b[1];return Object(o.jsx)(o.Fragment,{children:u?Object(o.jsxs)("div",{className:"budget_editable",children:[Object(o.jsx)("input",{value:l,onChange:function(e){return p(e.target.value)},type:"number"}),Object(o.jsx)("button",{onClick:function(){n({type:"BUDGET_INPUT",payload:parseInt(l)}),j((function(e){return!e}))},children:" Save "})," "]}):Object(o.jsxs)("div",{className:"budget_not_editable",children:[" Budget : $",t,Object(o.jsx)("button",{onClick:function(){j((function(e){return!e}))},children:" Edit "})," "]})})},g=(n(18),n(7)),v=n.n(g),_=function(e){var t=e.e,n=s.a.useContext(O).dispatch;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("li",{className:v.a.li,children:[" ",t.name,Object(o.jsxs)("div",{className:v.a.spanHold,children:[Object(o.jsxs)("span",{className:v.a.span,children:[" $",t.cost," "]}),Object(o.jsx)("button",{onClick:function(){n({type:"DELETE_ARRAY",payload:t.id})},children:" X"})]})]})})},E=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=s.a.useContext(O).expenses.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"searchInputHold",children:Object(o.jsx)("input",{placeholder:"\ud83d\udd0d Type to Search Items ...",className:"searchInput",type:"text",value:n,onChange:function(e){return a(e.target.value.toLowerCase())}})}),r.map((function(e){return Object(o.jsx)(_,{e:e},e.id)}))]})},C=function(){var e=s.a.useContext(O),t=e.budget,n=e.expenses.reduce((function(e,t){return e+t.cost}),0);return Object(o.jsxs)("div",{className:"remaining",children:[" Remaining : $",t-n," "]})},N=function(){var e=s.a.useContext(O).expenses.reduce((function(e,t){return e+t.cost}),0);return Object(o.jsxs)("div",{className:"spent",children:[" Spent : $",e," "]})},S=function(){return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"header",children:" The Budget Planner  "}),Object(o.jsxs)(p,{children:[Object(o.jsxs)("div",{className:"budgetStatus",children:[Object(o.jsx)(f,{}),Object(o.jsx)(C,{}),Object(o.jsx)(N,{})]}),Object(o.jsx)("h3",{children:" Expenses"}),Object(o.jsx)(E,{}),Object(o.jsx)("h3",{children:" Add Expenses "}),Object(o.jsx)(m,{})]})]})})};var y=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(S,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),D()},7:function(e,t,n){e.exports={li:"EpenseItem_li__1RzMF",spanHold:"EpenseItem_spanHold__3hASz",span:"EpenseItem_span__3b-87"}}},[[19,1,2]]]);
//# sourceMappingURL=main.ac3a76d1.chunk.js.map