"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[6046],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(37358),l=n(98448),u=["components"],c={id:"11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",date:new Date("2021-04-14T20:24:07.000Z")},s=void 0,p={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",isDocsHomePage:!1,title:"11.04 Setting Up Router Package",description:"Installing react-router and react-router-dom",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",date:"2021-04-14T20:24:07.000Z"},sidebar:"Docs",previous:{title:"11.03 Setting Up Links",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links"},next:{title:"11.05 React Router Vs React Router Dom",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-05-react-router-vs-react-router-dom"}},d=[{value:"Installing <code>react-router</code> and <code>react-router-dom</code>",id:"installing-react-router-and-react-router-dom",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"<code>App.js</code>",id:"appjs",children:[]}],m={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-react-router-and-react-router-dom"},"Installing ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-router")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-router-dom")),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-router react-router-dom\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-router react-router-dom\n")))),(0,o.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nsrc/\n\u2502\n\u251c\u2500\u2500 components/\n\u2502       \u2514\u2500\u2500 Post/\n\u2502             \u251c\u2500\u2500 Post.css\n\u2502             \u2514\u2500\u2500 Post.js\n\u2502\n\u251c\u2500\u2500 containers/\n\u2502        \u2514\u2500\u2500 Blog/\n\u2502              \u251c\u2500\u2500 FullPost\n\u2502              \u2502      \u251c\u2500\u2500 FullPost.css\n\u2502              \u2502      \u2514\u2500\u2500 FullPost.js\n\u2502              \u251c\u2500\u2500 NewPost\n\u2502              \u2502      \u251c\u2500\u2500 NewPost.css\n\u2502              \u2502      \u2514\u2500\u2500 NewPost.js\n\u2502              \u251c\u2500\u2500 Posts\n\u2502              \u2502     \u2514\u2500\u2500 Post.js\n\u2502              \u251c\u2500\u2500 Blog.css\n\u2502              \u2514\u2500\u2500 Blog.js\n\u2502\n\u251c\u2500\u2500 axios.js\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.css\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 index.css\n\u2502\n")),(0,o.kt)("h2",{id:"appjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"First of all need to enable routing in our react app, we do this in the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," file. There you now need to wrap the part which should be able to render routes and to read routes, you need to wrap it with a component you import from the react-router-dom package."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,8,12}',title:'"App.js"',"{2,8,12}":!0},'import React, { Component } from "react";\nimport { BrowserRouter } from "react-router-dom";\nimport Blog from "./containers/Blog/Blog";\n\nclass App extends Component {\n  render() {\n    return (\n      <BrowserRouter>\n        <div className="App">\n          <Blog />\n        </div>\n      </BrowserRouter>\n    );\n  }\n}\n\nexport default App;\n')))}g.isMDXComponent=!0},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(22713);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,s=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),g=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),h=v.tabGroupChoices,b=v.setTabGroupChoices,k=(0,r.useState)(f),y=k[0],w=k[1],N=[];if(null!=p){var j=h[p];null!=j&&j!==y&&g.some((function(e){return e.value===j}))&&w(j)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=g[n].value;w(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:P,onClick:P},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r}}]);