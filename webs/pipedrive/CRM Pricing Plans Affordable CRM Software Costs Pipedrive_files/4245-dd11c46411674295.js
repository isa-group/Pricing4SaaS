(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4245,9137,1256],{59137:function(e,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return a}});var l=n(85893),r=n(44740),o=n(91256),i=n(91815);let a=e=>{let{actionable:t,trackKey:n,...a}=e,s=n&&{eventKey:i.vE,action:n,option:""};return(0,l.jsx)(o.Link,{Component:r.z,actionable:t,tracking:s,...a})}},64245:function(e,t,n){"use strict";n.r(t),n.d(t,{StaticHeader:function(){return M}});var l=n(85893),r=n(67294),o=n(11064),i=n(20802),a=n(93271),s=n(96545),c=n(38936),u=n(11163),d=n(84271),h=n(22234),f=n(17165),p=n(59137),g=n(63150),b=n(92377),v=n(14870),m=n(63585);let x=e=>{let{simple:t=!1,selectedTier:n=m.MP.Professional,packages:r=[]}=e,{translator:o}=(0,h.I)(),{entryLocalization:i}=(0,g.q)(),{domain:a}=(0,b.u)();return(0,l.jsxs)(l.Fragment,{children:[t&&(null==i?void 0:i.length)>1&&(0,l.jsx)(f.u,{className:"_hide-desktop",short:!0,showTail:!1,position:"fixed",width:"full"}),(null==i?void 0:i.length)>1&&(0,l.jsx)(f.u,{className:"_hide-mobile-tablet",short:!0,showTail:!0}),(0,l.jsx)(d.F,{className:"_hide-mobile-tablet onscroll-fade",theme:"dark",href:"https://app.".concat(a,"/auth/login"),children:o.gettext("Log in")}),(0,l.jsx)(p.Button,{size:"s",type:"primary",actionable:{type:v.CX,properties:{modal:v.dD,selectedTier:n,packages:r}},children:o.gettext("Try it free")})]})};var w=n(91256),k=n(30575),j=n(49144),y=n(94184),C=n.n(y),_=n(3074),L=n(51936),N=n(70776),W=n(65349),E=n(59469),S=n(28256),P=n(44382),B=n.n(P),T=n(48753);let Z="globalBannerViewedMessageIndex",A=()=>{let{banners:e}=(0,E.k)(),{isMobile:t}=(0,_.t)(),n=(0,S.Ke)(),o=(0,L.C)(),{isHorizontalNav:i}=(0,T.S)(),a=e?t?null==e?void 0:e.filter(e=>e.mobile)[0]:e[0]:void 0,[s,c]=(0,r.useState)(a),u=(e,t)=>{if(null===t)return 0;let n=Number(t)+1;return n>=e?0:n};(0,r.useEffect)(()=>{let n=t?null==e?void 0:e.filter(e=>e.mobile):e;if(!n||0===n.length){c(void 0);return}let l=(0,W.le)(Z),r=u(n.length,l);c(n[r]),(0,W.D$)(Z,r.toString())},[t,e]);let d=e=>{e&&n(v.Y0,{action:e})};return s?(0,l.jsx)("div",{className:C()(s&&B().banner),children:(0,l.jsx)(N.j,{onLinkClick:()=>d(null==s?void 0:s.trackKey),message:s.text,scrolling:i?o:void 0})}):null},M=e=>{let{asPath:t}=(0,u.useRouter)(),{language:n,entryLocalization:r}=(0,g.q)(),{isBlogPage:d}=(0,j.e)(),h=(0,k.j)("DOMAIN"),{simple:p,selectedTier:b,packages:v}=e;return(0,l.jsxs)("div",{className:B().stickyContainer,children:[(0,l.jsx)(A,{}),(0,l.jsxs)(o.h4,{...e,locale:n,domain:h,LinkWrapperComponent:w.Link,path:t,showSearch:!d,children:[(0,l.jsx)(i.A,{children:(null==r?void 0:r.length)>1&&(0,l.jsx)(f.u,{trigger:"click",triggerWidth:"full",showArrow:!1})}),(0,l.jsx)(a.X,{defaultSource:d?s.R.Article:s.R.All,domain:h,keepContractedOnXlScreen:!0,children:(0,l.jsx)(c.D,{children:(0,l.jsx)(x,{simple:p,selectedTier:b,packages:v})})})]})]})}},17165:function(e,t,n){"use strict";n.d(t,{u:function(){return _}});var l=n(85893),r=n(67294),o=n(41664),i=n.n(o),a=n(11163),s=n(41609),c=n.n(s),u=n(9926),d=n(99623),h=n(74019),f=n(7908),p=n(92377),g=n(11003),b=n(63150),v=n(49144),m=n(28256),x=n(91815),w=n(7338),k=n(94861),j=n(22499),y=n.n(j);function C(e){return t=>{let{language:n}=t;return n.toLowerCase()===e.toLowerCase()}}let _=e=>{let{placement:t="bottom",short:n=!1,className:o,theme:s,triggerWidth:j,trigger:_="hover",showArrow:L,width:N="fixed",showTail:W=!0,position:E="absolute"}=e,{language:S,entryLocalization:P}=(0,b.q)(),{locale:B}=(0,a.useRouter)(),T=(0,m.Ke)(),{preview:Z}=(0,g.Bq)(),A=(0,p.u)(),{isBlogPage:M}=(0,v.e)(),D=null==P?void 0:P.find(C(S)),H=(0,r.useMemo)(()=>{if(c()(A)||c()(P))return[];let e=P;return M&&(e=P.map(e=>{var t;let n=null===(t=e.path)||void 0===t?void 0:t.split("/").slice(0,3).join("/");return{...e,path:n}})),function(e,t){let{slugMask:n}=e;return t.map(e=>(null==e?void 0:e.path)?e:{...e,slug:n})}(A,e)},[A,P,M]),K=(0,r.useCallback)(e=>t=>{T(x.Bw,{action:x.KZ,option:e},t)},[T]),R=(0,r.useMemo)(()=>{let e=[],t=[];return w.Xt.forEach(n=>{let l=n.name,r=null==H?void 0:H.find(C(n.code)),o=!!r&&((null==r?void 0:r.enabled)===!0||!("enabled"in r)),i=n.code===S,a={href:(null==r?void 0:r.path)?"".concat(r.path):"".concat(null==r?void 0:r.slug),locale:n.code};Z&&A&&(a={href:{pathname:"/api/preview",query:{slug:A.slug,lang:n.code}}});let s={linkProps:a,selected:i,enabled:o,locale:n.code,name:l};if(o){if(i){t.unshift(s);return}t.push(s);return}e.push(s)}),[...t,...e].map((e,t)=>{let{linkProps:n,locale:r,selected:o,enabled:a,name:s}=e;return a?(0,l.jsx)(i(),{href:"/".concat(r).concat("/"===n.href?"":"/".concat(n.href)),locale:r,passHref:!0,onClick:K(s),children:(0,l.jsx)(u.h,{selected:o,disabled:!a,children:s})},t):(0,l.jsx)(u.h,{selected:o,disabled:!a,children:s},t)})},[S,A,Z,H,K]);return P.length<=1?null:(0,l.jsxs)(d.W,{trigger:_,className:o,width:j,children:[(0,l.jsx)(h.e,{theme:s,showArrow:L,children:!n&&(B?(0,k.J_)(B):null==D?void 0:D.name.replace(/\(.+\)/,""))}),(0,l.jsx)(f.L,{showTail:W,width:N,placement:t,className:y()[E],children:R})]})}},91256:function(e,t,n){"use strict";n.r(t),n.d(t,{Link:function(){return g}});var l=n(85893),r=n(82213),o=n(86604),i=n(41664),a=n.n(i),s=n(11163),c=n(28256);let u=(e,t)=>n=>{e(t.eventKey,{action:t.action,option:t.option},n)};var d=n(92377),h=n(7338),f=n(80110);n(67294);let p=(e,t,n,l)=>{if(t.startsWith("#"))return{absoluteUrl:t,bestLocale:l};if(t.startsWith("http"))return{absoluteUrl:t,bestLocale:t.includes("".concat(e,"/").concat(l,"/"))?l:h.ZW.code};let r=t,o=null!=l?l:h.ZW.code;r=r.startsWith("/")?r.substring(1):r;let[i]=r.split("/");return i&&(null==n?void 0:n.includes(i))&&(o=i),o!==h.ZW.code||r.startsWith(h.ZW.code)||(r="".concat(h.ZW.code,"/").concat(r)),{absoluteUrl:"".concat(e,"/").concat(r),bestLocale:o}},g=e=>{let t,{actionable:n,href:i,children:h,Component:g=r.r,onClick:b,tracking:v,...m}=e,{locale:x,locales:w}=(0,s.useRouter)(),k=(0,c.Ke)(),{serviceUrl:j,language:y,domain:C}=(0,d.u)(),_=(0,o.S)(n).onClick;if(n||b)return n?t=_:b&&(t=e=>{v&&u(k,v)(e),b(e)}),(0,l.jsx)(g,{onClick:t,...m,children:h});if(v&&(t=u(k,v)),i){let e=(0,f.By)(C,y,i),{absoluteUrl:n,bestLocale:r}=p(j,i,w,x);return e?(0,l.jsx)(g,{onClick:t,href:n,...m,children:h}):(0,l.jsx)(a(),{legacyBehavior:!0,href:n.replace(/([^:]\/)\/+/g,"$1"),locale:r,passHref:!0,shallow:i.startsWith("?"),prefetch:!1,children:(0,l.jsx)(g,{onClick:t,...m,children:h})})}return(0,l.jsx)(g,{onClick:t,...m,children:h})}},49144:function(e,t,n){"use strict";n.d(t,{J:function(){return f},e:function(){return p}});var l=n(85893),r=n(67294),o=n(5152),i=n.n(o),a=n(92377);let s=i()(()=>n.e(6053).then(n.bind(n,86053)).then(e=>e.PushNotificationConsent),{loadableGenerated:{webpack:()=>[86053]}}),c=["en"],u=(0,r.createContext)({}),d={current:null,all:[]},h={},f=e=>{let{children:t,category:o,articles:i,chips:f}=e,p=(0,r.useCallback)(async e=>(await Promise.all([n.e(6592),n.e(1696)]).then(n.bind(n,41696))).subscribe(e,"blog"),[]),g=(0,a.u)();return(0,l.jsxs)(u.Provider,{value:{category:o||d,articles:i||h,chips:f,isBlogPage:!!(null==g?void 0:g.slug.startsWith("blog"))},children:[(0,l.jsx)(s,{prompt:"Subscribe to Pipedrive and get all the latest sales news.",delayTimeSeconds:5,scrollDepthPercentage:50,validLocales:c,onConsentReceived:p}),t]})},p=()=>(0,r.useContext)(u)},86604:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var l=n(67294),r=n(17182),o=n(14870),i=n(28256),a=n(73046);function s(e){let t=(0,r.v)(),n=(0,i.aF)(),s=(0,l.useCallback)(l=>{if(l.preventDefault(),!e||!t.show)return;let{type:r,properties:i}=e;if(r===o.dJ&&r in i)i[r]===o.Yk?window.Optanon?window.Optanon.ToggleInfoDisplay():(0,a.Z)("warn",{message:"Failed to load Optanon object"}):function(){if(!LeadBooster){a.Z.error("Failed to open leadbooster. Not found");return}LeadBooster.trigger("open")}();else if(!(o.dJ in i)){let n=r===o.CX&&"modal"in i?i.modal:e.type;t.show({type:n,additionalProps:i})}n(e,l)},[t,e,n]);return{onClick:s}}},44382:function(e){e.exports={stickyContainer:"header_stickyContainer__oU_Xy",banner:"header_banner__1HnWt"}},22499:function(e){e.exports={fixed:"language-picker_fixed__eAdyG",absolute:"language-picker_absolute__myhZc"}},70776:function(e,t,n){"use strict";n.d(t,{E:function(){return i},j:function(){return s}});var l=n(94184),r=n(67294),o=n(20551);let i=(0,o.Q)("banner-wrapper"),a=(0,o.Q)("banner-content"),s=({message:e,onLinkClick:t,scrolling:n})=>{let o=(0,r.useRef)(null),s=(0,r.useCallback)(()=>{if(null!==o.current){let e=o.current.offsetHeight;document.body.style.setProperty("--pd-global-banner-height",`${e}px`)}},[o]);(0,r.useEffect)(()=>"undefined"!=typeof window&&window?(s(),window.addEventListener("resize",s),()=>{document.body.style.removeProperty("--pd-global-banner-height"),window.removeEventListener("resize",s)}):()=>null,[s]);let c=e=>{e.target instanceof HTMLAnchorElement&&t()};return r.createElement("div",{ref:o,className:l(i,n?.scrollingUp?`${i}--scroll-up`:n?.scrolling&&`${i}--scroll-down`),"data-testid":"banner_wrapper"},r.createElement("div",{className:l(a),dangerouslySetInnerHTML:{__html:e},onClick:c}))}}}]);