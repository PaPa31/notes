"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[73622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,f=d["".concat(a,".").concat(g)]||d[g]||c[g]||o;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={},l=void 0,s={unversionedId:"workplace/git/resolving-git-line-ending-issues-in-wsl",id:"workplace/git/resolving-git-line-ending-issues-in-wsl",title:"resolving-git-line-ending-issues-in-wsl",description:"Resolving Git line ending issues in WSL (resulting in many modified files)",source:"@site/docs/workplace/git/resolving-git-line-ending-issues-in-wsl.md",sourceDirName:"workplace/git",slug:"/workplace/git/resolving-git-line-ending-issues-in-wsl",permalink:"/hm/docs/workplace/git/resolving-git-line-ending-issues-in-wsl",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/workplace/git/resolving-git-line-ending-issues-in-wsl.md",tags:[],version:"current",lastUpdatedBy:"papa31",lastUpdatedAt:1608497052,formattedLastUpdatedAt:"Dec 20, 2020",frontMatter:{},sidebar:"Docs",previous:{title:".gitignore don't Hide File",permalink:"/hm/docs/workplace/git/gitignore-dont-hide-file"},next:{title:"Installed Programs",permalink:"/hm/docs/workplace/installed-programs"}},a={},p=[{value:"Resolving Git line ending issues in WSL (resulting in many modified files)",id:"resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files"},"Resolving Git line ending issues in WSL (resulting in many modified files)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/troubleshooting#_resolving-git-line-ending-issues-in-containers-resulting-in-many-modified-files"},"source")),(0,r.kt)("p",null,"Since Windows and Linux use different default line endings, Git may report a large number of modified files that have no differences aside from their line endings. To prevent this from happening, you can disable line-ending conversion using a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitattributes")," file or globally on the Windows side."),(0,r.kt)("p",null,"Typically adding or modifying a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitattributes")," file in your repository is the most reliable way to solve this problem. Committing this file to source control will help others and allows you to vary behaviors by repository as appropriate. For example, adding the following to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitattributes")," file to the root of your repository will force everything to be LF, except for Windows batch files that require CRLF:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* text=auto eol=lf\n*.{cmd,[cC][mM][dD]}  text eol=crlf\n*.{bat,[bB][aA][tT]}  text eol=crlf\n")),(0,r.kt)("p",null,"Note that this works in ",(0,r.kt)("strong",{parentName:"p"},"Git v2.10+"),", so if you are running into problems, be sure you've got a recent Git client installed. You can add other file types in your repository that require CRLF to this same file."),(0,r.kt)("p",null,"If you would prefer to still always upload Unix-style line endings (LF), you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git config --global core.autocrlf input\n")),(0,r.kt)("p",null,"If you'd prefer to disable line-ending conversion entirely, run the following instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git config --global core.autocrlf false\n")),(0,r.kt)("p",null,"Finally, you may need to clone the repository again for these settings to take effect."),(0,r.kt)("p",null,"11/6/2020"))}c.isMDXComponent=!0}}]);