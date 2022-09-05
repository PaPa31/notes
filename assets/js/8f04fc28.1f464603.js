"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[60449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"how-copy-big-files",title:"How Copy Big Files"},a=void 0,s={unversionedId:"new-disk/how-copy-big-files",id:"new-disk/how-copy-big-files",title:"How Copy Big Files",description:"I ran this:",source:"@site/docs/new-disk/how-copy-big-files.md",sourceDirName:"new-disk",slug:"/new-disk/how-copy-big-files",permalink:"/hm/docs/new-disk/how-copy-big-files",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/new-disk/how-copy-big-files.md",tags:[],version:"current",lastUpdatedBy:"papa31",lastUpdatedAt:1608319825,formattedLastUpdatedAt:"Dec 18, 2020",frontMatter:{id:"how-copy-big-files",title:"How Copy Big Files"},sidebar:"Docs",previous:{title:"Get Recent Windows.iso from UUP Dump",permalink:"/hm/docs/new-disk/get-recent-win-iso-from-uup-dump"},next:{title:"Install Git Bash and SSH Setup",permalink:"/hm/docs/new-disk/install-git-bash-and-ssh-setup"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I ran this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rsync -a --info=progress2 --info=name0 /mnt/sda4/ /mnt/sdc2/\n\n")),(0,o.kt)("p",null,"but need to run this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo rsync -rah --stats --info=progress2 '/path/to/source' '/path/to/destination'\n")),(0,o.kt)("p",null,"From here:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://superuser.com/questions/1271882/convert-ntfs-partition-to-ext4-how-to-copy-the-data/1464264#1464264"},"https://superuser.com/questions/1271882/convert-ntfs-partition-to-ext4-how-to-copy-the-data/1464264#1464264")))}u.isMDXComponent=!0}}]);