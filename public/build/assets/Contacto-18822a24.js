import{r as l,a as e,R as se,j as a,F as re,H as le}from"./app-1f7e075b.js";import{H as de,F as me}from"./HeaderPublica-e643cef4.js";/* empty css                      *//* empty css                      *//* empty css              */import{b as x,d as C,c as pe}from"./createWithBsPrefix-3fee9699.js";import{u as H,T as _,m as R,S as K,a as ue,N as g,b as he,e as be,f as ve}from"./Nav-e14c985c.js";import{b as fe}from"./ModalLoginSesion-2734151a.js";import{F as M,p as E}from"./CloseButton-cb89c13e.js";import{M as A}from"./Modal-72ba3867.js";import{P as ge}from"./Paises-a01240ea.js";import"./ApplicationLogoLici-4a8f0962.js";import"./TextInput-d3cd4691.js";function F(o,n){return Array.isArray(o)?o.includes(n):o===n}const w=l.exports.createContext({});w.displayName="AccordionContext";const z=l.exports.forwardRef(({as:o="div",bsPrefix:n,className:t,children:c,eventKey:s,...r},i)=>{const{activeEventKey:u}=l.exports.useContext(w);return n=x(n,"accordion-collapse"),e(fe,{ref:i,in:F(u,s),...r,className:C(t,n),children:e(o,{children:l.exports.Children.only(c)})})});z.displayName="AccordionCollapse";const D=z,O=l.exports.createContext({eventKey:""});O.displayName="AccordionItemContext";const V=l.exports.forwardRef(({as:o="div",bsPrefix:n,className:t,onEnter:c,onEntering:s,onEntered:r,onExit:i,onExiting:u,onExited:m,...b},h)=>{n=x(n,"accordion-body");const{eventKey:v}=l.exports.useContext(O);return e(D,{eventKey:v,onEnter:c,onEntering:s,onEntered:r,onExit:i,onExiting:u,onExited:m,children:e(o,{ref:h,...b,className:C(t,n)})})});V.displayName="AccordionBody";const Ne=V;function ye(o,n){const{activeEventKey:t,onSelect:c,alwaysOpen:s}=l.exports.useContext(w);return r=>{let i=o===t?null:o;s&&(Array.isArray(t)?t.includes(o)?i=t.filter(u=>u!==o):i=[...t,o]:i=[o]),c==null||c(i,r),n==null||n(r)}}const U=l.exports.forwardRef(({as:o="button",bsPrefix:n,className:t,onClick:c,...s},r)=>{n=x(n,"accordion-button");const{eventKey:i}=l.exports.useContext(O),u=ye(i,c),{activeEventKey:m}=l.exports.useContext(w);return o==="button"&&(s.type="button"),e(o,{ref:r,onClick:u,...s,"aria-expanded":i===m,className:C(t,n,!F(m,i)&&"collapsed")})});U.displayName="AccordionButton";const W=U,G=l.exports.forwardRef(({as:o="h2",bsPrefix:n,className:t,children:c,onClick:s,...r},i)=>(n=x(n,"accordion-header"),e(o,{ref:i,...r,className:C(t,n),children:e(W,{onClick:s,children:c})})));G.displayName="AccordionHeader";const xe=G,Q=l.exports.forwardRef(({as:o="div",bsPrefix:n,className:t,eventKey:c,...s},r)=>{n=x(n,"accordion-item");const i=l.exports.useMemo(()=>({eventKey:c}),[c]);return e(O.Provider,{value:i,children:e(o,{ref:r,...s,className:C(t,n)})})});Q.displayName="AccordionItem";const Ce=Q,Z=l.exports.forwardRef((o,n)=>{const{as:t="div",activeKey:c,bsPrefix:s,className:r,onSelect:i,flush:u,alwaysOpen:m,...b}=H(o,{activeKey:"onSelect"}),h=x(s,"accordion"),v=l.exports.useMemo(()=>({activeEventKey:c,onSelect:i,alwaysOpen:m}),[c,i,m]);return e(w.Provider,{value:v,children:e(t,{ref:n,...b,className:C(r,h,u&&`${h}-flush`)})})});Z.displayName="Accordion";const d=Object.assign(Z,{Button:W,Collapse:D,Item:Ce,Header:xe,Body:Ne}),J={prefix:String(Math.round(Math.random()*1e10)),current:0},Ee=se.createContext(J);let Ie=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function we(o){let n=l.exports.useContext(Ee);return n===J&&!Ie&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),l.exports.useMemo(()=>o||`react-aria${n.prefix}-${++n.current}`,[o])}function Y({children:o,in:n,mountOnEnter:t,unmountOnExit:c}){const s=l.exports.useRef(n);return l.exports.useEffect(()=>{n&&(s.current=!0)},[n]),n?o:c||!s.current&&t?null:o}const Ae=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],_e=["activeKey","getControlledId","getControllerId"],Oe=["as"];function q(o,n){if(o==null)return{};var t={},c=Object.keys(o),s,r;for(r=0;r<c.length;r++)s=c[r],!(n.indexOf(s)>=0)&&(t[s]=o[s]);return t}function X(o){let{active:n,eventKey:t,mountOnEnter:c,transition:s,unmountOnExit:r,role:i="tabpanel",onEnter:u,onEntering:m,onEntered:b,onExit:h,onExiting:v,onExited:p}=o,f=q(o,Ae);const N=l.exports.useContext(_);if(!N)return[Object.assign({},f,{role:i}),{eventKey:t,isActive:n,mountOnEnter:c,transition:s,unmountOnExit:r,onEnter:u,onEntering:m,onEntered:b,onExit:h,onExiting:v,onExited:p}];const{activeKey:y,getControlledId:I,getControllerId:T}=N,P=q(N,_e),L=R(t);return[Object.assign({},f,{role:i,id:I(t),"aria-labelledby":T(t)}),{eventKey:t,isActive:n==null&&L!=null?R(y)===L:n,transition:s||P.transition,mountOnEnter:c??P.mountOnEnter,unmountOnExit:r??P.unmountOnExit,onEnter:u,onEntering:m,onEntered:b,onExit:h,onExiting:v,onExited:p}]}const ee=l.exports.forwardRef((o,n)=>{let{as:t="div"}=o,c=q(o,Oe);const[s,{isActive:r,onEnter:i,onEntering:u,onEntered:m,onExit:b,onExiting:h,onExited:v,mountOnEnter:p,unmountOnExit:f,transition:N=Y}]=X(c);return e(_.Provider,{value:null,children:e(K.Provider,{value:null,children:e(N,{in:r,onEnter:i,onEntering:u,onEntered:m,onExit:b,onExiting:h,onExited:v,mountOnEnter:p,unmountOnExit:f,children:e(t,Object.assign({},s,{ref:n,hidden:!r,"aria-hidden":!r}))})})})});ee.displayName="TabPanel";const k=o=>{const{id:n,generateChildId:t,onSelect:c,activeKey:s,defaultActiveKey:r,transition:i,mountOnEnter:u,unmountOnExit:m,children:b}=o,[h,v]=ue(s,r,c),p=we(n),f=l.exports.useMemo(()=>t||((y,I)=>p?`${p}-${I}-${y}`:null),[p,t]),N=l.exports.useMemo(()=>({onSelect:v,activeKey:h,transition:i,mountOnEnter:u||!1,unmountOnExit:m||!1,getControlledId:y=>f(y,"tabpane"),getControllerId:y=>f(y,"tab")}),[v,h,i,u,m,f]);return e(_.Provider,{value:N,children:e(K.Provider,{value:v||null,children:b})})};k.Panel=ee;function $(o){return typeof o=="boolean"?o?M:Y:o}const ne=({transition:o,...n})=>e(k,{...n,transition:$(o)});ne.displayName="TabContainer";const Te=ne,ae=pe("tab-content"),oe=l.exports.forwardRef(({bsPrefix:o,transition:n,...t},c)=>{const[{className:s,as:r="div",...i},{isActive:u,onEnter:m,onEntering:b,onEntered:h,onExit:v,onExiting:p,onExited:f,mountOnEnter:N,unmountOnExit:y,transition:I=M}]=X({...t,transition:$(n)}),T=x(o,"tab-pane");return e(_.Provider,{value:null,children:e(K.Provider,{value:null,children:e(I,{in:u,onEnter:m,onEntering:b,onEntered:h,onExit:v,onExiting:p,onExited:f,mountOnEnter:N,unmountOnExit:y,children:e(r,{...i,ref:c,className:C(s,T,u&&"active")})})})})});oe.displayName="TabPane";const te=oe,Pe={eventKey:E.exports.oneOfType([E.exports.string,E.exports.number]),title:E.exports.node.isRequired,disabled:E.exports.bool,tabClassName:E.exports.string,tabAttrs:E.exports.object},ce=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};ce.propTypes=Pe;const S=Object.assign(ce,{Container:Te,Content:ae,Pane:te});function j(o,n){let t=0;return l.exports.Children.map(o,c=>l.exports.isValidElement(c)?n(c,t++):c)}function Se(o,n){let t=0;l.exports.Children.forEach(o,c=>{l.exports.isValidElement(c)&&n(c,t++)})}const qe={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function Ke(o){let n;return Se(o,t=>{n==null&&(n=t.props.eventKey)}),n}function ke(o){const{title:n,eventKey:t,disabled:c,tabClassName:s,tabAttrs:r,id:i}=o.props;return n==null?null:e(he,{as:"li",role:"presentation",children:e(be,{as:"button",type:"button",eventKey:t,disabled:c,id:i,className:s,...r,children:n})})}const B=o=>{const{id:n,onSelect:t,transition:c,mountOnEnter:s,unmountOnExit:r,children:i,activeKey:u=Ke(i),...m}=H(o,{activeKey:"onSelect"});return a(k,{id:n,activeKey:u,onSelect:t,transition:$(c),mountOnEnter:s,unmountOnExit:r,children:[e(g,{...m,role:"tablist",as:"ul",children:j(i,ke)}),e(ae,{children:j(i,b=>{const h={...b.props};return delete h.title,delete h.disabled,delete h.tabClassName,delete h.tabAttrs,e(te,{...h})})})]})};B.defaultProps=qe;B.displayName="Tabs";const $e=B,Be={variant:"primary",active:!1,disabled:!1},ie=l.exports.forwardRef(({as:o,bsPrefix:n,variant:t,size:c,active:s,className:r,...i},u)=>{const m=x(n,"btn"),[b,{tagName:h}]=ve({tagName:o,...i});return e(h,{...b,...i,ref:u,className:C(r,m,s&&"active",t&&`${m}-${t}`,c&&`${m}-${c}`,i.href&&i.disabled&&"disabled")})});ie.displayName="Button";ie.defaultProps=Be;function Ze(o){const[n,t]=l.exports.useState("escribenos"),[c,s]=l.exports.useState(!1),[r,i]=l.exports.useState({image:"/public/images/banderas/listado_nombres/CHL.svg",title:"Chile",indicative:"+56",fixed:!0}),u=p=>{p=="whatsapp"?t("escribenos"):t(p)},m=p=>{var f=document.createElement("input");f.setAttribute("value",document.getElementById(p).innerHTML),document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f)},b=()=>s(!1),h=()=>s(!0),v=p=>{i(p),s(!1)};return a(re,{children:[e("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Poppins"}),e(le,{title:"Contacto"}),e(de,{user:o}),e("div",{id:"banner-top",children:e("div",{id:"banner-top--img",className:"h-100 w-100",children:e("div",{className:"container",children:e("div",{id:"banner-top--text-container",className:"row",children:a("div",{className:"col-12 px-0",children:[e("h2",{className:"banner-top--white-title",children:"Centro de contacto"})," ",e("p",{className:"banner-top--white-text",children:"Puedes contactarte con nosotros por los diferentes medios que tenemos para ti."})]})})})})}),e("div",{id:"contenido-contactenos",children:e("div",{className:"contactenos_form container px-0",children:a("div",{className:"row m-0 pb-5",children:[e("div",{className:"col-12 col-md-8 px-0 contactenos_form--nav-and-content mb-4 mb-md-0",children:e("div",{id:"navegacion-contactenos",className:"card",children:a("div",{className:"tabs row no-gutters",id:"__BVID__15",children:[e("div",{className:"col-auto navegacion-contactenos--nav",children:a(g,{className:"nav justify-content-center",activeKey:n,onSelect:p=>u(`${p}`),children:[e(g.Item,{className:"w-100",children:e(g.Link,{eventKey:"escribenos",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-escribe navegacion-contactenos--iconos"}),e("span",{children:"Escríbenos"}),e("i",{className:"icon-up"})]})})}),e(g.Item,{className:"w-100",children:e(g.Link,{href:"https://api.whatsapp.com/send?phone=573103708276",eventKey:"whatsapp",target:"_blank",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-whatsapp navegacion-contactenos--iconos"}),e("span",{children:"Whatsapp"})]})})}),e(g.Item,{className:"w-100",children:e(g.Link,{eventKey:"ubicacion",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-ubicacion navegacion-contactenos--iconos"}),e("span",{children:"Ubicación"}),e("i",{className:"icon-up"})]})})}),e(g.Item,{className:"w-100",children:e(g.Link,{eventKey:"preguntas-frecuentes",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-preguntas navegacion-contactenos--iconos"}),e("span",{children:"Preguntas frecuentes"}),e("i",{className:"icon-up"})]})})})]})}),e("div",{className:"tab-content col",id:"__BVID__15__BV_tab_container_",children:a($e,{id:"controlled-tab-example",activeKey:n,onSelect:p=>t(p),className:"mb-3 d-none",children:[e(S,{eventKey:"escribenos",title:"escribenos",children:e("div",{className:"navegacion-contactenos--text-content",children:e("div",{className:"contactenos_form",children:a("form",{action:"",children:[a("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Nombre completo:"})}),e("input",{id:"name",name:"name",type:"text",placeholder:"Ingresa tu nombre",className:"contactenos_form--campo-input"})]}),a("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Teléfono:"})}),a("div",{className:"contactenos_form--campo-telefono",children:[a("div",{className:"contactenos_form--campo-indicativo",onClick:h,children:[e("img",{src:r.image,alt:"imagen bandera seleccionada",className:"contactenos_form--campo-indicativo-bandera"}),a("span",{htmlFor:"",className:"contactenos_form--campo-indicativo-nombrepais",children:[" ",r.indicative," "]}),e("span",{className:"icon-down contactenos_form--campo-indicativo-icoflecha"})]}),e("hr",{"data-v-74a0c684":"",className:"linea__divisoria",style:{width:4+"px",height:18+"px"}}),a("div",{className:"contactenos_form--campo-input-container",children:[e("input",{id:"tel",name:"tel",type:"text",placeholder:"Ingresa tu número",className:"contactenos_form--campo-telefono-input contactenos_form--campo-input",onKeyDown:function(p){console.log(p.keyCode),p.keyCode!=8&&(p.keyCode<"48"||p.keyCode>"57")&&p.preventDefault()}}),e("span",{className:""})]})]}),a(A,{show:c,onHide:b,id:"ModalContacto",children:[e(A.Header,{closeButton:!0}),e(A.Body,{children:e(ge,{addCountry:v})}),e(A.Footer,{})]})]}),a("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Correo electrónico:"})}),e("input",{id:"email",name:"email",type:"text",placeholder:"Ingresa tu correo electrónico",className:"contactenos_form--campo-input"})]}),a("div",{className:"contactenos_form--campo contactenos_form--campo-mensaje",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Tu mensaje"})}),e("textarea",{name:"mensaje",rows:"6",placeholder:"Ingresa tu mensaje",className:"contactenos_form--campo-input"})]}),e("div",{className:"contactenos_form--campo contactenos_form--campo-terminos",children:a("label",{className:"checkbox_container",children:[a("span",{children:[" He leido y acepto ",e("a",{href:"/politicasp",target:"_blank",children:"la política de tratamiento de datos."})]}),e("input",{type:"checkbox"}),e("div",{className:"checkbox-input"})]})}),e("div",{className:"contactenos_form--campo-submit",children:a("button",{id:"submit",type:"submit",name:"submit",disabled:"disabled",className:"disabled",children:[e("i",{className:"icon-enviar"})," Enviar formulario ",e("div",{className:"preloader",style:{display:"none"}})]})})]})})})}),e(S,{eventKey:"ubicacion",title:"ubicacion",children:e("div",{role:"tabpanel",id:"tab_ubicaciones","aria-hidden":"false","aria-labelledby":"tab_ubicaciones___BV_tab_button__",className:"tab-pane active card-body",children:a("div",{className:"navegacion-contactenos--content-ubicacion w-50 w-md-75 w-lg-50",children:[a("span",{className:"navegacion-contactenos--content-ubicacion-title",children:["Nuestra ",e("span",{className:"navegacion-contactenos--content-ubicacion-title-blue",children:"ubicación:"})]}),e("div",{className:"navegacion-contactenos--content-ubicacion-content",children:e("span",{children:"Cra 23 # 70a-44 Manizales, Colombia"})}),e("div",{className:"navegacion-contactenos--content-ubicacion-google",children:a("a",{href:"https://www.google.com/maps/place/Licitaciones.Info/@5.0508836,-75.484211,15z/data=!4m5!3m4!1s0x0:0x6150198db5afae40!8m2!3d5.0508836!4d-75.484211",target:"_blank",className:"d-flex",children:[e("img",{src:"/public/images/contacto/google_maps.svg",alt:"Logo google maps"})," Ver en maps "]})})]})})}),e(S,{eventKey:"preguntas-frecuentes",title:"preguntas-frecuentes",children:a("div",{className:"navegacion-contactenos--text-content",children:[e("h3",{children:"Preguntas Frecuentes"}),a(d,{children:[a(d.Item,{eventKey:"0",children:[e(d.Header,{children:"¿En qué consiste el servicio que presta LICITACIONES.INFO?"}),e(d.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["En licitaciones.info centralizamos miles de licitaciones en un solo lugar a través del mejor sistema de procesamiento de información, combinando innovación tecnológica con talento humano especializado en el análisis de datos, permitiendo transformar la información del mercado de compras públicas en oportunidades de negocio para todas las empresas. ",e("br",{}),e("br",{}),"Nuestro servicio te permite consultar desde cualquier lugar del mundo y desde cualquier dispositivo las licitaciones que se están publicando a diario en Colombia, Ecuador y Panamá."]})})})]}),a(d.Item,{eventKey:"1",children:[e(d.Header,{children:"¿Cómo me beneficio con el servicio que presta LICITACIONES .INFO?"}),e(d.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text navegacion-contactenos--content-text-acordeon",children:["Con LICITACIONES.INFO aumentarás tus capacidades de participación en el mercado de las compras públicas gracias a los siguientes beneficios: ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"OPTIMIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE TIEMPO & DINERO:"})," Centralizamos en un solo lugar las licitaciones pautadas en las plataformas Secop I, Secop II, Sercop, Panamá Compra, en 800 portales de entidades descentralizadas y en páginas de organismos no gubernamentales. Esta información la presentamos en un formato practico y ordenado, no requieres digitar códigos CAPCHA de seguridad, ni hacer búsquedas extensas ya que la información la encontrarás en un entorno que te brinda una excelente experiencia de usuario. Por lo tanto, los costos en tiempo y dinero asociados a la búsqueda y almacenamiento de información de procesos de contratación se reducen significativamente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"ORGANIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE LA INFORMACIÓN:"})," Nuestras funcionalidades te ayudan a gestionar grandes volúmenes de datos a través de sistemas de carpetas, iconos representativos, notas recordatorias y buscadores muy fáciles de utilizar para que encuentres todo muy rápido y fácilmente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"MAS OPORTUNIDADES"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE PARTICIPACIÓN:"})," Te brindamos acceso a toda la contratación en Colombia, Ecuador y Panamá sin restricciones, puedes crear la cantidad de perfiles de negocio que desees y acceder a históricos de información de años atrás para hacer estudios de mercado descriptivos, con lo cual podrás identificar a tus posibles clientes, posibles aliados y posibles competidores, así como tendencias de comportamiento en la compra de los productos que ofreces.",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"TRABAJO EN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"EQUIPO:"})," Proporcionamos la funcionalidad de asignar subcuentas a otros miembros de tu equipo. Asignamos hasta 2 subcuentas para dominios públicos y hasta 10 subcuentas para dominios privados."]})})})]}),a(d.Item,{eventKey:"2",children:[e(d.Header,{children:"¿Cuándo recibiré notificaciones de LICITACIONES.INFO?"}),e(d.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Durante todo el día buscamos licitaciones y convocatorias publicas en las cuales existe la oportunidad de participar, posteriormente un analista de contratos toma el proceso y le asigna la parametrización de la actividad económica, la ubicación, la cuantía y la modalidad adecuadas, después pasa por un proceso de calidad en el cual se confirma que las categorías seleccionadas son las correctas, por ultimo se realiza el envío a cada uno de los usuarios que tienen perfecta coincidencia con las características asignadas a cada proceso."})})})]}),a(d.Item,{eventKey:"3",children:[e(d.Header,{children:"¿Cómo puedo aprender a manejar el portal?"}),e(d.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Al momento de crear tu cuenta en la plataforma de Licitaciones.info te es asignado un consultor personalizado quien te ofrecerá un espacio de 45 minutos para enseñarte todo el manejo del portal. Adicionalmente estará pendiente de todas tus dudas, inquietudes y solicitudes cuando hagas uso de nuestro servicio. Sin embargo, en este enlace podrás tener a la mano el manual de usuario para que lo consultes cuando lo necesites de forma autónoma."})})})]}),a(d.Item,{eventKey:"4",children:[e(d.Header,{children:"¿Qué canales de comunicación ofrece LICITACIONES.INFO para enviar las notificaciones de licitaciones y convocatorias?"}),e(d.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["En la actualidad ponemos a tu disposición diferentes maneras para consultar los procesos de contratación:",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"CORREO ELECTRÓNICO:"})," Enviamos de manera permanente y oportuna la información de los procesos y las novedades de su interés al correo electrónico registrado. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"PLATAFORMA WEB:"})," En la sesión de usuario tendrás a disposición todos los procesos de contratación, así como las herramientas necesarias para administrar dicha información en pro de alcanzar tus resultados ",e("a",{href:"www.lictacionescolombia.info",target:"_blank",children:"www.lictacionescolombia.info"}),". ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"APLICATIVO MÓVIL:"})," Combina la capacidad informativa del correo electrónico con la portabilidad de un equipo móvil y todas las ventajas de nuestro servicio sin depender de un computador. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"API:"})," Puedes conectar la interfaz de usuario desarrollada por tu compañía a nuestros sistemas de transmisión de datos para que optimices procesos y recursos en tu equipo de trabajo."]})})})]}),a(d.Item,{eventKey:"5",children:[e(d.Header,{children:"¿Cómo puedo hacer uso del aplicativo móvil?"}),e(d.Body,{children:a("div",{className:"card-body",children:[a("p",{className:"card-text",children:["Nuestra app móvil se encuentra disponible para sistemas operativos Android y iOS, nos puedes encontrar como Licitaciones.info. ",e("br",{}),e("br",{}),"Para ingresar debes iniciar sesión con tu correo electrónico registrado en licitaciones.info y la misma contraseña de acceso al portal. ",e("br",{}),e("br",{}),"El uso de nuestra APP no tiene ningún costo para nuestros suscriptores."]}),a("div",{className:"navegacion-contactenos--content-img-acordeon d-flex",children:[e("a",{href:"https://play.google.com/store/apps/details?id=com.setcon.licitacionesinfo&hl=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/google_play.webp",alt:"Logo google play"})}),e("a",{href:"https://apps.apple.com/co/app/licitaciones/id1210052711",target:"_blank",children:e("img",{src:"/public/icons/multicolor/app-store.svg",alt:"Logo app store"})})]})]})})]}),a(d.Item,{eventKey:"6",children:[e(d.Header,{children:"¿Cuántos correos electrónicos puedo activar al tener mi servicio con Licitaciones.info?"}),e(d.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Sabemos de la importancia de trabajar simultáneamente con otras personas, por ello el registro de correos electrónicos adicionales te ayuda y te aporta para que logres una gestión colaborativa con tu equipo de trabajo. Por lo anterior, dispones de las siguientes 3 opciones: ",e("br",{}),e("br",{})," Registrar hasta 2 correos adicionales con dominios públicos (Gmail, Hotmail, Yahoo!). ",e("br",{}),e("br",{})," Registrar hasta 10 correos adicionales con un mismo dominio corporativo (@empresa.com). ",e("br",{}),e("br",{})," Si requieres registrar un mayor número de subcuentas debes enviar tu solicitud al correo ",e("a",{href:"mailto:servicioalcliente@licitaciones.info",children:"servicioalcliente@licitaciones.info"})," indicando cantidad de usuarios, dominio empresarial y objetivo de la vinculación masiva. Se te enviará una cotización de acuerdo con tus necesidades."]})})})]}),a(d.Item,{eventKey:"7",children:[e(d.Header,{children:"¿Cómo puedo crear una subcuenta?"}),e(d.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Debes iniciar sesión en www.licitaciones.info, luego te ubicas en la parte superior derecha (específicamente en el ícono donde aparece tu nombre), al hacer clic ahí se despliega un menú de opciones, seleccionas “Mis subcuentas” para posteriormente llenar los campos que te indica la plataforma. ",e("br",{}),e("br",{})," Cuando se realice la creación, al correo de la persona que registraste enviaremos un email de confirmación, con el fin de prevenir inconvenientes al momento de enviar las notificaciones a esa cuenta."]})})})]}),a(d.Item,{eventKey:"8",children:[e(d.Header,{children:"¿Por qué no recibo información de LICITACIONES.INFO en la bandeja de entrada de mi correo electrónico?"}),e(d.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Debes verificar que esté bien escrito tu correo electrónico y que no se encuentre lleno. Ten presente que en algunas ocasiones nuestros mensajes pueden llegar a las carpetas de SPAM o Correo no deseado para lo cual nos debes añadir nuestro correo a tus contactos. ",e("br",{}),e("br",{})," Si tu correo es de dominio privado (@nombredelaempresa) debes tener en cuenta que tienen un elevado nivel de seguridad y por lo tanto el ingreso de nuestros correos puede estar restringido, en este caso debes validar con tu equipo de seguridad informática para proceder según sus recomendaciones. En cualquier caso, la recomendación es que informes a tu consultor asignado para que te ayude de manera personalizada a resolver la situación."]})})})]}),a(d.Item,{eventKey:"9",children:[e(d.Header,{children:"¿Tengo que firmar algún contrato para empezar a usar Licitaciones.info?"}),e(d.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Para usar Licitaciones.info no tienes que firmar ningún contrato, solo aceptar las condiciones y términos de uso como SAAS.",e("br",{}),e("br",{})," Cuando te registras y empiezas a usar la herramienta se entiende que estos términos y condiciones son aceptados por ambas partes, el usuario y Licitaciones.info."]})})})]})]})]})})]})})]})})}),e("div",{className:"col-12 col-md-4 pr-0 contactenos_form--datos-empresa",children:a("div",{id:"informacion-empresa",children:[a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-clock"}),e("span",{children:"Horarios de atención:"})]}),e("div",{className:"informacion-empresa--content",children:e("span",{className:"c-gray",children:"Lunes a Viernes 8:00 am a 6:00 pm"})})]}),a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-mail"}),e("span",{children:"Email:"})]}),a("div",{className:"informacion-empresa--content",children:[e("span",{className:"c-gray",id:"copy-email",children:"servicioalcliente@licitaciones.info"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-1",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>m("copy-email")})})})]})]}),a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-smartphone"}),e("span",{children:"Teléfonos:"})]}),a("div",{className:"informacion-empresa--content-numbers",children:[a("div",{className:"informacion-empresa--content informacion-empresa--content--flex mb-2",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Fijo:"}),a("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone",children:"+57 601 508 61 55"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-2",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>m("copy-phone")})})})]})]}),a("div",{className:"informacion-empresa--content informacion-empresa--content--flex",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Móvil:"}),a("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone-2",children:"+57 310 370 8276"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-3",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>m("copy-phone-2")})})})]})]})]})]}),a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-social"}),e("span",{children:"Redes sociales:"})]}),a("div",{className:"informacion-empresa--img",children:[e("a",{href:"https://www.facebook.com/licitacionesInfo/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/facebook.svg",alt:"logo facebook"})}),e("a",{href:"https://www.linkedin.com/company/licitaciones.info/about/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/linkedin.svg",alt:"logo linkedin"})}),e("a",{href:"https://www.youtube.com/c/LicitacionesInfo",target:"_blank",children:e("img",{src:"/public/icons/multicolor/youtube.svg",alt:"logo youtube"})}),e("a",{href:"https://twitter.com/licitacionesinf?lang=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/twitter.svg",alt:"logo twitter"})})]})]})]})})]})})}),e(me,{})]})}export{Ze as default};