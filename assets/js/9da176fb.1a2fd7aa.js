"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[37525],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98448:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},37358:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),a=t(22713);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var n,t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,g=o(),h=g.tabGroupChoices,b=g.setTabGroupChoices,y=(0,r.useState)(v),x=y[0],k=y[1],w=[];if(null!=p){var j=h[p];null!=j&&j!==x&&f.some((function(e){return e.value===j}))&&k(j)}var O=function(e){var n=e.currentTarget,t=w.indexOf(n),r=f[t].value;k(r),null!=p&&(b(p,r),setTimeout((function(){var e,t,r,a,o,s,i,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,t>=0&&o<=c&&a<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":x===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:O,onClick:O},null!=t?t:n)}))),t?(0,r.cloneElement)(d.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}},22713:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},95089:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=t(37358),i=t(98448),l=["components"],c={id:"classes",title:"React Classes",date:new Date("2021-03-04T22:00:28.000Z"),description:"Two versions of React sintax in classes"},u=void 0,p={unversionedId:"javascript/next-generation/classes",id:"javascript/next-generation/classes",isDocsHomePage:!1,title:"React Classes",description:"Two versions of React sintax in classes",source:"@site/docs/javascript/next-generation/classes.mdx",sourceDirName:"javascript/next-generation",slug:"/javascript/next-generation/classes",permalink:"/hm/docs/javascript/next-generation/classes",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/javascript/next-generation/classes.mdx",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1615444882,formattedLastUpdatedAt:"3/11/2021",frontMatter:{id:"classes",title:"React Classes",date:"2021-03-04T22:00:28.000Z",description:"Two versions of React sintax in classes"},sidebar:"Docs",previous:{title:"Arrow Functions",permalink:"/hm/docs/javascript/next-generation/arrow-functions"},next:{title:"Var & Let & Const",permalink:"/hm/docs/javascript/next-generation/var-let-const"}},m=[],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{defaultValue:"es6",values:[{label:"ES6",value:"es6"},{label:"ES7",value:"es7"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"es6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Human {\n  constructor() {\n    this.gender = 'male'\n  }\n\n  printGender() {\n    console.log(this.gender)\n  }\n}\n\nclass Person extends Human {\n  constructor() {\n    super()\n    this.name = 'Max'\n    this.gender = 'female'\n  }\n  \n  printMyName() {\n    console.log(this.name)\n  }\n}\n\nconst person = new Person()\nperson.printMyName()\nperson.printGender()\n"))),(0,o.kt)(i.Z,{value:"es7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Human {\n  gender = 'male'\n\n  printGender = () => console.log(this.gender)\n}\n\nclass Person extends Human {\n  name = 'Max'\n  gender = 'female'\n  \n  printMyName = () => console.log(this.name)\n}\n\nconst person = new Person()\nperson.printMyName()\nperson.printGender()\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ES6: ",(0,o.kt)("a",{parentName:"li",href:"https://jsbin.com/detitiv/edit?js,console"},"Try it on jsbin")),(0,o.kt)("li",{parentName:"ul"},"ES7: ",(0,o.kt)("a",{parentName:"li",href:"https://jsbin.com/wojayum/edit?js,console"},"Try it on jsbin"))),(0,o.kt)("p",null,"As you can see the Docusaurus ",(0,o.kt)("inlineCode",{parentName:"p"},"live editor")," works fine with ",(0,o.kt)("inlineCode",{parentName:"p"},"es6")," standard. About restrictions of arrow function read ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",class:"external"},"developer.mozilla.org"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class Person extends React.Component {\n  constructor(){\n    this.name = 'MAx'\n    this.gender = 'female'\n\n    printGender = () => this.gender\n  }\n\n  render() {\n    return (\n      <div>\n        <h2>It is {this.name}</h2>\n        <h3>{printGender()}</h3>\n      </div>\n    );\n  }\n}\n")))}f.isMDXComponent=!0}}]);