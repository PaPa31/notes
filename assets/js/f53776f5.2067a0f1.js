"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[272],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6515:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={id:"10-0-lesson",title:"10.0 Lesson",date:new Date("2021-04-13T19:45:10.000Z")},o=void 0,s={unversionedId:"react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson",id:"react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson",title:"10.0 Lesson",description:"1. Intro",source:"@site/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson.md",sourceDirName:"react-complete-guide/10-burger-builder-project-accessing-server",slug:"/react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-0-lesson.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"10-0-lesson",title:"10.0 Lesson",date:"2021-04-13T19:45:10.000Z"},sidebar:"Courses",previous:{title:"9.18 Useful Resources And Links",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-18-useful-resources-and-links"},next:{title:"10.02 Firebase And Right Database",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database"}},l={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Intro"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-02-firebase-and-right-database"},"Firebase & The Right Database")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-03-creating-firebase-project"},"Creating the Firebase Project")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-04-creating-axios-instance"},"Creating the Axios Instance")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-05-sending-post-request"},"Sending a POST Request")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-06-displaying-spinner-while-sending-request"},"Displaying a Spinner while Sending a Request")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-07-handling-errors"},"Handling Errors")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-08-retrieving-data-from-backend"},"Retrieving Data from the Backend")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-09-0-removing-old-interceptors"},"Removing Old Interceptors"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-09-1-renaming-component-willmount"},"Renaming componentWillMount")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"10-10-useful-resources-and-links"},"Useful Resources & Links"))))}u.isMDXComponent=!0}}]);