"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[22080],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83722:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"8-27-adding-toolbar",title:"8.27 Adding Toolbar",date:new Date("2021-04-11T10:35:29.000Z")},s=void 0,u={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-27-adding-toolbar",id:"react-complete-guide/08-real-app-burger-builder/8-27-adding-toolbar",title:"8.27 Adding Toolbar",description:"Corrected Folder Structure",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-27-adding-toolbar.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-27-adding-toolbar",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-27-adding-toolbar",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-27-adding-toolbar.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-27-adding-toolbar",title:"8.27 Adding Toolbar",date:"2021-04-11T10:35:29.000Z"},sidebar:"Courses",previous:{title:"8.26 Adding Price To Order Summary",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-26-adding-price-to-order-summary"},next:{title:"8.28 Using Logo",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-28-using-logo"}},d={},c=[{value:"Corrected Folder Structure",id:"corrected-folder-structure",level:2},{value:"New Toolbar.js",id:"new-toolbarjs",level:2},{value:"New Toolbar.module.css",id:"new-toolbarmodulecss",level:2},{value:"Layout.js",id:"layoutjs",level:2},{value:"Layout.module.css",id:"layoutmodulecss",level:2}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"corrected-folder-structure"},"Corrected Folder Structure"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"I corrected the mistake (see ",(0,a.kt)("a",{parentName:"p",href:"8-09-starting-implementation-burger-builder-container"},"lesson 8.9"),"). And moved the ",(0,a.kt)("inlineCode",{parentName:"p"},"BurgerBuilder")," folder to the ",(0,a.kt)("inlineCode",{parentName:"p"},"containers")," folder. All works fine yet."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"src/\n\u2502\n\u251c\u2500\u2500 assets/\n\u2502\n\u251c\u2500\u2500 components/\n\u2502     \u251c\u2500\u2500 Layout/\n\u2502     \u2502      \u251c\u2500\u2500 Layout.js\n\u2502     \u2502      \u2514\u2500\u2500 Layout.module.css\n\u2502     \u251c\u2500\u2500 Burger/\n\u2502     \u2502      \u251c\u2500\u2500 BuildControls/\n\u2502     \u2502      \u2502        \u251c\u2500\u2500 BuildControl/\n\u2502     \u2502      \u2502        \u2502        \u251c\u2500\u2500 BuildControl.js\n\u2502     \u2502      \u2502        \u2502        \u2514\u2500\u2500 BuildControl.module.css\n\u2502     \u2502      \u2502        \u251c\u2500\u2500 BuildControls.js\n\u2502     \u2502      \u2502        \u2514\u2500\u2500 BuildControls.module.css\n\u2502     \u2502      \u251c\u2500\u2500 BurgerIngredients/\n\u2502     \u2502      \u2502        \u251c\u2500\u2500 BurgerIngredients.js\n\u2502     \u2502      \u2502        \u2514\u2500\u2500 BurgerIngredients.module.css\n\u2502     \u2502      \u2514\u2500\u2500 OrderSummary/\n\u2502     \u2502               \u2514\u2500\u2500 OrderSummary.js\n\u2502     \u2502      \u2514\u2500\u2500 Navigation/\n\u2502     \u2502               \u2514\u2500\u2500 Toolbar/\n\u2502     \u2502                      \u251c\u2500\u2500 Toolbar.js\n\u2502     \u2502                      \u2514\u2500\u2500 Toolbar.module.css\n\u2502     \u2514\u2500\u2500 UI/\n\u2502         \u251c\u2500\u2500 Backdrop/\n\u2502         \u2502      \u251c\u2500\u2500 Backdrop.js\n\u2502         \u2502      \u2514\u2500\u2500 Backdrop.module.css\n\u2502         \u251c\u2500\u2500 Button/\n\u2502         \u2502      \u251c\u2500\u2500 Button.js\n\u2502         \u2502      \u2514\u2500\u2500 Button.module.css\n\u2502         \u2514\u2500\u2500 Modal/\n\u2502                \u251c\u2500\u2500 Modal.js\n\u2502                \u2514\u2500\u2500 Modal.module.css\n\u2502\n\u251c\u2500\u2500 containers/\n\u2502       \u2514\u2500\u2500 BurgerBuilder/\n\u2502                \u2514\u2500\u2500 BurgerBuilder.js\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 index.css\n\u2502\n")),(0,a.kt)("h2",{id:"new-toolbarjs"},"New Toolbar.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbar.js" {}',title:'"Toolbar.js"',"{}":!0},'import React from "react";\nimport classes from "./Toolbar.module.css";\n\nconst toolbar = (props) => (\n  <header className={classes.Toolbar}>\n    <div>MENU</div>\n    <div>LOGO</div>\n    <nav>\n      <ul>...</ul>\n    </nav>\n  </header>\n);\n\nexport default toolbar;\n')),(0,a.kt)("h2",{id:"new-toolbarmodulecss"},"New Toolbar.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbar.module.css" {}',title:'"Toolbar.module.css"',"{}":!0},".Toolbar {\n  height: 56px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #703b09;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n  z-index: 90;\n}\n\n.Toolbar nav {\n  height: 100%;\n}\n")),(0,a.kt)("h2",{id:"layoutjs"},"Layout.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Layout.js" {2,7}',title:'"Layout.js"',"{2,7}":!0},'import React, { Fragment } from "react";\nimport Toolbar from "../Navigation/Tollbar/Toolbar";\nimport classes from "./Layout.module.css";\n\nconst layout = (props) => (\n  <Fragment>\n    <Toolbar />\n    <main className={classes.Content}>{props.children}</main>\n  </Fragment>\n);\nexport default layout;\n')),(0,a.kt)("h2",{id:"layoutmodulecss"},"Layout.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Layout.module.css" {2}',title:'"Layout.module.css"',"{2}":!0},".Content {\n  margin-top: 72px;\n}\n\n")))}m.isMDXComponent=!0}}]);