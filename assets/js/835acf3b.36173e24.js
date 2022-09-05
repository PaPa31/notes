"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[36779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=c,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),c=(r(67294),r(3905));const a={id:"14-13-switching-case-in-reducer",title:"14.13 Switching Case In Reducer",date:new Date("2021-04-24T20:46:44.000Z")},i=void 0,o={unversionedId:"react-complete-guide/14-redux/14-13-switching-case-in-reducer",id:"react-complete-guide/14-redux/14-13-switching-case-in-reducer",title:"14.13 Switching Case In Reducer",description:"reducer.js",source:"@site/courses/react-complete-guide/14-redux/14-13-switching-case-in-reducer.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-13-switching-case-in-reducer",permalink:"/hm/courses/react-complete-guide/14-redux/14-13-switching-case-in-reducer",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-13-switching-case-in-reducer.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"14-13-switching-case-in-reducer",title:"14.13 Switching Case In Reducer",date:"2021-04-24T20:46:44.000Z"},sidebar:"Courses",previous:{title:"14.11 Practice",permalink:"/hm/courses/react-complete-guide/14-redux/14-11-practice"},next:{title:"14.14 Updating State Immutably",permalink:"/hm/courses/react-complete-guide/14-redux/14-14-updating-state-immutably"}},u={},s=[{value:"<code>reducer.js</code>",id:"reducerjs",level:2}],d={toc:s};function l(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"reducerjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {6-7,11,15-16,20-21,25-28}',title:'"reducer.js"',"{6-7,11,15-16,20-21,25-28}":!0},'const initialState = {\n  counter: 0,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case "INCREMENT":\n      return {\n        counter: state.counter + 1,\n      };\n    case "DECREMENT":\n      return {\n        counter: state.counter - 1,\n      };\n\n    case "ADD":\n      return {\n        counter: state.counter + action.value,\n      };\n\n    case "SUBTRACT":\n      return {\n        counter: state.counter - action.value,\n      };\n    default:\n      return {\n        counter: state.counter,\n      };\n  }\n};\n\nexport default reducer;\n')))}l.isMDXComponent=!0}}]);