"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[66733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"9-13-adding-interceptors-to-execute-code-globally",title:"9.13 Adding Interceptors To Execute Code Globally",date:new Date("2021-04-13T17:55:35.000Z")},c=void 0,i={unversionedId:"react-complete-guide/09-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally",id:"react-complete-guide/09-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally",title:"9.13 Adding Interceptors To Execute Code Globally",description:"index.js",source:"@site/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally.md",sourceDirName:"react-complete-guide/09-reaching-out-web-http-ajax",slug:"/react-complete-guide/09-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"9-13-adding-interceptors-to-execute-code-globally",title:"9.13 Adding Interceptors To Execute Code Globally",date:"2021-04-13T17:55:35.000Z"},sidebar:"Courses",previous:{title:"9.12 Handling Errors Locally",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-12-handling-errors-locally"},next:{title:"9.14 Removing Interceptors",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-14-removing-interceptors"}},l={},s=[{value:"index.js",id:"indexjs",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"indexjs"},"index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" {1,8-30}',title:'"index.js"',"{1,8-30}":!0},'import axios from "axios";\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\n\naxios.interceptors.request.use(\n  (request) => {\n    console.log(request);\n    // Edit request config\n    return request;\n  },\n  (error) => {\n    console.log(error);\n    return Promise.reject(error);\n  }\n);\n\naxios.interceptors.response.use(\n  (response) => {\n    console.log(response);\n    // Edit response config\n    return response;\n  },\n  (error) => {\n    console.log(error);\n    return Promise.reject(error);\n  }\n);\n\nReactDOM.render(<App />, document.getElementById("root"));\nregisterServiceWorker();\n')))}u.isMDXComponent=!0}}]);