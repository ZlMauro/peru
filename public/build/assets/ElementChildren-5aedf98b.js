import{r as t}from"./app-12b326e4.js";function a(n,o){let e=0;return t.exports.Children.map(n,r=>t.exports.isValidElement(r)?o(r,e++):r)}function i(n,o){let e=0;t.exports.Children.forEach(n,r=>{t.exports.isValidElement(r)&&o(r,e++)})}function p(n,o){return t.exports.Children.toArray(n).some(e=>t.exports.isValidElement(e)&&e.type===o)}export{i as f,p as h,a as m};