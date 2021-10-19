"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[29419],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39471:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],i={id:"7-09-component-update-lifecycle-state-changes",title:"7.09 Component Update Lifecycle State Changes",date:new Date("2021-04-07T19:50:48.000Z")},p=void 0,l={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes",isDocsHomePage:!1,title:"7.09 Component Update Lifecycle State Changes",description:'`jsx title="App.js" {}',source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-09-component-update-lifecycle-state-changes",title:"7.09 Component Update Lifecycle State Changes",date:"2021-04-07T19:50:48.000Z"},sidebar:"Docs",previous:{title:"7.08.1 Component Update Lifecycle In Action",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action"},next:{title:"7.10 Using useEffect In Functional Components",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components"}},s=[],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {}',title:'"App.js"',"{}":!0},'...\n  shouldComponentUpdate(nextProps, nextState) {\n    console.log("[App.js] shouldComponentUpdate");\n    return true;\n  }\n  componentDidUpdate() {\n    console.log("[App.js] componentDidUpdate");\n  }\n...\n')))}d.isMDXComponent=!0}}]);