import{j as s,a as e,r as i,F as T}from"./app-38e1924c.js";import{A as O}from"./AuthenticatedLayout-e0ac496c.js";import{A as Q}from"./MenuOpciones-eff674e8.js";import{$ as m,P as G}from"./jquery-9b951f9f.js";/* empty css              */import"./estilos-capa-autentificacion-c2cca0b2.js";import"./ApplicationLogoLici-ccde2fa4.js";import"./transition-f7228b7b.js";function J({type:c="submit",className:o="",processing:n,children:l,onClick:d}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+o,disabled:n,children:[l,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function K({type:c="submit",className:o="",processing:n,children:l,onClick:d}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+o,disabled:n,children:[l,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const X=c=>e("a",{href:c.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function Y({type:c="submit",className:o="",processing:n,children:l,onClick:d}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+o,disabled:n,children:[l,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function Z({type:c="submit",className:o="",processing:n,children:l,onClick:d}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+o,disabled:n,children:[l,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function ee({type:c="submit",className:o="",processing:n,children:l,onClick:d}){return s("button",{style:{backgroundColor:"#57C700"},type:c,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+o,disabled:n,children:[l,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const de=({auth:c,contratos:o})=>{const[n,l]=i.exports.useState(o.data);m("th").click(function(){var t=m(this).parents("table").eq(0),r=t.find("tr:gt(0)").toArray().sort(d(m(this).index()));this.asc=!this.asc,this.asc||(r=r.reverse());for(var a=0;a<r.length;a++)t.append(r[a]);C(m(this),this.asc)});function d(t){return function(r,a){var u=p(r,t),h=p(a,t);return m.isNumeric(u)&&m.isNumeric(h)?u-h:u.localeCompare(h)}}function p(t,r){return m(t).children("td").eq(r).html()}function C(t,r){m("th").each(function(a){m(this).removeClass("sorting"),m(this).removeClass("asc"),m(this).removeClass("desc")}),t.addClass("sorting"),r?t.addClass("asc"):t.addClass("desc")}const[_,te]=i.exports.useState(!0),[b,f]=i.exports.useState(0),S=t=>{f(t.id)},k=()=>{f(0)},[g,P]=i.exports.useState(0),[x,E]=i.exports.useState(0);i.exports.useEffect(()=>{document.getElementById("div1");var t=document.getElementById("tabla");document.getElementById("wrapper1");var r=document.getElementById("scroll-table");P(t.offsetWidth),E(r.offsetWidth);var a=document.getElementById("wrapper1"),u=document.querySelector("#scroll-table");a.onscroll=function(){u.scrollLeft=a.scrollLeft},u.onscroll=function(){a.scrollLeft=u.scrollLeft}});const[I,q]=i.exports.useState(o.to),[$,j]=i.exports.useState(o.from),[B,L]=i.exports.useState(o.total),[A,F]=i.exports.useState(o.next_page_url),[W,z]=i.exports.useState(o.prev_page_url),[D,y]=i.exports.useState(""),[U,V]=i.exports.useState(""),N=()=>{var t=document.getElementById("form_busqueda_rapida");let r=new FormData(t),a={};return r.forEach(function(h,R){a[R]=h}),H(a)},H=t=>{const r=[];for(let a in t)r.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));return r.join("&")},v=t=>{if(t==null)return;const r=N();fetch(t+"&"+r).then(a=>a.json()).then(a=>{w(a)})},M=t=>{y(t.target.value);const r=N();fetch("/contratos/?"+r).then(a=>a.json()).then(a=>{w(a)})},w=t=>{l(t.data),q(t.to),j(t.from),L(t.total),F(t.next_page_url),z(t.prev_page_url)};return i.exports.useEffect(()=>{const t=window.location.search,r=new URLSearchParams(t),a=r.get("fecha_publicacion");a!=null&&V(a);const u=r.get("buscador_rapido");u!=null&&y(u)},[]),s(O,{auth:c,children:[e("link",{rel:"shortcut icon",href:"#"}),s("div",{children:[s("div",{className:"contenedor-filtros",children:[s("div",{className:"",children:[s("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{className:"buscador_rapido",name:"buscador_rapido",type:"text",value:D,placeholder:"Búsqueda rápida",onChange:M}),e("input",{name:"fecha_publicacion",type:"hidden",value:U}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-color",children:"search"})]}),e("div",{className:"",children:s("button",{className:"buscador_avanzado mb-3",children:[e("span",{className:"material-symbols-outlined",children:"list"}),e("span",{className:"color-texto",children:"Búsqueda avanzada"})]})}),s("div",{className:"input-filtro-estado",children:[e("span",{className:"input-filtro-estado-span",children:"Visualizar:"}),s("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e("div",{children:e(G,{nextHandler:()=>v(A),prevHandler:()=>v(W),currentPage:$,totalPaginas:I,totalElementos:B})})]}),s("div",{className:"contenedor-contratos",children:[e("div",{className:"contenedor-opciones-usuarios",children:e(Q,{})}),s("div",{className:"alto-tabla bg-white overflow-auto ",id:"scroll-table",children:[e("div",{id:"wrapper1",style:{width:x>0?x:0+"px"},children:e("div",{id:"div1",style:{width:g>0?g:0+"px"}})}),s("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:s("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"Portal"}),e("th",{children:"Entidad"}),e("th",{children:"Objeto"}),e("th",{children:"Cuantía"}),e("th",{children:"Modalidad"}),e("th",{children:"Número"}),e("th",{children:"Estado"}),e("th",{children:"Publicada"}),e("th",{children:"Ubicación"}),e("th",{children:"Contratista"}),e("th",{children:"Actividad económica"})]})}),e("tbody",{children:n.map(t=>s("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 text-left mw-90",children:s("div",{className:"iconos-horizontal width-columna-acciones",children:[s("div",{children:[e(Z,{}),e(X,{url:t.link}),e(Y,{})]}),s("div",{className:"",children:[e(J,{}),e(K,{}),e(ee,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:t.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.entidad_contratante})}),s("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:[_&&e(T,{children:b!=t.id&&s("span",{className:"data-text",children:[t.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>S(t),children:"Ver más"})]})}),b==t.id&&e("div",{className:"showmore",children:s("span",{className:"data-text",children:[t.objeto,e("a",{className:"text-primary",onClick:()=>k(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:t.valor>0?"$"+t.valor.toLocaleString("ch-CH"):t.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:t.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:t.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:t.contratista})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.actividad_economica})})]},t.id))})]})]})]})]})]})};export{de as default};
