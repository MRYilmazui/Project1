(this.webpackJsonpmercedes=this.webpackJsonpmercedes||[]).push([[14],{168:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(18),i=a(19),r=a(21),s=a(20),c=a(0),l=a.n(c),o=(a(169),a(153)),m=a.n(o),u=a(22),d=a(155),p=a.n(d),h=a(24),f=h[localStorage.lang],g=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={},i}return Object(i.a)(a,[{key:"NewsSliderBuild",value:function(){for(var e=[],t=0;t<this.props.data.length;t++)e.push(l.a.createElement("div",{className:"announcement"},l.a.createElement("img",{src:this.props.data[t].imageUrl,alt:""}),l.a.createElement("h5",null,this.props.data[t].title),l.a.createElement("p",null,p()(this.props.data[t].body)),l.a.createElement(u.b,{activeClassName:"active",to:"/"+f[6].mainurl.title[0]+"/"+f[6].mainurl.title[1]+"/"+this.props.data[t].routeValue},"Detaylar")));return e}},{key:"render",value:function(){var e={dots:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,centerPadding:"20px"};return l.a.createElement("div",{className:"AnnouncementSummary"},l.a.createElement("h3",null,"News & Announcements"),l.a.createElement("i",{className:"title-desc"},"Press releases and statements"),l.a.createElement("div",{className:"announcements"},l.a.createElement(m.a,e,this.NewsSliderBuild())))}}]),a}(c.Component)},169:function(e,t,a){},175:function(e,t){},280:function(e,t,a){e.exports=a.p+"static/media/slide-img.a9a01ae7.png"},281:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(9),i=a.n(n),r=a(15),s=(a(131),a(34)),c=a.n(s),l=a(23);function o(e){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(l.a).concat(l.k),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t}}).then((function(e){return e.data})).catch((function(e){return null}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},672:function(e,t,a){},673:function(e,t,a){e.exports=a.p+"static/media/img7.a00db99c.png"},689:function(e,t,a){},690:function(e,t,a){},691:function(e,t,a){e.exports=a.p+"static/media/img3.4280d9a1.png"},692:function(e,t,a){e.exports=a.p+"static/media/img4.93ac3a68.png"},695:function(e,t,a){},887:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var n=a(9),i=a.n(n),r=a(15),s=a(18),c=a(19),l=a(21),o=a(20),m=a(0),u=a.n(m),d=(a(672),a(280),a(673),a(153)),p=a.n(d),h=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={oldSlide:0,activeSlide:0,activeSlide2:0},n}return Object(c.a)(a,[{key:"sliderBuild",value:function(){for(var e=[],t=0;t<this.props.data.length;t++)null===this.props.data[t].videoUrl?e.push(u.a.createElement("div",null,u.a.createElement("img",{src:this.props.data[t].imageUrl,alt:""}),u.a.createElement("div",{className:"desc"},u.a.createElement("div",{className:"title"},this.props.data[t].title),u.a.createElement("p",null,this.props.data[t].description)))):e.push(u.a.createElement("div",null,u.a.createElement("iframe",{width:"100%",src:this.props.data[t].videoUrl+"?modestbranding=1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})));return e}},{key:"render",value:function(){var e=this,t={dots:!1,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,draggable:!1,focusOnSelect:!1,adaptiveHeight:!0,touchMove:!1,beforeChange:function(t,a){return e.setState({oldSlide:t,activeSlide:a})},afterChange:function(t){return e.setState({activeSlide2:t})}};return u.a.createElement("div",{className:"SliderComp animate__animated animate__fadeIn animate__fast star"},u.a.createElement("div",{className:"blurbg",style:{background:"url("+this.props.data[this.state.activeSlide2].imageUrl+")"}}),u.a.createElement("div",{className:"container "},u.a.createElement(p.a,t,this.sliderBuild())))}}]),a}(m.Component),f=(a(689),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"MainCategories"},u.a.createElement("div",{className:"category col-lg-6 float-left pl-0 pr-0"},u.a.createElement("a",{href:this.props.data.sectionTwoLeftRedirectUrl},u.a.createElement("img",{src:this.props.data.sectionTwoLeftImageUrl,alt:""}),u.a.createElement("span",{className:"categories-title"},u.a.createElement("i",null,this.props.data.sectionTwoLeftTitle)))),u.a.createElement("div",{className:"category col-lg-6 float-left pl-0 pr-0"},u.a.createElement("a",{href:this.props.data.sectionTwoRightRedirectUrl},u.a.createElement("img",{src:this.props.data.sectionTwoRightImageUrl,alt:""}),u.a.createElement("span",{className:"categories-title"},u.a.createElement("i",null,this.props.data.sectionTwoRightTitle)))))}}]),a}(m.Component)),g=(a(690),a(691),a(692),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"MainPosts"},u.a.createElement("a",{href:this.props.data.sectionThreeLeftRedirectUrl,className:"col-lg-6 float-left pl-0"},u.a.createElement("img",{src:this.props.data.sectionThreeLeftImageUrl,alt:""}),u.a.createElement("span",{className:"post-title"},u.a.createElement("i",null,this.props.data.sectionThreeLeftTitle)),u.a.createElement("p",{className:"post-desc"},this.props.data.sectionThreeLeftDescription)),u.a.createElement("a",{href:this.props.data.sectionThreeRightRedirectUrl,className:"col-lg-6 float-left pl-0"},u.a.createElement("img",{src:this.props.data.sectionThreeRightImageUrl,alt:""}),u.a.createElement("span",{className:"post-title"},u.a.createElement("i",null,this.props.data.sectionThreeRightTitle)),u.a.createElement("p",{className:"post-desc"},this.props.data.sectionThreeRightDescription)))}}]),a}(m.Component)),v=a(168),E=a(196),b=a(155),S=a.n(b),N=a(281),w=(a(131),a(34)),O=a.n(w),P=a(23);function T(e,t){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(P.a).concat(P.l),{headers:{"Content-Type":"application/json; charset=utf-8","Ocp-Apim-Subscription-Key":"e7dff51e117448e1a56e301912d70d83","Ocp-Apim-Trace":"true"},params:{languageId:t,previewId:a}}).then((function(e){return e.data})).catch((function(e){return null}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=a(22),_=(a(12),a(695),a(37)[localStorage.lang]),M=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===window.location.href.split("previewId=")[1]){e.next=7;break}return e.next=3,T(localStorage.langid,window.location.href.split("previewId=")[1]);case 3:t=e.sent,n.setState({GetMainPage:t}),e.next=12;break;case 7:return e.next=9,Object(N.a)(localStorage.langid);case 9:a=e.sent,n.setState({GetMainPage:a}),window.addEventListener("storage",function(){var e=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)(localStorage.langid);case 2:a=e.sent,this.setState({GetMainPage:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}());case 12:case"end":return e.stop()}}),e)}))),n.componentDidUpdate=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)(localStorage.langid);case 2:t=e.sent,n.setState({GetMainPage:t}),n.state.GetMainPage.mainPageSections.id!==t.mainPageSections.id&&n.setState({GetMainPage:t});case 5:case"end":return e.stop()}}),e)}))),n.state={GetMainPage:null,content:null},n}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"Homepage"},null!==this.state.GetMainPage?u.a.createElement("div",null,u.a.createElement(E.a,null,u.a.createElement("title",null,"Anasayfa")),u.a.createElement(h,{data:this.state.GetMainPage.slider}),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"aboutus animate__animated  star animate__fast star"},u.a.createElement("h3",null,this.state.GetMainPage.mainPageSections.sectionOneTitle),u.a.createElement("i",{className:"title-desc"},this.state.GetMainPage.mainPageSections.sectionOneSubTitle),u.a.createElement("p",{className:"col-lg-6 pl-0 pr-0"},S()(this.state.GetMainPage.mainPageSections.sectionOneBody)))),u.a.createElement("div",{className:"main-categories animate__animated star animate__fast star"},u.a.createElement(f,{data:this.state.GetMainPage.mainPageSections})),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"mainposts animate__animated star animate__fast star"},u.a.createElement("h3",null,this.state.GetMainPage.mainPageSections.sectionThreeTitle),u.a.createElement("i",{className:"title-desc"},this.state.GetMainPage.mainPageSections.sectionThreeDescription),u.a.createElement(g,{data:this.state.GetMainPage.mainPageSections}))),u.a.createElement("div",{className:"mainmap animate__animated star animate__fast star"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("h3",null,this.state.GetMainPage.mainPageSections.dealerTitle),u.a.createElement("i",{className:"title-desc"},this.state.GetMainPage.mainPageSections.dealerSubTitle),u.a.createElement("p",null,this.state.GetMainPage.mainPageSections.dealerDescription),u.a.createElement(y.b,{to:"/"+_.mainurl.title[5]},"Lokasyonlara g\xf6zat")))),u.a.createElement("div",{className:"announcementslider animate__animated star animate__fast star"},u.a.createElement("div",{className:"container"},u.a.createElement(v.a,{data:this.state.GetMainPage.news})))):"")}}]),a}(m.Component)}}]);
//# sourceMappingURL=14.940ddb23.chunk.js.map