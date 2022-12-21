import{r as m,u as v,j as a,a as s}from"./app-90dd542b.js";import{I as d}from"./InputError-c696744a.js";import{I as c}from"./InputLabel-ca4e6c8c.js";import{P as g}from"./PrimaryButton-6e434e39.js";import{T as p}from"./TextInput-4971e738.js";import{J as _}from"./transition-f85de141.js";function b({className:i}){const u=m.exports.useRef(),l=m.exports.useRef(),{data:o,setData:t,errors:e,put:w,reset:n,processing:f,recentlySuccessful:h}=v({current_password:"",password:"",password_confirmation:""});return a("section",{className:i,children:[a("header",{children:[s("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),a("form",{onSubmit:r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>{e.password&&(n("password","password_confirmation"),u.current.focus()),e.current_password&&(n("current_password"),l.current.focus())}})},className:"mt-6 space-y-6",children:[a("div",{children:[s(c,{for:"current_password",value:"Current Password"}),s(p,{id:"current_password",ref:l,value:o.current_password,handleChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(d,{message:e.current_password,className:"mt-2"})]}),a("div",{children:[s(c,{for:"password",value:"New Password"}),s(p,{id:"password",ref:u,value:o.password,handleChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(d,{message:e.password,className:"mt-2"})]}),a("div",{children:[s(c,{for:"password_confirmation",value:"Confirm Password"}),s(p,{id:"password_confirmation",value:o.password_confirmation,handleChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(d,{message:e.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center gap-4",children:[s(g,{processing:f,children:"Save"}),s(_,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:s("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{b as default};
