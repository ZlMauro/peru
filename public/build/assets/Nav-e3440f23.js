import{a as Q,u as U,c as _}from"./createWithBsPrefix-10d13376.js";import{r as d,a as g}from"./app-8d306641.js";import{_ as V,u as k,a as Z}from"./useEventCallback-f760d29b.js";var D={exports:{}},K={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(a){function o(s,i,c,p,l,f){var u=p||"<<anonymous>>",x=f||c;if(i[c]==null)return s?new Error("Required "+l+" `"+x+"` was not specified "+("in `"+u+"`.")):null;for(var v=arguments.length,b=Array(v>6?v-6:0),C=6;C<v;C++)b[C-6]=arguments[C];return a.apply(void 0,[i,c,u,l,x].concat(b))}var n=o.bind(null,!1);return n.isRequired=o.bind(null,!0),n}e.exports=t.default})(K,K.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=K.exports,a=o(r);function o(s){return s&&s.__esModule?s:{default:s}}function n(){for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];function p(){for(var l=arguments.length,f=Array(l),u=0;u<l;u++)f[u]=arguments[u];var x=null;return i.forEach(function(v){if(x==null){var b=v.apply(void 0,f);b!=null&&(x=b)}}),x}return(0,a.default)(p)}e.exports=t.default})(D,D.exports);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},j.apply(this,arguments)}function E(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function ee(e){var t=te(e,"string");return typeof t=="symbol"?t:String(t)}function te(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ne(e,t,r){var a=d.exports.useRef(e!==void 0),o=d.exports.useState(t),n=o[0],s=o[1],i=e!==void 0,c=a.current;return a.current=i,!i&&c&&n!==t&&s(t),[i?e:n,d.exports.useCallback(function(p){for(var l=arguments.length,f=new Array(l>1?l-1:0),u=1;u<l;u++)f[u-1]=arguments[u];r&&r.apply(void 0,[p].concat(f)),s(p)},[r])]}function re(e,t){return Object.keys(t).reduce(function(r,a){var o,n=r,s=n[E(a)],i=n[a],c=V(n,[E(a),a].map(ee)),p=t[a],l=ne(i,s,e[p]),f=l[0],u=l[1];return j({},c,(o={},o[a]=f,o[p]=u,o))},e)}var oe=Function.prototype.bind.call(Function.prototype.call,[].slice);function ae(e,t){return oe(e.querySelectorAll(t))}function se(){var e=d.exports.useReducer(function(r){return!r},!1),t=e[1];return t}const N=d.exports.createContext(null);N.displayName="NavContext";const $=d.exports.createContext(null),R=(e,t=null)=>e!=null?String(e):t||null,q=d.exports.createContext(null),le="data-rr-ui-",ue="rrUi";function I(e){return`${le}${e}`}function ie(e){return`${ue}${e}`}const ce=["as","disabled"];function fe(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function de(e){return!e||e.trim()==="#"}function F({tagName:e,disabled:t,href:r,target:a,rel:o,role:n,onClick:s,tabIndex:i=0,type:c}){e||(r!=null||a!=null||o!=null?e="a":e="button");const p={tagName:e};if(e==="button")return[{type:c||"button",disabled:t},p];const l=u=>{if((t||e==="a"&&de(r))&&u.preventDefault(),t){u.stopPropagation();return}s==null||s(u)},f=u=>{u.key===" "&&(u.preventDefault(),l(u))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:n??"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:e==="a"?a:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:l,onKeyDown:f},p]}const W=d.exports.forwardRef((e,t)=>{let{as:r,disabled:a}=e,o=fe(e,ce);const[n,{tagName:s}]=F(Object.assign({tagName:r,disabled:a},o));return g(s,Object.assign({},o,n,{ref:t}))});W.displayName="Button";const pe=["as","active","eventKey"];function ve(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function H({key:e,onClick:t,active:r,id:a,role:o,disabled:n}){const s=d.exports.useContext($),i=d.exports.useContext(N),c=d.exports.useContext(q);let p=r;const l={role:o};if(i){!o&&i.role==="tablist"&&(l.role="tab");const f=i.getControllerId(e??null),u=i.getControlledId(e??null);l[I("event-key")]=e,l.id=f||a,p=r==null&&e!=null?i.activeKey===e:r,(p||!(c!=null&&c.unmountOnExit)&&!(c!=null&&c.mountOnEnter))&&(l["aria-controls"]=u)}return l.role==="tab"&&(l["aria-selected"]=p,p||(l.tabIndex=-1),n&&(l.tabIndex=-1,l["aria-disabled"]=!0)),l.onClick=k(f=>{n||(t==null||t(f),e!=null&&s&&!f.isPropagationStopped()&&s(e,f))}),[l,{isActive:p}]}const M=d.exports.forwardRef((e,t)=>{let{as:r=W,active:a,eventKey:o}=e,n=ve(e,pe);const[s,i]=H(Object.assign({key:R(o,n.href),active:a},n));return s[I("active")]=i.isActive,g(r,Object.assign({},n,s,{ref:t}))});M.displayName="NavItem";const xe=["as","onSelect","activeKey","role","onKeyDown"];function be(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const L=()=>{},B=I("event-key"),X=d.exports.forwardRef((e,t)=>{let{as:r="div",onSelect:a,activeKey:o,role:n,onKeyDown:s}=e,i=be(e,xe);const c=se(),p=d.exports.useRef(!1),l=d.exports.useContext($),f=d.exports.useContext(q);let u,x;f&&(n=n||"tablist",o=f.activeKey,u=f.getControlledId,x=f.getControllerId);const v=d.exports.useRef(null),b=y=>{const m=v.current;if(!m)return null;const w=ae(m,`[${B}]:not([aria-disabled=true])`),O=m.querySelector("[aria-selected=true]");if(!O||O!==document.activeElement)return null;const T=w.indexOf(O);if(T===-1)return null;let h=T+y;return h>=w.length&&(h=0),h<0&&(h=w.length-1),w[h]},C=(y,m)=>{y!=null&&(a==null||a(y,m),l==null||l(y,m))},P=y=>{if(s==null||s(y),!f)return;let m;switch(y.key){case"ArrowLeft":case"ArrowUp":m=b(-1);break;case"ArrowRight":case"ArrowDown":m=b(1);break;default:return}m&&(y.preventDefault(),C(m.dataset[ie("EventKey")]||null,y),p.current=!0,c())};d.exports.useEffect(()=>{if(v.current&&p.current){const y=v.current.querySelector(`[${B}][aria-selected=true]`);y==null||y.focus()}p.current=!1});const J=Z(t,v);return g($.Provider,{value:C,children:g(N.Provider,{value:{role:n,activeKey:R(o),getControlledId:u||L,getControllerId:x||L},children:g(r,Object.assign({},i,{onKeyDown:P,ref:J,role:n}))})})});X.displayName="Nav";const ye=Object.assign(X,{Item:M}),Y=d.exports.createContext(null);Y.displayName="NavbarContext";const z=d.exports.createContext(null);z.displayName="CardHeaderContext";const me=Q("nav-item"),Ce=["onKeyDown"];function ge(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function he(e){return!e||e.trim()==="#"}const G=d.exports.forwardRef((e,t)=>{let{onKeyDown:r}=e,a=ge(e,Ce);const[o]=F(Object.assign({tagName:"a"},a)),n=k(s=>{o.onKeyDown(s),r==null||r(s)});return he(a.href)||a.role==="button"?g("a",Object.assign({ref:t},a,o,{onKeyDown:n})):g("a",Object.assign({ref:t},a,{onKeyDown:r}))});G.displayName="Anchor";const Pe={disabled:!1},S=d.exports.forwardRef(({bsPrefix:e,className:t,as:r=G,active:a,eventKey:o,...n},s)=>{e=U(e,"nav-link");const[i,c]=H({key:R(o,n.href),active:a,...n});return g(r,{...n,...i,ref:s,className:_(t,e,n.disabled&&"disabled",c.isActive&&"active")})});S.displayName="NavLink";S.defaultProps=Pe;const we=S,Oe={justify:!1,fill:!1},A=d.exports.forwardRef((e,t)=>{const{as:r="div",bsPrefix:a,variant:o,fill:n,justify:s,navbar:i,navbarScroll:c,className:p,activeKey:l,...f}=re(e,{activeKey:"onSelect"}),u=U(a,"nav");let x,v,b=!1;const C=d.exports.useContext(Y),P=d.exports.useContext(z);return C?(x=C.bsPrefix,b=i??!0):P&&({cardHeaderBsPrefix:v}=P),g(ye,{as:r,ref:t,activeKey:l,className:_(p,{[u]:!b,[`${x}-nav`]:b,[`${x}-nav-scroll`]:b&&c,[`${v}-${o}`]:!!v,[`${u}-${o}`]:!!o,[`${u}-fill`]:n,[`${u}-justified`]:s}),...f})});A.displayName="Nav";A.defaultProps=Oe;const Ne=Object.assign(A,{Item:me,Link:we});export{Ne as N,$ as S,q as T,re as a,ne as b,Y as c,I as d,me as e,we as f,R as m,ae as q,F as u};