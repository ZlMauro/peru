import{j as s,a as e,r as o,F as k}from"./app-1e769053.js";import{A as G}from"./AuthenticatedLayout-03b1b7a4.js";import{$ as m,P as J}from"./jquery-98359a72.js";/* empty css              *//* empty css                      */import"./ApplicationLogo-a26f1364.js";import"./ApplicationLogoLici-71859a41.js";import"./transition-5578fa27.js";function K({type:c="submit",className:i="",processing:r,children:d,onClick:u}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:u,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+i,disabled:r,children:[d,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function X({type:c="submit",className:i="",processing:r,children:d,onClick:u}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:u,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+i,disabled:r,children:[d,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const Y=c=>e("a",{href:c.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function Z({type:c="submit",className:i="",processing:r,children:d,onClick:u}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:u,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+i,disabled:r,children:[d,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function ee({type:c="submit",className:i="",processing:r,children:d,onClick:u}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:u,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+i,disabled:r,children:[d,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function te({type:c="submit",className:i="",processing:r,children:d,onClick:u}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:u,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+i,disabled:r,children:[d,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const ae=()=>e("div",{class:"cargando_tables",children:s("div",{class:"col",children:[e("img",{src:"https://col.licitaciones.info/img/loading.gif",class:"img-col"}),e("p",{children:"Cargando"})]})}),me=({auth:c,contratos:i})=>{const[r,d]=o.exports.useState(i.data);m("th").click(function(){var t=m(this).parents("table").eq(0),n=t.find("tr:gt(0)").toArray().sort(u(m(this).index()));this.asc=!this.asc,this.asc||(n=n.reverse());for(var a=0;a<n.length;a++)t.append(n[a]);S(m(this),this.asc)});function u(t){return function(n,a){var l=g(n,t),p=g(a,t);return m.isNumeric(l)&&m.isNumeric(p)?l-p:l.localeCompare(p)}}function g(t,n){return m(t).children("td").eq(n).html()}function S(t,n){m("th").each(function(a){m(this).removeClass("sorting"),m(this).removeClass("asc"),m(this).removeClass("desc")}),t.addClass("sorting"),n?t.addClass("asc"):t.addClass("desc")}const[P,se]=o.exports.useState(!0),[b,x]=o.exports.useState(0),j=t=>{x(t.id)},E=()=>{x(0)},[y,q]=o.exports.useState(0),[v,I]=o.exports.useState(0);o.exports.useEffect(()=>{document.getElementById("div1");var t=document.getElementById("tabla");document.getElementById("wrapper1");var n=document.getElementById("scroll-table");t&&q(t.offsetWidth),n&&I(n.offsetWidth);var a=document.getElementById("wrapper1"),l=document.querySelector("#scroll-table");a&&(a.onscroll=function(){l.scrollLeft=a.scrollLeft}),l&&(l.onscroll=function(){a.scrollLeft=l.scrollLeft})});const[L,$]=o.exports.useState(i.to),[B,z]=o.exports.useState(i.from),[F,W]=o.exports.useState(i.total),[A,D]=o.exports.useState(i.next_page_url),[R,U]=o.exports.useState(i.prev_page_url),[V,N]=o.exports.useState(""),[H,M]=o.exports.useState(""),w=()=>{var t=document.getElementById("form_busqueda_rapida");let n=new FormData(t),a={};return n.forEach(function(p,Q){a[Q]=p}),T(a)},T=t=>{const n=[];for(let a in t)n.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));return n.join("&")},C=t=>{if(t==null)return;const n=w();f(!0),fetch(t+"&"+n).then(a=>a.json()).then(a=>{_(a),f(!1)})},h=o.exports.useRef(0);o.exports.useEffect(()=>{h.current!=0&&(console.log(h),h.current.addEventListener("keypress",function(t){if(t.key==="Enter"){t.preventDefault();const n=w();f(!0),fetch("/contratos/?"+n).then(a=>a.json()).then(a=>{_(a),f(!1)})}}))},[]);const _=t=>{d(t.data),$(t.to),z(t.from),W(t.total),D(t.next_page_url),U(t.prev_page_url)};o.exports.useEffect(()=>{const t=window.location.search,n=new URLSearchParams(t),a=n.get("fecha_publicacion");a!=null&&M(a);const l=n.get("buscador_rapido");l!=null&&N(l)},[]);const[O,f]=o.exports.useState(!1);return s(G,{auth:c,children:[e("link",{rel:"shortcut icon",href:"#"}),s("div",{children:[s("div",{className:"contenedor-filtros",children:[s("div",{className:"",children:[s("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{ref:h,id:"buscador_rapido",className:"buscador_rapido",name:"buscador_rapido",type:"text",value:V,placeholder:"Búsqueda rápida",onChange:t=>N(t.target.value)}),e("input",{name:"fecha_publicacion",type:"hidden",value:H}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-lupa-contratos",children:"search"})]}),e("div",{className:"",children:s("button",{className:"buscador_avanzado mb-3",children:[e("span",{className:"material-symbols-outlined",children:"list"}),e("span",{className:"color-texto",children:"Búsqueda avanzada"})]})}),s("div",{className:"input-filtro-estado",children:[e("span",{className:"input-filtro-estado-span",children:"Visualizar:"}),s("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e("div",{children:e(J,{nextHandler:()=>C(A),prevHandler:()=>C(R),currentPage:B,totalPaginas:L,totalElementos:F})})]}),e("div",{className:"contenedor-contratos",children:e("div",{className:"alto-tabla bg-white overflow-auto",id:"scroll-table",children:O?e(ae,{}):s(k,{children:[e("div",{id:"wrapper1",style:{width:v>0?v:0+"px"},children:e("div",{id:"div1",style:{width:y>0?y:0+"px"}})}),s("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:s("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{style:{padding:"0px 0px"},children:"Acciones"}),e("th",{style:{padding:"0px 5px"},children:"Portal"}),e("th",{style:{padding:"0px 80px"},children:"Entidad"}),e("th",{style:{padding:"0px 80px"},children:"Objeto"}),e("th",{style:{padding:"0px 35px"},children:"Cuantía"}),e("th",{style:{padding:"0px 80px"},children:"Modalidad"}),e("th",{style:{padding:"0px 30px"},children:"Número"}),e("th",{style:{padding:"0px 0px"},children:"Estado"}),e("th",{style:{padding:"0px 35px"},children:"Publicada"}),e("th",{style:{padding:"0px 35px"},children:"Ubicación"}),e("th",{style:{padding:"0px 80px"},children:"Actividad económica"})]})}),e("tbody",{children:r.map(t=>s("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 text-left mw-90",children:s("div",{className:"iconos-horizontal width-columna-acciones",children:[s("div",{children:[e(ee,{}),e(Y,{url:t.link}),e(Z,{})]}),s("div",{className:"",children:[e(K,{}),e(X,{}),e(te,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:t.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.entidad_contratante})}),s("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:[P&&e(k,{children:b!=t.id&&s("span",{className:"data-text",children:[t.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>j(t),children:"Ver más"})]})}),b==t.id&&e("div",{className:"showmore",children:s("span",{className:"data-text",children:[t.objeto,e("a",{className:"text-primary",onClick:()=>E(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:t.valor>0?"$"+t.valor.toLocaleString("ch-CH"):t.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:t.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:t.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.actividad_economica})})]},t.id))})]}),r.length<=0&&e("div",{id:"mensajes-personalizado-busqueda",class:"container-fluid content_blank_interno",children:s("div",{class:"row justify-content-center align-items-center",children:[e("div",{class:"col-md-4 col-sm-4 offset-md-1 offset-sm-1",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png",alt:"",class:"img-fluid mensaje-imagen"})}),e("div",{class:"col-md-5 col-sm-5 offset-sm-1 offset-md-1",children:s("div",{class:"estructura-mensaje-personalizado",children:[s("h4",{class:"text-center titulo-personalizado",children:[e("b",{class:"text-rojo",children:"No se encontró"})," el resultado."]}),s("div",{class:"position-relative",children:[e("span",{class:"icon-Bombillo mensaje-icono"}),e("p",{class:"mensaje-personalizado d-block text-left",children:"Prueba cambiando tus opciones de búsqueda e intentalo nuevamente."})]})]})})]})})]})})})]})]})};export{me as default};