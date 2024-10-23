!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).bootstrap=t()}(this,(function(){"use strict";var e="top",t="bottom",n="right",r="left",o="auto",i=[e,t,n,r],s="start",a="end",c="clippingParents",f="viewport",u="popper",l="reference",p=i.reduce((function(e,t){return e.concat([t+"-"+s,t+"-"+a])}),[]),d=[].concat(i,[o]).reduce((function(e,t){return e.concat([t,t+"-"+s,t+"-"+a])}),[]),h="beforeRead",m="read",g="afterRead",b="beforeMain",v="main",y="afterMain",w="beforeWrite",x="write",O="afterWrite",_=[h,m,g,b,v,y,w,x,O];function E(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function j(e){return e instanceof A(e).Element||e instanceof Element}function D(e){return e instanceof A(e).HTMLElement||e instanceof HTMLElement}function S(e){return"undefined"!=typeof ShadowRoot&&(e instanceof A(e).ShadowRoot||e instanceof ShadowRoot)}const C={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];D(o)&&E(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});D(r)&&E(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function k(e){return e.split("-")[0]}var L=Math.max,M=Math.min,T=Math.round;function P(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function N(){return!/^((?!chrome|android).)*safari/i.test(P())}function $(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&D(e)&&(o=e.offsetWidth>0&&T(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&T(r.height)/e.offsetHeight||1);var s=(j(e)?A(e):window).visualViewport,a=!N()&&n,c=(r.left+(a&&s?s.offsetLeft:0))/o,f=(r.top+(a&&s?s.offsetTop:0))/i,u=r.width/o,l=r.height/i;return{width:u,height:l,top:f,right:c+u,bottom:f+l,left:c,x:c,y:f}}function W(e){var t=$(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&S(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function B(e){return A(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(E(e))>=0}function I(e){return((j(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return"html"===E(e)?e:e.assignedSlot||e.parentNode||(S(e)?e.host:null)||I(e)}function V(e){return D(e)&&"fixed"!==B(e).position?e.offsetParent:null}function F(e){for(var t=A(e),n=V(e);n&&H(n)&&"static"===B(n).position;)n=V(n);return n&&("html"===E(n)||"body"===E(n)&&"static"===B(n).position)?t:n||function(e){var t=/firefox/i.test(P());if(/Trident/i.test(P())&&D(e)&&"fixed"===B(e).position)return null;var n=R(e);for(S(n)&&(n=n.host);D(n)&&["html","body"].indexOf(E(n))<0;){var r=B(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function K(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e,t,n){return L(e,M(t,n))}function z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function U(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const Q={name:"arrow",enabled:!0,phase:"main",fn:function(o){var s,a=o.state,c=o.name,f=o.options,u=a.elements.arrow,l=a.modifiersData.popperOffsets,p=k(a.placement),d=K(p),h=[r,n].indexOf(p)>=0?"height":"width";if(u&&l){var m=function(e,t){return z("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:U(e,i))}(f.padding,a),g=W(u),b="y"===d?e:r,v="y"===d?t:n,y=a.rects.reference[h]+a.rects.reference[d]-l[d]-a.rects.popper[h],w=l[d]-a.rects.reference[d],x=F(u),O=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,_=y/2-w/2,E=m[b],A=O-g[h]-m[v],j=O/2-g[h]/2+_,D=Y(E,j,A),S=d;a.modifiersData[c]=((s={})[S]=D,s.centerOffset=D-j,s)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function X(e){return e.split("-")[1]}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(o){var i,s=o.popper,c=o.popperRect,f=o.placement,u=o.variation,l=o.offsets,p=o.position,d=o.gpuAcceleration,h=o.adaptive,m=o.roundOffsets,g=o.isFixed,b=l.x,v=void 0===b?0:b,y=l.y,w=void 0===y?0:y,x="function"==typeof m?m({x:v,y:w}):{x:v,y:w};v=x.x,w=x.y;var O=l.hasOwnProperty("x"),_=l.hasOwnProperty("y"),E=r,j=e,D=window;if(h){var S=F(s),C="clientHeight",k="clientWidth";S===A(s)&&"static"!==B(S=I(s)).position&&"absolute"===p&&(C="scrollHeight",k="scrollWidth"),(f===e||(f===r||f===n)&&u===a)&&(j=t,w-=(g&&S===D&&D.visualViewport?D.visualViewport.height:S[C])-c.height,w*=d?1:-1),f!==r&&(f!==e&&f!==t||u!==a)||(E=n,v-=(g&&S===D&&D.visualViewport?D.visualViewport.width:S[k])-c.width,v*=d?1:-1)}var L,M=Object.assign({position:p},h&&G),P=!0===m?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:T(n*o)/o||0,y:T(r*o)/o||0}}({x:v,y:w},A(s)):{x:v,y:w};return v=P.x,w=P.y,d?Object.assign({},M,((L={})[j]=_?"0":"",L[E]=O?"0":"",L.transform=(D.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",L)):Object.assign({},M,((i={})[j]=_?w+"px":"",i[E]=O?v+"px":"",i.transform="",i))}const Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,c=void 0===a||a,f={placement:k(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ee={passive:!0};const te={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,s=r.resize,a=void 0===s||s,c=A(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,ee)})),a&&c.addEventListener("resize",n.update,ee),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,ee)})),a&&c.removeEventListener("resize",n.update,ee)}},data:{}};var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function se(e){var t=A(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ae(e){return $(I(e)).left+se(e).scrollLeft}function ce(e){var t=B(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function fe(e){return["html","body","#document"].indexOf(E(e))>=0?e.ownerDocument.body:D(e)&&ce(e)?e:fe(R(e))}function ue(e,t){var n;void 0===t&&(t=[]);var r=fe(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=A(r),s=o?[i].concat(i.visualViewport||[],ce(r)?r:[]):r,a=t.concat(s);return o?a:a.concat(ue(R(s)))}function le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e,t,n){return t===f?le(function(e,t){var n=A(e),r=I(e),o=n.visualViewport,i=r.clientWidth,s=r.clientHeight,a=0,c=0;if(o){i=o.width,s=o.height;var f=N();(f||!f&&"fixed"===t)&&(a=o.offsetLeft,c=o.offsetTop)}return{width:i,height:s,x:a+ae(e),y:c}}(e,n)):j(t)?function(e,t){var n=$(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):le(function(e){var t,n=I(e),r=se(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=L(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=L(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+ae(e),c=-r.scrollTop;return"rtl"===B(o||n).direction&&(a+=L(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:c}}(I(e)))}function de(o){var i,c=o.reference,f=o.element,u=o.placement,l=u?k(u):null,p=u?X(u):null,d=c.x+c.width/2-f.width/2,h=c.y+c.height/2-f.height/2;switch(l){case e:i={x:d,y:c.y-f.height};break;case t:i={x:d,y:c.y+c.height};break;case n:i={x:c.x+c.width,y:h};break;case r:i={x:c.x-f.width,y:h};break;default:i={x:c.x,y:c.y}}var m=l?K(l):null;if(null!=m){var g="y"===m?"height":"width";switch(p){case s:i[m]=i[m]-(c[g]/2-f[g]/2);break;case a:i[m]=i[m]+(c[g]/2-f[g]/2)}}return i}function he(r,o){void 0===o&&(o={});var s=o,a=s.placement,p=void 0===a?r.placement:a,d=s.strategy,h=void 0===d?r.strategy:d,m=s.boundary,g=void 0===m?c:m,b=s.rootBoundary,v=void 0===b?f:b,y=s.elementContext,w=void 0===y?u:y,x=s.altBoundary,O=void 0!==x&&x,_=s.padding,A=void 0===_?0:_,S=z("number"!=typeof A?A:U(A,i)),C=w===u?l:u,k=r.rects.popper,T=r.elements[O?C:w],P=function(e,t,n,r){var o="clippingParents"===t?function(e){var t=ue(R(e)),n=["absolute","fixed"].indexOf(B(e).position)>=0&&D(e)?F(e):e;return j(n)?t.filter((function(e){return j(e)&&q(e,n)&&"body"!==E(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),s=i[0],a=i.reduce((function(t,n){var o=pe(e,n,r);return t.top=L(o.top,t.top),t.right=M(o.right,t.right),t.bottom=M(o.bottom,t.bottom),t.left=L(o.left,t.left),t}),pe(e,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(j(T)?T:T.contextElement||I(r.elements.popper),g,v,h),N=$(r.elements.reference),W=de({reference:N,element:k,strategy:"absolute",placement:p}),H=le(Object.assign({},k,W)),V=w===u?H:N,K={top:P.top-V.top+S.top,bottom:V.bottom-P.bottom+S.bottom,left:P.left-V.left+S.left,right:V.right-P.right+S.right},Y=r.modifiersData.offset;if(w===u&&Y){var Q=Y[p];Object.keys(K).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";K[r]+=Q[i]*o}))}return K}function me(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,s=n.rootBoundary,a=n.padding,c=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?d:f,l=X(r),h=l?c?p:p.filter((function(e){return X(e)===l})):i,m=h.filter((function(e){return u.indexOf(e)>=0}));0===m.length&&(m=h);var g=m.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:o,rootBoundary:s,padding:a})[k(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}const ge={name:"flip",enabled:!0,phase:"main",fn:function(i){var a=i.state,c=i.options,f=i.name;if(!a.modifiersData[f]._skip){for(var u=c.mainAxis,l=void 0===u||u,p=c.altAxis,d=void 0===p||p,h=c.fallbackPlacements,m=c.padding,g=c.boundary,b=c.rootBoundary,v=c.altBoundary,y=c.flipVariations,w=void 0===y||y,x=c.allowedAutoPlacements,O=a.options.placement,_=k(O),E=h||(_!==O&&w?function(e){if(k(e)===o)return[];var t=re(e);return[ie(e),t,ie(t)]}(O):[re(O)]),A=[O].concat(E).reduce((function(e,t){return e.concat(k(t)===o?me(a,{placement:t,boundary:g,rootBoundary:b,padding:m,flipVariations:w,allowedAutoPlacements:x}):t)}),[]),j=a.rects.reference,D=a.rects.popper,S=new Map,C=!0,L=A[0],M=0;M<A.length;M++){var T=A[M],P=k(T),N=X(T)===s,$=[e,t].indexOf(P)>=0,W=$?"width":"height",q=he(a,{placement:T,boundary:g,rootBoundary:b,altBoundary:v,padding:m}),B=$?N?n:r:N?t:e;j[W]>D[W]&&(B=re(B));var H=re(B),I=[];if(l&&I.push(q[P]<=0),d&&I.push(q[B]<=0,q[H]<=0),I.every((function(e){return e}))){L=T,C=!1;break}S.set(T,I)}if(C)for(var R=function(e){var t=A.find((function(t){var n=S.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},V=w?3:1;V>0&&"break"!==R(V);V--);a.placement!==L&&(a.modifiersData[f]._skip=!0,a.placement=L,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ve(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}const ye={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=he(t,{elementContext:"reference"}),a=he(t,{altBoundary:!0}),c=be(s,r),f=be(a,o,i),u=ve(c),l=ve(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}},we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,s=t.name,a=i.offset,c=void 0===a?[0,0]:a,f=d.reduce((function(t,i){return t[i]=function(t,o,i){var s=k(t),a=[r,e].indexOf(s)>=0?-1:1,c="function"==typeof i?i(Object.assign({},o,{placement:t})):i,f=c[0],u=c[1];return f=f||0,u=(u||0)*a,[r,n].indexOf(s)>=0?{x:u,y:f}:{x:f,y:u}}(i,o.rects,c),t}),{}),u=f[o.placement],l=u.x,p=u.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=l,o.modifiersData.popperOffsets.y+=p),o.modifiersData[s]=f}},xe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=de({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Oe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,a=o.options,c=o.name,f=a.mainAxis,u=void 0===f||f,l=a.altAxis,p=void 0!==l&&l,d=a.boundary,h=a.rootBoundary,m=a.altBoundary,g=a.padding,b=a.tether,v=void 0===b||b,y=a.tetherOffset,w=void 0===y?0:y,x=he(i,{boundary:d,rootBoundary:h,padding:g,altBoundary:m}),O=k(i.placement),_=X(i.placement),E=!_,A=K(O),j="x"===A?"y":"x",D=i.modifiersData.popperOffsets,S=i.rects.reference,C=i.rects.popper,T="function"==typeof w?w(Object.assign({},i.rects,{placement:i.placement})):w,P="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),N=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,$={x:0,y:0};if(D){if(u){var q,B="y"===A?e:r,H="y"===A?t:n,I="y"===A?"height":"width",R=D[A],V=R+x[B],z=R-x[H],U=v?-C[I]/2:0,Q=_===s?S[I]:C[I],G=_===s?-C[I]:-S[I],J=i.elements.arrow,Z=v&&J?W(J):{width:0,height:0},ee=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[B],ne=ee[H],re=Y(0,S[I],Z[I]),oe=E?S[I]/2-U-re-te-P.mainAxis:Q-re-te-P.mainAxis,ie=E?-S[I]/2+U+re+ne+P.mainAxis:G+re+ne+P.mainAxis,se=i.elements.arrow&&F(i.elements.arrow),ae=se?"y"===A?se.clientTop||0:se.clientLeft||0:0,ce=null!=(q=null==N?void 0:N[A])?q:0,fe=R+ie-ce,ue=Y(v?M(V,R+oe-ce-ae):V,R,v?L(z,fe):z);D[A]=ue,$[A]=ue-R}if(p){var le,pe="x"===A?e:r,de="x"===A?t:n,me=D[j],ge="y"===j?"height":"width",be=me+x[pe],ve=me-x[de],ye=-1!==[e,r].indexOf(O),we=null!=(le=null==N?void 0:N[j])?le:0,xe=ye?be:me-S[ge]-C[ge]-we+P.altAxis,Oe=ye?me+S[ge]+C[ge]-we-P.altAxis:ve,_e=v&&ye?function(e,t,n){var r=Y(e,t,n);return r>n?n:r}(xe,me,Oe):Y(v?xe:be,me,v?Oe:ve);D[j]=_e,$[j]=_e-me}i.modifiersData[c]=$}},requiresIfExists:["offset"]};function _e(e,t,n){void 0===n&&(n=!1);var r,o,i=D(t),s=D(t)&&function(e){var t=e.getBoundingClientRect(),n=T(t.width)/e.offsetWidth||1,r=T(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),a=I(t),c=$(e,s,n),f={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==E(t)||ce(a))&&(f=(r=t)!==A(r)&&D(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:se(r)),D(t)?((u=$(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ae(a))),{x:c.left+f.scrollLeft-u.x,y:c.top+f.scrollTop-u.y,width:c.width,height:c.height}}function Ee(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Ae={placement:"bottom",modifiers:[],strategy:"absolute"};function je(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function De(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Ae:o;return function(e,t,n){void 0===n&&(n=i);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ae,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],f=!1,u={state:a,setOptions:function(n){var o="function"==typeof n?n(a.options):n;l(),a.options=Object.assign({},i,a.options,o),a.scrollParents={reference:j(e)?ue(e):e.contextElement?ue(e.contextElement):[],popper:ue(t)};var s,f,p=function(e){var t=Ee(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,a.options.modifiers),f=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(f).map((function(e){return f[e]}))));return a.orderedModifiers=p.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:a,name:t,instance:u,options:r});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!f){var e=a.elements,t=e.reference,n=e.popper;if(je(t,n)){a.rects={reference:_e(t,F(n),"fixed"===a.options.strategy),popper:W(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var o=a.orderedModifiers[r],i=o.fn,s=o.options,c=void 0===s?{}:s,l=o.name;"function"==typeof i&&(a=i({state:a,options:c,name:l,instance:u})||a)}else a.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){l(),f=!0}};if(!je(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Se=De(),Ce=De({defaultModifiers:[te,xe,Z,C]}),ke=De({defaultModifiers:[te,xe,Z,C,we,ge,Oe,Q,ye]});const Le=Object.freeze(Object.defineProperty({__proto__:null,afterMain:y,afterRead:g,afterWrite:O,applyStyles:C,arrow:Q,auto:o,basePlacements:i,beforeMain:b,beforeRead:h,beforeWrite:w,bottom:t,clippingParents:c,computeStyles:Z,createPopper:ke,createPopperBase:Se,createPopperLite:Ce,detectOverflow:he,end:a,eventListeners:te,flip:ge,hide:ye,left:r,main:v,modifierPhases:_,offset:we,placements:d,popper:u,popperGenerator:De,popperOffsets:xe,preventOverflow:Oe,read:m,reference:l,right:n,start:s,top:e,variationPlacements:p,viewport:f,write:x},Symbol.toStringTag,{value:"Module"})),Me=new Map,Te={set(e,t,n){Me.has(e)||Me.set(e,new Map);const r=Me.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(e,t)=>Me.has(e)&&Me.get(e).get(t)||null,remove(e,t){if(!Me.has(e))return;const n=Me.get(e);n.delete(t),0===n.size&&Me.delete(e)}},Pe="transitionend",Ne=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),$e=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),We=e=>$e(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(Ne(e)):null,qe=e=>{if(!$e(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},Be=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),He=()=>{},Ie=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Re=[],Ve=()=>"rtl"===document.documentElement.dir,Fe=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,Ke=/[^.]*(?=\..*)\.|.*/,Ye=/\..*/,ze=/::\d+$/,Ue={};let Qe=1;const Xe={mouseenter:"mouseover",mouseleave:"mouseout"},Ge=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Je(e,t){return t&&`${t}::${Qe++}`||e.uidEvent||Qe++}function Ze(e){const t=Je(e);return e.uidEvent=t,Ue[t]=Ue[t]||{},Ue[t]}function et(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function tt(e,t,n){const r="string"==typeof t,o=r?n:t||n;let i=it(e);return Ge.has(i)||(i=e),[r,o,i]}function nt(e,t,n,r,o){if("string"!=typeof t||!e)return;let[i,s,a]=tt(t,n,r);if(t in Xe){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};s=e(s)}const c=Ze(e),f=c[a]||(c[a]={}),u=et(f,s,i?n:null);if(u)return void(u.oneOff=u.oneOff&&o);const l=Je(s,t.replace(Ke,"")),p=i?function(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(const a of i)if(a===s)return at(o,{delegateTarget:s}),r.oneOff&&st.off(e,o.type,t,n),n.apply(s,[o])}}(e,n,s):function(e,t){return function n(r){return at(r,{delegateTarget:e}),n.oneOff&&st.off(e,r.type,t),t.apply(e,[r])}}(e,s);p.delegationSelector=i?n:null,p.callable=s,p.oneOff=o,p.uidEvent=l,f[l]=p,e.addEventListener(a,p,i)}function rt(e,t,n,r,o){const i=et(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function ot(e,t,n,r){const o=t[n]||{};for(const[i,s]of Object.entries(o))i.includes(r)&&rt(e,t,n,s.callable,s.delegationSelector)}function it(e){return e=e.replace(Ye,""),Xe[e]||e}const st={on(e,t,n,r){nt(e,t,n,r,!1)},one(e,t,n,r){nt(e,t,n,r,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return;const[o,i,s]=tt(t,n,r),a=s!==t,c=Ze(e),f=c[s]||{},u=t.startsWith(".");if(void 0===i){if(u)for(const n of Object.keys(c))ot(e,c,n,t.slice(1));for(const[n,r]of Object.entries(f)){const o=n.replace(ze,"");a&&!t.includes(o)||rt(e,c,s,r.callable,r.delegationSelector)}}else{if(!Object.keys(f).length)return;rt(e,c,s,i,o?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=Ie();let o=null,i=!0,s=!0,a=!1;t!==it(t)&&r&&(o=r.Event(t,n),r(e).trigger(o),i=!o.isPropagationStopped(),s=!o.isImmediatePropagationStopped(),a=o.isDefaultPrevented());const c=at(new Event(t,{bubbles:i,cancelable:!0}),n);return a&&c.preventDefault(),s&&e.dispatchEvent(c),c.defaultPrevented&&o&&o.preventDefault(),c}};function at(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function ct(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function ft(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const ut={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${ft(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${ft(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=ct(e.dataset[r])}return t},getDataAttribute:(e,t)=>ct(e.getAttribute(`data-bs-${ft(t)}`))};class lt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=$e(t)?ut.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...$e(t)?ut.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[r,o]of Object.entries(t)){const t=e[r],i=$e(t)?"element":null==(n=t)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${o}".`)}var n}}class pt extends lt{constructor(e,t){super(),(e=We(e))&&(this._element=e,this._config=this._getConfig(t),Te.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Te.remove(this._element,this.constructor.DATA_KEY),st.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){((e,t,n=!0)=>{if(!n)return void Fe(e);const r=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let o=!1;const i=({target:n})=>{n===t&&(o=!0,t.removeEventListener(Pe,i),Fe(e))};t.addEventListener(Pe,i),setTimeout((()=>{o||t.dispatchEvent(new Event(Pe))}),r)})(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Te.get(We(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const dt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map((e=>Ne(e))).join(","):null},ht={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!Be(e)&&qe(e)))},getSelectorFromElement(e){const t=dt(e);return t&&ht.findOne(t)?t:null},getElementFromSelector(e){const t=dt(e);return t?ht.findOne(t):null},getMultipleElementsFromSelector(e){const t=dt(e);return t?ht.find(t):[]}},mt="dropdown",gt=".bs.dropdown",bt=".data-api",vt="ArrowUp",yt="ArrowDown",wt=`hide${gt}`,xt=`hidden${gt}`,Ot=`show${gt}`,_t=`shown${gt}`,Et=`click${gt}${bt}`,At=`keydown${gt}${bt}`,jt=`keyup${gt}${bt}`,Dt="show",St='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ct=`${St}.${Dt}`,kt=".dropdown-menu",Lt=Ve()?"top-end":"top-start",Mt=Ve()?"top-start":"top-end",Tt=Ve()?"bottom-end":"bottom-start",Pt=Ve()?"bottom-start":"bottom-end",Nt=Ve()?"left-start":"right-start",$t=Ve()?"right-start":"left-start",Wt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},qt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Bt extends pt{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=ht.next(this._element,kt)[0]||ht.prev(this._element,kt)[0]||ht.findOne(kt,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Wt}static get DefaultType(){return qt}static get NAME(){return mt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Be(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!st.trigger(this._element,Ot,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const e of[].concat(...document.body.children))st.on(e,"mouseover",He);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Dt),this._element.classList.add(Dt),st.trigger(this._element,_t,e)}}hide(){if(Be(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!st.trigger(this._element,wt,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))st.off(e,"mouseover",He);this._popper&&this._popper.destroy(),this._menu.classList.remove(Dt),this._element.classList.remove(Dt),this._element.setAttribute("aria-expanded","false"),ut.removeDataAttribute(this._menu,"popper"),st.trigger(this._element,xt,e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!$e(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${mt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===Le)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:$e(this._config.reference)?e=We(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=ke(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Dt)}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return Nt;if(e.classList.contains("dropstart"))return $t;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?Mt:Lt:t?Pt:Tt}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(ut.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Fe(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=ht.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((e=>qe(e)));n.length&&((e,t,n,r)=>{const o=e.length;let i=e.indexOf(t);return-1===i?!n&&r?e[o-1]:e[0]:(i+=n?1:-1,r&&(i=(i+o)%o),e[Math.max(0,Math.min(i,o-1))])})(n,t,e===yt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Bt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;const t=ht.find(Ct);for(const n of t){const t=Bt.getInstance(n);if(!t||!1===t._config.autoClose)continue;const r=e.composedPath(),o=r.includes(t._menu);if(r.includes(t._element)||"inside"===t._config.autoClose&&!o||"outside"===t._config.autoClose&&o)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const i={relatedTarget:t._element};"click"===e.type&&(i.clickEvent=e),t._completeHide(i)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,r=[vt,yt].includes(e.key);if(!r&&!n)return;if(t&&!n)return;e.preventDefault();const o=this.matches(St)?this:ht.prev(this,St)[0]||ht.next(this,St)[0]||ht.findOne(St,e.delegateTarget.parentNode),i=Bt.getOrCreateInstance(o);if(r)return e.stopPropagation(),i.show(),void i._selectMenuItem(e);i._isShown()&&(e.stopPropagation(),i.hide(),o.focus())}}var Ht,It;return st.on(document,At,St,Bt.dataApiKeydownHandler),st.on(document,At,kt,Bt.dataApiKeydownHandler),st.on(document,Et,Bt.clearMenus),st.on(document,jt,Bt.clearMenus),st.on(document,Et,St,(function(e){e.preventDefault(),Bt.getOrCreateInstance(this).toggle()})),Ht=Bt,It=()=>{const e=Ie();if(e){const t=Ht.NAME,n=e.fn[t];e.fn[t]=Ht.jQueryInterface,e.fn[t].Constructor=Ht,e.fn[t].noConflict=()=>(e.fn[t]=n,Ht.jQueryInterface)}},"loading"===document.readyState?(Re.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of Re)e()})),Re.push(It)):It(),{Dropdown:Bt}})),(()=>{"use strict";const e=()=>localStorage.getItem("theme"),t=()=>{const t=e();return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},n=e=>{"auto"===e?document.documentElement.setAttribute("data-bs-theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):document.documentElement.setAttribute("data-bs-theme",e)};n(t());const r=(e,t=!1)=>{const n=document.querySelector("#bd-theme");if(!n)return;const r=document.querySelector("#bd-theme-text"),o=(document.querySelector(".theme-icon-active use"),document.querySelector(`[data-bs-theme-value="${e}"]`));document.querySelectorAll("[data-bs-theme-value]").forEach((e=>{e.classList.remove("active"),e.setAttribute("aria-pressed","false")})),o.classList.add("active"),o.setAttribute("aria-pressed","true");const i=`${r.textContent} (${o.dataset.bsThemeValue})`;n.setAttribute("aria-label",i),t&&n.focus()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{const r=e();"light"!==r&&"dark"!==r&&n(t())})),window.addEventListener("DOMContentLoaded",(()=>{r(t()),document.querySelectorAll("[data-bs-theme-value]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-bs-theme-value");(e=>{localStorage.setItem("theme",e)})(t),n(t),r(t,!0)}))}))}))})();