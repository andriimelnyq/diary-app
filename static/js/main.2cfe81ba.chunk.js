(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(8),a=c.n(s),o=(c(13),c(2)),r=(c(14),c(4)),m=(c(15),c(0)),l=function(e){var t=e.setItems,c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],a=i[1],l=function(){var e=1e7;return(Math.floor(9e7*Math.random())+e).toString()};return Object(m.jsxs)("form",{className:"item-form",onSubmit:function(e){return function(e){e.preventDefault(),t((function(e){return[].concat(Object(r.a)(e),[{id:l(),name:s,comments:[]}])})),a("")}(e)},children:[Object(m.jsx)("input",{type:"text",className:"item-form__input",value:s,placeholder:"Type name here...",onChange:function(e){return t=e.target.value,a(t);var t},required:!0}),Object(m.jsx)("button",{type:"submit",className:"item-form__button",children:"Add New"})]})},u=(c(17),function(e){var t=e.item,c=e.setActiveItem,n=e.isSelected,i=e.setItems,s=function(){c(t)};return Object(m.jsxs)("div",{className:"item ".concat(n?"item--selected":""),onClick:s,onKeyDown:s,role:"button",tabIndex:0,children:[t.name,Object(m.jsxs)("div",{className:"item__container",children:[Object(m.jsx)("div",{className:"item__comments-length",children:t.comments.length}),Object(m.jsx)("button",{className:"item__button",type:"button",onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),n&&c(null),i((function(e){return e.filter((function(e){return e.id!==t.id}))}))}(e)},children:"Delete"})]})]})}),j=function(e){var t=e.items,c=e.setItems,n=e.activeItem,i=e.setActiveItem;return Object(m.jsxs)("section",{className:"main-container",children:[Object(m.jsx)("div",{className:"main-container__title",children:"Items"}),Object(m.jsx)(l,{setItems:c}),t.length>0?Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsx)(u,{item:e,isSelected:e.id===(null===n||void 0===n?void 0:n.id),setActiveItem:i,setItems:c},e.id)}))}):Object(m.jsx)("p",{children:"Add items"})]})},d=c(5),b=(c(18),function(e){var t=e.setItems,c=e.setActiveItem,i=e.activeItem,s=Object(n.useState)("#000000"),a=Object(o.a)(s,2),l=a[0],u=a[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),v=b[0],O=b[1];return Object(m.jsxs)("form",{className:"comment-form",onSubmit:function(e){return function(e){e.preventDefault();var n="".concat(null===i||void 0===i?void 0:i.id,"-").concat(null===i||void 0===i?void 0:i.comments.length);i&&c(Object(d.a)(Object(d.a)({},i),{},{comments:[].concat(Object(r.a)(i.comments),[{id:n,body:v,color:l}])})),t((function(e){return e.map((function(e){return e.id===(null===i||void 0===i?void 0:i.id)?Object(d.a)(Object(d.a)({},e),{},{comments:[].concat(Object(r.a)(i.comments),[{id:n,body:v,color:l}])}):e}))})),O(""),u("#000000")}(e)},children:[Object(m.jsx)("input",{className:"comment-form__color",type:"color",value:l,onChange:function(e){return t=e.target.value,u(t);var t},required:!0}),Object(m.jsx)("textarea",{className:"comment-form__body",value:v,onChange:function(e){return t=e.target.value,O(t);var t},required:!0}),Object(m.jsx)("button",{className:"comment-form__button",type:"submit",children:"Add New"})]})}),v=(c(19),function(e){var t=e.comment;return Object(m.jsxs)("div",{className:"comment",children:[Object(m.jsx)("div",{className:"comment__color",style:{backgroundColor:t.color}}),Object(m.jsx)("div",{className:"comment__body",children:t.body})]})}),O=function(e){var t=e.activeItem,c=e.setItems,n=e.setActiveItem;return Object(m.jsxs)("section",{className:"main-container",children:[Object(m.jsx)("div",{className:"main-container__title",children:t?"Comments #".concat(null===t||void 0===t?void 0:t.id):"The item hasn't been selected yet!"}),t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:"main-container__list",children:null===t||void 0===t?void 0:t.comments.map((function(e){return Object(m.jsx)(v,{comment:e},e.id)}))}),Object(m.jsx)(b,{activeItem:t,setItems:c,setActiveItem:n})]})]})},f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(null),a=Object(o.a)(s,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("items"),t=localStorage.getItem("activeItem");e&&i(JSON.parse(e)),t&&l(JSON.parse(t))}),[]),Object(n.useEffect)((function(){localStorage.setItem("items",JSON.stringify(c))}),[c]),Object(n.useEffect)((function(){localStorage.setItem("activeItem",JSON.stringify(r))}),[r]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)("div",{className:"app__info",children:[Object(m.jsx)("div",{className:"app__title",children:"DAYRY APP"}),Object(m.jsx)("div",{className:"app__subtitle",children:"Comment whit no sense"})]}),Object(m.jsxs)("main",{className:"app__content",children:[Object(m.jsx)(j,{items:c,setItems:i,activeItem:r,setActiveItem:l}),Object(m.jsx)(O,{activeItem:r,setItems:i,setActiveItem:l})]})]})};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.2cfe81ba.chunk.js.map