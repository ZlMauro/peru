import{r,a as e,F as l,j as i,H as w}from"./app-ce8b9cb5.js";import"./index-e67703a0.js";import{B as c}from"./BotonRegistrarse-10ca4c35.js";/* empty css                      */import{E as v,F as N}from"./HeaderPublica-a805d340.js";import{C as _}from"./estilos-carousel-publica-969c5af3.js";import{B as x}from"./BotonHablarAsesor-61ed2fc9.js";import"./ApplicationLogoLici-73c5fed9.js";import"./TextInput-a92bf6fe.js";const I=s=>{const[y,d]=r.exports.useState(new Date().toLocaleTimeString()),[m,h]=r.exports.useState(new Date().toLocaleTimeString()),[t,g]=r.exports.useState(""),[u,n]=r.exports.useState(""),[p,o]=r.exports.useState(""),b="/contratos?fecha_publicacion="+new Date().toISOString().slice(0,10);async function f(){d(new Date().toLocaleTimeString()),h(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),g(new Date().getHours()),t<12?(n("Buenos días"),o("icon-sun c-yellow")):t>11&&t<=18?(n("Buenas tardes"),o("bi bi-cloud-sun-fill c-blue-ligth")):(n("Buenas noches"),o("icon-night c-blue"))}return setTimeout(()=>{f()},1e3),e(l,{children:e("section",{id:"banner-videos-paises",children:i("div",{className:"banner-video-paises",children:[e("video",{muted:"muted",autoplay:"autoplay",loop:"loop",src:"https://www.licitaciones.info/video/video_inicio_ecu.webm",type:"webm",className:"banner-video-paises__video"}),e("div",{className:"banner-video-paises__content-banner container",children:i("div",{className:"row",children:[e("div",{className:"col-12 banner-video-paises__title",children:e("h2",{children:"Licitaciones en Chile"})}),e("div",{className:"col-12",children:i("p",{children:["Identificamos oportunidades de negocio con el gobierno para tu empresa.",e("br",{})," Chile Compra y más de 1000 portales de entidades descentralizadas"]})}),e(c,{texto:"Regístrate y obtén ¡30 días gratis!",textoHover:"Regístrate y obtén 30 días de servicio",color:"white",colorHover:"#73c914"}),e("div",{className:"d-flex justify-content-center banner-video-paises__franja",children:e("div",{className:"franja-fuentes",children:i("ul",{className:"row",children:[e("li",{className:"fraja-fuentes__item",children:i("div",{className:"fraja-fuentes__item-hour",children:[e("i",{className:p}),e("span",{className:"fraja-fuentes__item-saludo",children:u}),e("div",{children:e("span",{className:"hour",children:m})})]})}),e("li",{className:"fraja-fuentes__item fraja-fuentes__item--line",children:e("div",{children:e("span",{children:"Procesos hoy en Chile"})})}),e("li",{className:"fraja-fuentes__item",children:i("a",{href:b,target:"_blank",className:"fraja-fuentes__contador",children:[e("span",{children:"Chile Compra : "}),i("span",{className:"fraja-fuentes__item--claro",children:[s.procesos," procesos "]}),e("i",{className:"icon-up"})]})}),e("li",{className:"fraja-fuentes__item",children:i("a",{href:"#",target:"_blank",className:"fraja-fuentes__contador",children:[e("span",{children:"No Centralizados : "}),e("span",{className:"fraja-fuentes__item--claro",children:"0 procesos "}),e("i",{className:"icon-up"})]})})]})})})]})})]})})})},M=I;const a=s=>e("div",{className:"img-allies",children:e("img",{src:s.rutaImagen})}),k=()=>i("div",{className:"container container-monitor-size lg:mx-3 md:mx-1",children:[i("div",{className:"monitor-text-size md:flex md:w-auto md:order-1",children:[e("div",{children:e("span",{className:"monitor-title",children:"Monitoreamos y centralizamos la información de licitaciones y convocatorias públicas"})}),e("br",{}),e("div",{children:e("span",{className:"monitor-text",children:"Monitoreamos 24/7 más de 1000 sitios web de entidades públicas en búsqueda de nuevas oportunidades de negocio y te informamos casi al instante las que son solamente de tu interés."})}),e("br",{}),e("div",{children:e(c,{texto:"Regístrate y obtén ¡30 días gratis!",textoHover:"Regístrate y obtén 30 días de servicio",color:"white",colorHover:"#73c914"})})]}),e("div",{className:"monitor-allies-size md:flex md:w-auto md:order-1",children:i("div",{className:"allies-grid",children:[e("div",{className:"grid-item1",children:e("a",{href:"https://www.mercadopublico.cl/Home",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/1.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"https://www.mop.gob.cl/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/2.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.correos.cl/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/3.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"https://www.enami.cl/Pages/default.aspx",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/4.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.efe.cl/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/5.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/6.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"https://www.portalminero.com/wp/informacion-de-negocios/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/7.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.bcentral.cl/inicio",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/8.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"https://www.integra.cl/landing/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/9.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.buildbim.cl/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/10.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.corfo.cl/sites/cpp/homecorfo",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/11.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"http://www.fiscaliadechile.cl/Fiscalia/index.do",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/12.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/13.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"https://proexca.es/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/14.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.undp.org/es",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/15.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.codelco.com/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/16.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"https://www.scotiabankcolpatria.com/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/17.png"})})}),e("div",{className:"grid-item1",children:e("a",{href:"https://www.econssachile.cl/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/18.png"})})}),e("div",{className:"grid-item2",children:e("a",{href:"https://www.conadi.gob.cl/",target:"_blank",children:e(a,{rutaImagen:"/public/images/banerMonitoreamos/19.png"})})}),e("div",{className:"div-text-end",children:i("span",{className:"text-end-grid",children:["Entre ",e("br",{}),i("span",{className:"text-end-grid text-end-grid-color",children:["muchos mas"," "]})," ",e("br",{})," portales"]})})]})})]});function A(s){return i(l,{children:[e(w,{title:"Welcome"}),e(v,{user:s}),e(M,{procesos:s.contratos}),e(k,{}),e("section",{id:"customers-section",children:i("div",{className:"customers container rounded-container",children:[i("div",{className:"customers-cta w-50",children:[i("div",{className:"contenta-a",children:[e("span",{className:"customers-cta-since-year",children:"Desde 2004"}),e("span",{className:"customers-cta-count-statistics",children:"Más de 6000 clientes en Colombia y el mundo"})]}),i("div",{className:"contenta-b",children:[e(c,{texto:"Regístrate y obtén ¡30 días gratis!",textoHover:"Regístrate y obtén 30 días de servicio",color:"white",colorHover:"#00A1C9"}),e(x,{texto:"Habla con un consultor",textoHover:"Resolver dudas ahora",color:"white",colorHover:"#00A1C9"})]})]}),e("div",{className:"customers-list customers-list-carrousel w-50",children:e(_,{})})]})}),e(N,{})]})}export{A as default};
