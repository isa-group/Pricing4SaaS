(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5788],{81516:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,l,n){{let r=o(13162).normalizeLocalePath,a=o(2249).detectDomainLocale,u=t||r(e,l).detectedLocale,c=a(n,void 0,u);if(c){let t="http".concat(c.http?"":"s","://"),o=u===c.defaultLocale?"":"/".concat(u);return"".concat(t).concat(c.domain).concat("").concat(o).concat(e)}return!1}},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(92648).Z,n=o(17273).Z,r=l(o(67294)),a=o(14532),u=o(83353),c=o(61410),f=o(79064),i=o(370),s=o(69955),d=o(24224),p=o(80508),h=o(81516),y=o(64266);let v=new Set;function b(e,t,o,l,n){if(n||u.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let n=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,r=t+"%"+o+"%"+n;if(v.has(r))return;v.add(r)}Promise.resolve(e.prefetch(t,o,l)).catch(e=>{})}}function g(e){return"string"==typeof e?e:c.formatUrl(e)}let _=r.default.forwardRef(function(e,t){let o,l;let{href:c,as:v,children:_,prefetch:m,passHref:M,replace:k,shallow:C,scroll:j,locale:P,onClick:L,onMouseEnter:E,onTouchStart:O,legacyBehavior:x=!1}=e,w=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=_,x&&("string"==typeof o||"number"==typeof o)&&(o=r.default.createElement("a",null,o));let R=!1!==m,$=r.default.useContext(s.RouterContext),I=r.default.useContext(d.AppRouterContext),S=null!=$?$:I,T=!$,{href:N,as:z}=r.default.useMemo(()=>{if(!$){let e=g(c);return{href:e,as:v?g(v):e}}let[e,t]=a.resolveHref($,c,!0);return{href:e,as:v?a.resolveHref($,v):t||e}},[$,c,v]),D=r.default.useRef(N),U=r.default.useRef(z);x&&(l=r.default.Children.only(o));let A=x?l&&"object"==typeof l&&l.ref:t,[K,H,B]=p.useIntersection({rootMargin:"200px"}),Z=r.default.useCallback(e=>{(U.current!==z||D.current!==N)&&(B(),U.current=z,D.current=N),K(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[z,A,N,B,K]);r.default.useEffect(()=>{S&&H&&R&&b(S,N,z,{locale:P},T)},[z,N,H,P,R,null==$?void 0:$.locale,S,T]);let q={ref:Z,onClick(e){x||"function"!=typeof L||L(e),x&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,o,l,n,a,c,f,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!u.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[n?"replace":"push"](o,l,{shallow:a,locale:f,scroll:c}):t[n?"replace":"push"](l||o,{forceOptimisticNavigation:!s})};i?r.default.startTransition(h):h()}(e,S,N,z,k,C,j,P,T,R)},onMouseEnter(e){x||"function"!=typeof E||E(e),x&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),S&&(R||!T)&&b(S,N,z,{locale:P,priority:!0,bypassPrefetchedCheck:!0},T)},onTouchStart(e){x||"function"!=typeof O||O(e),x&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),S&&(R||!T)&&b(S,N,z,{locale:P,priority:!0,bypassPrefetchedCheck:!0},T)}};if(f.isAbsoluteUrl(z))q.href=z;else if(!x||M||"a"===l.type&&!("href"in l.props)){let e=void 0!==P?P:null==$?void 0:$.locale,t=(null==$?void 0:$.isLocaleDomain)&&h.getDomainLocale(z,e,null==$?void 0:$.locales,null==$?void 0:$.domainLocales);q.href=t||y.addBasePath(i.addLocale(z,e,null==$?void 0:$.defaultLocale))}return x?r.default.cloneElement(l,q):r.default.createElement("a",Object.assign({},w,q),o)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13162:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;let l=(e,t)=>o(34842).normalizeLocalePath(e,t);t.normalizeLocalePath=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:c}=e,f=c||!r,[i,s]=l.useState(!1),d=l.useRef(null),p=l.useCallback(e=>{d.current=e},[]);l.useEffect(()=>{if(r){if(f||i)return;let e=d.current;if(e&&e.tagName){let l=function(e,t,o){let{id:l,observer:n,elements:r}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},l=u.find(e=>e.root===o.root&&e.margin===o.margin);if(l&&(t=a.get(l)))return t;let n=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:r,elements:n},u.push(o),a.set(o,t),t}(o);return r.set(e,t),n.observe(e),function(){if(r.delete(e),n.unobserve(e),0===r.size){n.disconnect(),a.delete(l);let e=u.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return l}}else if(!i){let e=n.requestIdleCallback(()=>s(!0));return()=>n.cancelIdleCallback(e)}},[f,o,t,i,d.current]);let h=l.useCallback(()=>{s(!1)},[]);return[p,i,h]};var l=o(67294),n=o(10029);let r="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,o){e.exports=o(95569)},82213:function(e,t,o){"use strict";o.d(t,{r:function(){return u}});var l=o(94184),n=o(67294),r=o(20551);let a=(0,r.Q)("link"),u=n.forwardRef(function({className:e,display:t="inline",href:o,target:r,onClick:u,htmlProps:c,children:f,color:i="blue",defaultSpacing:s=!0,textDecoration:d=!0,component:p},h){let y=p??"a";return n.createElement(y,{...c,className:l("a"!==y&&"unset",a,`${a}--display-${t}`,e,"gray"===i&&`${a}--gray`,"secondary-dark"===i&&`${a}--secondary-dark`,"light-gray"===i&&`${a}--light-gray`,"light-inverted"===i&&`${a}--light-inverted`,"light-blue"===i&&`${a}--light-blue`,!d&&`${a}--no-decoration`,!s&&`${a}--no-spacing`),href:o,ref:h,target:r,onClick:u},f)});u.displayName="Link"}}]);