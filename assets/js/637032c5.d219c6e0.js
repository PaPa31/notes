"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[62286],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4131:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=t(37358),u=t(98448),i=["components"],s={id:"16-07-handling-asynchronous-code",title:"16.07 Handling Asynchronous Code",date:new Date("2021-07-14T12:37:05.000Z")},l=void 0,d={unversionedId:"react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code",id:"react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code",isDocsHomePage:!1,title:"16.07 Handling Asynchronous Code",description:"Installing redux-thunk",source:"@site/courses/react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code.md",sourceDirName:"react-complete-guide/16-redux-advanced",slug:"/react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"16-07-handling-asynchronous-code",title:"16.07 Handling Asynchronous Code",date:"2021-07-14T12:37:05.000Z"},sidebar:"Docs",previous:{title:"16.06 Action Creators And Async Code",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-06-action-creators-and-async-code"},next:{title:"16.08 Restructuring Actions",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-08-restructuring-actions"}},p=[{value:"Installing <code>redux-thunk</code>",id:"installing-redux-thunk",children:[]},{value:"<code>index.js</code>",id:"indexjs",children:[]},{value:"<code>actions.js</code>",id:"actionsjs",children:[]}],m={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installing-redux-thunk"},"Installing ",(0,a.kt)("inlineCode",{parentName:"h2"},"redux-thunk")),(0,a.kt)(c.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save redux-thunk\n"))),(0,a.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add redux-thunk\n")))),(0,a.kt)("h2",{id:"indexjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" {5,32}',title:'"index.js"',"{5,32}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { applyMiddleware, combineReducers, compose, createStore } from "redux";\nimport thunk from "redux-thunk";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\nimport counterReducer from "./store/reducers/counter";\nimport resultReducer from "./store/reducers/result";\n\nconst rootReducer = combineReducers({\n  ctr: counterReducer,\n  res: resultReducer,\n});\n\nconst logger = (store) => {\n  return (next) => {\n    return (action) => {\n      console.log("[Middleware] Dispatching", action);\n      const result = next(action);\n      console.log("[Middleware] next state", store.getState());\n      return result;\n    };\n  };\n};\n\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\nconst store = createStore(\n  rootReducer,\n  composeEnhancers(applyMiddleware(logger, thunk))\n);\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);\nregisterServiceWorker();\n')),(0,a.kt)("h2",{id:"actionsjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="actions.js" {34,41-47}',title:'"actions.js"',"{34,41-47}":!0},'export const INCREMENT = "INCREMENT";\nexport const DECREMENT = "DECREMENT";\nexport const ADD = "ADD";\nexport const SUBTRACT = "SUBTRACT";\nexport const STORE_RESULT = "STORE_RESULT";\nexport const DELETE_RESULT = "DELETE_RESULT";\n\nexport const increment = () => {\n  return {\n    type: INCREMENT,\n  };\n};\n\nexport const decrement = () => {\n  return {\n    type: DECREMENT,\n  };\n};\n\nexport const add = (value) => {\n  return {\n    type: ADD,\n    value: value,\n  };\n};\n\nexport const subtract = (value) => {\n  return {\n    type: SUBTRACT,\n    value: value,\n  };\n};\n\nexport const saveResult = (res) => {\n  return {\n    type: STORE_RESULT,\n    result: res,\n  };\n};\n\nexport const storeResult = (res) => {\n  return (dispatch) => {\n    setTimeout(() => {\n      dispatch(saveResult(res));\n    }, 2000);\n  };\n};\n\nexport const deleteResult = (resElId) => {\n  return {\n    type: DELETE_RESULT,\n    resultElId: resElId,\n  };\n};\n')))}f.isMDXComponent=!0},98448:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},37358:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(67294),o=t(22713);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(86010),u="tabItem_1uMI",i="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,o=e.block,s=e.defaultValue,l=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),f=null!=l?l:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,h=a(),g=h.tabGroupChoices,y=h.setTabGroupChoices,x=(0,r.useState)(v),E=x[0],b=x[1],k=[];if(null!=d){var T=g[d];null!=T&&T!==E&&f.some((function(e){return e.value===T}))&&b(T)}var O=function(e){var n=e.currentTarget,t=k.indexOf(n),r=f[t].value;b(r),null!=d&&(y(d,r),setTimeout((function(){var e,t,r,o,a,c,u,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,c=window,u=c.innerHeight,s=c.innerWidth,t>=0&&a<=s&&o<=u&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;t=k[r]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;t=k[o]||k[k.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:R,onFocus:O,onClick:O},null!=t?t:n)}))),t?(0,r.cloneElement)(m.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}},22713:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r}}]);