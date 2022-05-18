"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[47270],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50558:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"all-vscode-keyboard-shortcuts",title:"All vscode Keyboard Shortcuts",date:new Date("2021-02-15T15:02:28.000Z"),description:"What keyboard shortcuts do I use with VS Code"},d=void 0,p={unversionedId:"vs-code/all-vscode-keyboard-shortcuts",id:"vs-code/all-vscode-keyboard-shortcuts",title:"All vscode Keyboard Shortcuts",description:"What keyboard shortcuts do I use with VS Code",source:"@site/docs/vs-code/all-vscode-keyboard-shortcuts.md",sourceDirName:"vs-code",slug:"/vs-code/all-vscode-keyboard-shortcuts",permalink:"/hm/docs/vs-code/all-vscode-keyboard-shortcuts",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/all-vscode-keyboard-shortcuts.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1652892786,formattedLastUpdatedAt:"5/18/2022",frontMatter:{id:"all-vscode-keyboard-shortcuts",title:"All vscode Keyboard Shortcuts",date:"2021-02-15T15:02:28.000Z",description:"What keyboard shortcuts do I use with VS Code"},sidebar:"Docs",previous:{title:"Working with Multipass Instances",permalink:"/hm/docs/virtual-machines/multipass/working-with-multipass-instances"},next:{title:"All Self Built Extensions",permalink:"/hm/docs/vs-code/extension-api/all-self-built-extensions"}},u={},m=[{value:"Windows &amp; Linux Sync Keyboard Shortcuts",id:"windows--linux-sync-keyboard-shortcuts",level:2},{value:"Auto Sync",id:"auto-sync",level:3},{value:"Keyboard Shortcuts List",id:"keyboard-shortcuts-list",level:2}],s={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"windows--linux-sync-keyboard-shortcuts"},"Windows & Linux Sync Keyboard Shortcuts"),(0,l.kt)("p",null,"How do I sync keyboard shortcuts across platforms (Linux, Windows, Mac)?"),(0,l.kt)("p",null,"Internal settings do not support this option."),(0,l.kt)("p",null,"I copied ",(0,l.kt)("inlineCode",{parentName:"p"},"keybindings.json")," when I being in Linux to Windows disk:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cp ~/.config/Code/User/keybindings.json '/mnt/sdc1/Users/parsh/Application Data/Code/User/'\n")),(0,l.kt)("h3",{id:"auto-sync"},"Auto Sync"),(0,l.kt)("p",null,"Synchronization in ",(0,l.kt)("inlineCode",{parentName:"p"},"vscode")," can be performed automatically after loggin into ",(0,l.kt)("inlineCode",{parentName:"p"},"vscode")," and enabling ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings Sync")," option."),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You need to be logged into the same account on both OS. (e.g. PaPa31 (GitHub) on Linux & PaPa31 (GitHub) on Windows)"))),(0,l.kt)("h2",{id:"keyboard-shortcuts-list"},"Keyboard Shortcuts List"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nikomedvedev.ru/other/vscodeshortcuts/hotkeys.html"},"Default hotkeys(shortcuts)")),(0,l.kt)("small",null,(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Keyboard Shortcut"),(0,l.kt)("th",{parentName:"tr",align:null},"How Did"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+k t")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://stackoverflow.com/questions/38780057/how-to-insert-current-date-time-in-vscode#57654879"},"copy/past")," to keybindings.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Insert readable Date & Time"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-05 20:22:46")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+k Shift+t")),(0,l.kt)("td",{parentName:"tr",align:null},"see above"),(0,l.kt)("td",{parentName:"tr",align:null},"Insert unreadable Date & Time"),(0,l.kt)("td",{parentName:"tr",align:null},"20210205202330")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Change ",(0,l.kt)("del",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"del"},"Shift+Alt+/"))," to ",(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+Shift+/")),(0,l.kt)("td",{parentName:"tr",align:null},"Press ",(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+Shift+P"),"> type Emmet: Wrap with Abbreviation > press ",(0,l.kt)("inlineCode",{parentName:"td"},"gear")," icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrap with ",(0,l.kt)("inlineCode",{parentName:"td"},"some")," HTML-tags"),(0,l.kt)("td",{parentName:"tr",align:null},"type log2 > select 2 > ",(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+Shift+/")," > type sub + Enter > log",(0,l.kt)("sub",null,"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+e Up")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"snippets/snippet-plus-shortcut"},"Snippet + Shortcut")),(0,l.kt)("td",{parentName:"tr",align:null},"Wrap with ",(0,l.kt)("inlineCode",{parentName:"td"},"<sup>")," tags"),(0,l.kt)("td",{parentName:"tr",align:null},"23 -> 2",(0,l.kt)("sup",null,"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+e Down")),(0,l.kt)("td",{parentName:"tr",align:null},"see above"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrap with ",(0,l.kt)("inlineCode",{parentName:"td"},"<sub>")," tags"),(0,l.kt)("td",{parentName:"tr",align:null},"log2 -> log",(0,l.kt)("sub",null,"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+e t")),(0,l.kt)("td",{parentName:"tr",align:null},"see above"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrap with ",(0,l.kt)("inlineCode",{parentName:"td"},"<textarea>")," and some text"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<textarea>Your answer:</textarea>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+g c")),(0,l.kt)("td",{parentName:"tr",align:null},"NOTE, TIP, IMPORTANT, CAUTION, WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"add markdown admonition"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"::: :::"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+g t")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"add markdown code block"),(0,l.kt)("td",{parentName:"tr",align:null},"``````")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Alt+g c")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"macros/1-auto-frontmatter"},"Macro: createAutoFrontmatter")),(0,l.kt)("td",{parentName:"tr",align:null},"add markdown frontmatter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--- ... ---"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+g a")),(0,l.kt)("td",{parentName:"tr",align:null},"make external link with 2 vars"),(0,l.kt)("td",{parentName:"tr",align:null},"1st var -> copy some link; 2nd var highlight some text"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",class:"external"},"Prettier"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+g y")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"insert advanced code block"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'jsx title="App.js" {}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Alt+g a")),(0,l.kt)("td",{parentName:"tr",align:null},"AutoAnchor: make external link using copied link"),(0,l.kt)("td",{parentName:"tr",align:null},"Caution: place cursor at start of line"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"https://code.visualstudio.com/api/get-started/your-first-extension",class:"external"},"code.visualstudio.com: Your First Extension"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Alt+g Shift+s")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'AutoAnchor with "Source:"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Alt+g Shift+r")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'AutoAnchor with "Read more:"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+Alt+1")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+1")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Open default browser"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Alt+g f")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Inspect TM scopes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+n")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"open new file"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+Alt s")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"save all files"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl+K Ctrl+w")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"close all tabs"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Alt+G u")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"macros/2-auto-frontmatter"},"Macro: updateAutoFrontmatter")),(0,l.kt)("td",{parentName:"tr",align:null}))))))}k.isMDXComponent=!0}}]);