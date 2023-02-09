import{j as t,a as e,u as L,r as C,F as V}from"./app-05dc8ec8.js";import{A as F}from"./AuthenticatedLayout-224d911a.js";import{A as O}from"./MenuOpciones-aecfd240.js";import{$ as d,P as B}from"./jquery-56334aef.js";/* empty css              */import"./estilos-capa-autentificacion-dd46a478.js";import"./ApplicationLogoLici-13df8ddd.js";import"./transition-404e8073.js";function D({type:n="submit",className:s="",processing:r,children:i,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[i,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function H({type:n="submit",className:s="",processing:r,children:i,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[i,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const M=n=>e("a",{href:n.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function R({type:n="submit",className:s="",processing:r,children:i,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[i,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function G({type:n="submit",className:s="",processing:r,children:i,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[i,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function J({type:n="submit",className:s="",processing:r,children:i,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[i,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const de=({auth:n,contratos:s,totalContratos:r,pagina:i,numElementosPagina:c,totalElemetosPaginados:k})=>{const{data:K,setData:Q,post:T,get:f,processing:W,reset:X,errors:Y}=L({}),[P,Z]=C.exports.useState(!0),[x,y]=C.exports.useState(0);d("th").click(function(){var a=d(this).parents("table").eq(0),o=a.find("tr:gt(0)").toArray().sort(_(d(this).index()));this.asc=!this.asc,this.asc||(o=o.reverse());for(var l=0;l<o.length;l++)a.append(o[l]);$(d(this),this.asc)});function _(a){return function(o,l){var m=N(o,a),g=N(l,a);return d.isNumeric(m)&&d.isNumeric(g)?m-g:m.localeCompare(g)}}function N(a,o){return d(a).children("td").eq(o).html()}function $(a,o){d("th").each(function(l){d(this).removeClass("sorting"),d(this).removeClass("asc"),d(this).removeClass("desc")}),a.addClass("sorting"),o?a.addClass("asc"):a.addClass("desc")}var u=0,h=0;s.length>0&&(u=s[s.length-1].id,h=s[0].id);var S=u;const b=30,v=r,U=parseInt(v/b)+1;var p="";s.length>0&&(u=s[s.length-1].id,h=s[0].id);const A=window.location.search,w=new URLSearchParams(A).get("fecha_publicacion");w!=null&&(p="fecha_publicacion="+w);const j=()=>{i>=U||f("/contratos/"+S+"/"+i+"/next?"+p)},q=()=>{i!=1&&f("/contratos/"+h+"/"+i+"/prev?"+p)},z=a=>{const o=a.target.value,l=datos.filter(function(m){return m.entidad_contratante.toUpperCase().indexOf(o.toUpperCase())!==-1||m.objeto.toUpperCase().indexOf(o.toUpperCase())!==-1||m.ubicacion.toUpperCase().indexOf(o.toUpperCase())!==-1});setItems([...l].splice(0,b))},E=a=>{y(a.id)},I=()=>{y(0)};return t(F,{auth:n,children:[e("link",{rel:"shortcut icon",href:"#"}),t("div",{children:[t("div",{className:"contenedor-filtros",children:[t("div",{className:"",children:[e("input",{className:"buscador_rapido",id:"buscar",type:"text",placeholder:"Búsqueda rápida",onChange:z}),e("span",{className:"material-symbols-outlined posicion-color",children:"search"})]}),e("div",{className:"",children:t("button",{className:"buscador_avanzado mb-3",children:[e("span",{className:"material-symbols-outlined margen-color",children:"list"}),e("span",{className:"color-texto",children:"Búsqueda avanzada"})]})}),t("div",{className:"input-filtro-estado",children:[e("span",{className:"span-visualizar",children:"Visualizar:"}),t("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e(B,{nextHandler:j,prevHandler:q,currentPage:k,itemsPagina:b,totalElementos:v,totalPaginas:c})]}),t("div",{className:"contenedor-contratos",children:[e("div",{className:"contenedor-opciones-usuarios",children:e(O,{})}),e("div",{className:"alto-tabla bg-white overflow-auto ",children:t("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:t("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"Portal"}),e("th",{children:"Entidad"}),e("th",{children:"Objeto"}),e("th",{children:"Cuantía"}),e("th",{children:"Modalidad"}),e("th",{children:"Número"}),e("th",{children:"Estado"}),e("th",{children:"Publicada"}),e("th",{children:"Ubicación"}),e("th",{children:"Contratista"}),e("th",{children:"Actividad económica"})]})}),e("tbody",{children:s.map(a=>t("tr",{className:"tr",children:[e("td",{className:"border border-gray-200 text-left",children:t("div",{className:"iconos-horizontal width-columna-acciones",children:[t("div",{children:[e(G,{}),e(M,{url:a.link}),e(R,{})]}),t("div",{className:"",children:[e(D,{}),e(H,{}),e(J,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:a.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:a.entidad_contratante})}),t("td",{className:"border border-gray-200 text-left margen-textos",children:[P&&e(V,{children:x!=a.id&&t("span",{className:"data-text",children:[a.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>E(a),children:"Ver más"})]})}),x==a.id&&e("div",{className:"showmore",children:t("span",{className:"data-text",children:[a.objeto,e("a",{className:"text-primary",onClick:()=>I(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:a.valor>0?"$"+a.valor.toLocaleString("ch-CH"):a.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:a.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:a.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:a.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:a.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:a.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:a.contratista})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:a.actividad_economica})})]},a.id))})]})})]})]})]})};export{de as default};
