"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[36437],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46066:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"computer-abstraction-levels",title:"Computer Abstraction Levels",date:new Date("2021-03-02T14:09:27.000Z"),description:"Levels of abstraction for the computer"},l=void 0,c={unversionedId:"digital-design/computer-abstraction-levels",id:"digital-design/computer-abstraction-levels",title:"Computer Abstraction Levels",description:"Levels of abstraction for the computer",source:"@site/docs/digital-design/abstraction-levels.md",sourceDirName:"digital-design",slug:"/digital-design/computer-abstraction-levels",permalink:"/hm/docs/digital-design/computer-abstraction-levels",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/digital-design/abstraction-levels.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1637849479,formattedLastUpdatedAt:"11/25/2021",frontMatter:{id:"computer-abstraction-levels",title:"Computer Abstraction Levels",date:"2021-03-02T14:09:27.000Z",description:"Levels of abstraction for the computer"},sidebar:"Docs",previous:{title:"Google's Protocol Buffer",permalink:"/hm/docs/data/googles-protocol-buffers"},next:{title:"Binary Numbers",permalink:"/hm/docs/digital-design/binary-numbers/"}},u={},p=[{value:"THE ART OF MANAGING COMPLEXITY",id:"the-art-of-managing-complexity",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-art-of-managing-complexity"},"THE ART OF MANAGING COMPLEXITY"),(0,i.kt)("p",null,"One of the characteristics that separates an engineer or computer scientist from a layperson is a systematic approach to managing complexity. Modern digital systems are built from millions or billions of transistors. No human being could understand these systems by writing equations describing the movement of electrons in each transistor and solving all of the equations simultaneously. You will need to learn to manage complexity to understand how to build a microprocessor without getting mired in a morass of detail."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Computer Abstraction Levels",src:r(21786).Z,width:"350",height:"683"})),(0,i.kt)("p",null,"This concept I found in Harrises book about ",(0,i.kt)("a",{target:"_blank",href:r(88711).Z},"Digital Design"),".\nThis concept simple:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application Software (Programs)"),(0,i.kt)("li",{parentName:"ul"},"Operating Systems (Device Drivers)"),(0,i.kt)("li",{parentName:"ul"},"Architecture (Instructions, Registers)"),(0,i.kt)("li",{parentName:"ul"},"Micro-architecture (Datapaths, Controllers)"),(0,i.kt)("li",{parentName:"ul"},"Logic (Adders, Memories)"),(0,i.kt)("li",{parentName:"ul"},"Digital Circuits (AND gates, NOT gates)"),(0,i.kt)("li",{parentName:"ul"},"Analog Circuits (Amplifiers, Filters)"),(0,i.kt)("li",{parentName:"ul"},"Devices (Transistors, Diodes)"),(0,i.kt)("li",{parentName:"ul"},"Physics (Electrons)")),(0,i.kt)("p",null,"This is beautiful scheme!"),(0,i.kt)("p",null,"Scheme ",(0,i.kt)("inlineCode",{parentName:"p"},"levels of abstraction"),"."),(0,i.kt)("p",null,"More over..."),(0,i.kt)("p",null,"Figure 1.1 illustrates levels of abstraction for an electronic computer system along with typical building blocks at each level. At the lowest level of abstraction is the physics, the motion of electrons. The behavior of electrons is described by quantum mechanics and Maxwell\u2019s equations. Our system is constructed from electronic ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"devices"))," such as transistors (or vacuum tubes, once upon a time). These devices have well-defined connection points called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"terminals"))," and can be modeled by the relationship between voltage and current as measured at each terminal. By abstracting to this device level, we can ignore the individual electrons. The next level of abstraction is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"analog circuits")),", in which devices are assembled to create components such as amplifiers. Analog circuits input and output a continuous range of voltages. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Digital circuits"))," such as logic gates restrict the voltages to discrete ranges, which we will use to indicate 0 and 1. In logic design, we build more complex structures, such as adders or memories, from digital circuits."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Microarchitecture"))," links the logic and architecture levels of abstraction. The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"architecture"))," level of abstraction describes a computer from the programmer\u2019s perspective. For example, the Intel x86 architecture used by microprocessors in most ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"personal computers"))," (PCs) is defined by a set of instructions and registers (memory for temporarily storing variables) that the programmer is allowed to use. Microarchitecture involves combining logic elements to execute the instructions defined by the architecture. A particular architecture can be implemented by one of many different microarchitectures with different price/performance/power trade-offs. For example, the Intel Core i7, the Intel 80486, and the AMD Athlon all implement the x86 architecture with different microarchitectures."),(0,i.kt)("p",null,"Moving into the software realm, the operating system handles lowlevel details such as accessing a hard drive or managing memory. Finally, the application software uses these facilities provided by the operating system to solve a problem for the user. Thanks to the power of abstraction, your grandmother can surf the Web without any regard for the quantum vibrations of electrons or the organization of the memory in her computer."),(0,i.kt)("p",null,"From book ",(0,i.kt)("a",{parentName:"p",href:"https://papa31.github.io/hm/assets/files/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012-278aad41bbd5750ed2461b2011414915.pdf"},"Digital design")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(66413).Z},"Digital design(rus)")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(88711).Z},"Abstraction")," page #2"))}d.isMDXComponent=!0},66413:function(e,t,r){t.Z=r.p+"assets/files/digital-design-and-computer-architecture-russian-translation_July16_2016-f8d0a979a023efa58aa7d64c5e856b72.pdf"},88711:function(e,t,r){t.Z=r.p+"assets/files/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012-278aad41bbd5750ed2461b2011414915.pdf"},21786:function(e,t,r){t.Z=r.p+"assets/images/computer-abstraction-levels-3887f33923daad55bced2c000531e4d2.png"}}]);