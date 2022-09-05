"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[61248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={id:"4-05-outputting-lists",title:"4.05 Outputting Lists",date:new Date("2021-03-15T01:35:53.000Z")},o=void 0,i={unversionedId:"react-complete-guide/04-lists-and-conditionals/Lessons/4-05-outputting-lists",id:"react-complete-guide/04-lists-and-conditionals/Lessons/4-05-outputting-lists",title:"4.05 Outputting Lists",description:"JSX Lists Learning Card PDF",source:"@site/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-05-outputting-lists.md",sourceDirName:"react-complete-guide/04-lists-and-conditionals/Lessons",slug:"/react-complete-guide/04-lists-and-conditionals/Lessons/4-05-outputting-lists",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-05-outputting-lists",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-05-outputting-lists.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"4-05-outputting-lists",title:"4.05 Outputting Lists",date:"2021-03-15T01:35:53.000Z"},sidebar:"Courses",previous:{title:"4.03 Handling Javascript Way",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way"},next:{title:"4.06 Lists And State",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-06-lists-and-state"}},l={},p=[{value:"map builds a new array",id:"map-builds-a-new-array",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:n(15074).Z},"JSX Lists Learning Card PDF")),(0,s.kt)("h2",{id:"map-builds-a-new-array"},"map builds a new array"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"map()")," method ",(0,s.kt)("strong",{parentName:"p"},"creates a new array")," (of JSX elements) populated with the results of calling a provided function on every element in the calling array. And React will then pull out these elements and render to the screen for you."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{30-32} title="App.js"',"{30-32}":!0,title:'"App.js"'},'import React, { Component } from "react";\nimport "./App.css";\nimport Person from "./Person/Person";\n\nclass App extends Component {\n  state = {\n    persons: [\n      { name: "Max", age: 28 },\n      { name: "Manu", age: 29 },\n      { name: "Stephanie", age: 26 },\n    ],\n  };\n\n...\n\n  togglePersonsHandler = () => {\n    const doesShow = this.state.showPersons;\n    this.setState({ showPersons: !doesShow });\n  };\n\n  render() {\n\n...\n\n    let persons = null;\n\n    if (this.state.showPersons) {\n      persons = (\n        <div>\n          {this.state.persons.map((person) => {\n            return <Person name={person.name} age={person.age} />;\n          })}\n        </div>\n      );\n    }\n\n    return (\n      <div className="App">\n        <h1>Hi, I\'m a React app!</h1>\n        <p>This is really working!</p>\n        <button style={style} onClick={this.togglePersonsHandler}>\n          Toggle Persons\n        </button>\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {}',title:'"Person.js"',"{}":!0},'const person = (props) => {\n  return (\n    <div className="Person">\n      <p onClick={props.click}>\n        I\'m {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n      <input type="text" onChange={props.changed} value={props.name} />\n    </div>\n  )\n}\n')))}u.isMDXComponent=!0},15074:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/4-05-jsx-lists-learning-card-fa45414e747bde179acc153ba006ab66.pdf"}}]);