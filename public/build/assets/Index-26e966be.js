import{r as s,j as c,a as e,H as P,F as p}from"./app-b18d0553.js";import{A as Q}from"./AuthenticatedLayout-25f86db6.js";/* empty css                      */import{N as w,M as b}from"./Modal-19b8557a.js";import{T as U,a as V}from"./estilos-toast-91203321.js";import"./font-unicolor-132fe1e4.js";import"./ApplicationLogo-e0a88ede.js";import"./ApplicationLogoLici-bc1a6466.js";import"./transition-466bfc0e.js";import"./createWithBsPrefix-dbfef877.js";import"./hasClass-d3eb595c.js";import"./useTimeout-2050bea3.js";const de=({auth:z,localizacion:k})=>{const[F,r]=s.exports.useState(!1),[M,f]=s.exports.useState(""),[v,d]=s.exports.useState(""),[T,W]=s.exports.useState(k),[N,H]=s.exports.useState(k);s.exports.useState(!1);const[I,R]=s.exports.useState(!1);s.exports.useState(0);const[X,j]=s.exports.useState(0),[m,C]=s.exports.useState([]),[h,A]=s.exports.useState([]),[o,y]=s.exports.useState({id:0,nombre:""}),[l,L]=s.exports.useState([]),[u,B]=s.exports.useState([]),[$,x]=s.exports.useState(!1),_=()=>x(!1),D=()=>{o.id!=0?x(!0):(f("Debes seleccionar una Ciudad"),d("icon-error"),r(!0))},q=()=>{o.id!=0?window.location.replace("/localizacion/"+o.id+"/edit"):(f("Debes seleccionar una Ciudad"),d("icon-error"),r(!0))},O=i=>{m.includes(i)?C(m.filter(a=>a!=i)):C([...m,i]);const t=new RegExp(i,"i");N.filter(function(a){if(t.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!l.includes(a))l.push(a);else{const S=l.filter(E=>E.id_padre_sub_categoria!=i);L(S)}})},G=i=>{h.includes(i)?A(h.filter(a=>a!=i)):A([...h,i]);const t=new RegExp(i,"i");N.filter(function(a){if(t.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!u.includes(a))u.push(a);else{const S=u.filter(E=>E.id_padre_sub_categoria!=i);B(S)}}),j(i)},g=i=>{y(i)},J=()=>{fetch("/localizacion/"+o.id+"/delete").then(i=>i.json()).then(i=>{if(i.type=="Success"){d("icon-check");var t=l.filter(n=>n.id!=o.id);L(t),y({id:0,nombre:""})}else d("icon-error");f(i.message),r(!0),x(!1)})},K=i=>{const t=new RegExp(i.target.value,"i"),n=T.filter(function(a){if(t.test(a.nombre))return a});H(n),R(!I)};return c(Q,{auth:z,children:[e(P,{title:"Localización"}),e(U,{position:"bottom-start",children:e(V,{onClose:()=>r(!1),show:F,delay:3e3,autohide:!0,children:c("div",{className:`notification-toast ${v=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${v=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:v})}),e("p",{className:"title",children:M}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>r(!1)})]})})}),e("div",{className:"contenedor-planes",children:c("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Localización"}),c("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:c("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Buscar localización en Chile",autoComplete:"off",className:"form-control m-auto",onChange:K}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),c("div",{className:"botones",children:[e(w.Link,{href:route("createLocalizacion"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(w.Link,{onClick:q,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(w.Link,{onClick:D,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),N.map(i=>e(p,{children:i.id_padre_sub_categoria==null&&c(p,{children:[c("div",{id:i.id,className:"tree-content mt-3 sector",onClick:()=>O(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),m.includes(i.id)&&e("ul",{className:"tree-children",children:l.map((t,n)=>e(p,{children:i.id==t.id_padre_sub_categoria&&c("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>g(t),children:[c("div",{className:"tree-content segmento",onClick:()=>G(t.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"actividad_economica",onClick:()=>g(t),checked:t.id==o.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(p,{children:n%2==0?e("span",{className:"tree-division__title my-auto",children:t.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:t.nombre})})})})]}),h.includes(t.id)&&e("ul",{className:"tree-children",children:u.map(a=>e("li",{className:"tree-node draggable",children:e("div",{className:"tree-content actividad-economica",onClick:()=>g(a),children:e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})})}))})]})}))})]})}))]})})}),c(b,{show:$,onHide:_,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[c(b.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:_})]}),e(b.Body,{id:"removeActividadEconomicaBody",children:c("p",{children:["Desea eliminar la comuna"," ",o.nombre,"?"]})}),c(b.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:_,children:"Cancelar"}),e("button",{onClick:J,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})})]})};export{de as default};
