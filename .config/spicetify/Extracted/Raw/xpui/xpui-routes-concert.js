"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[288],{90160:function(e,t,a){a.d(t,{Hr:function(){return r},qo:function(){return c},GJ:function(){return i},B$:function(){return l},pf:function(){return o},ak:function(){return s},B:function(){return m},X7:function(){return u}});var n=a(404);const r=e=>e?e.reduce(((e,t)=>(e.push(t.releases.items[0]),e)),[]):[],c=e=>`spotify:artist:${e}`,i=e=>`spotify:app:artist:${e}`,l=(e,t,a)=>{var n,r;return{artists:[{uri:t,name:a}],images:(null===(n=e.coverArt)||void 0===n?void 0:n.sources)||[],name:e.name,uri:e.uri,year:null===(r=e.date)||void 0===r?void 0:r.year,type:e.type,sharingInfo:e.sharingInfo}},o=e=>{var t,a;return{artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:(null===(t=e.coverArt)||void 0===t?void 0:t.sources)||[],name:e.name,uri:e.uri,year:null===(a=e.date)||void 0===a?void 0:a.year,type:e.type,sharingInfo:e.sharingInfo}},s=({uri:e,profile:{name:t},visuals:{avatarImage:a}})=>({uri:e,name:t,images:(null==a?void 0:a.sources)||[]}),m=({uri:e,name:t,description:a,images:{items:n},owner:r})=>({uri:e,name:t,owner:{display_name:(null==r?void 0:r.name)||t},description:a||"",images:n[0]&&n[0].sources?n[0].sources:[]}),u=({track:{uri:e,name:t,playcount:a,duration:{totalMilliseconds:r},contentRating:c,artists:{items:i},album:{coverArt:l,uri:o},playability:{playable:s}}},m)=>{var u;return{uri:e,contextUri:m,totalMilliseconds:r,name:t,contentRating:(null==c?void 0:c.label)||n.KS.None,isPlayable:s,playcount:parseInt(a||"0",10),artists:i.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:null!=l&&null!==(u=l.sources)&&void 0!==u&&u.length?l.sources[0].url:"",albumUri:o}}},72246:function(e,t,a){a.d(t,{k:function(){return D}});var n=a(27378),r=a.n(n),c=a(62508),i=a(54220),l=a(4328),o=a(9807),s="_My6WIIVUHqLCPSWUIHG",m="o2WtIZKoEVLJ9SX8FnvK",u="zEAbeR_GJ2GyYBcDvy_X",g="_hQd31bwCsubIYFifuAR",d="H_kDITOf9mz4jX7HdBMz",v="KfG8BxSi_KqDnUir4hYP",y="_7fi25PFSOdc3Vn7AnSJ",E="_KZWAaN9xwYdXEqXSC53",h="_jHHDdi8JWJ6O24nOGS1",p="vCEXm7QKBdrt_sMJT8vj",_="TW1wD4WmXs881vWbPakl",f=a(12622),b=a(11931),N=a(10340);const D=r().memo((e=>{const{entity:t,isVirtual:a,shouldCombineRecs:n}=e,{venue:{name:D,location:{name:k}}}=t,$=t.artists[0],I=(0,c.ij)(t),w=new Date(t.date.isoString),U=a?b.q:N.K;return r().createElement(i.r,{to:`/concert/${t.id}`,className:s},$.imageUri?r().createElement(l.Z,null,r().createElement("div",{"data-testid":"image-container",className:_,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${$.imageUri})`}})):null,r().createElement("time",{className:m,dateTime:t.date.isoString},r().createElement(o.Dy.h5,{variant:o.$e.minuetBold,className:u},(0,c.lJ)(w)),r().createElement(o.Dy.h1,{variant:o.$e.canon,className:g},w.getDate())),r().createElement("div",{className:d,dir:"auto"},r().createElement(o.Dy.h2,{className:p,variant:o.$e.minuetBold},(0,f.FO)(w),", ",(0,c.b8)(w)),r().createElement(o.Dy.h2,{variant:o.$e.cello,weight:o.vS.bold,className:v},I),r().createElement("div",{className:y},n?r().createElement(U,{className:E,"aria-label":a?"Virtual Event":"In-Person Event",iconSize:16}):null,r().createElement(o.Dy.h2,{className:h,variant:o.$e.mesto,"data-testid":"location-name"},a?D:`${D}, ${k}`))))}))},80927:function(e,t,a){a.r(t),a.d(t,{default:function(){return de}});var n=a(27378),r=a.n(n),c=a(75260),i=a(85002),l=a(28979),o=a(58733),s=a(25773),m=a(35181),u=a(66027),g=a(90849),d=a(41805),v=a(10194),y=a(50878),E=a(96816),h=a(17220),p=a(54220),_=a(4328),f=a(9807),b="c5COJl_Wyqm2mFdNR_Mf",N="_BFTjvzJ1BrnpjiSjT82",D="y9RnVoqdJBr7DL833Iie",k="ICsDs1ljgNiHmnWVqKu7",$="_Twh_0vPvTWIUw23EmKd",I="_T9_2cmDdet6O_SqTeO3";const w=r().memo((e=>{const{entity:t,headliner:a}=e,{imageUri:n,name:c,uri:i}=t;return r().createElement(p.r,{to:i,className:b},n?r().createElement(_.Z,null,r().createElement("div",{"data-testid":"image-container",className:I,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${n})`}})):null,r().createElement("div",{className:N},a&&r().createElement("div",{className:k},r().createElement(f.Dy.h4,{variant:f.$e.minuet,className:$,weight:f.vS.bold},m.ag.get("concert.label.headliner"))),r().createElement(f.Dy.h2,{variant:f.$e.alto,className:D},c)))}));var U={concertsHubCard:"UQcyzCO8opj1tHDxGz9Y",metadata:"lw691u0Wk7nN_Zbjj1_m",title:"_VlgUEEOy6oigoJ1UbWc",image:"_AclOTBocw_b0OTEsEs8"};const T=m.ag.get("concerts_browse_more"),C=r().memo((()=>r().createElement(p.r,{to:"spotify:concerts",className:U.concertsHubCard},r().createElement(_.Z,null,r().createElement("div",{className:U.image,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})),r().createElement("div",{className:U.metadata},r().createElement(f.Dy.h2,{variant:f.$e.canon,className:U.name},T)))));var O=a(62508),W="aFbimaWFNJk9Npzwx6yq",Z="ifNRoIWdoA0IIXjtx4yu",j="As3Zjda5GRce2xsTWjww",A="ThFaOXYta127TYnxbdOb",S="_YNUt4yV5cZDwhaZ7ejv",J="AmU12x5w0k2MT8DiWaMv",x="RjLFXaKfQfnckh1bOlkU",P="g45gSpyKWntDQfDGgeDT",Y="Z37xM0DrP6IeNtZjicGm",F="Uku_HNmxe8aI0ATSkAF9",B="wAtUiu8wOWn6yyg1I7NG",M="yD7T9bRyQZ2Secww2zP1",q="VbMfTY1Fj9vI42X3oYf5",G="IZ4FuejCDo6nJStmJ_1V",H="oBDo3X8zib0qQbKr0F0y",K=a(58558),X=a(5312),z=a(61369),R=a(90160),V=a(72246),L=a(88319),Q=a(88886),ee=a(34761),te=a(78939),ae=a(19421);const ne=r().memo((({uri:e})=>r().createElement(y.ZP,{value:"concert"},r().createElement(ee.v,null,r().createElement(ae.q,null,r().createElement(te.Jx,{uri:e,displayText:m.ag.get("context-menu.copy-concert-link")}),r().createElement(te.W2,{uri:e})),r().createElement(te.h$,{uri:e})))));var re=a(86268);const ce=(e,t)=>({artists:[{uri:t,name:e.artistName}],images:[{url:e.imageUri,height:100,width:100}],name:e.name,uri:e.uri,type:z.albumType.ALBUM}),ie=e=>{const t=new Date(Date.parse(e.date));return r().createElement("div",{className:W},r().createElement(f.Dy.h3,{variant:f.$e.canon,className:Z},(0,O.NL)(t)))},le=e=>{const{clickThrus:t,ticketing:a,date:n,venue:c,location:i,clickThruUrl:l,id:o,category:s,lat:u,lon:g,ticketAvailabilityTranslated:d}=e,v=new Date(Date.parse(n)),y=`spotify:concert:${o}`,E="ONLINE"===s,h=(0,L.o)();let _="";if(!t||!t.length)return null;const b=t[0].partnerDisplayName;_="Songkick"===b?m.ag.get("concert.header.partner_songkick_attribution",b):a&&a[0]&&a[0].minPrice?m.ag.get("concert.header.partner_price_attribution",a[0].minPrice,b):m.ag.get("concert.header.partner_attribution",b),E&&(_=m.ag.get("concert_available_through",b));const N=E?m.ag.get("concert_find_virtual_event"):m.ag.get("concert.button.see_tickets");if((0,O.O1)(v))return r().createElement("div",{className:x},r().createElement(f.Dy.h3,{variant:f.$e.canon},m.ag.get("concert_event_ended")),r().createElement(f.Dy.span,null,r().createElement(p.Z,{to:"spotify:concerts"},m.ag.get("concert_past_message"))));return r().createElement("div",{className:x},r().createElement(f.Dy.h3,{variant:f.$e.canon},(()=>{if(E)return r().createElement(f.Dy.h3,{variant:f.$e.canon},c);const e=`https://maps.google.com/?q=${encodeURIComponent(`${c},${i}`)}&ll=${u},${g}`;return r().createElement(p.Z,{to:e,target:"_blank"},r().createElement(f.Dy.h3,{variant:f.$e.canon},`${c}, ${i}`))})()),r().createElement(f.Dy.h3,{variant:f.$e.mesto,className:H},(0,O.Ms)(v)," • ",(0,O.b8)(v)),r().createElement(f.Dy.h3,{className:J,variant:f.$e.mesto},_),d&&d.length>0&&r().createElement(f.Dy.h3,{className:J,variant:f.$e.mesto},d),r().createElement("div",{className:P},r().createElement(p.Z,{draggable:!1,className:Y,to:l,target:"_blank"},r().createElement(K.Y,{version:"secondary",onClick:function(){h({targetUri:y,intent:"find-concert",type:"click"})}},N)),r().createElement(Q.y,{menu:r().createElement(ne,{uri:y})},r().createElement(X.z,{size:32,className:F}))))},oe=e=>{const{albums:t,artists:a}=e,n=t.reduce(((e,t)=>{const a=t.artistName;return e[a]?e[a].push(t):e[a]=[t],e}),{});return r().createElement("div",{className:B},a.map(((e,t)=>{const a=n[e.name]||[],c=a.length+2;let i=a.map(((t,a)=>r().createElement(h.r,{key:a,entity:ce(t,e.uri)})));return i=[null,r().createElement(w,{entity:e,headliner:0===t})].concat(i),r().createElement(y.ZP,{value:"headered-grid",index:t},r().createElement(E.P,{title:0===t?m.ag.get("concert_lineup"):"",total:c,seeAllUri:`${(0,R.GJ)(e.id)}:discography`,seeAllLabel:m.ag.get("artist-page.show-discography")},i))})))},se=e=>{const t=e.upcomingConcerts;if(!t||t.length<1)return null;const a=t.map((e=>r().createElement(V.k,{entity:e})));return a.unshift(r().createElement(C,null)),r().createElement("div",{className:G},r().createElement(y.ZP,{value:"headered-grid"},r().createElement(E.P,{title:m.ag.get("concerts_more_events"),total:t.length+1},a)))},me=e=>{const{concert:t,upcomingConcerts:a,artists:n,albums:c,color:i,headerImageUri:l,ticketAvailabilityTranslated:o}=e.concert,y=[{url:l,width:100,height:100}];(0,re.Y)(i);const E=(0,L.o)();const h="ONLINE"===t.category?m.ag.get("concert_find_virtual_event"):m.ag.get("concert.button.see_tickets");return r().createElement("section",{className:A},r().createElement(u.gF,{backgroundImages:y,backgroundColor:i},r().createElement(u.sP,null,r().createElement(u.T0,null,r().createElement(ie,t)),r().createElement(u.xd,null,(0,O.Yl)(t))),r().createElement(g.W,null,r().createElement("div",{className:M},r().createElement(d.i,{text:(0,O.Yl)(t)}),r().createElement(p.Z,{draggable:!1,className:Y,to:t.clickThruUrl,target:"_blank"},r().createElement(K.Y,{version:"secondary",className:q,onClick:function(){E({targetUri:`spotify:concert:${t.id}`,intent:"find-concert",type:"click"})}},h))))),r().createElement("div",{className:j},r().createElement(v.I,{backgroundColor:i}),r().createElement("div",{className:S},r().createElement(le,(0,s.Z)({},t,{ticketAvailabilityTranslated:o})),r().createElement(oe,{artists:n,albums:c}),r().createElement(se,{upcomingConcerts:a}))))};var ue=r().memo(me),ge=a(36726);var de=r().memo((()=>{const{concertId:e}=(0,i.UO)(),t=(0,c.I0)(),a=`spotify:concert:${e}`,s=(0,c.v9)((e=>(0,o.G6)(a,e)));return(0,n.useEffect)((()=>{t((0,l.l$)(e))}),[t,e]),s?r().createElement(ue,{concert:s}):r().createElement(ge.h,{errorMessage:m.ag.get("concert.error.concert_not_found_title")})}))},62508:function(e,t,a){a.d(t,{Ms:function(){return r},b8:function(){return c},lJ:function(){return i},NL:function(){return l},O1:function(){return o},Yl:function(){return u},ij:function(){return g}});var n=a(35181);const r=e=>n.ag.formatDate(e,{weekday:"short",month:"short",day:"numeric"}),c=e=>n.ag.formatDate(e,{hour:"numeric",minute:"numeric"}),i=e=>n.ag.formatDate(e,{month:"short"}).toUpperCase(),l=e=>n.ag.formatDate(e,{month:"short",day:"numeric"}).toUpperCase(),o=e=>e<new Date,s={row:{1:e=>n.ag.get("concert.header.entity_title_1",...e),2:e=>n.ag.get("concert.header.entity_title_2",...e),3:e=>n.ag.get("concert.header.entity_title_3",...e),4:e=>n.ag.get("concert.header.entity_title_4",...e),more:e=>n.ag.get("concert.header.entity_title_more",...e)},entity:{1:e=>n.ag.get("concert.header.upcoming_concert_title_1",...e),2:e=>n.ag.get("concert.header.upcoming_concert_title_2",...e),3:e=>n.ag.get("concert.header.upcoming_concert_title_3",...e),4:e=>n.ag.get("concert.header.upcoming_concert_title_4",...e),more:e=>n.ag.get("concert.header.upcoming_concert_title_more",...e)}},m=(e,t)=>{const a=s[t],n=(e=>{try{return e.festival&&e.title?{title:e.title}:{artists:e.artists.map((e=>e.name||e.profile.name))}}catch(e){return null}})(e);if(n){if(n.title)return n.title;if(n.artists)return n.artists.length>4?a.more(n.artists):a[n.artists.length](n.artists)}return""},u=e=>m(e,"row"),g=e=>m(e,"entity")}}]);
//# sourceMappingURL=xpui-routes-concert.js.map