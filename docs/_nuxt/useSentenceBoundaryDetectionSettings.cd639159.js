import{a as d,y as p,e as a,k as f,z as h,u as S,o as i,j as c,h as r,m as b,p as _,q as w,s as u,x as y,H as C,r as v,w as B}from"./entry.36e9101b.js";const k=d({__name:"IconButton",props:{small:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1}},setup(e){const n=e,t=p(()=>{const o=["icon-button"];return n.small&&o.push("icon-button--small"),n.transparent&&o.push("icon-button--transparent"),o});return(o,s)=>(i(),a("button",{class:h(S(t).join(" "))},[f(o.$slots,"default",{},void 0,!0)],2))}}),D=c(k,[["__scopeId","data-v-ae99de75"]]),I={name:"WindowCloseIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},$=["aria-hidden","aria-label"],L=["fill","width","height"],x={d:"M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"},V={key:0};function j(e,n,t,o,s,m){return i(),a("span",w(e.$attrs,{"aria-hidden":!t.title,"aria-label":t.title,class:"material-design-icon window-close-icon",role:"img",onClick:n[0]||(n[0]=l=>e.$emit("click",l))}),[(i(),a("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[r("path",x,[t.title?(i(),a("title",V,b(t.title),1)):_("",!0)])],8,L))],16,$)}const z=c(I,[["render",j]]),H=d({__name:"ModalWindow",props:{dialog:{type:Boolean}},emits:["update:dialog"],setup(e,{emit:n}){const t=()=>{n("update:dialog",!1)},o=s=>{s.stopPropagation()};return(s,m)=>{const l=D;return e.dialog?(i(),a("div",{key:0,class:"modal-background",onClick:t},[r("div",{class:"modal-window",onClick:o},[f(s.$slots,"default",{},void 0,!0),r("div",{class:"close-button",onClick:t},[u(l,null,{default:y(()=>[u(z)]),_:1})])])])):_("",!0)}}}),M=c(H,[["__scopeId","data-v-c19d1be5"]]),g="setting";function N(e,n){const t=`${g}.${e}`,o={...n};return Object.keys(localStorage).filter(s=>s.startsWith(t)).forEach(s=>{typeof o[s.substring(t.length+1)]=="boolean"?o[s.substring(t.length+1)]=W(localStorage.getItem(s)):o[s.substring(t.length+1)]=localStorage.getItem(s)}),o}function T(e,n){for(const t in n)localStorage.setItem(`${g}.${e}.${t}`,n[t])}function E(e){return Object.keys(e).filter(n=>e[n])}function P(e,n){const t={...n};for(const o in t)t[o]=e.includes(o);return t}function W(e){return e===!0||e==="true"}function Q(){const e=C("setting.sentenceBoundaryDetection",()=>N("sentenceBoundaryDetection",{halfwidthDotSpace:!0,halfwidthDotDoubleQuotationSpace:!0,halfwidthDotSingleQuotationSpace:!0,fullwidthDot:!0,fullwidthSmallCircle:!0})),n=v(E(e.value));return B(n,(t,o)=>{e.value=P(t,e.value),T("sentenceBoundaryDetection",e.value)}),{settings:e,settingsSelection:n}}export{D as _,M as a,Q as u};
