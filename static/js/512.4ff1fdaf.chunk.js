"use strict";(self.webpackChunkcar_app=self.webpackChunkcar_app||[]).push([[512],{284:(n,t,e)=>{e.d(t,{c:()=>A});var r,i=e(60),o=e(656),a=e(312),s=e(360);const c=s.cp.div(r||(r=(0,a.c)(["\n  position: relative;\n  width: 100%;\n  height: 268px;\n  overflow: hidden;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  fill: none;\n  stroke: var(--text-white);\n\n  .heart-icon {\n    position: absolute;\n    top: 14px;\n    right: 14px;\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n\n    &:hover,\n    &:focus {\n      stroke: var(--text-blue);\n      fill: var(--text-blue);\n      transform: scale(1.3);\n    }\n  }\n\n  .active {\n    stroke: var(--text-blue);\n    fill: var(--text-blue);\n  }\n\n  .image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"])));var l=e(496);const d=n=>{let{img:t,car:e,remove:r,add:i,isFav:a}=n;return(0,l.jsxs)(c,{children:[(0,l.jsx)("button",{type:"button",onClick:()=>{a?r(e.id):i(e.id)},children:(0,l.jsx)(o.c,{className:"heart-icon ".concat(a?"active":""),id:"heart"})}),(0,l.jsx)("img",{src:t,alt:"name",className:"image"})]})};var p;const x=s.cp.div(p||(p=(0,a.c)(["\n  display: flex;\n  margin-bottom: 8px;\n\n  .item {\n    margin-right: auto;\n  }\n\n  .text {\n    font-size: 16px;\n    font-weight: 500;\n    font-family: var(--main-font-medium);\n    color: var(--text-black);\n  }\n\n  .span {\n    color: var(--text-blue);\n  }\n"]))),u=n=>{let{car:t}=n;return(0,l.jsxs)(x,{children:[(0,l.jsxs)("p",{className:"text item",children:[t.make," ",(0,l.jsx)("span",{className:"span",children:t.model}),", ",t.year]}),(0,l.jsx)("p",{className:"text",children:t.rentalPrice})]})};var m;const h=s.cp.button(m||(m=(0,a.c)(["\n  font-weight: 600;\n  font-family: var(--main-font-semi);\n  font-size: 14px;\n  line-height: 1.4;\n  width: 100%;\n  color: var(--text-white);\n  background-color: var(--text-blue);\n  padding: 12px 98.5px;\n  border-radius: 12px;\n  margin-top: 24px;\n  cursor: pointer;\n  transition: background-color 300ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--violet-bg);\n  }\n"])));var v,f;const g=s.cp.div(v||(v=(0,a.c)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000;\n\n  background-color: var(--text-color);\n"]))),b=s.cp.div(f||(f=(0,a.c)(["\n  width: 541px;\n  height: 752px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--text-white);\n  border-radius: 24px;\n\n  .modal-icon {\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    top: 16px;\n    right: 16px;\n    stroke: var(--text-black);\n    cursor: pointer;\n    transition: transform 600ms ease-in-out;\n\n    &:hover,\n    &:focus {\n      transform: rotate(180deg);\n    }\n  }\n"]))),j=n=>{let{setVisible:t,children:e}=n;(0,i.useEffect)((()=>{const n=n=>{"Escape"===n.code&&t(!1)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[t]);return(0,l.jsx)(g,{onClick:n=>{n.currentTarget===n.target&&t(!1)},children:(0,l.jsxs)(b,{children:[(0,l.jsx)("button",{onClick:()=>t(!1),className:"modal-btn",children:(0,l.jsx)(o.c,{className:"modal-icon",id:"close"})}),e]})})};var y,k;const w=s.cp.div(y||(y=(0,a.c)(["\n  padding: 24px 40px 40px;\n\n  .image {\n    width: 461px;\n    height: 248px;\n    object-fit: cover;\n    border-radius: 14px;\n    margin-bottom: 14px;\n  }\n\n  .text {\n    margin-bottom: 8px;\n    font-size: 18px;\n    line-height: 1.3;\n    font-weight: 500;\n    font-family: var(--main-font-medium);\n    color: var(--text-black);\n  }\n\n  .span {\n    color: var(--text-blue);\n  }\n\n  .description {\n    font-size: 14px;\n    line-height: 1.4;\n    color: var(--text-black);\n    margin-top: 10px;\n  }\n\n  .second-block {\n    h3 {\n      margin-top: 24px;\n      margin-bottom: 8px;\n      font-size: 14px;\n      line-height: 1.4;\n      font-weight: 500;\n      font-family: var(--main-font-medium);\n      color: var(--text-black);\n    }\n  }\n"]))),C=s.cp.button(k||(k=(0,a.c)(["\n  font-family: var(--main-font-semi);\n  font-size: 14px;\n  line-height: 1.4;\n  font-weight: 600;\n  background-color: var(--text-blue);\n  color: var(--text-white);\n  padding: 12px 50px;\n  border-radius: 12px;\n  margin-top: 24px;\n  cursor: pointer;\n  transition: background-color 300ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--violet-bg);\n  }\n"])));var N,F;const z=s.cp.ul(N||(N=(0,a.c)(["\n  display: flex;\n  gap: ",";\n  row-gap: ",";\n  flex-wrap: wrap;\n"])),(n=>{let{isCondition:t}=n;return t?"8px":"12px"}),(n=>{let{isCondition:t}=n;return t?"8px":"4px"})),S=s.cp.li(F||(F=(0,a.c)(["\n  position: relative;\n\n  &:not(:last-child):after {\n    content: ",";\n    position: absolute;\n    top: 50%;\n    right: -6px;\n    transform: translateY(-50%);\n    border: 1px solid var(--border-line);\n    height: 16px;\n  }\n\n  p {\n    ","\n  }\n"])),(n=>{let{isCondition:t}=n;return t?"none":"''"}),(n=>{let{isCondition:t}=n;return t&&"\n        padding: 7px 14px;\n        background-color: #F9F9F9;\n        border-radius: 35px;\n        color: #363535;\n      "})),E=n=>{let{array:t,isCondition:e}=n;return(0,l.jsx)(z,{isCondition:e,children:t.map(((n,t)=>(0,l.jsx)(S,{isCondition:e,children:(0,l.jsx)("p",{children:n})},t)))})},O=n=>{let{car:t,city:e,country:r}=n;const i=[e,r,"Id: ".concat(t.id),"Year: ".concat(t.year),"Type: ".concat(t.type),"Fuel Consumption: ".concat(t.fuelConsumption),"Engine Size: ".concat(t.engineSize)];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{className:"text",children:[t.make," ",(0,l.jsx)("span",{className:"span",children:t.model}),", ",t.year]}),(0,l.jsx)(E,{array:i}),(0,l.jsx)("p",{className:"description",children:t.description})]})},T=n=>{let{title:t,array:e,isTrue:r}=n;return(0,l.jsxs)("div",{className:"second-block",children:[(0,l.jsx)("h3",{children:t}),(0,l.jsx)(E,{array:e,isCondition:r})]})};function I(n,t){return n.address.split(",")[t]}function L(n){return n.map((n=>{const t=n.split(" ");if(1===t.length)return n;const[e,r]=t.slice(-2);return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)," ").concat(r)}))}const P=n=>{let{car:t,country:e,city:r,functional:i}=n;const o=t.rentalConditions.split("\n"),a=L(t.accessories),s=[o[0],o[1],o[2],"Mileage: ".concat(t.mileage),"Price: ".concat(t.rentalPrice)];return(0,l.jsxs)(w,{children:[(0,l.jsx)("img",{src:t.img,alt:t.make,className:"image"}),(0,l.jsx)(O,{car:t,city:r,country:e}),(0,l.jsx)(T,{title:"Accessories and functionalities:",array:a}),(0,l.jsx)(T,{title:"Rental Conditions: ",array:s,isTrue:!0}),(0,l.jsx)(C,{type:"button",children:"Rental car"})]})},A=n=>{let{car:t,isFav:e,add:r,remove:o}=n;const[a,s]=(0,i.useState)(!1),c=I(t,1),p=I(t,2),x=L(t.functionalities),m=[c,p,t.rentalCompany,t.type,t.model,t.id,x[0]];return(0,l.jsxs)("li",{style:{width:"274px"},children:[(0,l.jsx)(d,{img:t.img,car:t,remove:o,add:r,isFav:e}),(0,l.jsx)(u,{car:t}),(0,l.jsx)(E,{array:m}),(0,l.jsx)(h,{type:"button",onClick:()=>s(!0),children:"Learn more"}),a&&(0,l.jsx)(j,{setVisible:s,children:(0,l.jsx)(P,{car:t,country:p,city:c,functional:x})})]})}},924:(n,t,e)=>{e.d(t,{O:()=>o});var r,i=e(312);const o=e(360).cp.ul(r||(r=(0,i.c)(["\n  display: flex;\n  justify-content: center;\n  gap: 29px;\n  row-gap: 50px;\n  flex-wrap: wrap;\n"])))},512:(n,t,e)=>{e.r(t),e.d(t,{default:()=>c});e(60);var r=e(284),i=e(924),o=e(416),a=e(496);const s=()=>{const n=localStorage.getItem("favorite"),t=n?JSON.parse(n):[],{favorite:e,removeFavorite:s}=(0,o.H)(t);return(0,a.jsx)(i.O,{children:null===e||void 0===e?void 0:e.map((n=>{return(0,a.jsx)(r.c,{car:n,isFav:(t=n.id,e.some((n=>n.id===t))),remove:s},n.id);var t}))})},c=()=>(0,a.jsx)("section",{className:"main-container",children:(0,a.jsx)(s,{})})},416:(n,t,e)=>{e.d(t,{H:()=>i});var r=e(60);const i=n=>{const[t,e]=(0,r.useState)(n);(0,r.useEffect)((()=>{localStorage.setItem("favorite",JSON.stringify(t))}),[t]);return{favorite:t,removeFavorite:n=>{e((t=>t.filter((t=>t.id!==n))))},setFavorite:e}}}}]);
//# sourceMappingURL=512.4ff1fdaf.chunk.js.map