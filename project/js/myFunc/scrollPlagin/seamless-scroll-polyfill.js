var seamless=function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},e.apply(this,arguments)};function n(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,l=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=l.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return i}var o=function(t){return void 0===t||"auto"===t||"instant"===t||"smooth"===t};function r(t,e){this.scrollLeft=t,this.scrollTop=e}var l=function(t,e,n){return void 0===n&&(n="cannot convert to dictionary."),"Failed to execute '".concat(t,"' on '").concat(e,"': ").concat(n)},i=function(t,e,n){return l(t,e,"The provided value '".concat(n,"' is not a valid enum value of type ScrollBehavior."))},c=function(t,e,n){var o,r="__SEAMLESS.BACKUP$".concat(e);return t[r]||!t[e]||(null===(o=t[e])||void 0===o?void 0:o.__isPolyfill)||(t[r]=t[e]),t[r]||n},u=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},a=function(t){return"scrollBehavior"in window.document.documentElement.style&&!0!==(null==t?void 0:t.forcePolyfill)},s=function(t){Object.defineProperty(t,"__isPolyfill",{value:!0})},f=function(t,e){s(e),[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach((function(n){c(n,t),n[t]=e}))},d=function(t){return t.ownerDocument.scrollingElement||t.ownerDocument.documentElement};var v=function(t){return.5*(1-Math.cos(Math.PI*t))};function w(){var t,e;return w=e=(null===(t=window.performance)||void 0===t?void 0:t.now)?function(){return window.performance.now()}:function(){return window.Date.now()},e()}var m=function(t){var e=(w()-t.timeStamp)/(t.duration||500);if(e>1)return t.method(t.targetX,t.targetY),void t.callback();var n=(t.timingFunc||v)(e),o=t.startX+(t.targetX-t.startX)*n,r=t.startY+(t.targetY-t.startY)*n;t.method(o,r),t.rafId=window.requestAnimationFrame((function(){m(t)}))},h=function(t){return isFinite(t)?Number(t):0},p=function(t,n,o){var l,i;if(function(t){var e;return null!==(e=t.isConnected)&&void 0!==e?e:!(t.ownerDocument&&1&t.ownerDocument.compareDocumentPosition(t))}(t)){var u=t.scrollLeft,a=t.scrollTop,s=h(null!==(l=n.left)&&void 0!==l?l:u),f=h(null!==(i=n.top)&&void 0!==i?i:a);if(s!==u||f!==a){var d=c(HTMLElement.prototype,"scroll",r),v=c(Object.getPrototypeOf(t),"scroll",d).bind(t);if("smooth"===n.behavior){var p=function(){window.removeEventListener("wheel",g),window.removeEventListener("touchmove",g)},y=e(e({},o),{timeStamp:w(),startX:u,startY:a,targetX:s,targetY:f,rafId:0,method:v,callback:function(){p();var e=9===t.nodeType;t.dispatchEvent(function(t){if("function"==typeof Event)return new Event("scrollend",{bubbles:t,cancelable:!1});var e=document.createEvent("Event");return e.initEvent("scrollend",t,!1),e}(e))}}),g=function(){window.cancelAnimationFrame(y.rafId),p()};window.addEventListener("wheel",g,{passive:!0,once:!0}),window.addEventListener("touchmove",g,{passive:!0,once:!0}),m(y)}else v(s,f)}}},y=function(t){return function(e,r,c){var a,s=n((a=e).window===a?[d(e.document.documentElement),"Window"]:[e,"Element"],2),f=s[0],v=s[1],w=null!=r?r:{};if(!u(w))throw new TypeError(l(t,v));if(!o(w.behavior))throw new TypeError(i(t,v,w.behavior));"scrollBy"===t&&(w.left=h(w.left)+f.scrollLeft,w.top=h(w.top)+f.scrollTop),p(f,w,c)}},g=y("scroll"),b=y("scrollTo"),E=y("scrollBy"),T=g,S=b,P=E,L=g,B=b,V=E,D=function(t){switch(t){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},M=function(t,e,o,r){var l,i=0;switch(e||(i^=2),t){case 0:i=i>>1|(1&i)<<1,o=(l=n([r,o],2))[0],r=l[1];break;case 1:case 3:i^=1;break;case 4:i^=2}return[i,o,r]},I=function(t){return 1==(1&M(D(t.writingMode),"rtl"!==t.direction,void 0,void 0)[0])},H=function(t,e,n,o,r,l,i){return 0!==t?t:r<e&&l>n||r>e&&l<n?null:r<=e&&i<=o||l>=n&&i>=o?2:l>n&&i<o||r<e&&i>o?3:null},W=function(t){return"visible"!==t&&"clip"!==t},k=function(t,e){return(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth)&&(W(e.overflowY)||W(e.overflowX)||t===d(t))},C=function(t){var e=t.parentNode,n=t.parentElement;if(null===n&&null!==e){if(11===e.nodeType)return e.host;if(9===e.nodeType)return function(t){var e;try{return(null===(e=t.ownerDocument.defaultView)||void 0===e?void 0:e.frameElement)||null}catch(t){return null}}(t)}return n},X=function(t,e,n){return t<e?e:t>n?n:t},Y=function(t,e,n){switch(t){case 1:return(e+n)/2;case 3:return n;case 2:case 0:return e}},j=function(t,e){var o,r,l,i=null===(o=t.ownerDocument.defaultView)||void 0===o?void 0:o.visualViewport,c=n(t===d(t)?[0,0,null!==(r=null==i?void 0:i.width)&&void 0!==r?r:t.clientWidth,null!==(l=null==i?void 0:i.height)&&void 0!==l?l:t.clientHeight]:[e.left,e.top,t.clientWidth,t.clientHeight],4),u=c[0],a=c[1],s=c[2],f=c[3],v=u+t.clientLeft,w=a+t.clientTop;return[w,v+s,w+f,v]},x=function(t,e){var o=[],r=t.ownerDocument,l=r.defaultView;if(!l)return o;for(var i=window.getComputedStyle(t),c="rtl"!==i.direction,u=n(function(t,e,o){var r=n(M(e,o,t.block||"start",t.inline||"nearest"),3),l=r[0];return[r[1],r[2]].map((function(t,e){switch(t){case"center":return 1;case"nearest":return 0;default:return"start"===t==!(l>>e&1)?2:3}}))}(e,D(i.writingMode||i.getPropertyValue("-webkit-writing-mode")||i.getPropertyValue("-ms-writing-mode")),c),2),a=u[0],s=u[1],f=n(function(t,e,n){var o,r=e.top,l=e.right,i=e.bottom,c=e.left,u=(o=t.ownerDocument,["scroll-margin","scroll-snap-margin"].filter((function(t){return t in o.documentElement.style}))[0]);if(!u)return[r,l,i,c];var a=function(t){var e=n.getPropertyValue("".concat(u,"-").concat(t));return parseInt(e,10)||0};return[r-a("top"),l+a("right"),i+a("bottom"),c-a("left")]}(t,t.getBoundingClientRect(),i),4),d=f[0],v=f[1],w=f[2],m=f[3],h=C(t);null!==h;h=C(h)){if(r!==h.ownerDocument){if(!(l=(r=h.ownerDocument).defaultView))break;var p=h.getBoundingClientRect(),y=p.left,g=p.top;d+=g,v+=y,w+=g,m+=y}var b=l.getComputedStyle(h);if("fixed"===b.position)break;if(k(h,b)){var E=h.getBoundingClientRect(),T=n(j(h,E),4),S=T[0],P=T[1],L=T[2],B=T[3],V=H(a,B,P,h.clientWidth,m,v,v-m),W=H(s,S,L,h.clientHeight,d,w,w-d),x=null===V?0:Y(V,m,v)-Y(V,B,P),O=null===W?0:Y(W,d,w)-Y(W,S,L),_=I(b)?X(x,-h.scrollWidth+h.clientWidth-h.scrollLeft,-h.scrollLeft):X(x,-h.scrollLeft,h.scrollWidth-h.clientWidth-h.scrollLeft),F=X(O,-h.scrollTop,h.scrollHeight-h.clientHeight-h.scrollTop);o.push([h,{left:h.scrollLeft+_,top:h.scrollTop+F,behavior:e.behavior}]),d=Math.max(d-F,S),v=Math.min(v-_,P),w=Math.min(w-F,L),m=Math.max(m-_,B)}}return o},O=function(t,e,r){var l=e||{};if(!o(l.behavior))throw new TypeError(i("scrollIntoView","Element",l.behavior));x(t,l).forEach((function(t){var e=n(t,2),o=e[0],l=e[1];T(o,l,r)}))},_=O,F=function(t,e){return function(n){if(!a(n)){var o={scroll:g,scrollTo:b,scrollBy:E}[t];e(t,(function(){var t=arguments;1!==arguments.length?o(this,{left:t[0],top:t[1]}):o(this,t[0],n)}))}}},A=F("scroll",f),R=F("scrollTo",f),N=F("scrollBy",f),q=function(t,e){s(e),c(window,t),window[t]=e},z=F("scroll",q),G=F("scrollTo",q),K=F("scrollBy",q);function U(t){_(this,{block:null==t||t?"start":"end",inline:"nearest"})}var $=function(t){if(!a(t)){var e=c(window.HTMLElement.prototype,"scrollIntoView",U);f("scrollIntoView",(function(){var n=arguments,o=n[0];1===n.length&&u(o)?_(this,o,t):e.apply(this,n)}))}};return t.elementScroll=T,t.elementScrollBy=P,t.elementScrollByPolyfill=N,t.elementScrollIntoView=_,t.elementScrollIntoViewPolyfill=$,t.elementScrollPolyfill=A,t.elementScrollTo=S,t.elementScrollToPolyfill=R,t.polyfill=function(t){a(t)||(A(t),R(t),N(t),$(t),z(t),G(t),K(t))},t.scroll=g,t.scrollBy=E,t.scrollIntoView=O,t.scrollTo=b,t.windowScroll=L,t.windowScrollBy=V,t.windowScrollByPolyfill=K,t.windowScrollPolyfill=z,t.windowScrollTo=B,t.windowScrollToPolyfill=G,t}({});"object"==typeof module&&(module.exports=seamless);
//# sourceMappingURL=browser.min.js.map