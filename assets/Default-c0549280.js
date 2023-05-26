import{_ as se}from"./plugin-vue_export-helper-c27b6911.js";import{p as k,i as D,c,r as le,a as z,g as ue,s as N,o as Z,b as ie,d as L,f as re,e as ce,h as F,j as b,k as ve,l as K,m as X,w as U,n as pe,q as de,u as fe}from"./index-23bf0e44.js";import{u as me,m as W,a as ye,b as Y}from"./tag-7b041a42.js";const P=Symbol.for("vuetify:layout"),ge=Symbol.for("vuetify:layout-item"),q=1e3,he=k({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function _e(){const e=D(P);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const be=(e,v,o,l)=>{let s={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...s}}];for(const i of e){const f=v.get(i),y=o.get(i),_=l.get(i);if(!f||!y||!_)continue;const g={...s,[f.value]:parseInt(s[f.value],10)+(_.value?parseInt(y.value,10):0)};u.push({id:i,layer:g}),s=g}return u};function xe(e){const v=D(P,null),o=c(()=>v?v.rootZIndex.value-100:q),l=le([]),s=z(new Map),u=z(new Map),i=z(new Map),f=z(new Map),y=z(new Map),{resizeRef:_,contentRect:g}=me(),G=c(()=>{const n=new Map,p=e.overlaps??[];for(const t of p.filter(r=>r.includes(":"))){const[r,a]=t.split(":");if(!l.value.includes(r)||!l.value.includes(a))continue;const m=s.get(r),h=s.get(a),S=u.get(r),$=u.get(a);!m||!h||!S||!$||(n.set(a,{position:m.value,amount:parseInt(S.value,10)}),n.set(r,{position:h.value,amount:-parseInt($.value,10)}))}return n}),x=c(()=>{const n=[...new Set([...i.values()].map(t=>t.value))].sort((t,r)=>t-r),p=[];for(const t of n){const r=l.value.filter(a=>{var m;return((m=i.get(a))==null?void 0:m.value)===t});p.push(...r)}return be(p,s,u,f)}),A=c(()=>!Array.from(y.values()).some(n=>n.value)),w=c(()=>x.value[x.value.length-1].layer),J=c(()=>({"--v-layout-left":L(w.value.left),"--v-layout-right":L(w.value.right),"--v-layout-top":L(w.value.top),"--v-layout-bottom":L(w.value.bottom),...A.value?void 0:{transition:"none"}})),I=c(()=>x.value.slice(1).map((n,p)=>{let{id:t}=n;const{layer:r}=x.value[p],a=u.get(t),m=s.get(t);return{id:t,...r,size:Number(a.value),position:m.value}})),O=n=>I.value.find(p=>p.id===n),R=ue("createLayout"),T=N(!1);Z(()=>{T.value=!0}),ie(P,{register:(n,p)=>{let{id:t,order:r,position:a,layoutSize:m,elementSize:h,active:S,disableTransitions:$,absolute:te}=p;i.set(t,r),s.set(t,a),u.set(t,m),f.set(t,S),$&&y.set(t,$);const H=re(ge,R==null?void 0:R.vnode).indexOf(n);H>-1?l.value.splice(H,0,t):l.value.push(t);const E=c(()=>I.value.findIndex(V=>V.id===t)),C=c(()=>o.value+x.value.length*2-E.value*2),oe=c(()=>{const V=a.value==="left"||a.value==="right",M=a.value==="right",ae=a.value==="bottom",j={[a.value]:0,zIndex:C.value,transform:`translate${V?"X":"Y"}(${(S.value?0:-110)*(M||ae?-1:1)}%)`,position:te.value||o.value!==q?"absolute":"fixed",...A.value?void 0:{transition:"none"}};if(!T.value)return j;const d=I.value[E.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const B=G.value.get(t);return B&&(d[B.position]+=B.amount),{...j,height:V?`calc(100% - ${d.top}px - ${d.bottom}px)`:h.value?`${h.value}px`:void 0,left:M?void 0:`${d.left}px`,right:M?`${d.right}px`:void 0,top:a.value!=="bottom"?`${d.top}px`:void 0,bottom:a.value!=="top"?`${d.bottom}px`:void 0,width:V?h.value?`${h.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),ne=c(()=>({zIndex:C.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:C}},unregister:n=>{i.delete(n),s.delete(n),u.delete(n),f.delete(n),y.delete(n),l.value=l.value.filter(p=>p!==n)},mainRect:w,mainStyles:J,getLayoutItem:O,items:I,layoutRect:g,rootZIndex:o});const Q=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=c(()=>({zIndex:o.value,position:v?"relative":void 0,overflow:v?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:ee,getLayoutItem:O,items:I,layoutRect:g,layoutRef:_}}function we(){const e=N(!1);return Z(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:ce(e)}}const Ie=k({scrollable:Boolean,...W(),...ye({tag:"main"})},"v-main"),Se=F()({name:"VMain",props:Ie(),setup(e,v){let{slots:o}=v;const{mainStyles:l}=_e(),{ssrBootStyles:s}=we();return Y(()=>b(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,s.value,e.style]},{default:()=>{var u,i;return[e.scrollable?b("div",{class:"v-main__scroller"},[(u=o.default)==null?void 0:u.call(o)]):(i=o.default)==null?void 0:i.call(o)]}})),{}}}),$e={};function Ve(e,v){const o=ve("router-view");return K(),X(Se,null,{default:U(()=>[b(o)]),_:1})}const ze=se($e,[["render",Ve]]);const Le=k({...W(),...he({fullHeight:!0}),...pe()},"v-app"),Re=F()({name:"VApp",props:Le(),setup(e,v){let{slots:o}=v;const l=de(e),{layoutClasses:s,layoutStyles:u,getLayoutItem:i,items:f,layoutRef:y}=xe(e),{rtlClasses:_}=fe();return Y(()=>{var g;return b("div",{ref:y,class:["v-application",l.themeClasses.value,s.value,_.value,e.class],style:[u.value,e.style]},[b("div",{class:"v-application__wrap"},[(g=o.default)==null?void 0:g.call(o)])])}),{getLayoutItem:i,items:f,theme:l}}}),ke={__name:"Default",setup(e){return(v,o)=>(K(),X(Re,null,{default:U(()=>[b(ze)]),_:1}))}};export{ke as default};
