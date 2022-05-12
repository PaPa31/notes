"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[80368],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),a=["components"],c={id:"7-31-context-type-and-use-context",title:"7.31 contextType and useContext",date:new Date("2021-04-09T11:00:20.000Z")},i=void 0,p={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context",title:"7.31 contextType and useContext",description:"We learned about the context API and this way of using it is perfectly fine, but there is a more elegant way for using it in class-based components and in functional components.",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-31-context-type-and-use-context.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-31-context-type-and-use-context",title:"7.31 contextType and useContext",date:"2021-04-09T11:00:20.000Z"},sidebar:"Courses",previous:{title:"7.30 Using Context API",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-30-using-context-api"},next:{title:"7.33 Useful Resources",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-33-useful-resources"}},l={},u=[{value:"class-based comps",id:"class-based-comps",level:2},{value:"functional comps",id:"functional-comps",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We learned about the context API and this way of using it is perfectly fine, but there is a ",(0,s.kt)("inlineCode",{parentName:"p"},"more elegant way")," for using it in class-based components and in functional components."),(0,s.kt)("h2",{id:"class-based-comps"},"class-based comps"),(0,s.kt)("p",null,"In class-based components and only there, you can use an alternative pattern to using that ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthContext.Consumer")," that gets this function, because it only gives you access to the context in your JSX code here, where you render AuthContext.Consumer."),(0,s.kt)("p",null,"Since React 16.6..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {14,17,22-26}',title:'"Person.js"',"{14,17,22-26}":!0},'import PropTypes from "prop-types";\nimport React, { Component, Fragment } from "react";\nimport AuthContext from "../../../context/auth-context";\nimport withClass from "../../../hoc/withClass";\nimport classes from "./Person.css";\nclass Person extends Component {\n  constructor(props) {\n    super(props);\n    this.inputElementRef = React.createRef();\n  }\n  componentDidMount() {\n    // this.inputElement.focus();\n    this.inputElementRef.current.focus();\n    console.log(this.context.authenticated);\n  }\n\n  static contextType = AuthContext;\n  render() {\n    console.log("[Person.js] rendering...");\n    return (\n      <Fragment>\n        {this.context.authenticated ? (\n          <p>Authenticated!</p>\n        ) : (\n          <p>Please log in</p>\n        )}\n\n        <p key="i1" onClick={this.props.click}>\n          I\'m {this.props.name} and I am {this.props.age} years old!\n        </p>\n        <p key="i2">{this.props.children}</p>\n        <input\n          key="i3"\n          ref={this.inputElementRef}\n          type="text"\n          onChange={this.props.changed}\n          value={this.props.name}\n        />\n      </Fragment>\n    );\n  }\n}\n\nPerson.propTypes = {\n  click: PropTypes.func,\n  name: PropTypes.string,\n  age: PropTypes.number,\n  changed: PropTypes.func,\n};\nexport default withClass(Person, classes.Person);\n')),(0,s.kt)("h2",{id:"functional-comps"},"functional comps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Cockpit.js" {1,7-9,50}',title:'"Cockpit.js"',"{1,7-9,50}":!0},'import React, { useContext, useEffect, useRef } from "react";\nimport AuthContext from "../../context/auth-context";\nimport classes from "./Cockpit.css";\n\nconst cockpit = (props) => {\n  const toggleBtnRef = useRef(null);\n  const authContext = useContext(AuthContext);\n\n  console.log(authContext.authenticated);\n\n  useEffect(() => {\n    console.log("[Cockpit.js] useEffect");\n    // Http request...\n    // setTimeout(() => {\n    //   alert("Saved data to cloud!");\n    // }, 1000);\n    toggleBtnRef.current.click();\n    return () => {\n      console.log("[Cockpit.js] cleanup work in useEffect");\n    };\n  }, []);\n\n  //}, [props.persons]);\n\n  // useEffect()\n\n  useEffect(() => {\n    console.log("[Cockpit.js] 2nd useEffect");\n    return () => {\n      console.log("[Cockpit.js] cleanup work in 2nd useEffect");\n    };\n  });\n\n  const assignedClasses = [];\n  let btnClass = "";\n  if (props.showPersons) btnClass = classes.Red;\n  if (props.personsLength <= 2) {\n    assignedClasses.push(classes.red); // classes = [\'red\']\n  }\n  if (props.personsLength <= 1) {\n    assignedClasses.push(classes.bold); // classes = [\'red\', \'bold\']\n  }\n  return (\n    <div className={classes.Cockpit}>\n      <h1>{props.title}</h1>\n      <p className={assignedClasses.join(" ")}>This is really working!</p>\n      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>\n        Toggle Persons\n      </button>\n      <button onClick={authContext.login}>Log in</button>\n    </div>\n  );\n};\n\nexport default React.memo(cockpit);\n')),(0,s.kt)("p",null,"We'll also learn a different concept that helps us with this, ",(0,s.kt)("inlineCode",{parentName:"p"},"Redux")," later in the course, but knowing the context API is important, because you can build exciting things with that, and it will also make it easier to understand that Redux thing later once we dive into that."))}m.isMDXComponent=!0}}]);