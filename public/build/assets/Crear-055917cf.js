import{r as o,u as k,j as a,a as e,H as q}from"./app-ef2ff9b2.js";import{A}from"./AuthenticatedLayout-ff38b34c.js";import{T as D,a as G}from"./estilos-toast-e742002a.js";/* empty css                      *//* empty css                      */import{F as s}from"./Form-c46616a2.js";import"./ApplicationLogo-c815b16b.js";import"./ApplicationLogoLici-a53e0000.js";import"./AuthenticatedLayout-e83d4972.js";import"./transition-a92235d8.js";import"./createWithBsPrefix-d4b45b03.js";import"./CloseButton-0626eacc.js";import"./ElementChildren-3a61371a.js";const W=({auth:d,tiposcompras:p,solo_sectores:u})=>{const[h,i]=o.exports.useState(!1),[f,b]=o.exports.useState(""),{data:g,setData:c,post:N,processing:R,reset:v,errors:n}=k({id:"",nombre:"",sector:"",segmento:"",tipo_categoria:5}),[C,V]=o.exports.useState(p),[S,$]=o.exports.useState(u),[z,x]=o.exports.useState([]),[T,w]=o.exports.useState(!1),_=t=>{const r=t.currentTarget;w(!0),r.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),N(route("storeTiposCompras"),{onSuccess:()=>v()}))};o.exports.useEffect(()=>{if(Object.entries(n).length>0){var t=Object.values(n),r="";t.map(l=>r+=l),b(r),i(!0)}},[n]);const F=t=>{c("sector",t.target.value);var r=t.target.value;const l=r,y=new RegExp(l,"i"),j=C.filter(function(m){if(y.test(m.id_padre_sub_categoria))return m});x(j)};return a(A,{auth:d,children:[e(q,{title:"Tipos Compras"}),e(D,{position:"bottom-start",children:e(G,{onClose:()=>i(!1),show:h,delay:3e5,autohide:!0,children:a("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:f}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>i(!1)})]})})}),e("div",{className:"contenedor-planes",children:a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Crear Tipos Compras"}),e("div",{className:"container mt-4",children:a(s,{id:"form",name:"form",noValidate:!0,validated:T,onSubmit:_,children:[a(s.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Tipo de entidad"})}),e("div",{className:"col-12 col-sm-8",children:a(s.Select,{type:"text",name:"sector",className:"sector",onChange:F,pattern:"^[A-Za-z\\s]+$",required:!0,children:[e("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Selecciona una entidad"}),S.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),a(s.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre Tipos Compras"})}),e("div",{className:"col-12 col-sm-8",children:e(s.Control,{type:"text",placeholder:"",value:g.nombre,onChange:t=>c("nombre",t.target.value),className:"actividad-economica",pattern:"^[A-Za-z\\s]+$",required:!0})})]}),a(s.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Crear"}),e("a",{href:route("indexTiposCompras"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})})]})};export{W as default};
