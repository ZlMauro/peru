import{r as s,u as q,j as o,a as e,H as y}from"./app-813108b1.js";import{A as j}from"./AuthenticatedLayout-57140c81.js";import{A as G}from"./MenuOpciones-b0626adb.js";import{T as k,a as I}from"./estilos-toast-c5f66ebc.js";import"./font-unicolor-556aaa9a.js";import{F as a}from"./Form-22d779fc.js";/* empty css                      */import"./estilos-capa-autentificacion-36be70e9.js";import"./ApplicationLogoLici-8eeddfb7.js";import"./transition-8f8e6ecf.js";import"./createWithBsPrefix-72997786.js";import"./useTimeout-dd441805.js";import"./useEventCallback-86cac4a6.js";import"./index-67732e07.js";import"./ElementChildren-5fdc4fc5.js";import"./Col-00ff2e2d.js";const ee=({auth:h,actividades_economicas:v,solo_sectores:b,ae_actual:c})=>{const[f,n]=s.exports.useState(!1),[g,N]=s.exports.useState(""),{data:r,setData:l,patch:S,processing:L,reset:_,errors:d}=q({id:c.id,nombre:c.nombre,sector:c.parent.id_padre_sub_categoria,segmento:c.id_padre_sub_categoria,tipo_categoria:1,new_id:c.id}),[x,w]=s.exports.useState(!1),C=t=>{const i=t.currentTarget;w(!0),i.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),S(route("actividades-economicas.update",r.id),{onSuccess:()=>_()}))},[A,D]=s.exports.useState(v),[F,R]=s.exports.useState(b),[E,T]=s.exports.useState([]),p=t=>{l("sector",t);const i=new RegExp(t,"i"),m=A.filter(function(u){if(i.test(u.id_padre_sub_categoria))return u});T(m)};return s.exports.useEffect(()=>{if(Object.entries(d).length>0){var t=Object.values(d),i="";t.map(m=>i+=m),N(i),n(!0)}},[d]),s.exports.useEffect(()=>{p(r.sector)},[]),o(j,{auth:h,children:[e(y,{title:"Actividades económicas"}),e(k,{position:"bottom-start",children:e(I,{onClose:()=>n(!1),show:f,delay:3e5,autohide:!0,children:o("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:g}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>n(!1)})]})})}),o("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(G,{})}),o("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Editar Actividad económica"}),e("div",{className:"container mt-4",children:o(a,{id:"form",name:"form",noValidate:!0,validated:x,onSubmit:C,children:[o(a.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el sector"})}),e("div",{className:"col-12 col-sm-8",children:o(a.Select,{name:"sector",className:"sector",id:"",onChange:t=>p(t.target.value),value:r.sector,children:[e("option",{value:"",children:"Selecciona un Sector"}),F.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el segmento"})}),e("div",{className:"col-12 col-sm-8",children:o(a.Select,{name:"segmento",className:"segmento",id:"",onChange:t=>l("segmento",t.target.value),value:r.segmento,children:[e("option",{value:"",children:"Selecciona un Segmento"}),E.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre Actividad económica"})}),e("div",{className:"col-12 col-sm-8",children:e(a.Control,{type:"text",placeholder:"Nombre Actividad económica",value:r.nombre,onChange:t=>l("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Código de verificación"})}),e("div",{className:"col-12 col-sm-8",children:e(a.Control,{type:"number",placeholder:"Código de verificación",value:r.id,onChange:t=>l("id",t.target.value),className:"actividad-economica",required:!0})})]}),o(a.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Editar"}),e("a",{href:route("actividades-economicas.index"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})]})]})};export{ee as default};
