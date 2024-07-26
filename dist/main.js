(()=>{var e={208:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    max-width: 100%;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    background-color: #343a40;\n}\n\n.navbar > .container-fluid {\n    justify-content: space-around;\n}\n\n.navbar > .container-fluid > .navbar-brand{\n    font-size: 1.8rem;\n}\n\n.d-block {\n    height: 80vh;\n    object-fit: cover;\n}\n\n.contentDiv{\n    margin: auto;\n}\n\n.rowContainer{\n    height: 100%;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    padding: 30px;\n    gap: 15px;\n}\n\n#currentCard{\n    border-radius: 30px;\n}\n\n.title{\n    margin: 30px;\n}\n\n.currentSVG{\n    height: 7rem;\n    width: 7rem;\n    margin: 30px;\n}\n\n.row2{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 5px;\n}\n\n.hourDiv{\n    width: clamp(250px, 15%, 20%);\n    padding: 3px;\n}\n\n.hourImg{\n    height: 4rem;\n    width: 4rem;\n}\n\np {\n    margin-left: 10px;\n}",""]);const c=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},511:(e,t,n)=>{"use strict";var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),d=n(56),u=n.n(d),l=n(540),p=n.n(l),f=n(113),m=n.n(f),h=n(208),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},44:()=>{document.querySelector(".title"),document.querySelector(".mainImg");const e=document.querySelector(".contentDiv");async function t(t){try{const n=await fetch("https://api.weatherapi.com/v1/forecast.json?key=66bcfc1fd3c246058af81851231405&q="+t+"&days=1");let r=await n.json();r.current,r.forecast.forecastday[0],console.log(r.forecast.forecastday[0].hour[1].time),function(t){e.firstElementChild.remove(),e.firstElementChild&&e.firstElementChild.remove(),e.classList.add("rowContainer");const n=document.createElement("div"),r=document.createElement("row"),o=document.createElement("h2");o.textContent=t.location.name+", "+t.location.localtime+":";const a=document.createElement("img");a.src="https:"+t.current.condition.icon,n.appendChild(o).classList.add("title"),n.appendChild(a).classList.add("currentSVG"),e.appendChild(n).classList.add("card","text-bg-dark"),e.appendChild(r).classList.add("row2");for(let e=0;e<24;e++){let n=document.createElement("div"),o=document.createElement("p");o.textContent=t.forecast.forecastday[0].hour[e].time.slice(-6),n.classList.add("card","text-bg-dark","hourDiv"),r.appendChild(n),n.appendChild(o);const a=document.createElement("img");a.src="https:"+t.forecast.forecastday[0].hour[e].condition.icon,n.appendChild(a).classList.add("hourImg")}}(r)}catch(e){console.log(e)}}const n=document.querySelector("#submit"),r=document.querySelector("#search"),o=document.querySelector("#madrid"),a=document.querySelector("#paris"),i=document.querySelector("#rome");n.addEventListener("click",(e=>{e.preventDefault(),t(r.value),r.value=""})),o.addEventListener("click",(()=>{t("madrid")})),a.addEventListener("click",(()=>{t("paris")})),i.addEventListener("click",(()=>{t("rome")}))},402:(e,t,n)=>{"use strict";e.exports=n.p+"assets/madrid.jpg"},452:(e,t,n)=>{"use strict";e.exports=n.p+"assets/paris.jpg"},310:(e,t,n)=>{"use strict";e.exports=n.p+"assets/rome.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,n(44),n(511),n(402),n(452),n(310)})();