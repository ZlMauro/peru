import{c as ie,o as Ce,s as z,u as k,l as He,a as G,b as O,d as w,C as It,e as Je,f as et,g as Lt,r as We,F as be,h as Dt,t as Ft,B as jt,A as Pt,i as tt,T as nt,j as ot,E as Ut,k as rt,m as Ee,n as at,p as Kt}from"./index-d3abb465.js";import{r as s,a as p,F as xe,R as Ht,j as de,b as Ye}from"./app-faf0be6d.js";var ce;function Xe(e){if((!ce&&ce!==0||e)&&ie){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),ce=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return ce}function Wt(){return s.exports.useState(null)}function Yt(e){var t=s.exports.useRef(e);return t.current=e,t}function st(e){var t=Yt(e);s.exports.useEffect(function(){return function(){return t.current()}},[])}function ve(e){e===void 0&&(e=Ce());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function ze(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function Xt(){var e=s.exports.useRef(!0),t=s.exports.useRef(function(){return e.current});return s.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),t.current}function zt(e){var t=s.exports.useRef(null);return s.exports.useEffect(function(){t.current=e}),t.current}const Gt="data-rr-ui-",Qt="rrUi";function fe(e){return`${Gt}${e}`}function Vt(e){return`${Qt}${e}`}function Zt(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Ge=fe("modal-open");class Ne{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:o=!1}={}){this.handleContainerOverflow=n,this.isRTL=o,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Zt(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();t.style={overflow:r.style.overflow,[o]:r.style[o]},t.scrollBarWidth&&(n[o]=`${parseInt(z(r,o)||"0",10)+t.scrollBarWidth}px`),r.setAttribute(Ge,""),z(r,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Ge),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const lt=s.exports.createContext(ie?window:void 0);lt.Provider;function it(){return s.exports.useContext(lt)}const ge=(e,t)=>ie?e==null?(t||Ce()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function _t(e,t){const n=it(),[o,r]=s.exports.useState(()=>ge(e,n==null?void 0:n.document));if(!o){const a=ge(e);a&&r(a)}return s.exports.useEffect(()=>{t&&o&&t(o)},[t,o]),s.exports.useEffect(()=>{const a=ge(e);a!==o&&r(a)},[e,o]),o}const qt=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Jt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}let he;function en(e){return he||(he=new Ne({ownerDocument:e==null?void 0:e.document})),he}function tn(e){const t=it(),n=e||en(t),o=s.exports.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:s.exports.useCallback(r=>{o.current.dialog=r},[]),setBackdropRef:s.exports.useCallback(r=>{o.current.backdrop=r},[])})}const ct=s.exports.forwardRef((e,t)=>{let{show:n=!1,role:o="dialog",className:r,style:a,children:l,backdrop:i=!0,keyboard:c=!0,onBackdropClick:f,onEscapeKeyDown:d,transition:u,backdropTransition:v,autoFocus:g=!0,enforceFocus:h=!0,restoreFocus:m=!0,restoreFocusOptions:A,renderDialog:x,renderBackdrop:T=C=>p("div",Object.assign({},C)),manager:b,container:N,onShow:$,onHide:I=()=>{},onExit:L,onExited:M,onExiting:W,onEnter:V,onEntering:Z,onEntered:_}=e,U=Jt(e,qt);const j=_t(N),E=tn(b),re=Xt(),q=zt(n),[S,K]=s.exports.useState(!n),D=s.exports.useRef(null);s.exports.useImperativeHandle(t,()=>E,[E]),ie&&!q&&n&&(D.current=ve()),!u&&!n&&!S?K(!0):n&&S&&K(!1);const H=k(()=>{if(E.add(),ae.current=He(document,"keydown",R),F.current=He(document,"focus",()=>setTimeout(P),!0),$&&$(),g){const C=ve(document);E.dialog&&C&&!ze(E.dialog,C)&&(D.current=C,E.dialog.focus())}}),B=k(()=>{if(E.remove(),ae.current==null||ae.current(),F.current==null||F.current(),m){var C;(C=D.current)==null||C.focus==null||C.focus(A),D.current=null}});s.exports.useEffect(()=>{!n||!j||H()},[n,j,H]),s.exports.useEffect(()=>{S&&B()},[S,B]),st(()=>{B()});const P=k(()=>{if(!h||!re()||!E.isTopModal())return;const C=ve();E.dialog&&C&&!ze(E.dialog,C)&&E.dialog.focus()}),J=k(C=>{C.target===C.currentTarget&&(f==null||f(C),i===!0&&I())}),R=k(C=>{c&&C.keyCode===27&&E.isTopModal()&&(d==null||d(C),C.defaultPrevented||I())}),F=s.exports.useRef(),ae=s.exports.useRef(),pe=(...C)=>{K(!0),M==null||M(...C)},ee=u;if(!j||!(n||ee&&!S))return null;const se=Object.assign({role:o,ref:E.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},U,{style:a,className:r,tabIndex:-1});let Y=x?x(se):p("div",Object.assign({},se,{children:s.exports.cloneElement(l,{role:"document"})}));ee&&(Y=p(ee,{appear:!0,unmountOnExit:!0,in:!!n,onExit:L,onExiting:W,onExited:pe,onEnter:V,onEntering:Z,onEntered:_,children:Y}));let te=null;if(i){const C=v;te=T({ref:E.setBackdropRef,onClick:J}),C&&(te=p(C,{appear:!0,in:!!n,children:te}))}return p(xe,{children:Ht.createPortal(de(xe,{children:[te,Y]}),j)})});ct.displayName="Modal";const ut=Object.assign(ct,{Manager:Ne});function nn(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function on(e,t){e.classList?e.classList.add(t):nn(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var rn=Function.prototype.bind.call(Function.prototype.call,[].slice);function X(e,t){return rn(e.querySelectorAll(t))}function Qe(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function an(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Qe(e.className,t):e.setAttribute("class",Qe(e.className&&e.className.baseVal||"",t))}const oe={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class dt extends Ne{adjustAndStore(t,n,o){const r=n.style[t];n.dataset[t]=r,z(n,{[t]:`${parseFloat(z(n,t))+o}px`})}restore(t,n){const o=n.dataset[t];o!==void 0&&(delete n.dataset[t],z(n,{[t]:o}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(on(n,"modal-open"),!t.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";X(n,oe.FIXED_CONTENT).forEach(a=>this.adjustAndStore(o,a,t.scrollBarWidth)),X(n,oe.STICKY_CONTENT).forEach(a=>this.adjustAndStore(r,a,-t.scrollBarWidth)),X(n,oe.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(r,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();an(n,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";X(n,oe.FIXED_CONTENT).forEach(a=>this.restore(o,a)),X(n,oe.STICKY_CONTENT).forEach(a=>this.restore(r,a)),X(n,oe.NAVBAR_TOGGLER).forEach(a=>this.restore(r,a))}}let me;function ft(e){return me||(me=new dt(e)),me}const sn=G("modal-body"),we=s.exports.createContext({onHide(){}}),pt=s.exports.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:o,size:r,fullscreen:a,children:l,scrollable:i,...c},f)=>{e=O(e,"modal");const d=`${e}-dialog`,u=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return p("div",{...c,ref:f,className:w(d,t,r&&`${e}-${r}`,o&&`${d}-centered`,i&&`${d}-scrollable`,a&&u),children:p("div",{className:w(`${e}-content`,n),children:l})})});pt.displayName="ModalDialog";const vt=pt,ln=G("modal-footer"),cn={closeLabel:"Close",closeButton:!1},Re=s.exports.forwardRef(({closeLabel:e,closeVariant:t,closeButton:n,onHide:o,children:r,...a},l)=>{const i=s.exports.useContext(we),c=k(()=>{i==null||i.onHide(),o==null||o()});return de("div",{ref:l,...a,children:[r,n&&p(It,{"aria-label":e,variant:t,onClick:c})]})});Re.defaultProps=cn;const un={closeLabel:"Close",closeButton:!1},Te=s.exports.forwardRef(({bsPrefix:e,className:t,...n},o)=>(e=O(e,"modal-header"),p(Re,{ref:o,...n,className:w(t,e)})));Te.displayName="ModalHeader";Te.defaultProps=un;const dn=Te,fn=Je("h4"),pn=G("modal-title",{Component:fn}),vn={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:vt};function gn(e){return p(be,{...e,timeout:null})}function hn(e){return p(be,{...e,timeout:null})}const Me=s.exports.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:o,contentClassName:r,children:a,dialogAs:l,"aria-labelledby":i,"aria-describedby":c,"aria-label":f,show:d,animation:u,backdrop:v,keyboard:g,onEscapeKeyDown:h,onShow:m,onHide:A,container:x,autoFocus:T,enforceFocus:b,restoreFocus:N,restoreFocusOptions:$,onEntered:I,onExit:L,onExiting:M,onEnter:W,onEntering:V,onExited:Z,backdropClassName:_,manager:U,...j},E)=>{const[re,q]=s.exports.useState({}),[S,K]=s.exports.useState(!1),D=s.exports.useRef(!1),H=s.exports.useRef(!1),B=s.exports.useRef(null),[P,J]=Wt(),R=et(E,J),F=k(A),ae=Lt();e=O(e,"modal");const pe=s.exports.useMemo(()=>({onHide:F}),[F]);function ee(){return U||ft({isRTL:ae})}function se(y){if(!ie)return;const ne=ee().getScrollbarWidth()>0,Ke=y.scrollHeight>Ce(y).documentElement.clientHeight;q({paddingRight:ne&&!Ke?Xe():void 0,paddingLeft:!ne&&Ke?Xe():void 0})}const Y=k(()=>{P&&se(P.dialog)});st(()=>{We(window,"resize",Y),B.current==null||B.current()});const te=()=>{D.current=!0},C=y=>{D.current&&P&&y.target===P.dialog&&(H.current=!0),D.current=!1},Pe=()=>{K(!0),B.current=Ft(P.dialog,()=>{K(!1)})},wt=y=>{y.target===y.currentTarget&&Pe()},Rt=y=>{if(v==="static"){wt(y);return}if(H.current||y.target!==y.currentTarget){H.current=!1;return}A==null||A()},Tt=y=>{g?h==null||h(y):(y.preventDefault(),v==="static"&&Pe())},Mt=(y,ne)=>{y&&se(y),W==null||W(y,ne)},Ot=y=>{B.current==null||B.current(),L==null||L(y)},$t=(y,ne)=>{V==null||V(y,ne),Dt(window,"resize",Y)},St=y=>{y&&(y.style.display=""),Z==null||Z(y),We(window,"resize",Y)},Bt=s.exports.useCallback(y=>p("div",{...y,className:w(`${e}-backdrop`,_,!u&&"show")}),[u,_,e]),Ue={...n,...re};Ue.display="block";const kt=y=>p("div",{role:"dialog",...y,style:Ue,className:w(t,e,S&&`${e}-static`,!u&&"show"),onClick:v?Rt:void 0,onMouseUp:C,"aria-label":f,"aria-labelledby":i,"aria-describedby":c,children:p(l,{...j,onMouseDown:te,className:o,contentClassName:r,children:a})});return p(we.Provider,{value:pe,children:p(ut,{show:d,ref:R,backdrop:v,container:x,keyboard:!0,autoFocus:T,enforceFocus:b,restoreFocus:N,restoreFocusOptions:$,onEscapeKeyDown:Tt,onShow:m,onHide:A,onEnter:Mt,onEntering:$t,onEntered:I,onExit:Ot,onExiting:M,onExited:St,manager:ee(),transition:u?gn:void 0,backdropTransition:u?hn:void 0,renderBackdrop:Bt,renderDialog:kt})})});Me.displayName="Modal";Me.defaultProps=vn;const no=Object.assign(Me,{Body:sn,Header:dn,Title:pn,Footer:ln,Dialog:vt,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function oo({className:e}){return de("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"71px",height:"27px",viewBox:"0 0 71 27",enableBackground:"new 0 0 71 27",xmlSpace:"preserve",children:["  ",p("image",{id:"image0",width:"71",height:"27",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAbCAMAAAAZImKhAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\r
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEX////29vnL0+i3w975\r
+fn9+vr+/f3c4vBnf7sjRZ0fQpspSp/u7u709PSdrNOZqdHR2OpJZq5ZcrU3V6aotdjn6vTx8fHZ\r
2dmcnJzT09Ps7Oze3t6ls9dCYKsuT6Kvr69wcHCgoKDGxsZoaGjLy8uzs7N6enqOn827u7tra2u/\r
v7+qqqqMjIyJiYmRkZF1dXXplZLSQT/ZRkHsoqCYmJji4uLsop/ULSfuq6j10M/32dikpKTaS0bc\r
VE/ws7HzwsHkeXbmhYLlgX7ZQz3njIjnjIkRWXEQAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+cBBA8Y\r
Iimwof0AAAE4SURBVDjL7dRhU4IwGAfwaYixppUVgpXiBgthIRWUZYllff+v1BgcgXR5x17V9X+x\r
F8/dfvc82wCAv59We0/pqLJKd1+DBwihnpzU1yAUDkKKBHMIYeFIQEe8m+PCQY1HG8CTfntQOL2G\r
TJfPdHqmFU6lIX2YroY5Ot/pXHDncjz+crITUieWNVUxEY7t0J3OFYTlc0aoJcruzMPWBBOfYWBg\r
7uDrIG9q7gLTqo0f3uS5zXMnyixKV0ycaKZQx6Ex8abzrFWf+BarXcf9w1YWohwEACCdzzUko9TB\r
hFKKsi0RYfXn8bjtPImyTZZLPlrhxMRdGvkW1fvuUp+rzEtetoPAAyYDMdMNjA2AWfTzpa2qTtLw\r
/QCwLjOvjRnQKUFvUl/8YpMpm5WMkraUhO8fYSL9I/vPL8gnAUMy2+UDIWYAAAAldEVYdGRhdGU6\r
Y3JlYXRlADIwMjMtMDEtMDRUMTU6MjQ6MzQrMDA6MDCdUG9DAAAAJXRFWHRkYXRlOm1vZGlmeQAy\r
MDIzLTAxLTA0VDE1OjI0OjM0KzAwOjAw7A3X/wAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0w\r
MS0wNFQxNToyNDozNCswMDowMLsY9iAAAAAASUVORK5CYII=`})]})}const mn={fluid:!1},Oe=s.exports.forwardRef(({bsPrefix:e,fluid:t,as:n="div",className:o,...r},a)=>{const l=O(e,"container"),i=typeof t=="string"?`-${t}`:"-fluid";return p(n,{ref:a,...r,className:w(o,t?`${l}${i}`:l)})});Oe.displayName="Container";Oe.defaultProps=mn;const ro=Oe;var Ve={exports:{}},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(o){function r(l,i,c,f,d,u){var v=f||"<<anonymous>>",g=u||c;if(i[c]==null)return l?new Error("Required "+d+" `"+g+"` was not specified "+("in `"+v+"`.")):null;for(var h=arguments.length,m=Array(h>6?h-6:0),A=6;A<h;A++)m[A-6]=arguments[A];return o.apply(void 0,[i,c,v,d,g].concat(m))}var a=r.bind(null,!1);return a.isRequired=r.bind(null,!0),a}e.exports=t.default})(ye,ye.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=ye.exports,o=r(n);function r(l){return l&&l.__esModule?l:{default:l}}function a(){for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];function f(){for(var d=arguments.length,u=Array(d),v=0;v<d;v++)u[v]=arguments[v];var g=null;return i.forEach(function(h){if(g==null){var m=h.apply(void 0,u);m!=null&&(g=m)}}),g}return(0,o.default)(f)}e.exports=t.default})(Ve,Ve.exports);function xn(){var e=s.exports.useReducer(function(n){return!n},!1),t=e[1];return t}const $e=s.exports.createContext(null);$e.displayName="NavContext";const ue=s.exports.createContext(null),Se=(e,t=null)=>e!=null?String(e):t||null,gt=s.exports.createContext(null),yn=["as","active","eventKey"];function An(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function ht({key:e,onClick:t,active:n,id:o,role:r,disabled:a}){const l=s.exports.useContext(ue),i=s.exports.useContext($e),c=s.exports.useContext(gt);let f=n;const d={role:r};if(i){!r&&i.role==="tablist"&&(d.role="tab");const u=i.getControllerId(e??null),v=i.getControlledId(e??null);d[fe("event-key")]=e,d.id=u||o,f=n==null&&e!=null?i.activeKey===e:n,(f||!(c!=null&&c.unmountOnExit)&&!(c!=null&&c.mountOnEnter))&&(d["aria-controls"]=v)}return d.role==="tab"&&(d["aria-selected"]=f,f||(d.tabIndex=-1),a&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=k(u=>{a||(t==null||t(u),e!=null&&l&&!u.isPropagationStopped()&&l(e,u))}),[d,{isActive:f}]}const mt=s.exports.forwardRef((e,t)=>{let{as:n=jt,active:o,eventKey:r}=e,a=An(e,yn);const[l,i]=ht(Object.assign({key:Se(r,a.href),active:o},a));return l[fe("active")]=i.isActive,p(n,Object.assign({},a,l,{ref:t}))});mt.displayName="NavItem";const Cn=["as","onSelect","activeKey","role","onKeyDown"];function bn(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const Ze=()=>{},_e=fe("event-key"),xt=s.exports.forwardRef((e,t)=>{let{as:n="div",onSelect:o,activeKey:r,role:a,onKeyDown:l}=e,i=bn(e,Cn);const c=xn(),f=s.exports.useRef(!1),d=s.exports.useContext(ue),u=s.exports.useContext(gt);let v,g;u&&(a=a||"tablist",r=u.activeKey,v=u.getControlledId,g=u.getControllerId);const h=s.exports.useRef(null),m=b=>{const N=h.current;if(!N)return null;const $=X(N,`[${_e}]:not([aria-disabled=true])`),I=N.querySelector("[aria-selected=true]");if(!I||I!==document.activeElement)return null;const L=$.indexOf(I);if(L===-1)return null;let M=L+b;return M>=$.length&&(M=0),M<0&&(M=$.length-1),$[M]},A=(b,N)=>{b!=null&&(o==null||o(b,N),d==null||d(b,N))},x=b=>{if(l==null||l(b),!u)return;let N;switch(b.key){case"ArrowLeft":case"ArrowUp":N=m(-1);break;case"ArrowRight":case"ArrowDown":N=m(1);break;default:return}N&&(b.preventDefault(),A(N.dataset[Vt("EventKey")]||null,b),f.current=!0,c())};s.exports.useEffect(()=>{if(h.current&&f.current){const b=h.current.querySelector(`[${_e}][aria-selected=true]`);b==null||b.focus()}f.current=!1});const T=et(t,h);return p(ue.Provider,{value:A,children:p($e.Provider,{value:{role:a,activeKey:Se(r),getControlledId:v||Ze,getControllerId:g||Ze},children:p(n,Object.assign({},i,{onKeyDown:x,ref:T,role:a}))})})});xt.displayName="Nav";const En=Object.assign(xt,{Item:mt}),Q=s.exports.createContext(null);Q.displayName="NavbarContext";const yt=s.exports.createContext(null);yt.displayName="CardHeaderContext";const Nn=G("nav-item");var wn=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Rn=typeof document<"u";const Tn=Rn||wn?s.exports.useLayoutEffect:s.exports.useEffect,Mn={disabled:!1},Be=s.exports.forwardRef(({bsPrefix:e,className:t,as:n=Pt,active:o,eventKey:r,...a},l)=>{e=O(e,"nav-link");const[i,c]=ht({key:Se(r,a.href),active:o,...a});return p(n,{...a,...i,ref:l,className:w(t,e,a.disabled&&"disabled",c.isActive&&"active")})});Be.displayName="NavLink";Be.defaultProps=Mn;const On=Be,$n={justify:!1,fill:!1},ke=s.exports.forwardRef((e,t)=>{const{as:n="div",bsPrefix:o,variant:r,fill:a,justify:l,navbar:i,navbarScroll:c,className:f,activeKey:d,...u}=tt(e,{activeKey:"onSelect"}),v=O(o,"nav");let g,h,m=!1;const A=s.exports.useContext(Q),x=s.exports.useContext(yt);return A?(g=A.bsPrefix,m=i??!0):x&&({cardHeaderBsPrefix:h}=x),p(En,{as:n,ref:t,activeKey:d,className:w(f,{[v]:!m,[`${g}-nav`]:m,[`${g}-nav-scroll`]:m&&c,[`${h}-${r}`]:!!h,[`${v}-${r}`]:!!r,[`${v}-fill`]:a,[`${v}-justified`]:l}),...u})});ke.displayName="Nav";ke.defaultProps=$n;const ao=Object.assign(ke,{Item:Nn,Link:On}),At=s.exports.forwardRef(({bsPrefix:e,className:t,as:n,...o},r)=>{e=O(e,"navbar-brand");const a=n||(o.href?"a":"span");return p(a,{...o,ref:r,className:w(t,e)})});At.displayName="NavbarBrand";const Sn=At;function le(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...r){t.apply(this,r),n.apply(this,r)}},null)}const Bn={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Ct(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,o=t[n],r=Bn[e];return o+parseInt(z(t,r[0]),10)+parseInt(z(t,r[1]),10)}const kn={[Ut]:"collapse",[rt]:"collapsing",[Ee]:"collapsing",[at]:"collapse show"},In={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Ct},bt=Ye.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:r,className:a,children:l,dimension:i="height",getDimensionValue:c=Ct,...f},d)=>{const u=typeof i=="function"?i():i,v=s.exports.useMemo(()=>le(x=>{x.style[u]="0"},e),[u,e]),g=s.exports.useMemo(()=>le(x=>{const T=`scroll${u[0].toUpperCase()}${u.slice(1)}`;x.style[u]=`${x[T]}px`},t),[u,t]),h=s.exports.useMemo(()=>le(x=>{x.style[u]=null},n),[u,n]),m=s.exports.useMemo(()=>le(x=>{x.style[u]=`${c(u,x)}px`,Kt(x)},o),[o,c,u]),A=s.exports.useMemo(()=>le(x=>{x.style[u]=null},r),[u,r]);return p(nt,{ref:d,addEndListener:ot,...f,"aria-expanded":f.role?f.in:null,onEnter:v,onEntering:g,onEntered:h,onExit:m,onExiting:A,childRef:l.ref,children:(x,T)=>Ye.cloneElement(l,{...T,className:w(a,l.props.className,kn[x],u==="width"&&"collapse-horizontal")})})});bt.defaultProps=In;const Et=s.exports.forwardRef(({children:e,bsPrefix:t,...n},o)=>{t=O(t,"navbar-collapse");const r=s.exports.useContext(Q);return p(bt,{in:!!(r&&r.expanded),...n,children:p("div",{ref:o,className:t,children:e})})});Et.displayName="NavbarCollapse";const Ln=Et,Dn={label:"Toggle navigation"},Ie=s.exports.forwardRef(({bsPrefix:e,className:t,children:n,label:o,as:r="button",onClick:a,...l},i)=>{e=O(e,"navbar-toggler");const{onToggle:c,expanded:f}=s.exports.useContext(Q)||{},d=k(u=>{a&&a(u),c&&c()});return r==="button"&&(l.type="button"),p(r,{...l,ref:i,onClick:d,"aria-label":o,className:w(t,e,!f&&"collapsed"),children:n||p("span",{className:`${e}-icon`})})});Ie.displayName="NavbarToggle";Ie.defaultProps=Dn;const Fn=Ie;var Ae=new WeakMap,qe=function(t,n){if(!(!t||!n)){var o=Ae.get(n)||new Map;Ae.set(n,o);var r=o.get(t);return r||(r=n.matchMedia(t),r.refCount=0,o.set(r.media,r)),r}};function jn(e,t){t===void 0&&(t=typeof window>"u"?void 0:window);var n=qe(e,t),o=s.exports.useState(function(){return n?n.matches:!1}),r=o[0],a=o[1];return Tn(function(){var l=qe(e,t);if(!l)return a(!1);var i=Ae.get(t),c=function(){a(l.matches)};return l.refCount++,l.addListener(c),c(),function(){l.removeListener(c),l.refCount--,l.refCount<=0&&(i==null||i.delete(l.media)),l=void 0}},[e]),r}function Pn(e){var t=Object.keys(e);function n(i,c){return i===c?c:i?i+" and "+c:c}function o(i){return t[Math.min(t.indexOf(i)+1,t.length-1)]}function r(i){var c=o(i),f=e[c];return typeof f=="number"?f=f-.2+"px":f="calc("+f+" - 0.2px)","(max-width: "+f+")"}function a(i){var c=e[i];return typeof c=="number"&&(c=c+"px"),"(min-width: "+c+")"}function l(i,c,f){var d;if(typeof i=="object")d=i,f=c,c=!0;else{var u;c=c||!0,d=(u={},u[i]=c,u)}var v=s.exports.useMemo(function(){return Object.entries(d).reduce(function(g,h){var m=h[0],A=h[1];return(A==="up"||A===!0)&&(g=n(g,a(m))),(A==="down"||A===!0)&&(g=n(g,r(m))),g},"")},[JSON.stringify(d)]);return jn(v,f)}return l}var Un=Pn({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const Kn=G("offcanvas-body"),Hn={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Wn={[Ee]:"show",[at]:"show"},Le=s.exports.forwardRef(({bsPrefix:e,className:t,children:n,...o},r)=>(e=O(e,"offcanvas"),p(nt,{ref:r,addEndListener:ot,...o,childRef:n.ref,children:(a,l)=>s.exports.cloneElement(n,{...l,className:w(t,n.props.className,(a===Ee||a===rt)&&`${e}-toggling`,Wn[a])})})));Le.defaultProps=Hn;Le.displayName="OffcanvasToggling";const Yn={closeLabel:"Close",closeButton:!1},De=s.exports.forwardRef(({bsPrefix:e,className:t,...n},o)=>(e=O(e,"offcanvas-header"),p(Re,{ref:o,...n,className:w(t,e)})));De.displayName="OffcanvasHeader";De.defaultProps=Yn;const Xn=Je("h5"),zn=G("offcanvas-title",{Component:Xn}),Gn={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function Qn(e){return p(Le,{...e})}function Vn(e){return p(be,{...e})}const Fe=s.exports.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":o,placement:r,responsive:a,show:l,backdrop:i,keyboard:c,scroll:f,onEscapeKeyDown:d,onShow:u,onHide:v,container:g,autoFocus:h,enforceFocus:m,restoreFocus:A,restoreFocusOptions:x,onEntered:T,onExit:b,onExiting:N,onEnter:$,onEntering:I,onExited:L,backdropClassName:M,manager:W,renderStaticNode:V,...Z},_)=>{const U=s.exports.useRef();e=O(e,"offcanvas");const{onToggle:j}=s.exports.useContext(Q)||{},[E,re]=s.exports.useState(!1),q=Un(a||"xs","up");s.exports.useEffect(()=>{re(a?l&&!q:l)},[l,a,q]);const S=k(()=>{j==null||j(),v==null||v()}),K=s.exports.useMemo(()=>({onHide:S}),[S]);function D(){return W||(f?(U.current||(U.current=new dt({handleContainerOverflow:!1})),U.current):ft())}const H=(R,...F)=>{R&&(R.style.visibility="visible"),$==null||$(R,...F)},B=(R,...F)=>{R&&(R.style.visibility=""),L==null||L(...F)},P=s.exports.useCallback(R=>p("div",{...R,className:w(`${e}-backdrop`,M)}),[M,e]),J=R=>p("div",{...R,...Z,className:w(t,a?`${e}-${a}`:e,`${e}-${r}`),"aria-labelledby":o,children:n});return de(xe,{children:[!E&&(a||V)&&J({}),p(we.Provider,{value:K,children:p(ut,{show:E,ref:_,backdrop:i,container:g,keyboard:c,autoFocus:h,enforceFocus:m&&!f,restoreFocus:A,restoreFocusOptions:x,onEscapeKeyDown:d,onShow:u,onHide:S,onEnter:H,onEntering:I,onEntered:T,onExit:b,onExiting:N,onExited:B,manager:D(),transition:Qn,backdropTransition:Vn,renderBackdrop:P,renderDialog:J})})]})});Fe.displayName="Offcanvas";Fe.defaultProps=Gn;const Zn=Object.assign(Fe,{Body:Kn,Header:De,Title:zn}),Nt=s.exports.forwardRef((e,t)=>{const n=s.exports.useContext(Q);return p(Zn,{ref:t,show:!!(n!=null&&n.expanded),...e,renderStaticNode:!0})});Nt.displayName="NavbarOffcanvas";const _n=Nt,qn=G("navbar-text",{Component:"span"}),Jn={expand:!0,variant:"light",collapseOnSelect:!1},je=s.exports.forwardRef((e,t)=>{const{bsPrefix:n,expand:o,variant:r,bg:a,fixed:l,sticky:i,className:c,as:f="nav",expanded:d,onToggle:u,onSelect:v,collapseOnSelect:g,...h}=tt(e,{expanded:"onToggle"}),m=O(n,"navbar"),A=s.exports.useCallback((...b)=>{v==null||v(...b),g&&d&&(u==null||u(!1))},[v,g,d,u]);h.role===void 0&&f!=="nav"&&(h.role="navigation");let x=`${m}-expand`;typeof o=="string"&&(x=`${x}-${o}`);const T=s.exports.useMemo(()=>({onToggle:()=>u==null?void 0:u(!d),bsPrefix:m,expanded:!!d,expand:o}),[m,d,o,u]);return p(Q.Provider,{value:T,children:p(ue.Provider,{value:A,children:p(f,{ref:t,...h,className:w(c,m,o&&x,r&&`${m}-${r}`,a&&`bg-${a}`,i&&`sticky-${i}`,l&&`fixed-${l}`)})})})});je.defaultProps=Jn;je.displayName="Navbar";const so=Object.assign(je,{Brand:Sn,Collapse:Ln,Offcanvas:_n,Text:qn,Toggle:Fn});export{ro as C,no as M,ao as N,ue as S,gt as T,so as a,oo as b,bt as c,Nn as d,On as e,ze as f,Wt as g,$e as h,fe as i,it as j,zt as k,xn as l,Se as m,Q as n,Tn as o,X as q,Xt as u};
