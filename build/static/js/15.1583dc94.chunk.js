(this.webpackJsonpmercedes=this.webpackJsonpmercedes||[]).push([[15],{144:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(18),r=a(19),s=a(21),l=a(20),i=a(0),c=a.n(i),u=(a(158),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"renderLoop",value:function(e){var t=[];if(e.length-1===0)t.push(" / "+e[0]+" / ");else for(var a=0;a<e.length-1;a++)t.push(e[a]+" / ");return t}},{key:"render",value:function(){return c.a.createElement("div",{className:"BreadCrumbNav"},"Anasayfa  ",this.renderLoop(this.props.mainpage),"  ",this.props.title)}}]),a}(i.Component))},157:function(e,t,a){e.exports=a.p+"static/media/image_4.2d032258.png"},158:function(e,t,a){},163:function(e,t,a){},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(18),r=a(19),s=a(21),l=a(20),i=a(0),c=a.n(i),u=(a(169),a(153)),o=a.n(u),p=a(22),m=a(155),f=a.n(m),d=a(24),h=d[localStorage.lang],b=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"NewsSliderBuild",value:function(){for(var e=[],t=0;t<this.props.data.length;t++)e.push(c.a.createElement("div",{className:"announcement"},c.a.createElement("img",{src:this.props.data[t].imageUrl,alt:""}),c.a.createElement("h5",null,this.props.data[t].title),c.a.createElement("p",null,f()(this.props.data[t].body)),c.a.createElement(p.b,{activeClassName:"active",to:"/"+h[6].mainurl.title[0]+"/"+h[6].mainurl.title[1]+"/"+this.props.data[t].routeValue},"Detaylar")));return e}},{key:"render",value:function(){var e={dots:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,centerPadding:"20px"};return c.a.createElement("div",{className:"AnnouncementSummary"},c.a.createElement("h3",null,"News & Announcements"),c.a.createElement("i",{className:"title-desc"},"Press releases and statements"),c.a.createElement("div",{className:"announcements"},c.a.createElement(o.a,e,this.NewsSliderBuild())))}}]),a}(i.Component)},169:function(e,t,a){},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(9),r=a.n(n),s=a(15),l=a(18),i=a(19),c=a(38),u=a(21),o=a(20),p=a(0),m=a.n(p),f=a(271),d=a(197),h=(a(163),a(131),a(34)),b=a.n(h),v=a(23);function g(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(v.a).concat(v.s),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t}}).then((function(e){return e.data})).catch((function(e){return null}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=a(272),O=a(273),j=a(274),y=a(275),k=a(276),S=a(277),N=a(278),C=a(279),x=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.next=3,g(localStorage.langid);case 3:t=e.sent,n.setState({social:t});case 5:case"end":return e.stop()}}),e)}))),n.Follow=function(){if(null!==n.state.social){for(var e=[],t=0;t<n.state.social.length;t++)e.push(m.a.createElement(f.a,{id:n.state.social[t].socialMediaTypeName,title:m.a.createElement("img",{src:n.state.social[t].socialMediaTypeImageUrl})},n.followinner(n.state.social[t].socialMedias)));return e}},n.Share=function(){return n.state.location!==window.location.href&&n.setState({location:window.location.href}),m.a.createElement("div",null,m.a.createElement(w.a,{title:n.props.title,url:n.state.location},m.a.createElement(O.a,{size:36})),m.a.createElement(j.a,{title:n.props.title,url:n.state.location},m.a.createElement(y.a,{size:36})),m.a.createElement(k.a,{title:n.props.title,url:n.state.location},m.a.createElement(S.a,{size:36})),m.a.createElement(N.a,{title:n.props.title,url:n.state.location},m.a.createElement(C.a,{size:36})))},n.Follow=n.Follow.bind(Object(c.a)(n)),n.state={location:null,social:null},n}return Object(i.a)(a,[{key:"followinner",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(m.a.createElement(d.a.Item,{href:"http://"+e[a].link},e[a].name));return t}},{key:"render",value:function(){return m.a.createElement("div",{className:"SocialMedia"},m.a.createElement("h5",null,"Social Media"),this.props.Follow?m.a.createElement("div",{className:"social-media"},this.Follow()):this.Share(),m.a.createElement("div",{className:"follow"}),m.a.createElement("div",{className:"share"}))}}]),a}(p.Component)},175:function(e,t){},203:function(e,t,a){"use strict";function n(e,t,a){var n=t;if(void 0!==a)if(e[2].sub[0].name===t)for(var r=0;r<e[2].sub[0].sub[1].sub.length;r++){var s=e[2].sub[0].sub[1].sub[r].link.split("/"),l=s.length-1,i=a.split("/"),c=i.length-1;if(s[l]===i[c])return e[2].sub[0].sub[1].sub[r].value}else for(var u=0;u<e[2].sub[1].sub[1].sub.length;u++){var o=e[2].sub[1].sub[1].sub[u].link.split("/"),p=o.length-1,m=a.split("/"),f=m.length-1;if(o[p]===m[f])return e[2].sub[1].sub[1].sub[u].value}for(var d=0;d<e.length-1;d++)if(null!==e[d].sub){var h=e[d].link.split("/");if(h[h.length-1]===n)return e[d].value;for(var b=0;b<e[d].sub.length;b++)if(null!==e[d].sub[b].sub){var v=e[d].sub[b].link.split("/");if(v[v.length-1]===n)return e[d].sub[b].value;for(var g=0;g<e[d].sub[b].sub.length;g++)if(null!==e[d].sub[b].sub[g].sub){var E=e[d].sub[b].sub[g].link.split("/");if(E[E.length-1]===n)return e[d].sub[b].sub[g].value;for(var w=0;w<e[d].sub[b].sub[g].sub.length;w++){var O=e[d].sub[b].sub[g].sub[w].link.split("/");if(O[O.length-1]===n)return e[d].sub[b].sub[g].sub[w].value}}else{var j=e[d].sub[b].sub[g].link.split("/");if(j[j.length-1]===n)return e[d].sub[b].sub[g].value}}else{var y=e[d].sub[b].link.split("/");if(y[y.length-1]===n)return e[d].sub[b].value}}else{var k=e[d].link.split("/");if(k[k.length-1]===n)return e[d].value}}a.d(t,"a",(function(){return n}))},222:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(18),r=a(19),s=a(21),l=a(20),i=a(0),c=a.n(i),u=a(144),o=a(22),p=(a(37),a(24)),m=(a(223),p[localStorage.lang]),f=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"imageRepeater",value:function(){for(var e=[],t=0;t<this.props.data.length;t++)e.push(c.a.createElement("div",{class:"subposts"},c.a.createElement(o.b,{activeClassName:"active",to:"/"+m[6].mainurl.title[3]+this.props.uppername+"/"+this.props.data[t].routeValue},c.a.createElement("span",{class:"subcategory-image col-lg-6 float-left pr-0"},c.a.createElement("img",{src:this.props.data[t].listImageUrl,alt:""})),c.a.createElement("span",{class:"text col-lg-6 float-left"},c.a.createElement("h5",null,this.props.data[t].title),c.a.createElement("p",null,this.props.data[t].listDescription)))));return e}},{key:"render",value:function(){return c.a.createElement("div",{className:"SubPosts"},c.a.createElement(u.a,{mainpage:["Kampanyalar"]}),null!==this.props.data?this.imageRepeater():"")}}]),a}(i.Component)},223:function(e,t,a){},697:function(e,t,a){},892:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(9),r=a.n(n),s=a(15),l=a(18),i=a(19),c=a(21),u=a(20),o=a(0),p=a.n(o),m=(a(157),a(697),a(144),a(153),a(168),a(170),a(131),a(34)),f=a.n(m),d=a(23);function h(e,t){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(d.a).concat(d.d),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t,pageRouteValue:a,currentPage:"1",count:"100"}}).then((function(e){return e.data})).catch((function(e){}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=a(222),g=a(203),E=a(24)[localStorage.lang],w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",n.name=n.props.match.params.pagename,t=Object(g.a)(E,n.name,window.location.pathname),n.setState({retry:t}),e.next=6,h(localStorage.langid,t);case 6:a=e.sent,n.setState({getCampaignListPage:a});case 8:case"end":return e.stop()}}),e)}))),n.componentDidUpdate=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",n.name=n.props.match.params.pagename,t=Object(g.a)(E,n.name,window.location.pathname),e.next=5,h(localStorage.langid,t);case 5:a=e.sent,n.state.getCampaignListPage.data[0].id!==a.data[0].id&&n.setState({getCampaignListPage:a});case 7:case"end":return e.stop()}}),e)}))),n.state={getCampaignListPage:null,retry:""},n}return Object(i.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"AnnouncementDetails"},null!==this.state.getCampaignListPage?p.a.createElement("div",{className:"container animate__animated animate__fadeIn animate__fast"},p.a.createElement("p",null,p.a.createElement(v.a,{data:this.state.getCampaignListPage.data,uppername:window.location.pathname.split("/"+E[6].mainurl.title[2])[1]}))):"")}}]),a}(o.Component)}}]);
//# sourceMappingURL=15.1583dc94.chunk.js.map