import{u as d,j as t,a as e,H as u}from"./app-1f7e075b.js";import{G as c}from"./GuestLayout-2985e7e5.js";import{I as p}from"./InputError-33c8c056.js";import{P as w}from"./PrimaryButton-0ac4e121.js";import{T as f}from"./TextInput-d3cd4691.js";import"./estilos-capa-autentificacion-ecf20b32.js";import"./ApplicationLogoLici-4a8f0962.js";function P({status:s}){const{data:o,setData:r,post:m,processing:l,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return t(c,{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(f,{id:"password",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(p,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(w,{className:"ml-4",processing:l,children:"Email Password Reset Link"})})]})]})}export{P as default};