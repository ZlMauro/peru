import{u,j as o,a as e,H as m}from"./app-89e0a176.js";import{A as p}from"./AuthenticatedLayout-bd3a4e1a.js";import{I as l}from"./InputError-814ca4cf.js";import{P as g}from"./PrimaryButton-68c2a3d7.js";/* empty css                               */import"./estilos-capa-autentificacion-7c37d50e.js";import"./ApplicationLogoLici-c86d5ecb.js";import"./transition-d572af44.js";const F=({auth:c})=>{const{data:r,setData:i,post:n,processing:t,reset:d,errors:s}=u({identificacion:"",nombre_completo:"",estado:"",email:"",indicativo:"",celular:"",telefono_fijo:"",pais:"",ciudad:"",direccion:"",idplan:"",fecha_vencimiento:"",origen:"",nit_empresa:"",nombre_empresa:"",email_facturacion_empresa:"",indicativo_empresa:"",celular_empresa:"",telefono_fijo_empresa:"",pais_empresa:"",ciudad_empresa:"",direccion_empresa:"",descripcion_actividad_economica:"",password:""});return o(p,{auth:c,children:[e(m,{title:"Crear Usuario"}),o("div",{className:"max-w-5xl mx-auto p-4 sm:p-6 lg:p-8",children:[e("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}),e("div",{className:"titulo",children:"Creación de usuario"}),e("div",{className:"separacion",children:"- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"}),o("form",{onSubmit:a=>{a.preventDefault(),n(route("usuarios.store"),{onSuccess:()=>d()})},children:[o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"identificacion",children:"Documento De Identidad:"}),e("input",{style:{width:"233px"},value:r.identificacion,onChange:a=>i("identificacion",a.target.value),type:"text",placeholder:"Documento De Identidad",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.identificacion,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"nombre_completo",children:"Nombre Completo:"}),e("input",{style:{width:"470px"},value:r.nombre_completo,onChange:a=>i("nombre_completo",a.target.value),type:"text",placeholder:"Nombre Completo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.nombre_completo,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"Estado",children:"Estado:"}),e("input",{style:{marginLeft:"10px"},value:r.estado,onChange:a=>i("estado",a.target.value),type:"number",placeholder:"Estado",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.estado,className:"mt-2"})]})]}),o("div",{children:[e("label",{htmlFor:"email",children:"Email:"}),e("input",{style:{width:"466px"},value:r.email,onChange:a=>i("email",a.target.value),type:"email",placeholder:"Email",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.email,className:"mt-2"})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"pais",children:"País:"}),e("input",{style:{width:"233px"},value:r.pais,onChange:a=>i("pais",a.target.value),type:"text",placeholder:"País",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.pais,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"indicativo",children:"Indicativo:"}),e("input",{style:{width:"233px"},value:r.indicativo,onChange:a=>i("indicativo",a.target.value),type:"text",placeholder:"Indicativo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.indicativo,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"celular",children:"Celular:"}),e("input",{style:{width:"233px"},value:r.celular,onChange:a=>i("celular",a.target.value),type:"text",placeholder:"Celular",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.celular,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"telefono_fijo",children:"Teléfono Fijo:"}),e("input",{style:{marginLeft:"10px",width:"233px"},value:r.telefono_fijo,onChange:a=>i("telefono_fijo",a.target.value),type:"text",placeholder:"Teléfono Fijo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.telefono_fijo,className:"mt-2"})]})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"ciudad",children:"Ciudad:"}),e("input",{style:{width:"233px"},value:r.ciudad,onChange:a=>i("ciudad",a.target.value),type:"text",placeholder:"Ciudad",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.ciudad,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"direccion",children:"Dirección:"}),e("input",{style:{width:"233px"},value:r.direccion,onChange:a=>i("direccion",a.target.value),type:"text",placeholder:"Dirección",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.direccion,className:"mt-2"})]})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"idplan",children:"Id plan:"}),e("input",{style:{width:"233px"},value:r.idplan,onChange:a=>i("idplan",a.target.value),type:"number",placeholder:"Id plan",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.idplan,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"fecha_vencimiento",children:"Fecha Fin Plan:"}),e("input",{style:{width:"233px"},value:r.fecha_vencimiento,onChange:a=>i("fecha_vencimiento",a.target.value),type:"date",placeholder:"",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.fecha_vencimiento,className:"mt-2"})]})]}),e("div",{className:"contenedor-usuarios",children:o("div",{children:[e("label",{htmlFor:"origen",children:"Origen:"}),e("input",{style:{width:"233px"},value:r.origen,onChange:a=>i("origen",a.target.value),type:"text",placeholder:"Origen",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.origen,className:"mt-2"})]})}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"nit_empresa",children:"Nit Empresa:"}),e("input",{style:{width:"233px"},value:r.nit_empresa,onChange:a=>i("nit_empresa",a.target.value),type:"text",placeholder:"Nit Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.nit_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"nombre_empresa",children:"Nombre Empresa:"}),e("input",{style:{width:"460px"},value:r.nombre_empresa,onChange:a=>i("nombre_empresa",a.target.value),type:"text",placeholder:"Nombre Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.nombre_empresa,className:"mt-2"})]})]}),e("div",{children:o("div",{children:[e("label",{htmlFor:"email_facturacion_empresa",children:"Email Facturación Empresa:"}),e("input",{style:{width:"466px"},value:r.email_facturacion_empresa,onChange:a=>i("email_facturacion_empresa",a.target.value),type:"email",placeholder:"Email Facturación Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.email_facturacion_empresa,className:"mt-2"})]})}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"pais_empresa",children:"País Empresa:"}),e("input",{style:{width:"233px"},value:r.pais_empresa,onChange:a=>i("pais_empresa",a.target.value),type:"text",placeholder:"País Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.pais_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"indicativo_empresa",children:"Indicativo Empresa:"}),e("input",{style:{width:"233px"},value:r.indicativo_empresa,onChange:a=>i("indicativo_empresa",a.target.value),type:"text",placeholder:"Indicativo Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.indicativo_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"celular_empresa",children:"Celular Empresa:"}),e("input",{style:{width:"233px"},value:r.celular_empresa,onChange:a=>i("celular_empresa",a.target.value),type:"text",placeholder:"Celular Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.celular_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"telefono_fijo_empresa",children:"Teléfono Fijo Empresa:"}),e("input",{style:{marginLeft:"10px",width:"233px"},value:r.telefono_fijo_empresa,onChange:a=>i("telefono_fijo_empresa",a.target.value),type:"text",placeholder:"Teléfono Fijo Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.telefono_fijo_empresa,className:"mt-2"})]})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"ciudad_empresa",children:"Ciudad Empresa:"}),e("input",{value:r.ciudad_empresa,onChange:a=>i("ciudad_empresa",a.target.value),type:"text",placeholder:"Ciudad Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.ciudad_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"direccion_empresa",children:"Dirección Empresa:"}),e("input",{style:{marginLeft:"10px"},value:r.direccion_empresa,onChange:a=>i("direccion_empresa",a.target.value),type:"text",placeholder:"Dirección Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.direccion_empresa,className:"mt-2"})]})]}),o("div",{children:[e("label",{htmlFor:"descripcion_actividad_economica",children:"Descripción Actividad Económica"}),e("input",{value:r.descripcion_actividad_economica,onChange:a=>i("descripcion_actividad_economica",a.target.value),type:"text",placeholder:"Descripción Actividad Económica",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.descripcion_actividad_economica,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"password",children:"Contraseña:"}),e("input",{style:{width:"233px"},value:r.password,onChange:a=>i("password",a.target.value),type:"password",placeholder:"Contraseña",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.password,className:"mt-2"})]}),e("div",{className:"boton-crear-editar",children:e(g,{className:`mt-4 \r
                        text-white \r
                        bg-gradient-to-br\r
                        from-sky-600\r
                        to-sky-600 \r
                        hover:bg-gradient-to-bl \r
                        focus:ring-1 \r
                        focus:outline-none \r
                        focus:ring-blue-300\r
                        dark:focus:ring-blue-800 \r
                        font-medium \r
                        rounded-lg \r
                        text-sm \r
                        px-5 \r
                        py-2.5 \r
                        text-center \r
                        mr-2 \r
                        mb-2`,disabled:t,children:"Crear Usuario"})})]})]})]})};export{F as default};
