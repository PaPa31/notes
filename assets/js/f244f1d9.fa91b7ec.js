"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[68437],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1590:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(37358),o=n(98448),c=["components"],s={id:"8-07-setting-up-project",title:"8.07 Setting Up Project",date:new Date("2021-04-09T18:39:25.000Z")},u=void 0,p={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project",id:"react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project",isDocsHomePage:!1,title:"8.07 Setting Up Project",description:"Installing Open Sans Font",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-07-setting-up-project",title:"8.07 Setting Up Project",date:"2021-04-09T18:39:25.000Z"},sidebar:"Docs",previous:{title:"8.06 Must Read Enabling Css Module",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module"},next:{title:"8.08 Creating Layout Component",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component"}},m=[{value:"Installing <code>Open Sans</code> Font",id:"installing-open-sans-font",children:[]},{value:"Installing archaic <code>react-script</code>",id:"installing-archaic-react-script",children:[]},{value:"Ejecting of <code>react-script</code>",id:"ejecting-of-react-script",children:[]},{value:"Configure <code>webpack.config</code> files",id:"configure-webpackconfig-files",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installing-open-sans-font"},"Installing ",(0,i.kt)("inlineCode",{parentName:"h2"},"Open Sans")," Font"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{href:"https://fonts.google.com/specimen/Open+Sans",class:"external"},"fonts.google.com: Open Sans")),(0,i.kt)("p",null,"Insert to ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},'<link rel="preconnect" href="https://fonts.gstatic.com">\n<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">\n')),(0,i.kt)("h2",{id:"installing-archaic-react-script"},"Installing archaic ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-script")),(0,i.kt)("p",null,"First, uninstall the current ",(0,i.kt)("inlineCode",{parentName:"p"},"react-script")," version and then install ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.13")," version:"),(0,i.kt)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall react-scripts --save && npm install react-scripts@1.0.13 --save\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn remove react-scripts&& yarn add react-scripts@1.0.13\n")))),(0,i.kt)("h2",{id:"ejecting-of-react-script"},"Ejecting of ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-script")),(0,i.kt)("p",null,"Disassemble React tooling:"),(0,i.kt)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run eject\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run eject\n")))),(0,i.kt)("h2",{id:"configure-webpackconfig-files"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h2"},"webpack.config")," files"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"I think now you not need ejected react-script. Reed ",(0,i.kt)("a",{parentName:"p",href:"8-06-must-read-enabling-css-module#"},"this"),"."))),(0,i.kt)("p",null,"Better see ",(0,i.kt)("a",{parentName:"p",href:"../05-styling-react-components-and-elements/5-10-0-working-with-css-modules#configure-webpackconfig-files"},"this"),"."))}f.isMDXComponent=!0},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(22713);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),b=v.tabGroupChoices,h=v.setTabGroupChoices,k=(0,r.useState)(g),y=k[0],w=k[1],N=[];if(null!=p){var O=b[p];null!=O&&O!==y&&f.some((function(e){return e.value===O}))&&w(O)}var j=function(e){var t=e.currentTarget,n=N.indexOf(t),r=f[n].value;w(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r}}]);