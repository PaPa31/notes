"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[1301,49023,31263,98494],{12716:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294);const s="portfolio_section__projects_Zkdy",l="portfolio_section__project_TsFI",o="portfolio_section__project_image_J2t2",r="portfolio_section__project_title_XxVp",i="portfolio_section__project_description_Hoz7",c=e=>a.createElement("div",{className:"showcaseFavorite_src-pages-showcase-styles-module",style:{paddingBottom:"0px"}},a.createElement("div",{className:"container"},a.createElement("section",{className:"margin-top--lg margin-bottom--xl"},a.createElement("div",{className:s},e.photos?e.photos.map((e=>a.createElement("div",{key:e.title,className:l},a.createElement("div",{className:o,style:{backgroundImage:e.url,transition:"background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s",filter:"none"}}),a.createElement("div",{className:r},e.title),a.createElement("div",{className:i},e.text)))):a.createElement("p",null,"Photos is empty")))))},77780:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294);function s(e,t,n,a){let s=new Date(e,t,0);s.setHours(0,0,0,0);const l=7*n+a-s.getDay()-(s.getDay()<a?7:0);return s.setDate(s.getDate()+l),s.getDate()}function l(e,t){let n=[];if(10==t){const l={holiday:"Singles' Day",description:'"Bare sticks (11/11) holiday". Established in 1993 by Chinese students. \nIn 2009, Alibaba began promoting it as a shopping holiday.'};n[10]=a.createElement("abbr",{title:l.description},l.holiday);const o=s(e,t,4,4)+1,r={holiday:"Black Friday",description:'USA. "Shopping Disaster Day". \nFriday after Thanksgiving.'};n[o-1]=a.createElement("abbr",{title:r.description},r.holiday);const i=o+3;if(i<=30){const e={holiday:"Cyber Monday",description:"USA, 2005. A marketing slogan designed to persuade people to shop online. \nMonday after Thanksgiving."};n[i-1]=a.createElement("abbr",{title:e.description},e.holiday)}}if(11==t){const l=s(e,t-1,4,4)+1+3;if(l>30){const e={holiday:"Cyber Monday",description:"USA, 2005. A marketing slogan designed to persuade people to shop online. \nMonday after Thanksgiving."};n[l-31]=a.createElement("abbr",{title:e.description},e.holiday)}const o={holiday:"Green Monday",description:'USA, 2007. "At least 10 days prior to Christmas". \nCoined by eBay as the last day for a timely purchase. \nUsually the second Monday of December.'};n[s(e,t,2,1)-1]=a.createElement("abbr",{title:o.description},o.holiday);const r=function(e,t,n,a){void 0===a&&(a=0);let s=new Date(e,t,a);return s.setDate(s.getDate()-(s.getDay()+7-n)%7),s.getDate()}(e,t,6,24),i={holiday:"Super Saturday",description:"USA. Or Panic Saturday. The end of the sales season. \nIt's targets last-minute buyers. Last Saturday before Christmas."};n[r-1]=a.createElement("abbr",{title:i.description},i.holiday)}return n}const o=a.memo((e=>{const t=new Date(e._year,e._month,0).getDate(),n=e._month-1,s=new Date(e._year,n,10).toLocaleString("default",{month:"long"});let o=new Date(e._year,n,1).getDay();0===o&&(o=7);let r=0;const i=l(e._year,n);return a.createElement("div",{className:"month_card"},a.createElement("h4",null,s),a.createElement("table",{className:"month"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Monday"),a.createElement("th",null,"Tuesday"),a.createElement("th",null,"Wednesday"),a.createElement("th",null,"Thursday"),a.createElement("th",null,"Friday"),a.createElement("th",null,"Saturday"),a.createElement("th",null,"Sunday"))),a.createElement("tbody",null,Array.from({length:6}).map(((e,n)=>r<t?a.createElement("tr",{key:n},Array.from({length:7}).map(((e,s)=>n>0&&r<t||0==n&&s>=o-1?a.createElement("td",{key:s,className:"mc",style:i[r]?{backgroundColor:"var(--month-calendar-holiday-bg)"}:void 0},a.createElement("span",null,r+=1),i[r-1]):a.createElement("td",{key:s})))):null)))))}),((e,t)=>e.props===t.props))},85003:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(67294);const s="Toggler_pa2N",l="red_GTuG",o="bold_GcTT",r="Red_V2hM";n(9669);const i={Bus:"Bus_plMy"},c="BusRoutes_p9Xz",d=e=>{function t(e){let{p:t}=e;return a.createElement("tr",null,a.createElement("td",null,t))}return a.createElement("div",{className:c},e.polReisa>0&&"tuda"===e.dir?a.createElement("p",null,e.name,":"):a.createElement("p",null,"\u0421\u0430\u0434\u044b:"),a.createElement("table",null,a.createElement("tbody",null,e.polReisa>0&&"tuda"===e.dir?e.tudaObratno.map(((n,s)=>s<e.polReisa/2?a.createElement(t,{key:s,p:n}):null)):e.tudaObratno.map(((n,s)=>s>=e.polReisa/2?a.createElement(t,{key:s,p:n}):null)))))},u=a.memo(d);class m extends a.Component{constructor(){super(...arguments),this.state={buses:[],selectedBus:null,normUrl:"https://raw.githubusercontent.com/PaPa31/hm/documentation/static/_rasp"}}componentDidMount(){this.props.num&&(!this.state.selectedBus||this.state.selectedBus&&this.state.selectedBus.id!==this.props.num)&&async function(e){let t=(await(await fetch(e)).text()).match(/<p.*/g).map((e=>e.replace(/.*>([^<\r]*)<.*/g,"$1").trim()));return console.log("p = "+t),t}(this.state.normUrl+`${this.props.num}.html`).then((e=>this.setState({selectedBus:e})))}render(){let e=a.createElement("p",{style:{textAlign:"center"}},"Please select a Post!");if(this.props.num&&(e=a.createElement("p",{style:{textAlign:"center"}},"Loading...!")),this.state.selectedBus){const t=this.state.selectedBus.length;console.log("length = "+t);let n=0,s=[];for(let e=0;e<t;e++)/^\d/.test(this.state.selectedBus[e])&&(s[n]=this.state.selectedBus[e],n++);console.log("polReisa "+n),console.log("tudaObratno "+s);e=a.createElement("div",null,n>0?a.createElement("div",null,a.createElement("div",null,console.log("[Bus.js] REturning..."+this.state.selectedBus)),a.createElement("h1",null,this.props.num),a.createElement("div",null,a.createElement("div",{className:i.BusRoutes},a.createElement(u,{polReisa:n,dir:"tuda",name:this.props.name,tudaObratno:s}),a.createElement(u,{polReisa:n,dir:"obratno",name:this.props.name,tudaObratno:s})))):null)}return e}}const p=m,h=e=>(console.log("[Buses.js] rendering..."),e.buses.map(((e,t)=>(console.log(e.num),a.createElement(p,{key:t,num:e.num,name:e.name}))))),g={buses:[{id:"20210330005200",name:"\u041a\u043b\u0438\u0444\u0444\u043e\u0440\u0434",num:296},{id:"20220611183712",name:"\u0420\u0422\u0418",num:297},{id:"20210330005205",name:"\u041a\u043b\u0438\u0444\u0444\u043e\u0440\u0434",num:100},{id:"20210330005209",name:"\u041a\u043b\u0438\u0444\u0444\u043e\u0440\u0434",num:110}]};class y extends a.Component{constructor(e){super(e),this.state={buses:[],showBuses:!1,changeCounter:0},this.onlyBusesHandler=e=>{console.log("Hi");const t=[];g.buses.map(((n,a)=>{console.log("id = "+e),console.log("bus.id = "+n.id),e===n.id&&(console.log("Sovpalo"),t[a]=n,console.log(t))})),this.setState({buses:t});this.setState({showBuses:!0})},console.log("[Toggler/index.js] constructor")}static getDerivedStateFromProps(e,t){return console.log("[Toggler/index.js] getDerivedStateFromProps",e),t}componentDidMount(){console.log("[Toggler/index.js] componentDidMount")}render(){console.log("[Toggler/index.js] render");let e=null,t="";this.state.showBuses&&(e=a.createElement(h,{buses:this.state.buses}),t=r);const n=[];return this.state.buses.length<=2&&n.push(l),this.state.buses.length<=1&&n.push(o),a.createElement("div",{className:s},a.createElement("h1",null,"Hi, I'm a React app!"),a.createElement("p",{className:n.join(" ")},"This is really working!"),g.buses.map(((e,n)=>a.createElement("button",{key:n,className:t,onClick:()=>{this.onlyBusesHandler(e.id)}},e.num))),e)}}const E=y},8501:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(67294),s=n(74214),l=n(12716),o=n(46002),r=n(85003),i=n(77780);const c=[{url:'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',title:"Serverless",text:"\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u0410\u043b\u0438\u0441\u044b \u043d\u0430 \u0431\u0430\u0437\u0435 Yandex Cloud Functions"},{url:'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',title:"Kubernetes\xae",text:"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Yandex Managed Service for Kubernetes\xae"},{url:'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',title:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",text:a.createElement("div",null,"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c ",a.createElement("b",null,"\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b")," \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0431\u043b\u0430\u043a\u0435")}];function d(){return a.createElement(s.Z,null,a.createElement(l.default,{photos:c}),a.createElement("div",{style:{maxWidth:"700px",margin:"auto"}},a.createElement(o.Z,{language:"jsx",title:"/src/components/HelloCodeTitle.js",showLineNumbers:!0},"function HelloCodeTitle(props) {\n          return <h1>Hello, {props.name}</h1>;\n        }"),a.createElement("div",{style:{display:"inline-block"}},a.createElement(r.default,null)),a.createElement("h3",null,(new Date).getFullYear()),a.createElement(i.default,{_year:(new Date).getFullYear(),_month:11})))}},54278:(e,t,n)=>{n.d(t,{Z:()=>r});var a={};n.r(a),n.d(a,{ButtonExample:()=>o});var s=n(67294),l=n(87462);const o=e=>s.createElement("button",(0,l.Z)({},e,{style:{border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})),r={React:s,...s,...a}}}]);