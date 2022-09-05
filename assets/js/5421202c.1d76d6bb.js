"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[84833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<s;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={id:"16-11-using-utility-functions",title:"16.11 Using Utility Functions",date:new Date("2021-07-14T19:03:10.000Z")},c=void 0,i={unversionedId:"react-complete-guide/16-redux-advanced/16-11-using-utility-functions",id:"react-complete-guide/16-redux-advanced/16-11-using-utility-functions",title:"16.11 Using Utility Functions",description:"New utility.js",source:"@site/courses/react-complete-guide/16-redux-advanced/16-11-using-utility-functions.md",sourceDirName:"react-complete-guide/16-redux-advanced",slug:"/react-complete-guide/16-redux-advanced/16-11-using-utility-functions",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-11-using-utility-functions",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/16-redux-advanced/16-11-using-utility-functions.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"16-11-using-utility-functions",title:"16.11 Using Utility Functions",date:"2021-07-14T19:03:10.000Z"},sidebar:"Courses",previous:{title:"16.10 Using Action Creators And Get State",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-10-using-action-creators-and-get-state"},next:{title:"16.12 Linear Switch Case Statement",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-12-linear-switch-case-statement"}},o={},u=[{value:"New <code>utility.js</code>",id:"new-utilityjs",level:2},{value:"<code>reducers/counter.js</code>",id:"reducerscounterjs",level:2},{value:"<code>reducers/result.js</code>",id:"reducersresultjs",level:2},{value:"<code>actions/result.js</code>",id:"actionsresultjs",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"new-utilityjs"},"New ",(0,a.kt)("inlineCode",{parentName:"h2"},"utility.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\utility.js" {}',title:'"src\\store\\utility.js"',"{}":!0},"export const updateObject = (oldObject, updatedValues) => {\n  return {\n    ...oldObject,\n    ...updatedValues,\n  };\n};\n")),(0,a.kt)("h2",{id:"reducerscounterjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducers/counter.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\counter.js" {2,11,14,17,20}',title:'"src\\store\\reducers\\counter.js"',"{2,11,14,17,20}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "../utility";\n\nconst initialState = {\n  counter: 0,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.INCREMENT:\n      return updateObject(state, { counter: state.counter + 1 });\n\n    case actionTypes.DECREMENT:\n      return updateObject(state, { counter: state.counter - 1 });\n\n    case actionTypes.ADD:\n      return updateObject(state, { counter: state.counter + action.value });\n\n    case actionTypes.SUBTRACT:\n      return updateObject(state, { counter: state.counter - action.value });\n\n    default:\n  }\n  return state;\n};\n\nexport default reducer;\n')),(0,a.kt)("h2",{id:"reducersresultjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducers/result.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\result.js" {2,12-14,22}',title:'"src\\store\\reducers\\result.js"',"{2,12-14,22}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "../utility";\n\nconst initialState = {\n  results: [],\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.STORE_RESULT:\n      // Change data\n      return updateObject(state, {\n        results: state.results.concat({ id: new Date(), value: action.result }),\n      });\n    case actionTypes.DELETE_RESULT:\n      // const id = 2;\n      // const newArray = [...state.results];\n      // newArray.splice(id, 1);\n      const updatedArray = state.results.filter(\n        (result) => result.id !== action.resultElId\n      );\n      return updateObject(state, { results: updatedArray });\n    default:\n  }\n  return state;\n};\n\nexport default reducer;\n')),(0,a.kt)("h2",{id:"actionsresultjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions/result.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\result.js" {14-15}',title:'"src\\store\\actions\\result.js"',"{14-15}":!0},'import * as actionTypes from "./actionTypes";\n\nexport const saveResult = (res) => {\n  // const updatedResult = res * 2\n  return {\n    type: actionTypes.STORE_RESULT,\n    result: res,\n  };\n};\n\nexport const storeResult = (res) => {\n  return (dispatch, getState) => {\n    setTimeout(() => {\n      //   const oldCounter = getState().ctr.counter;\n      //   console.log(oldCounter);\n\n      dispatch(saveResult(res));\n    }, 2000);\n  };\n};\n\nexport const deleteResult = (resElId) => {\n  return {\n    type: actionTypes.DELETE_RESULT,\n    resultElId: resElId,\n  };\n};\n')))}d.isMDXComponent=!0}}]);