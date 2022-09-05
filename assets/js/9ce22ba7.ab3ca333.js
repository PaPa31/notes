"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[17561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"7-23-another-form-hoc",title:"7.23 Another Form HOC",date:new Date("2021-04-08T17:52:35.000Z")},s=void 0,i={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-23-another-form-hoc",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-23-another-form-hoc",title:"7.23 Another Form HOC",description:"Using regular JavaScript...",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-23-another-form-hoc.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-23-another-form-hoc",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-23-another-form-hoc",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-23-another-form-hoc.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"7-23-another-form-hoc",title:"7.23 Another Form HOC",date:"2021-04-08T17:52:35.000Z"},sidebar:"Courses",previous:{title:"7.22 Higher Order Components HOC Intro",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-22-higher-order-components-hoc-intro"},next:{title:"7.24 Passing Unknown Props",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-24-passing-unknown-props"}},c={},p=[{value:"WithClass.js \u2192 withClass.js",id:"withclassjs--withclassjs",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using regular JavaScript..."),(0,o.kt)("p",null,"This higher order component has the purpose of adding a div with a certain CSS class around any element and therefore, getting that class name that should be added makes a lot of sense, of course you can also accept as many arguments as you want based on what your higher order component does."),(0,o.kt)("h2",{id:"withclassjs--withclassjs"},"WithClass.js \u2192 withClass.js"),(0,o.kt)("p",null,"The lowercase because we'll not use this as a component anymore because well, it isn't a component anymore, it's a normal function, a function that returns a component function but not a component itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/hoc/withClass.js" {}',title:'"src/hoc/withClass.js"',"{}":!0},'import React from "react";\n\nconst withClass = (WrappedComponent, className) => {\n  return (peops) => (\n    <div className={className}>\n      <WrappedComponent />\n    </div>\n  );\n};\n\nexport default withClass;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2-3,7,24,29}',title:'"App.js"',"{2-3,7,24,29}":!0},'...\nimport Aux from "../hoc/Auxiliary";\nimport withClass from "../hoc/withClass";\n...\n\n    return (\n      <Aux>\n        <button\n          onClick={() => {\n            this.setState({ showCockpit: !this.state.showCockpit });\n          }}\n        >\n          Remove Cockpit\n        </button>\n        {this.state.showCockpit ? (\n          <Cockpit\n            title={this.props.appTitle}\n            personsLength={this.state.persons.length}\n            showPersons={this.state.showPersons}\n            clicked={this.togglePersonsHandler}\n          />\n        ) : null}\n        {persons}\n      </Aux>\n    );\n  }\n}\n\nexport default withClass(App, classes.App);\n')))}u.isMDXComponent=!0}}]);