"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[18804],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"11-13-absolute-vs-relative-paths",title:"11.13 Absolute vs Relative Paths",date:new Date("2021-04-16T12:23:36.000Z")},s=void 0,p={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths",isDocsHomePage:!1,title:"11.13 Absolute vs Relative Paths",description:"Blog.js",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-13-absolute-vs-relative-paths.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"11-13-absolute-vs-relative-paths",title:"11.13 Absolute vs Relative Paths",date:"2021-04-16T12:23:36.000Z"},sidebar:"Docs",previous:{title:"11.12 withRouter Hoc And Route Props",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-12-withrouter-hoc-and-route-props"},next:{title:"11.14 Absolute vs Relative Paths Article",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-14-absolute-vs-relative-paths-article"}},u=[{value:"<code>Blog.js</code>",id:"blogjs",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"blogjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Blog.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {21}',title:'"Blog.js"',"{21}":!0},'// import axios from "axios";\nimport React, { Component } from "react";\nimport { Link, Route } from "react-router-dom";\nimport "./Blog.css";\nimport NewPost from "./NewPost/NewPost";\nimport Posts from "./Posts/Posts";\n\nclass Blog extends Component {\n  render() {\n    return (\n      <div className="Blog">\n        <header>\n          <nav>\n            <ul>\n              <li>\n                <Link to="/">Home</Link>\n              </li>\n              <li>\n                <Link\n                  to={{\n                    pathname: this.props.match.url + "/new-post",\n                    hash: "#submit",\n                    search: "?quick-submit=true",\n                  }}\n                >\n                  New Post\n                </Link>\n              </li>\n            </ul>\n          </nav>\n        </header>\n        {/* <Route path="/" exact render={() => <h1>Home</h1>} />\n        <Route path="/" render={() => <h1>Home2</h1>} /> */}\n        <Route path="/" exact component={Posts} />\n        <Route path="/new-post" component={NewPost} />\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')))}m.isMDXComponent=!0}}]);