import{a as x,r as w,t as W,w as U,b as ae,o as a,e as l,f as P,v as le,h as s,u as m,i as ie,j as _,k as L,l as B,m as f,p as y,q as V,s as r,x as C,y as S,z as j,c as q,F as N,A as O,B as se,C as ce,D as de,E as re,G as ue,S as Z}from"./entry.25c446ac.js";import{_ as _e,a as he}from"./ModalWindow.2b9abe22.js";function pe(n,t){const e=document.createRange(),o=window.getSelection();e.setStart(n,t),e.collapse(),o.removeAllRanges(),o.addRange(e)}const me={class:"lite-textarea"},fe=x({__name:"WriteDownAreaLite",props:{modelValue:null},emits:["update:modelValue"],setup(n,{emit:t}){const e=n,o=w(e.modelValue),i=w(null),{modelValue:d}=W(e);U(d,(h,b)=>{const $=()=>h!=b,z=()=>o.value!=h;$()&&z()&&(o.value=h,ae(()=>{i.value.focus(),h.length>0&&pe(i.value.firstChild,h.length)}))});const c=ie(()=>{t("update:modelValue",o.value)});return(h,b)=>(a(),l("div",me,[P(s("textarea",{placeholder:"Write down here.",ref_key:"areaRef",ref:i,"onUpdate:modelValue":b[0]||(b[0]=$=>o.value=$),onInput:b[1]||(b[1]=(...$)=>m(c)&&m(c)(...$))},null,544),[[le,o.value]])]))}}),ge=_(fe,[["__scopeId","data-v-bc2eb378"]]),ve={},Ce={class:"icon-partition"};function $e(n,t){return a(),l("button",Ce,[L(n.$slots,"default",{},()=>[B("|")],!0)])}const be=_(ve,[["render",$e],["__scopeId","data-v-4037046d"]]),ke={name:"ClipboardFileOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},ye=["aria-hidden","aria-label"],we=["fill","width","height"],Se={d:"M15 23C13.9 23 13 22.11 13 21V12C13 10.9 13.9 10 15 10H19L23 14V21C23 22.11 22.11 23 21 23H15M15 21H21V14.83L18.17 12H15V21M19 3C20.1 3 21 3.9 21 5V9.17L19.83 8H19V5H17V7H7V5H5V19H11V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z"},xe={key:0};function Ve(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon clipboard-file-outline-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",Se,[e.title?(a(),l("title",xe,f(e.title),1)):y("",!0)])],8,we))],16,ye)}const He=_(ke,[["render",Ve]]),Le={name:"ClipboardEditOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},ze=["aria-hidden","aria-label"],Ie=["fill","width","height"],Me={d:"M21.04 12.13C21.18 12.13 21.31 12.19 21.42 12.3L22.7 13.58C22.92 13.79 22.92 14.14 22.7 14.35L21.7 15.35L19.65 13.3L20.65 12.3C20.76 12.19 20.9 12.13 21.04 12.13M19.07 13.88L21.12 15.93L15.06 22H13V19.94L19.07 13.88M11 19L9 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19C20.1 3 21 3.9 21 5V9L19 11V5H17V7H7V5H5V19H11M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z"},Be={key:0};function De(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon clipboard-edit-outline-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",Me,[e.title?(a(),l("title",Be,f(e.title),1)):y("",!0)])],8,Ie))],16,ze)}const Te=_(Le,[["render",De]]),Re={name:"FileOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Ae=["aria-hidden","aria-label"],Ne=["fill","width","height"],Oe={d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"},Fe={key:0};function Ue(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon file-outline-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",Oe,[e.title?(a(),l("title",Fe,f(e.title),1)):y("",!0)])],8,Ne))],16,Ae)}const Ee=_(Re,[["render",Ue]]),Ke={name:"FolderOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Ze=["aria-hidden","aria-label"],We=["fill","width","height"],Pe={d:"M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z"},je={key:0};function qe(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon folder-outline-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",Pe,[e.title?(a(),l("title",je,f(e.title),1)):y("",!0)])],8,We))],16,Ze)}const Ge=_(Ke,[["render",qe]]),Xe={name:"RedoIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Je=["aria-hidden","aria-label"],Qe=["fill","width","height"],Ye={d:"M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"},et={key:0};function tt(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon redo-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",Ye,[e.title?(a(),l("title",et,f(e.title),1)):y("",!0)])],8,Qe))],16,Je)}const nt=_(Xe,[["render",tt]]),ot={name:"ContentSaveOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},at=["aria-hidden","aria-label"],lt=["fill","width","height"],it={d:"M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z"},st={key:0};function ct(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon content-save-outline-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",it,[e.title?(a(),l("title",st,f(e.title),1)):y("",!0)])],8,lt))],16,at)}const dt=_(ot,[["render",ct]]),rt={name:"UndoIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},ut=["aria-hidden","aria-label"],_t=["fill","width","height"],ht={d:"M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"},pt={key:0};function mt(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon undo-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",ht,[e.title?(a(),l("title",pt,f(e.title),1)):y("",!0)])],8,_t))],16,ut)}const ft=_(rt,[["render",mt]]),gt={class:"toolbar-window"},vt={class:"toolbar"},Ct={class:"workspace"},$t=x({__name:"ToolBar",props:{textEmpty:{type:Boolean},canUndo:{type:Boolean},canRedo:{type:Boolean}},setup(n){return(t,e)=>{const o=be,i=_e;return a(),l("div",gt,[s("div",vt,[r(o),r(i,{"aria-label":"new text","data-balloon-pos":"down",onClick:e[0]||(e[0]=d=>t.$emit("new-click"))},{default:C(()=>[r(Ee)]),_:1}),r(o),r(i,{"aria-label":"text in clipboard","data-balloon-pos":"down",onClick:e[1]||(e[1]=d=>t.$emit("clipboard-click"))},{default:C(()=>[r(He)]),_:1}),r(i,{"aria-label":"copy to clipboard","data-balloon-pos":"down",disabled:n.textEmpty,onClick:e[2]||(e[2]=d=>t.$emit("copy-click"))},{default:C(()=>[r(Te)]),_:1},8,["disabled"]),r(o),r(i,{"aria-label":"texts in local storage","data-balloon-pos":"down",onClick:e[3]||(e[3]=d=>t.$emit("folder-click"))},{default:C(()=>[r(Ge)]),_:1}),r(i,{"aria-label":"save to local storage","data-balloon-pos":"down",disabled:n.textEmpty,onClick:e[4]||(e[4]=d=>t.$emit("save-click"))},{default:C(()=>[r(dt)]),_:1},8,["disabled"]),r(o),r(i,{"aria-label":"undo","data-balloon-pos":"down",disabled:!n.canUndo,onClick:e[5]||(e[5]=d=>t.$emit("undo-click"))},{default:C(()=>[r(ft)]),_:1},8,["disabled"]),r(i,{"aria-label":"redo","data-balloon-pos":"down",disabled:!n.canRedo,onClick:e[6]||(e[6]=d=>t.$emit("redo-click"))},{default:C(()=>[r(nt)]),_:1},8,["disabled"])]),s("div",Ct,[L(t.$slots,"default",{},void 0,!0)])])}}}),bt=_($t,[["__scopeId","data-v-8340a10b"]]),kt=["disabled"],yt=x({__name:"RoundedButton",props:{disabled:{type:Boolean,default:!1},destroy:{type:Boolean,default:!1}},setup(n){const t=n,e=S(()=>{const o=["rounded-button"];return t.destroy&&o.push("rounded-button--destroy"),o});return(o,i)=>(a(),l("button",{class:j(m(e).join(" ")),disabled:t.disabled},[L(o.$slots,"default",{},void 0,!0)],10,kt))}}),wt=_(yt,[["__scopeId","data-v-ea301603"]]),E="doc.snapshot",K="#";function St(){const n=G();return n.length===0?null:n[0]}function G(){return Object.keys(localStorage).filter(n=>n.startsWith(E)).sort((n,t)=>t.localeCompare(n))}function F(n){return J(n)?localStorage.getItem(n):null}function xt(n){const t=new Date().getTime();localStorage.setItem(E+K+t,n)}function X(n){n.forEach(t=>{J(t)&&localStorage.removeItem(t)})}function Vt(n){const t=Number(n.split(K)[1]),e=new Date;return e.setTime(t),e}function J(n){return n.startsWith(E+K)}const Q=n=>(ce("data-v-42697913"),n=n(),de(),n),Ht=Q(()=>s("h2",null,"Local Storage",-1)),Lt={key:0},zt=Q(()=>s("p",null,"no texts exist",-1)),It=[zt],Mt={key:1},Bt=["checked"],Dt={class:"operation"},Tt=["data-key"],Rt=["value"],At={class:"text"},Nt=x({__name:"FolderDialog",props:{dialog:{type:Boolean}},emits:["update:dialog","load"],setup(n,{emit:t}){const e=n,o=g=>{t("update:dialog",g)},i=w([]),d=w([]),{dialog:c}=W(e);U(c,(g,k)=>{g&&!k&&p()});const h=S(()=>{const g={};return i.value.forEach(k=>g[k]=F(k)),g}),b=g=>{const k=g.target.dataset.key;t("load",k),t("update:dialog",!1)},$=()=>{X(d.value),p()},z=S(()=>d.value.length==i.value.length),D=()=>{z.value?d.value=[]:d.value=i.value};function p(){i.value=G(),d.value=[]}return(g,k)=>{const T=wt,M=he;return a(),q(M,{dialog:e.dialog,"onUpdate:dialog":o},{default:C(()=>[s("section",null,[Ht,i.value.length?y("",!0):(a(),l("div",Lt,It)),i.value.length?(a(),l("div",Mt,[s("p",null,[r(T,{destroy:"",disabled:!d.value.length,onClick:$},{default:C(()=>[B("Remove selected items")]),_:1},8,["disabled"])]),s("p",null,[s("a",{onClick:D},[s("input",{type:"checkbox",checked:m(z)},null,8,Bt),B(" Select all ")])]),s("div",null,[(a(!0),l(N,null,O(i.value,H=>(a(),l("div",{class:"item",key:H},[s("div",Dt,[s("a",{onClick:b,"data-key":H},"Load from this",8,Tt)]),s("p",null,[s("label",null,[P(s("input",{type:"checkbox",value:H,"onUpdate:modelValue":k[0]||(k[0]=u=>d.value=u)},null,8,Rt),[[se,d.value]]),B(" "+f(m(Vt)(H).toLocaleString().replace(/([^\d])([\d])([^\d])/g,"$10$2$3")),1)])]),s("p",At,f(m(h)[H]),1)]))),128))])])):y("",!0)])]),_:1},8,["dialog"])}}}),Ot=_(Nt,[["__scopeId","data-v-42697913"]]),Ft={class:"section"},Ut={class:"paragraph"},Et={class:"sentence"},Kt=x({__name:"ReviewArea",props:{structure:null,style:null},setup(n){return(t,e)=>(a(),l("div",{class:j(["review-window",n.style].join(" "))},[s("div",Ft,[(a(!0),l(N,null,O(n.structure,o=>(a(),l("p",Ut,[(a(!0),l(N,null,O(o,i=>(a(),l("span",Et,f(i),1))),256))]))),256))])],2))}}),Zt=_(Kt,[["__scopeId","data-v-3746a539"]]),Wt={class:"status-indicator-window"},Pt={class:"status-indicator"},jt={class:"characters"},qt={class:"sentences"},Gt={class:"paragraphs"},Xt={class:"view-space"},Jt=x({__name:"StatusIndicator",props:{structure:null},setup(n){const t=n,e=S(()=>{const o=t.structure.length,i=t.structure.reduce((c,h)=>c+h.length,0),d=t.structure.reduce((c,h)=>c+h.reduce((b,$)=>b+$.length,0),0);return{paragraphs:Math.min(o,i),sentences:i,characters:d}});return(o,i)=>(a(),l("div",Wt,[s("div",Pt,[s("span",jt,f(m(e).characters.toLocaleString())+" characters",1),s("span",qt,f(m(e).sentences.toLocaleString())+" sentences",1),s("span",Gt,f(m(e).paragraphs.toLocaleString())+" paragraphs",1)]),s("div",Xt,[L(o.$slots,"default",{},void 0,!0)])]))}}),Qt=_(Jt,[["__scopeId","data-v-00c14ca9"]]),Yt={name:"SwapHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},en=["aria-hidden","aria-label"],tn=["fill","width","height"],nn={d:"M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"},on={key:0};function an(n,t,e,o,i,d){return a(),l("span",V(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon swap-horizontal-icon",role:"img",onClick:t[0]||(t[0]=c=>n.$emit("click",c))}),[(a(),l("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[s("path",nn,[e.title?(a(),l("title",on,f(e.title),1)):y("",!0)])],8,tn))],16,en)}const ln=_(Yt,[["render",an]]),sn={class:"view-menu-window"},cn={class:"view-menu"},dn={class:"label"},rn={class:"view-space"},un=x({__name:"ViewMenu",props:{menu:null},emits:["update:menu"],setup(n,{emit:t}){const e=n,o=["topic-sentence-highlights","bulleted-topic-sentences"];re(()=>{if(e.menu)return;const c=o[0];t("update:menu",c)});const i=S(()=>e.menu.replace(/-/g," ")),d=()=>{const c=o.indexOf(e.menu)+1;t("update:menu",o[c%o.length])};return(c,h)=>(a(),l("div",sn,[s("div",cn,[s("div",{class:"imitation-button",onClick:d},[r(ln),s("span",dn,f(m(i)),1)])]),s("div",rn,[L(c.$slots,"default",{},void 0,!0)])]))}}),_n=_(un,[["__scopeId","data-v-c3bba6cc"]]),hn={},pn={class:"pages"},mn={class:"left-page"},fn={class:"right-page"};function gn(n,t){return a(),l("div",pn,[s("div",mn,[L(n.$slots,"left-page",{},void 0,!0)]),s("div",fn,[L(n.$slots,"right-page",{},void 0,!0)])])}const vn=_(hn,[["render",gn],["__scopeId","data-v-dc3b3f64"]]),bn=x({__name:"index",setup(n){const t=w(""),e=w(""),o=S(()=>t.value.trim().replace(/\n\n+/g,`

`).split(`

`).map(u=>u.replace(/(。|\U+ff0e)/g,`$1
`).replace(/(\.[\"\']? )/g,`$1
`).trim().split(`
`).filter(v=>v.length))),i=()=>{t.value=""},d=async()=>{const u=await navigator.clipboard.readText();u.trim().length>0&&(t.value=u.replace(/\r\n/g,`
`).trim())},c=w(!1),h=()=>{c.value=!0},b=u=>{t.value=F(u)},$=S(()=>!t.value.trim().length),z=()=>{var u;if(!$.value){const v=St();v!=null&&((u=F(v))==null?void 0:u.trim())===t.value.trim()&&X([v]),xt(t.value),Z.show({pos:"bottom-center",text:"text was saved to local storage",actionText:"OK"})}},D=()=>{$.value||navigator.clipboard.writeText(t.value).then(()=>Z.show({pos:"bottom-center",text:"text was copied to clipboard",actionText:"OK"}))},p=w([t.value]),g=w([]);U(t,(u,v)=>{const R=()=>u.trim()!=v.trim(),A=()=>p.value[p.value.length-1]==u;R()&&!A()&&(p.value.length>12&&p.value.shift(),p.value.push(u),g.value.splice(0))});const k=S(()=>p.value.length>1),T=()=>{if(!k.value)return;const u=p.value.pop();g.value.push(u),t.value=p.value[p.value.length-1]},M=S(()=>g.value.length>0),H=()=>{if(!M.value)return;const u=g.value.pop();p.value.push(u),t.value=p.value[p.value.length-1]};return(u,v)=>{const R=ge,A=bt,Y=Ot,ee=Zt,te=Qt,ne=_n,oe=vn;return a(),q(oe,null,{"left-page":C(()=>[r(A,{"text-empty":m($),"can-undo":m(k),"can-redo":m(M),onNewClick:i,onClipboardClick:d,onFolderClick:h,onSaveClick:z,onCopyClick:D,onUndoClick:T,onRedoClick:H},{default:C(()=>[r(R,{modelValue:t.value,"onUpdate:modelValue":v[0]||(v[0]=I=>t.value=I)},null,8,["modelValue"])]),_:1},8,["text-empty","can-undo","can-redo"]),r(Y,{dialog:c.value,"onUpdate:dialog":v[1]||(v[1]=I=>c.value=I),onLoad:b},null,8,["dialog"])]),"right-page":C(()=>[r(ne,{menu:e.value,"onUpdate:menu":v[2]||(v[2]=I=>e.value=I)},{default:C(()=>[r(te,{structure:m(o)},{default:C(()=>[r(ee,{structure:m(o),style:ue(e.value)},null,8,["structure","style"])]),_:1},8,["structure"])]),_:1},8,["menu"])]),_:1})}}});export{bn as default};