import{r,u as q,j as a,a as e,H as A}from"./app-ef2ff9b2.js";import{A as j}from"./AuthenticatedLayout-ff38b34c.js";import{T as k,a as z}from"./estilos-toast-e742002a.js";/* empty css                      *//* empty css                      */import{F as o}from"./Form-c46616a2.js";import"./ApplicationLogo-c815b16b.js";import"./ApplicationLogoLici-a53e0000.js";import"./AuthenticatedLayout-e83d4972.js";import"./transition-a92235d8.js";import"./createWithBsPrefix-d4b45b03.js";import"./CloseButton-0626eacc.js";import"./ElementChildren-3a61371a.js";const X=({auth:d,actividades_economicas:u,solo_sectores:p})=>{const[h,l]=r.exports.useState(!1),[f,b]=r.exports.useState(""),{data:g,setData:i,post:N,processing:D,reset:v,errors:n}=q({id:"",nombre:"",sector:"",segmento:"",tipo_categoria:3}),[S,R]=r.exports.useState(u),[x,E]=r.exports.useState(p),[G,w]=r.exports.useState([]),[C,_]=r.exports.useState(!1),y=t=>{const s=document.querySelectorAll(".sector")[0].value;console.log(s);const c=t.currentTarget;if(_(!0),s=="Selecciona una región"){t.preventDefault(),t.stopPropagation(),document.querySelectorAll("select.sector.form-select")[0].classList.add("failed");return}c.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),N(route("storeLocalizacion"),{onSuccess:()=>v()}))};r.exports.useEffect(()=>{if(Object.entries(n).length>0){var t=Object.values(n),s="";t.map(c=>s+=c),b(s),l(!0)}},[n]);const L=t=>{document.querySelectorAll("select.sector.form-select")[0].classList.remove("failed"),i("sector",t.target.value);var s=t.target.value;const c=s,F=new RegExp(c,"i"),T=S.filter(function(m){if(F.test(m.id_padre_sub_categoria))return m});w(T)};return a(j,{auth:d,children:[e(A,{title:"Localización"}),e(k,{position:"bottom-start",children:e(z,{onClose:()=>l(!1),show:h,delay:3e5,autohide:!0,children:a("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:f}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>l(!1)})]})})}),e("div",{className:"contenedor-planes",children:a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Crear Localización"}),e("div",{className:"container mt-4",children:a(o,{id:"form",name:"form",noValidate:!0,validated:C,onSubmit:y,children:[a(o.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Región"})}),e("div",{className:"col-12 col-sm-8",children:a(o.Select,{name:"sector",className:"sector",onChange:L,children:[e("option",{children:"Selecciona una región"}),x.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),a(o.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre de la comuna o ciudad"})}),e("div",{className:"col-12 col-sm-8",children:e(o.Control,{type:"text",placeholder:"Nombre de la comuna o ciudad",value:g.nombre,onChange:t=>i("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),a(o.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Crear"}),e("a",{href:route("indexLocalizacion"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})})]})};export{X as default};
