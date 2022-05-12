"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[11718],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(g,o(o({ref:n},i),{},{components:t})):r.createElement(g,o({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3235:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],l={id:"5-10-2-auto-generated-class-names",title:"5.10.2 Auto Generated Class Names",date:new Date("2021-04-05T11:11:12.000Z")},c=void 0,p={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-10-2-auto-generated-class-names",id:"react-complete-guide/05-styling-react-components-and-elements/5-10-2-auto-generated-class-names",title:"5.10.2 Auto Generated Class Names",description:"Make properties:",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-2-auto-generated-class-names.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-10-2-auto-generated-class-names",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-2-auto-generated-class-names",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-2-auto-generated-class-names.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"5-10-2-auto-generated-class-names",title:"5.10.2 Auto Generated Class Names",date:"2021-04-05T11:11:12.000Z"},sidebar:"Courses",previous:{title:"5.10.1.1 CSS Modules Uder The Hood",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood"},next:{title:"5.10.3 Adding Class Selector",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-3-adding-class-selector"}},i={},u=[{value:"How this work",id:"how-this-work",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Make properties:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="App.css" {13-33}',title:'"App.css"',"{13-33}":!0},".App {\n  text-align: center;\n}\n\n.red {\n  color: red;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.Button {\n  background-color: green;\n  color: white;\n  font: inherit;\n  border: 1px solid blue;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.Button:hover {\n  background-color: lightgreen;\n  color: #333;\n}\n\n.Button.Red {\n  background-color: red;\n}\n\n.Button.Red:hover {\n  background-color: salmon;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,9,28,31,33,36,42,44}',title:'"App.js"',"{2,9,28,31,33,36,42,44}":!0},'import React, { Component } from "react";\nimport classes from "./App.css";\nimport Person from "./Person/Person";\n\n...\n\n  render() {\n    let persons = null;\n    let btnClass = [classes.Button];\n\n    if (this.state.showPersons) {\n      persons = (\n        <div>\n          {this.state.persons.map((person, index) => {\n            return (\n              <Person\n                click={() => this.deletePersonHandler(index)}\n                name={person.name}\n                age={person.age}\n                key={person.id}\n                changed={(event) => this.nameChangedHandler(event, person.id)}\n              />\n            );\n          })}\n        </div>\n      );\n\n      btnClass.push(classes.Red);\n    }\n\n    const assignedClasses = [];\n    if (this.state.persons.length <= 2) {\n      assignedClasses.push(classes.red); // classes = [\'red\']\n    }\n    if (this.state.persons.length <= 1) {\n      assignedClasses.push(classes.bold); // classes = [\'red\', \'bold\']\n    }\n\n    return (\n      <div className={classes.App}>\n        <h1>Hi, I\'m a React app!</h1>\n        <p className={assignedClasses.join(" ")}>This is really working!</p>\n        <button\n          className={btnClass.join(" ")}\n          onClick={this.togglePersonsHandler}\n        >\n          Toggle Persons\n        </button>\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,s.kt)("h2",{id:"how-this-work"},"How this work"),(0,s.kt)("p",null,"Make a pointer to unique class name, which is generated by the ",(0,s.kt)("inlineCode",{parentName:"p"},"CSS modules")," package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"let btnClass = [classes.Button];\n")),(0,s.kt)("p",null,"So because we have an array here, I want to join all the classes that are in there together with a white space in between:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},' className={btnClass.join(" ")}\n')),(0,s.kt)("p",null,"And now here in this place, where we need to change styles dynamically:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"btnClass.push(classes.Red);\n")),(0,s.kt)("p",null,"When you run app:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"btnClass.join(\" \") = 'App__Button__2_NDl'\n")),(0,s.kt)("p",null,"When click the button:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"btnClass.join(\" \") = 'App__Button__2_NDl App__Red__2T8IA'\n")),(0,s.kt)("p",null,"This is class name, generated by CSS module package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Final file" {28}',title:'"Final','file"':!0,"{28}":!0},'<style type="text/css">\n.App__App__1o-Fp {\n  text-align: center;\n}\n\n.App__red__lKdi_ {\n  color: red;\n}\n\n.App__bold__1Ylab {\n  font-weight: bold;\n}\n\n.App__Button__2_NDl {\n  background-color: green;\n  color: white;\n  font: inherit;\n  border: 1px solid blue;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.App__Button__2_NDl:hover {\n  background-color: lightgreen;\n  color: #333;\n}\n\n.App__Button__2_NDl.App__Red__2T8IA {\n  background-color: red;\n}\n\n.App__Button__2_NDl.App__Red__2T8IA:hover {\n  background-color: salmon;\n}\n</style>\n')))}m.isMDXComponent=!0}}]);