/*!
 * three-js-demo 0.0.1
 * repository: https://github.com/capricorncd/blog/tree/master/demos/three
 * author: Capricorncd
 * github: https://github.com/capricorncd
 */!function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([36,1]),n()}({29:function(e,t,n){var r=n(16),a=n(30);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},30:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r)()(!1);a.push([e.i,"header{position:fixed;z-index:10;top:0;left:0;width:100%;height:60px;background:#24292e}header h1{color:#fff;opacity:.8;line-height:60px;margin:0 0 0 20px;font-weight:500;font-size:24px;font-family:PingFang SC,Verdana,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif}header h1 span{font-size:.6em}header .icon-menu{position:absolute;right:55px;top:50%;transform:translateY(-50%);background:none;border:0;color:#fff;opacity:.6;outline:none;display:none;width:26px;height:26px;vertical-align:middle;fill:currentColor;overflow:hidden}header .icon-menu:active{opacity:.8}header a{display:inline-block;position:absolute;right:20px;top:50%;margin-top:-12px;font-size:0;opacity:.6}header a:hover{opacity:.8}header a svg{fill:currentColor;color:#fff}",""]),t.default=a},34:function(e,t,n){var r=n(16),a=n(35);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},35:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r)()(!1);a.push([e.i,'html,body{margin:0;padding:0;font-size:16px}body{overflow:hidden;padding-top:60px}.aside-wrapper{position:fixed;z-index:10;top:60px;left:0;bottom:0;width:210px}.aside-wrapper ul,.aside-wrapper li{list-style:none;margin:0;padding:0}.aside-wrapper li{height:40px;line-height:40px}.aside-wrapper li a{display:block;padding:0 20px;opacity:.8;color:#24292e;text-decoration:none}.aside-wrapper li a:hover{opacity:1}.aside-wrapper li.is-current a{font-weight:bold;text-decoration:underline}main{position:fixed;top:60px;right:0;left:210px;bottom:0;overflow-y:auto;outline:none}.font-size-zero{font-size:0}@media screen and (max-width: 640px){header h1{font-size:16px}header .icon-menu{display:block}.aside-wrapper{bottom:auto;width:100%;background:rgba(255,255,255,.8);transition:all .3s ease-in-out;transform:scaleY(1);opacity:1;transform-origin:center top}.aside-wrapper:before{content:"";position:absolute;top:-7px;right:64px;border-bottom:7px solid rgba(255,255,255,.6);border-left:7px solid transparent;border-right:7px solid transparent}.aside-wrapper.hide{transform:scaleY(0);opacity:0}main{left:0}}',""]),t.default=a},36:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(18),i=n.n(o),c=n(12),l=n(2),s=[{text:"Home",path:"/"},{text:"First 3D Scene",path:"/First3DScene"},{text:"Multiple Geometry",path:"/MultipleGeometry"},{text:"Materials",path:"/Materials"},{text:"Draw Lines",path:"/DrawLines"},{text:"Earth",path:"/Earth"},{text:"Canvas Demo",path:"/CanvasDemo"},{text:"Current Time(balls)",path:"/CanvasCurrentTime"},{text:"Clock(C4D .STL file)",path:"/ClockSTL"},{text:"Clock(C4D .Obj file)",path:"/ClockObj"}],u=n(8),f=n.n(u);n(29);function d(e){var t=e.clickMenu;return a.a.createElement("header",null,a.a.createElement("h1",null,"Three.js ",a.a.createElement("span",null,"(React 16.x, Hooks API Reference)")),a.a.createElement("svg",{className:"icon-menu",onClick:function(e){return t(e)},viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2157"},a.a.createElement("path",{d:"M512 120a392 392 0 1 1-392 392 392.48 392.48 0 0 1 392-392m0-64a456 456 0 1 0 456 456A456 456 0 0 0 512 56zM688 368H336a32 32 0 0 1 0-64h352a32 32 0 0 1 0 64zM688 528H336a32 32 0 0 1 0-64h352a32 32 0 0 1 0 64zM576 688H336a32 32 0 0 1 0-64h240a32 32 0 0 1 0 64zM688 656m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z","p-id":"2158"})),a.a.createElement("a",{href:"https://github.com/capricorncd/blog/tree/master/demos/three",target:"_blank",rel:"noreferrer"},a.a.createElement("svg",{height:"24",viewBox:"0 0 16 16",version:"1.1",width:"24","aria-hidden":"true"},a.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))))}d.propTypes={clickMenu:f.a.func};var p,h,m,v,w,g,b=d,y=n(0),E=n.p+"static/img/earth.jpg",x=n.p+"static/img/moon.jpg",z=n(7),M=16763136,j=16736e3,O=340589,S=0,C=16777215;function k(e){new Promise((function(e,t){var n=0,r=[],a={},o=new y.R;function i(){2==++n&&(r.length>0?t(r):e(a))}o.load(E,(function(e){a.earthTexture=e,i()}),void 0,(function(e){r.push(e),i()})),o.load(x,(function(e){a.moonTexture=e,i()}),void 0,(function(e){r.push(e),i()}))})).then((function(t){!function(e,t){var n=t.earthTexture,r=t.moonTexture;v=new y.f,p=new y.M;var a=new y.N(100,50,50),o=new y.z(a,new y.D({map:n}));p.add(o);var i=new y.N(27,50,50),c=new y.z(i,new y.D({map:r}));c.position.x=200,p.add(c);var l=e.offsetWidth,s=e.offsetHeight,u=new y.G(45,l/s,1,2e4);u.position.set(1500,700,-100);var f=new y.a(10066329);f.position.set(100,100,200),p.add(f);var d=new y.j(C,1);d.position.set(20,1,1),p.add(d),(h=new y.U({antialias:!0})).setSize(l,s),h.setClearColor(S,1),e.appendChild(h.domElement),new z.a(u,e),g=function(t){l=e.offsetWidth,s=e.offsetHeight,u.aspect=l/s,u.updateProjectionMatrix(),h.setSize(l,s)},window.addEventListener("resize",g),function e(){m=requestAnimationFrame(e),o.rotation.y+=.025,c.rotation.y+=.0025/28*10,w=v.getElapsedTime(),c.position.set(580*Math.sin(w),0,580*Math.cos(w)),h.render(p,u)}()}(e,t)})).catch((function(e){console.error.apply(null,e)}))}function P(){p.remove(),h.dispose(),p=null,h=null,cancelAnimationFrame(m),window.removeEventListener("resize",g)}var T,A,H=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return k(e.current),function(){P()}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:e})};function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16777215,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O,r=new y.H(t);r.position.set(400,200,300),e.add(r);var a=new y.a(n);return e.add(a),{pointLight:r,ambientLight:a}}function D(e,t,n){var r=t.offsetWidth,a=t.offsetHeight;n=n||function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200,a=t/n,o=new y.F(-r*a,r*a,r,-r,1,1e3);return o.position.set(200,300,200),o.lookAt(e.position),o}(e,r,a);var o=new y.U({antialias:!0});function i(){o.render(e,n)}return o.setSize(r,a),o.setClearColor(S,1),t.appendChild(o.domElement),new z.a(n,t).addEventListener("change",i),i(),o}var N,R,I=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return function(e){T=new y.M;var t=new y.O(100,100,100),n=new y.B({color:j}),r=new y.z(t,n);T.add(r),L(T,14522777,14509670),A=D(T,e)}(e.current),function(){T.remove(),A.dispose(),T=null,A=null}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:e})};var W,B,Y=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return function(e){N=new y.M;var t=new y.c(100,100,100),n=new y.z(t,new y.B({color:M}));N.add(n);var r=new y.O(50,40,40),a=new y.z(r,new y.B({color:j}));a.translateX(100),N.add(a);var o=new y.h(0,30,100,30),i=new y.z(o,new y.B({color:j}));i.translateY(100),N.add(i);var c=new y.E(50),l=new y.z(c,new y.B({color:j}));l.translateX(-100),N.add(l);var s=new y.k(50),u=new y.z(s,new y.B({color:j}));u.position.set(0,0,100),N.add(u);var f=new y.r(50),d=new y.z(f,new y.B({color:j}));d.translateY(93),d.translateX(100),N.add(d);var p=new y.b(2e3);N.add(p),L(N);var h=new y.H(3355443);h.position.set(-200,-200,-200),N.add(h),R=D(N,e)}(e.current),function(){N.remove(),R.dispose(),N=null,R=null}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:e})};var _,F,X=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return function(e){W=new y.M;var t=new y.O(50,40,40),n=new y.z(t,new y.A({color:O}));n.translateX(0),W.add(n),t=new y.O(50,40,40),(n=new y.z(t,new y.A({color:O,wireframe:!0}))).translateX(105),W.add(n),t=new y.O(50,40,40),(n=new y.z(t,new y.B({color:j,opacity:.8,transparent:!0}))).translateY(105),W.add(n),t=new y.O(50,40,40),(n=new y.z(t,new y.B({color:j,wireframe:!0}))).translateX(105),n.translateY(105),W.add(n),t=new y.O(50,40,40),(n=new y.z(t,new y.D({color:M,specular:3355443}))).translateY(-105),W.add(n),t=new y.O(50,40,40),(n=new y.z(t,new y.D({color:M,wireframe:!0}))).translateX(105),n.translateY(-105),W.add(n),t=new y.O(50,40,40),(n=new y.z(t,new y.C({bumpMap:(new y.R).load(E,(function(){}),console.warn,console.error)}))).translateX(-105),W.add(n),t=new y.O(50,40,40),(n=new y.z(t,new y.C({wireframe:!0}))).translateX(-210),W.add(n);var r=new y.b(2e3);W.add(r),L(W),B=D(W,e)}(e.current),function(){W.remove(),B.dispose(),W=null,B=null}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:e})};var G=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return function(e){_=new y.M;var t=new y.p,n=new y.A({vertexColors:!0});t.colors.push(new y.g(M),new y.g(j));var r=new y.T(-100,0,100),a=new y.T(100,0,-100);t.vertices.push(r,a);var o=new y.s(t,n,y.u);_.add(o);var i=new y.G(50,e.offsetWidth/e.offsetHeight,.1,1e3);i.position.y=500,F=D(_,e,i)}(e.current),function(){_.remove(),F.dispose(),_=null,F=null}})),a.a.createElement("main",{className:"font-size-zero",ref:e})};var U=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return k(e.current),function(){P()}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:e})};function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e,t,n){e.beginPath(),e.moveTo(47.5,n-5),e.lineTo(95,n-5),e.lineTo(5,n-100),e.lineTo(5,n-5),e.lineTo(47.5,n-5),e.lineWidth=10,e.strokeStyle="#330000",e.stroke(),e.fillStyle="rgb(10, 200, 10)",e.fill(),e.closePath(),e.beginPath(),e.moveTo(45,5),e.lineTo(90,5),e.lineTo(5,n-430),e.lineTo(5,5),e.lineTo(45,5),e.lineWidth=10,e.strokeStyle="#33ccff",e.stroke(),e.fillStyle="rgb(255, 200, 10)",e.fill(),e.closePath()}function Q(e,t,n){var r=t-320;[{p:[[0,0],[8,0],[4,4]],color:"#caff67"},{p:[[0,0],[4,4],[0,8]],color:"#67becf"},{p:[[8,0],[8,4],[6,6],[6,2]],color:"#ef3d61"},{p:[[6,2],[6,6],[4,4]],color:"#f9f51a"},{p:[[4,4],[6,6],[4,8],[2,6]],color:"#a594c0"},{p:[[2,6],[4,8],[0,8]],color:"#fa8ecc"},{p:[[8,4],[8,8],[4,8]],color:"#f6ca29"}].forEach((function(t){!function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;t.beginPath(),e.p.forEach((function(e,o){var i=q(e,2),c=i[0],l=i[1];c=c*n+r,l=l*n+a,0===o?t.moveTo(c,l):t.lineTo(c,l)})),t.closePath(),t.fillStyle=e.color,t.fill()}(t,e,40,r,0)}))}var V=new Array(9).fill(1);var Z={0:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],1:[[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0]],2:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],3:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],4:[[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1]],5:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],6:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],7:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1]],8:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],9:[[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]],":":[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]},K=2*Math.PI;function ee(e,t,n,r){Z[n].forEach((function(n,a){n.forEach((function(n,o){1===n&&(r.beginPath(),r.arc(e+12*o,t+12*a,5,0,K),r.closePath(),r.fill())}))}))}var te=function(){var e,t,n,o,i;function c(){o=e.offsetWidth,i=e.offsetHeight,t.width=o,t.height=i,$(n,0,i),Q(n,o)}var l=Object(r.useRef)();return Object(r.useEffect)((function(){return e=l.current,o=e.offsetWidth,i=e.offsetHeight,(t=e.querySelector("canvas")).width=o,t.height=i,n=t.getContext("2d"),window.addEventListener("resize",c),$(n,0,i),Q(n,o),function(e){e.lineWidth=3,e.strokeStyle="#ef3d61",V.forEach((function(t,n){e.beginPath(),e.arc(115*n,55,50,0,.25*n*Math.PI,!0),e.stroke()})),V.forEach((function(t,n){e.beginPath(),e.arc(115*n,160,50,0,.25*n*Math.PI,!0),e.closePath(),e.stroke()})),V.forEach((function(t,n){e.beginPath(),e.arc(115*n,265,50,0,.25*n*Math.PI,!1),e.stroke()})),V.forEach((function(t,n){e.beginPath(),e.arc(115*n,370,50,0,.25*n*Math.PI,!1),e.closePath(),e.stroke()})),e.fillStyle="#ef3d61",V.forEach((function(t,n){e.beginPath(),e.arc(115*n,475,50,0,.25*n*Math.PI,!1),e.fill()}))}(n),function(e){e.fillStyle="#67becf",new Array(10).fill(1).forEach((function(t,n){ee(5+12*n*8,600,n,e)})),ee(965,600,":",e)}(n),function(){console.log("destroy"),window.removeEventListener("resize",c)}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:l},a.a.createElement("canvas",null,"Canvas is not supported by current browser"))};function ne(e){return(e+="")[1]?e:"0"+e}var re,ae,oe=2*Math.PI,ie=[];function ce(e,t,n){ae=n/4;var r=(t-696)/2;e.fillStyle="#24292e";var a="";e.clearRect(0,0,t,n);var o=0;a=function(e){var t=[];return t.push(ne(e.getHours())),t.push(ne(e.getMinutes())),t.push(ne(e.getSeconds())),t.join(":")}(new Date),re||(re=a.split("")),a.split("").forEach((function(t,n){var a,i;ee(r+6*o*2,ae,t,e),re[n]!==t&&(a=r+6*o*2,i=ae,Z[t].forEach((function(e,t){e.forEach((function(e,n){0===e&&ie.push({x:a+12*n,y:i+12*t,g:.2+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random()))*Math.random(),vy:-5,color:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")})}))}))),o+=":"===t?5:8})),re=a.split(""),ie.forEach((function(t){!function(e,t,n,r){e.x+=e.vx,e.y+=e.vy,e.vy+=e.g,e.y>=r-5&&(e.y=r-5,e.vy=.6*-e.vy);t.fillStyle=e.color,t.beginPath(),t.arc(e.x,e.y,5,0,oe),t.closePath(),t.fill()}(t,e,0,n)})),ie=ie.filter((function(e){return e.x+5>0&&e.x-5<t}))}var le,se,ue=function(){var e,t,n,o,i,c,l=Object(r.useRef)();function s(){o=e.offsetWidth,i=e.offsetHeight,t.width=o,t.height=i}function u(){c=requestAnimationFrame(u),ce(n,o,i)}return Object(r.useEffect)((function(){return e=l.current,o=e.offsetWidth,i=e.offsetHeight,(t=e.querySelector("canvas")).width=o,t.height=i,n=t.getContext("2d"),window.addEventListener("resize",s),u(),function(){window.removeEventListener("resize",s),cancelAnimationFrame(c),ie.length=0}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:l},a.a.createElement("canvas",null,"Canvas is not supported by current browser"))},fe=n(19);function de(e){new Promise((function(e,t){(new fe.a).load("static/clock.stl",e,void 0,t)})).then((function(t){!function(e,t){le=new y.M;var n=new y.z(t,new y.D({color:10066329}));le.add(n);var r=e.offsetWidth,a=e.offsetHeight,o=new y.G(45,r/a,1,8e4);o.position.set(0,-300,100);var i=new y.a(6710886);i.position.set(100,1e3,200),le.add(i);var c=new y.j(C,.9);function l(){se.render(le,o)}c.position.set(-100,-800,500),le.add(c),(se=new y.U({antialias:!0})).setSize(r,a),se.setClearColor(S,1),e.appendChild(se.domElement),new z.a(o,e).addEventListener("change",l),l()}(e,t)})).catch(console.error)}var pe,he,me=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return de(e.current),function(){le&&le.remove(),se&&se.dispose(),le=null,se=null}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:e})},ve=n(20),we=n(21);function ge(e){new Promise((function(e,t){var n=new ve.a;(new we.a).load("static/clock.mtl",(function(r){n.setMaterials(r),n.load("static/clock.obj",(function(t){e(t)}),void 0,t)}),void 0,t)})).then((function(t){!function(e,t){var n=e.offsetWidth,r=e.offsetHeight;(pe=new y.M).add(t);var a=new y.a(6710886);a.position.set(100,-100,-200),pe.add(a);var o=new y.j(13421772,1);o.position.set(2e3,1e3,1e3),pe.add(o);var i=new y.G(45,n/r,1,8e4);function c(){he.render(pe,i)}i.position.set(-150,-50,300),(he=new y.U({antialias:!0})).setSize(n,r),he.setClearColor(S,1),e.appendChild(he.domElement),new z.a(i,e).addEventListener("change",c),c()}(e,t)})).catch(console.error)}var be=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return ge(e.current),function(){pe&&he&&(pe.remove(),he.dispose(),pe=null,he=null)}}),[]),a.a.createElement("main",{className:"font-size-zero",ref:e})};function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var xe=function(){var e=ye(Object(r.useState)(!1),2),t=e[0],n=e[1],o=ye(Object(r.useState)(location.hash.split("#").pop()),2),i=o[0],u=o[1],f=["aside-wrapper"];function d(){t&&n(!1)}t||f.push("hide"),Object(r.useEffect)((function(){return document.addEventListener("click",d),function(){document.removeEventListener("click",d)}}),[t]);var p=s.map((function(e,t){return a.a.createElement("li",{key:t,onClick:function(){return function(e){u(e.path)}(e)},className:i===e.path?"is-current":""},a.a.createElement(c.b,{to:e.path},e.text))}));return a.a.createElement(c.a,null,a.a.createElement("div",null,a.a.createElement(b,{clickMenu:function(e){n(!t)}}),a.a.createElement("nav",{className:f.join(" ")},a.a.createElement("ul",null,p)),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/ClockObj"},a.a.createElement(be,null)),a.a.createElement(l.a,{path:"/ClockSTL"},a.a.createElement(me,null)),a.a.createElement(l.a,{path:"/CanvasCurrentTime"},a.a.createElement(ue,null)),a.a.createElement(l.a,{path:"/CanvasDemo"},a.a.createElement(te,null)),a.a.createElement(l.a,{path:"/Earth"},a.a.createElement(U,null)),a.a.createElement(l.a,{path:"/DrawLines"},a.a.createElement(G,null)),a.a.createElement(l.a,{path:"/Materials"},a.a.createElement(X,null)),a.a.createElement(l.a,{path:"/MultipleGeometry"},a.a.createElement(Y,null)),a.a.createElement(l.a,{path:"/First3DScene"},a.a.createElement(I,null)),a.a.createElement(l.a,{path:"/"},a.a.createElement(H,null)))))};n(34);i.a.render(a.a.createElement(xe,null),document.querySelector("#app"))}});