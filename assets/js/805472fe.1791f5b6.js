"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[83552],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=i,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},94663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return g}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"11-10-using-links-to-switch-pages",title:"11.10 Using Links To Switch Pages",date:new Date("2021-04-15T11:00:41.000Z")},p=void 0,c={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages",isDocsHomePage:!1,title:"11.10 Using Links To Switch Pages",description:"Blog.js",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"11-10-using-links-to-switch-pages",title:"11.10 Using Links To Switch Pages",date:"2021-04-15T11:00:41.000Z"},sidebar:"Docs",previous:{title:"11.09 Switching Between Pages",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-09-switching-between-pages"},next:{title:"11.11 Using Routing Related Props",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-11-using-routing-related-props"}},l=[{value:"<code>Blog.js</code>",id:"blogjs",children:[]}],u={toc:l};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"blogjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"Blog.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {3,16,19-27}',title:'"Blog.js"',"{3,16,19-27}":!0},'// import axios from "axios";\nimport React, { Component } from "react";\nimport { Link, Route } from "react-router-dom";\nimport "./Blog.css";\nimport NewPost from "./NewPost/NewPost";\nimport Posts from "./Posts/Posts";\n\nclass Blog extends Component {\n  render() {\n    return (\n      <div className="Blog">\n        <header>\n          <nav>\n            <ul>\n              <li>\n                <Link to="/">Home</Link>\n              </li>\n              <li>\n                <Link\n                  to={{\n                    pathname: "/new-post",\n                    hash: "#submit",\n                    search: "?quick-submit=true",\n                  }}\n                >\n                  New Post\n                </Link>\n              </li>\n            </ul>\n          </nav>\n        </header>\n        {/* <Route path="/" exact render={() => <h1>Home</h1>} />\n        <Route path="/" render={() => <h1>Home2</h1>} /> */}\n        <Route path="/" exact component={Posts} />\n        <Route path="/new-post" component={NewPost} />\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')))}g.isMDXComponent=!0}}]);