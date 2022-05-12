"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[79632],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=u(n),m=o,g=l["".concat(s,".").concat(m)]||l[m]||d[m]||r;return n?a.createElement(g,c(c({ref:e},p),{},{components:n})):a.createElement(g,c({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=l;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2718:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),c=["components"],i={id:"12-07-navigating-to-contact-data-component",title:"12.07 Navigating To Contact Data Component",date:new Date("2021-04-19T23:28:01.000Z")},s=void 0,u={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-07-navigating-to-contact-data-component",id:"react-complete-guide/12-adding-routing-to-burger-project/12-07-navigating-to-contact-data-component",title:"12.07 Navigating To Contact Data Component",description:"Checkout.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-07-navigating-to-contact-data-component.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-07-navigating-to-contact-data-component",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-07-navigating-to-contact-data-component",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-07-navigating-to-contact-data-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"12-07-navigating-to-contact-data-component",title:"12.07 Navigating To Contact Data Component",date:"2021-04-19T23:28:01.000Z"},sidebar:"Courses",previous:{title:"12.06 Passing Ingredients Via Query Params",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params"},next:{title:"12.08 Order Submission And Passing Data Between Pages",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-08-order-submission-and-passing-data-between-pages"}},p={},d=[{value:"<code>Checkout.js</code>",id:"checkoutjs",level:2},{value:"New <code>ContactData.js</code>",id:"new-contactdatajs",level:2},{value:"New <code>ContactData.module.css</code>",id:"new-contactdatamodulecss",level:2}],l={toc:d};function m(t){var e=t.components,n=(0,o.Z)(t,c);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"checkoutjs"},(0,r.kt)("inlineCode",{parentName:"h2"},"Checkout.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Checkout.js" {2,4,40-43}',title:'"Checkout.js"',"{2,4,40-43}":!0},'import React, { Component } from "react";\nimport { Route } from "react-router-dom";\nimport CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";\nimport ContactData from "./ContactData/ContactData";\n\nclass Checkout extends Component {\n  state = {\n    ingredients: {\n      salad: 1,\n      meat: 1,\n      cheese: 1,\n      bacon: 1,\n    },\n  };\n\n  componentDidMount() {\n    const query = new URLSearchParams(this.props.location.search);\n    const ingredients = {};\n    for (let param of query.entries()) {\n      ingredients[param[0]] = +param[1];\n    }\n    this.setState({ ingredients: ingredients });\n  }\n\n  checkoutCancelledHandler = () => {\n    this.props.history.goBack();\n  };\n\n  checkoutContinuedHandler = () => {\n    this.props.history.replace("/checkout/contact-data");\n  };\n  render() {\n    return (\n      <div>\n        <CheckoutSummary\n          ingredients={this.state.ingredients}\n          checkoutCancelled={this.checkoutCancelledHandler}\n          checkoutContinued={this.checkoutContinuedHandler}\n        />\n        <Route\n          path={this.props.match.path + "/contact-data"}\n          component={ContactData}\n        />\n      </div>\n    );\n  }\n}\nexport default Checkout;\n')),(0,r.kt)("h2",{id:"new-contactdatajs"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ContactData.js" {}',title:'"ContactData.js"',"{}":!0},'import React, { Component } from "react";\nimport Button from "../../../components/UI/Button/Button";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    name: "",\n    email: "",\n    address: {\n      street: "",\n      postalCode: "",\n    },\n  };\n  render() {\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        <form>\n          <input\n            className={classes.Input}\n            type="text"\n            name="name"\n            placeholder="Your Name"\n          />\n          <input\n            className={classes.Input}\n            type="text"\n            name="email"\n            placeholder="Your Mail"\n          />\n          <input\n            className={classes.Input}\n            type="text"\n            name="street"\n            placeholder="Street"\n          />\n          <input\n            className={classes.Input}\n            type="text"\n            name="postal"\n            placeholder="Postal Code"\n          />\n          <Button btnType="Success">ORDER</Button>\n        </form>\n      </div>\n    );\n  }\n}\nexport default ContactData;\n')),(0,r.kt)("h2",{id:"new-contactdatamodulecss"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"ContactData.module.css")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="ContactData.module.css" {}',title:'"ContactData.module.css"',"{}":!0},".ContactData {\n  margin: 20px auto;\n  width: 80%;\n  text-align: center;\n  box-shadow: 0 2px 3px #ccc;\n  border: 1px solid #eee;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.Input {\n  display: block;\n}\n\n@media (min-width: 600px) {\n  ContactData {\n    width: 500px;\n  }\n}\n")))}m.isMDXComponent=!0}}]);