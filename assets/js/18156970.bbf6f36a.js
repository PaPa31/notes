"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[11641],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(n),d=i,m=g["".concat(u,".").concat(d)]||g[d]||s[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60783:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return g}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={id:"11-07-setting-up-and-rendering-routes",title:"11.07 Setting Up And Rendering Routes",date:new Date("2021-04-14T22:22:51.000Z")},u=void 0,l={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",isDocsHomePage:!1,title:"11.07 Setting Up And Rendering Routes",description:"` simply replaces itself with the content you define in the render` attribute.",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"11-07-setting-up-and-rendering-routes",title:"11.07 Setting Up And Rendering Routes",date:"2021-04-14T22:22:51.000Z"},sidebar:"Docs",previous:{title:"11.06 Preparing Project For Routing",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-06-preparing-project-for-routing"},next:{title:"11.08 Rendering Components For Routes",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-08-rendering-components-for-routes"}},c=[{value:"<code>Blog.js</code>",id:"blogjs",children:[]}],s={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," simply replaces itself with the content you define in the ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," attribute.",(0,a.kt)("br",{parentName:"p"}),"\n","First, the ",(0,a.kt)("inlineCode",{parentName:"p"},"react router")," checks: it compares the ",(0,a.kt)("inlineCode",{parentName:"p"},"path attribute")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"page path"),". If your current path starts from this path,it will be displayed:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"path attribute")," === ",(0,a.kt)("inlineCode",{parentName:"p"},"page path (without domain)")," + ..."),(0,a.kt)("p",null,"If you add the ",(0,a.kt)("inlineCode",{parentName:"p"},"exact")," attribute, then the check will compare the  entire paths:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"path attribute")," === ",(0,a.kt)("inlineCode",{parentName:"p"},"page path (without domain)")),(0,a.kt)("h2",{id:"blogjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Blog.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {3,22-23}',title:'"Blog.js"',"{3,22-23}":!0},'// import axios from "axios";\nimport React, { Component } from "react";\nimport { Route } from "react-router-dom";\nimport "./Blog.css";\n\nclass Blog extends Component {\n  render() {\n    return (\n      <div className="Blog">\n        <header>\n          <nav>\n            <ul>\n              <li>\n                <a href="/">Home</a>\n              </li>\n              <li>\n                <a href="/new-post">New Post</a>\n              </li>\n            </ul>\n          </nav>\n        </header>\n        <Route path="/" exact render={() => <h1>Home</h1>} />\n        <Route path="/" render={() => <h1>Home2</h1>} />\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')))}g.isMDXComponent=!0}}]);