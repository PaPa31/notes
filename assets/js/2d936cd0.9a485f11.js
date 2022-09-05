"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[75659],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var s=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=s.createContext({}),l=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return s.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||r;return t?s.createElement(m,c(c({ref:n},p),{},{components:t})):s.createElement(m,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=f;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<r;l++)c[l]=t[l];return s.createElement.apply(null,c)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(87462),o=(t(67294),t(3905));const r={id:"7-12-cleaning-up-with-lifecycle-hooks-and-useeffect",title:"7.12 Cleaning Up With Lifecycle Hooks And useEffect",date:new Date("2021-04-07T21:42:06.000Z")},c=void 0,a={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect",title:"7.12 Cleaning Up With Lifecycle Hooks And useEffect",description:"useEffect()",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-12-cleaning-up-with-lifecycle-hooks-and-useeffect.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"7-12-cleaning-up-with-lifecycle-hooks-and-useeffect",title:"7.12 Cleaning Up With Lifecycle Hooks And useEffect",date:"2021-04-07T21:42:06.000Z"},sidebar:"Courses",previous:{title:"7.11 Controlling useEffect Behavior",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-11-controlling-useeffect-behavior"},next:{title:"7.13 Cleanup Work With useEffect Example",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-13-cleanup-work-with-useeffect-example"}},i={},l=[{value:"useEffect()",id:"useeffect",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {4-6}',title:'"Person.js"',"{4-6}":!0},'...\n  }\n\n  componentWillUnmount() {\n    console.log("[Persons.js] componentWillUnmount");\n  }\n\n  render() {\n...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {16,23-30,37}',title:'"App.js"',"{16,23-30,37}":!0},'import React, { Component } from "react";\nimport Cockpit from "../components/Cockpit/Cockpit";\nimport Persons from "../components/Persons/Persons";\nimport classes from "./App.css";\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    console.log("[App.js] constructor");\n  }\n  state = {\n    persons: [\n      { id: "20210330005200", name: "Max", age: 28 },\n      { id: "20210330005205", name: "Manu", age: 29 },\n      { id: "20210330005209", name: "Stephanie", age: 26 },\n    ],\n    showCockpit: true,\n  };\n  \n...\n\n    return (\n      <div className={classes.App}>\n        <button\n          onClick={() => {\n            this.setState({ showCockpit: !this.state.showCockpit });\n          }}\n        >\n          Remove Cockpit\n        </button>\n        {this.state.showCockpit ? (\n          <Cockpit\n            title={this.props.appTitle}\n            persons={this.state.persons}\n            showPersons={this.state.showPersons}\n            clicked={this.togglePersonsHandler}\n          />\n        ) : null}\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"useeffect"},"useEffect()"),(0,o.kt)("p",null,"It runs before the main useEffect function runs, but after the (first) render cycle!"),(0,o.kt)("p",null,"If you passed an empty array, useEffect will basically execute this function only, this function here, only when that component rendered and when it is unmounted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Cockpit.js" {11-13,20-25}',title:'"Cockpit.js"',"{11-13,20-25}":!0},'import React, { useEffect } from "react";\nimport classes from "./Cockpit.css";\n\nconst cockpit = (props) => {\n  useEffect(() => {\n    console.log("[Cockpit.js] useEffect");\n    // Http request...\n    setTimeout(() => {\n      alert("Saved data to cloud!");\n    }, 1000);\n    return () => {\n      console.log("[Cockpit.js] cleanup work in useEffect");\n    };\n  }, []);\n\n  //}, [props.persons]);\n\n  // useEffect()\n\n  useEffect(() => {\n    console.log("[Cockpit.js] 2nd useEffect");\n    return () => {\n      console.log("[Cockpit.js] cleanup work in 2nd useEffect");\n    };\n  });\n\n  const assignedClasses = [];\n  let btnClass = "";\n  if (props.showPersons) btnClass = classes.Red;\n  if (props.persons.length <= 2) {\n    assignedClasses.push(classes.red); // classes = [\'red\']\n  }\n  if (props.persons.length <= 1) {\n    assignedClasses.push(classes.bold); // classes = [\'red\', \'bold\']\n  }\n  return (\n    <div className={classes.Cockpit}>\n      <h1>{props.title}</h1>\n      <p className={assignedClasses.join(" ")}>This is really working!</p>\n      <button className={btnClass} onClick={props.clicked}>\n        Toggle Persons\n      </button>\n    </div>\n  );\n};\n\nexport default cockpit;\n')))}u.isMDXComponent=!0}}]);