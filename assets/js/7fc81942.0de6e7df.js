"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[61429],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),a=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=a(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=a(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var a=2;a<s;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),c=["components"],u={id:"14-18-combining-multiple-reducers",title:"14.18 Combining Multiple Reducers",date:new Date("2021-04-27T17:10:40.000Z")},i=void 0,a={unversionedId:"react-complete-guide/14-redux/14-18-combining-multiple-reducers",id:"react-complete-guide/14-redux/14-18-combining-multiple-reducers",title:"14.18 Combining Multiple Reducers",description:"index.js",source:"@site/courses/react-complete-guide/14-redux/14-18-combining-multiple-reducers.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-18-combining-multiple-reducers",permalink:"/hm/courses/react-complete-guide/14-redux/14-18-combining-multiple-reducers",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-18-combining-multiple-reducers.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-18-combining-multiple-reducers",title:"14.18 Combining Multiple Reducers",date:"2021-04-27T17:10:40.000Z"},sidebar:"Courses",previous:{title:"14.17 Outsourcing Action Types",permalink:"/hm/courses/react-complete-guide/14-redux/14-17-outsourcing-action-types"},next:{title:"14.19 Understanding State Types",permalink:"/hm/courses/react-complete-guide/14-redux/14-19-understanding-state-types"}},l={},p=[{value:"<code>index.js</code>",id:"indexjs",level:2},{value:"<code>Counter.js</code>",id:"counterjs",level:2},{value:"New <code>counter.js</code>",id:"new-counterjs",level:2},{value:"New <code>result.js</code>",id:"new-resultjs",level:2},{value:"Remove <code>reducers.js</code>",id:"remove-reducersjs",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"indexjs"},(0,s.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" {4,8-14,16}',title:'"index.js"',"{4,8-14,16}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { combineReducers, createStore } from "redux";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\nimport counterReducer from "./store/reducers/counter";\nimport resultReducer from "./store/reducers/result";\n\nconst rootReducer = combineReducers({\n  ctr: counterReducer,\n  res: resultReducer,\n});\n\nconst store = createStore(rootReducer);\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);\nregisterServiceWorker();\n')),(0,s.kt)("h2",{id:"counterjs"},(0,s.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {26-28,46-47,57-58}',title:'"Counter.js"',"{26-28,46-47,57-58}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\nimport * as actionTypes from "../../store/actions";\n\nclass Counter extends Component {\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={this.props.onDecrementCounter}\n        />\n        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />\n        <CounterControl\n          label="Subtract 5"\n          clicked={this.props.onSubtractCounter}\n        />\n        <hr />\n        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>\n          Store Result\n        </button>\n        <ul>\n          {this.props.storedResults.map((strResult) => (\n            <li\n              key={strResult.id}\n              onClick={() => this.props.onDeleteResult(strResult.id)}\n            >\n              {strResult.value}\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.ctr.counter,\n    storedResults: state.res.results,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),\n    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),\n    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),\n    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),\n    onStoreResult: (result) =>\n      dispatch({ type: actionTypes.STORE_RESULT, result: result }),\n    onDeleteResult: (id) =>\n      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')),(0,s.kt)("h2",{id:"new-counterjs"},"New ",(0,s.kt)("inlineCode",{parentName:"h2"},"counter.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="counter.js" {}',title:'"counter.js"',"{}":!0},'import * as actionTypes from "../actions";\n\nconst initialState = {\n  counter: 0,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.INCREMENT:\n      const newState = Object.assign({}, state);\n      newState.counter = state.counter + 1;\n      return newState;\n    case actionTypes.DECREMENT:\n      return {\n        ...state,\n        counter: state.counter - 1,\n      };\n\n    case actionTypes.ADD:\n      return {\n        ...state,\n        counter: state.counter + action.value,\n      };\n\n    case actionTypes.SUBTRACT:\n      return {\n        ...state,\n        counter: state.counter - action.value,\n      };\n    default:\n  }\n  return state;\n};\n\nexport default reducer;\n')),(0,s.kt)("h2",{id:"new-resultjs"},"New ",(0,s.kt)("inlineCode",{parentName:"h2"},"result.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="result.js" {}',title:'"result.js"',"{}":!0},'import * as actionTypes from "../actions";\n\nconst initialState = {\n  results: [],\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.STORE_RESULT:\n      return {\n        ...state,\n        results: state.results.concat({ id: new Date(), value: action.result }),\n      };\n    case actionTypes.DELETE_RESULT:\n      // const id = 2;\n      // const newArray = [...state.results];\n      // newArray.splice(id, 1);\n      const updatedArray = state.results.filter(\n        (result) => result.id !== action.resultElId\n      );\n      return {\n        ...state,\n        // results: newArray,\n        results: updatedArray,\n      };\n    default:\n  }\n  return state;\n};\n\nexport default reducer;\n')),(0,s.kt)("h2",{id:"remove-reducersjs"},"Remove ",(0,s.kt)("inlineCode",{parentName:"h2"},"reducers.js")))}m.isMDXComponent=!0}}]);