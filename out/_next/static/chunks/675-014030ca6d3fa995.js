(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8566:function(e,t,i){"use strict";var n=i(930),r=i(5696),o=i(7980);t.default=function(e){var t,i=e.src,a=e.sizes,f=e.unoptimized,y=void 0!==f&&f,A=e.priority,k=void 0!==A&&A,S=e.loading,j=e.lazyRoot,O=void 0===j?null:j,x=e.lazyBoundary,E=void 0===x?"200px":x,P=e.className,R=e.quality,_=e.width,I=e.height,q=e.objectFit,D=e.objectPosition,L=e.onLoadingComplete,N=e.loader,W=void 0===N?z:N,C=e.placeholder,M=void 0===C?"empty":C,B=e.blurDataURL,U=function(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),H=c.useRef(null),F=c.useContext(d.ImageConfigContext),G=c.useMemo((function(){var e=p||F||l.imageConfigDefault,t=[].concat(o(e.deviceSizes),o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:i})}),[F]),J=U,V=a?"responsive":"intrinsic";"layout"in J&&(J.layout&&(V=J.layout),delete J.layout);var Q="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(i)){var T=b(i)?i.default:i;if(!T.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(T)));if(B=B||T.blurDataURL,Q=T.src,(!V||"fill"!==V)&&(I=I||T.height,_=_||T.width,!T.height||!T.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(T)))}i="string"===typeof i?i:Q;var K=w(_),X=w(I),Y=w(R),Z=!k&&("lazy"===S||"undefined"===typeof S);(i.startsWith("data:")||i.startsWith("blob:"))&&(y=!0,Z=!1);h.has(i)&&(Z=!1);0;var $,ee=u.useIntersection({rootRef:O,rootMargin:E,disabled:!Z}),te=r(ee,2),ie=te[0],ne=te[1],re=!Z||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:D},le="blur"===M?{filter:"blur(20px)",backgroundSize:q||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:D||"0% 0%"}:{};if("fill"===V)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var ue=X/K,de=isNaN(ue)?"100%":"".concat(100*ue,"%");"responsive"===V?(oe.display="block",oe.position="relative",ce=!0,ae.paddingTop=de):"intrinsic"===V?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ce=!0,ae.maxWidth="100%",$="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(oe.display="inline-block",oe.position="relative",oe.width=K,oe.height=X)}else 0;var fe={src:m,srcSet:void 0,sizes:void 0};re&&(fe=v({config:G,src:i,unoptimized:y,layout:V,width:K,quality:Y,sizes:a,loader:W}));var ge=i;0;0;var pe=(n(t={},"imagesrcset",fe.srcSet),n(t,"imagesizes",fe.sizes),t),he=c.default.useLayoutEffect,me=c.useRef(L);return c.useEffect((function(){me.current=L}),[L]),he((function(){ie(H.current)}),[ie]),c.useEffect((function(){!function(e,t,i,n,r){var o=function(){var i=e.current;i&&(i.src!==m&&("decode"in i?i.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(h.add(t),"blur"===n&&(i.style.filter="",i.style.backgroundSize="",i.style.backgroundImage="",i.style.backgroundPosition=""),r.current)){var o=i.naturalWidth,a=i.naturalHeight;r.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(H,ge,0,M,me)}),[ge,V,M,re]),c.default.createElement("span",{style:oe},ce?c.default.createElement("span",{style:ae},$?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:$}):null):null,c.default.createElement("img",Object.assign({},J,fe,{decoding:"async","data-nimg":V,className:P,ref:H,style:g({},se,le)})),Z&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},J,v({config:G,src:i,unoptimized:y,layout:V,width:K,quality:Y,sizes:a,loader:W}),{decoding:"async","data-nimg":V,style:se,className:P,loading:S||"lazy"}))),k?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+fe.src+fe.srcSet+fe.sizes,rel:"preload",as:"image",href:fe.srcSet?void 0:fe.src},pe))):null)};var a,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}(i(7294)),s=(a=i(2717))&&a.__esModule?a:{default:a},l=i(5809),u=i(639),d=i(9239);function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){f(e,t,i[t])}))}return e}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},h=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(A(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(A(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(A(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}function v(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,c=e.quality,s=e.sizes,l=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var c,s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(n);c)l.push(parseInt(c[2]));if(l.length){var u=.01*Math.min.apply(Math,l);return{widths:a.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,s),d=u.widths,f=u.kind,g=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,n){return"".concat(l({config:t,src:i,quality:c,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:l({config:t,src:i,quality:c,width:d[g]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,i=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=y.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e){return"/"===e[0]?e.slice(1):e}},5675:function(e,t,i){e.exports=i(8566)}}]);