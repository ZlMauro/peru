import{r as n,j as l,F as u,a}from"./app-48ca9383.js";import"./AuthenticatedLayout-e4a8c611.js";/* empty css                      */import{T as ni,a as di}from"./estilos-toast-17ad9272.js";/* empty css                      *//* empty css                 */import"./transition-56370857.js";import"./createWithBsPrefix-ba01ed16.js";import"./CloseButton-e770543b.js";const Ti=({auth:ri,actividades_economicas:J,tiposcompras:Q,localizaciones:W})=>{const[fe,X]=n.exports.useState(!1),[be,li]=n.exports.useState(""),[A,ui]=n.exports.useState(""),[p,pi]=n.exports.useState(J),[R,Y]=n.exports.useState(J),[v,E]=n.exports.useState([]),[S,w]=n.exports.useState([]);n.exports.useState([]);const[Z,ge]=n.exports.useState([]);n.exports.useEffect(()=>{var e=[];p.forEach(i=>{if(i.childs.length>0){var c=[],s=[];i.id_padre_sub_categoria==null&&(i.childs.forEach(o=>{c.push(o.id);var r=p.filter(t=>t.id==o.id)[0];r.childs.length>0&&r.childs.forEach(t=>{s.push(t.id)})}),e[i.id]=["sectores"],e[i.id].segmentos=c,e[i.id].actividades_economicas=s)}}),ge(e)},[]);const[f,O]=n.exports.useState([]),[L,j]=n.exports.useState([]),[T,q]=n.exports.useState([]),ve=e=>{var i=document.getElementById("sector_"+e);i.classList.toggle("expanded"),v.includes(e)?E(v.filter(o=>o!=e)):E([...v,e]);const c=new RegExp(e,"i");R.filter(function(o){if(c.test(o.id_padre_sub_categoria))return o}).forEach(o=>{if(!L.includes(o))L.push(o);else{const r=L.filter(t=>t.id_padre_sub_categoria!=e);j(r)}})},Ne=e=>{var i=document.getElementById("segmento_"+e);i.classList.toggle("expanded"),S.includes(e)?w(S.filter(o=>o!=e)):w([...S,e]);const c=new RegExp(e,"i");R.filter(function(o){if(c.test(o.id_padre_sub_categoria))return o}).forEach(o=>{if(!T.includes(o))T.push(o);else{const r=T.filter(t=>t.id_padre_sub_categoria!=e);q(r)}})},N=e=>{var i=[];f.forEach(o=>{i.push(o)});var c=p.filter(o=>o.id_padre_sub_categoria==e.id&&o.id_abuelo_sub_categoria==null);if(c.length>0)i.includes(e.id)?(i=b(i,e.id),i=x(i,c,"segmento","remove")):(i.push(e.id),i=x(i,c,"segmento","remove"),i=x(i,c,"segmento","add"));else{var s=p.filter(o=>o.id_padre_sub_categoria==e.id);s.length>0?i.includes(e.id)?(i=b(i,e.id),i=x(i,s,"actividad_economica","remove")):(i.push(e.id),i=x(i,s,"actividades_economicas","remove"),i=x(i,s,"actividad_economica","add")):i.includes(e.id)?i=b(i,e.id):i.push(e.id)}i=[...new Set(i)],O(i),Se(i,e)},xe=e=>{var i=p.filter(c=>c.id==e)[0];return i.id_abuelo_sub_categoria==null&&i.id_padre_sub_categoria==null?i:!1},ee=e=>{var i=p.filter(c=>c.id==e)[0];return i.id_abuelo_sub_categoria==null&&i.id_padre_sub_categoria!=null?i:!1},ie=e=>{var i=p.filter(c=>c.id==e)[0];return i.id_abuelo_sub_categoria!=null&&i.id_padre_sub_categoria!=null?i:!1},Se=(e,i)=>{if(ie(i.id)){var c=[];e.forEach(h=>{ie(h)&&c.push(h)});var s=!0,o=!0,r=0,t=0;c.length>0?c.forEach(h=>{var M=p.filter(U=>U.id==h)[0];Z[M.id_abuelo_sub_categoria].actividades_economicas.forEach(U=>{c.includes(U)?r+=1:s=!1})}):s=!1;var g=[];p.forEach(h=>{h.id_padre_sub_categoria==i.id_padre_sub_categoria&&g.push(h.id)}),g.forEach(h=>{c.includes(h)?t+=1:o=!1});var d=document.getElementById("segmento_check_"+i.id_padre_sub_categoria),m=document.getElementById("sector_check_"+i.id_abuelo_sub_categoria);o?(f.push(i.id_padre_sub_categoria),d.classList.remove("check-minus")):(e=b(e,i.id_padre_sub_categoria),e=b(e,i.id_abuelo_sub_categoria),O(e),t>0?d.classList.add("check-minus"):d.classList.remove("check-minus"),r>0?m.classList.add("check-minus"):m.classList.remove("check-minus")),s&&f.push(i.id_abuelo_sub_categoria)}if(ee(i.id)){var _=[];e.forEach($=>{ee($)&&_.push($)});var s=!0,r=0;_.length>0?_.forEach($=>{var oi=p.filter(G=>G.id==$)[0];Z[oi.id_padre_sub_categoria].segmentos.forEach(G=>{_.includes(G)?r+=1:s=!1})}):s=!1;var m=document.getElementById("sector_check_"+i.id_padre_sub_categoria);s?(console.log("entro"),e.push(i.id_padre_sub_categoria)):(e=b(e,i.id_padre_sub_categoria),O(e),r>0?(m.classList.add("check-minus"),console.log("mas",r)):(m.classList.remove("check-minus"),console.log("menos")))}if(xe(i.id)){var m=document.getElementById("sector_check_"+i.id);m.classList.remove("check-minus")}},b=(e,i)=>{const c=e.indexOf(i);return c>-1&&e.splice(c,1),e},x=(e,i,c=null,s)=>(i.forEach(o=>{switch(s){case"add":e.push(o.id),c=="segmento"&&p.filter(t=>t.id_padre_sub_categoria==o.id).forEach(t=>{e.push(t.id)});break;case"remove":e=b(e,o.id),c=="segmento"&&p.filter(t=>t.id_padre_sub_categoria==o.id).forEach(t=>{e=b(e,t.id)});break}}),e),ke=e=>{if(e.target.value==""){Y(p),j([]),q([]),E([]),w([]);return}if(e.key==="Enter"){const t=new RegExp(e.target.value,"i"),g=p.filter(function(d){if(t.test(d.nombre)||e.target.value==d.id)return d});var i=[],c=[],s=[],o=[],r=[];g.forEach(d=>{if(d.id_abuelo_sub_categoria!=null&&d.id_padre_sub_categoria!=null){s.push(d);var m=p.filter(h=>h.id==d.id_padre_sub_categoria)[0];c.includes(m)||c.push(m),o.includes(d.id_padre_sub_categoria)||o.push(d.id_padre_sub_categoria);var _=p.filter(h=>h.id==d.id_abuelo_sub_categoria)[0];i.includes(_)||i.push(_),r.includes(d.id_abuelo_sub_categoria)||r.push(d.id_abuelo_sub_categoria)}if(d.id_abuelo_sub_categoria==null&&d.id_padre_sub_categoria!=null){c.includes(d)||c.push(d),o.includes(d.id)||o.push(d.id);var _=p.filter(M=>M.id==d.id_padre_sub_categoria)[0];i.includes(_)||i.push(_),r.includes(d.id_padre_sub_categoria)||r.push(d.id_padre_sub_categoria)}d.id_abuelo_sub_categoria==null&&d.id_padre_sub_categoria==null&&(i.includes(d)||i.push(d),r.includes(d.id)||r.push(d.id))}),Y(i),j(c),q(s),E(r),w(o)}},[B,hi]=n.exports.useState(Q),[ae,se]=n.exports.useState(Q),[k,P]=n.exports.useState([]),[mi,Ce]=n.exports.useState([]),[Ee,we]=n.exports.useState({id:0,nombre:""}),[z,D]=n.exports.useState([]),[_i,Le]=n.exports.useState([]),Te=e=>{k.includes(e)?P(k.filter(s=>s!=e)):P([...k,e]);const i=new RegExp(e,"i");ae.filter(function(s){if(i.test(s.id_padre_sub_categoria))return s}).forEach(s=>{if(!z.includes(s))z.push(s);else{const o=z.filter(r=>r.id_padre_sub_categoria!=e);D(o)}})},Be=e=>{we(e)},Pe=e=>{if(e.target.value==""){se(B),D([]),Le([]),P([]),Ce([]);return}if(e.key==="Enter"){const o=new RegExp(e.target.value,"i"),r=B.filter(function(t){if(o.test(t.nombre))return t});var i=[],c=[],s=[];r.forEach(t=>{t.id_padre_sub_categoria!=null?c.includes(t)||c.push(t):(i.includes(t)||i.push(t),s.includes(t.id_padre_sub_categoria)||s.push(t.id_padre_sub_categoria))}),c.forEach(t=>{var g=B.filter(d=>d.id==t.id_padre_sub_categoria)[0];i.includes(g)||i.push(B.filter(d=>d.id==t.id_padre_sub_categoria)[0]),s.includes(t.id_padre_sub_categoria)||s.push(t.id_padre_sub_categoria)}),se(i),D(c),P(s)}},[y,fi]=n.exports.useState(W),[ce,te]=n.exports.useState(W),[C,F]=n.exports.useState([]),[bi,ze]=n.exports.useState([]),[ye,Fe]=n.exports.useState({id:0,nombre:""}),[I,V]=n.exports.useState([]),[gi,Ie]=n.exports.useState([]),$e=e=>{C.includes(e)?F(C.filter(s=>s!=e)):F([...C,e]);const i=new RegExp(e,"i");ce.filter(function(s){if(i.test(s.id_padre_sub_categoria))return s}).forEach(s=>{if(!I.includes(s))I.push(s);else{const o=I.filter(r=>r.id_padre_sub_categoria!=e);V(o)}})},Ae=e=>{Fe(e)},Re=e=>{if(e.target.value==""){te(y),V([]),Ie([]),F([]),ze([]);return}if(e.key==="Enter"){const o=new RegExp(e.target.value,"i"),r=y.filter(function(t){if(o.test(t.nombre))return t});var i=[],c=[],s=[];r.forEach(t=>{t.id_padre_sub_categoria!=null?c.includes(t)||c.push(t):(i.includes(t)||i.push(t),s.includes(t.id_padre_sub_categoria)||s.push(t.id_padre_sub_categoria))}),c.forEach(t=>{var g=y.filter(d=>d.id==t.id_padre_sub_categoria)[0];i.includes(g)||i.push(y.filter(d=>d.id==t.id_padre_sub_categoria)[0]),s.includes(t.id_padre_sub_categoria)||s.push(t.id_padre_sub_categoria)}),te(i),V(c),F(s)}},[Oe,oe]=n.exports.useState(!0),[je,H]=n.exports.useState(!1),[qe,ne]=n.exports.useState(!1),[De,Ve]=n.exports.useState(!1),[He,de]=n.exports.useState(!0),[Ke,K]=n.exports.useState(!1),[Me,re]=n.exports.useState(!1),[Ue,le]=n.exports.useState(!1),[Ge,Je]=n.exports.useState(!0),[Qe,ue]=n.exports.useState(!1),[We,Xe]=n.exports.useState(!1),Ye=()=>{oe(!1),de(!1),H(!0),K(!0),le(!0),Je(!1),ue(!0)},Ze=()=>{console.log("paso3"),ue(!1),Xe(!0),H(!1),K(!1),re(!0),ne(!0)},ei=()=>{console.log("paso4"),re(!1),ne(!1),Ve(!0)},ii=()=>{oe(!0),H(!1),le(!1),de(!0),K(!1)},[pe,ai]=n.exports.useState(0),[si,he]=n.exports.useState(!1),[me,ci]=n.exports.useState(!0),_e=e=>{var i=e.target.value;i=ti(i),ai("$ "+new Intl.NumberFormat().format(i))},ti=e=>(e=e.replace(" ",""),e=e.replace("$",""),e=e.replace(",",""),e=e.replace(".",""),e==""?(e=0,he(!1)):he(!0),parseInt(e));return l(u,{children:[a(ni,{position:"bottom-start",children:a(di,{onClose:()=>X(!1),show:fe,delay:3e3,autohide:!0,children:l("div",{className:`notification-toast ${A=="icon-error"?"error":"success"}`,children:[a("span",{className:`toast-icon ${A=="icon-error"?"toast-danger":"toast-success"}`,children:a("span",{className:A})}),a("p",{className:"title",children:be}),a("button",{type:"button",className:"icon-close m-auto",onClick:()=>X(!1)})]})})}),a("div",{className:"contenedor-planes",children:l("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[l("h2",{className:"perfiles-titulos crear",children:[a("span",{className:"c-verde",children:"Crea"})," tu primer perfil de negocio"]}),a("div",{className:"container mt-4",children:a("div",{className:"tree_categorias tree_1",children:l("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[l("div",{className:"perfil-guias__indicador perfil-guias__indicador--activo",children:[a("i",{className:"icon-Paso-1-click",children:" "})," ",a("span",{children:"Actividad económica"}),a("i",{className:"icon-Paso-2-click",id:"pleft2"})," ",a("span",{children:"Tipo de compra"}),a("i",{className:"icon-Paso-3-click",id:"pleft2"})," ",a("span",{children:"Localizaciones"}),a("i",{className:"icon-Paso-4-click",id:"pleft2"})," ",a("span",{children:"Rango de Cuantía"})]}),l("div",{className:"mx-60 mt-30 d-flex",children:[He&&l(u,{children:[a("button",{button:!0,type:"button",className:"icon-Buscar-click"}),a("input",{type:"text",placeholder:"Busca por actividad económica o UNSPSC",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:ke})]}),Ke&&a(u,{children:a("input",{type:"text",placeholder:"Buscar tipo de compra",autoComplete:"off",className:"form-control m-auto",onKeyDown:Pe})}),Me&&a(u,{children:a("input",{type:"text",placeholder:"Buscar localizacion",autoComplete:"off",className:"form-control m-auto",onKeyDown:Re})}),l("h2",{className:"perfiles-titulos d-flex",children:[" ","Pais de contratación",a("img",{className:"bandera",src:"/public/images/banderas/listado_nombres/CHL.svg",alt:"Bandera Chile"})]})]}),a("br",{}),a(u,{children:Oe&&a("ul",{className:"tree-root",children:R.map(e=>a(u,{children:e.id_padre_sub_categoria==null&&l("li",{className:`tree-node has-child draggable ${v.includes(e.id)?"expanded":""}`,id:"sector_"+e.id,children:[l("div",{id:e.id,className:"tree-content mt-3 sector",children:[a("i",{className:`tree-arrow has-child ${e.childs.length>0?"bi bi-chevron-down":""}`}),a("input",{id:"sector_check_"+e.id,type:"checkbox",name:"actividad_economica",onChange:()=>N(e),checked:f.includes(e.id)?"checked":""}),a("span",{className:"tree-anchor",children:a("span",{className:"tree-division tree-division1",onClick:()=>ve(e.id),children:a("span",{className:"tree-division__title my-auto",children:e.nombre})})})]},e.id),v.includes(e.id)&&a("ul",{className:"tree-children new-class",children:L.map((i,c)=>a(u,{children:e.id==i.id_padre_sub_categoria&&l("li",{className:`tree-node has-child draggable segmento ${S.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:[l("div",{className:"tree-content segmento",children:[a("i",{className:"tree-arrow expanded has-child ltr"}),a("input",{id:"segmento_check_"+i.id,type:"checkbox",name:"actividad_economica",onChange:()=>N(i),checked:f.includes(i.id)?"checked":""}),a("span",{className:"tree-anchor",children:a("span",{className:"tree-division tree-division1",onClick:()=>Ne(i.id),children:a(u,{children:c%2==0?a("span",{className:"tree-division__title my-auto",children:i.nombre}):a("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]}),S.includes(i.id)&&a("ul",{className:"tree-children actividad-economica",children:T.map((s,o)=>a(u,{children:i.id==s.id_padre_sub_categoria&&a("li",{className:"tree-node draggable",children:l("div",{className:"tree-content actividad-economica",onClick:()=>N(s),children:[a("input",{type:"checkbox",name:"actividad_economica",onChange:()=>N(s),checked:f.includes(s.id)?"checked":""}),a("span",{className:"tree-anchor children",children:a("span",{className:"tree-division tree-division1",children:a(u,{children:a("span",{className:"tree-division__title my-auto",children:s.nombre})})})})]})})}))})]})}))})]})}))})}),a(u,{children:je&&a("ul",{className:"tree-root",children:ae.map(e=>a(u,{children:e.id_padre_sub_categoria==null&&l("li",{className:`tree-node has-child draggable ${v.includes(e.id)?"expanded":""}`,id:"sector_"+e.id,children:[l("div",{id:e.id,className:"tree-content mt-3 sector",children:[a("i",{className:`tree-arrow has-child ${e.childs.length>0?"bi bi-chevron-down":""}`}),a("input",{type:"checkbox",name:"actividad_economica",onChange:()=>N(e),checked:f.includes(e.id)?"checked":""}),a("span",{className:"tree-anchor",children:a("span",{className:"tree-division tree-division1",onClick:()=>Te(e.id),children:a("span",{className:"tree-division__title my-auto",children:e.nombre})})})]},e.id),k.includes(e.id)&&a("ul",{className:"tree-children new-class",children:z.map((i,c)=>a(u,{children:e.id==i.id_padre_sub_categoria&&a("li",{className:`tree-node has-child draggable segmento ${k.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:l("div",{className:"tree-content segmento",children:[a("i",{className:"tree-arrow expanded has-child ltr"}),a("input",{type:"checkbox",name:"tipo_compra",onClick:()=>Be(i),checked:i.id==Ee.id?"checked":""}),a("span",{className:"tree-anchor",children:a("span",{className:"tree-division tree-division1",children:a(u,{children:c%2==0?a("span",{className:"tree-division__title my-auto",children:i.nombre}):a("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})}),a(u,{children:qe&&a("ul",{className:"tree-root",children:ce.map(e=>a(u,{children:e.id_padre_sub_categoria==null&&l("li",{className:`tree-node has-child draggable ${v.includes(e.id)?"expanded":""}`,id:"sector_"+e.id,children:[l("div",{id:e.id,className:"tree-content mt-3 sector",children:[a("i",{className:`tree-arrow has-child ${e.childs.length>0?"bi bi-chevron-down":""}`}),a("input",{type:"checkbox",name:"actividad_economica",onChange:()=>N(e),checked:f.includes(e.id)?"checked":""}),a("span",{className:"tree-anchor",children:a("span",{className:"tree-division tree-division1",onClick:()=>$e(e.id),children:a("span",{className:"tree-division__title my-auto",children:e.nombre})})})]},e.id),C.includes(e.id)&&a("ul",{className:"tree-children new-class",children:I.map((i,c)=>a(u,{children:e.id==i.id_padre_sub_categoria&&a("li",{className:`tree-node has-child draggable segmento ${C.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:l("div",{className:"tree-content segmento",children:[a("i",{className:"tree-arrow expanded has-child ltr"}),a("input",{type:"checkbox",name:"tipo_compra",onClick:()=>Ae(i),checked:i.id==ye.id?"checked":""}),a("span",{className:"tree-anchor",children:a("span",{className:"tree-division tree-division1",children:a(u,{children:c%2==0?a("span",{className:"tree-division__title my-auto",children:i.nombre}):a("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})}),a(u,{children:De&&l("div",{className:"perfil-cuantias",children:[l("div",{id:"campos-cuantias",className:"justify-content-center pt-2 pb-5 py-md-5 row",children:[a("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:l("div",{className:"form-group mb-5 mb-md-1 campos-cuantias__form",children:[l("span",{className:"icon-Cuantia campos-cuantias__icon",children:[a("span",{className:"path1"}),a("span",{className:"path2"}),a("span",{className:"path3"}),a("span",{className:"path4"})]}),a("label",{children:"Cuantía desde:"}),a("input",{value:pe,onChange:_e,type:"text",id:"cuantia_desde",name:"cuantia_desde",placeholder:"$",className:"form-control inputs_form"})]})}),a("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:l("div",{className:"form-group campos-cuantias__form",children:[l("span",{className:"icon-Cuantia-2 campos-cuantias__icon",children:[a("span",{className:"path1"}),a("span",{className:"path2"}),a("span",{className:"path3"}),a("span",{className:"path4"})]}),a("label",{id:"descripcion",children:"Cuantía hasta:"}),a("input",{value:pe,onChange:_e,type:"text",id:"cuantia_hasta",name:"cuantia_hasta",placeholder:"Sin limite superior",className:"form-control inputs_form"})]})})]}),si&&l("div",{class:"align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row",children:[a("div",{class:"col-8 p-0",children:l("p",{children:["¿Deseas incluir contratos"," ",a("span",{class:"text_color",children:"sin presupuesto asignado"})," ","o con cuantía de"," ",a("span",{class:"text_color",children:"$0"})," ","en este perfil?"]})}),a("div",{class:"col-3 text-center",children:l("label",{class:"switch",children:[a("input",{type:"checkbox",checked:me,onClick:()=>ci(!me)}),a("span",{class:"slider round"})]})})]})]})})]})})}),l("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:[a(u,{children:Ge&&a("a",{onClick:Ye,className:"btn btnRadius btn-new-blue",children:a("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),a(u,{children:Qe&&a("a",{onClick:Ze,className:"btn btnRadius btn-new-blue",children:a("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),a(u,{children:We&&a("a",{onClick:ei,className:"btn btnRadius btn-new-blue",children:a("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),a(u,{children:Ue&&a("a",{onClick:ii,className:"btn btnRadius btn-new-blue",children:a("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Volver"})})})]})]})})]})};export{Ti as default};
