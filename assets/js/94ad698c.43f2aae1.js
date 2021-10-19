"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[72781],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,d=u["".concat(s,".").concat(p)]||u[p]||g[p]||a;return n?i.createElement(d,o(o({ref:t},l),{},{components:n})):i.createElement(d,o({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57829:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"12-10-implementing-navigation-links",title:"12.10 Implementing Navigation Links",date:new Date("2021-04-20T12:08:39.000Z")},s=void 0,m={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",id:"react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",isDocsHomePage:!1,title:"12.10 Implementing Navigation Links",description:"NavigationItems.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"12-10-implementing-navigation-links",title:"12.10 Implementing Navigation Links",date:"2021-04-20T12:08:39.000Z"},sidebar:"Docs",previous:{title:"12.09 Adding Orders Page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-09-adding-orders-page"},next:{title:"12.11.0 Fetching Orders",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders"}},l=[{value:"<code>NavigationItems.js</code>",id:"navigationitemsjs",children:[]},{value:"<code>NavigationItem.js</code>",id:"navigationitemjs",children:[]}],g={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"navigationitemsjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"NavigationItems.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItems.js" {7,10}',title:'"NavigationItems.js"',"{7,10}":!0},'import React from "react";\nimport NavigationItem from "./NavigationItem/NavigationItem";\nimport classes from "./NavigationItems.module.css";\n\nconst navigationItems = () => (\n  <ul className={classes.NavigationItems}>\n    <NavigationItem link="/" exact>\n      Burger Builder\n    </NavigationItem>\n    <NavigationItem link="/orders">Orders</NavigationItem>\n  </ul>\n);\n\nexport default navigationItems;\n')),(0,a.kt)("h2",{id:"navigationitemjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"NavigationItem.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItem.js" {2,7-10,13}',title:'"NavigationItem.js"',"{2,7-10,13}":!0},'import React from "react";\nimport { NavLink } from "react-router-dom";\nimport classes from "./NavigationItem.module.css";\n\nconst navigationItem = (props) => (\n  <li className={classes.NavigationItem}>\n    <NavLink\n      to={props.link}\n      exact={props.exact}\n      activeClassName={classes.active}\n    >\n      {props.children}\n    </NavLink>\n  </li>\n);\n\nexport default navigationItem;\n')))}u.isMDXComponent=!0}}]);