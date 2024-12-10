/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Widget_CCAT_v2=t(require("react")):e.Widget_CCAT_v2=t(e.react)}(self,(e=>(()=>{"use strict";var t={31:(e,t,n)=>{var r=n(155),o=n.n(r);const i=require("framer-motion");var a=n(72),c=n.n(a),s=n(825),l=n.n(s),u=n(659),f=n.n(u),d=n(56),p=n.n(d),h=n(540),m=n.n(h),g=n(113),y=n.n(g),v=n(66),b={};b.styleTagTransform=y(),b.setAttributes=p(),b.insert=f().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=m(),c()(v.A,b),v.A&&v.A.locals&&v.A.locals;const x=require("@mui/material/TextField");var w=n.n(x);const E=require("react-icons/io5"),S=require("@mui/material/Button");var j=n.n(S);const k=require("ccat-api");function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function _(){_=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),c=new T(r||[]);return o(a,"_invoke",{value:L(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",h="executing",m="completed",g={};function y(){}function v(){}function b(){}var x={};l(x,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(C([])));E&&E!==n&&r.call(E,a)&&(x=E);var S=b.prototype=y.prototype=Object.create(x);function j(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(o,i,a,c){var s=f(e[o],e,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==O(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,n,r){var o=d;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=P(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var l=f(t,n,r);if("normal"===l.type){if(o=r.done?m:p,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function P(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(O(t)+" is not iterable")}return v.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},j(k.prototype),l(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(S),l(S,s,"Generator"),l(S,a,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}function L(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){L(i,r,o,a,c,"next",e)}function c(e){L(i,r,o,a,c,"throw",e)}a(void 0)}))}}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e,t,n){return(t=function(e){var t=function(e){if("object"!=O(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==O(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],s=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){l=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return M(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}e=n.hmd(e),console.log("React version in da WIDGET:",o().version),e.exports=function(e){var t=e.baseUrl,n=void 0===t?"localhost":t,a=e.port,c=void 0===a?"1865":a,s=e.open_icon,l=void 0===s?"https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg":s,u=e.closed_icon,f=void 0===u?"https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg":u,d=e.sockets_await,p=void 0===d?5:d,h=e.widget_width,m=void 0===h?900:h,g=e.widget_height,y=void 0===g?800:g,v=e.translatedText,b=void 0===v?{en:{initialPhrase:"Welcome, how may I assist you today?",sorryPhrase:"Sorry , something went wrong ...",chatUnderneathMessage:"The assistant sometimes can 'lie', please take care.",widget_loading_message:"Loading, please wait...",process_wait_text:"Please wait till the process has finished."}}:v,x=C((0,r.useState)(!1),2),S=x[0],O=x[1],L=C((0,r.useState)(!1),2),I=L[0],M=L[1],D=C((0,r.useState)(!0),2),F=D[0],G=(D[1],C((0,r.useState)([]),2)),U=G[0],q=G[1],R=C((0,r.useState)(""),2),H=R[0],W=R[1],X=C((0,r.useState)(!1),2),B=X[0],Y=X[1],z=(0,r.useRef)(null),J=C((0,r.useState)(!1),2),K=J[0],$=J[1],Q=C((0,r.useState)(!1),2),V=Q[0],Z=Q[1],ee=C((0,r.useState)(!0),2),te=ee[0],ne=ee[1],re=(0,r.useRef)(0),oe=(0,r.useRef)(!1),ie=navigator.language.split("-")[0];console.log({baseUrl:n,port:c,open_icon:l,closed_icon:f,sockets_await:p,widget_width:m,widget_height:y,translatedText:b});var ae=function(e){return(b[ie]||b.en)[e]||console.log("Error , translation for ".concat(e," not found."))};(0,r.useEffect)((function(){z.current&&(z.current.scrollTop=z.current.scrollHeight)}),[U]);var ce=function(e){q((function(t){var n=T(t),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n[n.length-1]);return r.text+=e,"bot_writing"===r.sender&&(r.sender="bot"),n[n.length-1]=r,n}))},se=function(){var e=P(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==H&&K){Y(!0),q([].concat(T(U),[{text:H,sender:"user"}])),q((function(e){return[].concat(T(e),[{text:"",sender:"bot_writing"}])})),W("");try{V.send(H),V.onConnected((function(){console.log("Socket connected")})).onMessage((function(e){console.log("MESSAGE CONTENT: ".concat(e,"\n")),ce(e.content),"chat"===e.type&&Y(!1)})).onError((function(e){console.log(e),q((function(e){return[].concat(T(e),[{text:ae("sorryPhrase"),sender:"bot"}])}))})).onDisconnected((function(){console.log("Socket disconnected")}))}catch(e){console.error("Error receiving bot response :",e),q((function(e){return[].concat(T(e),[{text:ae("sorryPhrase"),sender:"bot"}])}))}}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function le(){return(le=P(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe.current||Z(new k.CatClient({baseUrl:n,port:c,userId:"DourakiesNeuer"}).onConnected((function(){console.log("Socket connected ".concat(re.current)),oe.current=!0,$(!0),re.current<p?(re.current++,q([{text:ae("widget_loading_message"),sender:"bot"}])):(q([{text:ae("initialPhrase"),sender:"bot"}]),ne(!1))})).onError((function(e){console.log(e),ne(!1),oe.current=!0,$(!1)}))),V&&V.api.memory.wipeConversationHistory();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,r.useEffect)((function(){!function(){le.apply(this,arguments)}()}),[K,re]);var ue=function(){var e=-o().useRef(Date.now()).current%1e3;return o().createElement("div",{className:"spinner-container"},o().createElement("div",{className:"spinner",id:"spinner",style:{"--spinner-delay":"".concat(e,"ms")}}))};return(0,r.useEffect)((function(){var e=window.parent.window,t={width:1.1*m,height:1.1*y};I?e.postMessage({type:"widgetOpened",dimensions:t},"*"):e.postMessage({type:"widgetClosed",dimensions:{width:90,height:90}},"*")}),[I]),I&&("".concat(m,"px"),"".concat(y,"px")),o().createElement(i.motion.div,{className:I?"cat-chat":"cat-icon",onHoverStart:function(){return O(!0)},onHoverEnd:function(){return O(!1)},style:{overflow:"hidden"},animate:{rotate:F&&S&&!I?[0,30,-30,10,-10,0]:0,scale:F&&S&&!I?1.2:1},onClick:I?null:function(){M(!0)}},o().createElement("div",{className:I?"rectangle":"rectangle-closed"},I?o().createElement("div",{className:"chat-header"},o().createElement("div",{className:"rectangle-img-container"},o().createElement("img",{className:"open-chat-icon",src:l,alt:"open chat icon"})),o().createElement("div",{className:"close-chat-X",onClick:function(){M(!1)}},o().createElement("svg",{className:"circle-X",viewBox:"0 0 24 24"},o().createElement("line",{x1:"3",y1:"3",x2:"21",y2:"21",stroke:"white",strokeWidth:"2"}),o().createElement("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"white",strokeWidth:"2"})))):o().createElement("img",{className:"closed-chat-icon",src:f,alt:"close chat icon"}),I?o().createElement("div",{className:"chat-page"},o().createElement("div",{className:"chat-messages",ref:z},U.map((function(e,t){return o().createElement("div",{key:t,className:"message ".concat(e.sender)},"bot_writing"===e.sender?o().createElement("div",{className:"dots"},o().createElement("div",null),o().createElement("div",null),o().createElement("div",null)):e.text)})),te&&o().createElement(ue,null)),te?o().createElement("div",{style:{alignSelf:"center"}},ae("process_wait_text")):" ",te?"":o().createElement(o().Fragment,null,o().createElement("div",{className:"chat-input"},o().createElement(w(),{label:"Feel free to ask anything!",variant:"standard",value:H,onChange:function(e){return W(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&(e.preventDefault(),se())},style:{width:"100%"},disabled:B||!K}),o().createElement(j(),{color:"primary",variant:"contained",onClick:se,disabled:B||!K},o().createElement(E.IoSend,null))),o().createElement("p",{style:{fontSize:"0.8rem",margin:"0",color:"#999"}},ae("chatUnderneathMessage")))):null))}},66:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([e.id,".rectangle-img-container {\n  height: 100;\n  aspect-ratio: 1 / 1;  \n}\n.cat-icon {\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  background-color: white;\n  color: black;\n  cursor: pointer;\n  border-radius: 50px;\n  width: 7vh;\n  height: 7vh;\n  aspect-ratio: 1/1;\n  display: flex;\n  transition: width 1.5s, height 1.5s, border-radius 1.5s;\n}\n\n.cat-icon img {\n  border-radius: inherit; \n  width: 5vh;\n  height: 6vh;\n  margin: -3px;\n}\n\n.cat-chat {\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  background-color: white;\n  color: black;\n  border-radius: 20px;\n  width: 400px;\n  height: 600px;\n  display: flex;\n  transition: width 1.5s, height 1.5s, border-radius 1.5s;\n}\n\n@media (max-width: 768px) {\n  .cat-chat {\n    width: 430px;\n    height: 600px;\n  }\n}\n\n.cat-chat img {\n  \n  width: 5vh;\n  height: 6vh;\n  margin: -3px;\n\n  object-fit: contain;\n  /* width: 50px;\n  height: 50px;\n  position: relative; */\n  /* top: -23px */\n}\n.open-chat-icon {\n\n  max-height: 100%;\n  aspect-ratio: 1/1;\n}\n\n/*  Add this into your CSS file */\n.rectangle {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  bottom: 5px;\n  left: 3px;\n  display: flex;\n  flex-direction: column;  /* Change flex direction from row (default) to column */\n  justify-content: space-between; /* Distribute space between children evenly */\n  padding: 10px;  /* Add some internal space for the \"X\" icon */\n  object-fit: contain;\n}\n.rectangle-closed{\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  bottom: 5px;\n  left: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px;\n  object-fit: contain; \n}\n.close-icon {\n  cursor: pointer;\n  margin-left: auto;\n/* Place the icon on the right */\n}\n\n.cat-chat {\n\n  border:1px solid rgb(202, 211, 248);\n  flex-grow: 1;\n  /* Allows the chat to grow and occupy available space */\n  overflow: auto;\n/* Add scrollbars if necessary */\n}\n\n.chat-page {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: auto;\n/* Or 'scroll' if you always prefer to show scrollbars */\n}\n\n.chat-messages {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: flex-start;\n}\n\n.message {\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.message.user {\n  align-self: flex-end;\n  background-color: #4e6db1;\n  color: white;\n  max-width: 80%;\n}\n\n.message.bot {\n  align-self: flex-start;\n  background-color: #c1d0da;\n  max-width: 80%;\n  text-align:left;\n}\n\n.message.bot_writing {\n  align-self: flex-start;\n  background-color: #c1d0da;\n  max-width: 80%;\n  text-align:left;\n}\n\n.message.bot_making {\n  align-self: flex-start;\n  background-color: #c3bdc9;\n  max-width: 80%;\n  text-align:left;\n}\n\n.chat-input {\n  display: flex;\n  padding: 10px;\n}\n\n.chat-input input {\n  flex-grow: 1;\n  margin-right: 10px;\n}\n\n\n.dots {\n  width: 3.5em;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.dots div {\n  width: 0.8em;\n  height: 0.8em;\n  border-radius: 50%;\n  background-color: #5a5a5a;\n  animation: fade 0.8s ease-in-out alternate infinite;\n}\n\n.dots div:nth-of-type(1) {\n  animation-delay: -0.4s;\n}\n\n.dots div:nth-of-type(2) {\n  animation-delay: -0.2s;\n}\n\n@keyframes fade {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n.spinner {\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #3498db; /* Blue */\n  border-radius: 50%;\n  height: 5vh;\n  aspect-ratio: 1/1;\n  margin-top: 10px;\n  animation: spin 2s linear infinite;\n  position: relative;\n  animation: 1000ms infinite spin;\n  animation-delay: var(--spinner-delay);\n}\n\n.spinner-container {\n  display: flex;\n  flex-direction: column; /* Arrange spinner and message container vertically */\n  justify-content: center;\n  align-items: center;\n  position: relative; /* Position absolutely relative to .chat-messages */\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%); /* Center the spinner */\n  width: 20%;\n  height: 20%;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.circle-X{\n  border:2px solid black;\n  border-radius: 50%;\n  padding:2px;\n  background-color: black;\n}\n.close-chat-X {\n  cursor:pointer;\n  min-width: 5%; \n  margin-top: 10px;\n  margin-right: 10px;\n  padding-left: 10px;\n}\n.chat-header{\n  display: flex;\n  justify-content: space-between;\n  min-height:8%;\n\n}\n",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,f="".concat(l," ").concat(u);i[l]=u+1;var d=n(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},155:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,r),i.loaded=!0,i.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,r(31)})()));