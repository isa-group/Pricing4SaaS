"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9137,1256],{59137:function(t,e,n){n.r(e),n.d(e,{Button:function(){return a}});var o=n(85893),r=n(44740),i=n(91256),l=n(91815);let a=t=>{let{actionable:e,trackKey:n,...a}=t,c=n&&{eventKey:l.vE,action:n,option:""};return(0,o.jsx)(i.Link,{Component:r.z,actionable:e,tracking:c,...a})}},91256:function(t,e,n){n.r(e),n.d(e,{Link:function(){return k}});var o=n(85893),r=n(82213),i=n(86604),l=n(41664),a=n.n(l),c=n(11163),s=n(28256);let u=(t,e)=>n=>{t(e.eventKey,{action:e.action,option:e.option},n)};var d=n(92377),f=n(7338),p=n(80110);n(67294);let h=(t,e,n,o)=>{if(e.startsWith("#"))return{absoluteUrl:e,bestLocale:o};if(e.startsWith("http"))return{absoluteUrl:e,bestLocale:e.includes("".concat(t,"/").concat(o,"/"))?o:f.ZW.code};let r=e,i=null!=o?o:f.ZW.code;r=r.startsWith("/")?r.substring(1):r;let[l]=r.split("/");return l&&(null==n?void 0:n.includes(l))&&(i=l),i!==f.ZW.code||r.startsWith(f.ZW.code)||(r="".concat(f.ZW.code,"/").concat(r)),{absoluteUrl:"".concat(t,"/").concat(r),bestLocale:i}},k=t=>{let e,{actionable:n,href:l,children:f,Component:k=r.r,onClick:b,tracking:v,...w}=t,{locale:C,locales:W}=(0,c.useRouter)(),g=(0,s.Ke)(),{serviceUrl:j,language:y,domain:Z}=(0,d.u)(),x=(0,i.S)(n).onClick;if(n||b)return n?e=x:b&&(e=t=>{v&&u(g,v)(t),b(t)}),(0,o.jsx)(k,{onClick:e,...w,children:f});if(v&&(e=u(g,v)),l){let t=(0,p.By)(Z,y,l),{absoluteUrl:n,bestLocale:r}=h(j,l,W,C);return t?(0,o.jsx)(k,{onClick:e,href:n,...w,children:f}):(0,o.jsx)(a(),{legacyBehavior:!0,href:n.replace(/([^:]\/)\/+/g,"$1"),locale:r,passHref:!0,shallow:l.startsWith("?"),prefetch:!1,children:(0,o.jsx)(k,{onClick:e,...w,children:f})})}return(0,o.jsx)(k,{onClick:e,...w,children:f})}},86604:function(t,e,n){n.d(e,{S:function(){return c}});var o=n(67294),r=n(17182),i=n(14870),l=n(28256),a=n(73046);function c(t){let e=(0,r.v)(),n=(0,l.aF)(),c=(0,o.useCallback)(o=>{if(o.preventDefault(),!t||!e.show)return;let{type:r,properties:l}=t;if(r===i.dJ&&r in l)l[r]===i.Yk?window.Optanon?window.Optanon.ToggleInfoDisplay():(0,a.Z)("warn",{message:"Failed to load Optanon object"}):function(){if(!LeadBooster){a.Z.error("Failed to open leadbooster. Not found");return}LeadBooster.trigger("open")}();else if(!(i.dJ in l)){let n=r===i.CX&&"modal"in l?l.modal:t.type;e.show({type:n,additionalProps:l})}n(t,o)},[e,t,n]);return{onClick:c}}}}]);