import{j as o,a as e,r as t,R as Ne,F as Ae,u as De}from"./app-80521d15.js";import{u as M,c as S,a as te}from"./createWithBsPrefix-6cf2c458.js";import{c as F,A as Ue,d as He,a as Ye,B as Pe,b as qe,g as Xe,S as Ke,M as A}from"./Modal-617fec82.js";import{u as Qe}from"./hasClass-d9ff74cb.js";import{T as be,h as ye,s as xe,i as ze,a as Se,E as se,j as Me,k as Ge,u as ke,F as Ze}from"./font-unicolor-13f2085d.js";import{u as Je}from"./useIsomorphicEffect-3c084c3d.js";import{T as Ce}from"./TextInput-da31521e.js";function On({className:n}){return o("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"71px",height:"27px",viewBox:"0 0 71 27",enableBackground:"new 0 0 71 27",xmlSpace:"preserve",children:["  ",e("image",{id:"image0",width:"71",height:"27",x:"0",y:"0",href:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAbCAMAAAAZImKhAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\r
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
MS0wNFQxNToyNDozNCswMDowMLsY9iAAAAAASUVORK5CYII=`})]})}const We={fluid:!1},re=t.exports.forwardRef(({bsPrefix:n,fluid:a,as:s="div",className:c,...i},p)=>{const d=M(n,"container"),u=typeof a=="string"?`-${a}`:"-fluid";return e(s,{ref:p,...i,className:S(c,a?`${d}${u}`:d)})});re.displayName="Container";re.defaultProps=We;const $n=re,Ee=t.exports.forwardRef(({bsPrefix:n,className:a,as:s,...c},i)=>{n=M(n,"navbar-brand");const p=s||(c.href?"a":"span");return e(p,{...c,ref:i,className:S(a,n)})});Ee.displayName="NavbarBrand";const en=Ee;function j(...n){return n.filter(a=>a!=null).reduce((a,s)=>{if(typeof s!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return a===null?s:function(...i){a.apply(this,i),s.apply(this,i)}},null)}const nn={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Be(n,a){const s=`offset${n[0].toUpperCase()}${n.slice(1)}`,c=a[s],i=nn[n];return c+parseInt(xe(a,i[0]),10)+parseInt(xe(a,i[1]),10)}const an={[ze]:"collapse",[Se]:"collapsing",[se]:"collapsing",[Me]:"collapse show"},on={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Be},Te=Ne.forwardRef(({onEnter:n,onEntering:a,onEntered:s,onExit:c,onExiting:i,className:p,children:d,dimension:u="height",getDimensionValue:l=Be,...f},v)=>{const m=typeof u=="function"?u():u,N=t.exports.useMemo(()=>j(h=>{h.style[m]="0"},n),[m,n]),x=t.exports.useMemo(()=>j(h=>{const y=`scroll${m[0].toUpperCase()}${m.slice(1)}`;h.style[m]=`${h[y]}px`},a),[m,a]),C=t.exports.useMemo(()=>j(h=>{h.style[m]=null},s),[m,s]),_=t.exports.useMemo(()=>j(h=>{h.style[m]=`${l(m,h)}px`,Ge(h)},c),[c,l,m]),w=t.exports.useMemo(()=>j(h=>{h.style[m]=null},i),[m,i]);return e(be,{ref:v,addEndListener:ye,...f,"aria-expanded":f.role?f.in:null,onEnter:N,onEntering:x,onEntered:C,onExit:_,onExiting:w,childRef:d.ref,children:(h,y)=>Ne.cloneElement(d,{...y,className:S(p,d.props.className,an[h],m==="width"&&"collapse-horizontal")})})});Te.defaultProps=on;const tn=Te,Re=t.exports.forwardRef(({children:n,bsPrefix:a,...s},c)=>{a=M(a,"navbar-collapse");const i=t.exports.useContext(F);return e(tn,{in:!!(i&&i.expanded),...s,children:e("div",{ref:c,className:a,children:n})})});Re.displayName="NavbarCollapse";const sn=Re,rn={label:"Toggle navigation"},ie=t.exports.forwardRef(({bsPrefix:n,className:a,children:s,label:c,as:i="button",onClick:p,...d},u)=>{n=M(n,"navbar-toggler");const{onToggle:l,expanded:f}=t.exports.useContext(F)||{},v=ke(m=>{p&&p(m),l&&l()});return i==="button"&&(d.type="button"),e(i,{...d,ref:u,onClick:v,"aria-label":c,className:S(a,n,!f&&"collapsed"),children:s||e("span",{className:`${n}-icon`})})});ie.displayName="NavbarToggle";ie.defaultProps=rn;const cn=ie;var oe=new WeakMap,we=function(a,s){if(!(!a||!s)){var c=oe.get(s)||new Map;oe.set(s,c);var i=c.get(a);return i||(i=s.matchMedia(a),i.refCount=0,c.set(i.media,i)),i}};function ln(n,a){a===void 0&&(a=typeof window>"u"?void 0:window);var s=we(n,a),c=t.exports.useState(function(){return s?s.matches:!1}),i=c[0],p=c[1];return Je(function(){var d=we(n,a);if(!d)return p(!1);var u=oe.get(a),l=function(){p(d.matches)};return d.refCount++,d.addListener(l),l(),function(){d.removeListener(l),d.refCount--,d.refCount<=0&&(u==null||u.delete(d.media)),d=void 0}},[n]),i}function dn(n){var a=Object.keys(n);function s(u,l){return u===l?l:u?u+" and "+l:l}function c(u){return a[Math.min(a.indexOf(u)+1,a.length-1)]}function i(u){var l=c(u),f=n[l];return typeof f=="number"?f=f-.2+"px":f="calc("+f+" - 0.2px)","(max-width: "+f+")"}function p(u){var l=n[u];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function d(u,l,f){var v;if(typeof u=="object")v=u,f=l,l=!0;else{var m;l=l||!0,v=(m={},m[u]=l,m)}var N=t.exports.useMemo(function(){return Object.entries(v).reduce(function(x,C){var _=C[0],w=C[1];return(w==="up"||w===!0)&&(x=s(x,p(_))),(w==="down"||w===!0)&&(x=s(x,i(_))),x},"")},[JSON.stringify(v)]);return ln(N,f)}return d}var un=dn({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const mn=te("offcanvas-body"),pn={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},fn={[se]:"show",[Me]:"show"},ce=t.exports.forwardRef(({bsPrefix:n,className:a,children:s,...c},i)=>(n=M(n,"offcanvas"),e(be,{ref:i,addEndListener:ye,...c,childRef:s.ref,children:(p,d)=>t.exports.cloneElement(s,{...d,className:S(a,s.props.className,(p===se||p===Se)&&`${n}-toggling`,fn[p])})})));ce.defaultProps=pn;ce.displayName="OffcanvasToggling";const hn=ce,vn={closeLabel:"Close",closeButton:!1},le=t.exports.forwardRef(({bsPrefix:n,className:a,...s},c)=>(n=M(n,"offcanvas-header"),e(Ue,{ref:c,...s,className:S(a,n)})));le.displayName="OffcanvasHeader";le.defaultProps=vn;const _n=le,gn=He("h5"),Nn=te("offcanvas-title",{Component:gn}),xn={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function Cn(n){return e(hn,{...n})}function wn(n){return e(Ze,{...n})}const de=t.exports.forwardRef(({bsPrefix:n,className:a,children:s,"aria-labelledby":c,placement:i,responsive:p,show:d,backdrop:u,keyboard:l,scroll:f,onEscapeKeyDown:v,onShow:m,onHide:N,container:x,autoFocus:C,enforceFocus:_,restoreFocus:w,restoreFocusOptions:h,onEntered:y,onExit:I,onExiting:Q,onEnter:V,onEntering:z,onExited:D,backdropClassName:U,manager:H,renderStaticNode:G,...B},k)=>{const O=t.exports.useRef();n=M(n,"offcanvas");const{onToggle:T}=t.exports.useContext(F)||{},[Y,R]=t.exports.useState(!1),P=un(p||"xs","up");t.exports.useEffect(()=>{R(p?d&&!P:d)},[d,p,P]);const E=ke(()=>{T==null||T(),N==null||N()}),Z=t.exports.useMemo(()=>({onHide:E}),[E]);function q(){return H||(f?(O.current||(O.current=new qe({handleContainerOverflow:!1})),O.current):Xe())}const J=(b,...L)=>{b&&(b.style.visibility="visible"),V==null||V(b,...L)},W=(b,...L)=>{b&&(b.style.visibility=""),D==null||D(...L)},me=t.exports.useCallback(b=>e("div",{...b,className:S(`${n}-backdrop`,U)}),[U,n]),X=b=>e("div",{...b,...B,className:S(a,p?`${n}-${p}`:n,`${n}-${i}`),"aria-labelledby":c,children:s});return o(Ae,{children:[!Y&&(p||G)&&X({}),e(Ye.Provider,{value:Z,children:e(Pe,{show:Y,ref:k,backdrop:u,container:x,keyboard:l,autoFocus:C,enforceFocus:_&&!f,restoreFocus:w,restoreFocusOptions:h,onEscapeKeyDown:v,onShow:m,onHide:E,onEnter:J,onEntering:z,onEntered:y,onExit:I,onExiting:Q,onExited:W,manager:q(),transition:Cn,backdropTransition:wn,renderBackdrop:me,renderDialog:X})})]})});de.displayName="Offcanvas";de.defaultProps=xn;const An=Object.assign(de,{Body:mn,Header:_n,Title:Nn}),Le=t.exports.forwardRef((n,a)=>{const s=t.exports.useContext(F);return e(An,{ref:a,show:!!(s!=null&&s.expanded),...n,renderStaticNode:!0})});Le.displayName="NavbarOffcanvas";const bn=Le,yn=te("navbar-text",{Component:"span"}),Sn={expand:!0,variant:"light",collapseOnSelect:!1},ue=t.exports.forwardRef((n,a)=>{const{bsPrefix:s,expand:c,variant:i,bg:p,fixed:d,sticky:u,className:l,as:f="nav",expanded:v,onToggle:m,onSelect:N,collapseOnSelect:x,...C}=Qe(n,{expanded:"onToggle"}),_=M(s,"navbar"),w=t.exports.useCallback((...I)=>{N==null||N(...I),x&&v&&(m==null||m(!1))},[N,x,v,m]);C.role===void 0&&f!=="nav"&&(C.role="navigation");let h=`${_}-expand`;typeof c=="string"&&(h=`${h}-${c}`);const y=t.exports.useMemo(()=>({onToggle:()=>m==null?void 0:m(!v),bsPrefix:_,expanded:!!v,expand:c}),[_,v,c,m]);return e(F.Provider,{value:y,children:e(Ke.Provider,{value:w,children:e(f,{ref:a,...C,className:S(l,_,c&&h,i&&`${_}-${i}`,p&&`bg-${p}`,u&&`sticky-${u}`,d&&`fixed-${d}`)})})})});ue.defaultProps=Sn;ue.displayName="Navbar";const jn=Object.assign(ue,{Brand:en,Collapse:sn,Offcanvas:bn,Text:yn,Toggle:cn});const Mn=n=>{const{data:a,setData:s,post:c,processing:i}=De({email:"",password:"",remember:"",url_modal:n.url}),[p,d]=t.exports.useState(n.showLS),[u,l]=t.exports.useState(!0),[f,v]=t.exports.useState("form-input-section__container-input"),[m,N]=t.exports.useState(!0),[x,C]=t.exports.useState(""),[_,w]=t.exports.useState("contenido__validacion-input"),[h,y]=t.exports.useState(!1),[I,Q]=t.exports.useState(""),[V,z]=t.exports.useState(""),[D,U]=t.exports.useState(""),[H,G]=t.exports.useState("");let B=t.exports.useRef(),k=t.exports.useRef();const[O,T]=t.exports.useState(!1),Y=()=>T(!0),R=()=>T(!1),[P,E]=t.exports.useState(!1),Z=()=>E(!0),q=()=>E(!1),J=()=>{E(!1),T(!0),_e=null},[W,me]=t.exports.useState(4),[X,b]=t.exports.useState(59),[L,pe]=t.exports.useState(4),[K,ee]=t.exports.useState(59),[Ie,fe]=t.exports.useState(""),[Oe,he]=t.exports.useState(!1),$e=()=>{var r=I+V+D+H;fetch("/code-validate/"+a.email+"/"+r).then(g=>g.json()).then(g=>{if(console.log(g),g!="Failed"){N(!0);const $=location.protocol+"//"+location.host+"/recuperar-contrasena?token="+g+"&email="+g.email;window.location.href=$}else y(!0),N(!1),C("error"),w("contenido__validacion-input contenido__validacion-input-error"),document.getElementsByName("input1")[0].value="",document.getElementsByName("input2")[0].value="",document.getElementsByName("input3")[0].value="",document.getElementsByName("input4")[0].value=""}).catch(g=>{console.error("Error:",g)})},ve=()=>{fetch("/user-validate/"+a.email).then(r=>r.json()).then(r=>{r=="Success"?(R(),Z(),he(!1),_e()):(N(!1),C("error"))}).catch(r=>{console.error("Error:",r)})},je=r=>{r.preventDefault(),c(route("login"),{onError:()=>{v("form-input-section__container-input form-input-section__container-inputError"),l(!1)}})},Fe=r=>{B.current.className=="form-input-section__container-span icon-show"?(B.current.className="form-input-section__container-span icon-hide",k.current.type="text",k.current.placeholder="Ingresa tu contraseña"):(B.current.className="form-input-section__container-span icon-show",k.current.type="password",k.current.placeholder="Contraseña1234")},ne=r=>{s(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)};var _e=()=>{var r=X,g=W;let $=setInterval(()=>{r-=1,ee(r),pe(g),r>0&&ee(r),r===0&&(g===0?(clearInterval($),he(!0)):(r=59,g-=1,pe(g),ee(r),g<=1?fe("c-red"):fe("")))},1e3)};const ae=r=>{var g=document.getElementById("input2"),$=document.getElementById("input3"),Ve=document.getElementById("input4");if(r.target.value!="")switch(r.target.name){case"input1":g.focus();break;case"input2":$.focus();break;case"input3":Ve.focus();break}};t.exports.useEffect(()=>{d(n.showLS),s({email:a.email,password:a.password,remember:a.remember,url_modal:n.url})},[n.showLS]);const ge=()=>{d(!1),s({email:"",password:""}),v("form-input-section__container-input"),l(!0),n.handleCloseLS(!1)};return o(Ae,{children:[o(A,{show:p,onHide:ge,id:"loginSesionModal",className:"modal-dialog-centered",children:[o(A.Header,{id:"loginSesionModalHeader",children:[e("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap",rel:"stylesheet"}),e("div",{className:"botonera",children:e("button",{className:"botonera__cerrar",onClick:ge,children:e("span",{className:"botonera__cerrar-icon icon-close"})})})]}),e(A.Body,{id:"loginSesionModalBody",children:o("div",{className:"login",children:[e("div",{className:"login__welcome",children:o("div",{className:"login__welcome-content",children:[o("p",{className:"login__welcome-content-titulo",children:[e("span",{className:"login__welcome-content-titulo login__welcome-content-titulo",children:"¡Hola!"}),e("span",{className:"login__welcome-content-titulo login__welcome-content-titulo--modifier",children:"Bienvenido"})]}),o("p",{className:"login__welcome-content-texto",children:[" ","¿Aún no tienes cuenta?"," ",o("a",{className:"login__infoLLink",href:route("register"),onClick:()=>console.log("click"),children:[" ","Regístrate gratis"," "]})]})]})}),e("div",{className:"login__errors",children:o("form",{onSubmit:je,children:[!u&&o("div",{className:"login__errors-div",children:[o("p",{className:"login__errors-div-title-p",children:[e("strong",{children:"Datos de ingreso"}),e("span",{className:"login__errors-div-title-p-span",children:e("strong",{children:" incorrectos"})})]}),o("p",{className:"login__errors-div-title-p login__errors-div-title-p--modifier",children:[" ","Dirección de correo electrónico o contraseña incorrectos. Si no tienes una cuenta, regístrate gratis."," "]}),e("div",{children:e("hr",{className:"widthDivider"})})]}),o("div",{className:"form-input-section blockEmail",children:[o("p",{className:"form-input-section__title",children:[e("span",{className:"icon-mail form-input-section__title-span"}),e("strong",{children:"Correo electrónico:"})]}),o("div",{className:"form-input-section__container",children:[e(Ce,{id:"email",type:"email",name:"email",value:a.email,className:f,autoComplete:"username",isFocused:!0,placeholder:"Ingresa tu correo electrónico",handleChange:ne}),!u&&e("span",{className:"form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"})]})]}),o("div",{className:"form-input-section blockPass",children:[o("p",{className:"form-input-section__title",children:[e("span",{className:"icon-lock form-input-section__title-span"}),e("strong",{children:"Contraseña:"})]}),o("div",{className:"form-input-section__container",children:[e("input",{id:"password",type:"password",name:"password",ref:k,placeholder:"Ingresa tu contraseña",value:a.password,className:f,autoComplete:"current-password",onChange:ne}),u?e("span",{className:"form-input-section__container-span icon-show",ref:B,onClick:Fe}):e("span",{className:"form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"})]})]}),o("div",{className:"login__season",children:[e("div",{children:o("label",{className:"blockCheck",children:[o("span",{style:{fontWeight:"normal"},children:[" ","No cerrar sesión"," "]}),e("input",{type:"checkbox",id:"checkbox",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"}),e("div",{className:"b-input"})]})}),o("a",{className:"login__infoLLink login__infoLLink--modifier",onClick:Y,children:[" ","¿Olvidaste tu contraseña?"," "]})]}),o("div",{className:"blockBtn",children:[o("button",{type:"submit",className:"blockBtn__content",processing:i,children:[" ","Iniciar sesión"," "]}),o("a",{className:"d-none login__infoLLink--mobile login__infoLLink--modifier",children:[" ","¿Olvidaste tu contraseña?"," "]})]}),e("input",{type:"hidden",name:"_token",value:"wSHAkDvlYF9Y2pLYuYrummdIKaqHwbHqBxrCSL9o"})]})})]})}),e(A.Footer,{})]}),o(A,{show:O,onHide:R,id:"modal-olvidaste___BV_modal_content_",className:"modal-dialog-centered",children:[e(A.Header,{children:o("div",{className:"botonera",children:[e("button",{className:"botonera__regresar",onClick:R,children:e("span",{className:"botonera__regresar-icon icon-back"})}),e("button",{className:"botonera__cerrar",onClick:R,children:e("span",{className:"botonera__cerrar-icon icon-close"})})]})}),o(A.Body,{id:"modal-olvidaste___BV_modal_body_",children:[o("div",{className:"titulo",children:[e("span",{className:"titulo__icono icon-lock"}),o("span",{className:"titulo__texto",children:[" ","Recupera tu"," ",e("span",{className:"titulo__texto--modifier",children:"contraseña"})]})]}),o("div",{className:"informacion",children:[m?e("div",{className:"informacion__texto",children:o("p",{className:"informacion__texto-span",children:[" ","Ingresa la dirección de correo electrónico asociado a tu cuenta. Te enviaremos un código de 4 dígitos para recuperar tu contraseña."]})}):e("div",{className:"informacion__texto mensaje__error",children:o("p",{className:"informacion__texto-span",children:[" ","El correo electrónico que has ingresado no se encuentra registrado o se ha escrito de forma incorrecta. Si aún no tienes cuenta puedes registrarte",o("a",{className:"informacion__texto-span--modifier",href:route("register"),children:[" ","30 días gratis aqui."]})]})}),e("div",{className:"informacion__correo",children:e(Ce,{type:"email",name:"email",value:a.email,className:`informacion__correo-input ${x}`,autoComplete:"username",isFocused:!0,placeholder:"Ingresa tu correo electrónico",handleChange:ne})}),e("div",{className:"informacion__boton",children:o("button",{className:"informacion__boton-button",onClick:ve,children:[" ","Recuperar"," "]})})]})]}),e(A.Footer,{id:"modal-olvidaste",children:o("div",{className:"contacto",children:[e("div",{className:"contacto__texto",children:e("p",{className:"contacto__texto-informacion",children:"Si necesitas ayuda ponte en contacto con nuestro equipo de soporte técnico."})}),e("div",{className:"contacto__boton",children:e("div",{className:"contactenos",children:o("a",{className:"contactenos__button",href:route("contacto"),children:[e("span",{className:"contactenos__button-icon icon-contacto"}),e("span",{className:"contactenos__button-text",children:"Contáctanos"})]})})})]})})]}),o(A,{show:P,onHide:q,id:"modal-correo-recuperacion",className:"modal-dialog-centered",children:[e(A.Header,{children:o("div",{className:"botonera",children:[e("button",{className:"botonera__regresar",onClick:J,children:e("span",{className:"botonera__regresar-icon icon-back"})}),e("button",{className:"botonera__cerrar",onClick:q,children:e("span",{className:"botonera__cerrar-icon icon-close"})})]})}),e(A.Body,{id:"modal-correo-recuperacion___BV_modal_body_",children:o("div",{id:"modal-correo-recuperacion___BV_modal_body_",children:[e("div",{className:"titulo",children:e("div",{className:"titulo__inicio",children:o("span",{className:"titulo__inicio-texto",children:["Te hemos enviado un"," ",e("span",{className:"titulo__inicio-texto--modifier",children:"código de confirmación"})]})})}),o("div",{className:"informacion",children:[e("div",{className:"informacion__correo",children:o("span",{className:"informacion__correo-span",children:[e("div",{className:"informacion__correo-span--modifier",children:"L"})," ",a.email]})}),Oe?o("div",{children:[e("div",{className:"informacion__advertencia",children:o("span",{className:"informacion__advertencia-span",children:["El código que te hemos enviado a tu correo ha"," ",e("span",{className:"informacion__advertencia-span--modifier",children:"expirado."})]})}),e("div",{className:"informacion__reenviar",children:e("a",{className:"informacion__reenviar-boton",onClick:ve,children:"Reenviar de nuevo"})})]}):o("div",{children:[e("div",{className:"informacion__texto-codigo",children:o("span",{className:"informacion__texto-span",children:["Ingresa aquí el código que te hemos enviado a tu correo. Tu código expira en",L>0||K>=0?o("span",{className:`informacion__texto-span--modifier ${Ie}`,children:[" ",`( 0${L}`,":",K<10?`0${K} )`:K+" )"]}):""]})}),e("div",{className:"informacion__codigo",children:o("div",{className:"contenido",children:[o("div",{className:"contenido__validacion",children:[e("input",{id:"input1",name:"input1",maxLength:"1",required:"required",type:"text",className:_,onChange:r=>Q(r.target.value),onKeyUp:r=>ae(r)}),e("input",{id:"input2",name:"input2",maxLength:"1",required:"required",type:"text",className:_,onChange:r=>z(r.target.value),onKeyUp:r=>ae(r)}),e("input",{id:"input3",name:"input3",maxLength:"1",required:"required",type:"text",className:_,onChange:r=>U(r.target.value),onKeyUp:r=>ae(r)}),e("input",{id:"input4",name:"input4",maxLength:"1",required:"required",type:"text",className:_,onChange:r=>G(r.target.value)})]}),h&&e("div",{className:"contenido__mensaje mensaje_espacio",children:o("span",{className:"contenido__mensaje-texto",children:["El código es"," ",o("span",{className:"contenido__mensaje-texto--modifier",children:[" ","incorrecto,"," "]})," ","ingrésalo de nuevo."," "]})})]})}),e("div",{className:"informacion__verificar",children:e("button",{className:"informacion__verificar-button",onClick:$e,children:"Verificar"})})]})]})]})}),e(A.Footer,{})]})]})},Fn=Mn;export{$n as C,Fn as M,jn as N,On as a,tn as b};
