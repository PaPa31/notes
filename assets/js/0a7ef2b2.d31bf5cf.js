"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[68019],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"twos-complement",title:"Two's Complement"},u=void 0,s={unversionedId:"digital-design/binary-numbers/twos-complement",id:"digital-design/binary-numbers/twos-complement",isDocsHomePage:!1,title:"Two's Complement",description:"Two's complement numbers are identical to unsigned binary numbers, except that the two's binary numbers have the most significant bit with FUCKING value of -2N-1. It's not clear!",source:"@site/docs/digital-design/binary-numbers/twos-complement.md",sourceDirName:"digital-design/binary-numbers",slug:"/digital-design/binary-numbers/twos-complement",permalink:"/hm/docs/digital-design/binary-numbers/twos-complement",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/digital-design/binary-numbers/twos-complement.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1613489469,formattedLastUpdatedAt:"2/16/2021",frontMatter:{id:"twos-complement",title:"Two's Complement"},sidebar:"Docs",previous:{title:"Two's Complement Overflow",permalink:"/hm/docs/digital-design/binary-numbers/twos-complement-overflow"},next:{title:"Weird Number in Two's Complement",permalink:"/hm/docs/digital-design/binary-numbers/weird-number"}},p=[{value:"Addition",id:"addition",children:[{value:"Overflow",id:"overflow",children:[]}]},{value:"Subtraction",id:"subtraction",children:[]},{value:"Overflow",id:"overflow-1",children:[]}],c={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Two's complement numbers are identical to unsigned binary numbers, except that the two's binary numbers have the most significant bit with FUCKING value of -2",(0,a.kt)("sup",null,"N-1"),". It's not clear!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," Convert two's complement 1101",(0,a.kt)("sub",null,"2")," to decimal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"         1101 -> 4-bits\nvalues: -8421 <- -8 is msb\nresult: -8x1+4x1+2x0+1x1\n        -8+4+1=-3\n")),(0,a.kt)("p",null,"This -8 is the msb (most significant bit) of the number (1101): -2",(0,a.kt)("sup",null,"3")," = -2",(0,a.kt)("sup",null,"4-1")," (i.e., -2",(0,a.kt)("sup",null,"N-1"),")"),(0,a.kt)("p",null,"This is understandable!"),(0,a.kt)("p",null,"And a fucking math formula:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Two&#39;s Complement Formula",src:n(19289).Z})),(0,a.kt)("p",null,"A",(0,a.kt)("sub",null,"2")," = 1101",(0,a.kt)("br",{parentName:"p"}),"\n","A",(0,a.kt)("sub",null,"10")," = -1x2",(0,a.kt)("sup",null,"3"),"+1x2",(0,a.kt)("sup",null,"2"),"+0x2",(0,a.kt)("sup",null,"3"),"+1x2",(0,a.kt)("sup",null,"3")," = -8+4+0+1 = -3"),(0,a.kt)("h2",{id:"addition"},"Addition"),(0,a.kt)("p",null,"Recall that when adding N-bit numbers, the carry out the Nth bit (i.e., the N + 1th result bit) is discarded."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," Compute -7",(0,a.kt)("sub",null,"10")," + 7",(0,a.kt)("sub",null,"10")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   1001 = -7\n + 0111 = 7\n   ====\n 1 0000 <- Carry Discarded\n   0000 <- Result\n")),(0,a.kt)("h3",{id:"overflow"},"Overflow"),(0,a.kt)("p",null,"Adding numbers (both negatives) or (both positives) may cause ",(0,a.kt)("a",{parentName:"p",href:"twos-complement-overflow"},"overflow"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"From: ",(0,a.kt)("a",{target:"_blank",href:n(58791).Z},"Harris D. M., Harris S. L. - Digital Design and Computer Architecture, 2nd Edition - 2012"),(0,a.kt)("br",{parentName:"p"}),"\n","1.4.6 Signed Binary Numbers - 17 page"),(0,a.kt)("h2",{id:"subtraction"},"Subtraction"),(0,a.kt)("p",null,"Subtraction is performed by ",(0,a.kt)("em",{parentName:"p"},"taking the two\u2019s complement")," of the second number, then adding."),(0,a.kt)("p",null,"Briefly formula:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A - B = A + not B + 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," 3",(0,a.kt)("sub",null,"10")," - 5",(0,a.kt)("sub",null,"10")),(0,a.kt)("p",null,"First, you need to ",(0,a.kt)("em",{parentName:"p"},"take the two's complement")," of 5",(0,a.kt)("sub",null,"10"),": "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Taking the two\'s complement"',title:'"Taking',the:!0,"two's":!0,'complement"':!0},"      5 = 0101\ninvert -> 1010\n        +    1\n         -----\n          1011 = -5\n")),(0,a.kt)("p",null,"and now do the addition: 3",(0,a.kt)("sub",null,"10")," + (- 5",(0,a.kt)("sub",null,"10"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="3+(-5)"',title:'"3+(-5)"'},"  0011 =  3\n+\n  1011 = -5\n  ----\n  1110 = -8+4+2= -2\n")),(0,a.kt)("p",null,"To check result, you can take two's complement again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  1110 = -2\n  0001 <- invert\n+    1\n  ----\n  0010 = 2     \n")),(0,a.kt)("p",null,"From: ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Signed_number_representations#Two's_complement"},"Signed Number Representation (Wikipedia)")),(0,a.kt)("h2",{id:"overflow-1"},"Overflow"))}m.isMDXComponent=!0},58791:function(e,t,n){t.Z=n.p+"assets/files/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012-278aad41bbd5750ed2461b2011414915.pdf"},19289:function(e,t){t.Z="data:image/png;base64,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"}}]);