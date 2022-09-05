"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[84400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,g=l["".concat(s,".").concat(m)]||l[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},50392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"14-07-adding-subscriptions",title:"14.07 Adding Subscriptions",date:new Date("2021-04-21T23:48:59.000Z")},a=void 0,c={unversionedId:"react-complete-guide/14-redux/14-07-adding-subscriptions",id:"react-complete-guide/14-redux/14-07-adding-subscriptions",title:"14.07 Adding Subscriptions",description:"redux-basics.js",source:"@site/courses/react-complete-guide/14-redux/14-07-adding-subscriptions.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-07-adding-subscriptions",permalink:"/hm/courses/react-complete-guide/14-redux/14-07-adding-subscriptions",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-07-adding-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"14-07-adding-subscriptions",title:"14.07 Adding Subscriptions",date:"2021-04-21T23:48:59.000Z"},sidebar:"Courses",previous:{title:"14.06 Dispatching Actions",permalink:"/hm/courses/react-complete-guide/14-redux/14-06-dispatching-actions"},next:{title:"14.08 Connecting React To Redux",permalink:"/hm/courses/react-complete-guide/14-redux/14-08-connecting-react-to-redux"}},s={},u=[{value:"<code>redux-basics.js</code>",id:"redux-basicsjs",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"redux-basicsjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"redux-basics.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="redux-basics.js" {}',title:'"redux-basics.js"',"{}":!0},'const redux = require("redux");\nconst createStore = redux.createStore;\n\nconst initialState = {\n  counter: 0,\n};\n\n// Reducer\nconst rootReducer = (state = initialState, action) => {\n  if (action.type === "INC_COUNTER") {\n    return {\n      ...state,\n      counter: state.counter + 1,\n    };\n  }\n  if (action.type === "ADD_COUNTER") {\n    return {\n      ...state,\n      counter: state.counter + action.value,\n    };\n  }\n  return state;\n};\n\n// Store\nconst store = createStore(rootReducer);\nconsole.log(store.getState());\n\n// Subscription\nstore.subscribe(() => {\n  console.log("[Subscription]", store.getState());\n});\n\n// Dispatching Action\nstore.dispatch({ type: "INC_COUNTER" });\nstore.dispatch({ type: "ADD_COUNTER", value: 10 });\nconsole.log(store.getState());\n')))}p.isMDXComponent=!0}}]);