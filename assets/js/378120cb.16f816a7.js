"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[70451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),d=a,g=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},73079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"3-08-making-interactive-component",title:"3.08 Making Interactive Component",date:new Date("2021-03-20T00:01:54.000Z")},s=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Practice/3-08-making-interactive-component",id:"react-complete-guide/03-base-feature-syntax/Practice/3-08-making-interactive-component",title:"3.08 Making Interactive Component",description:"",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Practice/3-08-making-interactive-component.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Practice",slug:"/react-complete-guide/03-base-feature-syntax/Practice/3-08-making-interactive-component",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-08-making-interactive-component",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Practice/3-08-making-interactive-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"3-08-making-interactive-component",title:"3.08 Making Interactive Component",date:"2021-03-20T00:01:54.000Z"},sidebar:"Courses",previous:{title:"3.07 Pass Method Reference",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-07-pass-method-reference"},next:{title:"3.09 Add Two Way Binding",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-09-add-two-way-binding"}},i={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},"import React, { Component } from 'react';\nimport './App.css';\nimport UserOutput from './UserOutput/UserOutput'\n\nclass App extends Component {\n    state = {\n    persons: [\n      { name: 'Pasha', age: 47 },\n      { name: 'Masha', age: 37 },\n      { name: 'Chelsea', age: 1 },\n    ],\n  }\n\n  onChangeHandler = (event) => {\n    this.setState({\n      persons: [\n        { name: event.target.value, age: 47 },\n        { name: 'Masha', age: 37 },\n        { name: 'Chelsea', age: 1 },\n      ],\n    })\n  }\n\n  render() {\n    return (\n      <div className=\"App\">\n        <UserInput changed={this.onChangeHandler} />\n        <UserOutput\n          name={this.state.persons[0].name}\n          age={this.state.persons[0].age}\n        >\n          Git!\n        </UserOutput>\n        <UserOutput\n          name={this.state.persons[1].name}\n          age={this.state.persons[1].age}\n        >\n          Queen!\n        </UserOutput>\n        <UserOutput\n          name={this.state.persons[2].name}\n          age={this.state.persons[2].age}\n        >\n          Meow!\n        </UserOutput>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserInput.js" {4}',title:'"UserInput.js"',"{4}":!0},"import React from 'react'\n\nconst userInput = (props) => {\n  return <input type=\"text\" onChange={props.changed}></input>\n}\n\nexport default userInput\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserOutput.js"',title:'"UserOutput.js"'},"import React from 'react'\n\nconst userOutput = (props) => {\n  return (\n    <div>\n      <p>\n        I'm {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n    </div>\n  )\n}\n\nexport default userOutput\n")))}m.isMDXComponent=!0}}]);