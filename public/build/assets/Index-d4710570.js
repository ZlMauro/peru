import{r as n,j as r,F as l,a as e}from"./app-ddf0c740.js";import"./AuthenticatedLayout-53d213e5.js";/* empty css                      */import{T as Xe,a as Ye}from"./estilos-toast-5abdb81e.js";/* empty css                      *//* empty css                 */import"./transition-f933df1b.js";import"./createWithBsPrefix-c73eeb9c.js";import"./CloseButton-daadbe5e.js";const ga=({auth:Ze,actividades_economicas:D,tiposcompras:H,localizaciones:K})=>{const[de,M]=n.exports.useState(!1),[re,ea]=n.exports.useState(""),[F,aa]=n.exports.useState(""),[p,ia]=n.exports.useState(D),[$,U]=n.exports.useState(D),[h,C]=n.exports.useState([]),[b,k]=n.exports.useState([]),[m,le]=n.exports.useState([]),[w,A]=n.exports.useState([]),[E,R]=n.exports.useState([]),ue=a=>{var i=document.getElementById("sector_"+a);i.classList.toggle("expanded"),h.includes(a)?C(h.filter(t=>t!=a)):C([...h,a]);const o=new RegExp(a,"i");$.filter(function(t){if(o.test(t.id_padre_sub_categoria))return t}).forEach(t=>{if(!w.includes(t))w.push(t);else{const u=w.filter(c=>c.id_padre_sub_categoria!=a);A(u)}})},pe=a=>{var i=document.getElementById("segmento_"+a);i.classList.toggle("expanded"),b.includes(a)?k(b.filter(t=>t!=a)):k([...b,a]);const o=new RegExp(a,"i");$.filter(function(t){if(o.test(t.id_padre_sub_categoria))return t}).forEach(t=>{if(!E.includes(t))E.push(t);else{const u=E.filter(c=>c.id_padre_sub_categoria!=a);R(u)}})},_=a=>{var i=[];m.forEach(t=>{i.push(t)});var o=p.filter(t=>t.id_padre_sub_categoria==a.id&&t.id_abuelo_sub_categoria==null);if(o.length>0)i.includes(a.id)?(i=g(i,a),i=f(i,o,"segmento","remove")):(i.push(a.id),i=f(i,o,"segmento","remove"),i=f(i,o,"segmento","add"));else{var s=p.filter(t=>t.id_padre_sub_categoria==a.id);s.length>0?i.includes(a.id)?(i=g(i,a),i=f(i,s,"actividad_economica","remove")):(i.push(a.id),i=f(i,s,"actividades_economicas","remove"),i=f(i,s,"actividad_economica","add")):i.includes(a.id)?i=g(i,a):i.push(a.id)}le(i)},g=(a,i)=>{const o=a.indexOf(i.id);return o>-1&&a.splice(o,1),a},f=(a,i,o=null,s)=>(i.forEach(t=>{switch(s){case"add":a.push(t.id),o=="segmento"&&p.filter(c=>c.id_padre_sub_categoria==t.id).forEach(c=>{a.push(c.id)});break;case"remove":a=g(a,t),o=="segmento"&&p.filter(c=>c.id_padre_sub_categoria==t.id).forEach(c=>{a=g(a,c)});break}}),a),he=a=>{if(a.target.value==""){U(p),A([]),R([]),C([]),k([]);return}if(a.key==="Enter"){const c=new RegExp(a.target.value,"i"),x=p.filter(function(d){if(c.test(d.nombre)||a.target.value==d.id)return d});var i=[],o=[],s=[],t=[],u=[];x.forEach(d=>{if(d.id_abuelo_sub_categoria!=null&&d.id_padre_sub_categoria!=null){s.push(d);var ne=p.filter(j=>j.id==d.id_padre_sub_categoria)[0];o.includes(ne)||o.push(ne),t.includes(d.id_padre_sub_categoria)||t.push(d.id_padre_sub_categoria);var S=p.filter(j=>j.id==d.id_abuelo_sub_categoria)[0];i.includes(S)||i.push(S),u.includes(d.id_abuelo_sub_categoria)||u.push(d.id_abuelo_sub_categoria)}if(d.id_abuelo_sub_categoria==null&&d.id_padre_sub_categoria!=null){o.includes(d)||o.push(d),t.includes(d.id)||t.push(d.id);var S=p.filter(We=>We.id==d.id_padre_sub_categoria)[0];i.includes(S)||i.push(S),u.includes(d.id_padre_sub_categoria)||u.push(d.id_padre_sub_categoria)}d.id_abuelo_sub_categoria==null&&d.id_padre_sub_categoria==null&&(i.includes(d)||i.push(d),u.includes(d.id)||u.push(d.id))}),U(i),A(o),R(s),C(u),k(t)}},[y,sa]=n.exports.useState(H),[G,J]=n.exports.useState(H),[v,T]=n.exports.useState([]),[ca,me]=n.exports.useState([]),[_e,fe]=n.exports.useState({id:0,nombre:""}),[L,I]=n.exports.useState([]),[ta,be]=n.exports.useState([]),ge=a=>{v.includes(a)?T(v.filter(s=>s!=a)):T([...v,a]);const i=new RegExp(a,"i");G.filter(function(s){if(i.test(s.id_padre_sub_categoria))return s}).forEach(s=>{if(!L.includes(s))L.push(s);else{const t=L.filter(u=>u.id_padre_sub_categoria!=a);I(t)}})},ve=a=>{fe(a)},Ne=a=>{if(a.target.value==""){J(y),I([]),be([]),T([]),me([]);return}if(a.key==="Enter"){const t=new RegExp(a.target.value,"i"),u=y.filter(function(c){if(t.test(c.nombre))return c});var i=[],o=[],s=[];u.forEach(c=>{c.id_padre_sub_categoria!=null?o.includes(c)||o.push(c):(i.includes(c)||i.push(c),s.includes(c.id_padre_sub_categoria)||s.push(c.id_padre_sub_categoria))}),o.forEach(c=>{var x=y.filter(d=>d.id==c.id_padre_sub_categoria)[0];i.includes(x)||i.push(y.filter(d=>d.id==c.id_padre_sub_categoria)[0]),s.includes(c.id_padre_sub_categoria)||s.push(c.id_padre_sub_categoria)}),J(i),I(o),T(s)}},[P,oa]=n.exports.useState(K),[Q,W]=n.exports.useState(K),[N,z]=n.exports.useState([]),[na,xe]=n.exports.useState([]),[Se,Ce]=n.exports.useState({id:0,nombre:""}),[B,O]=n.exports.useState([]),[da,ke]=n.exports.useState([]),we=a=>{N.includes(a)?z(N.filter(s=>s!=a)):z([...N,a]);const i=new RegExp(a,"i");Q.filter(function(s){if(i.test(s.id_padre_sub_categoria))return s}).forEach(s=>{if(!B.includes(s))B.push(s);else{const t=B.filter(u=>u.id_padre_sub_categoria!=a);O(t)}})},Ee=a=>{Ce(a)},ye=a=>{if(a.target.value==""){W(P),O([]),ke([]),z([]),xe([]);return}if(a.key==="Enter"){const t=new RegExp(a.target.value,"i"),u=P.filter(function(c){if(t.test(c.nombre))return c});var i=[],o=[],s=[];u.forEach(c=>{c.id_padre_sub_categoria!=null?o.includes(c)||o.push(c):(i.includes(c)||i.push(c),s.includes(c.id_padre_sub_categoria)||s.push(c.id_padre_sub_categoria))}),o.forEach(c=>{var x=P.filter(d=>d.id==c.id_padre_sub_categoria)[0];i.includes(x)||i.push(P.filter(d=>d.id==c.id_padre_sub_categoria)[0]),s.includes(c.id_padre_sub_categoria)||s.push(c.id_padre_sub_categoria)}),W(i),O(o),z(s)}},[Te,X]=n.exports.useState(!0),[Le,q]=n.exports.useState(!1),[Pe,Y]=n.exports.useState(!1),[ze,Be]=n.exports.useState(!1),[Fe,Z]=n.exports.useState(!0),[$e,V]=n.exports.useState(!1),[Ae,ee]=n.exports.useState(!1),[Re,ae]=n.exports.useState(!1),[Ie,Oe]=n.exports.useState(!0),[qe,ie]=n.exports.useState(!1),[Ve,je]=n.exports.useState(!1),De=()=>{X(!1),Z(!1),q(!0),V(!0),ae(!0),Oe(!1),ie(!0)},He=()=>{console.log("paso3"),ie(!1),je(!0),q(!1),V(!1),ee(!0),Y(!0)},Ke=()=>{console.log("paso4"),ee(!1),Y(!1),Be(!0)},Me=()=>{X(!0),q(!1),ae(!1),Z(!0),V(!1)},[se,Ue]=n.exports.useState(0),[Ge,ce]=n.exports.useState(!1),[te,Je]=n.exports.useState(!0),oe=a=>{var i=a.target.value;i=Qe(i),Ue("$ "+new Intl.NumberFormat().format(i))},Qe=a=>(a=a.replace(" ",""),a=a.replace("$",""),a=a.replace(",",""),a=a.replace(".",""),a==""?(a=0,ce(!1)):ce(!0),parseInt(a));return r(l,{children:[e(Xe,{position:"bottom-start",children:e(Ye,{onClose:()=>M(!1),show:de,delay:3e3,autohide:!0,children:r("div",{className:`notification-toast ${F=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${F=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:F})}),e("p",{className:"title",children:re}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>M(!1)})]})})}),e("div",{className:"contenedor-planes",children:r("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[r("h2",{className:"perfiles-titulos crear",children:[e("span",{className:"c-verde",children:"Crea"})," tu primer perfil de negocio"]}),e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:r("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[r("div",{className:"perfil-guias__indicador perfil-guias__indicador--activo",children:[e("i",{className:"icon-Paso-1-click",children:" "})," ",e("span",{children:"Actividad económica"}),e("i",{className:"icon-Paso-2-click",id:"pleft2"})," ",e("span",{children:"Tipo de compra"}),e("i",{className:"icon-Paso-3-click",id:"pleft2"})," ",e("span",{children:"Localizaciones"}),e("i",{className:"icon-Paso-4-click",id:"pleft2"})," ",e("span",{children:"Rango de Cuantía"})]}),r("div",{className:"mx-60 mt-30 d-flex",children:[Fe&&r(l,{children:[e("button",{button:!0,type:"button",className:"icon-Buscar-click"}),e("input",{type:"text",placeholder:"Busca por actividad económica o UNSPSC",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:he})]}),$e&&e(l,{children:e("input",{type:"text",placeholder:"Buscar tipo de compra",autoComplete:"off",className:"form-control m-auto",onKeyDown:Ne})}),Ae&&e(l,{children:e("input",{type:"text",placeholder:"Buscar localizacion",autoComplete:"off",className:"form-control m-auto",onKeyDown:ye})}),r("h2",{className:"perfiles-titulos d-flex",children:[" ","Pais de contratación",e("img",{className:"bandera",src:"/public/images/banderas/listado_nombres/CHL.svg",alt:"Bandera Chile"})]})]}),e("br",{}),e(l,{children:Te&&e("ul",{className:"tree-root",children:$.map(a=>e(l,{children:a.id_padre_sub_categoria==null&&r("li",{className:`tree-node has-child draggable ${h.includes(a.id)?"expanded":""}`,id:"sector_"+a.id,children:[r("div",{id:a.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>_(a),checked:m.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>ue(a.id),children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),h.includes(a.id)&&e("ul",{className:"tree-children new-class",children:w.map((i,o)=>e(l,{children:a.id==i.id_padre_sub_categoria&&r("li",{className:`tree-node has-child draggable segmento ${b.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:[r("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>_(i),checked:m.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>pe(i.id),children:e(l,{children:o%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]}),b.includes(i.id)&&e("ul",{className:"tree-children actividad-economica",children:E.map((s,t)=>e(l,{children:i.id==s.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:r("div",{className:"tree-content actividad-economica",onClick:()=>_(s),children:[e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>_(s),checked:m.includes(s.id)?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(l,{children:e("span",{className:"tree-division__title my-auto",children:s.nombre})})})})]})})}))})]})}))})]})}))})}),e(l,{children:Le&&e("ul",{className:"tree-root",children:G.map(a=>e(l,{children:a.id_padre_sub_categoria==null&&r("li",{className:`tree-node has-child draggable ${h.includes(a.id)?"expanded":""}`,id:"sector_"+a.id,children:[r("div",{id:a.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>_(a),checked:m.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>ge(a.id),children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),v.includes(a.id)&&e("ul",{className:"tree-children new-class",children:L.map((i,o)=>e(l,{children:a.id==i.id_padre_sub_categoria&&e("li",{className:`tree-node has-child draggable segmento ${v.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:r("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"checkbox",name:"tipo_compra",onClick:()=>ve(i),checked:i.id==_e.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(l,{children:o%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})}),e(l,{children:Pe&&e("ul",{className:"tree-root",children:Q.map(a=>e(l,{children:a.id_padre_sub_categoria==null&&r("li",{className:`tree-node has-child draggable ${h.includes(a.id)?"expanded":""}`,id:"sector_"+a.id,children:[r("div",{id:a.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>_(a),checked:m.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>we(a.id),children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),N.includes(a.id)&&e("ul",{className:"tree-children new-class",children:B.map((i,o)=>e(l,{children:a.id==i.id_padre_sub_categoria&&e("li",{className:`tree-node has-child draggable segmento ${N.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:r("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"checkbox",name:"tipo_compra",onClick:()=>Ee(i),checked:i.id==Se.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(l,{children:o%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})}),e(l,{children:ze&&r("div",{className:"perfil-cuantias",children:[r("div",{id:"campos-cuantias",className:"justify-content-center pt-2 pb-5 py-md-5 row",children:[e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:r("div",{className:"form-group mb-5 mb-md-1 campos-cuantias__form",children:[r("span",{className:"icon-Cuantia campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{children:"Cuantía desde:"}),e("input",{value:se,onChange:oe,type:"text",id:"cuantia_desde",name:"cuantia_desde",placeholder:"$",className:"form-control inputs_form"})]})}),e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:r("div",{className:"form-group campos-cuantias__form",children:[r("span",{className:"icon-Cuantia-2 campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{id:"descripcion",children:"Cuantía hasta:"}),e("input",{value:se,onChange:oe,type:"text",id:"cuantia_hasta",name:"cuantia_hasta",placeholder:"Sin limite superior",className:"form-control inputs_form"})]})})]}),Ge&&r("div",{class:"align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row",children:[e("div",{class:"col-8 p-0",children:r("p",{children:["¿Deseas incluir contratos"," ",e("span",{class:"text_color",children:"sin presupuesto asignado"})," ","o con cuantía de"," ",e("span",{class:"text_color",children:"$0"})," ","en este perfil?"]})}),e("div",{class:"col-3 text-center",children:r("label",{class:"switch",children:[e("input",{type:"checkbox",checked:te,onClick:()=>Je(!te)}),e("span",{class:"slider round"})]})})]})]})})]})})}),r("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:[e(l,{children:Ie&&e("a",{onClick:De,className:"btn btnRadius btn-new-blue",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(l,{children:qe&&e("a",{onClick:He,className:"btn btnRadius btn-new-blue",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(l,{children:Ve&&e("a",{onClick:Ke,className:"btn btnRadius btn-new-blue",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(l,{children:Re&&e("a",{onClick:Me,className:"btn btnRadius btn-new-blue",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Volver"})})})]})]})})]})};export{ga as default};
