(this["webpackJsonppesca-clock"]=this["webpackJsonppesca-clock"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(7),a=n.n(s),o=(n(13),n(3)),r=(n(14),n(5)),l=n(1);function j(e){var t=e.length,n=e.onClick,c=e.title;return Object(l.jsxs)("div",{className:"length-control",children:[Object(l.jsx)("div",{children:c}),Object(l.jsx)("button",{className:"btn-level",onClick:n,value:"-",children:Object(l.jsx)(r.a,{size:40})}),Object(l.jsx)("div",{className:"btn-level",children:t}),Object(l.jsx)("button",{className:"btn-level",onClick:n,value:"+",children:Object(l.jsx)(r.b,{size:40})})]})}var u=n(8),b=n(6);function d(){var e=Object(c.useState)(5),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(25),a=Object(o.a)(s,2),r=a[0],d=a[1],O=Object(c.useState)("stopped"),h=Object(o.a)(O,2),v=h[0],f=h[1],g=Object(c.useState)("Session"),m=Object(o.a)(g,2),x=m[0],p=m[1],k=Object(c.useState)(1500),S=Object(o.a)(k,2),C=S[0],w=S[1],T=Object(c.useState)(""),L=Object(o.a)(T,2),N=L[0],z=L[1],B=Object(c.useState)({color:"white"}),D=Object(o.a)(B,2),F=D[0],P=D[1];function y(e,t,n,c){"running"!==v&&("-"===t&&1!==n?("brkLength"===e?i(n-1):d(n-1),x!==c&&w(60*n-60)):"+"===t&&60!==n&&("brkLength"===e?i(n+1):d(n+1),x!==c&&w(60*n+60)))}function I(){"stopped"===v?(J(),f("running")):(f("stopped"),N&&N.cancel())}function J(){z(function(e,t){var n,c,i,s;return c=(new Date).getTime()+t,i=null,s=function(){return c+=t,i=setTimeout(s,c-(new Date).getTime()),e()},n=function(){return clearTimeout(i)},i=setTimeout(s,c-(new Date).getTime()),{cancel:n}}((function(){w((function(e){return e-1})),function(){var e=C;t=e,void P(t<61?{color:"#a50d0d"}:{color:"white"}),e<0&&(N&&N.cancel(),"Session"===x?(J(),M(60*n,"Break")):(J(),M(60*r,"Session")));var t}()}),1e3))}function M(e,t){w(e),p(t),P({color:"white"})}return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"main-title",children:"Pesca"}),Object(l.jsx)(j,{length:n,onClick:function(e){y("brkLength",e.currentTarget.value,n,"Session")},title:"Break Length"}),Object(l.jsx)(j,{length:r,onClick:function(e){y("seshLength",e.currentTarget.value,r,"Break")},title:"Session Length"}),Object(l.jsx)("div",{className:"timer",style:F,children:Object(l.jsxs)("div",{className:"timer-wrapper",children:[Object(l.jsx)("div",{id:"timer-label",children:x}),Object(l.jsx)("div",{id:"time-left",children:function(){var e=Math.floor(C/60),t=C-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}()})]})}),Object(l.jsxs)("div",{className:"timer-control",children:["stopped"===v?Object(l.jsx)(u.a,{size:80,onClick:I}):Object(l.jsx)(b.a,{size:80,onClick:I}),Object(l.jsx)(b.b,{size:80,onClick:function(){i(5),d(25),f("stopped"),p("Session"),w(1500),z(""),P({color:"white"}),N&&N.cancel()}})]})]})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.a9923276.chunk.js.map