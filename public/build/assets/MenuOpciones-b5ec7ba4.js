import{r as m,j as n,a as e,F as a}from"./app-6d4d7861.js";const d="_submenu_1i6z1_1",u="_angleDropdownMenu_1i6z1_87",b="_itemCheckboxMenuSubtitle_1i6z1_119",h="_bodyAllPerfiles_1i6z1_135",p="_contenedorCarpetas_1i6z1_155",_="_submenuTitle_1i6z1_163",f="_submenuItem_1i6z1_179",x="_iconContraerCampanaClick_1i6z1_203",i={submenu:d,"iconos-tamano":"_iconos-tamano_1i6z1_61","lista-opciones":"_lista-opciones_1i6z1_71",angleDropdownMenu:u,itemCheckboxMenuSubtitle:b,bodyAllPerfiles:h,contenedorCarpetas:p,submenuTitle:_,submenuItem:f,iconContraerCampanaClick:x};const v=()=>{const[t,C]=m.exports.useState(!0),[o,l]=m.exports.useState(!1);return n("div",{children:[e("head",{children:e("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap",rel:"stylesheet"})}),e("div",{className:"contenedor-opciones",children:e("div",{className:` ${t?"w-30":"w-20 "} h-screen p-10 relative lista-opciones`,children:e("ul",{className:"lista-opciones margen-nav",children:[{title:e("a",{className:"opciones-menu-text",children:"Menú Admin"}),icon:"bi bi-shield text-base material-symbols-outlined iconos-tamano",submenu:!0,submenuItems:[{title:"Usuarios",href:"/usuarios"},{title:"Planes",href:"/planes"},{title:"Actividades económicas",href:"/actividades-economicas"},{title:"Localización",href:"/localizacion"}]},{title:e("a",{className:"opciones-menu-text",children:"Perfiles"}),icon:"bi bi-funnel text-base material-symbols-outlined iconos-tamano"},{title:e("a",{className:"opciones-menu-text",children:"Mis Seguimientos"}),icon:"bi bi-eye text-base material-symbols-outlined iconos-tamano"},{title:e("a",{className:"opciones-menu-text",children:"Carpetas"}),icon:"bi bi-folder text-base material-symbols-outlined iconos-tamano"},{title:e("a",{className:"opciones-menu-text",children:"Todos los Contratos"}),icon:"bi bi-search text-base material-symbols-outlined iconos-tamano",href:"/contratos"},{title:e("a",{className:"opciones-menu-text",children:"Ajustes"}),icon:"bi bi-gear text-base material-symbols-outlined iconos-tamano"}].map((s,c)=>n(a,{children:[e("li",{className:`text-center rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-center gap-x-4 ${c===0?"bg-light-white":""}`,children:s.submenu&&t?n(a,{children:[e("i",{className:s.icon,onClick:()=>{l(!o)}}),e("p",{className:`${!t&&"hidden"} origin-left`,children:s.title})]}):e(a,{children:n("a",{href:s.href,children:[e("i",{className:s.icon}),e("p",{className:`${!t&&"hidden"} origin-left`,children:s.title})]})})},c),e("hr",{}),s.submenu&&o&&t&&n("ul",{className:i.submenu,children:[e("span",{className:i.angleDropdownMenu}),n("div",{className:"drop-perfiles drop-carpetas position-relative",children:[e("span",{className:i.iconContraerCampanaClick,children:e("i",{className:"bi bi-chevron-double-left",onClick:()=>l(!1)})}),e("div",{className:i.itemCheckboxMenuSubtitle,children:e("label",{className:i.submenuTitle,children:"Administración"})}),e("div",{className:i.bodyAllPerfiles,children:e("div",{className:i.contenedorCarpetas,children:s.submenuItems.map((r,g)=>e("div",{children:e("a",{className:i.submenuItem,href:r.href,children:r.title})}))})})]})]})]}))})})})]})};export{v as A};
