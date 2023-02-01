import{r as c,R as x,m as b,a as P}from"./app-2450fc49.js";import{_ as J,d as K,b as F}from"./createWithBsPrefix-9b332316.js";const Q=!!(typeof window<"u"&&window.document&&window.document.createElement);var _=!1,w=!1;try{var N={get passive(){return _=!0},get once(){return w=_=!0}};Q&&(window.addEventListener("test",N,N),window.removeEventListener("test",N,!0))}catch{}function tt(t,n,s,o){if(o&&typeof o!="boolean"&&!w){var r=o.once,e=o.capture,i=s;!w&&r&&(i=s.__once||function a(u){this.removeEventListener(n,a,e),s.call(this,u)},s.__once=i),t.addEventListener(n,i,_?o:e)}t.addEventListener(n,s,o)}function et(t){return t&&t.ownerDocument||document}function nt(t,n,s,o){var r=o&&typeof o!="boolean"?o.capture:o;t.removeEventListener(n,s,r),s.__once&&t.removeEventListener(n,s.__once,r)}function rt(t){var n=c.exports.useRef(t);return n.current=t,n}function Dt(t){var n=rt(t);c.exports.useEffect(function(){return function(){return n.current()}},[])}function ot(t){var n=et(t);return n&&n.defaultView||window}function st(t,n){return ot(t).getComputedStyle(t,n)}var it=/([A-Z])/g;function at(t){return t.replace(it,"-$1").toLowerCase()}var ut=/^ms-/;function S(t){return at(t).replace(ut,"-ms-")}var ct=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function ft(t){return!!(t&&ct.test(t))}function W(t,n){var s="",o="";if(typeof n=="string")return t.style.getPropertyValue(S(n))||st(t).getPropertyValue(S(n));Object.keys(n).forEach(function(r){var e=n[r];!e&&e!==0?t.style.removeProperty(S(r)):ft(r)?o+=r+"("+e+") ":s+=S(r)+": "+e+";"}),o&&(s+="transform: "+o+";"),t.style.cssText+=";"+s}function j(t,n,s,o){return tt(t,n,s,o),function(){nt(t,n,s,o)}}function pt(t,n,s,o){if(s===void 0&&(s=!1),o===void 0&&(o=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(n,s,o),t.dispatchEvent(r)}}function lt(t){var n=W(t,"transitionDuration")||"",s=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*s}function dt(t,n,s){s===void 0&&(s=5);var o=!1,r=setTimeout(function(){o||pt(t,"transitionend",!0)},n+s),e=j(t,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(r),e()}}function Et(t,n,s,o){s==null&&(s=lt(t)||0);var r=dt(t,s,o),e=j(t,"transitionend",n);return function(){r(),e()}}function Pt(){var t=c.exports.useRef(!0),n=c.exports.useRef(function(){return t.current});return c.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),n.current}function k(t,n){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},k(t,n)}function ht(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,k(t,n)}var R={exports:{}},vt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mt=vt,xt=mt;function $(){}function G(){}G.resetWarningCache=$;var yt=function(){function t(o,r,e,i,a,u){if(u!==xt){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function n(){return t}var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:G,resetWarningCache:$};return s.PropTypes=s,s};R.exports=yt();const U={disabled:!1},X=x.createContext(null);var Tt=function(n){return n.scrollTop},g="unmounted",v="exited",l="entering",m="entered",D="exiting",p=function(t){ht(n,t);function n(o,r){var e;e=t.call(this,o,r)||this;var i=r,a=i&&!i.isMounting?o.enter:o.appear,u;return e.appearStatus=null,o.in?a?(u=v,e.appearStatus=l):u=m:o.unmountOnExit||o.mountOnEnter?u=g:u=v,e.state={status:u},e.nextCallback=null,e}n.getDerivedStateFromProps=function(r,e){var i=r.in;return i&&e.status===g?{status:v}:null};var s=n.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(r){var e=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==l&&i!==m&&(e=l):(i===l||i===m)&&(e=D)}this.updateStatus(!1,e)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var r=this.props.timeout,e,i,a;return e=i=a=r,r!=null&&typeof r!="number"&&(e=r.exit,i=r.enter,a=r.appear!==void 0?r.appear:i),{exit:e,enter:i,appear:a}},s.updateStatus=function(r,e){if(r===void 0&&(r=!1),e!==null)if(this.cancelNextCallback(),e===l){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this);i&&Tt(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:g})},s.performEnter=function(r){var e=this,i=this.props.enter,a=this.context?this.context.isMounting:r,u=this.props.nodeRef?[a]:[b.findDOMNode(this),a],f=u[0],d=u[1],E=this.getTimeouts(),C=a?E.appear:E.enter;if(!r&&!i||U.disabled){this.safeSetState({status:m},function(){e.props.onEntered(f)});return}this.props.onEnter(f,d),this.safeSetState({status:l},function(){e.props.onEntering(f,d),e.onTransitionEnd(C,function(){e.safeSetState({status:m},function(){e.props.onEntered(f,d)})})})},s.performExit=function(){var r=this,e=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:b.findDOMNode(this);if(!e||U.disabled){this.safeSetState({status:v},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:D},function(){r.props.onExiting(a),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:v},function(){r.props.onExited(a)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(r,e){e=this.setNextCallback(e),this.setState(r,e)},s.setNextCallback=function(r){var e=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,e.nextCallback=null,r(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},s.onTransitionEnd=function(r,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],f=u[0],d=u[1];this.props.addEndListener(f,d)}r!=null&&setTimeout(this.nextCallback,r)},s.render=function(){var r=this.state.status;if(r===g)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=J(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(X.Provider,{value:null},typeof i=="function"?i(r,a):x.cloneElement(x.Children.only(i),a))},n}(x.Component);p.contextType=X;p.propTypes={};function T(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T};p.UNMOUNTED=g;p.EXITED=v;p.ENTERING=l;p.ENTERED=m;p.EXITING=D;function I(t,n){const s=W(t,n)||"",o=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*o}function bt(t,n){const s=I(t,"transitionDuration"),o=I(t,"transitionDelay"),r=Et(t,e=>{e.target===t&&(r(),n(e))},s+o)}function gt(t){t.offsetHeight}function St(t){return t&&"setState"in t?b.findDOMNode(t):t??null}const Rt=x.forwardRef(({onEnter:t,onEntering:n,onEntered:s,onExit:o,onExiting:r,onExited:e,addEndListener:i,children:a,childRef:u,...f},d)=>{const E=c.exports.useRef(null),C=K(E,u),M=y=>{C(St(y))},h=y=>O=>{y&&E.current&&y(E.current,O)},B=c.exports.useCallback(h(t),[t]),V=c.exports.useCallback(h(n),[n]),H=c.exports.useCallback(h(s),[s]),Y=c.exports.useCallback(h(o),[o]),Z=c.exports.useCallback(h(r),[r]),q=c.exports.useCallback(h(e),[e]),z=c.exports.useCallback(h(i),[i]);return P(p,{ref:d,...f,onEnter:B,onEntered:H,onEntering:V,onExit:Y,onExited:q,onExiting:Z,addEndListener:z,nodeRef:E,children:typeof a=="function"?(y,O)=>a(y,{...O,ref:M}):x.cloneElement(a,{ref:M})})}),Ct={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Ot={[l]:"show",[m]:"show"},A=c.exports.forwardRef(({className:t,children:n,transitionClasses:s={},...o},r)=>{const e=c.exports.useCallback((i,a)=>{gt(i),o.onEnter==null||o.onEnter(i,a)},[o]);return P(Rt,{ref:r,addEndListener:bt,...o,onEnter:e,childRef:n.ref,children:(i,a)=>c.exports.cloneElement(n,{...a,className:F("fade",t,n.props.className,Ot[i],s[i])})})});A.defaultProps=Ct;A.displayName="Fade";const Nt={"aria-label":R.exports.string,onClick:R.exports.func,variant:R.exports.oneOf(["white"])},_t={"aria-label":"Close"},L=c.exports.forwardRef(({className:t,variant:n,...s},o)=>P("button",{ref:o,type:"button",className:F("btn-close",n&&`btn-close-${n}`,t),...s}));L.displayName="CloseButton";L.propTypes=Nt;L.defaultProps=_t;export{L as C,v as E,A as F,Rt as T,Dt as a,tt as b,Q as c,bt as d,D as e,l as f,m as g,gt as h,j as l,et as o,R as p,nt as r,W as s,Et as t,Pt as u};