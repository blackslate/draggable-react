(this["webpackJsonpmobile-drag"]=this["webpackJsonpmobile-drag"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),s=n(3),c=n.n(s),a=(n(8),n(9),function(e){return e.targetTouches&&e.targetTouches.length&&(e=e.targetTouches[0]||{}),{x:e.pageX,y:e.pageY}}),u=function(e){return e.preventDefault()},i=function(e){var t=e.actions,n=e.event,o=e.drag,r=e.drop,s=document.body;return n?("object"!==typeof t&&(t={}),"touchstart"===n.type?(t.move="touchmove",t.end="touchend"):(t.move="mousemove",t.end="mouseup"),s.addEventListener(t.move,o,!1),s.addEventListener(t.end,r,!1),document.addEventListener("touchstart",u,{passive:!1})):(s.removeEventListener(t.move,o,!1),s.removeEventListener(t.end,r,!1),document.removeEventListener("touchstart",u)),{actions:t,drag:o,drop:r}},d=n(0);var v=function(){var e,t,n,r=Object(o.useRef)(),s=function(n){var o=a(n),r=o.x,s=o.y;e.style.left=t.x+r+"px",e.style.top=t.y+s+"px"},c=function(){i(n),e.style={},v()},u=function(o){o.preventDefault(),function(e,t,n){var o=t*t;return n=isNaN(n)?150:Math.abs(n),new Promise((function(t,r){var s=a(e),c=s.x,u=s.y,d={event:e,drag:function(e){var n=a(e),r=n.x,s=n.y,d=c-r,f=u-s;d*d+f*f>o&&(i(v),t())},drop:f},v=i(d);function f(){i(v),r()}n&&setTimeout(f,n)}))}(o,16).then((function(){return function(o){var r=a(o),u=r.x,d=r.y,v=e.getBoundingClientRect(),f=v.left,m=v.top;t={x:f-u,y:m-d},n=i({event:o,drag:s,drop:c})}(o)})).catch(v)};Object(o.useEffect)((function(){(e=r.current).addEventListener("touchstart",u,!1)}));var v=function(){e.classList.add("flash"),setTimeout((function(){return e.classList.remove("flash")}),200)};return Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"red"}),Object(d.jsx)("div",{className:"green"}),Object(d.jsx)("div",{className:"blue"}),Object(d.jsx)("div",{className:"draggable unselectable",onMouseDown:u,ref:r})]})};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.c113a579.chunk.js.map