"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[1301,49023,31263],{12716:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=n(67294),r="portfolio_section__projects_Zkdy",o="portfolio_section__project_TsFI",l="portfolio_section__project_image_J2t2",a="portfolio_section__project_title_XxVp",u="portfolio_section__project_description_Hoz7",c=function(e){return s.createElement("div",{className:"showcaseFavorite_src-pages-showcase-styles-module",style:{paddingBottom:"0px"}},s.createElement("div",{className:"container"},s.createElement("section",{className:"margin-top--lg margin-bottom--xl"},s.createElement("div",{className:r},e.photos?e.photos.map((function(e){return s.createElement("div",{key:e.title,className:o},s.createElement("div",{className:l,style:{backgroundImage:e.url,transition:"background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s",filter:"none"}}),s.createElement("div",{className:a},e.title),s.createElement("div",{className:u},e.text))})):s.createElement("p",null,"Photos is empty")))))}},36245:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var s=n(94578),r=n(67294),o="Toggler_pa2N",l="red_GTuG",a="bold_GcTT",u="Red_V2hM",c=n(74165),i=n(15861),m=(n(9669),{Bus:"Bus_plMy"}),d="BusRoutes_p9Xz",p=function(e){function t(e){var t=e.p;return r.createElement("tr",null,r.createElement("td",null,t))}return r.createElement("div",{className:d},e.polReisa>0&&"tuda"===e.dir?r.createElement("p",null,e.name,":"):r.createElement("p",null,"\u0421\u0430\u0434\u044b:"),r.createElement("table",null,r.createElement("tbody",null,e.polReisa>0&&"tuda"===e.dir?e.tudaObratno.map((function(n,s){return s<e.polReisa/2?r.createElement(t,{key:s,p:n}):null})):e.tudaObratno.map((function(n,s){return s>=e.polReisa/2?r.createElement(t,{key:s,p:n}):null})))))},h=r.memo(p),g=n(79524),f=n.p+"630905ec63e9219129583ca6c9d520b5.html",b=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).state={buses:[],selectedBus:null,normUrl:"../../../../../static/_rasp"},t.busSelectedHandler=function(e){t.setState({selectedBus:e})},t.busNormUrl=function(e){t.setState({normUrl:(0,g.Z)(e)})},t}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;function t(){return(t=(0,i.Z)((0,c.Z)().mark((function e(t){var n,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("url = "+t),n=document.createElement("div"),e.next=4,fetch(t);case 4:return e.next=6,e.sent.text();case 6:return n.innerHTML=e.sent,s=Array.from(n.querySelectorAll("p")).map((function(e){return e.innerText})),console.log("p = "+s),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}this.props.num&&(!this.state.selectedBus||this.state.selectedBus&&this.state.selectedBus.id!==this.props.num)&&(console.log("this.state.normUrl = "+this.state.normUrl),function(e){return t.apply(this,arguments)}(this.state.normUrl+""+this.props.num+".html").then((function(t){return console.log("p = "+t),e.setState({selectedBus:t})})))},n.render=function(){console.log("busLink = "+f),console.log("this.state.normUrl = "+this.state.normUrl);var e=r.createElement("p",{style:{textAlign:"center"}},"Please select a Post!");if(this.props.num&&(e=r.createElement("p",{style:{textAlign:"center"}},"Loading...!")),this.state.selectedBus){var t=this.state.selectedBus.length;console.log("length = "+t);for(var n=0,s=[],o=0;o<t;o++)/^\d/.test(this.state.selectedBus[o])&&(s[n]=this.state.selectedBus[o],n++);console.log("polReisa "+n),console.log("tudaObratno "+s);e=r.createElement("div",null,n>0?r.createElement("div",null,r.createElement("div",null,console.log("[Bus.js] REturning..."+this.state.selectedBus)),r.createElement("h1",null,this.props.num),r.createElement("div",null,r.createElement("div",{className:m.BusRoutes},r.createElement(h,{polReisa:n,dir:"tuda",name:this.props.name,tudaObratno:s}),r.createElement(h,{polReisa:n,dir:"obratno",name:this.props.name,tudaObratno:s})))):null)}return e},t}(r.Component),v=b,E=function(e){return console.log("[Buses.js] rendering..."),e.buses.map((function(e,t){return console.log(e.num),r.createElement(v,{key:t,num:e.num,name:e.name})}))},_={buses:[{id:"20210330005200",name:"\u0420\u0422\u0418",num:296},{id:"20220611183712",name:"\u0420\u0422\u0418",num:297},{id:"20210330005205",name:"\u041a\u043b\u0438\u0444\u0444\u043e\u0440\u0434",num:100},{id:"20210330005209",name:"\u041a\u043b\u0438\u0444\u0444\u043e\u0440\u0434",num:110}]},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={buses:[],showBuses:!1,changeCounter:0},n.onlyBusesHandler=function(e){console.log("Hi");var t=[];_.buses.map((function(n,s){console.log("id = "+e),console.log("bus.id = "+n.id),e===n.id&&(console.log("Sovpalo"),t[s]=n,console.log(t))})),n.setState({buses:t});n.setState({showBuses:!0})},console.log("[Toggler/index.js] constructor"),n}(0,s.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return console.log("[Toggler/index.js] getDerivedStateFromProps",e),t};var n=t.prototype;return n.componentDidMount=function(){console.log("[Toggler/index.js] componentDidMount")},n.render=function(){var e=this;console.log("[Toggler/index.js] render");var t=null,n="";this.state.showBuses&&(t=r.createElement(E,{buses:this.state.buses}),n=u);var s=[];return this.state.buses.length<=2&&s.push(l),this.state.buses.length<=1&&s.push(a),r.createElement("div",{className:o},r.createElement("h1",null,"Hi, I'm a React app!"),r.createElement("p",{className:s.join(" ")},"This is really working!"),_.buses.map((function(t,s){return r.createElement("button",{key:s,className:n,onClick:function(){e.onlyBusesHandler(t.id)}},t.num)})),t)},t}(r.Component),x=y},8501:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=n(67294),r=n(2075),o=n(12716),l=n(27673),a=n(36245),u=[{url:'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',title:"Serverless",text:"\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u0410\u043b\u0438\u0441\u044b \u043d\u0430 \u0431\u0430\u0437\u0435 Yandex Cloud Functions"},{url:'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',title:"Kubernetes\xae",text:"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Yandex Managed Service for Kubernetes\xae"},{url:'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',title:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",text:s.createElement("div",null,"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c ",s.createElement("b",null,"\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b")," \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0431\u043b\u0430\u043a\u0435")}];function c(){return s.createElement(r.Z,null,s.createElement(o.default,{photos:u}),s.createElement("div",{style:{maxWidth:"700px",margin:"auto"}},s.createElement(l.Z,{language:"jsx",title:"/src/components/HelloCodeTitle.js",showLineNumbers:!0},"function HelloCodeTitle(props) {\n          return <h1>Hello, {props.name}</h1>;\n        }"),s.createElement(a.default,null)))}},54278:function(e,t,n){n.d(t,{Z:function(){return a}});var s={};n.r(s),n.d(s,{ButtonExample:function(){return l}});var r=n(67294),o=n(87462),l=function(e){return r.createElement("button",(0,o.Z)({},e,{style:Object.assign({border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))},a=Object.assign({React:r},r,s)}}]);