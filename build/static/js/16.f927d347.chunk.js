(this.webpackJsonpmercedes=this.webpackJsonpmercedes||[]).push([[16],{141:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(18),n=a(19),s=a(21),i=a(20),l=a(0),u=a.n(l),c=(a(148),a(8),a(26)),o=a(139),m=a.n(o),p=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"renderLoop",value:function(e){var t=[];if(e.length-1===0)t.push(" / "+e[0]+" / ");else for(var a=0;a<e.length-1;a++)t.push(e[a]+" / ");return t}},{key:"loop",value:function(){var e=window.location.pathname,t="";t+=c.tr[0].name;for(var a=0;a<c.tr.length;a++)if(c.tr[a].link==e)t+=" / <a href='"+c.tr[a].link+"'>"+c.tr[a].name+"</a>";else if(null!=c.tr[a].sub)for(var r=0;r<c.tr[a].sub.length;r++)if(c.tr[a].sub[r].link==e)t+=" / <a href="+c.tr[a].link+">"+c.tr[a].name+"</a>",t+=" / <a href="+c.tr[a].sub[r].link+">"+c.tr[a].sub[r].name+"</a>";else if(null!=c.tr[a].sub[r].sub)for(var n=0;n<c.tr[a].sub[r].sub.length;n++)if(c.tr[a].sub[r].sub[n].link==e)t+=" / <a href="+c.tr[a].link+">"+c.tr[a].name+"</a>",t+=" / <a href="+c.tr[a].sub[r].link+">"+c.tr[a].sub[r].name+"</a>",t+=" / <a href="+c.tr[a].sub[r].sub[n].link+">"+c.tr[a].sub[r].sub[n].name+"</a>";else if(null!=c.tr[a].sub[r].sub[n].sub)for(var s=0;s<c.tr[a].sub[r].sub[n].sub.length;s++)c.tr[a].sub[r].sub[n].sub[s].link==e&&(t+=" / <a href="+c.tr[a].link+">"+c.tr[a].name+"</a>",t+=" / <a href="+c.tr[a].sub[r].link+">"+c.tr[a].sub[r].name+"</a>",t+=" / <a href="+c.tr[a].sub[r].sub[n].link+">"+c.tr[a].sub[r].sub[n].name+"</a>",t+=" / <a href="+c.tr[a].sub[r].sub[n].sub[s].link+">"+c.tr[a].sub[r].sub[n].sub[s].name+"</a>");return t}},{key:"render",value:function(){return u.a.createElement("div",{className:"BreadCrumbNav"},m()(this.loop()))}}]),a}(l.Component)},147:function(e,t,a){e.exports=a.p+"static/media/image_4.2d032258.png"},148:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var r=a(18),n=a(19),s=a(21),i=a(20),l=a(0),u=a.n(l),c=(a(156),a(145)),o=a.n(c),m=a(22),p=a(139),f=a.n(p),b=a(26),d=a(37),h=b[localStorage.lang],v=d[localStorage.lang],g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"NewsSliderBuild",value:function(){for(var e=[],t=0;t<this.props.data.length;t++)e.push(u.a.createElement("div",{className:"announcement"},u.a.createElement("img",{src:this.props.data[t].imageUrl,alt:""}),u.a.createElement("h5",null,this.props.data[t].title),u.a.createElement("p",null,f()(this.props.data[t].listDescription)),u.a.createElement(m.b,{activeClassName:"active",to:"/"+h[6].mainurl.title[0]+"/"+h[6].mainurl.title[1]+"/"+this.props.data[t].routeValue},v.allsite.title[36])));return e}},{key:"render",value:function(){var e={dots:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,centerPadding:"20px",responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}}]};return u.a.createElement("div",{className:"AnnouncementSummary"},u.a.createElement("h3",null,v.allsite.title[40]),u.a.createElement("i",{className:"title-desc"},v.allsite.title[41]),u.a.createElement("div",{className:"announcements"},u.a.createElement(o.a,e,this.NewsSliderBuild())))}}]),a}(l.Component)},156:function(e,t,a){},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var r=a(10),n=a.n(r),s=a(14),i=a(18),l=a(19),u=a(39),c=a(21),o=a(20),m=a(0),p=a.n(m),f=a(887),b=a(877),d=(a(153),a(134),a(36)),h=a.n(d),v=a(25);function g(e){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v.a).concat(v.t),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t}}).then((function(e){return e.data})).catch((function(e){return null}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=a(38),O=a(888),k=a(889),w=a(890),y=a(891),z=a(892),C=a(893),j=a(894),B=a(895),N=a(37)[localStorage.lang],_=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).componentDidMount=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.next=3,g(localStorage.langid);case 3:t=e.sent,r.setState({social:t});case 5:case"end":return e.stop()}}),e)}))),r.Follow=function(){if(null!==r.state.social){for(var e=[],t=0;t<r.state.social.length;t++)e.push(p.a.createElement(f.a,{id:r.state.social[t].socialMediaTypeName,title:p.a.createElement("img",{src:r.state.social[t].socialMediaTypeImageUrl})},r.followinner(r.state.social[t].socialMedias)));return e}},r.Share=function(){return r.state.location!==window.location.href&&r.setState({location:window.location.href}),p.a.createElement("div",null,p.a.createElement(O.a,{title:r.props.data.title,url:r.state.location},p.a.createElement(k.a,{size:36})),p.a.createElement(w.a,{title:r.props.data.title,url:r.state.location},p.a.createElement(y.a,{size:36})),p.a.createElement(z.a,{title:r.props.data.title,url:r.state.location},p.a.createElement(C.a,{size:36})),p.a.createElement(j.a,{title:r.props.data.title,url:r.state.location},p.a.createElement(B.a,{size:36})))},r.Follow=r.Follow.bind(Object(u.a)(r)),r.state={location:null,social:null},r}return Object(l.a)(a,[{key:"followinner",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(p.a.createElement(b.a.Item,{href:"http://"+e[a].link},e[a].name));return t}},{key:"render",value:function(){return p.a.createElement("div",{className:"SocialMedia"},void 0!==this.props.data?p.a.createElement(E.a,null,p.a.createElement("title",null,this.props.data.title),p.a.createElement("meta",{name:"description",content:this.props.data.listDescription}),p.a.createElement("meta",{property:"og:title",content:this.props.data.title}),p.a.createElement("meta",{property:"og:description",content:this.props.data.listDescription})):"",p.a.createElement("h5",null,N.allsite.title[37]),this.props.Follow?p.a.createElement("div",{className:"social-media"},this.Follow()):this.Share(),p.a.createElement("div",{className:"follow"}),p.a.createElement("div",{className:"share"}))}}]),a}(m.Component)},166:function(e,t){},176:function(e,t,a){"use strict";function r(e,t,a,r){var n=t;if("/Urunlerimiz/Otobus/Satis"===r||"/Our-Products/Bus/Sales"===r)return"bus_sales";if("/Urunlerimiz/Otobus/Satis/Danismanlik-ve-Iletisim"===r||"/Our-Products/Bus/Consulting-and-Communication"===r)return"bus_consultingandcommunication";if("/Urunlerimiz/Otobus/Satis/Bus-Store"===r||"/Our-Products/Bus/Sales/Bus-Store"===r)return"bus_busstore";if("/Urunlerimiz/Otobus/Satis/Brosurler-ve-Indirilebilir-Ogeler"===r||"/Our-Products/Bus/Sales/Brochures-and-Downloads"===r)return"bus_brochuresanddownloads";if("/FiyatListesi/Otobus/Satis/Fiyat-Listesi"===r||"/Price-List/Bus/Sales/Price-List"===r)return"bus_pricelist";if("/Urunlerimiz/Otobus/Bayiler-ve-Yetkili-Servisler"===r||"/Our-Products/Bus/Dealers-and-Authorized-Services"===r)return"bus_dealersandauthorizedservices";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler"===r||"/Our-Products/Bus/After-Sales-Services"===r)return"bus_aftersalesservices";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Hizmetler"===r||"/Our-Products/Bus/After-Sales-Services/Services"===r)return"bus_services";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Garanti"===r||"/Our-Products/Bus/After-Sales-Services/Warranty"===r)return"bus_warranty";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Sigorta"===r||"/Our-Products/Bus/After-Sales-Services/Insurance"===r)return"bus_insurance";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/MB-Kasko"===r||"/Our-Products/Bus/After-Sales-Services/MB-Insurance"===r)return"bus_mb_insurance";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Yedek-Parca-ve-Aksesuar"===r||"/Our-Products/Bus/After-Sales-Services/Spare-Parts-and-Accessories"===r)return"bus_sparepartsandaccessories";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Gonullu-Geri-Cagirma-Aksiyonlari"===r||"/Our-Products/Bus/After-Sales-Services/Voluntary-Recall-Actions"===r)return"bus_voluntaryrecallactions";if("/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Servisler-icin-Bilgiler"===r||"/Our-Products/Bus/After-Sales-Services/Information-for-Services"===r)return"bus_informationforservices";if("Kampanya"===t||"Campaign"===t)return"Kamyon"===a||"Truck"===a?e[2].sub[0].sub[1].value:e[2].sub[1].sub[1].value;if("Kampanya"===t||"Campaign"===t)return"Otob\xfcs"===a||"Bus"===a?e[2].sub[0].sub[1].value:e[2].sub[1].sub[1].value;if(void 0!==a)if(e[2].sub[0].name===t)for(var s=0;s<e[2].sub[0].sub[1].sub.length;s++){var i=e[2].sub[0].sub[1].sub[s].link.split("/"),l=i.length-1,u=a.split("/"),c=u.length-1;if(i[l]===u[c])return e[2].sub[0].sub[1].sub[s].value}else for(var o=0;o<e[2].sub[1].sub[1].sub.length;o++){var m=e[2].sub[1].sub[1].sub[o].link.split("/"),p=m.length-1,f=a.split("/"),b=f.length-1;if(m[p]===f[b])return e[2].sub[1].sub[1].sub[o].value}for(var d=0;d<e.length-1;d++)if(null!==e[d].sub){var h=e[d].link.split("/");if(h[h.length-1]===n)return e[d].value;for(var v=0;v<e[d].sub.length;v++)if(null!==e[d].sub[v].sub){var g=e[d].sub[v].link.split("/");if(g[g.length-1]===n)return e[d].sub[v].value;for(var S=0;S<e[d].sub[v].sub.length;S++)if(null!==e[d].sub[v].sub[S].sub){var E=e[d].sub[v].sub[S].link.split("/");if(E[E.length-1]===n)return e[d].sub[v].sub[S].value;for(var O=0;O<e[d].sub[v].sub[S].sub.length;O++){var k=e[d].sub[v].sub[S].sub[O].link.split("/");if(k[k.length-1]===n)return e[d].sub[v].sub[S].sub[O].value}}else{var w=e[d].sub[v].sub[S].link.split("/");if(w[w.length-1]===n)return e[d].sub[v].sub[S].value}}else{var y=e[d].sub[v].link.split("/");if(y[y.length-1]===n)return e[d].sub[v].value}}else{var z=e[d].link.split("/");if(z[z.length-1]===n)return e[d].value}}a.d(t,"a",(function(){return r}))},684:function(e,t,a){},901:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var r=a(10),n=a.n(r),s=a(14),i=a(18),l=a(19),u=a(21),c=a(20),o=a(0),m=a.n(o),p=(a(147),a(684),a(141),a(145)),f=a.n(p),b=(a(155),a(157)),d=(a(134),a(36)),h=a.n(d),v=a(25);function g(e,t,a){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(n.a.mark((function e(t,a,r){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v.a).concat(v.b),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t,routeValue:r,pageRouteValue:a}}).then((function(e){return e.data})).catch((function(e){}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,a,r){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(n.a.mark((function e(t,a,r,s){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v.a).concat(v.c),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t,routeValue:r,pageRouteValue:a,previewId:s}}).then((function(e){return e.data})).catch((function(e){}));case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=a(139),w=a.n(k),y=a(176),z=a(38),C=a(26)[localStorage.lang],j=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).componentDidMount=Object(s.a)(n.a.mark((function e(){var t,a,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("",t=null,r.name=r.props.match.params.pagename,a=Object(y.a)(C,r.name,r.props.match.params.subname),s=window.location.pathname.split("/"),i=s[s.length-1],void 0===window.location.href.split("previewId=")[1]){e.next=13;break}return e.next=9,E(localStorage.langid,a,i,window.location.href.split("previewId=")[1]);case 9:t=e.sent,r.setState({getCampaign:t}),e.next=17;break;case 13:return e.next=15,g(localStorage.langid,a,i);case 15:t=e.sent,r.setState({getCampaign:t});case 17:case"end":return e.stop()}}),e)}))),r.state={getCampaign:null},r}return Object(l.a)(a,[{key:"imageRepeater",value:function(){var e=[];if(0!==this.state.getCampaign.galleries.length)for(var t=0;t<this.state.getCampaign.galleries.length;t++)e.push(m.a.createElement("div",{className:"slide"},m.a.createElement("div",null,m.a.createElement("img",{src:this.state.getCampaign.galleries[t].imageUrl,alt:""}))));else e.push(m.a.createElement("div",{className:"slide"},m.a.createElement("div",null,m.a.createElement("img",{src:this.state.getCampaign.imageUrl,alt:""}))));return e}},{key:"loopDealers",value:function(){for(var e=this.state.getCampaign.dealers,t=[],a=0;a<e.length;a++)t.push(m.a.createElement("div",{className:"Dealer col-lg-4 float-left"},m.a.createElement("div",{className:"DealerInner"},m.a.createElement("div",{className:"imgLogo"}),m.a.createElement("div",{className:"name"},e[a].name),m.a.createElement("div",{className:"address"},e[a].address),m.a.createElement("div",{className:"phone"},e[a].phone))));return t}},{key:"render",value:function(){var e={dots:!1,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};this.props.match.url.split("/");return m.a.createElement("div",{className:"AnnouncementDetails"},null!==this.state.getCampaign?m.a.createElement("div",{className:"container animate__animated animate__fadeInRight animate__fast"},m.a.createElement(z.a,null,m.a.createElement("title",null,this.state.getCampaign.title)),m.a.createElement(f.a,e,this.imageRepeater()),m.a.createElement("div",{className:"info"},m.a.createElement("h5",null,this.state.getCampaign.title),m.a.createElement("i",null,this.state.getCampaign.newsDate)),m.a.createElement("hr",null),m.a.createElement("p",null,w()(this.state.getCampaign.body)),m.a.createElement("hr",null),m.a.createElement("div",{class:"dealers"},this.loopDealers()),m.a.createElement("hr",null),m.a.createElement(b.a,{Share:!0,data:this.state.getCampaign})):"")}}]),a}(o.Component)}}]);
//# sourceMappingURL=16.f927d347.chunk.js.map