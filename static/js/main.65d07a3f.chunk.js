(this.webpackJsonpLuiRSS=this.webpackJsonpLuiRSS||[]).push([[1],{121:function(e,t,n){},134:function(e,t,n){e.exports=n(216)},140:function(e,t,n){var r={"./ion-action-sheet.entry.js":[220,5],"./ion-alert.entry.js":[221,6],"./ion-app_8.entry.js":[222,7],"./ion-avatar_3.entry.js":[223,17],"./ion-back-button.entry.js":[224,18],"./ion-backdrop.entry.js":[225,43],"./ion-button_2.entry.js":[226,19],"./ion-card_5.entry.js":[227,20],"./ion-checkbox.entry.js":[228,21],"./ion-chip.entry.js":[229,22],"./ion-col_3.entry.js":[230,44],"./ion-datetime_3.entry.js":[231,10],"./ion-fab_3.entry.js":[232,23],"./ion-img.entry.js":[233,45],"./ion-infinite-scroll_2.entry.js":[234,46],"./ion-input.entry.js":[235,24],"./ion-item-option_3.entry.js":[236,25],"./ion-item_8.entry.js":[237,26],"./ion-loading.entry.js":[238,27],"./ion-menu_3.entry.js":[239,28],"./ion-modal.entry.js":[240,8],"./ion-nav_2.entry.js":[241,14],"./ion-popover.entry.js":[242,9],"./ion-progress-bar.entry.js":[243,29],"./ion-radio_2.entry.js":[244,30],"./ion-range.entry.js":[245,31],"./ion-refresher_2.entry.js":[246,11],"./ion-reorder_2.entry.js":[247,16],"./ion-ripple-effect.entry.js":[248,47],"./ion-route_4.entry.js":[249,32],"./ion-searchbar.entry.js":[250,33],"./ion-segment_2.entry.js":[251,34],"./ion-select_3.entry.js":[252,35],"./ion-slide_2.entry.js":[253,48],"./ion-spinner.entry.js":[254,13],"./ion-split-pane.entry.js":[255,49],"./ion-tab-bar_2.entry.js":[256,36],"./ion-tab_2.entry.js":[257,15],"./ion-text.entry.js":[258,37],"./ion-textarea.entry.js":[259,38],"./ion-toast.entry.js":[260,39],"./ion-toggle.entry.js":[261,12],"./ion-virtual-scroll.entry.js":[262,50]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=140,e.exports=a},142:function(e,t,n){var r={"./ion-icon.entry.js":[263,57]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=142,e.exports=a},158:function(e,t){},160:function(e,t){},186:function(e,t){},188:function(e,t){},201:function(e,t,n){},212:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(47),i=n.n(c),l=n(31),s=n(3),u=n(123),m=n(5),p=n.n(m),f=n(8),d=n(17),v=function(e){var t=e.message;return o.a.createElement(s.k,{routerLink:"/message/".concat(encodeURI(t.title||"")),detail:!1},o.a.createElement(s.l,{className:"ion-text-wrap"},o.a.createElement(s.n,null,new Date(t.pubDate||"").toLocaleString()),o.a.createElement("h2",null,t.title),o.a.createElement("h3",null,t.contentSnippet),o.a.createElement("p",null)))},E=n(125),h=n.n(E),j=n(130),y="http://cors-anywhere.herokuapp.com/";function b(e){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(s.I)("android")&&!Object(s.I)("ios")){e.next=6;break}return e.next=3,j.a.get(t,{},{});case 3:e.t0=e.sent.data,e.next=11;break;case 6:return e.next=8,fetch(y+t);case 8:return e.next=10,e.sent.text();case 10:e.t0=e.sent;case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=new h.a,g="https://halloluise.de/feed/";function w(){return O.apply(this,arguments)}function O(){return(O=Object(f.a)(p.a.mark((function e(){var t,n,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.length>0&&void 0!==a[0]&&a[0]||!r){e.next=3;break}return e.abrupt("return",r);case 3:return e.next=5,b(g);case 5:return t=e.sent,console.log("feedString",t),e.next=9,k.parseString(t);case 9:return n=e.sent,console.log("feed",n),r=n.items,e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _,S=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===n;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=n.find((function(e){return(e.title||"")===t}));case 11:return e.abrupt("return",e.t2);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=(n(121),n(15)),C=function(e){var t=e.title,n=e.children,r=Object(a.useState)({open:!1,event:void 0}),c=Object(d.a)(r,2),i=c[0],l=c[1],u=Object(s.J)(),m=Object(d.a)(u,1)[0];return o.a.createElement(s.z,null,o.a.createElement(s.b,{slot:"start",style:{padding:"10px"}},o.a.createElement("img",{src:"assets/icon/lui.png",alt:"Logo"})),o.a.createElement(s.y,null,t),o.a.createElement(s.e,{slot:"end"},o.a.createElement(s.p,{isOpen:i.open,event:i.event,cssClass:"my-custom-class",onDidDismiss:function(e){return l({open:!1,event:void 0})}},o.a.createElement(s.m,{onClick:function(){return l({open:!1,event:void 0})}},n,o.a.createElement(s.k,{onClick:function(){return m("Erstellt von Gero Beckmann mit dem Ionic-Framework. ",[{text:"Ok"}])}},"\xdcber"))),o.a.createElement(s.d,{onClick:function(e){return l({open:!0,event:e.nativeEvent})}},o.a.createElement(s.j,{slot:"icon-only",ios:L.i,md:L.j}))))},D=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(s.K)(Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(void 0);case 2:case"end":return e.stop()}}),e)}))));var c=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],r(void 0),e.next=4,w(n);case 4:a=e.sent,r(a),null===t||void 0===t||t.detail.complete();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(s.o,{id:"home-page"},o.a.createElement(s.i,null,o.a.createElement(C,{title:"Lui-News"},o.a.createElement(s.k,{onClick:function(){return c(void 0,!0)}},"Aktualisieren"))),o.a.createElement(s.f,{fullscreen:!0},o.a.createElement(s.r,{slot:"fixed",onIonRefresh:function(e){return c(e,!0)}},o.a.createElement(s.s,null)),n?"":o.a.createElement(s.q,{type:"indeterminate"}),o.a.createElement(s.m,null,(null===n||void 0===n?void 0:n.map((function(e){return o.a.createElement(v,{key:e.title,message:e})})))||"")))},N=(n(201),n(129).a.Share),I=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,r=t.contentSnippet,a=t.link,e.next=3,N.share({title:n,text:r,url:a,dialogTitle:"Teile mit deinen Mitsch\xfclern"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e){var t=e.match,n=Object(a.useState)(),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(s.K)(Object(f.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t.params.id);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})))),o.a.createElement(s.o,{id:"view-message-page"},o.a.createElement(s.i,{translucent:!0},o.a.createElement(s.z,null,o.a.createElement(s.e,null,o.a.createElement(s.c,{text:"Inbox",defaultHref:"/home"})),o.a.createElement(s.e,{slot:"end"},o.a.createElement(s.d,{href:(null===c||void 0===c?void 0:c.link)||"#",target:"_blank"},o.a.createElement(s.j,{slot:"icon-only",icon:L.k}))))),o.a.createElement(s.f,{fullscreen:!0},o.a.createElement(s.g,{vertical:"bottom",horizontal:"end",slot:"fixed"},o.a.createElement(s.h,{onClick:function(){return c&&I(c)}},o.a.createElement(s.j,{icon:L.s}))),c?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"ion-padding"},o.a.createElement(s.n,null,new Date(c.pubDate||"").toLocaleString()),o.a.createElement("h1",null,c.title),o.a.createElement("p",null,c["content:encodedSnippet"]))):o.a.createElement("div",null,"Loading")))},R=(n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213)),T="https://halloluise.de/termine/liste/?ical=1";function U(){return F.apply(this,arguments)}function F(){return(F=Object(f.a)(p.a.mark((function e(){var t,n,r,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.length>0&&void 0!==a[0]&&a[0]||!_){e.next=3;break}return e.abrupt("return",_);case 3:return e.next=5,b(T);case 5:return t=e.sent,console.log("caL-string",t),n=R.parseICS(t),r=Object.values(n),_=r.filter((function(e){return"VEVENT"==e.type})),console.log("cal_data",_),e.abrupt("return",_);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(s.K)(Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(void 0);case 2:case"end":return e.stop()}}),e)}))));var c=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],r(void 0),e.next=4,U(n);case 4:a=e.sent,r(a),null===t||void 0===t||t.detail.complete();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(s.o,{id:"home-page"},o.a.createElement(s.i,null,o.a.createElement(C,{title:"Lui-Kalendar"},o.a.createElement(s.k,{onClick:function(){return c(void 0,!0)}},"Aktualisieren"))),o.a.createElement(s.f,{fullscreen:!0},o.a.createElement(s.r,{slot:"fixed",onIonRefresh:function(e){return c(e,!0)}},o.a.createElement(s.s,null)),n?"":o.a.createElement(s.q,{type:"indeterminate"}),o.a.createElement(s.m,null,null===n||void 0===n?void 0:n.map((function(e){return o.a.createElement(s.k,{detail:!1},o.a.createElement(s.l,{className:"ion-text-wrap"},o.a.createElement(s.n,null,e.start.toLocaleString()+" - "+e.end.toLocaleString()),o.a.createElement("h2",null,e.summary),o.a.createElement("h3",null,e.description),o.a.createElement("p",null)))})))))},B=function(){return o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(s.f,null,o.a.createElement(s.x,null,o.a.createElement(s.u,null,o.a.createElement(l.b,{path:"/home",component:D,exact:!0}),o.a.createElement(l.b,{path:"/calendar",component:z,exact:!0}),o.a.createElement(l.b,{path:"/message/:id",component:K,exact:!0}),o.a.createElement(l.b,{exact:!0,path:"/",render:function(){return o.a.createElement(l.a,{to:"/home"})}})),o.a.createElement(s.v,{slot:"bottom"},o.a.createElement(s.w,{tab:"calendar",href:"/calendar"},o.a.createElement(s.j,{icon:L.b}),o.a.createElement(s.l,null,"Kalendar")),o.a.createElement(s.w,{tab:"home",href:"/home"},o.a.createElement(s.j,{icon:L.n}),o.a.createElement(s.l,null,"News")))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[134,3,4]]]);
//# sourceMappingURL=main.65d07a3f.chunk.js.map