(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(5),r=c.n(i),o=(c(12),c(4)),u=c.n(o),l=c(6),p=c(2),j=(c(14),function(e){var t=e.title,c=e.calories,a=e.image,s=e.ingredients;return Object(n.jsxs)("div",{className:"recipe-box",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsxs)("p",{children:["Calories: ",c.toFixed(2)]}),Object(n.jsx)("img",{src:a,alt:t}),Object(n.jsx)("ul",{children:s.map((function(e,t){return Object(n.jsx)("li",{children:e.text},t)}))})]})}),b=c.p+"static/media/loading.6adb3553.gif",d=function(){var e="90d20c16",t="bd5992e98771406d013b6248e9e5e8b5",c=Object(a.useState)([]),s=Object(p.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(""),d=Object(p.a)(o,2),m=d[0],h=d[1],O=Object(a.useState)(""),f=Object(p.a)(O,2),x=f[0],g=f[1],v=Object(a.useState)("https://api.edamam.com/search?q=".concat(x,"&app_id=").concat(e,"&app_key=").concat(t)),y=Object(p.a)(v,2),N=y[0],S=y[1],k=Object(a.useState)(!1),w=Object(p.a)(k,2),F=w[0],C=w[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,fetch(N);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r(c.hits),C(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[N]);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{className:"app-name",children:"RecipeApp"}),Object(n.jsxs)("form",{onSubmit:function(c){c.preventDefault(),g(m),h(""),S("https://api.edamam.com/search?q=".concat(x,"&app_id=").concat(e,"&app_key=").concat(t))},className:"search-form",children:[Object(n.jsx)("input",{autoFocus:!0,className:"search-bar",type:"text",value:m,onChange:function(e){h(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&document.getElementById("btn").click()},placeholder:"Try a new recipe today."}),Object(n.jsx)("button",{id:"btn",className:"search-button",type:"submit",children:"Search"})]}),F?Object(n.jsx)("img",{className:"loading",src:b,alt:""}):"",Object(n.jsx)("div",{className:"row",children:i.map((function(e,t){return Object(n.jsx)(j,{className:"column",title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},t)}))})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.30924d02.chunk.js.map