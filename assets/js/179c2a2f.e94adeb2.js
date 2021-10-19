"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[24910],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61794:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"8-05-planing-state",title:"8.05 Planing State",date:new Date("2021-04-09T17:17:42.000Z")},p=void 0,u={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-05-planing-state",id:"react-complete-guide/08-real-app-burger-builder/8-05-planing-state",isDocsHomePage:!1,title:"8.05 Planing State",description:"Where manage state",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-05-planing-state.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-05-planing-state",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-05-planing-state",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-05-planing-state.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-05-planing-state",title:"8.05 Planing State",date:"2021-04-09T17:17:42.000Z"},sidebar:"Docs",previous:{title:"8.04 Planning App Layout And Component Tree",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-04-planning-app-layout-and-component-tree"},next:{title:"8.06 Must Read Enabling Css Module",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module"}},c=[{value:"Where manage state",id:"where-manage-state",children:[]}],s={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(44446).Z})),(0,o.kt)("h2",{id:"where-manage-state"},"Where manage state"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99573).Z})),(0,o.kt)("p",null,"So the ",(0,o.kt)("inlineCode",{parentName:"p"},"BurgerBuilder")," should be a ",(0,o.kt)("strong",{parentName:"p"},"stateful")," component."),(0,o.kt)("p",null,"Why? Because the state I listed here on the right is really just related to building a burger, if we later add a new check out page or something like that, then we will basically have a page where we want to see all orders of the user, and we're not interested of the ingredients of the burger the user currently builds."),(0,o.kt)("p",null,"All other components can be dumb components, ",(0,o.kt)("inlineCode",{parentName:"p"},"stateless")," components."),(0,o.kt)("p",null,"Now the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component by default in the new project is a ",(0,o.kt)("inlineCode",{parentName:"p"},"stateful")," one, created with the class keyword. We can of course always leave it to be one, but we can also turn it into a dumb component if we wanted to."),(0,o.kt)("p",null,"Now if we're thinking about ",(0,o.kt)("inlineCode",{parentName:"p"},"pureComponents")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),", we'll both as a rule implement this as we built the application and see if we can identify some places where we need to optimize our update cycle. But due to the simplicity of our state and the structure of our application here, it might also be the case that we never need to implement pure component because we know that if the state or some props changes, it did really change, that we don't have a button which might just set the state to something it was already at."))}d.isMDXComponent=!0},99573:function(e,t,n){t.Z=n.p+"assets/images/manage-state-in-burger-builder-1a2e87c6160e827a7db89bc89d90d601.png"},44446:function(e,t,n){t.Z=n.p+"assets/images/state-890d7a4b6bc441ac0a30424d13423255.png"}}]);