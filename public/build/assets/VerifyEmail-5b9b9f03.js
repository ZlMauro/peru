import{u as s,j as i,a as e,H as a,L as m}from"./app-5aee9584.js";import{G as d}from"./GuestLayout-0dae31c1.js";import{P as l}from"./PrimaryButton-a071a1fa.js";import"./ApplicationLogo-76f3ccfe.js";import"./ApplicationLogoLici-db4757ac.js";/* empty css                                     */function v({status:t}){const{post:r,processing:n}=s();return i(d,{children:[e(a,{title:"Email Verification"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:o=>{o.preventDefault(),r(route("verification.send"))},children:i("div",{className:"mt-4 flex items-center justify-between",children:[e(l,{processing:n,children:"Resend Verification Email"}),e(m,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Cerrar sesión"})]})})]})}export{v as default};
