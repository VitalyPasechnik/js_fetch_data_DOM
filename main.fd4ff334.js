parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var r="https://mate-academy.github.io/phone-catalogue-static",o=function(t){return fetch("".concat(r).concat(t)).then(function(t){return t.ok||setTimeout(function(){return Promise.reject(new Error("".concat(t.status," - ").concat(t.statusText)))},5e3),t.headers.get("content-type").includes("application/json")||Promise.reject(new Error("content-type is not supported")),t.json()})},a=function(){return o("/api/phones.json")};a().then(function(t){i(t)}).catch(function(t){return t});var i=function(n){var e,r=document.createElement("ul"),o=t(n);try{for(o.s();!(e=o.n()).done;){var a=e.value,i=document.createElement("li");i.innerText=a.name,i.dataset.name=a.id,i.addEventListener("mouseup",function(t){c(t.target.dataset.name)}),i.addEventListener("mouseover",function(t){t.target.style.color="red",t.target.style.cursor="pointer"}),i.addEventListener("mouseout",function(t){t.target.style.color=""}),r.appendChild(i)}}catch(u){o.e(u)}finally{o.f()}document.body.append(r)},c=function(t){o("/api/phones/".concat(t,".json")).then(function(t){var n;n=t,document.body.insertAdjacentHTML("beforeend",'\n    <div style="\n      display:flex;\n      flex-direction:column;\n      width:700px;\n      height:auto;\n      border: 1px solid #cbdcf7;\n      border-radius:20px;\n      background:cbdcf7;\n      ">\n      <h1>'.concat(n.name.toUpperCase(),'</h1>\n      <img\n        style="min-height:300px"\n        src="https://mate-academy.github.io/phone-catalogue-static/img/phones/').concat(n.id,'.0.jpg">\n    <ul id="features">\n      <li>').concat(n.additionalFeatures,"</li>\n      <li>").concat(n.description,"</li>\n    </ul>\n  </div>\n  "))}).catch(function(t){return t})};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fd4ff334.js.map