"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[95249],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),s=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(m,".").concat(u)]||d[u]||c[u]||r;return n?o.createElement(g,l(l({ref:t},p),{},{components:n})):o.createElement(g,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37653:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Install MongoDB on Windows",authors:["papa31"],tags:["database","mongodb","mongosh","windows"],date:new Date("2022-05-01T17:35:28.000Z"),description:"Installation MongoDB and mongosh on Windows",draft:!1},m=void 0,s={permalink:"/hm/blog/2022/05/01/install-mongodb-on-windows",editUrl:"https://github.com/papa31/hm/edit/documentation/blog/2022-05-01-install-mongodb-on-windows.md",source:"@site/blog/2022-05-01-install-mongodb-on-windows.md",title:"Install MongoDB on Windows",description:"Installation MongoDB and mongosh on Windows",date:"2022-05-01T17:35:28.000Z",formattedDate:"May 1, 2022",tags:[{label:"database",permalink:"/hm/blog/tags/database"},{label:"mongodb",permalink:"/hm/blog/tags/mongodb"},{label:"mongosh",permalink:"/hm/blog/tags/mongosh"},{label:"windows",permalink:"/hm/blog/tags/windows"}],readingTime:.835,truncated:!0,authors:[{name:"papa31",url:"https://github.com/papa31",imageURL:"https://lh3.googleusercontent.com/pw/AL9nZEWdPMrnKSPtfT-TQRD_tqKd_FKG4Wu321p2MM9kTjjTGRFIejlLow1t9Mho2Qv4MazXJjk2h0AFwbIz_PXrCMEp4LVFs17RknW7LzWaWAsDrf5ZmwD7EKVo0tgzIZqnO5mm9hqrouVSiLP7zJXqocpLLQ=s260-no",key:"papa31"}],frontMatter:{title:"Install MongoDB on Windows",authors:["papa31"],tags:["database","mongodb","mongosh","windows"],date:"2022-05-01T17:35:28.000Z",description:"Installation MongoDB and mongosh on Windows",draft:!1},nextItem:{title:"CI evolution: From FTP client to GitHub Action",permalink:"/hm/blog/2021/11/13/from-ftp-client-to-github-action"}},p={authorsImageUrls:[void 0]},c=[{value:"Install MongoDB",id:"install-mongodb",level:3},{value:"Install mongosh",id:"install-mongosh",level:3},{value:"Run MongoDB",id:"run-mongodb",level:3},{value:"Source",id:"source",level:3}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"install-mongodb"},"Install MongoDB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("em",{parentName:"p"},".msi")," installer: ",(0,r.kt)("a",{href:"https://www.mongodb.com/try/download/community?tck=docs_server",class:"external"},"mongodb.com: Community Edition"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the wizard by double-clicking the ",(0,r.kt)("em",{parentName:"p"},".msi")," file")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In wizard:",(0,r.kt)("br",{parentName:"p"}),"\n","a. Change location to ",(0,r.kt)("em",{parentName:"p"},"F:\\Program Files\\MongoDB\\Server\\5.0\\bin"),(0,r.kt)("br",{parentName:"p"}),"\n","b. Uncheck the ",(0,r.kt)("em",{parentName:"p"},"Install MongoDB as a Service"),(0,r.kt)("br",{parentName:"p"}),"\n","c. Uncheck the ",(0,r.kt)("em",{parentName:"p"},"Install MongoDB Compass"),(0,r.kt)("br",{parentName:"p"}),"\n","d. Click Install")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("em",{parentName:"p"},"C:\\Program Files\\MongoDB\\Server\\5.0\\bin")," to your ",(0,r.kt)("a",{href:"/docs/workplace/windows/set-environment-variable-windows"},"PATH environment variable")))),(0,r.kt)("h3",{id:"install-mongosh"},"Install mongosh"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and run the MongoDB Shell ",(0,r.kt)("em",{parentName:"li"},".msi")," installer: ",(0,r.kt)("a",{href:"https://www.mongodb.com/try/download/shell?jmp=docs",class:"external"},"mongodb.com: Shell")),(0,r.kt)("li",{parentName:"ol"},"Accept location: ",(0,r.kt)("em",{parentName:"li"},"F:\\Users\\parsh\\AppData\\Local\\Programs\\mongosh")),(0,r.kt)("li",{parentName:"ol"},"Add the mongosh binary (F:\\Users\\parsh\\AppData\\Local\\Programs\\mongosh",")"," to your ",(0,r.kt)("a",{href:"/docs/workplace/windows/set-environment-variable-windows"},"PATH environment variable"))),(0,r.kt)("h3",{id:"run-mongodb"},"Run MongoDB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("em",{parentName:"p"},"cmd")," as admin and create the data directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmd",metastring:'title="cmd"',title:'"cmd"'},'c:\nmd "\\data\\db"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start MongoDB database:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmd",metastring:'title="cmd"',title:'"cmd"'},'"F:\\Program Files\\MongoDB\\Server\\5.0\\bin\\mongod.exe" --dbpath="c:\\data\\db"\n\n# or simply\n\nmongod --dbpath="c:\\data\\db"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to MongoDB:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmd",metastring:'title="cmd"',title:'"cmd"'},"mongosh\n")),(0,r.kt)("p",{parentName:"li"},"After running this command, you should see information about your MongoDB shell, the local server connection, and some additional information printed to the terminal."))),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/",class:"external"},"mongodb.com: Install Mongodb On Windows"))))}u.isMDXComponent=!0}}]);