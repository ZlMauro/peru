import{u,r as p,j as a,a as e,H as f,L as g}from"./app-cf2218a8.js";import{G as h}from"./GuestLayout-baaa5eeb.js";import{I as m}from"./InputError-a19f8482.js";import{P as w}from"./PrimaryButton-e45c8717.js";import{T as i}from"./TextInput-890ced27.js";import"./estilos-capa-autentificacion-2e7134da.js";import"./ApplicationLogoLici-0e423e93.js";function j(){const{data:r,setData:n,post:l,processing:d,errors:t,reset:c}=u({name:"",email:"",password:"",password_confirmation:""});p.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const o=s=>{n(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(h,{children:[e(f,{title:"Register"}),a("form",{onSubmit:s=>{s.preventDefault(),l(route("register"))},children:[a("div",{children:[e(i,{placeholder:"Nombre",id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:o,required:!0}),e(m,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{placeholder:"Correo",id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:o,required:!0}),e(m,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{placeholder:"Contraseña",id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:o,required:!0}),e(m,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{placeholder:"Confirmar contraseña",id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",handleChange:o,required:!0}),e(m,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Ya estas Registrado?"}),e(w,{className:"ml-4",processing:d,children:"Registrarme"})]})]})]})}export{j as default};
