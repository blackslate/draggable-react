(this["webpackJsonpmobile-drag"]=this["webpackJsonpmobile-drag"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(3),c=n.n(a),i=(n(8),n(9),function(e){return e.targetTouches&&e.targetTouches.length&&(e=e.targetTouches[0]||{}),{x:e.pageX,y:e.pageY}}),s=function(e,t,n){var r="string"===typeof t?e.target.closest(t):e.target;if(!("object"===typeof n&&!isNaN(n.x)&&!isNaN(n.y))){var o=function(e){for(var t;"BODY"!==e.tagName&&(t=e.parentNode)&&"static"===getComputedStyle(t).getPropertyValue("position");)e=t;return t}(r).getBoundingClientRect(),a=o.left,c=o.top,s=i(e),u=s.x,d=s.y,f=r.getBoundingClientRect(),v=f.left,l=f.top;n={x:v-a-u,y:l-c-d}}return function(e){var t=i(e),o=t.x,a=t.y;r.style.left=n.x+o+"px",r.style.top=n.y+a+"px"}},u=function(e){return e.preventDefault()},d=function(e){var t,n,r=e.event,o=e.drag,a=e.drop,c=e.offset,i=document.body;switch("touchstart"===r.type?(t="touchmove",n="touchend"):(t="mousemove",n="mouseup"),typeof o){case"function":break;default:o=s(r,o,c)}var d=function e(r){i.removeEventListener(t,o,!1),i.removeEventListener(n,e,!1),document.removeEventListener("touchstart",u),r&&"function"===typeof a&&a(r)};return i.addEventListener(t,o,!1),i.addEventListener(n,d,!1),document.addEventListener("touchstart",u,{passive:!1}),d},f=n(0);var v=function(){var e,t,n,o=Object(r.useRef)(),a=function(){t(),e.style={},u("You dragged me!")},c=function(n){n.preventDefault(),e.innerHTML="Drag me!",function(e,t,n){var r=t*t;return n=isNaN(n)?250:Math.abs(n),new Promise((function(t,o){var a=i(e),c=a.x,s=a.y,u=d({event:e,drag:function(e){var n=i(e),o=n.x,a=n.y,d=c-o,f=s-a;d*d+f*f>r&&(u(),t())},drop:function(){u(),o("release")}});n&&setTimeout((function(){return o("timeOut")}),n)}))}(n,16).then((function(){return function(n){s(),e.innerHTML="Wheeee!",t=d({event:n,drop:a})}(n)})).catch(u)};Object(r.useEffect)((function(){(e=o.current).addEventListener("touchstart",c,!1)}));var s=function(){clearTimeout(n),e.classList.remove("flash"),e.innerHTML="Drag me!"},u=function(t){if(e.classList.add("flash"),"timeOut"===t){clearTimeout(n);var r={once:!0};document.body.addEventListener("mouseup",s,r),document.body.addEventListener("touchend",s,r)}else n=setTimeout(s,1e3);e.innerHTML=t};return Object(f.jsxs)("main",{children:[Object(f.jsx)("div",{className:"red"}),Object(f.jsx)("div",{className:"green"}),Object(f.jsx)("div",{className:"blue"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"draggable unselectable",onMouseDown:c,ref:o,children:"Drag me!"})})]})};c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.cde84cfc.chunk.js.map