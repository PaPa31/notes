"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[59697],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27448:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=(t(37358),t(98448),["components"]),l={title:"nvs: One Node Version Per Terminal in Windows",authors:["papa31"],tags:["nvs","node"],date:new Date("2021-09-19T13:47:35.000Z"),decription:"Install and setup nvs to Windows for PowerShell and Git-Bash",draft:!1},u=void 0,c={permalink:"/hm/blog/2021/09/19/nvs-one-node-version-per-terminal-in-windows",editUrl:"https://github.com/papa31/hm/edit/documentation/blog/2021-09-19-nvs-one-node-version-per-terminal-in-windows.mdx",source:"@site/blog/2021-09-19-nvs-one-node-version-per-terminal-in-windows.mdx",title:"nvs: One Node Version Per Terminal in Windows",description:"I tried to configure nvm-windows to automatically change the node version based on the folder with a specific .nvmrc file. But unsuccessfully. When I used to run nvm use the node version changed globally.",date:"2021-09-19T13:47:35.000Z",formattedDate:"September 19, 2021",tags:[{label:"nvs",permalink:"/hm/blog/tags/nvs"},{label:"node",permalink:"/hm/blog/tags/node"}],readingTime:2.94,truncated:!0,authors:[{name:"papa31",title:"bibel miner",url:"https://github.com/papa31",imageURL:"https://github.com/papa31.png",key:"papa31"}],nextItem:{title:"Docusaurus: Test & Build",permalink:"/hm/blog/2020/12/21/docusaurus-test-and-build"}},s={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I tried to configure ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"nvm-windows")," to automatically change the ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," version based on the folder with a specific ",(0,a.kt)("inlineCode",{parentName:"p"},".nvmrc")," file. But unsuccessfully. When I used to run ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use")," the node version changed globally."),(0,a.kt)("p",null,"I have read about ",(0,a.kt)("a",{href:"https://github.com/jasongin/nvs#automatic-switching-per-directory",class:"external"},"nvs: Automatic Switching Per Directory (github.com)")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"nvs readme file")," and decided to give it a try."))}m.isMDXComponent=!0},98448:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},37358:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),o=t(22713);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var n,t=e.lazy,o=e.block,c=e.defaultValue,s=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,h=a(),b=h.tabGroupChoices,g=h.setTabGroupChoices,y=(0,r.useState)(v),w=y[0],O=y[1],k=[];if(null!=p){var x=b[p];null!=x&&x!==w&&f.some((function(e){return e.value===x}))&&O(x)}var C=function(e){var n=e.currentTarget,t=k.indexOf(n),r=f[t].value;O(r),null!=p&&(g(p,r),setTimeout((function(){var e,t,r,o,a,i,l,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&a<=c&&o<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;t=k[r]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;t=k[o]||k[k.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},d)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":w===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=t?t:n)}))),t?(0,r.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}},22713:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r}}]);