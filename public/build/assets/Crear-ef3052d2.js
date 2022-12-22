import{u as m,j as i,a as e,H as l}from"./app-45757911.js";import{A as g}from"./AuthenticatedLayout-e3f932a6.js";import{I as t}from"./InputError-544e14fc.js";import{P as p}from"./PrimaryButton-7fd9f862.js";import"./ApplicationLogo-85d2e34d.js";import"./transition-77591516.js";const x=({auth:u})=>{const{data:r,setData:a,post:n,processing:c,reset:d,errors:s}=m({nombre:"",dias:"",tiempo:"",valor:"",descripcion:"",estado:""});return i(g,{auth:u,children:[e(l,{title:"Crear Usuario"}),e("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:i("form",{onSubmit:o=>{o.preventDefault(),n(route("planes.store"),{onSuccess:()=>d()})},children:[e("input",{value:r.nombre,onChange:o=>a("nombre",o.target.value),type:"text",placeholder:"Nombre",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(t,{message:s.nombre,className:"mt-2"}),e("input",{value:r.dias,onChange:o=>a("dias",o.target.value),type:"number",placeholder:"Días",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(t,{message:s.dias,className:"mt-2"}),e("input",{value:r.tiempo,onChange:o=>a("tiempo",o.target.value),type:"number",placeholder:"Tiempo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(t,{message:s.tiempo,className:"mt-2"}),e("input",{value:r.valor,onChange:o=>a("valor",o.target.value),type:"number",placeholder:"Valor",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(t,{message:s.valor,className:"mt-2"}),e("input",{value:r.descripcion,onChange:o=>a("descripcion",o.target.value),type:"text",placeholder:"Descripción",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(t,{message:s.descripcion,className:"mt-2"}),e("input",{value:r.estado,onChange:o=>a("estado",o.target.value),type:"text",placeholder:"Estado",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(t,{message:s.estado,className:"mt-2"}),e(p,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:c,children:"Crear"})]})})]})};export{x as default};
