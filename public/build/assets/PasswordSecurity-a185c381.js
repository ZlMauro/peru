import{r as w,a as R,m as Ht,j as T,F as ht}from"./app-80521d15.js";import{c as Se,d as _e,a as et,h as Wt,e as It}from"./hasClass-d9ff74cb.js";import{u as zt}from"./useTimeout-81996421.js";import{b as qt,u as $e,o as mt,l as se,d as je,F as gt,g as Me}from"./font-unicolor-13f2085d.js";import{a as yt,u as bt,e as Vt,c as wt}from"./createWithBsPrefix-6cf2c458.js";import{u as Ut}from"./useIsomorphicEffect-3c084c3d.js";var tt=Object.prototype.hasOwnProperty;function rt(e,t,r){for(r of e.keys())if(ce(r,t))return r}function ce(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&ce(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(o=n,o&&typeof o=="object"&&(o=rt(t,o),!o)||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(o=n[0],o&&typeof o=="object"&&(o=rt(t,o),!o)||!ce(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(tt.call(e,r)&&++n&&!tt.call(t,r)||!(r in t)||!ce(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function Xt(e){var t=qt();return[e[0],w.exports.useCallback(function(r){if(t())return e[1](r)},[t,e[1]])]}var k="top",F="bottom",H="right",B="left",ke="auto",de=[k,F,H,B],ee="start",fe="end",Yt="clippingParents",xt="viewport",ae="popper",Zt="reference",nt=de.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+fe])},[]),Ot=[].concat(de,[ke]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+fe])},[]),Kt="beforeRead",Gt="read",Jt="afterRead",Qt="beforeMain",er="main",tr="afterMain",rr="beforeWrite",nr="write",or="afterWrite",ir=[Kt,Gt,Jt,Qt,er,tr,rr,nr,or];function I(e){return e.split("-")[0]}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function J(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function z(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var G=Math.max,Ce=Math.min,te=Math.round;function De(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function $t(){return!/^((?!chrome|android).)*safari/i.test(De())}function re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&z(e)&&(o=e.offsetWidth>0&&te(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&te(n.height)/e.offsetHeight||1);var l=J(e)?W(e):window,a=l.visualViewport,s=!$t()&&r,u=(n.left+(s&&a?a.offsetLeft:0))/o,c=(n.top+(s&&a?a.offsetTop:0))/i,m=n.width/o,y=n.height/i;return{width:m,height:y,top:c,right:u+m,bottom:c+y,left:u,x:u,y:c}}function Te(e){var t=re(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Ct(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function U(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){return W(e).getComputedStyle(e)}function ar(e){return["table","td","th"].indexOf(U(e))>=0}function X(e){return((J(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ee(e){return U(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||X(e)}function ot(e){return!z(e)||q(e).position==="fixed"?null:e.offsetParent}function sr(e){var t=/firefox/i.test(De()),r=/Trident/i.test(De());if(r&&z(e)){var n=q(e);if(n.position==="fixed")return null}var o=Ee(e);for(Be(o)&&(o=o.host);z(o)&&["html","body"].indexOf(U(o))<0;){var i=q(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function ve(e){for(var t=W(e),r=ot(e);r&&ar(r)&&q(r).position==="static";)r=ot(r);return r&&(U(r)==="html"||U(r)==="body"&&q(r).position==="static")?t:r||sr(e)||t}function Fe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ue(e,t,r){return G(e,Ce(t,r))}function cr(e,t,r){var n=ue(e,t,r);return n>r?r:n}function Et(){return{top:0,right:0,bottom:0,left:0}}function Rt(e){return Object.assign({},Et(),e)}function At(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var ur=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Rt(typeof t!="number"?t:At(t,de))};function lr(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,a=I(r.placement),s=Fe(a),u=[B,H].indexOf(a)>=0,c=u?"height":"width";if(!(!i||!l)){var m=ur(o.padding,r),y=Te(i),f=s==="y"?k:B,h=s==="y"?F:H,d=r.rects.reference[c]+r.rects.reference[s]-l[s]-r.rects.popper[c],v=l[s]-r.rects.reference[s],b=ve(i),E=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,O=d/2-v/2,g=m[f],$=E-y[c]-m[h],C=E/2-y[c]/2+O,A=ue(g,C,$),P=s;r.modifiersData[n]=(t={},t[P]=A,t.centerOffset=A-C,t)}}function fr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Ct(t.elements.popper,o)&&(t.elements.arrow=o))}const pr={name:"arrow",enabled:!0,phase:"main",fn:lr,effect:fr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(e){return e.split("-")[1]}var dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vr(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:te(t*o)/o||0,y:te(r*o)/o||0}}function it(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,l=e.offsets,a=e.position,s=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,m=e.isFixed,y=l.x,f=y===void 0?0:y,h=l.y,d=h===void 0?0:h,v=typeof c=="function"?c({x:f,y:d}):{x:f,y:d};f=v.x,d=v.y;var b=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),O=B,g=k,$=window;if(u){var C=ve(r),A="clientHeight",P="clientWidth";if(C===W(r)&&(C=X(r),q(C).position!=="static"&&a==="absolute"&&(A="scrollHeight",P="scrollWidth")),C=C,o===k||(o===B||o===H)&&i===fe){g=F;var N=m&&C===$&&$.visualViewport?$.visualViewport.height:C[A];d-=N-n.height,d*=s?1:-1}if(o===B||(o===k||o===F)&&i===fe){O=H;var S=m&&C===$&&$.visualViewport?$.visualViewport.width:C[P];f-=S-n.width,f*=s?1:-1}}var _=Object.assign({position:a},u&&dr),j=c===!0?vr({x:f,y:d}):{x:f,y:d};if(f=j.x,d=j.y,s){var M;return Object.assign({},_,(M={},M[g]=E?"0":"",M[O]=b?"0":"",M.transform=($.devicePixelRatio||1)<=1?"translate("+f+"px, "+d+"px)":"translate3d("+f+"px, "+d+"px, 0)",M))}return Object.assign({},_,(t={},t[g]=E?d+"px":"",t[O]=b?f+"px":"",t.transform="",t))}function hr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,l=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,u={placement:I(t.placement),variation:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,it(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,it(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const mr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:hr,data:{}};var we={passive:!0};function gr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,l=n.resize,a=l===void 0?!0:l,s=W(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",r.update,we)}),a&&s.addEventListener("resize",r.update,we),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",r.update,we)}),a&&s.removeEventListener("resize",r.update,we)}}const yr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gr,data:{}};var br={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(e){return e.replace(/left|right|bottom|top/g,function(t){return br[t]})}var wr={start:"end",end:"start"};function at(e){return e.replace(/start|end/g,function(t){return wr[t]})}function He(e){var t=W(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function We(e){return re(X(e)).left+He(e).scrollLeft}function xr(e,t){var r=W(e),n=X(e),o=r.visualViewport,i=n.clientWidth,l=n.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;var u=$t();(u||!u&&t==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a+We(e),y:s}}function Or(e){var t,r=X(e),n=He(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=G(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=G(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+We(e),s=-n.scrollTop;return q(o||r).direction==="rtl"&&(a+=G(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:l,x:a,y:s}}function Ie(e){var t=q(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Pt(e){return["html","body","#document"].indexOf(U(e))>=0?e.ownerDocument.body:z(e)&&Ie(e)?e:Pt(Ee(e))}function le(e,t){var r;t===void 0&&(t=[]);var n=Pt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=W(n),l=o?[i].concat(i.visualViewport||[],Ie(n)?n:[]):n,a=t.concat(l);return o?a:a.concat(le(Ee(l)))}function Le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function $r(e,t){var r=re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function st(e,t,r){return t===xt?Le(xr(e,r)):J(t)?$r(t,r):Le(Or(X(e)))}function Cr(e){var t=le(Ee(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,n=r&&z(e)?ve(e):e;return J(n)?t.filter(function(o){return J(o)&&Ct(o,n)&&U(o)!=="body"}):[]}function Er(e,t,r,n){var o=t==="clippingParents"?Cr(e):[].concat(t),i=[].concat(o,[r]),l=i[0],a=i.reduce(function(s,u){var c=st(e,u,n);return s.top=G(c.top,s.top),s.right=Ce(c.right,s.right),s.bottom=Ce(c.bottom,s.bottom),s.left=G(c.left,s.left),s},st(e,l,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Nt(e){var t=e.reference,r=e.element,n=e.placement,o=n?I(n):null,i=n?ne(n):null,l=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,s;switch(o){case k:s={x:l,y:t.y-r.height};break;case F:s={x:l,y:t.y+t.height};break;case H:s={x:t.x+t.width,y:a};break;case B:s={x:t.x-r.width,y:a};break;default:s={x:t.x,y:t.y}}var u=o?Fe(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case ee:s[u]=s[u]-(t[c]/2-r[c]/2);break;case fe:s[u]=s[u]+(t[c]/2-r[c]/2);break}}return s}function pe(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.strategy,l=i===void 0?e.strategy:i,a=r.boundary,s=a===void 0?Yt:a,u=r.rootBoundary,c=u===void 0?xt:u,m=r.elementContext,y=m===void 0?ae:m,f=r.altBoundary,h=f===void 0?!1:f,d=r.padding,v=d===void 0?0:d,b=Rt(typeof v!="number"?v:At(v,de)),E=y===ae?Zt:ae,O=e.rects.popper,g=e.elements[h?E:y],$=Er(J(g)?g:g.contextElement||X(e.elements.popper),s,c,l),C=re(e.elements.reference),A=Nt({reference:C,element:O,strategy:"absolute",placement:o}),P=Le(Object.assign({},O,A)),N=y===ae?P:C,S={top:$.top-N.top+b.top,bottom:N.bottom-$.bottom+b.bottom,left:$.left-N.left+b.left,right:N.right-$.right+b.right},_=e.modifiersData.offset;if(y===ae&&_){var j=_[o];Object.keys(S).forEach(function(M){var L=[H,F].indexOf(M)>=0?1:-1,D=[k,F].indexOf(M)>=0?"y":"x";S[M]+=j[D]*L})}return S}function Rr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,l=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?Ot:s,c=ne(n),m=c?a?nt:nt.filter(function(h){return ne(h)===c}):de,y=m.filter(function(h){return u.indexOf(h)>=0});y.length===0&&(y=m);var f=y.reduce(function(h,d){return h[d]=pe(e,{placement:d,boundary:o,rootBoundary:i,padding:l})[I(d)],h},{});return Object.keys(f).sort(function(h,d){return f[h]-f[d]})}function Ar(e){if(I(e)===ke)return[];var t=xe(e);return[at(e),t,at(t)]}function Pr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,l=r.altAxis,a=l===void 0?!0:l,s=r.fallbackPlacements,u=r.padding,c=r.boundary,m=r.rootBoundary,y=r.altBoundary,f=r.flipVariations,h=f===void 0?!0:f,d=r.allowedAutoPlacements,v=t.options.placement,b=I(v),E=b===v,O=s||(E||!h?[xe(v)]:Ar(v)),g=[v].concat(O).reduce(function(Q,V){return Q.concat(I(V)===ke?Rr(t,{placement:V,boundary:c,rootBoundary:m,padding:u,flipVariations:h,allowedAutoPlacements:d}):V)},[]),$=t.rects.reference,C=t.rects.popper,A=new Map,P=!0,N=g[0],S=0;S<g.length;S++){var _=g[S],j=I(_),M=ne(_)===ee,L=[k,F].indexOf(j)>=0,D=L?"width":"height",p=pe(t,{placement:_,boundary:c,rootBoundary:m,altBoundary:y,padding:u}),x=L?M?H:B:M?F:k;$[D]>C[D]&&(x=xe(x));var he=xe(x),Y=[];if(i&&Y.push(p[j]<=0),a&&Y.push(p[x]<=0,p[he]<=0),Y.every(function(Q){return Q})){N=_,P=!1;break}A.set(_,Y)}if(P)for(var me=h?3:1,Re=function(V){var ie=g.find(function(ye){var Z=A.get(ye);if(Z)return Z.slice(0,V).every(function(Ae){return Ae})});if(ie)return N=ie,"break"},oe=me;oe>0;oe--){var ge=Re(oe);if(ge==="break")break}t.placement!==N&&(t.modifiersData[n]._skip=!0,t.placement=N,t.reset=!0)}}const Nr={name:"flip",enabled:!0,phase:"main",fn:Pr,requiresIfExists:["offset"],data:{_skip:!1}};function ct(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ut(e){return[k,H,F,B].some(function(t){return e[t]>=0})}function Sr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,l=pe(t,{elementContext:"reference"}),a=pe(t,{altBoundary:!0}),s=ct(l,n),u=ct(a,o,i),c=ut(s),m=ut(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":m})}const _r={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Sr};function Mr(e,t,r){var n=I(e),o=[B,k].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],a=i[1];return l=l||0,a=(a||0)*o,[B,H].indexOf(n)>=0?{x:a,y:l}:{x:l,y:a}}function Dr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,l=Ot.reduce(function(c,m){return c[m]=Mr(m,t.rects,i),c},{}),a=l[t.placement],s=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=l}const Lr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Dr};function jr(e){var t=e.state,r=e.name;t.modifiersData[r]=Nt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const kr={name:"popperOffsets",enabled:!0,phase:"read",fn:jr,data:{}};function Br(e){return e==="x"?"y":"x"}function Tr(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,l=r.altAxis,a=l===void 0?!1:l,s=r.boundary,u=r.rootBoundary,c=r.altBoundary,m=r.padding,y=r.tether,f=y===void 0?!0:y,h=r.tetherOffset,d=h===void 0?0:h,v=pe(t,{boundary:s,rootBoundary:u,padding:m,altBoundary:c}),b=I(t.placement),E=ne(t.placement),O=!E,g=Fe(b),$=Br(g),C=t.modifiersData.popperOffsets,A=t.rects.reference,P=t.rects.popper,N=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,S=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),_=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,j={x:0,y:0};if(C){if(i){var M,L=g==="y"?k:B,D=g==="y"?F:H,p=g==="y"?"height":"width",x=C[g],he=x+v[L],Y=x-v[D],me=f?-P[p]/2:0,Re=E===ee?A[p]:P[p],oe=E===ee?-P[p]:-A[p],ge=t.elements.arrow,Q=f&&ge?Te(ge):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Et(),ie=V[L],ye=V[D],Z=ue(0,A[p],Q[p]),Ae=O?A[p]/2-me-Z-ie-S.mainAxis:Re-Z-ie-S.mainAxis,Lt=O?-A[p]/2+me+Z+ye+S.mainAxis:oe+Z+ye+S.mainAxis,Pe=t.elements.arrow&&ve(t.elements.arrow),jt=Pe?g==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,Ve=(M=_==null?void 0:_[g])!=null?M:0,kt=x+Ae-Ve-jt,Bt=x+Lt-Ve,Ue=ue(f?Ce(he,kt):he,x,f?G(Y,Bt):Y);C[g]=Ue,j[g]=Ue-x}if(a){var Xe,Tt=g==="x"?k:B,Ft=g==="x"?F:H,K=C[$],be=$==="y"?"height":"width",Ye=K+v[Tt],Ze=K-v[Ft],Ne=[k,B].indexOf(b)!==-1,Ke=(Xe=_==null?void 0:_[$])!=null?Xe:0,Ge=Ne?Ye:K-A[be]-P[be]-Ke+S.altAxis,Je=Ne?K+A[be]+P[be]-Ke-S.altAxis:Ze,Qe=f&&Ne?cr(Ge,K,Je):ue(f?Ge:Ye,K,f?Je:Ze);C[$]=Qe,j[$]=Qe-K}t.modifiersData[n]=j}}const Fr={name:"preventOverflow",enabled:!0,phase:"main",fn:Tr,requiresIfExists:["offset"]};function Hr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Wr(e){return e===W(e)||!z(e)?He(e):Hr(e)}function Ir(e){var t=e.getBoundingClientRect(),r=te(t.width)/e.offsetWidth||1,n=te(t.height)/e.offsetHeight||1;return r!==1||n!==1}function zr(e,t,r){r===void 0&&(r=!1);var n=z(t),o=z(t)&&Ir(t),i=X(t),l=re(e,o,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((U(t)!=="body"||Ie(i))&&(a=Wr(t)),z(t)?(s=re(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=We(i))),{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function qr(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(a){if(!r.has(a)){var s=t.get(a);s&&o(s)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function Vr(e){var t=qr(e);return ir.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Ur(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Xr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var lt={placement:"bottom",modifiers:[],strategy:"absolute"};function ft(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Yr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?lt:o;return function(a,s,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},lt,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},m=[],y=!1,f={state:c,setOptions:function(b){var E=typeof b=="function"?b(c.options):b;d(),c.options=Object.assign({},i,c.options,E),c.scrollParents={reference:J(a)?le(a):a.contextElement?le(a.contextElement):[],popper:le(s)};var O=Vr(Xr([].concat(n,c.options.modifiers)));return c.orderedModifiers=O.filter(function(g){return g.enabled}),h(),f.update()},forceUpdate:function(){if(!y){var b=c.elements,E=b.reference,O=b.popper;if(ft(E,O)){c.rects={reference:zr(E,ve(O),c.options.strategy==="fixed"),popper:Te(O)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(S){return c.modifiersData[S.name]=Object.assign({},S.data)});for(var g=0;g<c.orderedModifiers.length;g++){if(c.reset===!0){c.reset=!1,g=-1;continue}var $=c.orderedModifiers[g],C=$.fn,A=$.options,P=A===void 0?{}:A,N=$.name;typeof C=="function"&&(c=C({state:c,options:P,name:N,instance:f})||c)}}}},update:Ur(function(){return new Promise(function(v){f.forceUpdate(),v(c)})}),destroy:function(){d(),y=!0}};if(!ft(a,s))return f;f.setOptions(u).then(function(v){!y&&u.onFirstUpdate&&u.onFirstUpdate(v)});function h(){c.orderedModifiers.forEach(function(v){var b=v.name,E=v.options,O=E===void 0?{}:E,g=v.effect;if(typeof g=="function"){var $=g({state:c,name:b,instance:f,options:O}),C=function(){};m.push($||C)}})}function d(){m.forEach(function(v){return v()}),m=[]}return f}}const Zr=Yr({defaultModifiers:[_r,kr,mr,yr,Lr,Nr,Fr,pr]}),Kr=["enabled","placement","strategy","modifiers"];function Gr(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const Jr={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Qr={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,o=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&o==="tooltip"&&"setAttribute"in n){const i=n.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",i?`${i},${r.id}`:r.id)}}},en=[];function tn(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:i="absolute",modifiers:l=en}=r,a=Gr(r,Kr);const s=w.exports.useRef(l),u=w.exports.useRef(),c=w.exports.useCallback(()=>{var v;(v=u.current)==null||v.update()},[]),m=w.exports.useCallback(()=>{var v;(v=u.current)==null||v.forceUpdate()},[]),[y,f]=Xt(w.exports.useState({placement:o,update:c,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),h=w.exports.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:v})=>{const b={},E={};Object.keys(v.elements).forEach(O=>{b[O]=v.styles[O],E[O]=v.attributes[O]}),f({state:v,styles:b,attributes:E,update:c,forceUpdate:m,placement:v.placement})}}),[c,m,f]),d=w.exports.useMemo(()=>(ce(s.current,l)||(s.current=l),s.current),[l]);return w.exports.useEffect(()=>{!u.current||!n||u.current.setOptions({placement:o,strategy:i,modifiers:[...d,h,Jr]})},[i,o,h,n,d]),w.exports.useEffect(()=>{if(!(!n||e==null||t==null))return u.current=Zr(e,t,Object.assign({},a,{placement:o,strategy:i,modifiers:[...d,Qr,h]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,f(v=>Object.assign({},v,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),y}const pt=()=>{};function rn(e){return e.button===0}function nn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Oe=e=>e&&("current"in e?e.current:e),dt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function on(e,t=pt,{disabled:r,clickTrigger:n="click"}={}){const o=w.exports.useRef(!1),i=w.exports.useRef(!1),l=w.exports.useCallback(u=>{const c=Oe(e);o.current=!c||nn(u)||!rn(u)||!!Se(c,u.target)||i.current,i.current=!1},[e]),a=$e(u=>{const c=Oe(e);c&&Se(c,u.target)&&(i.current=!0)}),s=$e(u=>{o.current||t(u)});w.exports.useEffect(()=>{if(r||e==null)return;const u=mt(Oe(e));let c=(u.defaultView||window).event,m=null;dt[n]&&(m=se(u,dt[n],a,!0));const y=se(u,n,l,!0),f=se(u,n,d=>{if(d===c){c=void 0;return}s(d)});let h=[];return"ontouchstart"in u.documentElement&&(h=[].slice.call(u.body.children).map(d=>se(d,"mousemove",pt))),()=>{m==null||m(),y(),f(),h.forEach(d=>d())}},[e,r,n,l,a,s])}const an=27,sn=()=>{};function cn(e,t,{disabled:r,clickTrigger:n}={}){const o=t||sn;on(e,o,{disabled:r,clickTrigger:n});const i=$e(l=>{l.keyCode===an&&o(l)});w.exports.useEffect(()=>{if(r||e==null)return;const l=mt(Oe(e));let a=(l.defaultView||window).event;const s=se(l,"keyup",u=>{if(u===a){a=void 0;return}i(u)});return()=>{s()}},[e,r,i])}function un(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function ln(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function fn({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:i,containerPadding:l,arrowElement:a,popperConfig:s={}}){var u,c,m,y,f;const h=un(s.modifiers);return Object.assign({},s,{placement:r,enabled:e,strategy:i?"fixed":s.strategy,modifiers:ln(Object.assign({},h,{eventListeners:{enabled:t,options:(u=h.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},h.preventOverflow,{options:l?Object.assign({padding:l},(c=h.preventOverflow)==null?void 0:c.options):(m=h.preventOverflow)==null?void 0:m.options}),offset:{options:Object.assign({offset:o},(y=h.offset)==null?void 0:y.options)},arrow:Object.assign({},h.arrow,{enabled:!!a,options:Object.assign({},(f=h.arrow)==null?void 0:f.options,{element:a})}),flip:Object.assign({enabled:!!n},h.flip)}))})}const St=w.exports.forwardRef((e,t)=>{const{flip:r,offset:n,placement:o,containerPadding:i,popperConfig:l={},transition:a}=e,[s,u]=_e(),[c,m]=_e(),y=je(u,t),f=et(e.container),h=et(e.target),[d,v]=w.exports.useState(!e.show),b=tn(h,s,fn({placement:o,enableEvents:!!e.show,containerPadding:i||5,flip:r,offset:n,arrowElement:c,popperConfig:l}));e.show?d&&v(!1):!e.transition&&!d&&v(!0);const E=(...$)=>{v(!0),e.onExited&&e.onExited(...$)},O=e.show||a&&!d;if(cn(s,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!O)return null;let g=e.children(Object.assign({},b.attributes.popper,{style:b.styles.popper,ref:y}),{popper:b,placement:o,show:!!e.show,arrowProps:Object.assign({},b.attributes.arrow,{style:b.styles.arrow,ref:m})});if(a){const{onExit:$,onExiting:C,onEnter:A,onEntering:P,onEntered:N}=e;g=R(a,{in:e.show,appear:!0,onExit:$,onExiting:C,onExited:E,onEnter:A,onEntering:P,onEntered:N,children:g})}return f?Ht.createPortal(g,f):null});St.displayName="Overlay";const pn=yt("popover-header"),ze=yt("popover-body");function dn(e,t){let r=e;return e==="left"?r=t?"end":"start":e==="right"&&(r=t?"start":"end"),r}const vn={placement:"right"},_t=w.exports.forwardRef(({bsPrefix:e,placement:t,className:r,style:n,children:o,body:i,arrowProps:l,popper:a,show:s,...u},c)=>{const m=bt(e,"popover"),y=Vt(),[f]=(t==null?void 0:t.split("-"))||[],h=dn(f,y);return T("div",{ref:c,role:"tooltip",style:n,"x-placement":f,className:wt(r,m,f&&`bs-popover-${h}`),...u,children:[R("div",{className:"popover-arrow",...l}),i?R(ze,{children:o}):o]})});_t.defaultProps=vn;const Mt=Object.assign(_t,{Header:pn,Body:ze,POPPER_OFFSET:[0,8]});function hn(e){const t=w.exports.useRef(null),r=bt(void 0,"popover"),n=w.exports.useMemo(()=>({name:"offset",options:{offset:()=>t.current&&Wt(t.current,r)?e||Mt.POPPER_OFFSET:e||[0,0]}}),[e,r]);return[t,[n]]}const mn={transition:gt,rootClose:!1,show:!1,placement:"top"};function gn(e,t){const{ref:r}=e,{ref:n}=t;e.ref=r.__wrapped||(r.__wrapped=o=>r(Me(o))),t.ref=n.__wrapped||(n.__wrapped=o=>n(Me(o)))}const qe=w.exports.forwardRef(({children:e,transition:t,popperConfig:r={},...n},o)=>{const i=w.exports.useRef({}),[l,a]=_e(),[s,u]=hn(n.offset),c=je(o,s),m=t===!0?gt:t||void 0,y=$e(f=>{a(f),r==null||r.onFirstUpdate==null||r.onFirstUpdate(f)});return Ut(()=>{l&&(i.current.scheduleUpdate==null||i.current.scheduleUpdate())},[l]),R(St,{...n,ref:c,popperConfig:{...r,modifiers:u.concat(r.modifiers||[]),onFirstUpdate:y},transition:m,children:(f,{arrowProps:h,popper:d,show:v})=>{var b,E;gn(f,h);const O=d==null?void 0:d.placement,g=Object.assign(i.current,{state:d==null?void 0:d.state,scheduleUpdate:d==null?void 0:d.update,placement:O,outOfBoundaries:(d==null||(b=d.state)==null||(E=b.modifiersData.hide)==null?void 0:E.isReferenceHidden)||!1});return typeof e=="function"?e({...f,placement:O,show:v,...!t&&v&&{className:"show"},popper:g,arrowProps:h}):w.exports.cloneElement(e,{...f,placement:O,arrowProps:h,popper:g,className:wt(e.props.className,!t&&v&&"show"),style:{...e.props.style,...f.style}})}})});qe.displayName="Overlay";qe.defaultProps=mn;const yn=qe;function bn(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function vt(e,t,r){const[n]=t,o=n.currentTarget,i=n.relatedTarget||n.nativeEvent[r];(!i||i!==o)&&!Se(o,i)&&e(...t)}const wn={defaultShow:!1,trigger:["hover","focus"]};function Dt({trigger:e,overlay:t,children:r,popperConfig:n={},show:o,defaultShow:i=!1,onToggle:l,delay:a,placement:s,flip:u=s&&s.indexOf("auto")!==-1,...c}){const m=w.exports.useRef(null),y=je(m,r.ref),f=zt(),h=w.exports.useRef(""),[d,v]=It(o,i,l),b=bn(a),{onFocus:E,onBlur:O,onClick:g}=typeof r!="function"?w.exports.Children.only(r).props:{},$=D=>{y(Me(D))},C=w.exports.useCallback(()=>{if(f.clear(),h.current="show",!b.show){v(!0);return}f.set(()=>{h.current==="show"&&v(!0)},b.show)},[b.show,v,f]),A=w.exports.useCallback(()=>{if(f.clear(),h.current="hide",!b.hide){v(!1);return}f.set(()=>{h.current==="hide"&&v(!1)},b.hide)},[b.hide,v,f]),P=w.exports.useCallback((...D)=>{C(),E==null||E(...D)},[C,E]),N=w.exports.useCallback((...D)=>{A(),O==null||O(...D)},[A,O]),S=w.exports.useCallback((...D)=>{v(!d),g==null||g(...D)},[g,v,d]),_=w.exports.useCallback((...D)=>{vt(C,D,"fromElement")},[C]),j=w.exports.useCallback((...D)=>{vt(A,D,"toElement")},[A]),M=e==null?[]:[].concat(e),L={ref:$};return M.indexOf("click")!==-1&&(L.onClick=S),M.indexOf("focus")!==-1&&(L.onFocus=P,L.onBlur=N),M.indexOf("hover")!==-1&&(L.onMouseOver=_,L.onMouseOut=j),T(ht,{children:[typeof r=="function"?r(L):w.exports.cloneElement(r,L),R(yn,{...c,show:d,onHide:A,flip:u,placement:s,popperConfig:n,target:m.current,children:t})]})}Dt.defaultProps=wn;const xn=(e,t)=>{const[r,n]=w.exports.useState("gray"),[o,i]=w.exports.useState("no ingresada"),[l,a]=w.exports.useState(!1),[s,u]=w.exports.useState(!1),[c,m]=w.exports.useState(!1),[y,f]=w.exports.useState(!1);let h=w.exports.useRef(),d=w.exports.useRef();const v=p=>{p=String(p).trim();const x={lower:/^[a-z?]+$/,upper:/^[A-Z]+$/,number:/^[0-9]+$/,upperLower:/^[A-Za-z]+$/,upperNumber:/^[A-Z0-9]+$/,lowerNumber:/^[a-z0-9]+$/,upperLowerNumber:/^[A-Za-z0-9]+$/};p.length>0&&p.length<6?x.lower.test(p)||x.upper.test(p)||x.number.test(p)?(n("red"),i("Mínima"),a(!0),u(!1),m(!1),f(!1)):x.upperLower.test(p)||x.upperNumber.test(p)||x.lowerNumber.test(p)?(n("yellow"),i("Media"),u(!0),a(!1),m(!1),f(!1)):x.upperLowerNumber.test(p)&&(n("green"),i("Fuerte"),m(!0),a(!1),u(!1),f(!1)):p.length==0?(n("gray"),i("no ingresada"),a(!1),u(!1),m(!1),f(!1)):x.lower.test(p)||x.upper.test(p)||x.number.test(p)?(n("yellow"),i("Media"),u(!0),a(!1),m(!1),f(!1)):x.upperLower.test(p)||x.upperNumber.test(p)||x.lowerNumber.test(p)?(n("green"),i("Fuerte"),m(!0),a(!1),u(!1),f(!1)):x.upperLowerNumber.test(p)&&(n("green-dark"),i("Muy fuerte"),f(!0),a(!1),u(!1),m(!1))},[b,E]=w.exports.useState(!1),O=p=>{p=String(p).trim();const x={lower:/^[a-z?]+$/,upper:/^[A-Z]+$/,number:/^[0-9]+$/,upperLower:/^[A-Za-z]+$/,upperNumber:/^[A-Z0-9]+$/,lowerNumber:/^[a-z0-9]+$/,upperLowerNumber:/^[A-Za-z0-9]+$/};p.length>=6?(x.lower.test(p)||x.upper.test(p)||x.number.test(p)||x.upperLower.test(p)||x.upperNumber.test(p)||x.lowerNumber.test(p)||x.upperLowerNumber.test(p))&&E("green"):p.length==0&&E("gray")},[g,$]=w.exports.useState(!1),C=p=>{p=String(p).trim();const x={upper:/^(?=\w*[A-Z])/};x.upper.test(p)?x.upper.test(p)&&$("green"):p.length==0&&$("gray")},[A,P]=w.exports.useState(!1),N=p=>{p=String(p).trim();const x={lower:/^(?=\w*[a-z])/};x.lower.test(p)?x.lower.test(p)&&P("green"):p.length==0&&P("gray")},[S,_]=w.exports.useState(!1),j=p=>{p=String(p).trim();const x={number:/^(?=\w*\d)/};x.number.test(p)?x.number.test(p)&&_("green"):p.length==0&&_("gray")},M=p=>{v(p.target.value),e.onHandleChange(p),O(p.target.value),e.onHandleChange(p),C(p.target.value),e.onHandleChange(p),N(p.target.value),e.onHandleChange(p),j(p.target.value),e.onHandleChange(p)},L=p=>{h.current.className=="contenido__password-div-icon icon-show"?(h.current.className="contenido__password-div-icon icon-hide",d.current.type="text",d.current.placeholder="Ingresa tu contraseña"):h.current.className=="contenido__password-div-icon icon-hide"?(h.current.className="contenido__password-div-icon icon-show",d.current.type="password",d.current.placeholder="Contraseña1234"):d.current.type=="text"?(d.current.type="password",d.current.placeholder="Contraseña1234"):(d.current.type="text",d.current.placeholder="Ingresa tu contraseña")},D=R(Mt,{bsPrefix:"popover",id:"popover-trigger-hover-focus",title:"Popover top",children:R(ze,{bsPrefix:"popover-body",children:R("div",{className:"contenido-popover-register",children:T("div",{className:"contenido__informacion-seguridad",children:[R("div",{className:"title",children:R("span",{children:"Requisito de contraseña"})}),T("div",{className:"espacio-opciones",children:[R("span",{className:`contenido__seguridad-icon icon-info c-${b}`}),R("p",{children:"Mínimo 6 caracteres"})]}),R("hr",{}),R("div",{className:"title",children:R("span",{children:"Puede ser más segura si contiene"})}),T("div",{className:"espacio-opciones",children:[R("span",{className:`contenido__seguridad-icon icon-info c-${g}`}),R("p",{children:"1 carácter en mayúscula"})]}),T("div",{className:"espacio-opciones",children:[R("span",{className:`contenido__seguridad-icon icon-info c-${A}`}),R("p",{children:"1 carácter en minúscula"})]}),T("div",{className:"espacio-opciones",children:[R("span",{className:`contenido__seguridad-icon icon-info c-${S}`}),R("p",{children:"1 carácter numérico"})]})]})})})});return T(ht,{children:[R("div",{className:"contenido__password",children:T("div",{className:"contenido__password-div",children:[R("input",{placeholder:"Ingresa tu contraseña",type:"password",name:"password",className:`contenido__password-div-input ${e.errorIconStatus&&"error-input"}`,autoComplete:"new-password",onChange:M,ref:d}),e.errorIconStatus?R("span",{className:"contenido__password-div-icon icon-alert error-icon",onClick:L,ref:h}):R("span",{className:"contenido__password-div-icon icon-show",onClick:L,ref:h})]})}),R("div",{className:"contenido__nivel",children:R(Dt,{trigger:["hover","focus"],placement:"top",overlay:D,children:R("div",{id:"tooltip-informacion",className:"contenido__nivel-iconos",children:T("div",{className:"contenido__iconos-seguridad",children:[T("div",{className:"contenido__circulo",children:[R("div",{className:`${l&&`bt-2-${r} br-2-${r} `} ${s&&`bt-2-${r} br-2-${r} `} ${c&&`bt-2-${r} br-2-${r} `}  ${y&&`bt-2-${r} br-2-${r} `} contenido__circulo-esquina__sup-der`}),R("div",{className:`${s&&`bb-2-${r} br-2-${r} `} ${c&&`bb-2-${r} br-2-${r} `} ${y&&`bb-2-${r} br-2-${r} `} contenido__circulo-esquina__inf-der`}),R("div",{className:`${c&&`bb-2-${r} bl-2-${r} `} ${y&&`bb-2-${r} bl-2-${r} `} contenido__circulo-esquina__inf-izq securityColor__gris-inf-izq`}),R("div",{className:`${y&&`bt-2-${r} bl-2-${r} `} contenido__circulo-esquina__sup-izq securityColor__gris-sup-izq `}),R("span",{className:`contenido__seguridad-icon icon-shield c-${r}`})]}),T("span",{className:"contenido__seguridad-text",children:[" ","Seguridad ",R("br",{}),R("span",{className:`contenido__seguridad-text--modifier c-${r}`,children:o})]})]})})})})]})},Pn=xn;export{Pn as P};
