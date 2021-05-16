/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Fireworks=e():t.Fireworks=e()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var t={465:(t,e,i)=>{i.d(e,{Z:()=>r});var n=i(645),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,"body{margin:0;padding:0}a{display:inline-block;position:fixed;top:20px;right:20px;text-decoration:none;opacity:.6}a:hover{opacity:.8}a svg{fill:currentColor;color:#fff}",""]);const r=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);n&&s[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},379:(t,e,i)=>{var n,s=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),r=[];function o(t){for(var e=-1,i=0;i<r.length;i++)if(r[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},n=[],s=0;s<t.length;s++){var a=t[s],h=e.base?a[0]+e.base:a[0],c=i[h]||0,d="".concat(h," ").concat(c);i[h]=c+1;var l=o(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(r[l].references++,r[l].updater(u)):r.push({identifier:d,updater:g(u,e),references:1}),n.push(d)}return n}function h(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function l(t,e,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function u(t,e,i){var n=i.css,s=i.media,r=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,p=0;function g(t,e){var i,n,s;if(e.singleton){var r=p++;i=f||(f=h(e)),n=l.bind(null,i,r,!1),s=l.bind(null,i,r,!0)}else i=h(e),n=u.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var s=o(i[n]);r[s].references--}for(var h=a(t,e),c=0;c<i.length;c++){var d=o(i[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=h}}}}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{i.r(n),i.d(n,{Fireworks:()=>d});var t=i(379),e=i.n(t),s=i(465);function r(t,e=0,i=!1){const n=Math.random()*(t-e)+e;return i?Math.round(n):n}function o(t,e,i,n){return Math.sqrt(Math.pow(t-i,2)+Math.pow(e-n,2))}function a(t){return{width:t instanceof Window?window.innerWidth:t.offsetWidth,height:t instanceof Window?window.innerHeight:t.offsetHeight}}e()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;class h{constructor(t){this.options=t;const{x:e,y:i,hue:n}=t;for(this.x=e,this.y=i,this.angle=r(2*Math.PI),this.speed=r(10,1),this.friction=.95,this.gravity=1,this.hue=r(n+20,n-20),this.brightness=r(80,50),this.alpha=1,this.decay=r(.03,.015),this.coordinates=[],this.coordinateCount=5;this.coordinateCount--;)this.coordinates.push([this.x,this.y])}draw(t){const{hue:e}=this.options,[i=0,n=0]=this.coordinates[this.coordinates.length-1];t.beginPath(),t.moveTo(i,n),t.lineTo(this.x,this.y),t.strokeStyle=`hsl(${e}, 100%, ${this.brightness}%, ${this.alpha})`,t.stroke()}update(t,e,i){this.draw(i),this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=0&&e.splice(t,1)}}class c{constructor(t){this.options=t;const{x:e,y:i,targetX:n,targetY:s}=t;for(this.x=e,this.y=i,this.startX=e,this.startY=i,this.targetX=n,this.targetY=s,this.distanceTarget=o(e,i,n,s),this.distanceTraveled=0,this.angle=Math.atan2(s-i,n-e),this.speed=2,this.acceleration=1.02,this.brightness=r(70,50),this.targetRadius=1,this.coordinateCount=3,this.coordinates=[];this.coordinateCount--;)this.coordinates.push([e,i]);this.hue=r(120,50)}draw(t){const[e=0,i=0]=this.coordinates[this.coordinates.length-1];t.beginPath(),t.moveTo(e,i),t.lineTo(this.x,this.y),t.strokeStyle=`hsl(${this.hue}, 100%, ${this.brightness}%)`,t.stroke(),t.beginPath(),t.arc(this.targetX,this.targetY,this.targetRadius,0,2*Math.PI),t.stroke()}update(t,e,i){this.draw(i),this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.targetRadius<8?this.targetRadius+=.2:this.targetRadius=1,this.speed*=this.acceleration;const n=Math.cos(this.angle)*this.speed,s=Math.sin(this.angle)*this.speed;this.distanceTraveled=o(this.startX,this.startY,this.x+n,this.y+s),this.distanceTraveled>=this.distanceTarget?(e.splice(t,1),this.createParticles()):(this.x+=n,this.y+=s)}createParticles(){const{targetX:t,targetY:e,particles:i}=this.options;let n=r(120,30,!0);for(;n--;)i.push(new h({x:t,y:e,hue:this.hue}))}}function d(t){const e=document.createElement("canvas"),i=e.getContext("2d");e.style.background="#000";const n=[],s=[];let{width:o,height:h}=a(t);function d(t,e){t=null!=t?t:r(o);const i=new c({x:r(t+20,t-20),y:h,targetX:t,targetY:null!=e?e:r(h/2),particles:s});n.push(i)}e.width=o,e.height=h,window.addEventListener("resize",(()=>{const i=a(t);o=i.width,h=i.height,e.width=o,e.height=h})),d();let l=0;return e.addEventListener("mouseup",(t=>{d(t.pageX,t.pageY)})),function t(){requestAnimationFrame(t),i.fillStyle="rgba(0, 0, 0, 0.5)",i.clearRect(0,0,e.width,e.height);let r=n.length;for(;r--;)n[r].update(r,n,i);let o=s.length;for(;o--;)s[o].update(o,s,i);l>20?(l=0,d()):l++}(),e}})(),n})()}));