"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[5267],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,g=p["".concat(u,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(g,c(c({ref:t},s),{},{components:r})):n.createElement(g,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var d=2;d<i;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},24298:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={id:"16-03-using-redux-devtools",title:"16.03 Using Redux Devtools",date:new Date("2021-07-13T20:57:04.000Z")},u=void 0,d={unversionedId:"react-complete-guide/16-redux-advanced/16-03-using-redux-devtools",id:"react-complete-guide/16-redux-advanced/16-03-using-redux-devtools",title:"16.03 Using Redux Devtools",description:"Installing Redux Devtools plugin",source:"@site/courses/react-complete-guide/16-redux-advanced/16-03-using-redux-devtools.md",sourceDirName:"react-complete-guide/16-redux-advanced",slug:"/react-complete-guide/16-redux-advanced/16-03-using-redux-devtools",permalink:"/hm/ru/courses/react-complete-guide/16-redux-advanced/16-03-using-redux-devtools",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/16-redux-advanced/16-03-using-redux-devtools.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"16-03-using-redux-devtools",title:"16.03 Using Redux Devtools",date:"2021-07-13T20:57:04.000Z"},sidebar:"Courses",previous:{title:"16.02 Adding Middleware",permalink:"/hm/ru/courses/react-complete-guide/16-redux-advanced/16-02-adding-middleware"},next:{title:"16.05 Introducing Action Creators",permalink:"/hm/ru/courses/react-complete-guide/16-redux-advanced/16-05-Introducing-action-creators"}},s={},l=[{value:"Installing Redux Devtools plugin",id:"installing-redux-devtools-plugin",level:2},{value:"<code>index.js</code>",id:"indexjs",level:2}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installing-redux-devtools-plugin"},"Installing Redux Devtools plugin"),(0,i.kt)("p",null,"For Chrome: ",(0,i.kt)("a",{href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en",class:"external"},"chrome.google.com: Chrome Web Store")),(0,i.kt)("p",null,"Read more: ",(0,i.kt)("a",{href:"https://github.com/zalmoxisus/redux-devtools-extension",class:"external"},"github.com: Redux Devtools Extension")),(0,i.kt)("h2",{id:"indexjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" {4,27-32}',title:'"index.js"',"{4,27-32}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { applyMiddleware, combineReducers, compose, createStore } from "redux";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\nimport counterReducer from "./store/reducers/counter";\nimport resultReducer from "./store/reducers/result";\n\nconst rootReducer = combineReducers({\n  ctr: counterReducer,\n  res: resultReducer,\n});\n\nconst logger = (store) => {\n  return (next) => {\n    return (action) => {\n      console.log("[Middleware] Dispatching", action);\n      const result = next(action);\n      console.log("[Middleware] next state", store.getState());\n      return result;\n    };\n  };\n};\n\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\nconst store = createStore(\n  rootReducer,\n  composeEnhancers(applyMiddleware(logger))\n);\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);\nregisterServiceWorker();\n')))}m.isMDXComponent=!0}}]);