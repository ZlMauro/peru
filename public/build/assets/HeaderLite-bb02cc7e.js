import{r as m,a as e,F as l,j as a}from"./app-2450fc49.js";import{A as h}from"./ApplicationLogoLici-6c322d2d.js";import{N as s,C as d,b as u,a as N}from"./ModalLoginSesion-fe41cd7a.js";/* empty css                      */import"./font-unicolor-90b14859.js";import{N as r}from"./Nav-201aadba.js";const f=n=>{const[c,i]=m.exports.useState(!1),t=()=>i(!1),o=()=>i(!0);return e(l,{children:e("div",{className:"contenido_headerLite--margin-top",children:e(s,{collapseOnSelect:!0,expand:"lg",bg:"white",variant:"dark",className:"container-headerPublica",children:a(d,{children:[e(s.Brand,{href:"#home",children:e("a",{href:"/",className:"flex items-center",children:e(h,{})})}),e(s.Toggle,{"aria-controls":"responsive-navbar-nav"}),a(s.Collapse,{id:"responsive-navbar-nav",children:[a(r,{className:"me-auto",children:[e(r.Link,{className:"menu-header"}),e(r.Link,{className:"menu-header"}),e(r.Link,{className:"menu-header"}),e(r.Link,{className:"menu-header"})]}),e(r,{children:e("ul",{className:"mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ",children:n.user.auth.user?a(l,{children:[e("li",{children:e("a",{href:route("dashboard"),className:"flex  items-center menu-header mx-1",children:n.user.auth.user.nombre_completo?n.user.auth.user.nombre_completo:Dashboard})}),e("hr",{className:"division-header header-publica"}),e("li",{children:e("a",{href:"#",className:"flex ml-4 ",children:e(u,{})})})]}):a(l,{children:[a("li",{children:[a("a",{className:"flex  items-center ml-4 text-iniciar",onClick:o,children:[e("span",{className:"mr-2 icon-login"}),"Iniciar sesión"]}),e(N,{showLS:c,handleCloseLS:t})]}),e(r.Link,{href:route("register"),className:"flex  ml-4 text-probar ",children:"Regístrate gratis"}),e("hr",{className:"division-header header-lite"}),a(r.Link,{href:"/contacto",className:"flex  items-center ml-4 text-contactanos",children:[e("span",{className:"mr-2 icon-contacto"}),"Contáctanos"]})]})})})]})]})})})})},S=f;export{S as H};
