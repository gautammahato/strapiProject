"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4263],{50935:(I,d,e)=>{e.d(d,{R:()=>l});var t=e(88376),a=e(80129),r=e(88767);function l(c={},i={}){const{id:s="",...u}=c,m=(0,a.stringify)(u,{encode:!1}),{get:o}=(0,t.kY)(),{data:n,isError:h,isLoading:A,refetch:D}=(0,r.useQuery)(["users",s,u],async()=>{const{data:{data:L}}=await o(`/admin/users/${s}${m?`?${m}`:""}`);return L},i);let g=[];return s&&n?g=[n]:Array.isArray(n?.results)&&(g=n.results),{users:g,pagination:n?.pagination??null,isLoading:A,isError:h,refetch:D}}},22282:(I,d,e)=>{e.r(d),e.d(d,{default:()=>ve});var t=e(67294),a=e(88376),r=e(86706),l=e(16550),c=e(99369),i=e(87462),s=e(15861),u=e(70885),m=e(64687),o=e.n(m),n=e(185),h=e(53979),A=e(29728),D=e(49066),g=e(41580),L=e(11047),C=e(75515),O=e(11276),x=e(67819),F=e(85018),j=e(67109),V=e(14916),R=e(27361),N=e.n(R),Q=e(57557),w=e.n(Q),J=e(78718),H=e.n(J),y=e(45697),ie=e.n(y),de=e(86896),me=e(50935),b=e(19631),ce=e(81288),ue=e(17405);const ge=async(S,B)=>{const{put:Z}=(0,a.tg)(),{data:W}=await Z(`/admin/users/${S}`,B);return W.data},pe=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var Ee=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),q=["email","firstname","lastname","username","isActive","roles"],ee=function(B){var Z=B.canUpdate,W=(0,de.Z)(),E=W.formatMessage,K=(0,l.$B)("/settings/users/:id"),z=K.params.id,k=(0,l.k6)(),Me=k.push,he=(0,a.L7)(),Pe=he.setUserDisplayName,X=(0,a.lm)(),te=(0,a.o1)(),ye=te.lockApp,Le=te.unlockApp;(0,a.go)();var ae=(0,me.R)({id:z},{onError:function(v){var p=v.response.status;p===403?(X({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),Me("/")):X({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ae=(0,u.Z)(ae.users,1),P=Ae[0],se=ae.isLoading,De=function(){var f=(0,s.Z)(o().mark(function v(p,U){var $,G,T,_,re;return o().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return ye(),M.prev=1,M.next=4,ge(z,w()(p,"confirmPassword"));case 4:$=M.sent,X({type:"success",message:E({id:"notification.success.saved",defaultMessage:"Saved"})}),G=a.I8.getUserInfo(),z.toString()===G.id.toString()&&(a.I8.setUserInfo($),T=N()(p,"username")||(0,b.Pp)(p.firstname,p.lastname),Pe(T)),U.setValues(H()(p,q)),M.next=17;break;case 11:M.prev=11,M.t0=M.catch(1),_=(0,b.Iz)(M.t0.response.data),re=Object.keys(_).reduce(function(oe,le){return oe[le]=_[le].id,oe},{}),U.setErrors(re),X({type:"warning",message:N()(M.t0,"response.data.error.message","notification.error")});case 17:Le();case 18:case"end":return M.stop()}},v,null,[[1,11]])}));return function(p,U){return f.apply(this,arguments)}}(),Oe=se?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},Y=Object.keys(H()(P,q)).reduce(function(f,v){return v==="roles"?(f[v]=(P?.roles||[]).map(function(p){var U=p.id;return U}),f):(f[v]=P?.[v],f)},{}),Ue=Y.username||(0,b.Pp)(Y.firstname,Y.lastname),ne=E(Oe,{name:Ue});return se?t.createElement(n.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"Users"}),t.createElement(h.T,{primaryAction:t.createElement(A.z,{disabled:!0,startIcon:t.createElement(F.Z,null),type:"button",size:"L"},E({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(j.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},E({id:"global.back",defaultMessage:"Back"}))}),t.createElement(D.D,null,t.createElement(a.dO,null))):t.createElement(n.o,null,t.createElement(a.SL,{name:"Users"}),t.createElement(V.J9,{onSubmit:De,initialValues:Y,validateOnChange:!1,validationSchema:ue.YM},function(f){var v=f.errors,p=f.values,U=f.handleChange,$=f.isSubmitting;return t.createElement(a.l0,null,t.createElement(h.T,{primaryAction:t.createElement(A.z,{disabled:$||!Z,startIcon:t.createElement(F.Z,null),loading:$,type:"submit",size:"L"},E({id:"global.save",defaultMessage:"Save"})),title:ne,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(j.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},E({id:"global.back",defaultMessage:"Back"}))}),t.createElement(D.D,null,P?.registrationToken&&t.createElement(g.x,{paddingBottom:6},t.createElement(Ee,{registrationToken:P.registrationToken})),t.createElement(L.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(g.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(L.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(C.Z,{variant:"delta",as:"h2"},E({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(O.r,{gap:5},pe.map(function(G){return G.map(function(T){return t.createElement(x.P,(0,i.Z)({key:T.name},T.size),t.createElement(a.jm,(0,i.Z)({},T,{disabled:!Z,error:v[T.name],onChange:U,value:p[T.name]||""})))})})))),t.createElement(g.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(L.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(C.Z,{variant:"delta",as:"h2"},E({id:"global.roles",defaultMessage:"User's role"})),t.createElement(O.r,{gap:5},t.createElement(x.P,{col:6,xs:12},t.createElement(ce.Z,{disabled:!Z,error:v.roles,onChange:U,value:p.roles}))))))))}))};ee.propTypes={canUpdate:ie().bool.isRequired};const fe=ee,ve=()=>{const S=(0,a.lm)(),B=(0,r.v9)(c._),Z=t.useMemo(()=>({read:B.settings.users.read,update:B.settings.users.update}),[B.settings.users]),{isLoading:W,allowedActions:{canRead:E,canUpdate:K}}=(0,a.ss)(Z),{state:z}=(0,l.TH)(),k=z?.from??"/";return(0,t.useEffect)(()=>{W||!E&&!K&&S({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[W,E,K,S]),W?t.createElement(a.dO,null):!E&&!K?t.createElement(l.l_,{to:k}):t.createElement(fe,{canUpdate:K})}},82464:(I,d,e)=>{e.d(d,{Z:()=>m});var t=e(67294),a=e(12028),r=e(88376),l=e(65186),c=e(45697),i=e.n(c),s=e(86896);const u=({children:o,target:n})=>{const h=(0,r.lm)(),{formatMessage:A}=(0,s.Z)(),{copy:D}=(0,r.VP)(),g=A({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),L=async()=>{await D(n)&&h({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(r.Y_,{endAction:t.createElement(a.h,{label:g,noBorder:!0,icon:t.createElement(l.Z,null),onClick:L}),title:n,titleEllipsis:!0,subtitle:o,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};u.propTypes={children:i().oneOfType([i().element,i().string]).isRequired,target:i().string.isRequired};const m=u},31605:(I,d,e)=>{e.d(d,{Z:()=>u});var t=e(67294),a=e(45697),r=e.n(a),l=e(86896),c=e(63871),i=e(82464);const s=({registrationToken:m})=>{const{formatMessage:o}=(0,l.Z)(),n=`${window.location.origin}${c.Z}auth/register?registrationToken=${m}`;return t.createElement(i.Z,{target:n},o({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string};const u=s},81288:(I,d,e)=>{e.d(d,{Z:()=>L});var t=e(67294),a=e(40619),r=e(82562),l=e(88376),c=e(86647),i=e(45697),s=e.n(i),u=e(86896),m=e(88767),o=e(71997);const n=(0,o.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,h=o.ZP.div`
  animation: ${n} 2s infinite linear;
`,A=()=>t.createElement(h,null,t.createElement(c.Z,null)),D=async()=>{const{get:C}=(0,l.tg)(),{data:O}=await C("/admin/roles");return O.data},g=({disabled:C,error:O,onChange:x,value:F})=>{const{status:j,data:V}=(0,m.useQuery)(["roles"],D,{staleTime:5e4}),{formatMessage:R}=(0,u.Z)(),N=O?R({id:O,defaultMessage:O}):"",Q=R({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),w=R({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),J=R({id:"app.components.Select.placeholder",defaultMessage:"Select"}),H=j==="loading"?t.createElement(A,null):void 0;return t.createElement(a.P,{id:"roles",disabled:C,error:N,hint:w,label:Q,name:"roles",onChange:y=>{x({target:{name:"roles",value:y}})},placeholder:J,multi:!0,startIcon:H,value:F.map(y=>y.toString()),withTags:!0,required:!0},(V||[]).map(y=>t.createElement(r.W,{key:y.id,value:y.id.toString()},R({id:`global.${y.code}`,defaultMessage:y.name}))))};g.defaultProps={disabled:!1,error:void 0},g.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const L=g},17405:(I,d,e)=>{e.d(d,{YM:()=>m,Rw:()=>c});var t=e(87561),a=e(88376);const r={firstname:t.Z_().trim().required(a.I0.required),lastname:t.Z_(),email:t.Z_().email(a.I0.email).lowercase().required(a.I0.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.I0.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(o,n)=>o?n.required(a.I0.required):n)},c={...r,currentPassword:t.Z_().when(["password","confirmPassword"],(o,n,h)=>o||n?h.required(a.I0.required):h),preferedLanguage:t.Z_().nullable()},s={roles:t.IX().min(1,a.I0.required).required(a.I0.required)},m=t.Ry().shape({...r,isActive:t.Xg(),...s})},12201:(I,d,e)=>{e.d(d,{Z:()=>u});var t=e(67294),a=e(45697),r=e.n(a),l=e(86896),c=e(63871),i=e(82464);const s=({registrationToken:m})=>{const{formatMessage:o}=(0,l.Z)();return m?t.createElement(i.Z,{target:`${window.location.origin}${c.Z}auth/register?registrationToken=${m}`},o({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(i.Z,{target:`${window.location.origin}${c.Z}auth/login`},o({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string};const u=s},67109:(I,d,e)=>{e.d(d,{Z:()=>r});var t=e(85893);const a=l=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=a}}]);
