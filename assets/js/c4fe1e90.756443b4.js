"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[24341],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||c;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],u={id:"14-11-practice",title:"14.11 Practice",date:new Date("2021-04-24T20:07:54.000Z")},i=void 0,p={unversionedId:"react-complete-guide/14-redux/14-11-practice",id:"react-complete-guide/14-redux/14-11-practice",isDocsHomePage:!1,title:"14.11 Practice",description:"Counter.js",source:"@site/courses/react-complete-guide/14-redux/14-11-practice.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-11-practice",permalink:"/hm/courses/react-complete-guide/14-redux/14-11-practice",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-11-practice.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-11-practice",title:"14.11 Practice",date:"2021-04-24T20:07:54.000Z"},sidebar:"Docs",previous:{title:"14.10 Dispatching Actions From Within Component",permalink:"/hm/courses/react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component"},next:{title:"14.13 Switching Case In Reducer",permalink:"/hm/courses/react-complete-guide/14-redux/14-13-switching-case-in-reducer"}},s=[{value:"<code>Counter.js</code>",id:"counterjs",children:[]},{value:"<code>reducer.js</code>",id:"reducerjs",children:[]}],l={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"counterjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {17,19,22,38-40}',title:'"Counter.js"',"{17,19,22,38-40}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\n\nclass Counter extends Component {\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={this.props.onDecrementCounter}\n        />\n        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />\n        <CounterControl\n          label="Subtract 5"\n          clicked={this.props.onSubtractCounter}\n        />\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.counter,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),\n    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),\n    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),\n    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')),(0,c.kt)("h2",{id:"reducerjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {11-25}',title:'"reducer.js"',"{11-25}":!0},'const initialState = {\n  counter: 0,\n};\n\nconst reducer = (state = initialState, action) => {\n  if (action.type === "INCREMENT") {\n    return {\n      counter: state.counter + 1,\n    };\n  }\n  if (action.type === "DECREMENT") {\n    return {\n      counter: state.counter - 1,\n    };\n  }\n  if (action.type === "ADD") {\n    return {\n      counter: state.counter + action.value,\n    };\n  }\n  if (action.type === "SUBTRACT") {\n    return {\n      counter: state.counter - action.value,\n    };\n  }\n  return state;\n};\n\nexport default reducer;\n')))}d.isMDXComponent=!0}}]);