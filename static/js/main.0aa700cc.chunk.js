(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),r=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0);!function(t){t.BY_ALPHABET="alphabet",t.BY_LENGTH="length",t.DEFAULT_FIELD=""}(c||(c={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(){var t=Object(a.useState)(c.DEFAULT_FIELD),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),j=u[0],d=u[1],f=n||j,g=function(t,e,n){var s=Object(i.a)(t);return e&&s.sort((function(t,n){switch(e){case c.BY_ALPHABET:return t.localeCompare(n);case c.BY_LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return s(c.BY_ALPHABET)},type:"button",className:l()("button","is-info",{"is-light":n!==c.BY_ALPHABET}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return s(c.BY_LENGTH)},type:"button",className:l()("button","is-success",{"is-light":n!==c.BY_LENGTH}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return d((function(t){return!t}))},type:"button",className:l()("button","is-warning",{"is-light":!j}),children:"Reverse"}),f?Object(b.jsx)("button",{onClick:function(){return s(c.DEFAULT_FIELD),void d(!1)},type:"button",className:"button is-danger is-light",children:"Reset"}):""]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0aa700cc.chunk.js.map