import{j as t,a as e,u as _}from"./app-ea0a2832.js";import{A as $}from"./AuthenticatedLayout-8a2d67ea.js";import{A as U}from"./MenuOpciones-9df62126.js";import{$ as d,P as A}from"./jquery-37f13ab8.js";import"./ApplicationLogo-8d72f250.js";import"./ApplicationLogoLici-878509d9.js";import"./transition-ac3900f8.js";/* empty css                                     */function q({type:n="submit",className:s="",processing:r,children:o,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[o,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function j({type:n="submit",className:s="",processing:r,children:o,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[o,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}function z({type:n="submit",className:s="",processing:r,children:o,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[o,e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})]})}function E({type:n="submit",className:s="",processing:r,children:o,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[o,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function H({type:n="submit",className:s="",processing:r,children:o,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[o,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function I({type:n="submit",className:s="",processing:r,children:o,onClick:c}){return t("button",{style:{backgroundColor:"#57C700"},type:n,onClick:c,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+s,disabled:r,children:[o,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const ee=({auth:n,contratos:s,totalContratos:r,pagina:o})=>{const{data:c,setData:O,post:V,get:f,processing:B,reset:L,errors:R}=_({});console.log(s),d("th").click(function(){var a=d(this).parents("table").eq(0),i=a.find("tr:gt(0)").toArray().sort(N(d(this).index()));this.asc=!this.asc,this.asc||(i=i.reverse());for(var l=0;l<i.length;l++)a.append(i[l]);v(d(this),this.asc)});function N(a){return function(i,l){var m=g(i,a),p=g(l,a);return d.isNumeric(m)&&d.isNumeric(p)?m-p:m.localeCompare(p)}}function g(a,i){return d(a).children("td").eq(i).html()}function v(a,i){d("th").each(function(l){d(this).removeClass("sorting"),d(this).removeClass("asc"),d(this).removeClass("desc")}),a.addClass("sorting"),i?a.addClass("asc"):a.addClass("desc")}var w=s[s.length-1].id;const C=s[0].id,u=30,x=r,y=parseInt(x/u)+1,P=o;var h="";const k=window.location.search,b=new URLSearchParams(k).get("fecha_publicacion");return console.log(b),b!=null&&(h="fecha_publicacion="+b),t($,{auth:n,children:[e("link",{rel:"shortcut icon",href:"#"}),t("div",{children:[t("div",{className:"contenedor-filtros",children:[t("div",{className:"",children:[e("input",{className:"buscador_rapido",id:"buscar",type:"text",placeholder:"Búsqueda rápida",onChange:a=>{const i=a.target.value,l=datos.filter(function(m){return m.entidad_contratante.toUpperCase().indexOf(i.toUpperCase())!==-1||m.objeto.toUpperCase().indexOf(i.toUpperCase())!==-1||m.ubicacion.toUpperCase().indexOf(i.toUpperCase())!==-1});setItems([...l].splice(0,u))}}),e("span",{className:"material-symbols-outlined posicion-color",children:"search"})]}),e("div",{className:"",children:t("button",{className:"buscador_avanzado mb-3",children:[e("span",{className:"material-symbols-outlined margen-color",children:"list"}),e("span",{className:"color-texto",children:"Búsqueda avanzada"})]})}),t("div",{className:"input-filtro-estado",children:[e("span",{className:"span-visualizar",children:"Visualizar:"}),t("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e(A,{nextHandler:()=>{o>=y||f("/contratos/"+w+"/"+o+"/next?"+h)},prevHandler:()=>{o!=1&&f("/contratos/"+C+"/"+o+"/prev?"+h)},currentPage:P,itemsPagina:u,totalElementos:x,totalPaginas:y})]}),t("div",{className:"contenedor-contratos",children:[e(U,{}),e("div",{className:"alto-tabla bg-white overflow-auto ",children:t("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:t("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"Portal"}),e("th",{children:"Entidad"}),e("th",{children:"Objeto"}),e("th",{children:"Cuantía"}),e("th",{children:"Modalidad"}),e("th",{children:"Número"}),e("th",{children:"Estado"}),e("th",{children:"Publicada"}),e("th",{children:"Ubicación"}),e("th",{children:"Contratista"}),e("th",{children:"Actividad económica"})]})}),e("tbody",{children:s.map(a=>t("tr",{children:[e("td",{className:"border border-gray-200 text-left",children:t("div",{className:"iconos-horizontal width-columna-acciones",children:[t("div",{children:[e(H,{}),e(z,{}),e(E,{})]}),t("div",{className:"",children:[e(q,{}),e(j,{}),e(I,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:a.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:a.entidad_contratante})}),t("td",{className:"border border-gray-200 text-left margen-textos",children:[t("span",{className:"data-text",children:[a.objeto.substr(0,40),"..."," "]}),e("a",{href:"",className:"text-primary",children:"Ver más"})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:a.valor>0?"$"+a.valor.toLocaleString("ch-CH"):a.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:a.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:a.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:a.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:a.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:a.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:a.contratista})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:a.actividad_economica})})]},a.id))})]})})]})]})]})};export{ee as default};
