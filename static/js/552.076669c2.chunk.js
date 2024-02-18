"use strict";(self.webpackChunkcar_app=self.webpackChunkcar_app||[]).push([[552],{284:(n,e,t)=>{t.d(e,{c:()=>q});var r,o=t(60),i=t(656),a=t(312),s=t(360);const c=s.cp.div(r||(r=(0,a.c)(["\n  position: relative;\n  width: 100%;\n  height: 268px;\n  overflow: hidden;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  fill: none;\n  stroke: var(--text-white);\n\n  .heart-icon {\n    position: absolute;\n    top: 14px;\n    right: 14px;\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n\n    &:hover,\n    &:focus {\n      stroke: var(--text-blue);\n      fill: var(--text-blue);\n      transform: scale(1.3);\n    }\n  }\n\n  .active {\n    stroke: var(--text-blue);\n    fill: var(--text-blue);\n  }\n\n  .image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"])));var l=t(496);const d=n=>{let{img:e,car:t,remove:r,add:o,isFav:a}=n;return(0,l.jsxs)(c,{children:[(0,l.jsx)("button",{type:"button",onClick:()=>{a?r(t.id):o(t.id)},children:(0,l.jsx)(i.c,{className:"heart-icon ".concat(a?"active":""),id:"heart"})}),(0,l.jsx)("img",{src:e,alt:"name",className:"image"})]})};var p;const x=s.cp.div(p||(p=(0,a.c)(["\n  display: flex;\n  margin-bottom: 8px;\n\n  .item {\n    margin-right: auto;\n  }\n\n  .text {\n    font-size: 16px;\n    font-weight: 500;\n    color: var(--text-black);\n  }\n\n  .span {\n    color: var(--text-blue);\n  }\n"]))),u=n=>{let{car:e}=n;return(0,l.jsxs)(x,{children:[(0,l.jsxs)("p",{className:"text item",children:[e.make," ",(0,l.jsx)("span",{className:"span",children:e.model}),", ",e.year]}),(0,l.jsx)("p",{className:"text",children:e.rentalPrice})]})};var h;const g=s.cp.button(h||(h=(0,a.c)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.4;\n  width: 100%;\n  color: var(--text-white);\n  background-color: var(--text-blue);\n  padding: 12px 98.5px;\n  border-radius: 12px;\n  margin-top: 24px;\n  cursor: pointer;\n  transition: background-color 300ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--violet-bg);\n  }\n"])));var m,b;const v=s.cp.div(m||(m=(0,a.c)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000;\n\n  background-color: var(--text-color);\n"]))),f=s.cp.div(b||(b=(0,a.c)(["\n  width: 541px;\n  height: 752px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--text-white);\n  border-radius: 24px;\n\n  .modal-icon {\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    top: 16px;\n    right: 16px;\n    stroke: var(--text-black);\n    cursor: pointer;\n    transition: transform 600ms ease-in-out;\n\n    &:hover,\n    &:focus {\n      transform: rotate(180deg);\n    }\n  }\n"]))),j=n=>{let{setVisible:e,children:t}=n;(0,o.useEffect)((()=>{const n=n=>{"Escape"===n.code&&e(!1)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[e]);return(0,l.jsx)(v,{onClick:n=>{n.currentTarget===n.target&&e(!1)},children:(0,l.jsxs)(f,{children:[(0,l.jsx)("button",{onClick:()=>e(!1),className:"modal-btn",children:(0,l.jsx)(i.c,{className:"modal-icon",id:"close"})}),t]})})};var k,y;const w=s.cp.div(k||(k=(0,a.c)(["\n  padding: 24px 40px 40px;\n\n  .image {\n    width: 461px;\n    height: 248px;\n    object-fit: cover;\n    border-radius: 14px;\n    margin-bottom: 14px;\n  }\n\n  .text {\n    margin-bottom: 8px;\n    font-size: 18px;\n    line-height: 1.3;\n    font-weight: 500;\n    color: var(--text-black);\n  }\n\n  .span {\n    color: var(--text-blue);\n  }\n\n  .description {\n    font-size: 14px;\n    line-height: 1.4;\n    color: var(--text-black);\n    margin-top: 10px;\n  }\n\n  .second-block {\n    h3 {\n      margin-top: 24px;\n      margin-bottom: 8px;\n      font-size: 14px;\n      line-height: 1.4;\n      font-weight: 500;\n      color: var(--text-black);\n    }\n  }\n"]))),C=s.cp.a(y||(y=(0,a.c)(["\n  display: inline-block;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 1.4;\n  font-weight: 600;\n  background-color: var(--text-blue);\n  color: var(--text-white);\n  padding: 12px 50px;\n  border-radius: 12px;\n  margin-top: 24px;\n  cursor: pointer;\n  transition: background-color 300ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: var(--violet-bg);\n  }\n"])));var N,S;const z=s.cp.ul(N||(N=(0,a.c)(["\n  display: flex;\n  gap: ",";\n  row-gap: ",";\n  flex-wrap: wrap;\n"])),(n=>{let{isCondition:e}=n;return e?"8px":"12px"}),(n=>{let{isCondition:e}=n;return e?"8px":"4px"})),M=s.cp.li(S||(S=(0,a.c)(["\n  position: relative;\n\n  &:not(:last-child):after {\n    content: ",";\n    position: absolute;\n    top: 50%;\n    right: -6px;\n    transform: translateY(-50%);\n    border: 1px solid var(--border-line);\n    height: 16px;\n  }\n\n  p {\n    ","\n  }\n"])),(n=>{let{isCondition:e}=n;return e?"none":"''"}),(n=>{let{isCondition:e}=n;return e&&"\n        padding: 7px 14px;\n        background-color: #F9F9F9;\n        border-radius: 35px;\n        color: #363535;\n      "})),F=n=>{let{array:e,isCondition:t}=n;return(0,l.jsx)(z,{isCondition:t,children:e.map(((n,e)=>(0,l.jsx)(M,{isCondition:t,children:(0,l.jsx)("p",{children:n})},e)))})},I=n=>{let{car:e,city:t,country:r}=n;const o=[t,r,"Id: ".concat(e.id),"Year: ".concat(e.year),"Type: ".concat(e.type),"Fuel Consumption: ".concat(e.fuelConsumption),"Engine Size: ".concat(e.engineSize)];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{className:"text",children:[e.make," ",(0,l.jsx)("span",{className:"span",children:e.model}),", ",e.year]}),(0,l.jsx)(F,{array:o}),(0,l.jsx)("p",{className:"description",children:e.description})]})},E=n=>{let{title:e,array:t,isTrue:r}=n;return(0,l.jsxs)("div",{className:"second-block",children:[(0,l.jsx)("h3",{children:e}),(0,l.jsx)(F,{array:t,isCondition:r})]})};function L(n,e){return n.address.split(",")[e]}function A(n){return n.map((n=>{const e=n.split(" ");if(1===e.length)return n;const[t,r]=e.slice(-2);return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," ").concat(r)}))}const T=n=>{let{car:e,country:t,city:r,functional:o}=n;const i=e.rentalConditions.split("\n"),a=A(e.accessories),s=[i[0],i[1],i[2],"Mileage: ".concat(e.mileage),"Price: ".concat(e.rentalPrice)];return(0,l.jsxs)(w,{children:[(0,l.jsx)("img",{src:e.img,alt:e.make,className:"image"}),(0,l.jsx)(I,{car:e,city:r,country:t}),(0,l.jsx)(E,{title:"Accessories and functionalities:",array:a}),(0,l.jsx)(E,{title:"Rental Conditions: ",array:s,isTrue:!0}),(0,l.jsx)(C,{href:"tel:+380730000000",children:"Rental car"})]})},q=n=>{let{car:e,isFav:t,add:r,remove:i}=n;const[a,s]=(0,o.useState)(!1),c=L(e,1),p=L(e,2),x=A(e.functionalities),h=[c,p,e.rentalCompany,e.type,e.model,e.id,x[0]];return(0,l.jsxs)("li",{style:{width:"274px"},children:[(0,l.jsx)(d,{img:e.img,car:e,remove:i,add:r,isFav:t}),(0,l.jsx)(u,{car:e}),(0,l.jsx)(F,{array:h}),(0,l.jsx)(g,{type:"button",onClick:()=>s(!0),children:"Learn more"}),a&&(0,l.jsx)(j,{setVisible:s,children:(0,l.jsx)(T,{car:e,country:p,city:c,functional:x})})]})}},924:(n,e,t)=>{t.d(e,{O:()=>s,k:()=>c});var r,o,i=t(312),a=t(360);const s=a.cp.ul(r||(r=(0,i.c)(["\n  display: flex;\n  justify-content: center;\n  gap: 29px;\n  row-gap: 50px;\n  flex-wrap: wrap;\n"]))),c=a.cp.img(o||(o=(0,i.c)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])))},552:(n,e,t)=>{t.r(e),t.d(e,{default:()=>L});var r=t(60),o=t(284),i=t(924),a=t(800),s=t(636),c=t(624),l=t(128),d=t(496);const p=n=>{let{query:e,cars:t}=n;const p=(0,c.w1)(l.Ir),[x,u]=(0,r.useState)([]),h=localStorage.getItem("favorite"),g=h?JSON.parse(h):[],{favorite:m,removeFavorite:b,setFavorite:v}=(0,a.H)(g);(0,r.useEffect)((()=>{if("All"!==e&&e){const n=t.filter((n=>{let{make:t}=n;return t.toLowerCase().includes(e.toLowerCase())}));u(n)}else u((n=>t&&t.length>0?[...n,...t]:n))}),[t,e]);const f=n=>{const e=x.find((e=>e.id===n));e&&v((n=>[...n,e]))};return(0,d.jsxs)(i.O,{className:"section",children:[p&&(0,d.jsx)(s.c,{}),x.map((n=>{return(0,d.jsx)(o.c,{car:n,add:f,isFav:(e=n.id,m.some((n=>n.id===e))),remove:b},n.id);var e}))]})};var x,u=t(912),h=t(312),g=t(360);const m=g.cp.button(x||(x=(0,h.c)(["\n  font-weight: 500;\n  font-size: 16px;\n  color: var(--text-blue);\n  text-decoration: underline;\n  cursor: pointer;\n"]))),b=n=>{let{handleClick:e}=n;const t=(0,c.w1)(l.Ir);return(0,d.jsx)(m,{type:"button",onClick:e,children:t?"Loading...":"Load More"})};var v;const f=g.cp.section(v||(v=(0,h.c)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),j=["All","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],k="\n  line-height: 1.1;\n  font-weight: 500;\n  background-color: var(--input-color);\n  padding: 14px 18px;\n  font-size: 14px;\n  color: var(--text-black);\n";var y,w,C,N,S;const z=g.cp.form(y||(y=(0,h.c)(["\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  .button {\n    align-self: flex-end;\n    line-height: 1.4;\n    font-weight: 600;\n    padding: 14px 44px;\n    background-color: var(--text-blue);\n    color: var(--text-white);\n    border-radius: 12px;\n    cursor: pointer;\n    transition: background-color 300ms ease;\n\n    &:hover,\n    &:focus {\n      background-color: var(--violet-bg);\n    }\n  }\n"]))),M=g.cp.select(w||(w=(0,h.c)(["\n  ","\n  border-radius: 14px;\n  border-color: transparent;\n  margin-top: 8px;\n  appearance: none;\n  &::-ms-expand {\n    display: none;\n  }\n\n  .car-option {\n    background-color: var(--text-white);\n    color: var(--text-color);\n  }\n\n  .car-option:checked {\n    background-color: var(--text-white);\n    color: var(--text-black);\n  }\n"])),k),F=g.cp.label(C||(C=(0,h.c)(["\n  line-height: 1.3;\n  font-weight: 500;\n  color: var(--text-grey);\n"]))),I=g.cp.input(N||(N=(0,h.c)(["\n  ","\n  border: 1px solid transparent;\n  margin-top: 8px;\n  border-top-left-radius: 14px;\n  border-bottom-left-radius: 14px;\n  border-right: 1px solid var(--input-stick);\n  max-width: 160px;\n  box-sizing: border-box;\n\n  &.input-left {\n    border-right: 0;\n    border-top-right-radius: 14px;\n    border-bottom-right-radius: 14px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  &::placeholder {\n    ","\n    padding: 0;\n  }\n"])),k,k),E=(g.cp.div(S||(S=(0,h.c)(["\n  position: relative;\n\n  .icon-down {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"]))),n=>{let{setQuery:e}=n;const t=j.map(((n,e)=>(0,d.jsx)("option",{value:n,className:"car-option",children:n},e))),r=Array.from({length:80},((n,e)=>(0,d.jsx)("option",{value:10*(e+1),className:"car-option",children:(10*(e+1)).toString()},e)));return(0,d.jsxs)(z,{onSubmit:n=>{n.preventDefault();const t=n.target.make.value;e(t),localStorage.setItem("selector",t)},children:[(0,d.jsxs)(F,{children:[(0,d.jsx)("p",{children:"Car brand"}),(0,d.jsxs)(M,{name:"make",defaultValue:localStorage.getItem("selector")||"",children:[(0,d.jsx)("option",{className:"car-option",disabled:!0,selected:!0,children:"Enter the text"}),t]})]}),(0,d.jsxs)(F,{children:[(0,d.jsx)("p",{children:"Price / 1 hour"}),(0,d.jsxs)(M,{children:[(0,d.jsx)("option",{className:"car-option",disabled:!0,selected:!0,children:"To $"}),r]})]}),(0,d.jsxs)(F,{children:[(0,d.jsx)("p",{children:"Car mileage / km"}),(0,d.jsx)(I,{type:"text",placeholder:"From"}),(0,d.jsx)(I,{type:"text",placeholder:"To",className:"input-left"})]}),(0,d.jsx)("button",{type:"submit",className:"button",children:"Search"})]})}),L=()=>{const[n,e]=(0,r.useState)(!1),[t,o]=(0,r.useState)((()=>localStorage.getItem("query")||"")),i=(0,c.w1)(l.Ws),[a,s]=(0,r.useState)(1),x=(0,c.OY)();return(0,r.useEffect)((()=>{0===i.length||t?e(!1):e(!0),"All"===t&&e(!0)}),[i,t]),(0,r.useEffect)((()=>{const n="All"===t?"":t;localStorage.setItem("query",n),x((0,u.Y)({query:n,page:a}))}),[x,a,t]),(0,d.jsxs)(f,{className:"main-container",children:[(0,d.jsx)(E,{setQuery:o}),(0,d.jsx)(p,{query:t,cars:i}),n&&(0,d.jsx)(b,{handleClick:()=>{s((n=>n+1))}})]})}},128:(n,e,t)=>{t.d(e,{Ir:()=>a,Ws:()=>i});var r=t(275);const o=n=>n.cars,i=(0,r.M3)(o,(n=>n.items)),a=(0,r.M3)(o,(n=>n.isLoading));(0,r.M3)(o,(n=>n.error)),(0,r.M3)(o,(n=>n.filter))},800:(n,e,t)=>{t.d(e,{H:()=>o});var r=t(60);const o=n=>{const[e,t]=(0,r.useState)(n);(0,r.useEffect)((()=>{localStorage.setItem("favorite",JSON.stringify(e))}),[e]);return{favorite:e,removeFavorite:n=>{t((e=>e.filter((e=>e.id!==n))))},setFavorite:t}}}}]);
//# sourceMappingURL=552.076669c2.chunk.js.map