"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46393],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(t),u=o,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6277:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],c={id:"5-09-styled-components-and-dynamic-styles",title:"5.09 Styled Components And Dynamic Styles",date:new Date("2021-04-04T17:24:25.000Z")},l=void 0,i={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles",id:"react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles",isDocsHomePage:!1,title:"5.09 Styled Components And Dynamic Styles",description:'`jsx title="App.js" {7,14,26}',source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-09-styled-components-and-dynamic-styles",title:"5.09 Styled Components And Dynamic Styles",date:"2021-04-04T17:24:25.000Z"},sidebar:"Docs",previous:{title:"5.08 More On Styled Components",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components"},next:{title:"5.10.0 Working With CSS Modules",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules"}},p=[],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {7,14,26}',title:'"App.js"',"{7,14,26}":!0},'import React, { Component } from "react";\nimport styled from "styled-components";\nimport "./App.css";\nimport Person from "./Person/Person";\n\nconst StyledButton = styled.button`\n      background-color: ${(props) => (props.alt ? "red" : "green")};\n      color: white;\n      font: inherit;\n      border: 1px solid blue;\n      padding: 8px;\n      cursor: pointer;\n      &:hover {\n        background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};\n        color: #333\n      },\n`;\n\n    ...\n\n    return (\n      <div className="App">\n        <h1>Hi, I\'m a React app!</h1>\n        <p className={classes.join(" ")}>This is really working!</p>\n        <StyledButton\n          alt={this.state.showPersons}\n          onClick={this.togglePersonsHandler}\n        >\n          Toggle Persons\n        </StyledButton>\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')))}d.isMDXComponent=!0}}]);