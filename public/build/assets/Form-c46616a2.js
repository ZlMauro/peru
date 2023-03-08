import{p as N,c as i,u,a as X,b as Y,d as Z}from"./createWithBsPrefix-d4b45b03.js";import{r as l,a as n,j,F as P}from"./app-ef2ff9b2.js";import{h as ee}from"./ElementChildren-3a61371a.js";const oe={type:N.exports.string,tooltip:N.exports.bool,as:N.exports.elementType},w=l.exports.forwardRef(({as:e="div",className:o,type:t="valid",tooltip:s=!1,...a},r)=>n(e,{...a,ref:r,className:i(o,`${t}-${s?"tooltip":"feedback"}`)}));w.displayName="Feedback";w.propTypes=oe;const B=w,F=l.exports.createContext({}),O=l.exports.forwardRef(({id:e,bsPrefix:o,className:t,type:s="checkbox",isValid:a=!1,isInvalid:r=!1,as:c="input",...m},d)=>{const{controlId:p}=l.exports.useContext(F);return o=u(o,"form-check-input"),n(c,{...m,ref:d,type:s,id:e||p,className:i(t,o,a&&"is-valid",r&&"is-invalid")})});O.displayName="FormCheckInput";const S=O,b=l.exports.forwardRef(({bsPrefix:e,className:o,htmlFor:t,...s},a)=>{const{controlId:r}=l.exports.useContext(F);return e=u(e,"form-check-label"),n("label",{...s,ref:a,htmlFor:t||r,className:i(o,e)})});b.displayName="FormCheckLabel";const v=b,G=l.exports.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:t,inline:s=!1,reverse:a=!1,disabled:r=!1,isValid:c=!1,isInvalid:m=!1,feedbackTooltip:d=!1,feedback:p,feedbackType:f,className:$,style:y,title:h="",type:C="checkbox",label:g,children:k,as:D="input",...J},K)=>{o=u(o,"form-check"),t=u(t,"form-switch");const{controlId:I}=l.exports.useContext(F),Q=l.exports.useMemo(()=>({controlId:e||I}),[I,e]),T=!k&&g!=null&&g!==!1||ee(k,v),U=n(S,{...J,type:C==="switch"?"checkbox":C,ref:K,isValid:c,isInvalid:m,disabled:r,as:D});return n(F.Provider,{value:Q,children:n("div",{style:y,className:i($,T&&o,s&&`${o}-inline`,a&&`${o}-reverse`,C==="switch"&&t),children:k||j(P,{children:[U,T&&n(v,{title:h,children:g}),p&&n(B,{type:f,tooltip:d,children:p})]})})})});G.displayName="FormCheck";const x=Object.assign(G,{Input:S,Label:v}),M=l.exports.forwardRef(({bsPrefix:e,type:o,size:t,htmlSize:s,id:a,className:r,isValid:c=!1,isInvalid:m=!1,plaintext:d,readOnly:p,as:f="input",...$},y)=>{const{controlId:h}=l.exports.useContext(F);e=u(e,"form-control");let C;return d?C={[`${e}-plaintext`]:!0}:C={[e]:!0,[`${e}-${t}`]:t},n(f,{...$,type:o,size:s,ref:y,readOnly:p,id:a||h,className:i(r,C,c&&"is-valid",m&&"is-invalid",o==="color"&&`${e}-color`)})});M.displayName="FormControl";const te=Object.assign(M,{Feedback:B}),se=X("form-floating"),V=l.exports.forwardRef(({controlId:e,as:o="div",...t},s)=>{const a=l.exports.useMemo(()=>({controlId:e}),[e]);return n(F.Provider,{value:a,children:n(o,{...t,ref:s})})});V.displayName="FormGroup";const E=V;function ae({as:e,bsPrefix:o,className:t,...s}){o=u(o,"col");const a=Y(),r=Z(),c=[],m=[];return a.forEach(d=>{const p=s[d];delete s[d];let f,$,y;typeof p=="object"&&p!=null?{span:f,offset:$,order:y}=p:f=p;const h=d!==r?`-${d}`:"";f&&c.push(f===!0?`${o}${h}`:`${o}${h}-${f}`),y!=null&&m.push(`order${h}-${y}`),$!=null&&m.push(`offset${h}-${$}`)}),[{...s,className:i(t,...c,...m)},{as:e,bsPrefix:o,spans:c}]}const H=l.exports.forwardRef((e,o)=>{const[{className:t,...s},{as:a="div",bsPrefix:r,spans:c}]=ae(e);return n(a,{...s,ref:o,className:i(t,!c.length&&r)})});H.displayName="Col";const re={column:!1,visuallyHidden:!1},R=l.exports.forwardRef(({as:e="label",bsPrefix:o,column:t,visuallyHidden:s,className:a,htmlFor:r,...c},m)=>{const{controlId:d}=l.exports.useContext(F);o=u(o,"form-label");let p="col-form-label";typeof t=="string"&&(p=`${p} ${p}-${t}`);const f=i(a,o,s&&"visually-hidden",t&&p);return r=r||d,t?n(H,{ref:m,as:"label",className:f,htmlFor:r,...c}):n(e,{ref:m,className:f,htmlFor:r,...c})});R.displayName="FormLabel";R.defaultProps=re;const le=R,W=l.exports.forwardRef(({bsPrefix:e,className:o,id:t,...s},a)=>{const{controlId:r}=l.exports.useContext(F);return e=u(e,"form-range"),n("input",{...s,type:"range",ref:a,className:i(o,e),id:t||r})});W.displayName="FormRange";const ne=W,_=l.exports.forwardRef(({bsPrefix:e,size:o,htmlSize:t,className:s,isValid:a=!1,isInvalid:r=!1,id:c,...m},d)=>{const{controlId:p}=l.exports.useContext(F);return e=u(e,"form-select"),n("select",{...m,size:t,ref:d,className:i(s,e,o&&`${e}-${o}`,a&&"is-valid",r&&"is-invalid"),id:c||p})});_.displayName="FormSelect";const ce=_,q=l.exports.forwardRef(({bsPrefix:e,className:o,as:t="small",muted:s,...a},r)=>(e=u(e,"form-text"),n(t,{...a,ref:r,className:i(o,e,s&&"text-muted")})));q.displayName="FormText";const pe=q,z=l.exports.forwardRef((e,o)=>n(x,{...e,ref:o,type:"switch"}));z.displayName="Switch";const me=Object.assign(z,{Input:x.Input,Label:x.Label}),A=l.exports.forwardRef(({bsPrefix:e,className:o,children:t,controlId:s,label:a,...r},c)=>(e=u(e,"form-floating"),j(E,{ref:c,className:i(o,e),controlId:s,...r,children:[t,n("label",{htmlFor:s,children:a})]})));A.displayName="FloatingLabel";const de=A,ie={_ref:N.exports.any,validated:N.exports.bool,as:N.exports.elementType},L=l.exports.forwardRef(({className:e,validated:o,as:t="form",...s},a)=>n(t,{...s,ref:a,className:i(e,o&&"was-validated")}));L.displayName="Form";L.propTypes=ie;const he=Object.assign(L,{Group:E,Control:te,Floating:se,Check:x,Switch:me,Label:le,Text:pe,Range:ne,Select:ce,FloatingLabel:de});export{H as C,he as F};