"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[9022],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96772:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(37358),i=n(98448),c=["components"],s={id:"3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",date:new Date("2021-03-21T20:06:52.000Z")},p=void 0,u={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",isDocsHomePage:!1,title:"3.03.1.1 React With Jsx",description:"Create index.html file with this:",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx.mdx",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",date:"2021-03-21T20:06:52.000Z"},sidebar:"Docs",previous:{title:"3.03.1.0 Pure React",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react"},next:{title:"3.03.2.0 Using Create React App",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-0-using-create-react-app"}},d=[{value:"Finished File",id:"finished-file",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file with this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"{11-12,13-24}","{11-12,13-24}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script>\n      class App extends React.Component {\n        render() {\n          return React.createElement(\n            "div",\n            {},\n            React.createElement("h1", {}, "Hello World!")\n          );\n        }\n      }\n      ReactDOM.render(React.createElement(App), document.getElementById("app"));\n    <\/script>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"This file contains two script tags so that the browser understands the ",(0,l.kt)("inlineCode",{parentName:"p"},"React syntax"),", the third script tags contain code written in React syntax."),(0,l.kt)("p",null,"Let's convert our code from ",(0,l.kt)("inlineCode",{parentName:"p"},"React syntax")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"JSX syntax")," and compare:"),(0,l.kt)(o.Z,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"JSX",value:"jsx"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class App extends React.Component {\n  render() {\n    return React.createElement(\n      "div",\n      {},\n      React.createElement("h1", {}, "Hello World!")\n    );\n  }\n}\nReactDOM.render(React.createElement(App), document.getElementById("app"));\n'))),(0,l.kt)(i.Z,{value:"jsx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'class App extends React.Component {\n  render() {\n    return <div>Hello World!</div>\n}\nReactDOM.render(<App/>, document.getElementById("app"));\n')))),(0,l.kt)("p",null,"The JSX is easy to understand. And it looks like HTML markup."),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," package to the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file so that the browser understands the JSX syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n')),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," attribute to the last script tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/babel">\n// JSX\n<\/script>\n')),(0,l.kt)("h2",{id:"finished-file"},"Finished File"),(0,l.kt)("p",null,"Full index.html will be looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n    <script type="text/babel">\n      class App extends React.Component {\n        render() {\n          return <h1>Hello World!</h1>;\n        }\n      }\n      ReactDOM.render(<App />, document.getElementById("app"));\n    <\/script>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"This approach is fine for learning. However, it makes your website slow. If you install a ",(0,l.kt)("a",{href:"https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project",class:"external"},"JSX preprocessor"),", it convert all your ",(0,l.kt)("inlineCode",{parentName:"p"},"<script>")," tags automatically to the plain JavaScript code suitable for the browser."))}h.isMDXComponent=!0},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(22713);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=r.Children.toArray(e.children),h=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=l(),v=b.tabGroupChoices,g=b.setTabGroupChoices,y=(0,r.useState)(f),k=y[0],x=y[1],w=[];if(null!=u){var j=v[u];null!=j&&j!==k&&h.some((function(e){return e.value===j}))&&x(j)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=h[n].value;x(r),null!=u&&(g(u,r),setTimeout((function(){var e,n,r,a,l,o,i,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,o=window,i=o.innerHeight,s=o.innerWidth,n>=0&&l<=s&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r}}]);