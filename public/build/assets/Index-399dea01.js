import{j as t,a as e,H as X,r as d,F as O}from"./app-ef2ff9b2.js";import{A as ae}from"./AuthenticatedLayout-ff38b34c.js";import{$ as T,P as ie,L as te}from"./Loader-fc31c99c.js";import{M as H}from"./Modal-55dea3c6.js";import{F as q}from"./Form-c46616a2.js";/* empty css                      *//* empty css                 *//* empty css              */import"./ApplicationLogo-c815b16b.js";import"./ApplicationLogoLici-a53e0000.js";import"./AuthenticatedLayout-e83d4972.js";import"./transition-a92235d8.js";import"./createWithBsPrefix-d4b45b03.js";import"./CloseButton-0626eacc.js";import"./hasClass-a458bf09.js";import"./ElementChildren-3a61371a.js";function se({type:S="submit",className:_="",processing:h,children:v,onClick:x}){return t("button",{style:{backgroundColor:"#57C700"},type:S,onClick:x,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+_,disabled:h,children:[v,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function ne({type:S="submit",className:_="",processing:h,children:v,onClick:x}){return t("button",{style:{backgroundColor:"#57C700"},type:S,onClick:x,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+_,disabled:h,children:[v,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const ce=S=>e("a",{href:S.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function de({type:S="submit",className:_="",processing:h,children:v,onClick:x}){return t("button",{style:{backgroundColor:"#57C700"},type:S,onClick:x,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+_,disabled:h,children:[v,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function oe({type:S="submit",className:_="",processing:h,children:v,onClick:x}){return t("button",{style:{backgroundColor:"#57C700"},type:S,onClick:x,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+_,disabled:h,children:[v,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function re({type:S="submit",className:_="",processing:h,children:v,onClick:x}){return t("button",{style:{backgroundColor:"#57C700"},type:S,onClick:x,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+_,disabled:h,children:[v,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const le=({showBusquedaEstado:S,handleCloseBusquedaEstado:_})=>t(H,{size:"md",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:S,onHide:_,id:"BusquedaEstado",children:[t(H.Header,{closeButton:!0,children:[e(X,{title:"Busqueda estado"}),e("div",{className:"titulo",children:e("span",{children:"Seleciona el estado"})})]}),e(H.Body,{children:t("div",{className:"busqueda-estado",children:[e("div",{children:e("input",{type:"text",className:"buscador",placeholder:"Buscar estado"})}),e("div",{children:e(q,{children:t("div",{className:"form",children:[t(q.Group,{children:[t(q.Check,{className:"todos",children:[e(q.Check.Label,{children:"Seleciona todos los estados"}),e(q.Check.Input,{"aria-label":"todos"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Convocatoria"}),e(q.Check.Input,{"aria-label":"convocatoria"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"En evaluacion"}),e(q.Check.Input,{"aria-label":"evaluacion"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Adjudicado"}),e(q.Check.Input,{"aria-label":"adjudicado"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Liquidado"}),e(q.Check.Input,{"aria-label":"liquidado"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Terminado anormalmente o descartado"}),e(q.Check.Input,{"aria-label":"terminado"})]}),e("hr",{})]}),e("button",{type:"submit",className:"boton",children:"Seleccionar"})]})})})]})})]});const ue=({showBusquedaUbicacion:S,handleCloseBusquedaUbicacion:_})=>{d.exports.useEffect(()=>{fetch("/localizacion/json").then(s=>s.json()).then(s=>N(s)).catch(s=>console.log("Solicitud fallida",s))},[]);const[h,v]=d.exports.useState([]),[x,N]=d.exports.useState([]),[z,I]=d.exports.useState([]),[R,F]=d.exports.useState([]),[E,L]=d.exports.useState([]),[k,A]=d.exports.useState([]),[U,P]=d.exports.useState([]),$=s=>{var i=document.getElementById("sector_"+s);i.classList.toggle("expanded"),z.includes(s)?I(z.filter(r=>r!=s)):I([...z,s]);const a=new RegExp(s,"i");x.filter(function(r){if(a.test(r.id_padre_sub_categoria))return r}).forEach(r=>{if(!k.includes(r))k.push(r);else{const c=k.filter(b=>b.id_padre_sub_categoria!=s);A(c)}})},j=(s,i,a=null,p)=>(i.forEach(r=>{switch(p){case"add":s.push(r.id),a=="segmento"&&h.filter(b=>b.id_padre_sub_categoria==r.id).forEach(b=>{s.push(b.id)});break;case"remove":s=u(s,r),a=="segmento"&&h.filter(b=>b.id_padre_sub_categoria==r.id).forEach(b=>{s=u(s,b)});break}}),s),M=s=>{var i=[];E.forEach(r=>{i.push(r)});var a=h.filter(r=>r.id_padre_sub_categoria==s.id&&r.id_abuelo_sub_categoria==null);if(a.length>0)i.includes(s.id)?(i=u(i,s),i=j(i,a,"segmento","remove")):(i.push(s.id),i=j(i,a,"segmento","remove"),i=j(i,a,"segmento","add"));else{var p=h.filter(r=>r.id_padre_sub_categoria==s.id);p.length>0?i.includes(s.id)?(i=u(i,s),i=j(i,p,"actividad_economica","remove")):(i.push(s.id),i=j(i,p,"actividad_economica","add")):i.includes(s.id)?i=u(i,s):i.push(s.id)}L(i)},u=(s,i)=>{const a=s.indexOf(i.id);return a>-1&&s.splice(a,1),s},l=s=>{if(s.target.value==""){N(h),A([]),P([]),I([]),F([]);return}if(s.key==="Enter"){const b=new RegExp(s.target.value,"i"),C=h.filter(function(n){if(b.test(n.nombre)||s.target.value==n.id)return n});var i=[],a=[],p=[],r=[],c=[];C.forEach(n=>{if(n.id_abuelo_sub_categoria!=null&&n.id_padre_sub_categoria!=null){p.push(n);var y=h.filter(m=>m.id==n.id_padre_sub_categoria)[0];a.includes(y)||a.push(y),r.includes(n.id_padre_sub_categoria)||r.push(n.id_padre_sub_categoria);var B=h.filter(m=>m.id==n.id_abuelo_sub_categoria)[0];i.includes(B)||i.push(B),c.includes(n.id_abuelo_sub_categoria)||c.push(n.id_abuelo_sub_categoria)}if(n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria!=null){a.includes(n)||a.push(n),r.includes(n.id)||r.push(n.id);var B=h.filter(w=>w.id==n.id_padre_sub_categoria)[0];i.includes(B)||i.push(B),c.includes(n.id_padre_sub_categoria)||c.push(n.id_padre_sub_categoria)}n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria==null&&(i.includes(n)||i.push(n),c.includes(n.id)||c.push(n.id))}),N(i),A(a),P(p),I(c),F(r)}};return e(H,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:S,onHide:_,id:"BusquedaUbicacion",children:t(O,{children:[e(H.Header,{closeButton:!0,className:"header",children:e("h2",{className:"name_section_app",children:"Seleccione la ubicacion"})}),e(H.Body,{className:"contenedor-planes",id:"",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Buscar por ubicacion",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:l})}),e("br",{}),e("ul",{className:"tree-root",children:x.map(s=>e(O,{children:s.id_padre_sub_categoria==null&&t("li",{className:`tree-node has-child draggable ${z.includes(s.id)?"expanded":""}`,id:"sector_"+s.id,children:[t("div",{id:s.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${s.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>M(s),checked:E.includes(s.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>$(s.id),children:e("span",{className:"tree-division__title my-auto",children:s.nombre})})})]},s.id),z.includes(s.id)&&e("ul",{className:"tree-children new-class",children:k.map((i,a)=>e(O,{children:s.id==i.id_padre_sub_categoria&&e("li",{className:`tree-node has-child draggable segmento ${R.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>M(i),checked:E.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(O,{children:a%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})})};const he=({showBusquedaActividad:S,handleCloseBusquedaActividad:_})=>{d.exports.useEffect(()=>{fetch("/actividades-economicas/json").then(i=>i.json()).then(i=>N(i)).catch(i=>console.log("Solicitud fallida",i))},[]),d.exports.useState(!1),d.exports.useState(""),d.exports.useState("");const[h,v]=d.exports.useState([]),[x,N]=d.exports.useState([]);d.exports.useState(!1),d.exports.useState(!1),d.exports.useState(0);const[z,I]=d.exports.useState(0),[R,F]=d.exports.useState([]),[E,L]=d.exports.useState([]);d.exports.useState({id:0,nombre:""});const[k,A]=d.exports.useState([]),[U,P]=d.exports.useState([]),[$,j]=d.exports.useState([]),M=i=>{var a=document.getElementById("sector_"+i);a.classList.toggle("expanded"),R.includes(i)?F(R.filter(c=>c!=i)):F([...R,i]);const p=new RegExp(i,"i");x.filter(function(c){if(p.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!U.includes(c))U.push(c);else{const b=U.filter(C=>C.id_padre_sub_categoria!=i);P(b)}})},u=i=>{var a=document.getElementById("segmento_"+i);a.classList.toggle("expanded"),E.includes(i)?L(E.filter(c=>c!=i)):L([...E,i]);const p=new RegExp(i,"i");x.filter(function(c){if(p.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!$.includes(c))$.push(c);else{const b=$.filter(C=>C.id_padre_sub_categoria!=i);j(b)}}),I(i)},l=i=>{var a=[];k.forEach(c=>{a.push(c)});var p=h.filter(c=>c.id_padre_sub_categoria==i.id&&c.id_abuelo_sub_categoria==null);if(p.length>0){if(!a.includes(i.id))a.push(i.id);else{const c=a.indexOf(i.id);c>-1&&a.splice(c,1)}p.forEach(c=>{const b=h.filter(C=>C.id_padre_sub_categoria==c.id);if(!k.includes(c.id))a.push(c.id),b.forEach(C=>{if(!k.includes(C.id))a.push(C.id);else{const n=a.indexOf(C.id);n>-1&&a.splice(n,1)}});else{const C=a.indexOf(c.id);C>-1&&a.splice(C,1),b.forEach(n=>{const y=a.indexOf(n.id);y>-1&&a.splice(y,1)})}A(a)})}else{var r=h.filter(c=>c.id_padre_sub_categoria==i.id);if(r.length>0){if(!a.includes(i.id))a.push(i.id);else{const c=a.indexOf(i.id);c>-1&&a.splice(c,1)}r.forEach(c=>{if(!k.includes(c.id))a.push(c.id);else{const b=a.indexOf(c.id);b>-1&&a.splice(b,1)}A(a)})}else{if(!a.includes(i.id))a.push(i.id);else{const c=a.indexOf(i.id);c>-1&&a.splice(c,1)}A(a)}}},s=i=>{if(i.target.value==""){N(h),P([]),j([]),F([]),L([]);return}if(i.key==="Enter"){const y=new RegExp(i.target.value,"i"),B=h.filter(function(m){if(y.test(m.nombre))return m});var a=[],p=[],r=[],c=[],b=[];B.forEach(m=>{m.id_abuelo_sub_categoria!=null&&m.id_padre_sub_categoria!=null&&(r.push(m),c.push(m.id_padre_sub_categoria),p.push(h.filter(w=>w.id==m.id_padre_sub_categoria)[0]),b.push(m.id_abuelo_sub_categoria)),m.id_abuelo_sub_categoria==null&&m.id_padre_sub_categoria!=null&&(p.includes(m)||(p.push(m),p.push(m)),b.includes(m.id_padre_sub_categoria)||(b.push(m.id_padre_sub_categoria),p.push(m))),m.id_abuelo_sub_categoria==null&&m.id_padre_sub_categoria==null&&a.push(m)});var C=null,n=null;r.forEach(m=>{C=h.filter(w=>w.id==m.id_abuelo_sub_categoria)[0],n=h.filter(w=>w.id==m.id_padre_sub_categoria)[0],a.includes(C)||a.push(h.filter(w=>w.id==m.id_abuelo_sub_categoria)[0]),p.includes(n)||a.push(h.filter(w=>w.id==m.id_padre_sub_categoria)[0])}),N(a),P(p),j(r),F(b),L(c)}};return d.exports.useEffect(()=>{},[x]),console.log("sectores:",x),t(H,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:S,onHide:_,id:"BusquedaActividad",children:[e(H.Header,{closeButton:!0,children:e("h2",{className:"name_section_app",children:"Selecciona la(s) actividad(es) economica(s) de tu interes."})}),e(H.Body,{className:"contenedor-planes",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Busca por actividad económica o UNSPSC",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:s})}),e("br",{}),e("ul",{className:"tree-root",children:x.map(i=>e(O,{children:i.id_padre_sub_categoria==null&&t("li",{className:`tree-node has-child draggable ${R.includes(i.id)?"expanded":""}`,id:"sector_"+i.id,children:[t("div",{id:i.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>l(i),checked:k.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>M(i.id),children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),R.includes(i.id)&&e("ul",{className:"tree-children new-class",children:U.map((a,p)=>e(O,{children:i.id==a.id_padre_sub_categoria&&t("li",{className:`tree-node has-child draggable segmento ${E.includes(a.id)?"expanded":""}`,id:"segmento_"+a.id,children:[t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>l(a),checked:k.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>u(a.id),children:e(O,{children:p%2==0?e("span",{className:"tree-division__title my-auto",children:a.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:a.nombre})})})})]}),E.includes(a.id)&&e("ul",{className:"tree-children actividad-economica",children:$.map((r,c)=>e(O,{children:a.id==r.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:t("div",{className:"tree-content actividad-economica",onClick:()=>l(r),children:[e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>l(r),checked:k.includes(r.id)?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(O,{children:e("span",{className:"tree-division__title my-auto",children:r.nombre})})})})]})})}))})]})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})};const pe=({showBusquedaTiposCompras:S,handleCloseBusquedaTiposCompras:_})=>{d.exports.useEffect(()=>{fetch("/tiposcompras/json").then(u=>u.json()).then(u=>N(u)).catch(u=>console.log("Solicitud fallida",u))},[]),d.exports.useState(!1),d.exports.useState(""),d.exports.useState("");const[h,v]=d.exports.useState([]),[x,N]=d.exports.useState([]);d.exports.useState(!1),d.exports.useState(!1),d.exports.useState(0),d.exports.useState(0);const[z,I]=d.exports.useState([]),[R,F]=d.exports.useState([]);d.exports.useState({id:0,nombre:""});const[E,L]=d.exports.useState([]),[k,A]=d.exports.useState([]),[U,P]=d.exports.useState([]),$=u=>{var l=document.getElementById("sector_"+u);l.classList.toggle("expanded"),z.includes(u)?I(z.filter(a=>a!=u)):I([...z,u]);const s=new RegExp(u,"i");x.filter(function(a){if(s.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!k.includes(a))k.push(a);else{const p=k.filter(r=>r.id_padre_sub_categoria!=u);A(p)}})},j=u=>{var l=[];E.forEach(a=>{l.push(a)});var s=h.filter(a=>a.id_padre_sub_categoria==u.id&&a.id_abuelo_sub_categoria==null);if(s.length>0){if(!l.includes(u.id))l.push(u.id);else{const a=l.indexOf(u.id);a>-1&&l.splice(a,1)}s.forEach(a=>{const p=h.filter(r=>r.id_padre_sub_categoria==a.id);if(!E.includes(a.id))l.push(a.id),p.forEach(r=>{if(!E.includes(r.id))l.push(r.id);else{const c=l.indexOf(r.id);c>-1&&l.splice(c,1)}});else{const r=l.indexOf(a.id);r>-1&&l.splice(r,1),p.forEach(c=>{const b=l.indexOf(c.id);b>-1&&l.splice(b,1)})}console.log(a),L(l)})}else{var i=h.filter(a=>a.id_padre_sub_categoria==u.id);if(i.length>0){if(!l.includes(u.id))l.push(u.id);else{const a=l.indexOf(u.id);a>-1&&l.splice(a,1)}i.forEach(a=>{if(!E.includes(a.id))l.push(a.id);else{const p=l.indexOf(a.id);p>-1&&l.splice(p,1)}L(l)})}else{if(!l.includes(u.id))l.push(u.id);else{const a=l.indexOf(u.id);a>-1&&l.splice(a,1)}L(l)}}},M=u=>{if(u.target.value==""){N(h),A([]),P([]),I([]),F([]);return}if(u.key==="Enter"){const b=new RegExp(u.target.value,"i"),C=h.filter(function(n){if(b.test(n.nombre))return n});var l=[],s=[],i=[],a=[],p=[];C.forEach(n=>{n.id_abuelo_sub_categoria!=null&&n.id_padre_sub_categoria!=null&&(i.push(n),a.push(n.id_padre_sub_categoria),s.push(h.filter(y=>y.id==n.id_padre_sub_categoria)[0]),p.push(n.id_abuelo_sub_categoria)),n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria!=null&&(s.includes(n)||(s.push(n),s.push(n)),p.includes(n.id_padre_sub_categoria)||(p.push(n.id_padre_sub_categoria),s.push(n))),n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria==null&&l.push(n)});var r=null,c=null;i.forEach(n=>{r=h.filter(y=>y.id==n.id_abuelo_sub_categoria)[0],c=h.filter(y=>y.id==n.id_padre_sub_categoria)[0],l.includes(r)||l.push(h.filter(y=>y.id==n.id_abuelo_sub_categoria)[0]),s.includes(c)||l.push(h.filter(y=>y.id==n.id_padre_sub_categoria)[0])}),N(l),A(s),P(i),I(p),F(a),l.forEach(n=>{var y=document.getElementById("sector_"+n.id);y.classList.add("expanded")}),s.forEach(n=>{console.log(n);var y=document.getElementById("segmento_"+n.id);console.log(y),y&&y.classList.add("expanded")})}};return d.exports.useEffect(()=>{},[x]),console.log("sectores:",x),e(H,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:S,onHide:_,id:"BusquedaTiposCompras",children:t(O,{children:[e(H.Header,{closeButton:!0,className:"header",children:e("h2",{className:"name_section_app",children:"Seleccione la modalidad."})}),e("div",{className:"contenedor-planes",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Buscar por modalidad",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:M})}),e("br",{}),e("ul",{className:"tree-root",children:x.map(u=>e(O,{children:u.id_padre_sub_categoria==null&&t("li",{className:"tree-node has-child draggable",id:"sector_"+u.id,children:[t("div",{id:u.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${u.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>j(u),checked:E.includes(u.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>$(u.id),children:e("span",{className:"tree-division__title my-auto",children:u.nombre})})})]},u.id),z.includes(u.id)&&e("ul",{className:"tree-children new-class",children:k.map((l,s)=>e(O,{children:u.id==l.id_padre_sub_categoria&&e("li",{className:"tree-node has-child draggable segmento",id:"segmento_"+l.id,children:t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>j(l),checked:E.includes(l.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(O,{children:s%2==0?e("span",{className:"tree-division__title my-auto",children:l.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:l.nombre})})})})]})})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})})};const me=({showBusquedaAvanzada:S,handleCloseBusquedaAvanzada:_,handleBusqueda:h})=>{const[v,x]=d.exports.useState({EntidadContratante:"",objeto:"",numeroContrato:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fechaDesde:"",fechaHasta:"",contratista:""}),N=B=>{const{name:m,value:w}=B.target;x({...v,[m]:w})},z=()=>{x({EntidadContratante:"",objeto:"",numeroContrato:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fechaDesde:"",fechaHasta:"",contratista:""})},I=B=>{B.preventDefault();debugger;h(v,R())},R=()=>{var B=document.getElementById("form_busqueda_avanzada");let m=new FormData(B),w={};return m.forEach(function(G,W){w[W]=G}),F(w)},F=B=>{const m=[];for(let w in B)m.push(encodeURIComponent(w)+"="+encodeURIComponent(B[w]));return m.join("&")},E=d.exports.useRef(null),[L,k]=d.exports.useState("text"),A=()=>{k("date"),E.current.defaultValue=""},U=()=>{k("text")},[P,$]=d.exports.useState(!1),j=()=>$(!1),M=()=>$(!0),[u,l]=d.exports.useState(!1),s=()=>l(!1),i=()=>l(!0),[a,p]=d.exports.useState(!1),r=()=>p(!1),c=()=>p(!0),[b,C]=d.exports.useState(!1),n=()=>C(!1),y=()=>C(!0);return t(H,{size:"lg",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"content-modal-busqueda-avanzada",centered:!0,show:S,onHide:_,id:"modalBusquedaAvanzada",children:[t(H.Header,{closeButton:!0,id:"header-modal-busqueda-avanzada",children:[e(X,{title:"Busqueda Avanzada"}),e("button",{className:"circulo",onClick:_,children:e("i",{class:"bi bi-arrow-left iconos"})}),e("div",{className:"titulo",children:e("span",{children:"Búsqueda avanzada"})})]}),e(H.Body,{className:"test",children:e("div",{id:"modal-busqueda-avanzada",children:t(q,{onSubmit:I,className:"form-container",id:"form_busqueda_avanzada",children:[t("span",{children:[e("i",{class:"bi bi-bank iconos"}),"Entidad contratante:"]}),e("input",{type:"text",name:"EntidadContratante",value:v.EntidadContratante,onChange:N,placeholder:"Ingresa la entidad contratante"}),t("span",{children:[e("i",{class:"bi bi-list-nested iconos"}),"Objeto:"]}),e("input",{type:"text",name:"objeto",value:v.objeto,onChange:N,placeholder:"Ingresa palabras claves del objeto del proceso"}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-asterisk iconos"}),"Numero de contrato:"]}),e("input",{type:"text",name:"numeroContrato",value:v.numeroContrato,onChange:N,placeholder:"Ingresa el número del proceso"})]}),t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-tag iconos"}),"Modalidad:"]}),e("input",{type:"text",name:"modalidad",value:v.modalidad,onChange:N,onClick:y,placeholder:"Ingresa la modalidad de contrato"}),e(pe,{showBusquedaTiposCompras:b,handleCloseBusquedaTiposCompras:n})]})]}),t("span",{children:[e("i",{class:"bi bi-lightning-fill iconos"}),"Actividad económica:"]}),e("input",{type:"text",name:"actividadEconomica",value:v.actividadEconomica,onChange:N,onClick:c,placeholder:"Ingresa la(s) actividade(s) económica(s)"}),e(he,{showBusquedaActividad:a,handleCloseBusquedaActividad:r}),t("span",{children:[e("i",{class:"bi bi-geo-alt-fill iconos"}),"Ubicación:"]}),e("input",{type:"text",name:"ubicacion",value:v.ubicacion,onChange:N,onClick:i,placeholder:"Ingresa la(s) ubicacióne(s)"}),e(ue,{showBusquedaUbicacion:u,handleCloseBusquedaUbicacion:s}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-clipboard2-fill iconos"}),"Estados:"]}),e("input",{type:"text",onClick:M,placeholder:"Selecione los estados de proceso"}),e(le,{showBusquedaEstado:P,handleCloseBusquedaEstado:j})]}),t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-globe iconos"}),"Portal de origen:"]}),e("input",{type:"text",name:"portalOrigen",value:v.portalOrigen,onChange:N,placeholder:"Ingresa el portal de origen"})]})]}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-cash-coin iconos"}),"Cuantía:"]}),e("input",{type:"text",name:"cuantiaDesde",value:v.cuantiaDesde,onChange:N,placeholder:"Desde"})]}),t("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:"text",name:"cuantiaHasta",value:v.cuantiaHasta,onChange:N,placeholder:"Hasta"})]})]}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-calendar-date-fill iconos"}),"Fecha de publicación:"]}),e("input",{type:L,name:"fechaDesde",value:v.fechaDesde,onChange:N,placeholder:"Inicio",ref:E,onFocus:A,onBlur:U})]}),t("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:L,name:"fechaHasta",value:v.fechaHasta,onChange:N,placeholder:"Fin",ref:E,onFocus:A,onBlur:U})]})]}),t("span",{children:[e("i",{class:"bi bi-person-fill iconos"}),"Contratista(s):"]}),e("input",{type:"text",name:"contratista",value:v.contratista,onChange:N,placeholder:"Ingresa el contratista"}),t("div",{className:"botones",children:[e("button",{className:"limpiar",type:"button",onClick:z,children:"Limpiar"}),e("button",{className:"buscar",type:"submit",children:"Buscar"})]})]})})})]})};const Fe=({auth:S,contratos:_})=>{const[h,v]=d.exports.useState(_.data);T("th").click(function(){var o=T(this).parents("table").eq(0),f=o.find("tr:gt(0)").toArray().sort(x(T(this).index()));this.asc=!this.asc,this.asc||(f=f.reverse());for(var g=0;g<f.length;g++)o.append(f[g]);z(T(this),this.asc)});function x(o){return function(f,g){var D=N(f,o),K=N(g,o);return T.isNumeric(D)&&T.isNumeric(K)?D-K:D.localeCompare(K)}}function N(o,f){return T(o).children("td").eq(f).html()}function z(o,f){T("th").each(function(g){T(this).removeClass("sorting"),T(this).removeClass("asc"),T(this).removeClass("desc")}),o.addClass("sorting"),f?o.addClass("asc"):o.addClass("desc")}const[I,R]=d.exports.useState(!0),[F,E]=d.exports.useState(0),L=o=>{E(o.id)},k=()=>{E(0)},[A,U]=d.exports.useState(0),[P,$]=d.exports.useState(0);d.exports.useEffect(()=>{document.getElementById("div1");var o=document.getElementById("tabla");document.getElementById("wrapper1");var f=document.getElementById("scroll-table");o&&U(o.offsetWidth),f&&$(f.offsetWidth);var g=document.getElementById("wrapper1"),D=document.querySelector("#scroll-table");g&&(g.onscroll=function(){D.scrollLeft=g.scrollLeft}),D&&(D.onscroll=function(){g.scrollLeft=D.scrollLeft})});const[j,M]=d.exports.useState(_.to),[u,l]=d.exports.useState(_.from),[s,i]=d.exports.useState(_.total),[a,p]=d.exports.useState(_.next_page_url),[r,c]=d.exports.useState(_.prev_page_url),[b,C]=d.exports.useState(""),[n,y]=d.exports.useState(""),B=()=>{var o=document.getElementById("form_busqueda_rapida");let f=new FormData(o),g={};return f.forEach(function(K,ee){g[ee]=K}),m(g)},m=o=>{const f=[];for(let g in o)f.push(encodeURIComponent(g)+"="+encodeURIComponent(o[g]));return f.join("&")},w=o=>{if(o==null)return;const f=B();V(!0),fetch(o+"&"+f).then(g=>g.json()).then(g=>{W(g),V(!1)})},Q=d.exports.useRef(0);d.exports.useEffect(()=>{Q.current!=0&&Q.current.addEventListener("keypress",function(o){if(o.key==="Enter"){o.preventDefault();const f=B();console.log(f),V(!0),fetch("/contratos/?"+f).then(g=>g.json()).then(g=>{W(g),V(!1)})}})},[]);const G=(o,f)=>{debugger;o.EntidadContratante!==""&&(console.log(f),V(!0),fetch("/contratos/?entidad_contratante=coquimbo&fecha_publicacion=&type=fetch").then(g=>{W(g.json()),V(!1)}))},W=o=>{v(o.data),M(o.to),l(o.from),i(o.total),p(o.next_page_url),c(o.prev_page_url)};d.exports.useEffect(()=>{const o=window.location.search,f=new URLSearchParams(o),g=f.get("fecha_publicacion");g!=null&&y(g);const D=f.get("buscador_rapido");D!=null&&C(D)},[]);const[Y,V]=d.exports.useState(!1),[Z,J]=d.exports.useState(!1);return t(ae,{auth:S,children:[e("link",{rel:"shortcut icon",href:"#"}),t("div",{children:[t("div",{className:"contenedor-filtros",children:[t("div",{className:"",children:[t("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{ref:Q,id:"buscador_rapido",className:"buscador_rapido",name:"buscador_rapido",type:"text",value:b,placeholder:"Búsqueda rápida",onChange:o=>C(o.target.value)}),e("input",{name:"fecha_publicacion",type:"hidden",value:n}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-lupa-contratos",children:"search"})]}),e("div",{className:"",children:t("span",{children:[t("button",{onClick:()=>J(!0),className:"mb-2",children:[e("span",{className:"material-symbols-outlined text-btn-avanzado",children:"list"}),e("span",{className:"text-btn-avanzado",children:"Búsqueda avanzada"})]}),e(me,{handleBusqueda:(o,f)=>G(o,f),showBusquedaAvanzada:Z,handleCloseBusquedaAvanzada:()=>J(!1)})]})}),t("div",{className:"input-filtro-estado",children:[e("span",{className:"input-filtro-estado-span",children:"Visualizar:"}),t("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e("div",{children:e(ie,{nextHandler:()=>w(a),prevHandler:()=>w(r),currentPage:u,totalPaginas:j,totalElementos:s})})]}),e("div",{className:"contenedor-contratos",children:e("div",{className:"alto-tabla bg-white overflow-auto",id:"scroll-table",children:Y?e(te,{}):t(O,{children:[e("div",{id:"wrapper1",style:{width:P>0?P:0+"px"},children:e("div",{id:"div1",style:{width:A>0?A:0+"px"}})}),t("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:t("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{style:{padding:"0px 0px"},children:"Acciones"}),e("th",{style:{padding:"0px 5px"},children:"Portal"}),e("th",{style:{padding:"0px 80px"},children:"Entidad"}),e("th",{style:{padding:"0px 80px"},children:"Objeto"}),e("th",{style:{padding:"0px 35px"},children:"Cuantía"}),e("th",{style:{padding:"0px 80px"},children:"Modalidad"}),e("th",{style:{padding:"0px 30px"},children:"Número"}),e("th",{style:{padding:"0px 0px"},children:"Estado"}),e("th",{style:{padding:"0px 35px"},children:"Publicada"}),e("th",{style:{padding:"0px 35px"},children:"Ubicación"}),e("th",{style:{padding:"0px 80px"},children:"Actividad económica"})]})}),e("tbody",{children:h.map(o=>t("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 text-left mw-90",children:t("div",{className:"iconos-horizontal width-columna-acciones",children:[t("div",{children:[e(oe,{}),e(ce,{url:o.link}),e(de,{})]}),t("div",{className:"",children:[e(se,{}),e(ne,{}),e(re,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:o.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:o.entidad_contratante})}),t("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:[I&&e(O,{children:F!=o.id&&t("span",{className:"data-text",children:[o.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>L(o),children:"Ver más"})]})}),F==o.id&&e("div",{className:"showmore",children:t("span",{className:"data-text",children:[o.objeto,e("a",{className:"text-primary",onClick:()=>k(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:o.valor>0?"$"+o.valor.toLocaleString("ch-CH"):o.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:o.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:o.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:o.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:o.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:o.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:o.actividad_economica})})]},o.id))})]}),h.length<=0&&e("div",{id:"mensajes-personalizado-busqueda",className:"container-fluid content_blank_interno",children:t("div",{className:"row justify-content-center align-items-center",children:[e("div",{className:"col-md-4 col-sm-4 offset-md-1 offset-sm-1",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png",alt:"",className:"img-fluid mensaje-imagen"})}),e("div",{className:"col-md-5 col-sm-5 offset-sm-1 offset-md-1",children:t("div",{className:"estructura-mensaje-personalizado",children:[t("h4",{className:"text-center titulo-personalizado",children:[e("b",{className:"text-rojo",children:"No se encontró"})," ","el resultado."]}),t("div",{className:"position-relative",children:[e("span",{className:"icon-Bombillo mensaje-icono"}),e("p",{className:"mensaje-personalizado d-block text-left",children:"Prueba cambiando tus opciones de búsqueda e intentalo nuevamente."})]})]})})]})})]})})})]})]})};export{Fe as default};
