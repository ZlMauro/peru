import{a as e,j as l,L as U,u as E,r as N,H as I}from"./app-1f7e075b.js";import{A as M}from"./AuthenticatedLayout-24deb549.js";import{A}from"./MenuOpciones-8d95fd9f.js";import{$ as d,P as j}from"./jquery-af4a1b27.js";/* empty css                               *//* empty css                      */import"./estilos-capa-autentificacion-ecf20b32.js";import"./ApplicationLogoLici-4a8f0962.js";import"./transition-318be9f8.js";const k=a=>{const{handleSearch:r}=a;return e("div",{className:"modal fade show",id:"deleteModal"+a.usuario.id,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:{display:"block"},children:e("div",{className:"modal-dialog",children:l("div",{className:"modal-content",children:[l("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"exampleModalLabel",children:"Eliminar Plan"}),e("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:r})]}),e("div",{className:"modal-body",children:e("div",{className:"row",children:e("div",{className:"col-12",children:l("h6",{className:"color-negro",children:["¿Quieres eliminar el usuario ",a.usuario.nombre_completo," ?"]})})})}),l("div",{className:"modal-footer",children:[e(U,{href:route("usuarios.destroy",a.usuario),method:"delete",as:"button",className:"btn btn-danger",children:"Eliminar"}),e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:r,children:"Cerrar"})]})]})})})};d("th").click(function(){var a=d(this).parents("table").eq(0),r=a.find("tr:gt(0)").toArray().sort(L(d(this).index()));this.asc=!this.asc,this.asc||(r=r.reverse());for(var s=0;s<r.length;s++)a.append(r[s]);S(d(this),this.asc)});function L(a){return function(r,s){var o=f(r,a),n=f(s,a);return d.isNumeric(o)&&d.isNumeric(n)?o-n:o.localeCompare(n)}}function f(a,r){return d(a).children("td").eq(r).html()}function S(a,r){d("th").each(function(s){d(this).removeClass("sorting"),d(this).removeClass("asc"),d(this).removeClass("desc")}),a.addClass("sorting"),r?a.addClass("asc"):a.addClass("desc")}const X=({auth:a,usuarios:r,totalUsuarios:s,pagina:o,numElementosPagina:n,totalElemetosPaginados:y})=>{const{data:H,setData:O,post:q,get:i,processing:z,reset:F,errors:T}=E({}),[c,m]=N.exports.useState(!1),[v,u]=N.exports.useState(0),C=t=>{m(!0),u(t.id)},_=t=>{m(!1)},h=r[r.length-1].id;var b=h;const g=r[0].id;console.log(r),console.log("Usuarios.leng "+r.length),console.log("ultimo elemeto: "+h),console.log("IDUSUARIO:"+b),console.log("primerElemento: "+g),r[0].id;const p=30,x=s,w=parseInt(x/p)+1,D=()=>{o>=w||i("/usuarios/"+b+"/"+o+"/next")},P=()=>{o!=1&&i("/usuarios/"+g+"/"+o+"/prev")};return l(M,{auth:a,children:[e(I,{title:"Usuarios"}),l("div",{className:"contenedor-usuarios",children:[e("div",{className:"posicion-opciones-usuarios",children:e(A,{})}),l("div",{className:"alto-tabla bg-white overflow-auto ",children:[l("div",{className:"usuarios",children:[l("div",{className:"contenedor-botones",children:[e("a",{className:"autorenew",href:"javascript:location.reload()",children:e("span",{className:"material-symbols-outlined actualizar-color",children:"autorenew"})}),e("a",{className:"add_circle",href:route("usuarios.create"),children:e("span",{className:"material-symbols-outlined material-symbols-outlined-color",children:"add_circle"})})]}),e("div",{className:"margen-titulo",children:"Usuarios"}),e("div",{})]}),l("table",{id:"tabla",className:"w-full bg-white border tabla ",children:[e("thead",{className:"cabecera-tabla ",style:{backgroundColor:"#00a1c9"},children:l("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"# Documento"}),e("th",{children:"Nombre"}),e("th",{children:"País"}),e("th",{children:"Ciudad"}),e("th",{children:"Dirección"}),e("th",{children:"indicativo"}),e("th",{children:"Celular"}),e("th",{children:"teléfono fijo"}),e("th",{children:"Email"}),e("th",{children:"Plan"}),e("th",{children:"Creacion"}),e("th",{children:"Final Plan"}),e("th",{children:"Estado"}),e("th",{children:"Como se entero de Licitaciones"}),e("th",{children:"NIT"}),e("th",{children:"Empresa"}),e("th",{children:"País empresa"}),e("th",{children:"Ciudad empresa"}),e("th",{children:"Dirección empresa"}),e("th",{children:"Indicativo empresa"}),e("th",{children:"Celular empresa"}),e("th",{children:"Telefono fijo empresa"}),e("th",{children:"Email empresa"}),e("th",{children:"Actividad economica"})]})}),e("tbody",{children:r.map(t=>l("tr",{children:[e("td",{className:"border border-gray-200 text-left px-4 ",children:l("div",{className:"iconos-horizontal",children:[l("div",{className:"estilos-boton-eliminar",children:[e("button",{type:"button",className:"btn btn-danger btn-sm usuarios","data-bs-toggle":"modal","data-bs-target":"#deleteModal"+t.id,onClick:()=>{C(t)},children:e("span",{className:"material-symbols-outlined text-white iconos-tamano-margen align-middle",children:"delete"})}),c&&v==t.id&&e(k,{usuario:t,openDeleteModal:c,handleSearch:_})]}),e("div",{className:"estilos-boton-editar",children:e("a",{href:route("usuarios.update",t.uuid)+"/edit",children:e("span",{className:"material-symbols-outlined",children:"edit"})})}),e("div",{className:"estilos-boton-email",children:e("span",{className:"material-symbols-outlined",children:"mail"})})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.identificacion}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.nombre_completo}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.pais}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.ciudad}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.direccion}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.indicativo}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.celular}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.telefono_fijo}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.email}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.idplan}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.created_at.substr(0,10)}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.fecha_vencimiento}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.estado}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.origen}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.nit_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.nombre_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.pais_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.ciudad_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.direccion_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.indicativo_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.celular_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.telefono_fijo_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.email_facturacion_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.descripcion_actividad_economica})]},t.id))})]}),e(j,{nextHandler:D,prevHandler:P,currentPage:y,itemsPagina:p,totalElementos:x,totalPaginas:n})]})]})]})};export{X as default};
