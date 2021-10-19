"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[98437],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(n),m=a,g=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},34550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"3-09-add-two-way-binding",title:"3.09 Add Two Way Binding",date:new Date("2021-03-20T00:06:55.000Z")},p=void 0,c={unversionedId:"react-complete-guide/03-base-feature-syntax/Practice/3-09-add-two-way-binding",id:"react-complete-guide/03-base-feature-syntax/Practice/3-09-add-two-way-binding",isDocsHomePage:!1,title:"3.09 Add Two Way Binding",description:'`jsx title="App.js"',source:"@site/courses/react-complete-guide/03-base-feature-syntax/Practice/3-09-add-two-way-binding.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Practice",slug:"/react-complete-guide/03-base-feature-syntax/Practice/3-09-add-two-way-binding",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-09-add-two-way-binding",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Practice/3-09-add-two-way-binding.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-09-add-two-way-binding",title:"3.09 Add Two Way Binding",date:"2021-03-20T00:06:55.000Z"},sidebar:"Docs",previous:{title:"3.08 Making Interactive Component",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-08-making-interactive-component"},next:{title:"3.10 Add Styling",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-10-add-styling"}},u=[],d={toc:u};function l(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {29}',title:'"App.js"',"{29}":!0},"import React, { Component } from 'react';\nimport './App.css';\nimport UserOutput from './UserOutput/UserOutput'\n\nclass App extends Component {\n    state = {\n    persons: [\n      { name: 'Pasha', age: 47 },\n      { name: 'Masha', age: 37 },\n      { name: 'Chelsea', age: 1 },\n    ],\n  }\n\n  onChangeHandler = (event) => {\n    this.setState({\n      persons: [\n        { name: event.target.value, age: 47 },\n        { name: 'Masha', age: 37 },\n        { name: 'Chelsea', age: 1 },\n      ],\n    })\n  }\n\n  render() {\n    return (\n      <div className=\"App\">\n        <UserInput\n          changed={this.onChangeHandler}\n          name={this.state.persons[0].name}\n        />\n        <UserOutput\n          name={this.state.persons[0].name}\n          age={this.state.persons[0].age}\n        >\n          Git!\n        </UserOutput>\n        <UserOutput\n          name={this.state.persons[1].name}\n          age={this.state.persons[1].age}\n        >\n          Queen!\n        </UserOutput>\n        <UserOutput\n          name={this.state.persons[2].name}\n          age={this.state.persons[2].age}\n        >\n          Meow!\n        </UserOutput>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserInput.js" {4}',title:'"UserInput.js"',"{4}":!0},"import React from 'react'\n\nconst userInput = (props) => {\n  return <input type=\"text\" onChange={props.changed}></input>\n}\n\nexport default userInput\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserOutput.js"',title:'"UserOutput.js"'},"import React from 'react'\n\nconst userOutput = (props) => {\n  return (\n    <div>\n      <p>\n        I'm {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n    </div>\n  )\n}\n\nexport default userOutput\n")))}l.isMDXComponent=!0}}]);