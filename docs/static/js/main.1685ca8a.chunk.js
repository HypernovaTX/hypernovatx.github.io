(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{12:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var c=e(1),i=e.n(c),o=e(4),a=e.n(o),s=(e(12),e(2)),u=e(5),r=e(6);function d(t){window.location.href=t}var l={list:[["Home","/"],["About Me","/about"],["Experiences","/experiences"],["Projects","/projects"],["Contact","/contact"]]},b="Hi! My name is Arthur Guo! I am a developer!",j="Who I am exactly?",h="/about",x=function(t){return{mountain:{backgroundPositionX:"calc(50% - ".concat(16*t.x,"px)"),backgroundPositionY:"calc(50% - ".concat(16*t.y,"px)")},clouds:{backgroundPositionX:"calc(50% - ".concat(12*t.x,"px)"),backgroundPositionY:"calc(75% - ".concat(12*t.y,"px)")},tree:{backgroundPositionX:"calc(25% - ".concat(8*t.x,"px)"),backgroundPositionY:"calc(110% - ".concat(8*t.y,"px)")}}},m=e(0);function v(){var t=l.list.map((function(t,n){return Object(m.jsx)("span",{onClick:function(){d(t[1])},children:t[0]},"nav_".concat(n))}));return Object(m.jsx)("nav",{children:t})}var f=e(7),p=e.n(f),O=function(){function t(n,e,c){Object(u.a)(this,t),this.mouse=void 0,this.buttonName=void 0,this.updateButtonName=void 0,this.mouse=n,this.buttonName=e,this.updateButtonName=c}return Object(r.a)(t,[{key:"landing",value:function(){var t=this,n=this.mouse.x/window.innerWidth,e=this.mouse.y/window.innerHeight,c=x({x:n,y:e});return Object(m.jsxs)("section",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"mountain",style:c.mountain})})," ",Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"clouds",style:c.clouds})})," ",Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"tree",style:c.tree})})," ",Object(m.jsx)("h1",{children:Object(m.jsx)(p.a,{onInit:function(n){n.typeString(b).callFunction((function(){t.updateButtonName("active")})).start()}})}),Object(m.jsx)("button",{className:this.buttonName,onClick:function(){d(h)},children:j})]})}},{key:"output",value:function(){return Object(m.jsxs)(m.Fragment,{children:[v(),this.landing(),Object(m.jsx)("footer",{children:Object(m.jsx)("span",{children:"Website designed by Arthur (Hypernova) Guo - 2021"})})]})}}]),t}();e(15);function g(){var t=Object(c.useState)("hidden"),n=Object(s.a)(t,2),e=n[0],i=n[1],o=function(){var t=Object(c.useState)({x:0,y:0}),n=Object(s.a)(t,2),e=n[0],i=n[1],o=function(t){i({x:t.clientX,y:t.clientY})};return Object(c.useEffect)((function(){return window.addEventListener("mousemove",o),function(){return window.removeEventListener("mousemove",o)}}),[]),e}();return new O(o,e,i).output()}var y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;e(t),c(t),i(t),o(t),a(t)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.1685ca8a.chunk.js.map