"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[78449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(b,a(a({ref:t},c),{},{components:n})):o.createElement(b,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"VS Code: Fix Bug in Any Extension by Rebuilding It",authors:["papa31"],tags:["vsix","VS Code","extension"],date:new Date("2021-11-06T20:51:21.000Z"),description:"How to fix a bug in any VS Code extension (.vsix) by rebuilding that extension"},a=void 0,l={permalink:"/hm/blog/2021/11/06/fix-bug-in-any-vscode-extension",editUrl:"https://github.com/papa31/hm/edit/documentation/blog/2021-11-06/fix-bug-in-any-vscode-extension.md",source:"@site/blog/2021-11-06/fix-bug-in-any-vscode-extension.md",title:"VS Code: Fix Bug in Any Extension by Rebuilding It",description:"How to fix a bug in any VS Code extension (.vsix) by rebuilding that extension",date:"2021-11-06T20:51:21.000Z",formattedDate:"November 6, 2021",tags:[{label:"vsix",permalink:"/hm/blog/tags/vsix"},{label:"VS Code",permalink:"/hm/blog/tags/vs-code"},{label:"extension",permalink:"/hm/blog/tags/extension"}],readingTime:6.875,hasTruncateMarker:!0,authors:[{name:"papa31",url:"https://github.com/papa31",imageURL:"https://github.com/papa31.png",key:"papa31"}],frontMatter:{title:"VS Code: Fix Bug in Any Extension by Rebuilding It",authors:["papa31"],tags:["vsix","VS Code","extension"],date:"2021-11-06T20:51:21.000Z",description:"How to fix a bug in any VS Code extension (.vsix) by rebuilding that extension"},prevItem:{title:"CI evolution: From FTP client to GitHub Action",permalink:"/hm/blog/2021/11/13/from-ftp-client-to-github-action"},nextItem:{title:"Where Google Photos Hides Direct Links to Your Uploaded Images",permalink:"/hm/blog/2021/10/05/where-google-photos-hides-direct-links-to-your-uploaded-images"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, I show you how to rebuild a ",(0,r.kt)("inlineCode",{parentName:"p"},"VS-Code extension")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SFTP")," extension as an example."))}u.isMDXComponent=!0}}]);