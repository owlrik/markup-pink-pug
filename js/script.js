/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
"use strict";

// forEach polyfill for IE11
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
(function () {
  'use strict';

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
})();
"use strict";

(function () {
  'use strict';

  var ESC_KEY = 'Escape';
  var contestForm = document.querySelector('.form.contest__form');

  if (contestForm) {
    var inputName = contestForm.querySelector('#name');
    var inputSurname = contestForm.querySelector('#surname');
    var inputEmail = contestForm.querySelector('#email');
    var btnSubmit = contestForm.querySelector('.form__submit .button');
    var overlay = document.querySelector('.modal');
    var successWindow = overlay.querySelector('.form-message.form-message--success');
    var errorWindow = overlay.querySelector('.form-message.form-message--error');
    var btnCloseSuccessPopup = overlay.querySelector('.form-message--success .form-message__button');
    var btnCloseErrorPopup = overlay.querySelector('.form-message--error .form-message__button');

    var onSuccessPopupEscPress = function onSuccessPopupEscPress(evt) {
      if (evt.key === ESC_KEY) {
        closeSuccessPopup();
      }
    };

    var onErrorPopupEscPress = function onErrorPopupEscPress(evt) {
      if (evt.key === ESC_KEY) {
        closeErrorPopup();
      }
    };

    var showSuccessPopup = function showSuccessPopup() {
      overlay.classList.add('modal--show');
      successWindow.classList.remove('hidden');
      document.addEventListener('keydown', onSuccessPopupEscPress);
    };

    var showErrorPopup = function showErrorPopup() {
      overlay.classList.add('modal--show');
      errorWindow.classList.remove('hidden');
      document.addEventListener('keydown', onErrorPopupEscPress);
    };

    var closeSuccessPopup = function closeSuccessPopup() {
      overlay.classList.remove('modal--show');
      successWindow.classList.add('hidden');
      document.removeEventListener('keydown', onSuccessPopupEscPress);
    };

    var closeErrorPopup = function closeErrorPopup() {
      overlay.classList.remove('modal--show');
      errorWindow.classList.add('hidden');
      document.removeEventListener('keydown', onErrorPopupEscPress);
    };

    var onInputInvalid = function onInputInvalid(input) {
      input.classList.add('text-field__input--invalid');
    };

    var onInputBlur = function onInputBlur(input) {
      if (input.checkValidity()) {
        input.classList.remove('text-field__input--invalid');
      }
    };

    btnSubmit.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (contestForm.checkValidity()) {
        showSuccessPopup();
      } else {
        showErrorPopup();
      }
    });
    inputName.addEventListener('blur', function () {
      onInputBlur(inputName);
    });
    inputSurname.addEventListener('blur', function () {
      onInputBlur(inputSurname);
    });
    inputEmail.addEventListener('blur', function () {
      onInputBlur(inputEmail);
    });
    inputName.addEventListener('invalid', function () {
      onInputInvalid(inputName);
    });
    inputSurname.addEventListener('invalid', function () {
      onInputInvalid(inputSurname);
    });
    inputEmail.addEventListener('invalid', function () {
      onInputInvalid(inputEmail);
    });
    btnCloseSuccessPopup.addEventListener('click', function () {
      closeSuccessPopup();
    });
    btnCloseErrorPopup.addEventListener('click', function () {
      closeErrorPopup();
    });
  }
})();
"use strict";

function mapHandler() {
  var mapElement = document.querySelector('#map');

  if (mapElement) {
    var pinkOfficeLatlng = new google.maps.LatLng(59.938794, 30.323082);
    var mapOptions = {
      center: pinkOfficeLatlng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    };
    var map = new google.maps.Map(mapElement, mapOptions);
    var markerImage = 'img/icon-map-marker.svg';
    var marker = new google.maps.Marker({
      position: pinkOfficeLatlng,
      map: map,
      icon: markerImage,
      title: 'HTML Academy'
    });
  }
}
"use strict";

(function () {
  'use strict';

  var UtilityCheck = function UtilityCheck() {};

  UtilityCheck.prototype.isMobile = function (maxWidth) {
    return window.matchMedia("(max-width: " + maxWidth + "px )").matches;
  };

  UtilityCheck.prototype.isTouchDevice = function () {
    return "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
  };

  var envCheck = new UtilityCheck();

  var Carousel = function Carousel(slider) {
    var self = this;
    this.slider = slider;
    this.innerContainer = slider.querySelector('.slider__inner');
    this.slides = slider.querySelectorAll('.slider__item');
    this.togglerPrev = slider.querySelector('.slider__toggler--prev');
    this.togglerNext = slider.querySelector('.slider__toggler--next');
    this.controls = slider.querySelectorAll('.slider__control');
    this.offset = 0;
    this.hasTogglers = this.togglerPrev && this.togglerNext;

    if (this.hasTogglers) {
      this.togglerPrev.addEventListener('click', function () {
        self.toggle(false);
      });
      this.togglerNext.addEventListener('click', function () {
        self.toggle(true);
      });
    }

    if (envCheck.isTouchDevice()) {
      this.slider.addEventListener('touchstart', function (evt) {
        self.onTouchStart(evt);
      });
      this.slider.addEventListener('touchmove', function (evt) {
        self.onTouchMove(evt);
      });
      this.slider.addEventListener('touchend', function (evt) {
        self.onTouchEnd(evt);
      });
    }

    this.initControls(this.controls);
  };

  Carousel.prototype.initControls = function (controls) {
    var self = this;

    if (controls.length > 0) {
      controls.forEach(function (control) {
        control.addEventListener('click', function (evt) {
          self.controlOnClick(evt.currentTarget);
        });
      });
    }
  };

  Carousel.prototype.controlOnClick = function (control) {
    var newSlideIndex = [].indexOf.call(this.controls, control);
    this.toggleTo(newSlideIndex);
  };

  Carousel.prototype.getActiveIndex = function () {
    return parseInt(this.slider.dataset.frameindex, 10) || 0;
  };

  Carousel.prototype.setActiveIndex = function (index) {
    this.slider.dataset.frameindex = index;
  };

  Carousel.prototype.toggle = function (isForward) {
    var currentSlideIndex = this.getActiveIndex();
    var newSlideIndex = isForward ? ++currentSlideIndex : --currentSlideIndex;

    if (newSlideIndex >= 0 && newSlideIndex < this.slides.length) {
      this.toggleTo(newSlideIndex);
    }
  };

  Carousel.prototype.toggleTo = function (index) {
    this.setActiveControls(index);
    this.setActiveIndex(index);
    this.configureTogglers(index);
    this.moveTo(index);
  };

  Carousel.prototype.setActiveControls = function (index) {
    this.configureControls(this.controls, 'slider__control--active', index);
  };

  Carousel.prototype.configureControls = function (controls, activeClassName, index) {
    controls.forEach(function (control) {
      control.classList.remove(activeClassName);
    });
    var activeControl = controls[index];
    activeControl.classList.add(activeClassName);
  };

  Carousel.prototype.configureTogglers = function (index) {
    var maxSlideIndex = this.slides.length - 1;

    if (this.hasTogglers) {
      this.togglerPrev.disabled = false;
      this.togglerNext.disabled = false;

      if (index === 0) {
        this.togglerPrev.disabled = true;
      } else if (index === maxSlideIndex) {
        this.togglerNext.disabled = true;
      }
    }
  };

  Carousel.prototype.moveTo = function (index) {
    var nextSlide = this.slides[index];
    var slideOffset = this.getItemOffset(nextSlide);
    this.move(slideOffset);
  };

  Carousel.prototype.getItemOffset = function (slideItem) {
    return -slideItem.offsetLeft;
  };

  Carousel.prototype.getOffsetBounds = function () {
    return [this.getItemOffset(this.slides[this.slides.length - 1]), this.getItemOffset(this.slides[0])];
  };

  Carousel.prototype.move = function (itemOffset) {
    var bounds = this.getOffsetBounds();
    var rightBound = bounds[0];
    var leftBound = bounds[1];
    var realItemOffset = itemOffset < rightBound ? rightBound : itemOffset;
    realItemOffset = realItemOffset > leftBound ? leftBound : realItemOffset;
    this.offset = realItemOffset;
    var offsetPercent = 100 * realItemOffset / this.innerContainer.offsetWidth * 10 / 10;
    this.innerContainer.style.transform = 'translateX(' + offsetPercent + '%)';
  };

  Carousel.prototype.onTouchStart = function (evt) {
    if (evt.touches.length === 1) {
      var sliderTouch = evt.touches[0];
      this.slider.classList.add('slider--touching');
      this.initialOffset = this.offset;
      this.initialX = sliderTouch.screenX;
      this.initialY = sliderTouch.screenY;
    } else {
      this.slider.classList.remove('slider--touching');
    }
  };

  Carousel.prototype.onTouchMove = function (evt) {
    if (this.isTouching()) {
      var sliderTouch = evt.touches[0];
      var touchOffsetX = sliderTouch.screenX - this.initialX;
      var touchOffsetY = sliderTouch.screenY - this.initialY;

      if (Math.abs(touchOffsetX) > Math.abs(touchOffsetY)) {
        evt.preventDefault();
        evt.stopPropagation();
        this.move(this.initialOffset + touchOffsetX);
      } else {
        this.slider.classList.remove('slider--touching');
      }
    }
  };

  Carousel.prototype.onTouchEnd = function (evt) {
    if (this.isTouching()) {
      this.slider.classList.remove('slider--touching');
      var offset = this.offset - this.initialOffset;
      var SWIPE_THRESHOLD = 100;

      if (Math.abs(offset) < SWIPE_THRESHOLD) {
        this.toggleTo(this.getActiveIndex());
      } else {
        offset < 0 ? this.toggle(true) : this.toggle(false);
      }
    }
  };

  Carousel.prototype.isTouching = function () {
    return this.slider.classList.contains('slider--touching');
  };

  var sliderReviews = document.querySelector('.reviews__slider');

  if (sliderReviews) {
    var carouselReviews = new Carousel(sliderReviews);
  }

  var MonoSlider = function MonoSlider(slider) {
    var self = this;
    this.slider = slider;
    this.innerContainer = slider.querySelector('.prices-table');
    this.slides = this.getPseudoSlides();
    this.togglerPrev = slider.querySelector('.slider__toggler--prev');
    this.togglerNext = slider.querySelector('.slider__toggler--next');
    this.controls = slider.querySelectorAll('.slider__control');
    this.offset = 0;
    this.hasTogglers = this.togglerPrev && this.togglerNext;

    if (envCheck.isTouchDevice() && envCheck.isMobile(659)) {
      this.slider.addEventListener('touchstart', function (evt) {
        self.onTouchStart(evt);
      });
      this.slider.addEventListener('touchmove', function (evt) {
        self.onTouchMove(evt);
      });
      this.slider.addEventListener('touchend', function (evt) {
        self.onTouchEnd(evt);
      });
    }

    this.initControls(this.controls);
  };

  MonoSlider.prototype = Object.create(Carousel.prototype);

  MonoSlider.prototype.getSlideWidth = function () {
    var sliderFrame = this.slider.querySelector('.slider__overflow-wrap');
    var sliderFrameStyles = window.getComputedStyle(sliderFrame);
    var sliderFramePadding = parseFloat(sliderFrameStyles.paddingRight) + parseFloat(sliderFrameStyles.paddingLeft);
    return sliderFrame.clientWidth - sliderFramePadding;
  };

  MonoSlider.prototype.getSlidesCount = function () {
    return this.innerContainer.clientWidth / this.getSlideWidth();
  };

  MonoSlider.prototype.getPseudoSlides = function () {
    var slidesCount = this.getSlidesCount();
    var slideWidth = this.getSlideWidth();
    var pseudoSlides = [];

    for (var i = 0; i < slidesCount; i++) {
      pseudoSlides.push({
        offsetLeft: slideWidth * i
      });
    }

    return pseudoSlides;
  };

  MonoSlider.prototype.initControls = function (controls) {
    var self = this;

    if (envCheck.isMobile(659) && controls.length > 0) {
      controls.forEach(function (control) {
        control.addEventListener('click', function (evt) {
          self.controlOnClick(evt.currentTarget);
        });
      });
    }
  };

  var sliderPrices = document.querySelector('.prices__slider');

  if (sliderPrices) {
    var pricesSlider = new MonoSlider(sliderPrices);

    if (envCheck.isMobile(659)) {
      pricesSlider.toggleTo(1);
    }
  }
})();
"use strict";

(function () {
  'use strict';

  var navigationMenu = document.querySelector('.main-nav');
  var navigationMenuBurger = navigationMenu.querySelector('.main-nav__trigger');

  var onTriggerClick = function onTriggerClick(evt) {
    evt.preventDefault();
    navigationMenu.classList.toggle('main-nav--closed');
    navigationMenu.classList.toggle('main-nav--opened');
  };

  navigationMenuBurger.addEventListener('click', onTriggerClick);
})();
"use strict";

(function () {
  'use strict';

  svg4everybody();
  objectFitImages();
})();