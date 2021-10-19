"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[92690],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(b,c(c({ref:t},l),{},{components:r})):a.createElement(b,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92813:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),c=["components"],o={id:"10-02-firebase-and-right-database",title:"10.02 Firebase And Right Database",date:new Date("2021-04-13T19:46:34.000Z")},s=void 0,u={unversionedId:"react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database",id:"react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database",isDocsHomePage:!1,title:"10.02 Firebase And Right Database",description:"The Firebase Database console - which we'll see in the next lecture - changed visually.",source:"@site/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database.md",sourceDirName:"react-complete-guide/10-burger-builder-project-accessing-server",slug:"/react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"10-02-firebase-and-right-database",title:"10.02 Firebase And Right Database",date:"2021-04-13T19:46:34.000Z"},sidebar:"Docs",previous:{title:"10.0 Lesson",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson"},next:{title:"10.03 Creating Firebase Project",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Firebase Database console - which we'll see in the next lecture - changed visually."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Important:"),"\xa0Make sure you pick the ",(0,i.kt)("strong",{parentName:"p"},"Realtime Database"),", NOT Firestore!"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://udemy-images.s3.amazonaws.com:443/redactor/raw/2018-07-24_04-49-02-c41a7b68eafee498dfd8fba88ad4adc8.png",alt:null})))}d.isMDXComponent=!0}}]);