import{a as u,y as f,e as n,k as _,z as h,u as g,o as i,j as r,h as c,m as C,p,q as k,s as d,x as w}from"./entry.25c446ac.js";const b=u({__name:"IconButton",props:{small:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1}},setup(s){const o=s,t=f(()=>{const e=["icon-button"];return o.small&&e.push("icon-button--small"),o.transparent&&e.push("icon-button--transparent"),e});return(e,a)=>(i(),n("button",{class:h(g(t).join(" "))},[_(e.$slots,"default",{},void 0,!0)],2))}}),v=r(b,[["__scopeId","data-v-ae99de75"]]),y={name:"WindowCloseIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},B=["aria-hidden","aria-label"],L=["fill","width","height"],V={d:"M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"},x={key:0};function z(s,o,t,e,a,m){return i(),n("span",k(s.$attrs,{"aria-hidden":!t.title,"aria-label":t.title,class:"material-design-icon window-close-icon",role:"img",onClick:o[0]||(o[0]=l=>s.$emit("click",l))}),[(i(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[c("path",V,[t.title?(i(),n("title",x,C(t.title),1)):p("",!0)])],8,L))],16,B)}const I=r(y,[["render",z]]),H=u({__name:"ModalWindow",props:{dialog:{type:Boolean}},emits:["update:dialog"],setup(s,{emit:o}){const t=()=>{o("update:dialog",!1)},e=a=>{a.stopPropagation()};return(a,m)=>{const l=v;return s.dialog?(i(),n("div",{key:0,class:"modal-background",onClick:t},[c("div",{class:"modal-window",onClick:e},[_(a.$slots,"default",{},void 0,!0),c("div",{class:"close-button",onClick:t},[d(l,null,{default:w(()=>[d(I)]),_:1})])])])):p("",!0)}}}),S=r(H,[["__scopeId","data-v-c19d1be5"]]);export{v as _,S as a};
