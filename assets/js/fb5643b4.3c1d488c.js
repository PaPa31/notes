"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[33364],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,p=g["".concat(l,".").concat(d)]||g[d]||u[d]||r;return n?a.createElement(p,o(o({ref:t},m),{},{components:n})):a.createElement(p,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"8-29-adding-reusable-navigation-items",title:"8.29 Adding Reusable Navigation Items",date:new Date("2021-04-11T13:24:41.000Z")},l=void 0,c={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",id:"react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",isDocsHomePage:!1,title:"8.29 Adding Reusable Navigation Items",description:"New NavigationItems.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-29-adding-reusable-navigation-items",title:"8.29 Adding Reusable Navigation Items",date:"2021-04-11T13:24:41.000Z"},sidebar:"Docs",previous:{title:"8.28 Using Logo",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-28-using-logo"},next:{title:"8.30 Creating Responsive Sidedrawer",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-30-creating-responsive-sidedrawer"}},m=[{value:"New NavigationItems.js",id:"new-navigationitemsjs",children:[]},{value:"New NavigationItems.module.css",id:"new-navigationitemsmodulecss",children:[]},{value:"New NavigationItem.js",id:"new-navigationitemjs",children:[]},{value:"New NavigationItem.module.css",id:"new-navigationitemmodulecss",children:[]},{value:"Toolbar.js",id:"toolbarjs",children:[]}],u={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"new-navigationitemsjs"},"New NavigationItems.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItems.js" {}',title:'"NavigationItems.js"',"{}":!0},'import React from "react";\nimport NavigationItem from "./NavigationItem/NavigationItem";\nimport classes from "./NavigationItems.module.css";\n\nconst navigationItems = () => (\n  <ul className={classes.NavigationItems}>\n    <NavigationItem link="/" active>\n      Burger Builder\n    </NavigationItem>\n    <NavigationItem link="/">Checkout</NavigationItem>\n  </ul>\n);\n\nexport default navigationItems;\n')),(0,r.kt)("h2",{id:"new-navigationitemsmodulecss"},"New NavigationItems.module.css"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="NavigationItems.module.css" {}',title:'"NavigationItems.module.css"',"{}":!0},".NavigationItems {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n")),(0,r.kt)("h2",{id:"new-navigationitemjs"},"New NavigationItem.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItem.js" {}',title:'"NavigationItem.js"',"{}":!0},'import React from "react";\nimport classes from "./NavigationItem.module.css";\n\nconst navigationItem = (props) => (\n  <li className={classes.NavigationItem}>\n    <a href={props.link} className={props.active ? classes.active : null}>\n      {props.children}\n    </a>\n  </li>\n);\n\nexport default navigationItem;\n')),(0,r.kt)("h2",{id:"new-navigationitemmodulecss"},"New NavigationItem.module.css"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="NavigationItem.module.css" {}',title:'"NavigationItem.module.css"',"{}":!0},".NavigationItem {\n  margin: 0;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n\n.NavigationItem a {\n  color: #fff;\n  text-decoration: none;\n  height: 100%;\n  padding: 16px 10px;\n  border-bottom: 4px solid transparent;\n  box-sizing: border-box;\n  display: block;\n}\n\n.NavigationItem a:hover,\n.NavigationItem a:active,\n.NavigationItem a.active {\n  background-color: #8f5c2c;\n  border-bottom: 4px solid #40a4c8;\n  color: #fff;\n}\n")),(0,r.kt)("h2",{id:"toolbarjs"},"Toolbar.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbar.js" {3,11}',title:'"Toolbar.js"',"{3,11}":!0},'import React from "react";\nimport Logo from "../../Logo/Logo";\nimport NavigationItems from "../NavigationItems/NavigationItems";\nimport classes from "./Toolbar.module.css";\n\nconst toolbar = (props) => (\n  <header className={classes.Toolbar}>\n    <div>MENU</div>\n    <Logo />\n    <nav>\n      <NavigationItems />\n    </nav>\n  </header>\n);\n\nexport default toolbar;\n')))}g.isMDXComponent=!0}}]);