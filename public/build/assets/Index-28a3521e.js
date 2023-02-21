import{r,j as o,a as e,H as W,F as b}from"./app-1ec0e23a.js";import{A as X}from"./AuthenticatedLayout-9894cf75.js";import{A as Y}from"./MenuOpciones-755dc9cf.js";/* empty css                      */import{N as M,M as S}from"./Modal-ae2dc879.js";import{T as Z,a as ee}from"./estilos-toast-072abc6f.js";import"./font-unicolor-3ae71db2.js";import"./estilos-capa-autentificacion-c6c8a773.js";import"./ApplicationLogoLici-37c5e90a.js";import"./transition-cb900b71.js";import"./createWithBsPrefix-cd710d07.js";import"./hasClass-c241034d.js";import"./useTimeout-16417d2f.js";const ve=({auth:D,actividades_economicas:T})=>{const[$,h]=r.exports.useState(!1),[L,A]=r.exports.useState(""),[w,v]=r.exports.useState(""),[l,ie]=r.exports.useState(T),[k,H]=r.exports.useState(T);r.exports.useState(!1),r.exports.useState(!1),r.exports.useState(0);const[ae,q]=r.exports.useState(0),[_,f]=r.exports.useState([]),[N,g]=r.exports.useState([]),[u,I]=r.exports.useState({id:0,nombre:""}),[x,y]=r.exports.useState([]),[p,E]=r.exports.useState([]),[O,C]=r.exports.useState(!1),F=()=>C(!1),K=()=>{u.id!=0?C(!0):(A("Debes seleccionar una Actividad Ecónomica"),v("icon-error"),h(!0))},z=()=>{u.id!=0||(A("Debes seleccionar una Actividad Ecónomica"),v("icon-error"),h(!0))},G=i=>{_.includes(i)?f(_.filter(c=>c!=i)):f([..._,i]);const t=new RegExp(i,"i");k.filter(function(c){if(t.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!x.includes(c))x.push(c);else{const m=x.filter(d=>d.id_padre_sub_categoria!=i);y(m)}})},J=i=>{N.includes(i)?g(N.filter(c=>c!=i)):g([...N,i]);const t=new RegExp(i,"i");k.filter(function(c){if(t.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!p.includes(c))p.push(c);else{const m=p.filter(d=>d.id_padre_sub_categoria!=i);E(m)}}),q(i)},R=i=>{I(i)},P=i=>{if(i.target.value==""){H(l),y([]),E([]),f([]),g([]);return}if(i.key==="Enter"){const U=new RegExp(i.target.value,"i"),V=l.filter(function(a){if(U.test(a.nombre))return a});var t=[],s=[],c=[],m=[],d=[];V.forEach(a=>{a.id_abuelo_sub_categoria!=null&&a.id_padre_sub_categoria!=null&&(c.push(a),m.push(a.id_padre_sub_categoria),s.push(l.filter(n=>n.id==a.id_padre_sub_categoria)[0]),d.push(a.id_abuelo_sub_categoria)),a.id_abuelo_sub_categoria==null&&a.id_padre_sub_categoria!=null&&(s.includes(a)||s.push(a),d.includes(a.id_padre_sub_categoria)||d.push(a.id_padre_sub_categoria)),a.id_abuelo_sub_categoria==null&&a.id_padre_sub_categoria==null&&t.push(a)});var j=null,B=null;c.forEach(a=>{j=l.filter(n=>n.id==a.id_abuelo_sub_categoria)[0],B=l.filter(n=>n.id==a.id_padre_sub_categoria)[0],t.includes(j)||t.push(l.filter(n=>n.id==a.id_abuelo_sub_categoria)[0]),s.includes(B)||t.push(l.filter(n=>n.id==a.id_padre_sub_categoria)[0])}),H(t),y(s),E(c),f(d),g(m)}},Q=()=>{fetch("/actividades-economicas/"+u.id+"/delete").then(i=>i.json()).then(i=>{if(i.type=="Success"){v("icon-check");var t=p.filter(s=>s.id!=u.id);E(t),I({id:0,nombre:""})}else v("icon-error");A(i.message),h(!0),C(!1)})};return o(X,{auth:D,children:[e(W,{title:"Actividades económicas"}),e(Z,{position:"bottom-start",children:e(ee,{onClose:()=>h(!1),show:$,delay:3e3,autohide:!0,children:o("div",{className:`notification-toast ${w=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${w=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:w})}),e("p",{className:"title",children:L}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>h(!1)})]})})}),o("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(Y,{})}),o("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("h2",{className:"name_section_app",children:"Actividad económica"}),o("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:o("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Busca por actividad económica",autoComplete:"off",className:"form-control m-auto",onKeyDown:P}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),o("div",{className:"botones",children:[e(M.Link,{href:route("actividades-economicas.create"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(M.Link,{onClick:z,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(M.Link,{onClick:K,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),k.map(i=>e(b,{children:i.id_padre_sub_categoria==null&&o(b,{children:[o("div",{id:i.id,className:"tree-content mt-3 sector",onClick:()=>G(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),_.includes(i.id)&&e("ul",{className:"tree-children new-class",children:x.map(t=>e(b,{children:i.id==t.id_padre_sub_categoria&&o("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",children:[o("div",{className:"tree-content segmento",onClick:()=>J(t.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:t.nombre})})})]}),N.includes(t.id)&&e("ul",{className:"tree-children",children:p.map((s,c)=>e(b,{children:t.id==s.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:o("div",{className:"tree-content actividad-economica",onClick:()=>R(s),children:[e("input",{type:"radio",name:"actividad_economica",onChange:()=>R(s),checked:s.id==u.id?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(b,{children:c%2==0?e("span",{className:"tree-division__title my-auto",children:s.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:s.nombre})})})})]})})}))})]})}))})]})}))]})})}),o(S,{show:O,onHide:F,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[o(S.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:F})]}),e(S.Body,{id:"removeActividadEconomicaBody",children:o("p",{children:["Desea eliminar la actividad económica (",u.id,") ",u.nombre,"?"]})}),o(S.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:F,children:"Cancelar"}),e("button",{onClick:Q,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})]})]})};export{ve as default};
