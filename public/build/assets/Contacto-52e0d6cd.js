import{r as l,R as _,b as F,a as i,j as v,F as ut,H as dt}from"./app-6fa9d71d.js";import{E as pt,F as ft}from"./index-f4bdb897.js";/* empty css                      */import"./ApplicationLogoLici-a2c78130.js";var Ee={exports:{}};(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var s=typeof r;if(s==="string"||s==="number")a.push(r);else if(Array.isArray(r)){if(r.length){var c=n.apply(null,r);c&&a.push(c)}}else if(s==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){a.push(r.toString());continue}for(var u in r)t.call(r,u)&&r[u]&&a.push(u)}}}return a.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ee);const C=Ee.exports;function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Q.apply(this,arguments)}function Ne(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function fe(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function mt(e){var t=vt(e,"string");return typeof t=="symbol"?t:String(t)}function vt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ce(e,t,n){var a=l.exports.useRef(e!==void 0),o=l.exports.useState(t),r=o[0],s=o[1],c=e!==void 0,u=a.current;return a.current=c,!c&&u&&r!==t&&s(t),[c?e:r,l.exports.useCallback(function(f){for(var d=arguments.length,p=new Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];n&&n.apply(void 0,[f].concat(p)),s(f)},[n])]}function ae(e,t){return Object.keys(t).reduce(function(n,a){var o,r=n,s=r[fe(a)],c=r[a],u=Ne(r,[fe(a),a].map(mt)),f=t[a],d=Ce(c,s,e[f]),p=d[0],m=d[1];return Q({},u,(o={},o[a]=p,o[f]=m,o))},e)}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},ee(e,t)}function ht(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ee(e,t)}const xt=["xxl","xl","lg","md","sm","xs"],bt="xs",yt=l.exports.createContext({prefixes:{},breakpoints:xt,minBreakpoint:bt});function P(e,t){const{prefixes:n}=l.exports.useContext(yt);return e||n[t]||t}function gt(e){return e&&e.ownerDocument||document}function Et(e){var t=gt(e);return t&&t.defaultView||window}function Nt(e,t){return Et(e).getComputedStyle(e,t)}var Ct=/([A-Z])/g;function wt(e){return e.replace(Ct,"-$1").toLowerCase()}var Ot=/^ms-/;function V(e){return wt(e).replace(Ot,"-ms-")}var Tt=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function _t(e){return!!(e&&Tt.test(e))}function X(e,t){var n="",a="";if(typeof t=="string")return e.style.getPropertyValue(V(t))||Nt(e).getPropertyValue(V(t));Object.keys(t).forEach(function(o){var r=t[o];!r&&r!==0?e.style.removeProperty(V(o)):_t(o)?a+=o+"("+r+") ":n+=V(o)+": "+r+";"}),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}var $={exports:{}},Pt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",St=Pt,Rt=St;function we(){}function Oe(){}Oe.resetWarningCache=we;var $t=function(){function e(a,o,r,s,c,u){if(u!==Rt){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Oe,resetWarningCache:we};return n.PropTypes=n,n};$.exports=$t();const me={disabled:!1},Te=_.createContext(null);var It=function(t){return t.scrollTop},q="unmounted",I="exited",S="entering",A="entered",G="exiting",R=function(e){ht(t,e);function t(a,o){var r;r=e.call(this,a,o)||this;var s=o,c=s&&!s.isMounting?a.enter:a.appear,u;return r.appearStatus=null,a.in?c?(u=I,r.appearStatus=S):u=A:a.unmountOnExit||a.mountOnEnter?u=q:u=I,r.state={status:u},r.nextCallback=null,r}t.getDerivedStateFromProps=function(o,r){var s=o.in;return s&&r.status===q?{status:I}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var r=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==S&&s!==A&&(r=S):(s===S||s===A)&&(r=G)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,r,s,c;return r=s=c=o,o!=null&&typeof o!="number"&&(r=o.exit,s=o.enter,c=o.appear!==void 0?o.appear:s),{exit:r,enter:s,appear:c}},n.updateStatus=function(o,r){if(o===void 0&&(o=!1),r!==null)if(this.cancelNextCallback(),r===S){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this);s&&It(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===I&&this.setState({status:q})},n.performEnter=function(o){var r=this,s=this.props.enter,c=this.context?this.context.isMounting:o,u=this.props.nodeRef?[c]:[F.findDOMNode(this),c],f=u[0],d=u[1],p=this.getTimeouts(),m=c?p.appear:p.enter;if(!o&&!s||me.disabled){this.safeSetState({status:A},function(){r.props.onEntered(f)});return}this.props.onEnter(f,d),this.safeSetState({status:S},function(){r.props.onEntering(f,d),r.onTransitionEnd(m,function(){r.safeSetState({status:A},function(){r.props.onEntered(f,d)})})})},n.performExit=function(){var o=this,r=this.props.exit,s=this.getTimeouts(),c=this.props.nodeRef?void 0:F.findDOMNode(this);if(!r||me.disabled){this.safeSetState({status:I},function(){o.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:G},function(){o.props.onExiting(c),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:I},function(){o.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,r){r=this.setNextCallback(r),this.setState(o,r)},n.setNextCallback=function(o){var r=this,s=!0;return this.nextCallback=function(c){s&&(s=!1,r.nextCallback=null,o(c))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,r){this.setNextCallback(r);var s=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this),c=o==null&&!this.props.addEndListener;if(!s||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],f=u[0],d=u[1];this.props.addEndListener(f,d)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===q)return null;var r=this.props,s=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var c=Ne(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return _.createElement(Te.Provider,{value:null},typeof s=="function"?s(o,c):_.cloneElement(_.Children.only(s),c))},t}(_.Component);R.contextType=Te;R.propTypes={};function j(){}R.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j};R.UNMOUNTED=q;R.EXITED=I;R.ENTERING=S;R.ENTERED=A;R.EXITING=G;const At=!!(typeof window<"u"&&window.document&&window.document.createElement);var te=!1,ne=!1;try{var Z={get passive(){return te=!0},get once(){return ne=te=!0}};At&&(window.addEventListener("test",Z,Z),window.removeEventListener("test",Z,!0))}catch{}function Kt(e,t,n,a){if(a&&typeof a!="boolean"&&!ne){var o=a.once,r=a.capture,s=n;!ne&&o&&(s=n.__once||function c(u){this.removeEventListener(t,c,r),n.call(this,u)},n.__once=s),e.addEventListener(t,s,te?a:r)}e.addEventListener(t,n,a)}function kt(e,t,n,a){var o=a&&typeof a!="boolean"?a.capture:a;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}function _e(e,t,n,a){return Kt(e,t,n,a),function(){kt(e,t,n,a)}}function Dt(e,t,n,a){if(n===void 0&&(n=!1),a===void 0&&(a=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,a),e.dispatchEvent(o)}}function jt(e){var t=X(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function Lt(e,t,n){n===void 0&&(n=5);var a=!1,o=setTimeout(function(){a||Dt(e,"transitionend",!0)},t+n),r=_e(e,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(o),r()}}function Mt(e,t,n,a){n==null&&(n=jt(e)||0);var o=Lt(e,n,a),r=_e(e,"transitionend",t);return function(){o(),r()}}function ve(e,t){const n=X(e,t)||"",a=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*a}function Pe(e,t){const n=ve(e,"transitionDuration"),a=ve(e,"transitionDelay"),o=Mt(e,r=>{r.target===e&&(o(),t(r))},n+a)}function U(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...o){t.apply(this,o),n.apply(this,o)}},null)}function Se(e){e.offsetHeight}var he=function(t){return!t||typeof t=="function"?t:function(n){t.current=n}};function Bt(e,t){var n=he(e),a=he(t);return function(o){n&&n(o),a&&a(o)}}function Re(e,t){return l.exports.useMemo(function(){return Bt(e,t)},[e,t])}function Ut(e){return e&&"setState"in e?F.findDOMNode(e):e??null}const $e=_.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:o,onExited:r,addEndListener:s,children:c,childRef:u,...f},d)=>{const p=l.exports.useRef(null),m=Re(p,u),x=O=>{m(Ut(O))},h=O=>D=>{O&&p.current&&O(p.current,D)},b=l.exports.useCallback(h(e),[e]),g=l.exports.useCallback(h(t),[t]),y=l.exports.useCallback(h(n),[n]),w=l.exports.useCallback(h(a),[a]),E=l.exports.useCallback(h(o),[o]),N=l.exports.useCallback(h(r),[r]),k=l.exports.useCallback(h(s),[s]);return i(R,{ref:d,...f,onEnter:b,onEntered:y,onEntering:g,onExit:w,onExited:N,onExiting:E,addEndListener:k,nodeRef:p,children:typeof c=="function"?(O,D)=>c(O,{...D,ref:x}):_.cloneElement(c,{ref:x})})}),Ft={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Ie(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,a=t[n],o=Ft[e];return a+parseInt(X(t,o[0]),10)+parseInt(X(t,o[1]),10)}const qt={[I]:"collapse",[G]:"collapsing",[S]:"collapsing",[A]:"collapse show"},Ht={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Ie},Ae=_.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:o,className:r,children:s,dimension:c="height",getDimensionValue:u=Ie,...f},d)=>{const p=typeof c=="function"?c():c,m=l.exports.useMemo(()=>U(y=>{y.style[p]="0"},e),[p,e]),x=l.exports.useMemo(()=>U(y=>{const w=`scroll${p[0].toUpperCase()}${p.slice(1)}`;y.style[p]=`${y[w]}px`},t),[p,t]),h=l.exports.useMemo(()=>U(y=>{y.style[p]=null},n),[p,n]),b=l.exports.useMemo(()=>U(y=>{y.style[p]=`${u(p,y)}px`,Se(y)},a),[a,u,p]),g=l.exports.useMemo(()=>U(y=>{y.style[p]=null},o),[p,o]);return i($e,{ref:d,addEndListener:Pe,...f,"aria-expanded":f.role?f.in:null,onEnter:m,onEntering:x,onEntered:h,onExit:b,onExiting:g,childRef:s.ref,children:(y,w)=>_.cloneElement(s,{...w,className:C(r,s.props.className,qt[y],p==="width"&&"collapse-horizontal")})})});Ae.defaultProps=Ht;function Ke(e,t){return Array.isArray(e)?e.includes(t):e===t}const W=l.exports.createContext({});W.displayName="AccordionContext";const ke=l.exports.forwardRef(({as:e="div",bsPrefix:t,className:n,children:a,eventKey:o,...r},s)=>{const{activeEventKey:c}=l.exports.useContext(W);return t=P(t,"accordion-collapse"),i(Ae,{ref:s,in:Ke(c,o),...r,className:C(n,t),children:i(e,{children:l.exports.Children.only(a)})})});ke.displayName="AccordionCollapse";const De=ke,z=l.exports.createContext({eventKey:""});z.displayName="AccordionItemContext";const je=l.exports.forwardRef(({as:e="div",bsPrefix:t,className:n,onEnter:a,onEntering:o,onEntered:r,onExit:s,onExiting:c,onExited:u,...f},d)=>{t=P(t,"accordion-body");const{eventKey:p}=l.exports.useContext(z);return i(De,{eventKey:p,onEnter:a,onEntering:o,onEntered:r,onExit:s,onExiting:c,onExited:u,children:i(e,{ref:d,...f,className:C(n,t)})})});je.displayName="AccordionBody";const Wt=je;function Vt(e,t){const{activeEventKey:n,onSelect:a,alwaysOpen:o}=l.exports.useContext(W);return r=>{let s=e===n?null:e;o&&(Array.isArray(n)?n.includes(e)?s=n.filter(c=>c!==e):s=[...n,e]:s=[e]),a==null||a(s,r),t==null||t(r)}}const Le=l.exports.forwardRef(({as:e="button",bsPrefix:t,className:n,onClick:a,...o},r)=>{t=P(t,"accordion-button");const{eventKey:s}=l.exports.useContext(z),c=Vt(s,a),{activeEventKey:u}=l.exports.useContext(W);return e==="button"&&(o.type="button"),i(e,{ref:r,onClick:c,...o,"aria-expanded":s===u,className:C(n,t,!Ke(u,s)&&"collapsed")})});Le.displayName="AccordionButton";const Me=Le,Be=l.exports.forwardRef(({as:e="h2",bsPrefix:t,className:n,children:a,onClick:o,...r},s)=>(t=P(t,"accordion-header"),i(e,{ref:s,...r,className:C(n,t),children:i(Me,{onClick:o,children:a})})));Be.displayName="AccordionHeader";const Xt=Be,Ue=l.exports.forwardRef(({as:e="div",bsPrefix:t,className:n,eventKey:a,...o},r)=>{t=P(t,"accordion-item");const s=l.exports.useMemo(()=>({eventKey:a}),[a]);return i(z.Provider,{value:s,children:i(e,{ref:r,...o,className:C(n,t)})})});Ue.displayName="AccordionItem";const Gt=Ue,Fe=l.exports.forwardRef((e,t)=>{const{as:n="div",activeKey:a,bsPrefix:o,className:r,onSelect:s,flush:c,alwaysOpen:u,...f}=ae(e,{activeKey:"onSelect"}),d=P(o,"accordion"),p=l.exports.useMemo(()=>({activeEventKey:a,onSelect:s,alwaysOpen:u}),[a,s,u]);return i(W.Provider,{value:p,children:i(n,{ref:t,...f,className:C(r,d,c&&`${d}-flush`)})})});Fe.displayName="Accordion";const K=Object.assign(Fe,{Button:Me,Collapse:De,Item:Gt,Header:Xt,Body:Wt}),qe={prefix:String(Math.round(Math.random()*1e10)),current:0},zt=_.createContext(qe);let Yt=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function Zt(e){let t=l.exports.useContext(zt);return t===qe&&!Yt&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),l.exports.useMemo(()=>e||`react-aria${t.prefix}-${++t.current}`,[e])}const M=l.exports.createContext(null),L=l.exports.createContext(null),H=(e,t=null)=>e!=null?String(e):t||null;function He({children:e,in:t,mountOnEnter:n,unmountOnExit:a}){const o=l.exports.useRef(t);return l.exports.useEffect(()=>{t&&(o.current=!0)},[t]),t?e:a||!o.current&&n?null:e}const Jt=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],Qt=["activeKey","getControlledId","getControllerId"],en=["as"];function oe(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function We(e){let{active:t,eventKey:n,mountOnEnter:a,transition:o,unmountOnExit:r,role:s="tabpanel",onEnter:c,onEntering:u,onEntered:f,onExit:d,onExiting:p,onExited:m}=e,x=oe(e,Jt);const h=l.exports.useContext(M);if(!h)return[Object.assign({},x,{role:s}),{eventKey:n,isActive:t,mountOnEnter:a,transition:o,unmountOnExit:r,onEnter:c,onEntering:u,onEntered:f,onExit:d,onExiting:p,onExited:m}];const{activeKey:b,getControlledId:g,getControllerId:y}=h,w=oe(h,Qt),E=H(n);return[Object.assign({},x,{role:s,id:g(n),"aria-labelledby":y(n)}),{eventKey:n,isActive:t==null&&E!=null?H(b)===E:t,transition:o||w.transition,mountOnEnter:a??w.mountOnEnter,unmountOnExit:r??w.unmountOnExit,onEnter:c,onEntering:u,onEntered:f,onExit:d,onExiting:p,onExited:m}]}const Ve=l.exports.forwardRef((e,t)=>{let{as:n="div"}=e,a=oe(e,en);const[o,{isActive:r,onEnter:s,onEntering:c,onEntered:u,onExit:f,onExiting:d,onExited:p,mountOnEnter:m,unmountOnExit:x,transition:h=He}]=We(a);return i(M.Provider,{value:null,children:i(L.Provider,{value:null,children:i(h,{in:r,onEnter:s,onEntering:c,onEntered:u,onExit:f,onExiting:d,onExited:p,mountOnEnter:m,unmountOnExit:x,children:i(n,Object.assign({},o,{ref:t,hidden:!r,"aria-hidden":!r}))})})})});Ve.displayName="TabPanel";const ie=e=>{const{id:t,generateChildId:n,onSelect:a,activeKey:o,defaultActiveKey:r,transition:s,mountOnEnter:c,unmountOnExit:u,children:f}=e,[d,p]=Ce(o,r,a),m=Zt(t),x=l.exports.useMemo(()=>n||((b,g)=>m?`${m}-${g}-${b}`:null),[m,n]),h=l.exports.useMemo(()=>({onSelect:p,activeKey:d,transition:s,mountOnEnter:c||!1,unmountOnExit:u||!1,getControlledId:b=>x(b,"tabpane"),getControllerId:b=>x(b,"tab")}),[p,d,s,c,u,x]);return i(M.Provider,{value:h,children:i(L.Provider,{value:p||null,children:f})})};ie.Panel=Ve;const tn={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},nn={[S]:"show",[A]:"show"},Y=l.exports.forwardRef(({className:e,children:t,transitionClasses:n={},...a},o)=>{const r=l.exports.useCallback((s,c)=>{Se(s),a.onEnter==null||a.onEnter(s,c)},[a]);return i($e,{ref:o,addEndListener:Pe,...a,onEnter:r,childRef:t.ref,children:(s,c)=>l.exports.cloneElement(t,{...c,className:C("fade",e,t.props.className,nn[s],n[s])})})});Y.defaultProps=tn;Y.displayName="Fade";function se(e){return typeof e=="boolean"?e?Y:He:e}const Xe=({transition:e,...t})=>i(ie,{...t,transition:se(e)});Xe.displayName="TabContainer";const on=Xe;var rn=/-(.)/g;function an(e){return e.replace(rn,function(t,n){return n.toUpperCase()})}const sn=e=>e[0].toUpperCase()+an(e).slice(1);function Ge(e,{displayName:t=sn(e),Component:n,defaultProps:a}={}){const o=l.exports.forwardRef(({className:r,bsPrefix:s,as:c=n||"div",...u},f)=>{const d=P(s,e);return i(c,{ref:f,className:C(r,d),...u})});return o.defaultProps=a,o.displayName=t,o}const ze=Ge("tab-content"),Ye=l.exports.forwardRef(({bsPrefix:e,transition:t,...n},a)=>{const[{className:o,as:r="div",...s},{isActive:c,onEnter:u,onEntering:f,onEntered:d,onExit:p,onExiting:m,onExited:x,mountOnEnter:h,unmountOnExit:b,transition:g=Y}]=We({...n,transition:se(t)}),y=P(e,"tab-pane");return i(M.Provider,{value:null,children:i(L.Provider,{value:null,children:i(g,{in:c,onEnter:u,onEntering:f,onEntered:d,onExit:p,onExiting:m,onExited:x,mountOnEnter:h,unmountOnExit:b,children:i(r,{...s,ref:a,className:C(o,y,c&&"active")})})})})});Ye.displayName="TabPane";const Ze=Ye,cn={eventKey:$.exports.oneOfType([$.exports.string,$.exports.number]),title:$.exports.node.isRequired,disabled:$.exports.bool,tabClassName:$.exports.string,tabAttrs:$.exports.object},Je=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};Je.propTypes=cn;const J=Object.assign(Je,{Container:on,Content:ze,Pane:Ze});var xe={exports:{}},re={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(a){function o(s,c,u,f,d,p){var m=f||"<<anonymous>>",x=p||u;if(c[u]==null)return s?new Error("Required "+d+" `"+x+"` was not specified "+("in `"+m+"`.")):null;for(var h=arguments.length,b=Array(h>6?h-6:0),g=6;g<h;g++)b[g-6]=arguments[g];return a.apply(void 0,[c,u,m,d,x].concat(b))}var r=o.bind(null,!1);return r.isRequired=o.bind(null,!0),r}e.exports=t.default})(re,re.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=re.exports,a=o(n);function o(s){return s&&s.__esModule?s:{default:s}}function r(){for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];function f(){for(var d=arguments.length,p=Array(d),m=0;m<d;m++)p[m]=arguments[m];var x=null;return c.forEach(function(h){if(x==null){var b=h.apply(void 0,p);b!=null&&(x=b)}}),x}return(0,a.default)(f)}e.exports=t.default})(xe,xe.exports);var ln=Function.prototype.bind.call(Function.prototype.call,[].slice);function un(e,t){return ln(e.querySelectorAll(t))}function dn(){var e=l.exports.useReducer(function(n){return!n},!1),t=e[1];return t}const ce=l.exports.createContext(null);ce.displayName="NavContext";const pn="data-rr-ui-",fn="rrUi";function le(e){return`${pn}${e}`}function mn(e){return`${fn}${e}`}function vn(e){var t=l.exports.useRef(e);return l.exports.useEffect(function(){t.current=e},[e]),t}function Qe(e){var t=vn(e);return l.exports.useCallback(function(){return t.current&&t.current.apply(t,arguments)},[t])}const hn=["as","disabled"];function xn(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function bn(e){return!e||e.trim()==="#"}function et({tagName:e,disabled:t,href:n,target:a,rel:o,role:r,onClick:s,tabIndex:c=0,type:u}){e||(n!=null||a!=null||o!=null?e="a":e="button");const f={tagName:e};if(e==="button")return[{type:u||"button",disabled:t},f];const d=m=>{if((t||e==="a"&&bn(n))&&m.preventDefault(),t){m.stopPropagation();return}s==null||s(m)},p=m=>{m.key===" "&&(m.preventDefault(),d(m))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:r??"button",disabled:void 0,tabIndex:t?void 0:c,href:n,target:e==="a"?a:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:d,onKeyDown:p},f]}const tt=l.exports.forwardRef((e,t)=>{let{as:n,disabled:a}=e,o=xn(e,hn);const[r,{tagName:s}]=et(Object.assign({tagName:n,disabled:a},o));return i(s,Object.assign({},o,r,{ref:t}))});tt.displayName="Button";const yn=["as","active","eventKey"];function gn(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function nt({key:e,onClick:t,active:n,id:a,role:o,disabled:r}){const s=l.exports.useContext(L),c=l.exports.useContext(ce),u=l.exports.useContext(M);let f=n;const d={role:o};if(c){!o&&c.role==="tablist"&&(d.role="tab");const p=c.getControllerId(e??null),m=c.getControlledId(e??null);d[le("event-key")]=e,d.id=p||a,f=n==null&&e!=null?c.activeKey===e:n,(f||!(u!=null&&u.unmountOnExit)&&!(u!=null&&u.mountOnEnter))&&(d["aria-controls"]=m)}return d.role==="tab"&&(d["aria-selected"]=f,f||(d.tabIndex=-1),r&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=Qe(p=>{r||(t==null||t(p),e!=null&&s&&!p.isPropagationStopped()&&s(e,p))}),[d,{isActive:f}]}const ot=l.exports.forwardRef((e,t)=>{let{as:n=tt,active:a,eventKey:o}=e,r=gn(e,yn);const[s,c]=nt(Object.assign({key:H(o,r.href),active:a},r));return s[le("active")]=c.isActive,i(n,Object.assign({},r,s,{ref:t}))});ot.displayName="NavItem";const En=["as","onSelect","activeKey","role","onKeyDown"];function Nn(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const be=()=>{},ye=le("event-key"),rt=l.exports.forwardRef((e,t)=>{let{as:n="div",onSelect:a,activeKey:o,role:r,onKeyDown:s}=e,c=Nn(e,En);const u=dn(),f=l.exports.useRef(!1),d=l.exports.useContext(L),p=l.exports.useContext(M);let m,x;p&&(r=r||"tablist",o=p.activeKey,m=p.getControlledId,x=p.getControllerId);const h=l.exports.useRef(null),b=E=>{const N=h.current;if(!N)return null;const k=un(N,`[${ye}]:not([aria-disabled=true])`),O=N.querySelector("[aria-selected=true]");if(!O||O!==document.activeElement)return null;const D=k.indexOf(O);if(D===-1)return null;let B=D+E;return B>=k.length&&(B=0),B<0&&(B=k.length-1),k[B]},g=(E,N)=>{E!=null&&(a==null||a(E,N),d==null||d(E,N))},y=E=>{if(s==null||s(E),!p)return;let N;switch(E.key){case"ArrowLeft":case"ArrowUp":N=b(-1);break;case"ArrowRight":case"ArrowDown":N=b(1);break;default:return}N&&(E.preventDefault(),g(N.dataset[mn("EventKey")]||null,E),f.current=!0,u())};l.exports.useEffect(()=>{if(h.current&&f.current){const E=h.current.querySelector(`[${ye}][aria-selected=true]`);E==null||E.focus()}f.current=!1});const w=Re(t,h);return i(L.Provider,{value:g,children:i(ce.Provider,{value:{role:r,activeKey:H(o),getControlledId:m||be,getControllerId:x||be},children:i(n,Object.assign({},c,{onKeyDown:y,ref:w,role:r}))})})});rt.displayName="Nav";const Cn=Object.assign(rt,{Item:ot}),at=l.exports.createContext(null);at.displayName="NavbarContext";const it=l.exports.createContext(null);it.displayName="CardHeaderContext";const st=Ge("nav-item"),wn=["onKeyDown"];function On(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Tn(e){return!e||e.trim()==="#"}const ct=l.exports.forwardRef((e,t)=>{let{onKeyDown:n}=e,a=On(e,wn);const[o]=et(Object.assign({tagName:"a"},a)),r=Qe(s=>{o.onKeyDown(s),n==null||n(s)});return Tn(a.href)||a.role==="button"?i("a",Object.assign({ref:t},a,o,{onKeyDown:r})):i("a",Object.assign({ref:t},a,{onKeyDown:n}))});ct.displayName="Anchor";const _n={disabled:!1},ue=l.exports.forwardRef(({bsPrefix:e,className:t,as:n=ct,active:a,eventKey:o,...r},s)=>{e=P(e,"nav-link");const[c,u]=nt({key:H(o,r.href),active:a,...r});return i(n,{...r,...c,ref:s,className:C(t,e,r.disabled&&"disabled",u.isActive&&"active")})});ue.displayName="NavLink";ue.defaultProps=_n;const lt=ue,Pn={justify:!1,fill:!1},de=l.exports.forwardRef((e,t)=>{const{as:n="div",bsPrefix:a,variant:o,fill:r,justify:s,navbar:c,navbarScroll:u,className:f,activeKey:d,...p}=ae(e,{activeKey:"onSelect"}),m=P(a,"nav");let x,h,b=!1;const g=l.exports.useContext(at),y=l.exports.useContext(it);return g?(x=g.bsPrefix,b=c??!0):y&&({cardHeaderBsPrefix:h}=y),i(Cn,{as:n,ref:t,activeKey:d,className:C(f,{[m]:!b,[`${x}-nav`]:b,[`${x}-nav-scroll`]:b&&u,[`${h}-${o}`]:!!h,[`${m}-${o}`]:!!o,[`${m}-fill`]:r,[`${m}-justified`]:s}),...p})});de.displayName="Nav";de.defaultProps=Pn;const T=Object.assign(de,{Item:st,Link:lt});function ge(e,t){let n=0;return l.exports.Children.map(e,a=>l.exports.isValidElement(a)?t(a,n++):a)}function Sn(e,t){let n=0;l.exports.Children.forEach(e,a=>{l.exports.isValidElement(a)&&t(a,n++)})}const Rn={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function $n(e){let t;return Sn(e,n=>{t==null&&(t=n.props.eventKey)}),t}function In(e){const{title:t,eventKey:n,disabled:a,tabClassName:o,tabAttrs:r,id:s}=e.props;return t==null?null:i(st,{as:"li",role:"presentation",children:i(lt,{as:"button",type:"button",eventKey:n,disabled:a,id:s,className:o,...r,children:t})})}const pe=e=>{const{id:t,onSelect:n,transition:a,mountOnEnter:o,unmountOnExit:r,children:s,activeKey:c=$n(s),...u}=ae(e,{activeKey:"onSelect"});return v(ie,{id:t,activeKey:c,onSelect:n,transition:se(a),mountOnEnter:o,unmountOnExit:r,children:[i(T,{...u,role:"tablist",as:"ul",children:ge(s,In)}),i(ze,{children:ge(s,f=>{const d={...f.props};return delete d.title,delete d.disabled,delete d.tabClassName,delete d.tabAttrs,i(Ze,{...d})})})]})};pe.defaultProps=Rn;pe.displayName="Tabs";const An=pe;function Ln(e){const[t,n]=l.exports.useState("escribenos"),a=o=>{o=="whatsapp"?n("escribenos"):n(o)};return v(ut,{children:[i(dt,{title:"Contacto"}),i(pt,{user:e}),i("div",{id:"banner-top",children:i("div",{id:"banner-top--img",className:"h-100 w-100",children:i("div",{className:"container",children:i("div",{id:"banner-top--text-container",className:"row",children:v("div",{className:"col-12 px-0",children:[i("h2",{className:"banner-top--white-title",children:"Centro de contacto"})," ",i("p",{className:"banner-top--white-text",children:"Puedes contactarte con nosotros por los diferentes medios que tenemos para ti."})]})})})})}),i("div",{id:"contenido-contactenos",children:i("div",{className:"contactenos_form container px-0",children:v("div",{className:"row m-0 pb-5",children:[i("div",{className:"col-12 col-md-8 px-0 contactenos_form--nav-and-content mb-4 mb-md-0",children:i("div",{id:"navegacion-contactenos",className:"card",children:v("div",{className:"tabs row no-gutters",id:"__BVID__15",children:[i("div",{className:"col-auto navegacion-contactenos--nav",children:v(T,{className:"nav justify-content-center",activeKey:t,onSelect:o=>a(`${o}`),children:[i(T.Item,{className:"w-100",children:i(T.Link,{eventKey:"escribenos",children:v("div",{className:"navegacion-contactenos--item-nav",children:[i("i",{className:"icon-escribe navegacion-contactenos--iconos"}),i("span",{children:"Escríbenos"}),i("i",{className:"icon-up"})]})})}),i(T.Item,{className:"w-100",children:i(T.Link,{href:"https://api.whatsapp.com/send?phone=573103708276",eventKey:"whatsapp",target:"_blank",children:v("div",{className:"navegacion-contactenos--item-nav",children:[i("i",{className:"icon-whatsapp navegacion-contactenos--iconos"}),i("span",{children:"Whatsapp"})]})})}),i(T.Item,{className:"w-100",children:i(T.Link,{eventKey:"ubicacion",children:v("div",{className:"navegacion-contactenos--item-nav",children:[i("i",{className:"icon-ubicacion navegacion-contactenos--iconos"}),i("span",{children:"Ubicación"}),i("i",{className:"icon-up"})]})})}),i(T.Item,{className:"w-100",children:i(T.Link,{eventKey:"preguntas-frecuentes",children:v("div",{className:"navegacion-contactenos--item-nav",children:[i("i",{className:"icon-preguntas navegacion-contactenos--iconos"}),i("span",{children:"Preguntas frecuentes"}),i("i",{className:"icon-up"})]})})})]})}),i("div",{className:"tab-content col",id:"__BVID__15__BV_tab_container_",children:v(An,{id:"controlled-tab-example",activeKey:t,onSelect:o=>n(o),className:"mb-3 d-none",children:[i(J,{eventKey:"escribenos",title:"escribenos",children:i("div",{className:"navegacion-contactenos--text-content",children:i("div",{className:"contactenos_form",children:v("form",{action:"",children:[v("div",{className:"contactenos_form--campo",children:[i("div",{className:"contactenos_form--campo-title",children:i("label",{children:"Nombre completo:"})}),i("input",{id:"name",name:"name",type:"text",placeholder:"Ingresa tu nombre",className:"contactenos_form--campo-input"})]}),v("div",{className:"contactenos_form--campo",children:[i("div",{className:"contactenos_form--campo-title",children:i("label",{children:"Teléfono:"})}),i("input",{id:"phone",name:"phone",type:"text",placeholder:"Ingresa tu número",className:"contactenos_form--campo-input"})]}),v("div",{className:"contactenos_form--campo",children:[i("div",{className:"contactenos_form--campo-title",children:i("label",{children:"Correo electrónico:"})}),i("input",{id:"email",name:"email",type:"text",placeholder:"Ingresa tu correo electrónico",className:"contactenos_form--campo-input"})]}),v("div",{className:"contactenos_form--campo contactenos_form--campo-mensaje",children:[i("div",{className:"contactenos_form--campo-title",children:i("label",{children:"Tu mensaje"})}),i("textarea",{name:"mensaje",rows:"6",placeholder:"Ingresa tu mensaje",className:"contactenos_form--campo-input"})]}),i("div",{className:"contactenos_form--campo contactenos_form--campo-terminos",children:v("label",{className:"checkbox_container",children:[v("span",{children:[" He leido y acepto ",i("a",{href:"/politica-de-privacidad",target:"_blank",children:"la política de tratamiento de datos."})]}),i("input",{type:"checkbox"}),i("div",{className:"checkbox-input"})]})}),i("div",{className:"contactenos_form--campo-submit",children:v("button",{id:"submit",type:"submit",name:"submit",disabled:"disabled",className:"disabled",children:[i("i",{className:"icon-enviar"})," Enviar formulario ",i("div",{className:"preloader",style:{display:"none"}})]})})]})})})}),i(J,{eventKey:"ubicacion",title:"ubicacion",children:i("div",{role:"tabpanel",id:"tab_ubicaciones","aria-hidden":"false","aria-labelledby":"tab_ubicaciones___BV_tab_button__",className:"tab-pane active card-body",children:v("div",{className:"navegacion-contactenos--content-ubicacion w-50 w-md-75 w-lg-50",children:[v("span",{className:"navegacion-contactenos--content-ubicacion-title",children:["Nuestra ",i("span",{className:"navegacion-contactenos--content-ubicacion-title-blue",children:"ubicación:"})]}),i("div",{className:"navegacion-contactenos--content-ubicacion-content",children:i("span",{children:"Cra 23 # 70a-44 Manizales, Colombia"})}),i("div",{className:"navegacion-contactenos--content-ubicacion-google",children:v("a",{href:"https://www.google.com/maps/place/Licitaciones.Info/@5.0508836,-75.484211,15z/data=!4m5!3m4!1s0x0:0x6150198db5afae40!8m2!3d5.0508836!4d-75.484211",target:"_blank",className:"d-flex",children:[i("img",{src:"/images/contacto/google_maps.svg",alt:"Logo google maps"})," Ver en maps "]})})]})})}),v(J,{eventKey:"preguntas-frecuentes",title:"preguntas-frecuentes",children:[i("h3",{children:"Preguntas Frecuentes"}),v(K,{defaultActiveKey:"0",flush:!0,children:[v(K.Item,{eventKey:"0",children:[i(K.Header,{children:"Accordion Item #1"}),i(K.Body,{children:i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),v(K.Item,{eventKey:"1",children:[i(K.Header,{children:"Accordion Item #2"}),i(K.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})]})]})})]})})}),i("div",{className:"col-12 col-md-4 pr-0 contactenos_form--datos-empresa",children:v("div",{id:"informacion-empresa",children:[v("div",{className:"informacion-empresa--card",children:[v("div",{className:"informacion-empresa--title",children:[i("i",{className:"icon-clock"}),i("span",{children:"Horarios de atención:"})]}),i("div",{className:"informacion-empresa--content",children:i("span",{className:"c-gray",children:"Lunes a Viernes 8:00 am a 6:00 pm"})})]}),v("div",{className:"informacion-empresa--card",children:[v("div",{className:"informacion-empresa--title",children:[i("i",{className:"icon-mail"}),i("span",{children:"Email:"})]}),v("div",{className:"informacion-empresa--content",children:[i("span",{className:"c-gray",children:"servicioalcliente@licitaciones.info"}),i("div",{className:"clipboard-generico-content",children:i("button",{id:"popover-target-1",className:"clipboard-generico-content--botton",children:i("i",{className:"icon-copy"})})})]})]}),v("div",{className:"informacion-empresa--card",children:[v("div",{className:"informacion-empresa--title",children:[i("i",{className:"icon-smartphone"}),i("span",{children:"Teléfonos:"})]}),v("div",{className:"informacion-empresa--content-numbers",children:[v("div",{className:"informacion-empresa--content informacion-empresa--content--flex mb-2",children:[i("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Fijo:"}),v("span",{children:[i("span",{className:"informacion-empresa--content-margin-right c-gray",children:"+57 601 508 61 55"}),i("div",{className:"clipboard-generico-content",children:i("button",{id:"popover-target-2",className:"clipboard-generico-content--botton",children:i("i",{className:"icon-copy"})})})]})]}),v("div",{className:"informacion-empresa--content informacion-empresa--content--flex",children:[i("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Móvil:"}),v("span",{children:[i("span",{className:"informacion-empresa--content-margin-right c-gray",children:"+57 310 370 8276"}),i("div",{className:"clipboard-generico-content",children:i("button",{id:"popover-target-3",className:"clipboard-generico-content--botton",children:i("i",{className:"icon-copy"})})})]})]})]})]}),v("div",{className:"informacion-empresa--card",children:[v("div",{className:"informacion-empresa--title",children:[i("i",{className:"icon-social"}),i("span",{children:"Redes sociales:"})]}),v("div",{className:"informacion-empresa--img",children:[i("a",{href:"https://www.facebook.com/licitacionesInfo/",target:"_blank",children:i("img",{src:"/icons/multicolor/facebook.svg",alt:"logo facebook"})}),i("a",{href:"https://www.linkedin.com/company/licitaciones.info/about/",target:"_blank",children:i("img",{src:"/icons/multicolor/linkedin.svg",alt:"logo linkedin"})}),i("a",{href:"https://www.youtube.com/c/LicitacionesInfo",target:"_blank",children:i("img",{src:"/icons/multicolor/youtube.svg",alt:"logo youtube"})}),i("a",{href:"https://twitter.com/licitacionesinf?lang=es",target:"_blank",children:i("img",{src:"/icons/multicolor/twitter.svg",alt:"logo twitter"})})]})]})]})})]})})}),i(ft,{})]})}export{Ln as default};
