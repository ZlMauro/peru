import{u as l,j as c,a as e,H as m}from"./app-84c20931.js";import{A as g}from"./AuthenticatedLayout-538a3e73.js";import{I as i}from"./InputError-5169a4f5.js";import{P as p}from"./PrimaryButton-932b8739.js";/* empty css                               */import"./ApplicationLogo-d580b709.js";import"./transition-97204ebc.js";const x=({auth:n})=>{const{data:a,setData:r,post:u,processing:t,reset:d,errors:s}=l({nombre_completo:"",identificacion:"",celular:"",indicativo:"",telefono_fijo:"",direccion:"",ciudad:"",pais:"",idplan:"",email:"",fecha_vencimiento:"",estado:"",origen:"",password:"",nombre_empresa:"",nit_empresa:"",pais_empresa:"",ciudad_empresa:"",direccion_empresa:"",celular_empresa:"",indicativo_empresa:"",telefono_fijo_empresa:"",email_facturacion_empresa:"",descripcion_actividad_economica:""});return c(g,{auth:n,children:[e(m,{title:"Crear Usuario"}),e("div",{className:"max-w-5xl mx-auto p-4 sm:p-6 lg:p-8",children:e("form",{onSubmit:o=>{o.preventDefault(),u(route("usuarios.store"),{onSuccess:()=>d()})},children:c("div",{children:[c("div",{className:"contenedor-usuarios",children:[e("input",{style:{width:"250px"},value:a.identificacion,onChange:o=>r("identificacion",o.target.value),type:"text",placeholder:"Documento de identidad",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.identificacion,className:"mt-2"}),e("input",{value:a.nombre_completo,onChange:o=>r("nombre_completo",o.target.value),type:"text",placeholder:"Nombre completo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.nombre_completo,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{style:{width:"150px"},value:a.pais,onChange:o=>r("pais",o.target.value),type:"text",placeholder:"pais",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.pais,className:"mt-2"}),e("input",{style:{width:"150px"},value:a.indicativo,onChange:o=>r("indicativo",o.target.value),type:"text",placeholder:"Indicativo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.indicativo,className:"mt-2"}),e("input",{value:a.celular,onChange:o=>r("celular",o.target.value),type:"text",placeholder:"Celular",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.celular,className:"mt-2"}),e("input",{value:a.telefono_fijo,onChange:o=>r("telefono_fijo",o.target.value),type:"text",placeholder:"Teléfono Fijo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.telefono_fijo,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{value:a.ciudad,onChange:o=>r("ciudad",o.target.value),type:"text",placeholder:"ciudad",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.ciudad,className:"mt-2"}),e("input",{value:a.direccion,onChange:o=>r("direccion",o.target.value),type:"text",placeholder:"Direccion",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.direccion,className:"mt-2"})]}),c("div",{children:[e("input",{value:a.email,onChange:o=>r("email",o.target.value),type:"text",placeholder:"email",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.email,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{value:a.idplan,onChange:o=>r("idplan",o.target.value),type:"number",placeholder:"idplan",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.idplan,className:"mt-2"}),e("input",{value:a.fecha_vencimiento,onChange:o=>r("fecha_vencimiento",o.target.value),type:"date",placeholder:"fecha_vencimiento",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.fecha_vencimiento,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{value:a.estado,onChange:o=>r("estado",o.target.value),type:"number",placeholder:"estado",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.estado,className:"mt-2"}),e("input",{value:a.origen,onChange:o=>r("origen",o.target.value),type:"text",placeholder:"origen",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.origen,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{style:{width:"250px"},value:a.nit_empresa,onChange:o=>r("nit_empresa",o.target.value),type:"text",placeholder:"nit_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.nit_empresa,className:"mt-2"}),e("input",{value:a.nombre_empresa,onChange:o=>r("nombre_empresa",o.target.value),type:"text",placeholder:"nombre_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.nombre_empresa,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{style:{width:"150px"},value:a.pais_empresa,onChange:o=>r("pais_empresa",o.target.value),type:"text",placeholder:"pais_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.pais_empresa,className:"mt-2"}),e("input",{style:{width:"150px"},value:a.indicativo_empresa,onChange:o=>r("indicativo_empresa",o.target.value),type:"text",placeholder:"indicativo_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.indicativo_empresa,className:"mt-2"}),e("input",{value:a.celular_empresa,onChange:o=>r("celular_empresa",o.target.value),type:"text",placeholder:"celular_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.celular_empresa,className:"mt-2"}),e("input",{value:a.telefono_fijo_empresa,onChange:o=>r("telefono_fijo_empresa",o.target.value),type:"text",placeholder:"telefono_fijo_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.telefono_fijo_empresa,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{value:a.ciudad_empresa,onChange:o=>r("ciudad_empresa",o.target.value),type:"text",placeholder:"ciudad_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.ciudad_empresa,className:"mt-2"}),e("input",{value:a.direccion_empresa,onChange:o=>r("direccion_empresa",o.target.value),type:"text",placeholder:"direccion_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.direccion_empresa,className:"mt-2"})]}),c("div",{className:"contenedor-usuarios",children:[e("input",{value:a.email_facturacion_empresa,onChange:o=>r("email_facturacion_empresa",o.target.value),type:"text",placeholder:"email_facturacion_empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.email_facturacion_empresa,className:"mt-2"}),e("input",{value:a.descripcion_actividad_economica,onChange:o=>r("descripcion_actividad_economica",o.target.value),type:"text",placeholder:"descripcion_actividad_economica",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.descripcion_actividad_economica,className:"mt-2"})]}),c("div",{children:[e("input",{value:a.password,onChange:o=>r("password",o.target.value),type:"text",placeholder:"password",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:s.password,className:"mt-2"})]}),e(p,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:t,children:"Crear"})]})})})]})};export{x as default};
