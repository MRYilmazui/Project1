(this.webpackJsonpmercedes=this.webpackJsonpmercedes||[]).push([[18],{153:function(e,t,a){},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return F}));var n=a(10),l=a.n(n),r=a(14),i=a(18),s=a(19),c=a(39),o=a(21),u=a(20),m=a(0),p=a.n(m),d=a(887),v=a(877),f=(a(153),a(134),a(36)),h=a.n(f),b=a(25);function E(e){return g.apply(this,arguments)}function g(){return(g=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(b.a).concat(b.t),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t}}).then((function(e){return e.data})).catch((function(e){return null}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=a(38),y=a(888),N=a(889),C=a(890),w=a(891),S=a(892),O=a(893),j=a(894),M=a(895),x=a(37)[localStorage.lang],F=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.next=3,E(localStorage.langid);case 3:t=e.sent,n.setState({social:t});case 5:case"end":return e.stop()}}),e)}))),n.Follow=function(){if(null!==n.state.social){for(var e=[],t=0;t<n.state.social.length;t++)e.push(p.a.createElement(d.a,{id:n.state.social[t].socialMediaTypeName,title:p.a.createElement("img",{src:n.state.social[t].socialMediaTypeImageUrl})},n.followinner(n.state.social[t].socialMedias)));return e}},n.Share=function(){return n.state.location!==window.location.href&&n.setState({location:window.location.href}),p.a.createElement("div",null,p.a.createElement(y.a,{title:n.props.data.title,url:n.state.location},p.a.createElement(N.a,{size:36})),p.a.createElement(C.a,{title:n.props.data.title,url:n.state.location},p.a.createElement(w.a,{size:36})),p.a.createElement(S.a,{title:n.props.data.title,url:n.state.location},p.a.createElement(O.a,{size:36})),p.a.createElement(j.a,{title:n.props.data.title,url:n.state.location},p.a.createElement(M.a,{size:36})))},n.Follow=n.Follow.bind(Object(c.a)(n)),n.state={location:null,social:null},n}return Object(s.a)(a,[{key:"followinner",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(p.a.createElement(v.a.Item,{href:"http://"+e[a].link},e[a].name));return t}},{key:"render",value:function(){return p.a.createElement("div",{className:"SocialMedia"},void 0!==this.props.data?p.a.createElement(k.a,null,p.a.createElement("title",null,this.props.data.title),p.a.createElement("meta",{name:"description",content:this.props.data.listDescription}),p.a.createElement("meta",{property:"og:title",content:this.props.data.title}),p.a.createElement("meta",{property:"og:description",content:this.props.data.listDescription})):"",p.a.createElement("h5",null,x.allsite.title[37]),this.props.Follow?p.a.createElement("div",{className:"social-media"},this.Follow()):this.Share(),p.a.createElement("div",{className:"follow"}),p.a.createElement("div",{className:"share"}))}}]),a}(m.Component)},166:function(e,t){},222:function(e,t,a){},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(10),l=a.n(n),r=a(14),i=(a(134),a(36)),s=a.n(i),c=a(25);function o(e){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(c.a).concat(c.s),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"}}).then((function(e){return e.data})).catch((function(e){return null}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},259:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(10),l=a.n(n),r=a(14),i=a(18),s=a(19),c=a(21),o=a(20),u=a(0),m=a.n(u),p=a(22),d=m.a.createContext(),v=(d.Provider,d.Consumer,m.a.createContext()),f=(v.Provider,v.Consumer,a(33),a(222),a(26)),h=a(8),b=a.n(h),E=f[localStorage.lang],g=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.menuBuildFunction(),n.setState({menuBuildVar:t}),b()(".dropdown-item-list a").on("click",(function(){b()(".dropdown-item-list").removeClass("active-submenu"),b()(this).closest(".dropdown-item-list").addClass("active-submenu")})),b()(".dropdownActivate").on("click",(function(){b()(this).find("+div").toggleClass("active-mobilemenu"),b()(this).toggleClass("active-dropdown-i")}));case 4:case"end":return e.stop()}}),e)}))),n.menuBuildFunction=function(e){for(var t=[],a=0;a<E.length-1;a++)"/"===E[a].link?t.push(m.a.createElement(p.b,{activeClassName:"active",exact:!0,to:E[a].link},E[a].name)):null!==E[a].sub?t.push(m.a.createElement("div",{className:"dropdown-item-list"},m.a.createElement(p.b,{activeClassName:"active",key:a,to:E[a].link},E[a].name),m.a.createElement("button",{className:"dropdownActivate"}),m.a.createElement("div",{className:"dropdown-list"},n.menuSubBuild(E[a].sub)))):t.push(m.a.createElement(p.b,{activeClassName:"active",to:E[a].link},E[a].name));return t},n.state={displayMenu:"",Categories:null,Loader:!1,menuBuildVar:null},n}return Object(s.a)(a,[{key:"triggerNavigation",value:function(){b()("html").toggleClass("menuActive"),""==this.state.displayMenu?this.setState({displayMenu:" d-block"}):this.setState({displayMenu:""})}},{key:"imageRepeater",value:function(){var e=[];if(0!==this.state.content.galleries.length)for(var t=0;t<this.state.content.galleries.length;t++)e.push(m.a.createElement("div",{className:"slide"},m.a.createElement("div",null,m.a.createElement("img",{src:this.state.content.galleries[t].imageUrl,alt:""}))));else e.push(m.a.createElement("div",{className:"slide"},m.a.createElement("div",null,m.a.createElement("img",{src:this.state.content.imageUrl,alt:""}))));return e}},{key:"menuSubSubBuild",value:function(e){for(var t=[],a=0;a<e.length;a++)null!==e[a].sub?t.push(m.a.createElement("div",{className:"submenudetails"},m.a.createElement(p.b,{activeClassName:"active",to:e[a].link},e[a].name),m.a.createElement("button",{className:"dropdownActivate"}),m.a.createElement("div",{className:"dropdown-list"},this.menuSubSubSubBuild(e[a].sub)))):t.push(m.a.createElement(p.b,{activeClassName:"active",to:e[a].link},e[a].name));return t}},{key:"menuSubSubSubBuild",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(m.a.createElement(p.b,{activeClassName:"active",key:a,to:e[a].link},e[a].name));return t}},{key:"menuSubBuild",value:function(e){for(var t=[],a=0;a<e.length;a++)null!==e[a].sub?t.push(m.a.createElement("div",{className:"submenudetails"},m.a.createElement(p.b,{activeClassName:"active",exact:!0,key:a,to:e[a].link},e[a].name),m.a.createElement("button",{className:"dropdownActivate"}),m.a.createElement("div",{className:"dropdown-list"},this.menuSubSubBuild(e[a].sub)))):t.push(m.a.createElement(p.b,{activeClassName:"active",exact:!0,to:e[a].link},e[a].name));return t}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"Menu"},m.a.createElement("button",{className:"menuNavButton",onClick:function(){return e.triggerNavigation()}}),m.a.createElement("nav",{className:this.state.displayMenu},this.state.menuBuildVar))}}]),a}(u.Component)},650:function(e,t,a){e.exports=a.p+"static/media/Hp5Fz1.630d18b5.png"},651:function(e,t,a){},903:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var n=a(10),l=a.n(n),r=a(14),i=a(18),s=a(19),c=a(21),o=a(20),u=a(0),m=a.n(u),p=a(259),d=(a(210),a(211),a(139)),v=a.n(d),f=(a(649),a(38)),h=a(650),b=a.n(h),E=(a(651),a(157)),g=(a(134),a(36)),k=a.n(g),y=a(25);function N(e){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(y.a).concat(y.g),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t}}).then((function(e){return e.data})).catch((function(e){}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=a(223),S=a(8),O=a.n(S),j=a(37)[localStorage.lang],M=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentWillMount=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),n.componentDidMount=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(localStorage.langid);case 2:return t=e.sent,e.next=5,Object(w.a)();case 5:a=e.sent,n.setState({siteScript:a}),n.setState({Footer:t}),O()(".nav.nav-tabs a").on("click",(function(e){e.preventDefault(),O()("li").removeClass("active"),O()(this).parent().addClass("active");var t=this.attributes[0].value;O()(".tab-content div").addClass("d-none"),O()(t).removeClass("d-none")})),O()(".footerBottom a").on("click",(function(e){O()(".popup-outer-details").toggleClass("d-none"),e.preventDefault(),O()("li").removeClass("active"),O()('[href="'+this.attributes[0].value+'"]').parent().addClass("active");var t=this.attributes[0].value;O()(".tab-content div").addClass("d-none"),O()(t).removeClass("d-none")})),O()(".nav.nav-tabs li:first a").trigger("click"),O()(".overlay, .closeModal").click((function(e){O()(".popup-outer-details").addClass("d-none")})),O()("#openCookie").click((function(){O()(".popup-outer-details").removeClass("d-none")})),O()("#closeCookie").on("click",(function(){localStorage.cookie=!1,O()(".accept-cookie").addClass("d-none")}));case 14:case"end":return e.stop()}}),e)}))),n.state={Footer:null,siteScript:null},n}return Object(s.a)(a,[{key:"footerLoop",value:function(){for(var e=[],t=0;t<this.state.Footer.length;t++)e.push(m.a.createElement("a",{href:"#tab"+t,className:"footer-item"},this.state.Footer[t].title));return e}},{key:"tabsTitle",value:function(){for(var e=[],t=0;t<this.state.Footer.length;t++)e.push(m.a.createElement("li",{class:""},m.a.createElement("a",{href:"#tab"+t,rel:"nofollow"},this.state.Footer[t].title)));return e}},{key:"Popupganerator",value:function(){for(var e=[],t=0;t<this.state.Footer.length;t++)e.push(m.a.createElement("div",{id:"tab"+t},m.a.createElement("p",null,v()(this.state.Footer[t].body))));return e}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,null!==this.state.Footer?m.a.createElement("div",{className:"Footer"},m.a.createElement(f.a,null,m.a.createElement("script",null,null!==this.state.siteScript?this.state.siteScript.footers[0]:""),m.a.createElement("script",{src:null!==this.state.siteScript?this.state.siteScript.footerLibraries[0]:""})),m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"col-lg-4 float-left"},m.a.createElement("h5",null,"Mercedes-Benz T\xfcrk A.\u015e."),m.a.createElement("p",null,"1967 y\u0131l\u0131nda Daimler-Benz AG\u2019nin % 36 ortakl\u0131\u011f\u0131 ile Otomarsan unvan\u0131yla \u0130stanbul Davutpa\u015fa\u2019da kurulmu\u015ftur. Marka, efsanevi O302 tipi otob\xfcslerin \xfcretimine kurulu\u015fundan yaln\u0131zca bir y\u0131l sonra, 1968 y\u0131l\u0131nda ba\u015flam\u0131\u015ft\u0131r. 1970 y\u0131l\u0131nda ilk ihracat\u0131n\u0131 ger\xe7ekle\u015ftiren \u015firket, 1984 y\u0131l\u0131nda Mercedes-Benz T\xfcrkiye Genel M\xfcmessili olmu\u015ftur.")),m.a.createElement("div",{className:"col-lg-4 float-left"},m.a.createElement("h5",null,j.allsite.title[42]),m.a.createElement(p.a,null)),m.a.createElement("div",{className:"col-lg-4 float-left"},m.a.createElement("h5",null,j.allsite.title[37]),m.a.createElement("p",null,m.a.createElement("a",{href:"tel:444 62 44"},m.a.createElement("img",{src:b.a,className:"footer-phone-img"})),"Ak\xe7aburgaz Mah. S\xfcleyman \u015eah Cad. No:2 34522 Esenyurt/\u0130stanbul"),m.a.createElement(E.a,{Follow:!0})),m.a.createElement("div",{className:"clearfix"}),m.a.createElement("div",{className:"footerBottom"},this.footerLoop(),"false"!==localStorage.cookie?m.a.createElement("div",{className:"accept-cookie"},m.a.createElement("p",null,j.allsite.title[7]),m.a.createElement("button",{id:"closeCookie"},j.allsite.title[9]),m.a.createElement("a",{href:"#tab3",id:"openCookie",type:"button",className:"footer-item"},j.allsite.title[8]),m.a.createElement("div",{className:"clearfix"}),m.a.createElement("a",{href:"#tab0",id:"openCookie",type:"button",className:"noInspect"},j.allsite.title[11]),m.a.createElement("a",{href:"#tab3",id:"openCookie",type:"button",className:"noInspect"},j.allsite.title[10])):""),m.a.createElement("div",{className:"copyright"},"\xa9 ",m.a.createElement("a",{href:"#tab0",id:"openCookie",type:"button",className:"noInspect"},"2021")," Mercedes-Benz T\xfcrk A.\u015e.. All Rights Reserved.")),m.a.createElement("div",{className:"popup-outer-details  d-none"},m.a.createElement("div",{className:"popup-details Subpage  animate__animated animate__fast star"},m.a.createElement("ul",{class:"tabs",role:"tablist"},m.a.createElement("button",{className:"closeModal"}),null!==this.state.Footer?m.a.createElement("div",null,m.a.createElement("ul",{class:"nav nav-tabs"},this.tabsTitle()),m.a.createElement("div",{class:"tab-content"},this.Popupganerator())):""),m.a.createElement("div",{className:"overlay"})))):"")}}]),a}(u.Component)}}]);
//# sourceMappingURL=18.caf47432.chunk.js.map