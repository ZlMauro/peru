import{r as o,j as c,a as e,H as W,F as g}from"./app-fefff5b5.js";import{A as X}from"./AuthenticatedLayout-eeccacf1.js";import{A as Y}from"./MenuOpciones-a40e585b.js";/* empty css                      */import{N as F,M as x}from"./Modal-55358929.js";import{T as Z,a as ee}from"./estilos-toast-6520bd60.js";import"./font-unicolor-8d4309b6.js";import"./estilos-capa-autentificacion-e622f142.js";import"./ApplicationLogoLici-2621a9b3.js";import"./transition-cb6d3134.js";import"./createWithBsPrefix-4d74ba74.js";import"./hasClass-81ff52a1.js";import"./useTimeout-0ea72b7e.js";const fe=({auth:$,tiposcompras:M})=>{const[D,m]=o.exports.useState(!1),[L,S]=o.exports.useState(""),[E,b]=o.exports.useState(""),[d,ie]=o.exports.useState(M),[C,H]=o.exports.useState(M);o.exports.useState(!1),o.exports.useState(!1),o.exports.useState(0);const[ae,q]=o.exports.useState(0),[f,_]=o.exports.useState([]),[k,v]=o.exports.useState([]),[u,I]=o.exports.useState({id:0,nombre:""}),[h,N]=o.exports.useState([]),[w,A]=o.exports.useState([]),[O,y]=o.exports.useState(!1),T=()=>y(!1),z=()=>{u.id!=0?y(!0):(S("Debes seleccionar uno"),b("icon-error"),m(!0))},G=()=>{u.id!=0?window.location.replace("/tiposcompras/"+u.id+"/edit"):(S("Debes seleccionar uno"),b("icon-error"),m(!0))},J=i=>{f.includes(i)?_(f.filter(t=>t!=i)):_([...f,i]);const s=new RegExp(i,"i");C.filter(function(t){if(s.test(t.id_padre_sub_categoria))return t}).forEach(t=>{if(!h.includes(t))h.push(t);else{const p=h.filter(l=>l.id_padre_sub_categoria!=i);N(p)}})},K=i=>{k.includes(i)?v(k.filter(t=>t!=i)):v([...k,i]);const s=new RegExp(i,"i");C.filter(function(t){if(s.test(t.id_padre_sub_categoria))return t}).forEach(t=>{if(!w.includes(t))w.push(t);else{const p=w.filter(l=>l.id_padre_sub_categoria!=i);A(p)}}),q(i)},R=i=>{I(i)},P=i=>{if(i.target.value==""){console.log("primer if"),H(d),N([]),A([]),_([]),v([]);return}if(i.key==="Enter"){console.log("enter");const U=new RegExp(i.target.value,"i"),V=d.filter(function(a){if(U.test(a.nombre))return a});var s=[],r=[],t=[],p=[],l=[];V.forEach(a=>{a.id_abuelo_sub_categoria!=null&&a.id_padre_sub_categoria!=null&&(t.push(a),p.push(a.id_padre_sub_categoria),r.push(d.filter(n=>n.id==a.id_padre_sub_categoria)[0]),l.push(a.id_abuelo_sub_categoria)),a.id_abuelo_sub_categoria==null&&a.id_padre_sub_categoria!=null&&(r.includes(a)||r.push(a),l.includes(a.id_padre_sub_categoria)||l.push(a.id_padre_sub_categoria)),a.id_abuelo_sub_categoria==null&&a.id_padre_sub_categoria==null&&s.push(a)});var j=null,B=null;t.forEach(a=>{j=d.filter(n=>n.id==a.id_abuelo_sub_categoria)[0],B=d.filter(n=>n.id==a.id_padre_sub_categoria)[0],s.includes(j)||s.push(d.filter(n=>n.id==a.id_abuelo_sub_categoria)[0]),r.includes(B)||s.push(d.filter(n=>n.id==a.id_padre_sub_categoria)[0])}),H(s),N(r),A(t),_(l),v(p)}else console.log("imprimiendo e.key"),console.log(i.key)},Q=()=>{fetch("/tiposcompras/"+u.id+"/delete").then(i=>i.json()).then(i=>{if(i.type=="Success"){b("icon-check");var s=h.filter(r=>r.id!=u.id);N(s),I({id:0,nombre:""})}else b("icon-error");S(i.message),m(!0),y(!1)})};return c(X,{auth:$,children:[e(W,{title:"Tipos Compras"}),e(Z,{position:"bottom-start",children:e(ee,{onClose:()=>m(!1),show:D,delay:3e3,autohide:!0,children:c("div",{className:`notification-toast ${E=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${E=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:E})}),e("p",{className:"title",children:L}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>m(!1)})]})})}),c("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(Y,{})}),c("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Tipos Compras"}),c("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:c("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Buscar tipo compra",autoComplete:"off",className:"form-control m-auto",onChange:P}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),c("div",{className:"botones",children:[e(F.Link,{href:route("createTiposCompras"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(F.Link,{onClick:G,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(F.Link,{onClick:z,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),C.map(i=>e(g,{children:i.id_padre_sub_categoria==null&&c(g,{children:[c("div",{id:i.id,className:"tree-content mt-3 sector ",onClick:()=>J(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),f.includes(i.id)&&e("ul",{className:"tree-children",children:h.map((s,r)=>e(g,{children:i.id==s.id_padre_sub_categoria&&e("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>R(s),children:c("div",{className:"tree-content segmento",onClick:()=>K(s.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"actividad_economica",onClick:()=>R(s),checked:s.id==u.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(g,{children:r%2==0?e("span",{className:"tree-division__title my-auto",children:s.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:s.nombre})})})})]})})}))})]})}))]})})}),c(x,{show:O,onHide:T,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[c(x.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:T})]}),e(x.Body,{id:"removeActividadEconomicaBody",children:c("p",{children:["Desea eliminar la comuna"," ",u.nombre,"?"]})}),c(x.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:T,children:"Cancelar"}),e("button",{onClick:Q,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})]})]})};export{fe as default};
