import{r as t,j as a,a as e,R as _e,F as Ce,u as De}from"./app-16464967.js";import{b as E,d as M,T as be,j as we,s as Ne,E as Ve,k as ye,m as te,n as Me,p as Ue,u as Ee,c as se,F as He}from"./CloseButton-4dcaafac.js";import{c as F,A as Ye,d as Pe,a as qe,B as Xe,b as Ke,g as Qe,u as ze,S as Ge,M as b}from"./Modal-c1710e40.js";import{T as xe}from"./TextInput-92ea4b9c.js";var Ze=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Je=typeof document<"u";const We=Je||Ze?t.exports.useLayoutEffect:t.exports.useEffect;function Bn({className:n}){return a("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"71px",height:"27px",viewBox:"0 0 71 27",enableBackground:"new 0 0 71 27",xmlSpace:"preserve",children:["  ",e("image",{id:"image0",width:"71",height:"27",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAbCAMAAAAZImKhAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\r
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
MS0wNFQxNToyNDozNCswMDowMLsY9iAAAAAASUVORK5CYII=`})]})}const en={fluid:!1},re=t.exports.forwardRef(({bsPrefix:n,fluid:o,as:r="div",className:s,...c},p)=>{const u=E(n,"container"),l=typeof o=="string"?`-${o}`:"-fluid";return e(r,{ref:p,...c,className:M(s,o?`${u}${l}`:u)})});re.displayName="Container";re.defaultProps=en;const Rn=re,Se=t.exports.forwardRef(({bsPrefix:n,className:o,as:r,...s},c)=>{n=E(n,"navbar-brand");const p=r||(s.href?"a":"span");return e(p,{...s,ref:c,className:M(o,n)})});Se.displayName="NavbarBrand";const nn=Se;function j(...n){return n.filter(o=>o!=null).reduce((o,r)=>{if(typeof r!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return o===null?r:function(...c){o.apply(this,c),r.apply(this,c)}},null)}const an={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function ke(n,o){const r=`offset${n[0].toUpperCase()}${n.slice(1)}`,s=o[r],c=an[n];return s+parseInt(Ne(o,c[0]),10)+parseInt(Ne(o,c[1]),10)}const on={[Ve]:"collapse",[ye]:"collapsing",[te]:"collapsing",[Me]:"collapse show"},tn={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:ke},Be=_e.forwardRef(({onEnter:n,onEntering:o,onEntered:r,onExit:s,onExiting:c,className:p,children:u,dimension:l="height",getDimensionValue:d=ke,...f},v)=>{const m=typeof l=="function"?l():l,_=t.exports.useMemo(()=>j(h=>{h.style[m]="0"},n),[m,n]),N=t.exports.useMemo(()=>j(h=>{const y=`scroll${m[0].toUpperCase()}${m.slice(1)}`;h.style[m]=`${h[y]}px`},o),[m,o]),A=t.exports.useMemo(()=>j(h=>{h.style[m]=null},r),[m,r]),g=t.exports.useMemo(()=>j(h=>{h.style[m]=`${d(m,h)}px`,Ue(h)},s),[s,d,m]),C=t.exports.useMemo(()=>j(h=>{h.style[m]=null},c),[m,c]);return e(be,{ref:v,addEndListener:we,...f,"aria-expanded":f.role?f.in:null,onEnter:_,onEntering:N,onEntered:A,onExit:g,onExiting:C,childRef:u.ref,children:(h,y)=>_e.cloneElement(u,{...y,className:M(p,u.props.className,on[h],m==="width"&&"collapse-horizontal")})})});Be.defaultProps=tn;const Re=t.exports.forwardRef(({children:n,bsPrefix:o,...r},s)=>{o=E(o,"navbar-collapse");const c=t.exports.useContext(F);return e(Be,{in:!!(c&&c.expanded),...r,children:e("div",{ref:s,className:o,children:n})})});Re.displayName="NavbarCollapse";const sn=Re,rn={label:"Toggle navigation"},ie=t.exports.forwardRef(({bsPrefix:n,className:o,children:r,label:s,as:c="button",onClick:p,...u},l)=>{n=E(n,"navbar-toggler");const{onToggle:d,expanded:f}=t.exports.useContext(F)||{},v=Ee(m=>{p&&p(m),d&&d()});return c==="button"&&(u.type="button"),e(c,{...u,ref:l,onClick:v,"aria-label":s,className:M(o,n,!f&&"collapsed"),children:r||e("span",{className:`${n}-icon`})})});ie.displayName="NavbarToggle";ie.defaultProps=rn;const cn=ie;var oe=new WeakMap,Ae=function(o,r){if(!(!o||!r)){var s=oe.get(r)||new Map;oe.set(r,s);var c=s.get(o);return c||(c=r.matchMedia(o),c.refCount=0,s.set(c.media,c)),c}};function ln(n,o){o===void 0&&(o=typeof window>"u"?void 0:window);var r=Ae(n,o),s=t.exports.useState(function(){return r?r.matches:!1}),c=s[0],p=s[1];return We(function(){var u=Ae(n,o);if(!u)return p(!1);var l=oe.get(o),d=function(){p(u.matches)};return u.refCount++,u.addListener(d),d(),function(){u.removeListener(d),u.refCount--,u.refCount<=0&&(l==null||l.delete(u.media)),u=void 0}},[n]),c}function dn(n){var o=Object.keys(n);function r(l,d){return l===d?d:l?l+" and "+d:d}function s(l){return o[Math.min(o.indexOf(l)+1,o.length-1)]}function c(l){var d=s(l),f=n[d];return typeof f=="number"?f=f-.2+"px":f="calc("+f+" - 0.2px)","(max-width: "+f+")"}function p(l){var d=n[l];return typeof d=="number"&&(d=d+"px"),"(min-width: "+d+")"}function u(l,d,f){var v;if(typeof l=="object")v=l,f=d,d=!0;else{var m;d=d||!0,v=(m={},m[l]=d,m)}var _=t.exports.useMemo(function(){return Object.entries(v).reduce(function(N,A){var g=A[0],C=A[1];return(C==="up"||C===!0)&&(N=r(N,p(g))),(C==="down"||C===!0)&&(N=r(N,c(g))),N},"")},[JSON.stringify(v)]);return ln(_,f)}return u}var un=dn({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const mn=se("offcanvas-body"),pn={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},fn={[te]:"show",[Me]:"show"},ce=t.exports.forwardRef(({bsPrefix:n,className:o,children:r,...s},c)=>(n=E(n,"offcanvas"),e(be,{ref:c,addEndListener:we,...s,childRef:r.ref,children:(p,u)=>t.exports.cloneElement(r,{...u,className:M(o,r.props.className,(p===te||p===ye)&&`${n}-toggling`,fn[p])})})));ce.defaultProps=pn;ce.displayName="OffcanvasToggling";const hn={closeLabel:"Close",closeButton:!1},le=t.exports.forwardRef(({bsPrefix:n,className:o,...r},s)=>(n=E(n,"offcanvas-header"),e(Ye,{ref:s,...r,className:M(o,n)})));le.displayName="OffcanvasHeader";le.defaultProps=hn;const vn=Pe("h5"),gn=se("offcanvas-title",{Component:vn}),_n={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function Nn(n){return e(ce,{...n})}function xn(n){return e(He,{...n})}const de=t.exports.forwardRef(({bsPrefix:n,className:o,children:r,"aria-labelledby":s,placement:c,responsive:p,show:u,backdrop:l,keyboard:d,scroll:f,onEscapeKeyDown:v,onShow:m,onHide:_,container:N,autoFocus:A,enforceFocus:g,restoreFocus:C,restoreFocusOptions:h,onEntered:y,onExit:L,onExiting:Q,onEnter:D,onEntering:z,onExited:V,backdropClassName:U,manager:H,renderStaticNode:G,...B},S)=>{const O=t.exports.useRef();n=E(n,"offcanvas");const{onToggle:R}=t.exports.useContext(F)||{},[Y,T]=t.exports.useState(!1),P=un(p||"xs","up");t.exports.useEffect(()=>{T(p?u&&!P:u)},[u,p,P]);const k=Ee(()=>{R==null||R(),_==null||_()}),Z=t.exports.useMemo(()=>({onHide:k}),[k]);function q(){return H||(f?(O.current||(O.current=new Ke({handleContainerOverflow:!1})),O.current):Qe())}const J=(w,...I)=>{w&&(w.style.visibility="visible"),D==null||D(w,...I)},W=(w,...I)=>{w&&(w.style.visibility=""),V==null||V(...I)},me=t.exports.useCallback(w=>e("div",{...w,className:M(`${n}-backdrop`,U)}),[U,n]),X=w=>e("div",{...w,...B,className:M(o,p?`${n}-${p}`:n,`${n}-${c}`),"aria-labelledby":s,children:r});return a(Ce,{children:[!Y&&(p||G)&&X({}),e(qe.Provider,{value:Z,children:e(Xe,{show:Y,ref:S,backdrop:l,container:N,keyboard:d,autoFocus:A,enforceFocus:g&&!f,restoreFocus:C,restoreFocusOptions:h,onEscapeKeyDown:v,onShow:m,onHide:k,onEnter:J,onEntering:z,onEntered:y,onExit:L,onExiting:Q,onExited:W,manager:q(),transition:Nn,backdropTransition:xn,renderBackdrop:me,renderDialog:X})})]})});de.displayName="Offcanvas";de.defaultProps=_n;const An=Object.assign(de,{Body:mn,Header:le,Title:gn}),Te=t.exports.forwardRef((n,o)=>{const r=t.exports.useContext(F);return e(An,{ref:o,show:!!(r!=null&&r.expanded),...n,renderStaticNode:!0})});Te.displayName="NavbarOffcanvas";const Cn=Te,bn=se("navbar-text",{Component:"span"}),wn={expand:!0,variant:"light",collapseOnSelect:!1},ue=t.exports.forwardRef((n,o)=>{const{bsPrefix:r,expand:s,variant:c,bg:p,fixed:u,sticky:l,className:d,as:f="nav",expanded:v,onToggle:m,onSelect:_,collapseOnSelect:N,...A}=ze(n,{expanded:"onToggle"}),g=E(r,"navbar"),C=t.exports.useCallback((...L)=>{_==null||_(...L),N&&v&&(m==null||m(!1))},[_,N,v,m]);A.role===void 0&&f!=="nav"&&(A.role="navigation");let h=`${g}-expand`;typeof s=="string"&&(h=`${h}-${s}`);const y=t.exports.useMemo(()=>({onToggle:()=>m==null?void 0:m(!v),bsPrefix:g,expanded:!!v,expand:s}),[g,v,s,m]);return e(F.Provider,{value:y,children:e(Ge.Provider,{value:C,children:e(f,{ref:o,...A,className:M(d,g,s&&h,c&&`${g}-${c}`,p&&`bg-${p}`,l&&`sticky-${l}`,u&&`fixed-${u}`)})})})});ue.defaultProps=wn;ue.displayName="Navbar";const Tn=Object.assign(ue,{Brand:nn,Collapse:sn,Offcanvas:Cn,Text:bn,Toggle:cn});const yn=({showLS:n,handleCloseLS:o,props:r})=>{const{data:s,setData:c,post:p,processing:u}=De({email:"",password:"",remember:""}),[l,d]=t.exports.useState(!0),[f,v]=t.exports.useState("form-input-section__container-input"),[m,_]=t.exports.useState(!0),[N,A]=t.exports.useState(""),[g,C]=t.exports.useState("contenido__validacion-input"),[h,y]=t.exports.useState(!1),[L,Q]=t.exports.useState(""),[D,z]=t.exports.useState(""),[V,U]=t.exports.useState(""),[H,G]=t.exports.useState("");let B=t.exports.useRef(),S=t.exports.useRef();const[O,R]=t.exports.useState(!1),Y=()=>R(!0),T=()=>R(!1),[P,k]=t.exports.useState(!1),Z=()=>k(!0),q=()=>k(!1),J=()=>{k(!1),R(!0),ge=null},[W,me]=t.exports.useState(4),[X,w]=t.exports.useState(59),[I,pe]=t.exports.useState(4),[K,ee]=t.exports.useState(59),[Ie,fe]=t.exports.useState(""),[Le,he]=t.exports.useState(!1),Oe=()=>{var i=L+D+V+H;fetch("/code-validate/"+s.email+"/"+i).then(x=>x.json()).then(x=>{if(x!="Fallo"){_(!0);const $=location.protocol+"//"+location.host+"/recuperar-contrasena?token="+x+"&email="+s.email;window.location.href=$}else y(!0),_(!1),A("error"),C("contenido__validacion-input contenido__validacion-input-error"),document.getElementsByName("input1")[0].value="",document.getElementsByName("input2")[0].value="",document.getElementsByName("input3")[0].value="",document.getElementsByName("input4")[0].value=""}).catch(x=>{console.error("Error:",x)})},ve=()=>{fetch("/user-validate/"+s.email).then(i=>i.json()).then(i=>{i=="Success"?(T(),Z(),he(!1),ge()):(_(!1),A("error"))}).catch(i=>{console.error("Error:",i)})},$e=i=>{i.preventDefault(),p(route("login"),{onError:()=>{v("form-input-section__container-input form-input-section__container-inputError"),d(!1)}})},je=i=>{B.current.className=="form-input-section__container-span icon-show"?(B.current.className="form-input-section__container-span icon-hide",S.current.type="text",S.current.placeholder="Ingresa tu contraseña"):(B.current.className="form-input-section__container-span icon-show",S.current.type="password",S.current.placeholder="Contraseña1234")},ne=i=>{c(i.target.name,i.target.type==="checkbox"?i.target.checked:i.target.value)};var ge=()=>{var i=X,x=W;let $=setInterval(()=>{i-=1,ee(i),pe(x),i>0&&ee(i),i===0&&(x===0?(clearInterval($),he(!0)):(i=59,x-=1,pe(x),ee(i),x<=1?fe("c-red"):fe("")))},1e3)};const ae=i=>{var x=document.getElementById("input2"),$=document.getElementById("input3"),Fe=document.getElementById("input4");if(i.target.value!="")switch(i.target.name){case"input1":x.focus();break;case"input2":$.focus();break;case"input3":Fe.focus();break}};return a(Ce,{children:[a(b,{show:n,onHide:o,id:"loginSesionModal",className:"modal-dialog-centered",children:[a(b.Header,{id:"loginSesionModalHeader",children:[e("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap",rel:"stylesheet"}),e("div",{className:"botonera",children:e("button",{className:"botonera__cerrar",onClick:o,children:e("span",{className:"botonera__cerrar-icon icon-close"})})})]}),e(b.Body,{id:"loginSesionModalBody",children:a("div",{className:"login",children:[e("div",{className:"login__welcome",children:a("div",{className:"login__welcome-content",children:[a("p",{className:"login__welcome-content-titulo",children:[e("span",{className:"login__welcome-content-titulo login__welcome-content-titulo",children:"¡Hola!"}),e("span",{className:"login__welcome-content-titulo login__welcome-content-titulo--modifier",children:"Bienvenido"})]}),a("p",{className:"login__welcome-content-texto",children:[" ","¿Aún no tienes cuenta?"," ",a("a",{className:"login__infoLLink",href:route("register"),onClick:()=>console.log("click"),children:[" ","Regístrate gratis"," "]})]})]})}),e("div",{className:"login__errors",children:a("form",{onSubmit:$e,children:[!l&&a("div",{className:"login__errors-div",children:[a("p",{className:"login__errors-div-title-p",children:[e("strong",{children:"Datos de ingreso"}),e("span",{className:"login__errors-div-title-p-span",children:e("strong",{children:" incorrectos"})})]}),a("p",{className:"login__errors-div-title-p login__errors-div-title-p--modifier",children:[" ","Dirección de correo electrónico o contraseña incorrectos. Si no tienes una cuenta, regístrate gratis."," "]}),e("div",{children:e("hr",{className:"widthDivider"})})]}),a("div",{className:"form-input-section blockEmail",children:[a("p",{className:"form-input-section__title",children:[e("span",{className:"icon-mail form-input-section__title-span"}),e("strong",{children:"Correo electrónico:"})]}),a("div",{className:"form-input-section__container",children:[e(xe,{id:"email",type:"email",name:"email",value:s.email,className:f,autoComplete:"username",isFocused:!0,placeholder:"Ingresa tu correo electrónico",handleChange:ne}),!l&&e("span",{className:"form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"})]})]}),a("div",{className:"form-input-section blockPass",children:[a("p",{className:"form-input-section__title",children:[e("span",{className:"icon-lock form-input-section__title-span"}),e("strong",{children:"Contraseña:"})]}),a("div",{className:"form-input-section__container",children:[e("input",{id:"password",type:"password",name:"password",ref:S,placeholder:"Ingresa tu contraseña",value:s.password,className:f,autoComplete:"current-password",onChange:ne}),l?e("span",{className:"form-input-section__container-span icon-show",ref:B,onClick:je}):e("span",{className:"form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"})]})]}),a("div",{className:"login__season",children:[e("div",{children:a("label",{className:"blockCheck",children:[a("span",{style:{fontWeight:"normal"},children:[" ","No cerrar sesión"," "]}),e("input",{type:"checkbox",id:"checkbox",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"}),e("div",{className:"b-input"})]})}),a("a",{className:"login__infoLLink login__infoLLink--modifier",onClick:Y,children:[" ","¿Olvidaste tu contraseña?"," "]})]}),a("div",{className:"blockBtn",children:[a("button",{type:"submit",className:"blockBtn__content",processing:u,children:[" ","Iniciar sesión"," "]}),a("a",{className:"d-none login__infoLLink--mobile login__infoLLink--modifier",children:[" ","¿Olvidaste tu contraseña?"," "]})]}),e("input",{type:"hidden",name:"_token",value:"wSHAkDvlYF9Y2pLYuYrummdIKaqHwbHqBxrCSL9o"})]})})]})}),e(b.Footer,{})]}),a(b,{show:O,onHide:T,id:"modal-olvidaste___BV_modal_content_",className:"modal-dialog-centered",children:[e(b.Header,{children:a("div",{className:"botonera",children:[e("button",{className:"botonera__regresar",onClick:T,children:e("span",{className:"botonera__regresar-icon icon-back"})}),e("button",{className:"botonera__cerrar",onClick:T,children:e("span",{className:"botonera__cerrar-icon icon-close"})})]})}),a(b.Body,{id:"modal-olvidaste___BV_modal_body_",children:[a("div",{className:"titulo",children:[e("span",{className:"titulo__icono icon-lock"}),a("span",{className:"titulo__texto",children:[" ","Recupera tu"," ",e("span",{className:"titulo__texto--modifier",children:"contraseña"})]})]}),a("div",{className:"informacion",children:[m?e("div",{className:"informacion__texto",children:a("p",{className:"informacion__texto-span",children:[" ","Ingresa la dirección de correo electrónico asociado a tu cuenta. Te enviaremos un código de 4 dígitos para recuperar tu contraseña."]})}):e("div",{className:"informacion__texto mensaje__error",children:a("p",{className:"informacion__texto-span",children:[" ","El correo electrónico que has ingresado no se encuentra registrado o se ha escrito de forma incorrecta. Si aún no tienes cuenta puedes registrarte",a("a",{className:"informacion__texto-span--modifier",href:route("register"),children:[" ","30 días gratis aqui."]})]})}),e("div",{className:"informacion__correo",children:e(xe,{type:"email",name:"email",value:s.email,className:`informacion__correo-input ${N}`,autoComplete:"username",isFocused:!0,placeholder:"Ingresa tu correo electrónico",handleChange:ne})}),e("div",{className:"informacion__boton",children:a("button",{className:"informacion__boton-button",onClick:ve,children:[" ","Recuperar"," "]})})]})]}),e(b.Footer,{id:"modal-olvidaste",children:a("div",{className:"contacto",children:[e("div",{className:"contacto__texto",children:e("p",{className:"contacto__texto-informacion",children:"Si necesitas ayuda ponte en contacto con nuestro equipo de soporte técnico."})}),e("div",{className:"contacto__boton",children:e("div",{className:"contactenos",children:a("a",{className:"contactenos__button",href:route("contacto"),children:[e("span",{className:"contactenos__button-icon icon-contacto"}),e("span",{className:"contactenos__button-text",children:"Contáctanos"})]})})})]})})]}),a(b,{show:P,onHide:q,id:"modal-correo-recuperacion",className:"modal-dialog-centered",children:[e(b.Header,{children:a("div",{className:"botonera",children:[e("button",{className:"botonera__regresar",onClick:J,children:e("span",{className:"botonera__regresar-icon icon-back"})}),e("button",{className:"botonera__cerrar",onClick:q,children:e("span",{className:"botonera__cerrar-icon icon-close"})})]})}),e(b.Body,{id:"modal-correo-recuperacion___BV_modal_body_",children:a("div",{id:"modal-correo-recuperacion___BV_modal_body_",children:[e("div",{className:"titulo",children:e("div",{className:"titulo__inicio",children:a("span",{className:"titulo__inicio-texto",children:["Te hemos enviado un"," ",e("span",{className:"titulo__inicio-texto--modifier",children:"código de confirmación"})]})})}),a("div",{className:"informacion",children:[e("div",{className:"informacion__correo",children:a("span",{className:"informacion__correo-span",children:[e("div",{className:"informacion__correo-span--modifier",children:"L"})," ",s.email]})}),Le?a("div",{children:[e("div",{className:"informacion__advertencia",children:a("span",{className:"informacion__advertencia-span",children:["El código que te hemos enviado a tu correo ha"," ",e("span",{className:"informacion__advertencia-span--modifier",children:"expirado."})]})}),e("div",{className:"informacion__reenviar",children:e("button",{className:"informacion__reenviar-boton",onClick:ve,children:"Reenviar de nuevo"})})]}):a("div",{children:[e("div",{className:"informacion__texto-codigo",children:a("span",{className:"informacion__texto-span",children:["Ingresa aquí el código que te hemos enviado a tu correo. Tu código expira en",I>0||K>=0?a("span",{className:`informacion__texto-span--modifier ${Ie}`,children:[" ",`( 0${I}`,":",K<10?`0${K} )`:K+" )"]}):""]})}),e("div",{className:"informacion__codigo",children:a("div",{className:"contenido",children:[a("div",{className:"contenido__validacion",children:[e("input",{id:"input1",name:"input1",maxLength:"1",required:"required",type:"text",className:g,onChange:i=>Q(i.target.value),onKeyUp:i=>ae(i)}),e("input",{id:"input2",name:"input2",maxLength:"1",required:"required",type:"text",className:g,onChange:i=>z(i.target.value),onKeyUp:i=>ae(i)}),e("input",{id:"input3",name:"input3",maxLength:"1",required:"required",type:"text",className:g,onChange:i=>U(i.target.value),onKeyUp:i=>ae(i)}),e("input",{id:"input4",name:"input4",maxLength:"1",required:"required",type:"text",className:g,onChange:i=>G(i.target.value)})]}),h&&e("div",{className:"contenido__mensaje mensaje_espacio",children:a("span",{className:"contenido__mensaje-texto",children:["El código es"," ",a("span",{className:"contenido__mensaje-texto--modifier",children:[" ","incorrecto,"," "]})," ","ingrésalo de nuevo."," "]})})]})}),e("div",{className:"informacion__verificar",children:e("button",{className:"informacion__verificar-button",onClick:Oe,children:"Verificar"})})]})]})]})}),e(b.Footer,{})]})]})},In=yn;export{Rn as C,In as M,Tn as N,Bn as a,Be as b};
