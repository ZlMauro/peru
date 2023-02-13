import{r as e,a as l,j as F}from"./app-80521d15.js";import{u as f,c as x,a as j}from"./createWithBsPrefix-6cf2c458.js";import{u as k}from"./useTimeout-81996421.js";import{F as g,E as H,a as I,u as $,C as G}from"./font-unicolor-13f2085d.js";const O={[H]:"showing",[I]:"showing show"},E=e.exports.forwardRef((t,s)=>l(g,{...t,ref:s,transitionClasses:O}));E.displayName="ToastFade";const b=e.exports.createContext({onClose(){}}),A={closeLabel:"Close",closeButton:!0},T=e.exports.forwardRef(({bsPrefix:t,closeLabel:s,closeVariant:o,closeButton:a,className:c,children:r,...i},n)=>{t=f(t,"toast-header");const d=e.exports.useContext(b),u=$(m=>{d==null||d.onClose==null||d.onClose(m)});return F("div",{ref:n,...i,className:x(t,c),children:[r,a&&l(G,{"aria-label":s,variant:o,onClick:u,"data-dismiss":"toast"})]})});T.displayName="ToastHeader";T.defaultProps=A;const L=j("toast-body"),w=e.exports.forwardRef(({bsPrefix:t,className:s,transition:o=E,show:a=!0,animation:c=!0,delay:r=5e3,autohide:i=!1,onClose:n,bg:d,...u},m)=>{t=f(t,"toast");const C=e.exports.useRef(r),p=e.exports.useRef(n);e.exports.useEffect(()=>{C.current=r,p.current=n},[r,n]);const h=k(),v=!!(i&&a),N=e.exports.useCallback(()=>{v&&(p.current==null||p.current())},[v]);e.exports.useEffect(()=>{h.set(N,C.current)},[h,N]);const B=e.exports.useMemo(()=>({onClose:n}),[n]),y=!!(o&&c),R=l("div",{...u,ref:m,className:x(t,s,d&&`bg-${d}`,!y&&(a?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return l(b.Provider,{value:B,children:y&&o?l(o,{in:a,unmountOnExit:!0,children:R}):R})});w.displayName="Toast";const D=Object.assign(w,{Body:L,Header:T}),M={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},S=e.exports.forwardRef(({bsPrefix:t,position:s,containerPosition:o="absolute",className:a,as:c="div",...r},i)=>(t=f(t,"toast-container"),l(c,{ref:i,...r,className:x(t,s&&[o?`position-${o}`:null,M[s]],a)})));S.displayName="ToastContainer";export{S as T,D as a};
