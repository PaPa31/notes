"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46926],{3905:function(e,r,n){n.d(r,{Zo:function(){return m},kt:function(){return p}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),u=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},m=function(e){var r=u(e.components);return t.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,g=c["".concat(d,".").concat(p)]||c[p]||s[p]||o;return n?t.createElement(g,i(i({ref:r},m),{},{components:n})):t.createElement(g,i({ref:r},m))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46488:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"8-21-creating-order-summary-modal",title:"8.21 Creating Order Summary Modal",date:new Date("2021-04-10T22:17:14.000Z")},d=void 0,u={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-21-creating-order-summary-modal",id:"react-complete-guide/08-real-app-burger-builder/8-21-creating-order-summary-modal",isDocsHomePage:!1,title:"8.21 Creating Order Summary Modal",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-21-creating-order-summary-modal.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-21-creating-order-summary-modal",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-21-creating-order-summary-modal",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-21-creating-order-summary-modal.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-21-creating-order-summary-modal",title:"8.21 Creating Order Summary Modal",date:"2021-04-10T22:17:14.000Z"},sidebar:"Docs",previous:{title:"8.20 Adding Order Button",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button"},next:{title:"8.22 Showing And Hiding Modal With Animation",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-22-showing-and-hiding-modal-with-animation"}},m=[{value:"BurgerBuilder.js",id:"burgerbuilderjs",children:[]},{value:"New OrderSummary.js",id:"new-ordersummaryjs",children:[]},{value:"New Modal.js",id:"new-modaljs",children:[]},{value:"New Modal.module.css",id:"new-modalmodulecss",children:[]}],s={toc:m};function c(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {4-5,19-21}',title:'"BurgerBuilder.js"',"{4-5,19-21}":!0},'import React, { Component, Fragment } from "react";\nimport BuildControls from "../components/Burger/BuildControls/BuildControls";\nimport Burger from "../components/Burger/Burger";\nimport OrderSummary from "../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../components/UI/Modal/Modal";\n...\n\n render() {\n    const disabledInfo = {\n      ...this.state.ingredients,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n\n    return (\n      <Fragment>\n        <Modal>\n          <OrderSummary ingredients={this.state.ingredients} />\n        </Modal>\n        <Burger ingredients={this.state.ingredients} />\n\n...\n')),(0,o.kt)("h2",{id:"new-ordersummaryjs"},"New OrderSummary.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="OrderSummary.js" {}',title:'"OrderSummary.js"',"{}":!0},'import React, { Fragment } from "react";\n\nconst orderSummary = (props) => {\n  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {\n    return (\n      <li key={igKey}>\n        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}\n        {props.ingredients[igKey]}\n      </li>\n    );\n  });\n\n  return (\n    <Fragment>\n      <h3>Your Order</h3>\n      <p>A delicious burger with the following ingredients:</p>\n      <ul>{ingredientSummary}</ul>\n      <p>Continue to Checkout?</p>\n    </Fragment>\n  );\n};\n\nexport default orderSummary;\n')),(0,o.kt)("h2",{id:"new-modaljs"},"New Modal.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Modal.js" {}',title:'"Modal.js"',"{}":!0},'import React from "react";\nimport classes from "./Modal.module.css";\n\nconst modal = (props) => <div className={classes.Modal}>{props.children}</div>;\n\nexport default modal;\n')),(0,o.kt)("h2",{id:"new-modalmodulecss"},"New Modal.module.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Modal.module.css" {}',title:'"Modal.module.css"',"{}":!0},".Modal {\n  position: fixed;\n  z-index: 500;\n  background-color: white;\n  width: 70%;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px black;\n  padding: 16px;\n  left: 15%;\n  top: 30%;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out;\n}\n\n@media (min-width: 600px) {\n  .Modal {\n    width: 500px;\n    left: calc(50% - 250px);\n  }\n}\n")))}c.isMDXComponent=!0}}]);