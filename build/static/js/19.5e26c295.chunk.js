(this.webpackJsonpmercedes=this.webpackJsonpmercedes||[]).push([[19],{254:function(e,a,t){},287:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(9),l=t.n(n),c=t(15),r=t(18),i=t(19),s=t(21),u=t(20),o=t(0),m=t.n(o),d=t(22),v=m.a.createContext(),h=(v.Provider,v.Consumer,m.a.createContext()),f=(h.Provider,h.Consumer,t(31),t(254),t(23)[localStorage.lang]),g=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).componentDidMount=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),n.state={displayMenu:"",Categories:null,Loader:!1},n}return Object(i.a)(t,[{key:"triggerNavigation",value:function(){""==this.state.displayMenu?this.setState({displayMenu:" d-block"}):this.setState({displayMenu:""})}},{key:"imageRepeater",value:function(){var e=[];if(0!==this.state.content.galleries.length)for(var a=0;a<this.state.content.galleries.length;a++)e.push(m.a.createElement("div",{className:"slide"},m.a.createElement("div",null,m.a.createElement("img",{src:this.state.content.galleries[a].imageUrl,alt:""}))));else e.push(m.a.createElement("div",{className:"slide"},m.a.createElement("div",null,m.a.createElement("img",{src:this.state.content.imageUrl,alt:""}))));return e}},{key:"menuSubSubBuild",value:function(e){for(var a=[],t=0;t<e.length;t++)null!==e[t].sub?a.push(m.a.createElement("div",null,m.a.createElement(d.b,{activeClassName:"active",to:e[t].link},e[t].name),m.a.createElement("div",{className:"dropdown-list"},this.menuSubSubSubBuild(e[t].sub)))):a.push(m.a.createElement(d.b,{activeClassName:"active",to:e[t].link},e[t].name));return a}},{key:"menuSubSubSubBuild",value:function(e){for(var a=[],t=0;t<e.length;t++)a.push(m.a.createElement(d.b,{activeClassName:"active",key:t,to:e[t].link},e[t].name));return a}},{key:"menuSubBuild",value:function(e){for(var a=[],t=0;t<e.length;t++)null!==e[t].sub?a.push(m.a.createElement("div",null,m.a.createElement(d.b,{activeClassName:"active",exact:!0,key:t,to:e[t].link},e[t].name),m.a.createElement("div",{className:"dropdown-list"},this.menuSubSubBuild(e[t].sub)))):a.push(m.a.createElement(d.b,{activeClassName:"active",exact:!0,to:e[t].link},e[t].name));return a}},{key:"menuBuildFunction",value:function(e){for(var a=[],t=0;t<f.length-1;t++)"/"===f[t].link?a.push(m.a.createElement(d.b,{activeClassName:"active",exact:!0,to:f[t].link},f[t].name)):null!==f[t].sub?a.push(m.a.createElement("div",{className:"dropdown-item-list"},m.a.createElement(d.b,{activeClassName:"active",key:t,to:f[t].link},f[t].name),m.a.createElement("div",{className:"dropdown-list"},this.menuSubBuild(f[t].sub)))):a.push(m.a.createElement(d.b,{activeClassName:"active",to:f[t].link},f[t].name));return a}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"Menu"},m.a.createElement("button",{className:"menuNavButton",onClick:function(){return e.triggerNavigation()}}),m.a.createElement("nav",{className:this.state.displayMenu},this.menuBuildFunction()))}}]),t}(o.Component)},368:function(e,a,t){},369:function(e,a,t){},370:function(e,a,t){},886:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(18),l=t(19),c=t(21),r=t(20),i=t(0),s=t.n(i),u=t(287),o=t(38),m=t(37),d=(t(368),m[localStorage.lang]),v=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).keyDownEnter=function(e){"Enter"===e.key&&(window.location.pathname="/"+d.mainurl.title[6]+"&="+l.state.searchValue)},l.state={displaySearch:"d-none",searchValue:""},l.handleChange=l.handleChange.bind(Object(o.a)(l)),l}return Object(l.a)(t,[{key:"clickableSearch",value:function(e){""==this.state.displaySearch?this.setState({displaySearch:" d-none"}):this.setState({displaySearch:""})}},{key:"handleChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Search"},s.a.createElement("a",{href:"javascript:void(0)",className:"search-icon",onClick:function(){return e.clickableSearch()}}),s.a.createElement("div",{className:"search-details "+this.state.displaySearch},s.a.createElement("div",{className:"search-input"},s.a.createElement("input",{type:"text",name:"",id:"",value:this.state.searchValue,onChange:this.handleChange,onKeyDown:this.keyDownEnter})),s.a.createElement("div",{className:"overlay",onClick:function(){return e.clickableSearch()}})))}}]),t}(i.Component),h=t(9),f=t.n(h),g=t(15),b=(t(369),t(30),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).componentDidMount=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),l.state={GetLanguageState:null},l}return Object(l.a)(t,[{key:"updateLang",value:function(e,a){localStorage.lang=e,localStorage.langid=a,window.location.pathname="/"}},{key:"loadLanguage",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Language"},s.a.createElement("a",{href:"javascript:void(0)",className:"tr"+("tr"===localStorage.lang?"tr active":" "),onClick:function(){return e.updateLang("tr",localStorage.langid)}},"TR"),s.a.createElement("a",{href:"javascript:void(0)",className:"en"+("en"===localStorage.lang?"en active":" "),onClick:function(){return e.updateLang("en",localStorage.langid)}},"EN"))}}]),t}(i.Component)),p=(t(370),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Header"},s.a.createElement("div",{className:"logo-section"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{href:"/",className:"mercedes-logo"}),s.a.createElement("a",{href:"/",className:"mercedes-turk"}))),s.a.createElement("div",{className:"Menu"},s.a.createElement("div",{className:"container"},s.a.createElement(u.a,null),s.a.createElement(b,null),s.a.createElement(v,null))))}}]),t}(i.Component))}}]);
//# sourceMappingURL=19.5e26c295.chunk.js.map