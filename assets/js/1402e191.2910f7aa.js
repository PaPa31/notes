"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[13254],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97904:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(87462),s=t(63366),o=(t(67294),t(3905)),r=["components"],i={id:"3-22-passing-methods-between-components",title:"3.22 Passing Methods Between Components",date:new Date("2021-03-13T18:08:56.000Z")},c=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-22-passing-methods-between-components",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-22-passing-methods-between-components",title:"3.22 Passing Methods Between Components",description:"This feature can be useful when you want to bind some interactive functionality (click events, etc) to the ` or ` elements.",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-22-passing-methods-between-components.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-22-passing-methods-between-components",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-22-passing-methods-between-components",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-22-passing-methods-between-components.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-22-passing-methods-between-components",title:"3.22 Passing Methods Between Components",date:"2021-03-13T18:08:56.000Z"},sidebar:"Courses",previous:{title:"3.20 useState Hook",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-20-usestate-hook"},next:{title:"3.23 Adding Two Way Binding",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding"}},l={},u=[{value:"Click Handlers",id:"click-handlers",level:2},{value:"Two way binding",id:"two-way-binding",level:2},{value:"Efficiency",id:"efficiency",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This feature can be useful when you want to bind some interactive functionality (click events, etc) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," elements."),(0,o.kt)("h2",{id:"click-handlers"},"Click Handlers"),(0,o.kt)("p",null,"You can pass methods also as props so that you can call a method which might change the state in another component which doesn't have direct access to the state and which shouldn't have direct access to the state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{19,29} title="App.js"',"{19,29}":!0,title:'"App.js"'},"...\n  switchNameHandler = (newName) => {\n    // console.log('Was clicked!')\n    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'\n    this.setState({\n      persons: [\n        { name: newName, age: 28 },\n        { name: 'Manu', age: 29 },\n        { name: 'Stephanie', age: 27 },\n      ],\n    })\n  }\n\n  render() {\n    return (\n      <div className=\"App\">\n        <h1>Hi, I'm a React app!</h1>\n        <p>This is really working!</p>\n        <button onClick={() => this.switchNameHandler('MAx')}> //anonymus function\n          Switch Name\n        </button>\n        <Person\n          name={this.state.persons[0].name}\n          age={this.state.persons[0].age}\n        />\n        <Person\n          name={this.state.persons[1].name}\n          age={this.state.persons[1].age}\n          click={this.switchNameHandler.bind(this, 'Max!')} // bind this\n        />\n...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{4} title="Person.js"',"{4}":!0,title:'"Person.js"'},"const person = (props) => {\n  return (\n    <div>\n      <p onClick={props.click}>\n        I'm {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"It's a common pattern and it's important to know, you can pass down click handlers which allow you to change data in the parent component, in the app component in this case for the person component (see above)."),(0,o.kt)("h2",{id:"two-way-binding"},"Two way binding"),(0,o.kt)("p",null,"There are two ways of doing that, the first is that you call ",(0,o.kt)("inlineCode",{parentName:"p"},"bind"),", here you may simply ",(0,o.kt)("inlineCode",{parentName:"p"},"bind this"),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"this"))," controls what ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"this"))," inside the function will refer to. And second, pass here is an ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymous function")," which will be executed on a click and which then returns the result of this function getting executed. ",(0,o.kt)("em",{parentName:"p"},"See Code Blocks above.")),(0,o.kt)("h2",{id:"efficiency"},"Efficiency"),(0,o.kt)("p",null,"Now this is a very convenient syntax but it can be inefficient, react can re-render certain things in your app too often so I don't necessarily recommend using this if you don't have to, use the bind syntax instead if you can."))}d.isMDXComponent=!0}}]);