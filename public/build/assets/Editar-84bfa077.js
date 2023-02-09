import{r as a,u as A,j as s,a as e,H as E}from"./app-6ba39544.js";import{A as F}from"./AuthenticatedLayout-2a033599.js";import{A as T}from"./MenuOpciones-c6b5974a.js";import{T as j,a as y}from"./estilos-toast-190aab86.js";import"./font-unicolor-2a5f6098.js";/* empty css                      */import"./estilos-capa-autentificacion-159dd43a.js";import"./ApplicationLogoLici-7ad2d975.js";import"./transition-8263c4b2.js";import"./createWithBsPrefix-ed2bbe72.js";import"./useEventCallback-593ff258.js";import"./index-67732e07.js";const Q=({auth:h,actividades_economicas:u,solo_sectores:v,ae_actual:c})=>{const[b,n]=a.exports.useState(!1),[N,g]=a.exports.useState(""),{data:o,setData:i,patch:f,processing:k,reset:S,errors:l}=A({id:c.id,nombre:c.nombre,sector:c.parent.id_padre_sub_categoria,segmento:c.id_padre_sub_categoria,tipo_categoria:1,new_id:c.id});a.exports.useEffect(()=>{if(Object.entries(l).length>0){var t=Object.values(l),r="";t.map(d=>r+=d),g(r),n(!0)}},[l]),a.exports.useEffect(()=>{m(o.sector)},[]);const[w,R]=a.exports.useState(u),[x,D]=a.exports.useState(v),[_,C]=a.exports.useState([]),m=t=>{i("sector",t);const r=new RegExp(t,"i"),d=w.filter(function(p){if(r.test(p.id_padre_sub_categoria))return p});C(d)};return s(F,{auth:h,children:[e(E,{title:"Actividades económicas"}),e(j,{position:"bottom-start",children:e(y,{onClose:()=>n(!1),show:b,delay:3e5,autohide:!0,children:s("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:N}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>n(!1)})]})})}),s("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(T,{})}),s("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Editar Actividad económica"}),e("div",{className:"container mt-4",children:s("form",{onSubmit:t=>{t.preventDefault(),f(route("actividades-economicas.update",o.id),{onSuccess:()=>S()})},children:[s("div",{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Seleccione el sector"})}),e("div",{className:"col-12 col-sm-8",children:s("select",{name:"sector",className:"sector",id:"",onChange:t=>m(t.target.value),value:o.sector,children:[e("option",{value:"",children:"Selecciona un Sector"}),x.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),s("div",{className:"row mt-4",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Seleccione el segmento"})}),e("div",{className:"col-12 col-sm-8",children:s("select",{name:"segmento",className:"segmento",id:"",onChange:t=>i("segmento",t.target.value),value:o.segmento,children:[e("option",{value:"",children:"Selecciona un Segmento"}),_.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),s("div",{className:"row mt-4",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Nombre Actividad económica"})}),e("div",{className:"col-12 col-sm-8",children:e("input",{value:o.nombre,onChange:t=>i("nombre",t.target.value),type:"text",placeholder:"Nombre",className:"actividad-economica"})})]}),s("div",{className:"row mt-4",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Código de verificación"})}),e("div",{className:"col-12 col-sm-8",children:e("input",{value:o.new_id,onChange:t=>i("new_id",t.target.value),type:"number",placeholder:"Código de verificación",className:"actividad-economica"})})]}),s("div",{className:"row mt-4",children:[e("div",{className:"col-4"}),s("div",{className:"col-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Editar"}),e("a",{href:route("actividades-economicas.index"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]}),e("div",{className:"col-4"})]})]})})]})]})]})};export{Q as default};
