import{a as V,r as w,t as U,w as E,b as F,o as i,e as a,f as g,h as Z,u as $,i as O,j as p,k,l as K,m as f,p as H,q as T,s as d,v as C,F as D,x as N,y as W,z,A as j,c as P,B as q}from"./entry.d966f49f.js";import{_ as G}from"./IconButton.8f71a44b.js";function J(n){return n.innerText==`
`||n.innerText.match(/[^\n]\n$/)}function Q(n){n.textContent=n.innerText.replace(/\n$/,"")}function I(n){const t=window.getSelection(),e=t.getRangeAt(0);e.deleteContents();const s=document.createTextNode(n);e.insertNode(s),t.collapseToEnd()}function X(){const e=window.getSelection().getRangeAt(0).extractContents();navigator.clipboard.writeText(e.textContent)}const Y=["textContent","onKeydown"],ee=V({__name:"WriteDownArea",props:{modelValue:null},emits:["update:modelValue"],setup(n,{emit:t}){const e=n,s=w(e.modelValue),r=w(e.modelValue),u=w(Math.random()),l=w(null),{modelValue:_}=U(e);E(_,(o,c)=>{const b=()=>o!=c,A=()=>s.value!=o;b()&&A()&&(s.value=o,r.value=o,u.value=Math.random(),F(()=>{if(l.value.focus(),o.length>0){const S=document.createRange(),L=window.getSelection(),M=o.match(/\n\n$/)?-1:0;S.setStart(l.value.firstChild,o.length+M),S.collapse(),L.removeAllRanges(),L.addRange(S)}}))});const v=O(({target:o})=>{o instanceof HTMLDivElement&&m(o)}),x=o=>{o.preventDefault();const{target:c}=o;if(!(o instanceof ClipboardEvent)||!(c instanceof HTMLDivElement))return;const b=o.clipboardData.getData("text/plain");I(b.replace(/\r\n/g,`
`)),h(c,()=>Q(c))},B=o=>{o.preventDefault();const{target:c}=o;o instanceof ClipboardEvent&&c instanceof HTMLDivElement&&(X(),h(c,()=>I(`
`)))},y=w(!1),R=o=>{if(y.value)return;o.preventDefault();const{target:c}=o;c instanceof HTMLDivElement&&(I(`
`),h(c,()=>I(`
`)))};function m(o,c=!0){c&&(s.value=o.innerText),t("update:modelValue",o.innerText==`
`?"":o.innerText)}function h(o,c){J(o)?(c(),m(o,!1)):m(o)}return(o,c)=>(i(),a("div",{class:"textarea",ref_key:"areaRef",ref:l,contentEditable:"true",key:u.value,textContent:g(r.value),onKeydown:Z(R,["enter"]),onInput:c[0]||(c[0]=(...b)=>$(v)&&$(v)(...b)),onCut:B,onPaste:x,onCompositionstart:c[1]||(c[1]=b=>y.value=!0),onCompositionend:c[2]||(c[2]=b=>y.value=!1)},null,40,Y))}}),te=p(ee,[["__scopeId","data-v-efc1fbc8"]]),ne={},oe={class:"icon-partition"};function ie(n,t){return i(),a("button",oe,[k(n.$slots,"default",{},()=>[K("|")],!0)])}const ae=p(ne,[["render",ie],["__scopeId","data-v-4037046d"]]),se={name:"ClipboardFileOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},le=["aria-hidden","aria-label"],ce=["fill","width","height"],re={d:"M15 23C13.9 23 13 22.11 13 21V12C13 10.9 13.9 10 15 10H19L23 14V21C23 22.11 22.11 23 21 23H15M15 21H21V14.83L18.17 12H15V21M19 3C20.1 3 21 3.9 21 5V9.17L19.83 8H19V5H17V7H7V5H5V19H11V21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z"},de={key:0};function ue(n,t,e,s,r,u){return i(),a("span",T(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon clipboard-file-outline-icon",role:"img",onClick:t[0]||(t[0]=l=>n.$emit("click",l))}),[(i(),a("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[f("path",re,[e.title?(i(),a("title",de,g(e.title),1)):H("",!0)])],8,ce))],16,le)}const _e=p(se,[["render",ue]]),fe={name:"ContentCopyIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},me=["aria-hidden","aria-label"],pe=["fill","width","height"],he={d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"},ge={key:0};function ve(n,t,e,s,r,u){return i(),a("span",T(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon content-copy-icon",role:"img",onClick:t[0]||(t[0]=l=>n.$emit("click",l))}),[(i(),a("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[f("path",he,[e.title?(i(),a("title",ge,g(e.title),1)):H("",!0)])],8,pe))],16,me)}const Ce=p(fe,[["render",ve]]),$e={name:"FileOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},be=["aria-hidden","aria-label"],we=["fill","width","height"],ke={d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"},xe={key:0};function ye(n,t,e,s,r,u){return i(),a("span",T(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon file-outline-icon",role:"img",onClick:t[0]||(t[0]=l=>n.$emit("click",l))}),[(i(),a("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[f("path",ke,[e.title?(i(),a("title",xe,g(e.title),1)):H("",!0)])],8,we))],16,be)}const Ve=p($e,[["render",ye]]),He={name:"RedoIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Te=["aria-hidden","aria-label"],Se=["fill","width","height"],Me={d:"M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"},ze={key:0};function Le(n,t,e,s,r,u){return i(),a("span",T(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon redo-icon",role:"img",onClick:t[0]||(t[0]=l=>n.$emit("click",l))}),[(i(),a("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[f("path",Me,[e.title?(i(),a("title",ze,g(e.title),1)):H("",!0)])],8,Se))],16,Te)}const Ie=p(He,[["render",Le]]),Be={name:"UndoIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Re=["aria-hidden","aria-label"],Ae=["fill","width","height"],De={d:"M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"},Ne={key:0};function Ee(n,t,e,s,r,u){return i(),a("span",T(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon undo-icon",role:"img",onClick:t[0]||(t[0]=l=>n.$emit("click",l))}),[(i(),a("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[f("path",De,[e.title?(i(),a("title",Ne,g(e.title),1)):H("",!0)])],8,Ae))],16,Re)}const Ue=p(Be,[["render",Ee]]),Fe={class:"toolbar-window"},Ze={class:"toolbar"},Oe={class:"workspace"},Ke=V({__name:"ToolBar",props:{canUndo:{type:Boolean},canRedo:{type:Boolean}},setup(n){return(t,e)=>{const s=ae,r=G;return i(),a("div",Fe,[f("div",Ze,[d(s),d(r,{"aria-label":"new text","data-balloon-pos":"right",onClick:e[0]||(e[0]=u=>t.$emit("new-click"))},{default:C(()=>[d(Ve)]),_:1}),d(r,{"aria-label":"text in clipboard","data-balloon-pos":"right",onClick:e[1]||(e[1]=u=>t.$emit("clipboard-click"))},{default:C(()=>[d(_e)]),_:1}),d(s),d(r,{"aria-label":"copy to clipboard","data-balloon-pos":"right",onClick:e[2]||(e[2]=u=>t.$emit("copy-click"))},{default:C(()=>[d(Ce)]),_:1}),d(s),d(r,{"aria-label":"undo","data-balloon-pos":"right",disabled:!n.canUndo,onClick:e[3]||(e[3]=u=>t.$emit("undo-click"))},{default:C(()=>[d(Ue)]),_:1},8,["disabled"]),d(r,{"aria-label":"redo","data-balloon-pos":"right",disabled:!n.canRedo,onClick:e[4]||(e[4]=u=>t.$emit("redo-click"))},{default:C(()=>[d(Ie)]),_:1},8,["disabled"])]),f("div",Oe,[k(t.$slots,"default",{},void 0,!0)])])}}}),We=p(Ke,[["__scopeId","data-v-2c2fecfd"]]),je={class:"section"},Pe={class:"paragraph"},qe={class:"sentence"},Ge=V({__name:"ReviewArea",props:{structure:null,style:null},setup(n){return(t,e)=>(i(),a("div",{class:W(["review-window",n.style].join(" "))},[f("div",je,[(i(!0),a(D,null,N(n.structure,s=>(i(),a("p",Pe,[(i(!0),a(D,null,N(s,r=>(i(),a("span",qe,g(r),1))),256))]))),256))])],2))}}),Je=p(Ge,[["__scopeId","data-v-3746a539"]]),Qe={class:"status-indicator-window"},Xe={class:"status-indicator"},Ye={class:"view-space"},et=V({__name:"StatusIndicator",props:{structure:null},setup(n){const t=n,e=z(()=>{const s=t.structure.length,r=t.structure.reduce((l,_)=>l+_.length,0),u=t.structure.reduce((l,_)=>l+_.reduce((v,x)=>v+x.length,0),0);return{paragraphs:Math.min(s,r),sentences:r,characters:u}});return(s,r)=>(i(),a("div",Qe,[f("div",Xe,[f("span",null,g($(e).characters.toLocaleString())+" characters",1),f("span",null,g($(e).sentences.toLocaleString())+" sentences",1),f("span",null,g($(e).paragraphs.toLocaleString())+" paragraphs",1)]),f("div",Ye,[k(s.$slots,"default",{},void 0,!0)])]))}}),tt=p(et,[["__scopeId","data-v-07ad1e50"]]),nt={},ot={class:"rounded-button"};function it(n,t){return i(),a("button",ot,[k(n.$slots,"default",{},void 0,!0)])}const at=p(nt,[["render",it],["__scopeId","data-v-d300a829"]]),st={name:"SwapHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},lt=["aria-hidden","aria-label"],ct=["fill","width","height"],rt={d:"M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"},dt={key:0};function ut(n,t,e,s,r,u){return i(),a("span",T(n.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon swap-horizontal-icon",role:"img",onClick:t[0]||(t[0]=l=>n.$emit("click",l))}),[(i(),a("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[f("path",rt,[e.title?(i(),a("title",dt,g(e.title),1)):H("",!0)])],8,ct))],16,lt)}const _t=p(st,[["render",ut]]),ft={class:"view-menu-window"},mt={class:"view-menu"},pt={class:"label"},ht={class:"view-space"},gt=V({__name:"ViewMenu",props:{menu:null},emits:["update:menu"],setup(n,{emit:t}){const e=n,s=["topic-sentence-highlights","bulleted-topic-sentences"];j(()=>{if(e.menu)return;const l=s[0];t("update:menu",l)});const r=z(()=>e.menu.replace(/-/g," ")),u=()=>{const l=s.indexOf(e.menu)+1;t("update:menu",s[l%s.length])};return(l,_)=>{const v=at;return i(),a("div",ft,[f("div",mt,[d(v,{onClick:u},{default:C(()=>[d(_t),f("span",pt,g($(r)),1)]),_:1})]),f("div",ht,[k(l.$slots,"default",{},void 0,!0)])])}}}),vt=p(gt,[["__scopeId","data-v-4ad3999c"]]),Ct={},$t={class:"pages"},bt={class:"left-page"},wt={class:"right-page"};function kt(n,t){return i(),a("div",$t,[f("div",bt,[k(n.$slots,"left-page",{},void 0,!0)]),f("div",wt,[k(n.$slots,"right-page",{},void 0,!0)])])}const xt=p(Ct,[["render",kt],["__scopeId","data-v-dc3b3f64"]]),Ht=V({__name:"index",setup(n){const t=w(""),e=w(""),s=z(()=>t.value.trim().replace(/\n\n+/g,`

`).split(`

`).map(m=>m.replace(/(。|\U+ff0e)/g,`$1
`).replace(/(\.[\"\']? )/g,`$1
`).trim().split(`
`).filter(h=>h.length))),r=()=>{t.value=""},u=async()=>{const m=await navigator.clipboard.readText();m.trim().length>0&&(t.value=m.replace(/\r\n/g,`
`).trim())},l=()=>{t.value.trim().length>0&&navigator.clipboard.writeText(t.value).then(()=>window.alert("text was copied to clipboard"))},_=w([t.value]),v=w([]);E(t,(m,h)=>{const o=()=>m.trim()!=h.trim(),c=()=>_.value[_.value.length-1]==m;o()&&!c()&&(_.value.length>12&&_.value.shift(),_.value.push(m),v.value.splice(0))});const x=z(()=>_.value.length>1),B=()=>{if(!x.value)return;const m=_.value.pop();v.value.push(m),t.value=_.value[_.value.length-1]},y=z(()=>v.value.length>0),R=()=>{if(!y.value)return;const m=v.value.pop();_.value.push(m),t.value=_.value[_.value.length-1]};return(m,h)=>{const o=te,c=We,b=Je,A=tt,S=vt,L=xt;return i(),P(L,null,{"left-page":C(()=>[d(c,{"can-undo":$(x),"can-redo":$(y),onNewClick:r,onClipboardClick:u,onCopyClick:l,onUndoClick:B,onRedoClick:R},{default:C(()=>[d(o,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=M=>t.value=M)},null,8,["modelValue"])]),_:1},8,["can-undo","can-redo"])]),"right-page":C(()=>[d(S,{menu:e.value,"onUpdate:menu":h[1]||(h[1]=M=>e.value=M)},{default:C(()=>[d(A,{structure:$(s)},{default:C(()=>[d(b,{structure:$(s),style:q(e.value)},null,8,["structure","style"])]),_:1},8,["structure"])]),_:1},8,["menu"])]),_:1})}}});export{Ht as default};
