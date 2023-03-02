import{r as s,j as o,a as e,H as W,F as h}from"./app-bf42f639.js";import{A as X}from"./AuthenticatedLayout-a3bdcafd.js";/* empty css                      */import{N as M}from"./Nav-fcf30251.js";import{M as S}from"./Modal-00d054b3.js";import{T as Y,a as Z}from"./estilos-toast-9ba19177.js";/* empty css                      */import"./ApplicationLogo-70c047b0.js";import"./ApplicationLogoLici-15acec29.js";import"./AuthenticatedLayout-138837dc.js";import"./transition-6dcbd6d1.js";import"./createWithBsPrefix-c71f1460.js";import"./hook-1fe09766.js";import"./CloseButton-286585cd.js";import"./hasClass-4d8ce9ca.js";import"./useTimeout-7c168a78.js";const fe=({auth:D,actividades_economicas:T})=>{const[$,p]=s.exports.useState(!1),[L,A]=s.exports.useState(""),[w,v]=s.exports.useState(""),[u,ee]=s.exports.useState(T),[k,H]=s.exports.useState(T);s.exports.useState(!1),s.exports.useState(!1),s.exports.useState(0);const[ie,q]=s.exports.useState(0),[_,f]=s.exports.useState([]),[N,g]=s.exports.useState([]),[n,I]=s.exports.useState({id:0,nombre:""}),[x,y]=s.exports.useState([]),[b,E]=s.exports.useState([]),[O,C]=s.exports.useState(!1),F=()=>C(!1),K=()=>{n.id!=0?C(!0):(A("Debes seleccionar una Actividad Ecónomica"),v("icon-error"),p(!0))},z=()=>{n.id!=0?window.location.replace("/actividades-economicas/"+n.id+"/edit"):(A("Debes seleccionar una Actividad Ecónomica"),v("icon-error"),p(!0))},G=i=>{_.includes(i)?f(_.filter(a=>a!=i)):f([..._,i]);const t=new RegExp(i,"i");k.filter(function(a){if(t.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!x.includes(a))x.push(a);else{const m=x.filter(l=>l.id_padre_sub_categoria!=i);y(m)}})},J=i=>{N.includes(i)?g(N.filter(a=>a!=i)):g([...N,i]);const t=new RegExp(i,"i");k.filter(function(a){if(t.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!b.includes(a))b.push(a);else{const m=b.filter(l=>l.id_padre_sub_categoria!=i);E(m)}}),q(i)},R=i=>{I(i)},P=i=>{if(i.target.value==""){H(u),y([]),E([]),f([]),g([]);return}if(i.key==="Enter"){const U=new RegExp(i.target.value,"i"),V=u.filter(function(c){if(U.test(c.nombre))return c});var t=[],r=[],a=[],m=[],l=[];V.forEach(c=>{c.id_abuelo_sub_categoria!=null&&c.id_padre_sub_categoria!=null&&(a.push(c),m.push(c.id_padre_sub_categoria),r.push(u.filter(d=>d.id==c.id_padre_sub_categoria)[0]),l.push(c.id_abuelo_sub_categoria)),c.id_abuelo_sub_categoria==null&&c.id_padre_sub_categoria!=null&&(r.includes(c)||(r.push(c),r.push(c)),l.includes(c.id_padre_sub_categoria)||(l.push(c.id_padre_sub_categoria),r.push(c))),c.id_abuelo_sub_categoria==null&&c.id_padre_sub_categoria==null&&t.push(c)});var j=null,B=null;a.forEach(c=>{j=u.filter(d=>d.id==c.id_abuelo_sub_categoria)[0],B=u.filter(d=>d.id==c.id_padre_sub_categoria)[0],t.includes(j)||t.push(u.filter(d=>d.id==c.id_abuelo_sub_categoria)[0]),r.includes(B)||t.push(u.filter(d=>d.id==c.id_padre_sub_categoria)[0])}),H(t),y(r),E(a),f(l),g(m)}},Q=()=>{fetch("/actividades-economicas/"+n.id+"/delete").then(i=>i.json()).then(i=>{if(i.type=="Success"){v("icon-check");var t=b.filter(r=>r.id!=n.id);E(t),I({id:0,nombre:""})}else v("icon-error");A(i.message),p(!0),C(!1)})};return o(X,{auth:D,children:[e(W,{title:"Actividades económicas"}),e(Y,{position:"bottom-start",children:e(Z,{onClose:()=>p(!1),show:$,delay:3e3,autohide:!0,children:o("div",{className:`notification-toast ${w=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${w=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:w})}),e("p",{className:"title",children:L}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>p(!1)})]})})}),e("div",{className:"contenedor-planes",children:o("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("h2",{className:"name_section_app",children:"Actividad económica"}),o("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:o("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Busca por actividad económica",autoComplete:"off",className:"form-control m-auto",onKeyDown:P}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),o("div",{className:"botones",children:[e(M.Link,{href:route("actividades-economicas.create"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(M.Link,{onClick:z,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(M.Link,{onClick:K,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),k.map(i=>e(h,{children:i.id_padre_sub_categoria==null&&o(h,{children:[o("div",{id:i.id,className:"tree-content mt-3 sector",onClick:()=>G(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),_.includes(i.id)&&e("ul",{className:"tree-children new-class",children:x.map((t,r)=>e(h,{children:i.id==t.id_padre_sub_categoria&&o("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",children:[o("div",{className:"tree-content segmento",onClick:()=>J(t.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(h,{children:r%2==0?e("span",{className:"tree-division__title my-auto",children:t.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:t.nombre})})})})]}),N.includes(t.id)&&e("ul",{className:"tree-children",children:b.map((a,m)=>e(h,{children:t.id==a.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:o("div",{className:"tree-content actividad-economica",onClick:()=>R(a),children:[e("input",{type:"radio",name:"actividad_economica",onChange:()=>R(a),checked:a.id==n.id?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(h,{children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})})]})})}))})]})}))})]})}))]})})}),o(S,{show:O,onHide:F,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[o(S.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:F})]}),e(S.Body,{id:"removeActividadEconomicaBody",children:o("p",{children:["Desea eliminar la actividad económica (",n.id,")"," ",n.nombre,"?"]})}),o(S.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:F,children:"Cancelar"}),e("button",{onClick:Q,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})})]})};export{fe as default};
