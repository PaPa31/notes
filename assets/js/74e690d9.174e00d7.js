"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[27854],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80834:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return i},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],p={id:"3-04-passing-data-through-props",title:"3.04 Passing Data Through Props",date:new Date("2021-03-19T23:06:00.000Z")},u=void 0,c={unversionedId:"react-complete-guide/03-base-feature-syntax/Practice/3-04-passing-data-through-props",id:"react-complete-guide/03-base-feature-syntax/Practice/3-04-passing-data-through-props",isDocsHomePage:!1,title:"3.04 Passing Data Through Props",description:'`jsx title="App.js"',source:"@site/courses/react-complete-guide/03-base-feature-syntax/Practice/3-04-passing-data-through-props.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Practice",slug:"/react-complete-guide/03-base-feature-syntax/Practice/3-04-passing-data-through-props",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-04-passing-data-through-props",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Practice/3-04-passing-data-through-props.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-04-passing-data-through-props",title:"3.04 Passing Data Through Props",date:"2021-03-19T23:06:00.000Z"},sidebar:"Docs",previous:{title:"3.03 Create Nested Components",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-03-create-nested-components"},next:{title:"3.05 Add State To Class",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-05-add-state-to-class"}},i=[],l={toc:i};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {9-17}',title:'"App.js"',"{9-17}":!0},'import React, { Component } from \'react\';\nimport \'./App.css\';\nimport UserOutput from \'./UserOutput/UserOutput\'\n\nclass App extends Component {\n  render() {\n    return (\n      <div className="App">\n        <UserOutput name="Pasha" age="47">\n          Git!\n        </UserOutput>\n        <UserOutput name="Masha" age="37">\n          Queen!\n        </UserOutput>\n        <UserOutput name="Chelsea" age="1">\n          Meow!\n        </UserOutput>\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserInput.js"',title:'"UserInput.js"'},"import React from 'react'\n\nconst userInput = () => {\n  return <input type=\"text\"></input>\n}\n\nexport default userInput\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserOutput.js" {6-9}',title:'"UserOutput.js"',"{6-9}":!0},"import React from 'react'\n\nconst userOutput = (props) => {\n  return (\n    <div>\n      <p>\n        I'm {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n    </div>\n  )\n}\n\nexport default userOutput\n")))}m.isMDXComponent=!0}}]);