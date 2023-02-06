import{r as u,a as e,u as j,j as a,F as q}from"./app-b14587bd.js";import"./font-unicolor-d61b920b.js";/* empty css                      *//* empty css              */import{T as P,a as $}from"./estilos-toast-e476fffb.js";import{c as b,u as S,f as R,g as B}from"./createWithBsPrefix-1a4dc0ef.js";import{P as V}from"./PasswordSecurity-5f02d82f.js";function D({as:p,bsPrefix:o,className:l,...t}){o=S(o,"col");const h=R(),n=B(),d=[],N=[];return h.forEach(f=>{const _=t[f];delete t[f];let r,m,s;typeof _=="object"&&_!=null?{span:r,offset:m,order:s}=_:r=_;const c=f!==n?`-${f}`:"";r&&d.push(r===!0?`${o}${c}`:`${o}${c}-${r}`),s!=null&&N.push(`order${c}-${s}`),m!=null&&N.push(`offset${c}-${m}`)}),[{...t,className:b(l,...d,...N)},{as:p,bsPrefix:o,spans:d}]}const v=u.exports.forwardRef((p,o)=>{const[{className:l,...t},{as:h="div",bsPrefix:n,spans:d}]=D(p);return e(h,{...t,ref:o,className:b(l,!d.length&&n)})});v.displayName="Col";const k=u.exports.forwardRef(({bsPrefix:p,className:o,as:l="div",...t},h)=>{const n=S(p,"row"),d=R(),N=B(),f=`${n}-cols`,_=[];return d.forEach(r=>{const m=t[r];delete t[r];let s;m!=null&&typeof m=="object"?{cols:s}=m:s=m;const c=r!==N?`-${r}`:"";s!=null&&_.push(`${f}${c}-${s}`)}),e(l,{ref:h,...t,className:b(o,n,..._)})});k.displayName="Row";const O=p=>{const[o,l]=u.exports.useState(!1),[t,h]=u.exports.useState("bottom-start"),{data:n,setData:d,post:N,get:f,processing:_,errors:r,reset:m}=j({email:p.email,token:p.token,password:"",password2:"",remember:""});let s=u.exports.useRef(),c=u.exports.useRef();const[w,x]=u.exports.useState(!1),[E,g]=u.exports.useState(!1),[I,C]=u.exports.useState(!0),y=i=>{i.target.value!=""?(x(!0),g(!0),i.target.value.length>5&&(g(!1),i.target.classList.remove("error-input"))):(x(!1),g(!0),i.target.classList.add("error-input")),d(i.target.name,i.target.type==="checkbox"?i.target.checked:i.target.value)},L=()=>{C(!0),s.current.classList.remove("error-input")},T=i=>{i.preventDefault(),n.password.length<6&&l(!0),n.password==n.password2?(s.current.classList.remove("error-input"),f(route("actualizarContrasena"),{onError:()=>{setInputClass("form-input-section__container-input form-input-section__container-inputError"),setValidForm(!1)}})):(C(!1),console.log(s.current),s.current.classList.add("error-input"))},F=i=>{c.current.className=="content__confirmar-div-icon icon-show"?(c.current.className="content__confirmar-div-icon icon-hide",s.current.type="text",s.current.placeholder="Ingresa tu contraseña"):(c.current.className="content__confirmar-div-icon icon-show",s.current.type="password",s.current.placeholder="Contraseña1234")};return a(q,{children:[e(P,{className:"p-3",position:t,children:e($,{onClose:()=>l(!1),show:o,delay:3e3,autohide:!0,children:e($.Body,{children:a(k,{className:"align-items-center",children:[e(v,{md:1,children:e("span",{className:"toast-border"})}),e(v,{md:2,children:e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})})}),e(v,{md:8,children:e("p",{children:"La contraseña debe tener mínimo 6 carácteres."})}),e(v,{md:1,className:"d-flex",children:e("button",{type:"button",className:"icon-close m-auto",onClick:()=>l(!1)})})]})})})}),e("div",{id:"recuperar-contrasena-view",children:a("section",{className:"recuperar-contrasena--section",children:[e("video",{autoPlay:"autoplay",muted:"muted",loop:"loop",src:"/public/video/contrasena.webm"}),a("div",{id:"contenido-video",className:"contenido row",children:[e("div",{className:"contenido__video col-md-6 col-12",children:e("h2",{className:"contenido__video-texto",children:"Recupera tu contraseña"})}),e("div",{className:"contenido__form col-md-6 col-12",children:a("div",{className:"content",children:[e("div",{className:"content__header d-none d-md-block",children:e("a",{href:"/",children:e("img",{src:"/public/images/logo-licitaciones.svg",alt:"Licitaciones.info",className:"content__header-img"})})}),a("div",{className:"content__body",children:[a("div",{className:"content__body-div",children:[e("span",{className:"content__div-icon icon-shield"}),e("hr",{className:"linea__divisoria"}),a("span",{className:"content__div-text",children:[" En licitaciones.info nos preocupamos por tu seguridad, recuerda que tu contraseña debe estar compuesta por: ",e("span",{className:"content__div-text--modifier",children:"mínimo de 6 caracteres."})]})]}),a("form",{onSubmit:T,className:"content__body-form",children:[a("div",{id:"input_password",className:"contenido",children:[a("div",{htmlFor:"",className:"contenido__password-titulo",children:[e("span",{className:"contenido__password-titulo-icon"}),e("span",{children:"Nueva contraseña:"})]}),e("div",{className:"content-inputs",children:e(V,{onHandleChange:y,errorIcon:"contenido__password-div-icon icon-alert error-icon",errorIconStatus:E})})]}),a("div",{className:`content__form ${w?"":"passwordDisabled"}`,children:[e("div",{className:"content__form-confirmar",children:a("div",{className:"content__confirmar",children:[e("label",{htmlFor:"",className:"content__confirmar-label",children:"Confirmar tu nueva contraseña:"}),a("div",{className:"content__confirmar-div",children:[e("input",{ref:s,disabled:!w,type:"password",placeholder:"Ingresa de nuevo tu contraseña",id:"passwordConfirmar",name:"password2",autoComplete:"off",className:"content__confirmar-div-input",value:n.password2,onChange:y,onClick:L}),e("span",{className:"content__confirmar-div-icon icon-show",ref:c,onClick:F})]})]})}),e("div",{className:"content__form-nivel"})]}),I?e("div",{className:"content__body-button",children:e("button",{type:"submit",disabled:!w,className:"content__button-confirmar",children:"Recuperar contraseña"})}):e("div",{className:"content__body-alerta",children:e("div",{className:"content__alerta-div",children:a("span",{className:"content__alerta-div-text",children:[" Las contraseñas ",e("span",{className:"content__alerta-div-text--modifier",children:"no coinciden"})]})})})]})]}),e("hr",{className:"linea__divisoria"}),a("div",{className:"content__footer",children:[e("span",{className:"content__footer-text",children:" Si necesitas ayuda ponte en contacto con nuestro equipo de soporte técnico. "}),e("div",{className:"contactenos",children:a("a",{className:"contactenos__button",children:[e("span",{className:"contactenos__button-icon icon-contacto"}),e("span",{className:"contactenos__button-text",children:"Contáctanos"})]})})]})]})})]})]})})]})};export{O as default};
