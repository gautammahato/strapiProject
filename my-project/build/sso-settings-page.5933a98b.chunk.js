"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[302],{40316:(Q,m,e)=>{e.r(m),e.d(m,{SingleSignOn:()=>R,default:()=>Z});var t=e(67294),L=e(17034),M=e(185),y=e(53979),C=e(29728),I=e(49066),O=e(11047),b=e(75515),A=e(11276),c=e(67819),P=e(20707),D=e(40619),T=e(82562),f=e(67730),l=e(88376),x=e(85018),F=e(18446),z=e.n(F),B=e(86896),h=e(86706),S=e(35650),v=e(99369),G=e(19631),i=e(87561);const H=i.Ry().shape({autoRegister:i.Xg().required(l.I0.required),defaultRole:i.nK().when("autoRegister",(s,o)=>s?o.required(l.I0.required):o.nullable()),ssoLockedRoles:i.IX().of(i.nK().when("ssoLockedRoles",(s,o)=>s?o.required(l.I0.required):o.nullable()))}),R=()=>{const{formatMessage:s}=(0,B.Z)(),o=(0,h.v9)(v._),j=t.useMemo(()=>({...o.settings.sso,readRoles:o.settings.roles.read}),[o.settings.roles.read,o.settings.sso]),{isLoading:k,allowedActions:{canUpdate:u,canReadRoles:K}}=(0,l.ss)(j),[{formErrors:n,initialData:U,isLoading:X,modifiedData:r,showHeaderButtonLoader:N},$,{handleChange:d,handleSubmit:W}]=(0,S.G4)((0,G.IF)("providers/options"),H,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:p}=(0,S.bF)(K);(0,l.go)();const J=k||X;(0,t.useEffect)(()=>{if(n.defaultRole){const a='[name="defaultRole"]';document.querySelector(a).focus()}},[n]);const E=z()(U,r);return t.createElement(L.A,null,t.createElement(l.SL,{name:"SSO"}),t.createElement(M.o,{tabIndex:-1},t.createElement("form",{onSubmit:a=>{if(E){a.preventDefault();return}W(a)}},t.createElement(y.T,{primaryAction:t.createElement(C.z,{"data-testid":"save-button",disabled:E,loading:N,startIcon:t.createElement(x.Z,null),type:"submit",size:"L"},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:s({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(I.D,null,J?t.createElement(l.dO,null):t.createElement(O.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(b.Z,{variant:"delta",as:"h2"},s({id:"global.settings",defaultMessage:"Settings"})),t.createElement(A.r,{gap:4},t.createElement(c.P,{col:6,m:6,s:12},t.createElement(P.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!u,checked:r.autoRegister,hint:s({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:s({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{d({target:{name:"autoRegister",value:a.target.checked}})}})),t.createElement(c.P,{col:6,m:6,s:12},t.createElement(D.P,{disabled:!u,hint:s({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:n.defaultRole?s({id:n.defaultRole.id,defaultMessage:n.defaultRole.id}):"",label:s({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:a=>{d({target:{name:"defaultRole",value:a}})},placeholder:s({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:r.defaultRole},p.map(({id:a,name:g})=>t.createElement(T.W,{key:a,value:a.toString()},g)))),t.createElement(c.P,{col:6,m:6,s:12},t.createElement(f.NU,{disabled:!u,hint:s({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:n.ssoLockedRoles?s({id:n.ssoLockedRoles.id,defaultMessage:n.ssoLockedRoles.id}):"",label:s({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:a=>{d({target:{name:"ssoLockedRoles",value:a}})},placeholder:s({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{d({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:r.ssoLockedRoles||[],withTags:!0},p.map(({id:a,name:g})=>t.createElement(f.ML,{key:a,value:a.toString()},g))))))))))},Z=()=>{const s=(0,h.v9)(v._);return t.createElement(l.O4,{permissions:s.settings.sso.main},t.createElement(R,null))}}}]);