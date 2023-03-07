import{a as e,L as l,r as c,j as n}from"./app-62fe4d7a.js";import{A as m}from"./ApplicationLogo-b44e2d91.js";import{A as u}from"./ApplicationLogoLici-b5a3807c.js";import{M as h,D as a}from"./AuthenticatedLayout-5b6b26e3.js";function p({method:s="get",as:r="a",href:i,active:t=!1,children:o}){return e(l,{method:s,as:r,href:i,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,children:o})}function y({auth:s,header:r,children:i}){const[t,o]=c.exports.useState(!1);return n("div",{className:"bg-gray-100 content-flex",children:[e(h,{}),n("div",{className:"",children:[n("nav",{children:[e("div",{className:"encabezado",children:n("div",{className:"flex justify-between",children:[n("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center margen-logo",children:e(l,{href:route("welcome"),active:route().current("welcome"),children:e(u,{className:"block h-9 w-auto text-gray-500"})})}),e("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"})]}),n("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:[e("div",{className:"ml-3 relative mx-5",children:n(a,{children:[e(a.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-500 focus:outline-none transition ease-in-out duration-150",children:[e("span",{className:"material-symbols-outlined mr-1 text-bold",children:"help"}),e("span",{children:"Centro de ayuda"}),e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(a.Content,{children:[n(a.Link,{href:route("logout"),method:"post",as:"button",children:[e("span",{className:"material-symbols-outlined centro-ayuda-iconos",children:"auto_stories"}),e("span",{className:"centro-ayuda-iconos-margen",children:"Instructivos"})]}),n(a.Link,{href:route("logout"),method:"post",as:"button",children:[e("span",{className:"material-symbols-outlined centro-ayuda-iconos",children:"visibility"}),e("span",{className:"centro-ayuda-iconos-margen",children:"Ver tour"})]}),n(a.Link,{href:route("logout"),method:"post",as:"button",children:[e("span",{className:"material-symbols-outlined centro-ayuda-iconos centro-ayuda-iconos-color",children:"smart_display"}),e("span",{className:"centro-ayuda-iconos-margen",children:"Videos"})]})]})]})}),e(l,{href:"/contratos",className:"margen",children:e(m,{className:"block h-9 w-auto text-gray-500"})}),e("div",{className:"ml-3 relative",children:n(a,{children:[e(a.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 border-transparent text-sm leading-4 font-medium rounded-md text-cyan-500 hover:text-gray-500 focus:outline-none transition ease-in-out duration-150",children:[e("span",{className:"material-symbols-outlined tamano-iconos",children:"account_circle"}),e("span",{children:s.user.name}),e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e(a.Content,{children:e(a.Link,{href:route("logout"),method:"post",as:"button",children:"Cerrar sesión"})})]})})]}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>o(d=>!d),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:n("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),n("div",{className:(t?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1"}),n("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[n("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:s.user.name}),e("div",{className:"font-medium text-sm text-gray-500",children:s.user.email})]}),e("div",{className:"mt-3 space-y-1",children:e(p,{method:"post",href:route("logout"),as:"button",children:"Cerrar sesión"})})]})]})]}),r&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:r})}),e("main",{children:i})]})]})}export{y as A};
