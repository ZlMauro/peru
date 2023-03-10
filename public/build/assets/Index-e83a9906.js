import{j as t,a as e,H as Y,r as c,F as L}from"./app-48ca9383.js";import{A as te}from"./AuthenticatedLayout-fc139fcf.js";import{$ as T,P as se,L as ne}from"./Loader-aba8b7bd.js";import{M as $}from"./Modal-5d658465.js";import{F as q}from"./Form-eb17b99c.js";/* empty css                      *//* empty css                 *//* empty css              */import"./ApplicationLogo-29a0d14e.js";import"./ApplicationLogoLici-49a94715.js";import"./AuthenticatedLayout-e4a8c611.js";import"./transition-56370857.js";import"./createWithBsPrefix-ba01ed16.js";import"./CloseButton-e770543b.js";import"./hasClass-2bed192b.js";import"./ElementChildren-e51adaf5.js";function de({type:C="submit",className:x="",processing:h,children:g,onClick:N}){return t("button",{style:{backgroundColor:"#57C700"},type:C,onClick:N,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+x,disabled:h,children:[g,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function ce({type:C="submit",className:x="",processing:h,children:g,onClick:N}){return t("button",{style:{backgroundColor:"#57C700"},type:C,onClick:N,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+x,disabled:h,children:[g,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const oe=C=>e("a",{href:C.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function re({type:C="submit",className:x="",processing:h,children:g,onClick:N}){return t("button",{style:{backgroundColor:"#57C700"},type:C,onClick:N,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+x,disabled:h,children:[g,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function le({type:C="submit",className:x="",processing:h,children:g,onClick:N}){return t("button",{style:{backgroundColor:"#57C700"},type:C,onClick:N,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+x,disabled:h,children:[g,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function ue({type:C="submit",className:x="",processing:h,children:g,onClick:N}){return t("button",{style:{backgroundColor:"#57C700"},type:C,onClick:N,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${h&&"opacity-25"} `+x,disabled:h,children:[g,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const he=({showBusquedaEstado:C,handleCloseBusquedaEstado:x})=>t($,{size:"md",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:C,onHide:x,id:"BusquedaEstado",children:[t($.Header,{closeButton:!0,children:[e(Y,{title:"Busqueda estado"}),e("div",{className:"titulo",children:e("span",{children:"Seleciona el estado"})})]}),e($.Body,{children:t("div",{className:"busqueda-estado",children:[e("div",{children:e("input",{type:"text",className:"buscador",placeholder:"Buscar estado"})}),e("div",{children:e(q,{children:t("div",{className:"form",children:[t(q.Group,{children:[t(q.Check,{className:"todos",children:[e(q.Check.Label,{children:"Seleciona todos los estados"}),e(q.Check.Input,{"aria-label":"todos"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Convocatoria"}),e(q.Check.Input,{"aria-label":"convocatoria"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"En evaluacion"}),e(q.Check.Input,{"aria-label":"evaluacion"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Adjudicado"}),e(q.Check.Input,{"aria-label":"adjudicado"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Liquidado"}),e(q.Check.Input,{"aria-label":"liquidado"})]}),e("hr",{}),t(q.Check,{children:[e(q.Check.Label,{children:"Terminado anormalmente o descartado"}),e(q.Check.Input,{"aria-label":"terminado"})]}),e("hr",{})]}),e("button",{type:"submit",className:"boton",children:"Seleccionar"})]})})})]})})]});const pe=({showBusquedaUbicacion:C,handleCloseBusquedaUbicacion:x})=>{c.exports.useEffect(()=>{fetch("/localizacion/json").then(s=>s.json()).then(s=>y(s)).catch(s=>console.log("Solicitud fallida",s))},[]);const[h,g]=c.exports.useState([]),[N,y]=c.exports.useState([]),[F,j]=c.exports.useState([]),[R,O]=c.exports.useState([]),[E,z]=c.exports.useState([]),[k,I]=c.exports.useState([]),[U,P]=c.exports.useState([]),H=s=>{var i=document.getElementById("sector_"+s);i.classList.toggle("expanded"),F.includes(s)?j(F.filter(r=>r!=s)):j([...F,s]);const a=new RegExp(s,"i");N.filter(function(r){if(a.test(r.id_padre_sub_categoria))return r}).forEach(r=>{if(!k.includes(r))k.push(r);else{const d=k.filter(b=>b.id_padre_sub_categoria!=s);I(d)}})},A=(s,i,a=null,p)=>(i.forEach(r=>{switch(p){case"add":s.push(r.id),a=="segmento"&&h.filter(b=>b.id_padre_sub_categoria==r.id).forEach(b=>{s.push(b.id)});break;case"remove":s=u(s,r),a=="segmento"&&h.filter(b=>b.id_padre_sub_categoria==r.id).forEach(b=>{s=u(s,b)});break}}),s),M=s=>{var i=[];E.forEach(r=>{i.push(r)});var a=h.filter(r=>r.id_padre_sub_categoria==s.id&&r.id_abuelo_sub_categoria==null);if(a.length>0)i.includes(s.id)?(i=u(i,s),i=A(i,a,"segmento","remove")):(i.push(s.id),i=A(i,a,"segmento","remove"),i=A(i,a,"segmento","add"));else{var p=h.filter(r=>r.id_padre_sub_categoria==s.id);p.length>0?i.includes(s.id)?(i=u(i,s),i=A(i,p,"actividad_economica","remove")):(i.push(s.id),i=A(i,p,"actividad_economica","add")):i.includes(s.id)?i=u(i,s):i.push(s.id)}z(i)},u=(s,i)=>{const a=s.indexOf(i.id);return a>-1&&s.splice(a,1),s},l=s=>{if(s.target.value==""){y(h),I([]),P([]),j([]),O([]);return}if(s.key==="Enter"){const b=new RegExp(s.target.value,"i"),S=h.filter(function(n){if(b.test(n.nombre)||s.target.value==n.id)return n});var i=[],a=[],p=[],r=[],d=[];S.forEach(n=>{if(n.id_abuelo_sub_categoria!=null&&n.id_padre_sub_categoria!=null){p.push(n);var _=h.filter(m=>m.id==n.id_padre_sub_categoria)[0];a.includes(_)||a.push(_),r.includes(n.id_padre_sub_categoria)||r.push(n.id_padre_sub_categoria);var B=h.filter(m=>m.id==n.id_abuelo_sub_categoria)[0];i.includes(B)||i.push(B),d.includes(n.id_abuelo_sub_categoria)||d.push(n.id_abuelo_sub_categoria)}if(n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria!=null){a.includes(n)||a.push(n),r.includes(n.id)||r.push(n.id);var B=h.filter(w=>w.id==n.id_padre_sub_categoria)[0];i.includes(B)||i.push(B),d.includes(n.id_padre_sub_categoria)||d.push(n.id_padre_sub_categoria)}n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria==null&&(i.includes(n)||i.push(n),d.includes(n.id)||d.push(n.id))}),y(i),I(a),P(p),j(d),O(r)}};return e($,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:C,onHide:x,id:"BusquedaUbicacion",children:t(L,{children:[e($.Header,{closeButton:!0,className:"header",children:e("h2",{className:"name_section_app",children:"Seleccione la ubicacion"})}),e($.Body,{className:"contenedor-planes",id:"",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Buscar por ubicacion",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:l})}),e("br",{}),e("ul",{className:"tree-root",children:N.map(s=>e(L,{children:s.id_padre_sub_categoria==null&&t("li",{className:`tree-node has-child draggable ${F.includes(s.id)?"expanded":""}`,id:"sector_"+s.id,children:[t("div",{id:s.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${s.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>M(s),checked:E.includes(s.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>H(s.id),children:e("span",{className:"tree-division__title my-auto",children:s.nombre})})})]},s.id),F.includes(s.id)&&e("ul",{className:"tree-children new-class",children:k.map((i,a)=>e(L,{children:s.id==i.id_padre_sub_categoria&&e("li",{className:`tree-node has-child draggable segmento ${R.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>M(i),checked:E.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(L,{children:a%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})})};const me=({showBusquedaActividad:C,handleCloseBusquedaActividad:x})=>{c.exports.useEffect(()=>{fetch("/actividades-economicas/json").then(i=>i.json()).then(i=>y(i)).catch(i=>console.log("Solicitud fallida",i))},[]),c.exports.useState(!1),c.exports.useState(""),c.exports.useState("");const[h,g]=c.exports.useState([]),[N,y]=c.exports.useState([]);c.exports.useState(!1),c.exports.useState(!1),c.exports.useState(0);const[F,j]=c.exports.useState(0),[R,O]=c.exports.useState([]),[E,z]=c.exports.useState([]);c.exports.useState({id:0,nombre:""});const[k,I]=c.exports.useState([]),[U,P]=c.exports.useState([]),[H,A]=c.exports.useState([]),M=i=>{var a=document.getElementById("sector_"+i);a.classList.toggle("expanded"),R.includes(i)?O(R.filter(d=>d!=i)):O([...R,i]);const p=new RegExp(i,"i");N.filter(function(d){if(p.test(d.id_padre_sub_categoria))return d}).forEach(d=>{if(!U.includes(d))U.push(d);else{const b=U.filter(S=>S.id_padre_sub_categoria!=i);P(b)}})},u=i=>{var a=document.getElementById("segmento_"+i);a.classList.toggle("expanded"),E.includes(i)?z(E.filter(d=>d!=i)):z([...E,i]);const p=new RegExp(i,"i");N.filter(function(d){if(p.test(d.id_padre_sub_categoria))return d}).forEach(d=>{if(!H.includes(d))H.push(d);else{const b=H.filter(S=>S.id_padre_sub_categoria!=i);A(b)}}),j(i)},l=i=>{var a=[];k.forEach(d=>{a.push(d)});var p=h.filter(d=>d.id_padre_sub_categoria==i.id&&d.id_abuelo_sub_categoria==null);if(p.length>0){if(!a.includes(i.id))a.push(i.id);else{const d=a.indexOf(i.id);d>-1&&a.splice(d,1)}p.forEach(d=>{const b=h.filter(S=>S.id_padre_sub_categoria==d.id);if(!k.includes(d.id))a.push(d.id),b.forEach(S=>{if(!k.includes(S.id))a.push(S.id);else{const n=a.indexOf(S.id);n>-1&&a.splice(n,1)}});else{const S=a.indexOf(d.id);S>-1&&a.splice(S,1),b.forEach(n=>{const _=a.indexOf(n.id);_>-1&&a.splice(_,1)})}I(a)})}else{var r=h.filter(d=>d.id_padre_sub_categoria==i.id);if(r.length>0){if(!a.includes(i.id))a.push(i.id);else{const d=a.indexOf(i.id);d>-1&&a.splice(d,1)}r.forEach(d=>{if(!k.includes(d.id))a.push(d.id);else{const b=a.indexOf(d.id);b>-1&&a.splice(b,1)}I(a)})}else{if(!a.includes(i.id))a.push(i.id);else{const d=a.indexOf(i.id);d>-1&&a.splice(d,1)}I(a)}}},s=i=>{if(i.target.value==""){y(h),P([]),A([]),O([]),z([]);return}if(i.key==="Enter"){const _=new RegExp(i.target.value,"i"),B=h.filter(function(m){if(_.test(m.nombre))return m});var a=[],p=[],r=[],d=[],b=[];B.forEach(m=>{m.id_abuelo_sub_categoria!=null&&m.id_padre_sub_categoria!=null&&(r.push(m),d.push(m.id_padre_sub_categoria),p.push(h.filter(w=>w.id==m.id_padre_sub_categoria)[0]),b.push(m.id_abuelo_sub_categoria)),m.id_abuelo_sub_categoria==null&&m.id_padre_sub_categoria!=null&&(p.includes(m)||(p.push(m),p.push(m)),b.includes(m.id_padre_sub_categoria)||(b.push(m.id_padre_sub_categoria),p.push(m))),m.id_abuelo_sub_categoria==null&&m.id_padre_sub_categoria==null&&a.push(m)});var S=null,n=null;r.forEach(m=>{S=h.filter(w=>w.id==m.id_abuelo_sub_categoria)[0],n=h.filter(w=>w.id==m.id_padre_sub_categoria)[0],a.includes(S)||a.push(h.filter(w=>w.id==m.id_abuelo_sub_categoria)[0]),p.includes(n)||a.push(h.filter(w=>w.id==m.id_padre_sub_categoria)[0])}),y(a),P(p),A(r),O(b),z(d)}};return c.exports.useEffect(()=>{},[N]),t($,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:C,onHide:x,id:"BusquedaActividad",children:[e($.Header,{closeButton:!0,children:e("h2",{className:"name_section_app",children:"Selecciona la(s) actividad(es) economica(s) de tu interes."})}),e($.Body,{className:"contenedor-planes",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Busca por actividad económica o UNSPSC",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:s})}),e("br",{}),e("ul",{className:"tree-root",children:N.map(i=>e(L,{children:i.id_padre_sub_categoria==null&&t("li",{className:`tree-node has-child draggable ${R.includes(i.id)?"expanded":""}`,id:"sector_"+i.id,children:[t("div",{id:i.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>l(i),checked:k.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>M(i.id),children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),R.includes(i.id)&&e("ul",{className:"tree-children new-class",children:U.map((a,p)=>e(L,{children:i.id==a.id_padre_sub_categoria&&t("li",{className:`tree-node has-child draggable segmento ${E.includes(a.id)?"expanded":""}`,id:"segmento_"+a.id,children:[t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>l(a),checked:k.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>u(a.id),children:e(L,{children:p%2==0?e("span",{className:"tree-division__title my-auto",children:a.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:a.nombre})})})})]}),E.includes(a.id)&&e("ul",{className:"tree-children actividad-economica",children:H.map((r,d)=>e(L,{children:a.id==r.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:t("div",{className:"tree-content actividad-economica",onClick:()=>l(r),children:[e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>l(r),checked:k.includes(r.id)?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(L,{children:e("span",{className:"tree-division__title my-auto",children:r.nombre})})})})]})})}))})]})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})};const be=({showBusquedaTiposCompras:C,handleCloseBusquedaTiposCompras:x})=>{c.exports.useEffect(()=>{fetch("/tiposcompras/json").then(u=>u.json()).then(u=>y(u)).catch(u=>console.log("Solicitud fallida",u))},[]),c.exports.useState(!1),c.exports.useState(""),c.exports.useState("");const[h,g]=c.exports.useState([]),[N,y]=c.exports.useState([]);c.exports.useState(!1),c.exports.useState(!1),c.exports.useState(0),c.exports.useState(0);const[F,j]=c.exports.useState([]),[R,O]=c.exports.useState([]);c.exports.useState({id:0,nombre:""});const[E,z]=c.exports.useState([]),[k,I]=c.exports.useState([]),[U,P]=c.exports.useState([]),H=u=>{var l=document.getElementById("sector_"+u);l.classList.toggle("expanded"),F.includes(u)?j(F.filter(a=>a!=u)):j([...F,u]);const s=new RegExp(u,"i");N.filter(function(a){if(s.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!k.includes(a))k.push(a);else{const p=k.filter(r=>r.id_padre_sub_categoria!=u);I(p)}})},A=u=>{var l=[];E.forEach(a=>{l.push(a)});var s=h.filter(a=>a.id_padre_sub_categoria==u.id&&a.id_abuelo_sub_categoria==null);if(s.length>0){if(!l.includes(u.id))l.push(u.id);else{const a=l.indexOf(u.id);a>-1&&l.splice(a,1)}s.forEach(a=>{const p=h.filter(r=>r.id_padre_sub_categoria==a.id);if(!E.includes(a.id))l.push(a.id),p.forEach(r=>{if(!E.includes(r.id))l.push(r.id);else{const d=l.indexOf(r.id);d>-1&&l.splice(d,1)}});else{const r=l.indexOf(a.id);r>-1&&l.splice(r,1),p.forEach(d=>{const b=l.indexOf(d.id);b>-1&&l.splice(b,1)})}console.log(a),z(l)})}else{var i=h.filter(a=>a.id_padre_sub_categoria==u.id);if(i.length>0){if(!l.includes(u.id))l.push(u.id);else{const a=l.indexOf(u.id);a>-1&&l.splice(a,1)}i.forEach(a=>{if(!E.includes(a.id))l.push(a.id);else{const p=l.indexOf(a.id);p>-1&&l.splice(p,1)}z(l)})}else{if(!l.includes(u.id))l.push(u.id);else{const a=l.indexOf(u.id);a>-1&&l.splice(a,1)}z(l)}}},M=u=>{if(u.target.value==""){y(h),I([]),P([]),j([]),O([]);return}if(u.key==="Enter"){const b=new RegExp(u.target.value,"i"),S=h.filter(function(n){if(b.test(n.nombre))return n});var l=[],s=[],i=[],a=[],p=[];S.forEach(n=>{n.id_abuelo_sub_categoria!=null&&n.id_padre_sub_categoria!=null&&(i.push(n),a.push(n.id_padre_sub_categoria),s.push(h.filter(_=>_.id==n.id_padre_sub_categoria)[0]),p.push(n.id_abuelo_sub_categoria)),n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria!=null&&(s.includes(n)||(s.push(n),s.push(n)),p.includes(n.id_padre_sub_categoria)||(p.push(n.id_padre_sub_categoria),s.push(n))),n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria==null&&l.push(n)});var r=null,d=null;i.forEach(n=>{r=h.filter(_=>_.id==n.id_abuelo_sub_categoria)[0],d=h.filter(_=>_.id==n.id_padre_sub_categoria)[0],l.includes(r)||l.push(h.filter(_=>_.id==n.id_abuelo_sub_categoria)[0]),s.includes(d)||l.push(h.filter(_=>_.id==n.id_padre_sub_categoria)[0])}),y(l),I(s),P(i),j(p),O(a),l.forEach(n=>{var _=document.getElementById("sector_"+n.id);_.classList.add("expanded")}),s.forEach(n=>{console.log(n);var _=document.getElementById("segmento_"+n.id);console.log(_),_&&_.classList.add("expanded")})}};return c.exports.useEffect(()=>{},[N]),e($,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:C,onHide:x,id:"BusquedaTiposCompras",children:t(L,{children:[e($.Header,{closeButton:!0,className:"header",children:e("h2",{className:"name_section_app",children:"Seleccione la modalidad."})}),e("div",{className:"contenedor-planes",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Buscar por modalidad",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:M})}),e("br",{}),e("ul",{className:"tree-root",children:N.map(u=>e(L,{children:u.id_padre_sub_categoria==null&&t("li",{className:"tree-node has-child draggable",id:"sector_"+u.id,children:[t("div",{id:u.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${u.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>A(u),checked:E.includes(u.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>H(u.id),children:e("span",{className:"tree-division__title my-auto",children:u.nombre})})})]},u.id),F.includes(u.id)&&e("ul",{className:"tree-children new-class",children:k.map((l,s)=>e(L,{children:u.id==l.id_padre_sub_categoria&&e("li",{className:"tree-node has-child draggable segmento",id:"segmento_"+l.id,children:t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>A(l),checked:E.includes(l.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(L,{children:s%2==0?e("span",{className:"tree-division__title my-auto",children:l.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:l.nombre})})})})]})})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})})};const fe=({showBusquedaAvanzada:C,handleCloseBusquedaAvanzada:x,handleBusqueda:h})=>{const[g,N]=c.exports.useState({entidad_contratante:"",objeto:"",codigo_proceso:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado_proceso:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fecha_desde:"",fecha_hasta:"",contratista:""}),y=B=>{const{name:m,value:w}=B.target;N({...g,[m]:w})},F=()=>{N({entidad_contratante:"",objeto:"",codigo_proceso:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado_proceso:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fecha_desde:"",fecha_hasta:"",contratista:""})},j=B=>{B.preventDefault(),h(R())},R=()=>{var B=document.getElementById("form_busqueda_avanzada");let m=new FormData(B),w={};return m.forEach(function(Q,W){w[W]=Q}),O(w)},O=B=>{const m=[];for(let w in B)m.push(encodeURIComponent(w)+"="+encodeURIComponent(B[w]));return m.join("&")},E=c.exports.useRef(null),[z,k]=c.exports.useState("text"),I=()=>{k("date"),E.current.defaultValue=""},U=()=>{k("text")},[P,H]=c.exports.useState(!1),A=()=>H(!1),M=()=>H(!0),[u,l]=c.exports.useState(!1),s=()=>l(!1),i=()=>l(!0),[a,p]=c.exports.useState(!1),r=()=>p(!1),d=()=>p(!0),[b,S]=c.exports.useState(!1),n=()=>S(!1),_=()=>S(!0);return t($,{size:"lg",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"content-modal-busqueda-avanzada",centered:!0,show:C,onHide:x,id:"modalBusquedaAvanzada",children:[t($.Header,{closeButton:!0,id:"header-modal-busqueda-avanzada",children:[e(Y,{title:"Busqueda Avanzada"}),e("button",{className:"circulo",onClick:x,children:e("i",{class:"bi bi-arrow-left iconos"})}),e("div",{className:"titulo",children:e("span",{children:"Búsqueda avanzada"})})]}),e($.Body,{className:"test",children:e("div",{id:"modal-busqueda-avanzada",children:t(q,{onSubmit:j,className:"form-container",id:"form_busqueda_avanzada",children:[t("span",{children:[e("i",{class:"bi bi-bank iconos"}),"Entidad contratante:"]}),e("input",{type:"text",name:"entidad_contratante",value:g.entidad_contratante,onChange:y,placeholder:"Ingresa la entidad contratante"}),t("span",{children:[e("i",{class:"bi bi-list-nested iconos"}),"Objeto:"]}),e("input",{type:"text",name:"objeto",value:g.objeto,onChange:y,placeholder:"Ingresa palabras claves del objeto del proceso"}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-asterisk iconos"}),"Numero de contrato:"]}),e("input",{type:"text",name:"codigo_proceso",value:g.codigo_proceso,onChange:y,placeholder:"Ingresa el número del proceso"})]}),t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-tag iconos"}),"Modalidad:"]}),e("input",{type:"text",name:"modalidad",value:g.modalidad,onChange:y,onClick:_,placeholder:"Ingresa la modalidad de contrato"}),e(be,{showBusquedaTiposCompras:b,handleCloseBusquedaTiposCompras:n})]})]}),t("span",{children:[e("i",{class:"bi bi-lightning-fill iconos"}),"Actividad económica:"]}),e("input",{type:"text",name:"actividadEconomica",value:g.actividadEconomica,onChange:y,onClick:d,placeholder:"Ingresa la(s) actividade(s) económica(s)"}),e(me,{showBusquedaActividad:a,handleCloseBusquedaActividad:r}),t("span",{children:[e("i",{class:"bi bi-geo-alt-fill iconos"}),"Ubicación:"]}),e("input",{type:"text",name:"ubicacion",value:g.ubicacion,onChange:y,onClick:i,placeholder:"Ingresa la(s) ubicacióne(s)"}),e(pe,{showBusquedaUbicacion:u,handleCloseBusquedaUbicacion:s}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-clipboard2-fill iconos"}),"Estados:"]}),e("input",{type:"text",onClick:M,placeholder:"Selecione los estado_procesos de proceso"}),e(he,{showBusquedaEstado:P,handleCloseBusquedaEstado:A})]}),t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-globe iconos"}),"Portal de origen:"]}),e("input",{type:"text",name:"portalOrigen",value:g.portalOrigen,onChange:y,placeholder:"Ingresa el portal de origen"})]})]}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-cash-coin iconos"}),"Cuantía:"]}),e("input",{type:"text",name:"cuantiaDesde",value:g.cuantiaDesde,onChange:y,placeholder:"Desde"})]}),t("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:"text",name:"cuantiaHasta",value:g.cuantiaHasta,onChange:y,placeholder:"Hasta"})]})]}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-calendar-date-fill iconos"}),"Fecha de publicación:"]}),e("input",{type:z,name:"fecha_desde",value:g.fecha_desde,onChange:y,placeholder:"Inicio",ref:E,onFocus:I,onBlur:U})]}),t("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:z,name:"fecha_hasta",value:g.fecha_hasta,onChange:y,placeholder:"Fin",ref:E,onFocus:I,onBlur:U})]})]}),t("span",{children:[e("i",{class:"bi bi-person-fill iconos"}),"Contratista(s):"]}),e("input",{type:"text",name:"contratista",value:g.contratista,onChange:y,placeholder:"Ingresa el contratista"}),t("div",{className:"botones",children:[e("button",{className:"limpiar",type:"button",onClick:F,children:"Limpiar"}),e("button",{className:"buscar",type:"submit",children:"Buscar"})]})]})})})]})};const Oe=({auth:C,contratos:x})=>{const[h,g]=c.exports.useState(""),[N,y]=c.exports.useState(x.data);T("th").click(function(){var o=T(this).parents("table").eq(0),f=o.find("tr:gt(0)").toArray().sort(F(T(this).index()));this.asc=!this.asc,this.asc||(f=f.reverse());for(var v=0;v<f.length;v++)o.append(f[v]);R(T(this),this.asc)});function F(o){return function(f,v){var D=j(f,o),K=j(v,o);return T.isNumeric(D)&&T.isNumeric(K)?D-K:D.localeCompare(K)}}function j(o,f){return T(o).children("td").eq(f).html()}function R(o,f){T("th").each(function(v){T(this).removeClass("sorting"),T(this).removeClass("asc"),T(this).removeClass("desc")}),o.addClass("sorting"),f?o.addClass("asc"):o.addClass("desc")}const[O,E]=c.exports.useState(!0),[z,k]=c.exports.useState(0),I=o=>{k(o.id)},U=()=>{k(0)},[P,H]=c.exports.useState(0),[A,M]=c.exports.useState(0);c.exports.useEffect(()=>{document.getElementById("div1");var o=document.getElementById("tabla");document.getElementById("wrapper1");var f=document.getElementById("scroll-table");o&&H(o.offsetWidth),f&&M(f.offsetWidth);var v=document.getElementById("wrapper1"),D=document.querySelector("#scroll-table");v&&(v.onscroll=function(){D.scrollLeft=v.scrollLeft}),D&&(D.onscroll=function(){v.scrollLeft=D.scrollLeft})});const[u,l]=c.exports.useState(x.to),[s,i]=c.exports.useState(x.from),[a,p]=c.exports.useState(x.total),[r,d]=c.exports.useState(x.next_page_url),[b,S]=c.exports.useState(x.prev_page_url),[n,_]=c.exports.useState(""),[B,m]=c.exports.useState(""),w=()=>{var o=document.getElementById("form_busqueda_rapida");let f=new FormData(o),v={};return f.forEach(function(K,ie){v[ie]=K}),X(v)},X=o=>{const f=[];for(let v in o)f.push(encodeURIComponent(v)+"="+encodeURIComponent(o[v]));return f.join("&")},Q=o=>{if(o==null)return;let f=w();h!==""&&(f=h),V(!0),fetch(o+"&"+f).then(v=>v.json()).then(v=>{G(v),V(!1)})},W=c.exports.useRef(0);c.exports.useEffect(()=>{W.current!=0&&W.current.addEventListener("keypress",function(o){if(o.key==="Enter"){o.preventDefault();const f=w();V(!0),g(""),fetch("/contratos/?"+f).then(v=>v.json()).then(v=>{G(v),V(!1)})}})},[]);const Z=o=>{g(o+"&type=fetch"),V(!0),fetch("/contratos/?"+o+"&type=fetch").then(f=>f.json()).then(f=>{G(f),V(!1)}),J(!1)},G=o=>{y(o.data),l(o.to),i(o.from),p(o.total),d(o.next_page_url),S(o.prev_page_url)};c.exports.useEffect(()=>{const o=window.location.search,f=new URLSearchParams(o),v=f.get("fecha_publicacion");v!=null&&m(v);const D=f.get("buscador_rapido");D!=null&&_(D)},[]);const[ee,V]=c.exports.useState(!1),[ae,J]=c.exports.useState(!1);return t(te,{auth:C,children:[e("link",{rel:"shortcut icon",href:"#"}),t("div",{children:[t("div",{className:"contenedor-filtros",children:[t("div",{className:"",children:[t("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{ref:W,id:"buscador_rapido",className:"buscador_rapido",name:"buscador_rapido",type:"text",value:n,placeholder:"Búsqueda rápida",onChange:o=>_(o.target.value)}),e("input",{name:"fecha_publicacion",type:"hidden",value:B}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-lupa-contratos",children:"search"})]}),e("div",{className:"",children:t("span",{children:[t("button",{onClick:()=>J(!0),className:"mb-2",children:[e("span",{className:"material-symbols-outlined text-btn-avanzado",children:"list"}),e("span",{className:"text-btn-avanzado",children:"Búsqueda avanzada"})]}),e(fe,{handleBusqueda:o=>Z(o),showBusquedaAvanzada:ae,handleCloseBusquedaAvanzada:()=>J(!1)})]})}),t("div",{className:"input-filtro-estado",children:[e("span",{className:"input-filtro-estado-span",children:"Visualizar:"}),t("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e("div",{children:e(se,{nextHandler:()=>Q(r),prevHandler:()=>Q(b),currentPage:s,totalPaginas:u,totalElementos:a})})]}),e("div",{className:"contenedor-contratos",children:e("div",{className:"alto-tabla bg-white overflow-auto",id:"scroll-table",children:ee?e(ne,{}):t(L,{children:[e("div",{id:"wrapper1",style:{width:A>0?A:0+"px"},children:e("div",{id:"div1",style:{width:P>0?P:0+"px"}})}),t("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:t("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{style:{padding:"0px 0px"},children:"Acciones"}),e("th",{style:{padding:"0px 5px"},children:"Portal"}),e("th",{style:{padding:"0px 80px"},children:"Entidad"}),e("th",{style:{padding:"0px 80px"},children:"Objeto"}),e("th",{style:{padding:"0px 35px"},children:"Cuantía"}),e("th",{style:{padding:"0px 80px"},children:"Modalidad"}),e("th",{style:{padding:"0px 30px"},children:"Número"}),e("th",{style:{padding:"0px 0px"},children:"Estado"}),e("th",{style:{padding:"0px 35px"},children:"Publicada"}),e("th",{style:{padding:"0px 35px"},children:"Ubicación"}),e("th",{style:{padding:"0px 80px"},children:"Actividad económica"})]})}),e("tbody",{children:N.map(o=>t("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 text-left mw-90",children:t("div",{className:"iconos-horizontal width-columna-acciones",children:[t("div",{children:[e(le,{}),e(oe,{url:o.link}),e(re,{})]}),t("div",{className:"",children:[e(de,{}),e(ce,{}),e(ue,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:o.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:o.entidad_contratante})}),t("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:[O&&e(L,{children:z!=o.id&&t("span",{className:"data-text",children:[o.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>I(o),children:"Ver más"})]})}),z==o.id&&e("div",{className:"showmore",children:t("span",{className:"data-text",children:[o.objeto,e("a",{className:"text-primary",onClick:()=>U(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:o.valor>0?"$"+o.valor.toLocaleString("ch-CH"):o.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:o.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:o.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:o.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:o.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:o.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:o.actividad_economica})})]},o.id))})]}),N.length<=0&&e("div",{id:"mensajes-personalizado-busqueda",className:"container-fluid content_blank_interno",children:t("div",{className:"row justify-content-center align-items-center",children:[e("div",{className:"col-md-4 col-sm-4 offset-md-1 offset-sm-1",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png",alt:"",className:"img-fluid mensaje-imagen"})}),e("div",{className:"col-md-5 col-sm-5 offset-sm-1 offset-md-1",children:t("div",{className:"estructura-mensaje-personalizado",children:[t("h4",{className:"text-center titulo-personalizado",children:[e("b",{className:"text-rojo",children:"No se encontró"})," ","el resultado."]}),t("div",{className:"position-relative",children:[e("span",{className:"icon-Bombillo mensaje-icono"}),e("p",{className:"mensaje-personalizado d-block text-left",children:"Prueba cambiando tus opciones de búsqueda e intentalo nuevamente."})]})]})})]})})]})})})]})]})};export{Oe as default};
