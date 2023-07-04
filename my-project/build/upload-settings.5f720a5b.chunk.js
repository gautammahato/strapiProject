"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[695],{85078:(j,m,t)=>{t.r(m),t.d(m,{SettingsPage:()=>R,default:()=>H});var e=t(67294),i=t(185),f=t(53979),p=t(29728),E=t(49066),x=t(17034),s=t(11047),v=t(41580),y=t(75515),P=t(11276),C=t(67819),b=t(20707),n=t(88376),o=t(85018),d=t(52861),l=t(18446),r=t.n(l),g=t(64593),D=t(86896),L=t(49826),c=t(57197);const k=a=>a;var N=t(18172),Z=t(36968),W=t.n(Z);const K={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},G=(a,O)=>(0,N.ZP)(a,u=>{switch(O.type){case"CANCEL_CHANGES":{u.modifiedData=a.initialData;break}case"GET_DATA_SUCCEEDED":{u.isLoading=!1,u.initialData=O.data,u.modifiedData=O.data;break}case"ON_CHANGE":{W()(u,["modifiedData",...O.keys.split(".")],O.value);break}case"ON_SUBMIT":{u.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{u.initialData=a.modifiedData,u.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{u.isSubmiting=!1;break}default:return a}}),R=()=>{const{formatMessage:a}=(0,D.Z)(),{lockApp:O,unlockApp:u}=(0,n.o1)(),F=(0,n.lm)(),{get:$,put:X}=(0,n.kY)();(0,n.go)();const[{initialData:Y,isLoading:J,isSubmiting:Q,modifiedData:B},T]=(0,e.useReducer)(G,K,k),z=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const M=d.default.CancelToken.source(),w=async()=>{try{const{data:{data:A}}=await $((0,c.IF)("settings"),{cancelToken:M.token});T({type:"GET_DATA_SUCCEEDED",data:A})}catch(A){console.error(A)}};return z.current&&w(),()=>{M.cancel("Operation canceled by the user."),z.current=!1}},[]);const U=r()(Y,B),V=async h=>{if(h.preventDefault(),!U){O(),T({type:"ON_SUBMIT"});try{await X((0,c.IF)("settings"),B),T({type:"SUBMIT_SUCCEEDED"}),F({type:"success",message:{id:"notification.form.success.fields"}})}catch(M){console.error(M),T({type:"ON_SUBMIT_ERROR"})}u()}},S=({target:{name:h,value:M}})=>{T({type:"ON_CHANGE",keys:h,value:M})};return e.createElement(i.o,{tabIndex:-1},e.createElement(g.q,{title:a({id:(0,c.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:V},e.createElement(f.T,{title:a({id:(0,c.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(p.z,{disabled:U,"data-testid":"save-button",loading:Q,type:"submit",startIcon:e.createElement(o.Z,null),size:"S"},a({id:"global.save",defaultMessage:"Save"})),subtitle:a({id:(0,c.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(E.D,null,J?e.createElement(n.dO,null):e.createElement(x.A,null,e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:12},e.createElement(v.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(s.k,null,e.createElement(y.Z,{variant:"delta",as:"h2"},a({id:(0,c.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(P.r,{gap:6},e.createElement(C.P,{col:6,s:12},e.createElement(b.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:B.responsiveDimensions,hint:a({id:(0,c.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:a({id:(0,c.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{S({target:{name:"responsiveDimensions",value:h.target.checked}})}})),e.createElement(C.P,{col:6,s:12},e.createElement(b.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:B.sizeOptimization,hint:a({id:(0,c.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:a({id:(0,c.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{S({target:{name:"sizeOptimization",value:h.target.checked}})}})),e.createElement(C.P,{col:6,s:12},e.createElement(b.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:B.autoOrientation,hint:a({id:(0,c.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:a({id:(0,c.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{S({target:{name:"autoOrientation",value:h.target.checked}})}}))))))))))},H=()=>e.createElement(n.O4,{permissions:L._I.settings},e.createElement(R,null))},49066:(j,m,t)=>{t.d(m,{D:()=>f});var e=t(85893),i=t(41580);const f=({children:p})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:p})},53979:(j,m,t)=>{t.d(m,{T:()=>P});var e=t(85893),i=t(67294),f=t(71997);const p=n=>{const o=(0,i.useRef)(null),[d,l]=(0,i.useState)(!0),r=([g])=>{l(g.isIntersecting)};return(0,i.useEffect)(()=>{const g=o.current,D=new IntersectionObserver(r,n);return g&&D.observe(o.current),()=>{g&&D.disconnect()}},[o,n]),[o,d]};var E=t(79698);const x=(n,o)=>{const d=(0,E.W)(o);(0,i.useLayoutEffect)(()=>{const l=new ResizeObserver(d);return Array.isArray(n)?n.forEach(r=>{r.current&&l.observe(r.current)}):n.current&&l.observe(n.current),()=>{l.disconnect()}},[n,d])};var s=t(41580),v=t(11047),y=t(75515);const P=n=>{const o=(0,i.useRef)(null),[d,l]=(0,i.useState)(null),[r,g]=p({root:null,rootMargin:"0px",threshold:0});return x(r,()=>{r.current&&l(r.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{o.current&&l(o.current.getBoundingClientRect())},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:r,children:g&&(0,e.jsx)(b,{ref:o,...n})}),!g&&(0,e.jsx)(b,{...n,sticky:!0,width:d?.width})]})};P.displayName="HeaderLayout";const C=(0,f.ZP)(s.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,b=i.forwardRef(({navigationAction:n,primaryAction:o,secondaryAction:d,subtitle:l,title:r,sticky:g,width:D,...L},c)=>{const I=typeof l=="string";return g?(0,e.jsx)(C,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:D,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{children:[n&&(0,e.jsx)(s.x,{paddingRight:3,children:n}),(0,e.jsxs)(s.x,{children:[(0,e.jsx)(y.Z,{variant:"beta",as:"h1",...L,children:r}),I?(0,e.jsx)(y.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),d?(0,e.jsx)(s.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(v.k,{children:o?(0,e.jsx)(s.x,{paddingLeft:2,children:o}):void 0})]})}):(0,e.jsxs)(s.x,{ref:c,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(s.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{minWidth:0,children:[(0,e.jsx)(y.Z,{as:"h1",variant:"alpha",...L,children:r}),d?(0,e.jsx)(s.x,{paddingLeft:4,children:d}):null]}),o]}),I?(0,e.jsx)(y.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},17034:(j,m,t)=>{t.d(m,{A:()=>x});var e=t(85893),i=t(71997),f=t(41580);const p=(0,i.ZP)(f.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,E=(0,i.ZP)(f.x)`
  overflow-x: hidden;
`,x=({sideNav:s,children:v})=>(0,e.jsxs)(p,{hasSideNav:!!s,children:[s,(0,e.jsx)(E,{paddingBottom:10,children:v})]})},185:(j,m,t)=>{t.d(m,{o:()=>E});var e=t(85893),i=t(71997),f=t(41580);const p=(0,i.ZP)(f.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,E=({labelledBy:x="main-content-title",...s})=>(0,e.jsx)(p,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...s})}}]);
