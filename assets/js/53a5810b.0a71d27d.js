"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[55491],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"setup-ventoy-remove-win11-check",title:"Setup Ventoy (Remove Win11 Check)",date:new Date("2021-11-03T07:38:49.000Z")},l=void 0,p={unversionedId:"new-disk/setup-ventoy-remove-win11-check",id:"new-disk/setup-ventoy-remove-win11-check",isDocsHomePage:!1,title:"Setup Ventoy (Remove Win11 Check)",description:"Source Plugin_control",source:"@site/docs/new-disk/setup-ventoy-remove-win11-check.md",sourceDirName:"new-disk",slug:"/new-disk/setup-ventoy-remove-win11-check",permalink:"/hm/docs/new-disk/setup-ventoy-remove-win11-check",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/new-disk/setup-ventoy-remove-win11-check.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1635959584,formattedLastUpdatedAt:"11/3/2021",frontMatter:{id:"setup-ventoy-remove-win11-check",title:"Setup Ventoy (Remove Win11 Check)",date:"2021-11-03T07:38:49.000Z"},sidebar:"Docs",previous:{title:"Partitioning a New Disk",permalink:"/hm/docs/new-disk/partitioning-new-disk"},next:{title:"Windows Terminal",permalink:"/hm/docs/new-disk/windows-terminal"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{href:"https://www.ventoy.net/en/plugin_control.html",class:"external"},"ventoy.net: Plugin_control")),(0,i.kt)("p",null,"Download the latest version of ",(0,i.kt)("inlineCode",{parentName:"p"},"Ventoy")," from here:"),(0,i.kt)("a",{href:"https://github.com/ventoy/Ventoy/releases",class:"external"},"github.com: Releases"),(0,i.kt)("p",null,'Launch the Ventoy GUI (Windows: "Ventoy2Disk.exe", Linux: ',"*",".sh) and install ",(0,i.kt)("inlineCode",{parentName:"p"},"Ventoy")," on a USB stick (8Gb or more)."),(0,i.kt)("p",null,"After that, you will have A USB stick with two partitions: ",(0,i.kt)("inlineCode",{parentName:"p"},"Ventoy"),"(empty) and ",(0,i.kt)("inlineCode",{parentName:"p"},"VTOYEFI")," (with files; this partition may be invisible)."),(0,i.kt)("p",null,"First, copy/past an ",(0,i.kt)("inlineCode",{parentName:"p"},"windows.iso")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"Ventoy's")," empty root. Then create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ventoy")," folder in the root and place a ",(0,i.kt)("inlineCode",{parentName:"p"},"ventoy.json")," file with following content in this folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ventoy.json"',title:'"ventoy.json"'},'{\n  "control": [{"VTOY_WIN11_BYPASS_CHECK": "1"}]\n}\n')))}m.isMDXComponent=!0}}]);