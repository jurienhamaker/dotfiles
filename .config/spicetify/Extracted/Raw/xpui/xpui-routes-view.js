"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[450],{43011:function(e,t,n){n.d(t,{$:function(){return m}});var r=n(35181),l=n(27378),a=n.n(l),o=n(97015),i=n(18291),c=n(42044),u=n(39519);function s(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const m=({children:e})=>{let t=s(e);const n=(0,i.Y)(u.yA)===c.q9.PLAYING,l=(0,i.Y)((e=>null==e?void 0:e.item));return l&&n&&((0,c.G_)(l)?t=[l.name,l.artists.map((e=>e.name)).join(r.ag.getSeparator())].join(" · "):(0,c.iw)(l)?t=[l.name,l.show.name].join(" · "):(0,c.k6)(l)&&(t=s(r.ag.get("ad-formats.advertisement")))),a().createElement(o.q,{defaultTitle:r.ag.get("page.generic-title"),defer:!1},a().createElement("title",null,t))}},49492:function(e,t,n){n.d(t,{c:function(){return fe}});var r=n(64649),l=n(27378),a=n.n(l),o=n(34992),i=n(36777),c=n(50878),u=n(31630),s=n(18474),m=n(60042),d=n.n(m),f="kHB_U2DIAlKMxcZioEOC",g="Vg_wqJ9OwkZl65Rc_iyX",E="c8D1xLc6LZwdkYZ0fCCb",v="KL469QQzoRZLOmKomNzk",p="z_dqOOSiQjEgjJbtW1qW",y="B3i7kN8tRTwP9s4XEK10",h="msOGVcFLw_5wwMOLzhye",b="htY8dgl7NWIfdTpQY3QF",k="d4Z5nlOVhTfNjYtNTm7k",w="_Xtjqr3it7fr5yseBgKp",C="_y64Rwd4CSmN70WJM7XS",I="GZEgjqyn5O0M_4qZGc_V",L="JMwv_vLYi2_hA1oFvmki",O=n(9807),A=n(44135),N=n(89341),_=n(191),P=n(9071),T=n(14298),M=n(60210),S=n(25773),j=n(35181),D=n(66917),Z=n.n(D),R=n(34601),U=n(52370),W=n(27572),x=n(12743),B=n(12275),Y=n(16023),q=n(85002),F=n(88319),J=n(99882),V=n(35511),G=n(54220),K=n(40299),z=n(60244);const X=a().memo((({images:e=[],fallbackIcon:t=R.e})=>{const n=(0,K.X)(e),r=null!=n&&n.url?h:k;return a().createElement("div",{className:y},a().createElement("div",{className:r},a().createElement(z.E,{className:b,src:null==n?void 0:n.url,loading:"lazy",testid:"shortcut-image"},a().createElement(t,{"aria-hidden":!0}))))}));var H=n(44084),Q=n(23);const $=a().memo((({item:e,fallbackIcon:t,showPlayButton:n,onContextMenu:r=(()=>{}),onTouchStart:o=(()=>{}),onTouchEnd:i=(()=>{})})=>{const c=(0,q.k6)(),u=(0,F.o)(),{setColorFromUri:s,resetColor:m}=(0,H.WQ)(),{isPlaying:f,togglePlay:g}=(0,Q.n)({uri:e.uri},{featureIdentifier:"home",referrerIdentifier:"home"});const y=(0,l.useCallback)((()=>{u({targetUri:e.uri,intent:"navigate",type:"click"}),c.push(Z().from(e.uri).toURLPath(!0))}),[c,e.uri,u]),h=(0,l.useCallback)((()=>{s(e.uri)}),[e.uri,s]);return a().createElement("div",{className:v,onContextMenu:r,onTouchStart:o,onTouchEnd:i,onMouseEnter:h,onMouseLeave:m},a().createElement(J.Z,{uri:e.uri,text:e.name,extraClassName:p},a().createElement(X,{images:e.images,fallbackIcon:t}),a().createElement("div",{className:w},a().createElement(G.r,{to:e.uri,onClick:y,title:e.name},a().createElement(O.Dy.p,{variant:O.Dy.balladBold,className:C},e.name)),n&&a().createElement("div",{className:d()(I,{[L]:f})},a().createElement(V.JM,{size:V.qE.sm,isPlaying:f,onClick:function(){u({targetUri:e.uri,intent:f?"pause":"play",type:"click"}),g()}}))),a().createElement("div",{onClick:y,className:E})))}));var ee=n(52003),te=n(7164),ne=n(75933);const re=a().memo((e=>Z().isCollection(e.item.uri)?a().createElement($,(0,S.Z)({},e,{fallbackIcon:R.e})):a().createElement(B._,{menu:a().createElement(Y.X,{uri:e.item.uri})},a().createElement($,(0,S.Z)({},e,{fallbackIcon:R.e}))))),le=a().memo((e=>a().createElement(B._,{menu:a().createElement(ee.Y,{uri:e.item.uri})},a().createElement($,(0,S.Z)({},e,{fallbackIcon:U.u}))))),ae=a().memo((e=>a().createElement(B._,{menu:a().createElement(te.m,{uri:e.item.uri})},a().createElement($,(0,S.Z)({},e,{fallbackIcon:W.i}))))),oe=a().memo((e=>a().createElement(B._,{menu:a().createElement(ne.M,{uri:e.item.uri})},a().createElement($,(0,S.Z)({},e,{fallbackIcon:x.n,showPlayButton:!1})))));var ie=n(83509);const ce=a().memo((({tagline:e,items:t})=>{const{fetchMultipleColors:n}=(0,H.WQ)(),[r,o]=(0,l.useState)(270),i=!(0,ie.k)(),c=(0,l.useRef)(null),u=(()=>{const e=(new Date).getHours();let t=j.ag.get("home.evening");return e>=5&&e<12?t=j.ag.get("home.morning"):e>=12&&e<18&&(t=j.ag.get("home.afternoon")),t})(),s=(0,l.useCallback)((()=>{const e=c.current;if(null==e||!e.parentElement)return;const t=(n=e.parentElement.offsetWidth)<700?240:n>=700&&n<1400?270:300;var n;t!==r&&o(t)}),[r]);(0,M.a)((()=>{s()})),(0,l.useLayoutEffect)((()=>{s()})),(0,l.useEffect)((()=>{const e=(null==t?void 0:t.map(H.lh))||[];n(e)}),[t,n]);const m=(0,l.useCallback)(((e,n)=>{if(null==t||!t.length)return null;const r=n>=270;return a().createElement(a().Fragment,null,t.filter(((t,n)=>n<2*e)).map(((e,t)=>{const n=function(e){const t=(Z().from(e)||{}).type;switch(t){case Z().Type.ARTIST:return ae;case Z().Type.ALBUM:case Z().Type.COLLECTION_ALBUM:return le;case Z().Type.PLAYLIST:case Z().Type.PLAYLIST_V2:return re;case Z().Type.SHOW:return oe;case Z().Type.COLLECTION:return re;default:return console.warn(`Unable to resolve entity shortcut from ${e} of type "${t||"unknown"}"`),oe}}(e.uri);return a().createElement(n,{key:e.id,item:e,showPlayButton:r,shouldSetBackgroundColor:0===t})})))}),[t]);return i||null==t||!t.length?null:a().createElement("section",{className:f,"aria-label":u,ref:c},a().createElement(_.r,{title:u,titleVariant:O.Dy.alto,tagline:e}),a().createElement(P.T,{className:d()(g),columnAware:!0,render:m,minimumColumnWidth:r,rowGap:T.o78}))})),ue=(0,A.P)(ce,(()=>null),(e=>(0,N.v)({from:"HomeShortcutsGrid",error:e})));var se=n(96816);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const fe=({spaces:e,viewName:t,viewId:n,isAnonymous:r})=>{const m=(0,l.useCallback)((e=>{const t=((e,t)=>{let{uri:n}=e;return e.href.includes("https://api.spotify.com/v1/views/")&&(n=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),n.endsWith("-page")||(n+="-page"),"hub-browse-grid"===t&&(n=n.replace(":view:",":genre:"))),n})(e,n),r=(0,u.U)(t);return a().createElement(r,{key:e.href,entity:de(de({},e),{},{uri:t})})}),[n]),d=(0,l.useCallback)(((e,t)=>{const n=(0,u.U)(e.uri);return a().createElement(c.JL,{key:e.uri||t,value:"card",index:t},a().createElement(n,{entity:e}))}),[]),f=(0,l.useCallback)(((e,t)=>{switch(e.type){case"link":return m(e);default:return d(e,t)}}),[d,m]),g=(0,l.useCallback)((e=>!((e=>"HEADER"===e.rendering)(e)||0===e.content.total||r&&"uniquely-yours-shelf"===e.id)),[r]);return e&&0!==e.length?e[0].content?a().createElement(a().Fragment,null,e.filter(g).map(((e,t)=>{const r=e.content&&(0,o.pL)((0,o.SK)(e.href));return e.id===i.RECENTLY_PLAYED_VIEW_ID||e.id===s.uK?a().createElement(c.JL,{value:"headered-grid",index:t,key:e.id},a().createElement(i.RecentlyPlayed,{showAll:!1})):"shortcuts"===e.id?a().createElement(c.JL,{value:"headered-grid",index:t,key:e.id},a().createElement(ue,{items:e.content.items,title:e.name,tagline:e.tag_line})):a().createElement(c.JL,{value:"headered-grid",index:t,key:e.id},a().createElement(se.P,{total:e.content.total,seeAllUri:r,pageId:n,title:e.name,tagline:e.tag_line||void 0},e.content.items.map(f)))}))):a().createElement(c.JL,{value:"headered-grid"},a().createElement(se.P,{showAll:!0,title:t,total:(null==e?void 0:e.length)||0},null==e?void 0:e.map(f))):null}},46345:function(e,t,n){n.r(t),n.d(t,{View:function(){return P},default:function(){return T}});var r=n(27378),l=n.n(r),a=n(60042),o=n.n(a),i=n(75570),c=n(28979),u=n(75260),s=n(33954),m="Bocw75wJnfKX_tXd4Zj0",d="MyIjLCV_8t8KluouRgpd",f="sbU_cIh6kQUanX3IUWD8",g="ywWKqhMPlNxTA5cyDnBN",E=n(3578),v=n(10194),p=n(36726),y=n(35181),h=n(85002),b=n(34992),k=n(66027),w=n(90849),C=n(41805),I=n(86268),L=n(49492),O=n(1391),A=n(43011);const N=e=>"HEADER"===e.rendering,_=e=>{const{title:t,images:n,backgroundColor:r}=e;return l().createElement(l().Fragment,null,((e,t=[],n)=>{if(!e)return null;const r=t.filter((e=>"background"===e.name));return l().createElement(k.gF,{backgroundImages:r,backgroundColor:n,size:0===r.length?k.fR.SMALL:k.fR.DEFAULT},l().createElement(w.W,null,l().createElement(C.i,{text:e})),l().createElement(k.sP,null,l().createElement(k.xd,null,e)))})(t,n,r))},P=l().memo((({viewData:e,viewId:t,backgroundColor:n,isFullyLoaded:a,country:s,isGenre:b,isAnonymous:k})=>{const w=(0,u.I0)(),C=(0,h.k6)(),O=!!e,P=null==e?void 0:e.name,T=(0,r.useCallback)((()=>{w((0,c.MM)(t,s)),w((0,E.browseItemsStyleRequest)())}),[t,s,w]);(0,r.useEffect)((()=>{!s||O&&"POP"===C.action||!t||T()}),[s,t,C.action,O,T]);const M=(0,r.useCallback)((()=>[/ginger-genre-affinity/].some((t=>{var n;return null==e||null===(n=e.href)||void 0===n?void 0:n.match(t)}))),[e]),S=(0,r.useCallback)((()=>{if(!e)return;const n=M();a||n||w((0,c.Ex)(t))}),[M,a,w,e,t]),j=(0,r.useMemo)((()=>{const{content:{items:t=[]}={}}=e||{},n=t.filter(N);return n.length>0?n[0]:null}),[e]),D=(0,r.useMemo)((()=>{const{name:t}=e||{};return j?j.name:n&&t}),[n,j,e]),Z=(0,r.useMemo)((()=>b||Boolean(D)),[b,D]),R=(0,r.useMemo)((()=>!(!e||!Array.isArray(e.content.items))&&Z),[Z,e]),U=l().createElement(_,{title:(null==j?void 0:j.name)||D,images:(null==j?void 0:j.images)||[],backgroundColor:n}),W=null==e?void 0:e.content.items;return e?l().createElement(l().Fragment,null,P?l().createElement(A.$,null,P):null,l().createElement(i.C,{onReachBottom:S},l().createElement("section",{className:o()({[m]:(null==j?void 0:j.name)||D})},R&&l().createElement(I.H,{color:n||null}),Z&&U,l().createElement("div",{className:f},Z&&U&&l().createElement(v.I,{backgroundColor:n}),l().createElement("div",{className:o()(d,"contentSpacing",{[g]:b})},l().createElement(L.c,{spaces:W,viewName:e.name,viewId:t,isAnonymous:k})))))):l().createElement(p.h,{errorMessage:y.ag.get("error.not_found.title.page")})}));var T=l().memo((({viewId:e,match:t})=>{const n=e||t.params.viewId,{isAnonymous:r}=(0,u.v9)(O.Gg),a=(0,u.v9)(s.r),o=(0,u.v9)((e=>e.entities.views[n]||null)),i=!o||null===o.content.next,c=n.endsWith("-page")?n:`${n}-page`,m=(0,u.v9)((e=>{var t,n;return(null===(t=e.browse.allItemsStyle)||void 0===t||null===(n=t[c])||void 0===n?void 0:n.color)||""})),d=e=>e.viewId===n||"href"in e&&e.href===(0,b.pL)(n),f=(0,u.v9)((e=>{var t,n,r,l;return(null==e||null===(t=e.browse)||void 0===t||null===(n=t.browseAll)||void 0===n?void 0:n.items.some(d))||(null==e||null===(r=e.browse)||void 0===r||null===(l=r.topGenres)||void 0===l?void 0:l.items.some(d))||!!m}));return l().createElement(P,{viewData:o,isFullyLoaded:i,viewId:n,backgroundColor:m,country:a,isGenre:f,isAnonymous:r})}))},75570:function(e,t,n){n.d(t,{C:function(){return s}});var r=n(27378),l=n.n(r),a=n(9957),o=n(60042),i=n.n(o),c="_OIbzNaZUstr_dmIZnnU",u="_AqkCZVApAiJHpYacWlf";const s=l().memo((e=>{const{triggerOnInitialLoad:t=!1,onReachBottom:n,showScrollbar:o=!0,horizontalScroll:s=!1}=e,{ref:m,inView:d}=(0,a.YD)({initialInView:t});return(0,r.useEffect)((()=>{d&&n&&n()}),[d,n]),l().createElement("div",{className:i()({[u]:!o,[c]:s}),"data-testid":"infinite-scroll-list"},e.children,l().createElement("div",{ref:m}))}))}}]);
//# sourceMappingURL=xpui-routes-view.js.map