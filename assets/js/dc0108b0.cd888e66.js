"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[35715],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52661:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"13-06-adding-dropdown-component",title:"13.06 Adding Dropdown Component",date:new Date("2021-04-20T21:40:33.000Z")},l=void 0,c={unversionedId:"react-complete-guide/13-forms-and-form-validation/13-06-adding-dropdown-component",id:"react-complete-guide/13-forms-and-form-validation/13-06-adding-dropdown-component",isDocsHomePage:!1,title:"13.06 Adding Dropdown Component",description:"Input.js",source:"@site/courses/react-complete-guide/13-forms-and-form-validation/13-06-adding-dropdown-component.md",sourceDirName:"react-complete-guide/13-forms-and-form-validation",slug:"/react-complete-guide/13-forms-and-form-validation/13-06-adding-dropdown-component",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-06-adding-dropdown-component",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/13-forms-and-form-validation/13-06-adding-dropdown-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"13-06-adding-dropdown-component",title:"13.06 Adding Dropdown Component",date:"2021-04-20T21:40:33.000Z"},sidebar:"Docs",previous:{title:"13.05 Dynamically Reate Inputs Base On Js Config",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-05-dynamically-reate-inputs-base-on-js-config"},next:{title:"13.07 Handling User Input",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-07-handling-user-input"}},s=[{value:"<code>Input.js</code>",id:"inputjs",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inputjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Input.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Input.js" {26-36}',title:'"Input.js"',"{26-36}":!0},'import React from "react";\nimport classes from "./Input.module.css";\n\nconst input = (props) => {\n  let inputElement = null;\n\n  switch (props.elementType) {\n    case "input":\n      inputElement = (\n        <input\n          className={classes.InputElement}\n          {...props.elementConfig}\n          value={props.value}\n        />\n      );\n      break;\n    case "textarea":\n      inputElement = (\n        <textarea\n          className={classes.InputElement}\n          {...props.elementConfig}\n          value={props.value}\n        />\n      );\n      break;\n    case "select":\n      inputElement = (\n        <select className={classes.InputElement} value={props.value}>\n          {props.elementConfig.options.map((option) => (\n            <option key={option.value} value={option.value}>\n              {option.displayValue}\n            </option>\n          ))}\n        </select>\n      );\n      break;\n    default:\n      inputElement = (\n        <input\n          className={classes.InputElement}\n          {...props.elementConfig}\n          value={props.value}\n        />\n      );\n  }\n  return (\n    <div className={classes.Input}>\n      <label className={classes.Label}>{props.label}</label>\n      {inputElement}\n    </div>\n  );\n};\n\nexport default input;\n')))}d.isMDXComponent=!0}}]);