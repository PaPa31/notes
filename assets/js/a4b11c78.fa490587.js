"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[10967],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),u=["components"],c={id:"14-14-updating-state-immutably",title:"14.14 Updating State Immutably",date:new Date("2021-04-25T07:53:24.000Z")},s=void 0,i={unversionedId:"react-complete-guide/14-redux/14-14-updating-state-immutably",id:"react-complete-guide/14-redux/14-14-updating-state-immutably",title:"14.14 Updating State Immutably",description:"Counter.js",source:"@site/courses/react-complete-guide/14-redux/14-14-updating-state-immutably.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-14-updating-state-immutably",permalink:"/hm/courses/react-complete-guide/14-redux/14-14-updating-state-immutably",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-14-updating-state-immutably.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-14-updating-state-immutably",title:"14.14 Updating State Immutably",date:"2021-04-25T07:53:24.000Z"},sidebar:"Courses",previous:{title:"14.13 Switching Case In Reducer",permalink:"/hm/courses/react-complete-guide/14-redux/14-13-switching-case-in-reducer"},next:{title:"14.15 Updating Arrays Immutably",permalink:"/hm/courses/react-complete-guide/14-redux/14-15-updating-arrays-immutably"}},l={},p=[{value:"<code>Counter.js</code>",id:"counterjs",level:2},{value:"<code>reducer.js</code>",id:"reducerjs",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"counterjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {24-32,41,51-52}',title:'"Counter.js"',"{24-32,41,51-52}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\n\nclass Counter extends Component {\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={this.props.onDecrementCounter}\n        />\n        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />\n        <CounterControl\n          label="Subtract 5"\n          clicked={this.props.onSubtractCounter}\n        />\n        <hr />\n        <button onClick={this.props.onStoreResult}>Store Result</button>\n        <ul>\n          {this.props.storedResults.map((strResult) => (\n            <li key={strResult.id} onClick={this.props.onDeleteResult}>\n              {strResult.value}\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.counter,\n    storedResults: state.results,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),\n    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),\n    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),\n    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),\n    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),\n    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')),(0,a.kt)("h2",{id:"reducerjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {3,9-11,14,20,26,29,31-32,34,36}',title:'"reducer.js"',"{3,9-11,14,20,26,29,31-32,34,36}":!0},'const initialState = {\n  counter: 0,\n  results: [],\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case "INCREMENT":\n      const newState = Object.assign({}, state);\n      newState.counter = state.counter + 1;\n      return newState;\n    case "DECREMENT":\n      return {\n        ...state,\n        counter: state.counter - 1,\n      };\n\n    case "ADD":\n      return {\n        ...state,\n        counter: state.counter + action.value,\n      };\n\n    case "SUBTRACT":\n      return {\n        ...state,\n        counter: state.counter - action.value,\n      };\n    case "STORE_RESULT":\n      return {\n        ...state,\n        results: state.results.concat({ id: new Date(), value: state.counter }),\n      };\n    default:\n  }\n  return state;\n};\n\nexport default reducer;\n')))}m.isMDXComponent=!0}}]);