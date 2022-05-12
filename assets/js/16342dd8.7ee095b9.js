"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[60034],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),m=o,g=l["".concat(d,".").concat(m)]||l[m]||p[m]||a;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},64611:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"12-11-0-fetching-orders",title:"12.11.0 Fetching Orders",date:new Date("2021-04-20T13:37:06.000Z")},d=void 0,s={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders",id:"react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders",title:"12.11.0 Fetching Orders",description:"Fucking Docusaurus!!!",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"12-11-0-fetching-orders",title:"12.11.0 Fetching Orders",date:"2021-04-20T13:37:06.000Z"},sidebar:"Courses",previous:{title:"12.10 Implementing Navigation Links",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links"},next:{title:"12.12 Outputting Orders",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders"}},u={},p=[{value:"<code>Orders.js</code>",id:"ordersjs",level:2}],l={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Fucking Docusaurus!!!\nWith name: ",(0,a.kt)("inlineCode",{parentName:"p"},"12-11-fetching-number.md")," it doesn't work!"))),(0,a.kt)("h2",{id:"ordersjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Orders.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Orders.js" {2,4,7-28,38}',title:'"Orders.js"',"{2,4,7-28,38}":!0},'import React, { Component } from "react";\nimport axios from "../../axios-orders";\nimport Order from "../../components/Order/Order";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\n\nclass Orders extends Component {\n  state = {\n    orders: [],\n    loading: true,\n  };\n  componentDidMount() {\n    axios\n      .get("/orders.json")\n      .then((res) => {\n        // console.log("res.data:", res.data);\n        const fetchedOrders = [];\n        for (let key in res.data) {\n          fetchedOrders.push({\n            ...res.data[key],\n            id: key,\n          });\n        }\n        this.setState({ loading: false, orders: fetchedOrders });\n      })\n      .catch((err) => {\n        this.setState({ loading: false });\n      });\n  }\n  render() {\n    return (\n      <div>\n        <Order />\n        <Order />\n      </div>\n    );\n  }\n}\nexport default withErrorHandler(Orders, axios);\n')))}m.isMDXComponent=!0}}]);