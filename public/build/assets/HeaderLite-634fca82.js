import{u as L,r as s,j as n,a as e,F as h}from"./app-932219e2.js";import{A as H}from"./ApplicationLogoLici-3c6d4e59.js";/* empty css                      */import{M as t}from"./Header-c0c87a07.js";import{T as u}from"./TextInput-9d668e64.js";/* empty css              */const I=_=>{const{data:c,setData:g,post:f,processing:N,errors:v,reset:S}=L({email:"",password:"",remember:""}),[l,w]=s.exports.useState("form-input-section__container-input"),[r,x]=s.exports.useState(!0);let o=s.exports.useRef();const[b,d]=s.exports.useState(!1),k=()=>d(!1),m=()=>d(!0),y=a=>{a.preventDefault(),f(route("login")),v&&(w("form-input-section__container-input form-input-section__container-inputError"),x(!1))},C=a=>{let i=document.getElementsByName("password")[0];console.log(i.type),o.current.className=="form-input-section__container-span icon-show"?(o.current.className="form-input-section__container-span icon-hide",i.type="text",i.placeholder="Ingresa tu contraseña"):(o.current.className="form-input-section__container-span icon-show",i.type="password",i.placeholder="Contraseña1234")},p=a=>{g(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return n("div",{className:"container container-headerLite ",children:[n("div",{className:"flex justify-between items-center py-2",children:[e("a",{href:"/",className:"flex items-center img-header",children:e(H,{})}),n("div",{className:"flex md:order-2 div-iniciar-secion",children:[e("ul",{className:"mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ",children:_.user.auth.user?e(h,{children:e("li",{children:e("a",{href:route("dashboard"),className:"flex  items-center menu-header mx-1",children:" Dashboard"})})}):n(h,{children:[e("li",{children:n("a",{href:"#",className:"flex  items-center ml-4 text-iniciar",onClick:m,children:[e("span",{className:"mr-2 icon-login"}),"Iniciar sesión"]})}),e("li",{children:e("a",{href:route("register"),className:"flex  ml-4 text-probar ",children:"Regístrate gratis"})}),e("li",{children:n("a",{href:"/contacto",className:"flex  items-center ml-4 text-contactanos",onClick:m,children:[e("span",{className:"mr-2 icon-contacto"}),"Contáctanos"]})})]})}),n("button",{"data-collapse-toggle":"navbar-sticky",type:"button",className:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-sticky","aria-expanded":"false",children:[e("span",{className:"sr-only",children:"Open main menu"}),e("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})]})]})]}),n(t,{show:b,onHide:k,id:"loginModal",className:"modal-dialog-centered",children:[e(t.Header,{closeButton:!0}),e(t.Body,{children:n("div",{className:"login",children:[e("div",{className:"login__welcome",children:n("div",{className:"login__welcome-content",children:[n("p",{className:"login__welcome-content-titulo",children:[e("span",{className:"login__welcome-content-titulo login__welcome-content-titulo",children:"¡Hola!"}),e("span",{className:"login__welcome-content-titulo login__welcome-content-titulo--modifier",children:"Bienvenido"})]}),n("p",{className:"login__welcome-content-texto",children:[" ¿Aún no tienes cuenta? ",e("a",{className:"login__infoLLink",children:" Regístrate gratis "})]})]})}),e("div",{className:"login__errors",children:n("form",{onSubmit:y,children:[!r&&n("div",{className:"login__errors-div",children:[n("p",{className:"login__errors-div-title-p",children:[e("strong",{children:"Datos de ingreso"}),e("span",{className:"login__errors-div-title-p-span",children:e("strong",{children:" incorrectos"})})]}),e("p",{className:"login__errors-div-title-p login__errors-div-title-p--modifier",children:" Dirección de correo electrónico o contraseña incorrectos. Si no tienes una cuenta, regístrate gratis. "}),e("div",{children:e("hr",{className:"widthDivider"})})]}),n("div",{className:"form-input-section blockEmail",children:[n("p",{className:"form-input-section__title",children:[e("span",{className:"icon-mail form-input-section__title-span"}),e("strong",{children:"Correo electrónico:"})]}),n("div",{className:"form-input-section__container",children:[e(u,{id:"email",type:"email",name:"email",value:c.email,className:l,autoComplete:"username",isFocused:!0,placeholder:"Ingresa tu correo electrónico",handleChange:p}),!r&&e("span",{className:"form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"})]})]}),n("div",{className:"form-input-section blockPass",children:[n("p",{className:"form-input-section__title",children:[e("span",{className:"icon-lock form-input-section__title-span"}),e("strong",{children:"Contraseña:"})]}),n("div",{className:"form-input-section__container",children:[e(u,{id:"password",type:"password",name:"password",placeholder:"Ingresa tu contraseña",value:c.password,className:l,autoComplete:"current-password",handleChange:p}),r?e("span",{className:"form-input-section__container-span icon-show",ref:o,onClick:C}):e("span",{className:"form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"})]})]}),n("div",{className:"login__season",children:[e("div",{children:n("label",{className:"blockCheck",children:[e("span",{style:{fontWeight:"normal"},children:" No cerrar sesión "}),e("input",{type:"checkbox",id:"checkbox",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"}),e("div",{className:"b-input"})]})}),e("a",{className:"login__infoLLink login__infoLLink--modifier",children:" ¿Olvidaste tu contraseña? "})]}),n("div",{className:"blockBtn",children:[e("button",{type:"submit",className:"blockBtn__content",processing:N,children:" Iniciar sesión "}),e("a",{className:"d-none login__infoLLink--mobile login__infoLLink--modifier",children:" ¿Olvidaste tu contraseña? "})]}),e("input",{type:"hidden",name:"_token",value:"wSHAkDvlYF9Y2pLYuYrummdIKaqHwbHqBxrCSL9o"})]})})]})}),e(t.Footer,{})]})]})},A=I;export{A as H};
