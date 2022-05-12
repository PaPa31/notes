"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[78055],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"11-18-parsing-query-parameters-and-fragment",title:"11.18 Parsing Query Parameters And Fragment",date:new Date("2021-04-14T18:24:06.000Z")},s=void 0,l={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",title:"11.18 Parsing Query Parameters And Fragment",description:"You learned how to extract route parameters (=>\xa0:id\xa0 etc).",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"11-18-parsing-query-parameters-and-fragment",title:"11.18 Parsing Query Parameters And Fragment",date:"2021-04-14T18:24:06.000Z"},sidebar:"Courses",previous:{title:"11.17 Extracting Route Parameters",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-17-extracting-route-parameters"},next:{title:"11.19 Using Switch To Load Single Route",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-19-using-switch-to-load-single-route"}},u={},c=[{value:"<strong>Query Params:</strong>",id:"query-params",level:2},{value:"<strong>Fragment:</strong>",id:"fragment",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You learned how to extract route parameters (=>\xa0",(0,o.kt)("inlineCode",{parentName:"p"},":id"),"\xa0 etc)."),(0,o.kt)("p",null,"But how do you extract ",(0,o.kt)("strong",{parentName:"p"},"search"),'\xa0(also referred to as "',(0,o.kt)("strong",{parentName:"p"},"query"),'") ',(0,o.kt)("strong",{parentName:"p"},"parameters")," (=> ",(0,o.kt)("inlineCode",{parentName:"p"},"?something=somevalue"),"\xa0 at the end of the URL)? How do you extract the ",(0,o.kt)("strong",{parentName:"p"},"fragment")," (=>\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"#something"),"\xa0 at the end of the URL)?"),(0,o.kt)("h2",{id:"query-params"},(0,o.kt)("strong",{parentName:"h2"},"Query Params:")),(0,o.kt)("p",null,"You can pass them easily like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="/my-path?start=5">Go to Start</Link>\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Link \n    to={{\n        pathname: '/my-path',\n        search: '?start=5'\n    }}\n    >Go to Start</Link>\n")),(0,o.kt)("p",null,"React router makes it easy to get access to the search string: ",(0,o.kt)("inlineCode",{parentName:"p"},"props.location.search"),"."),(0,o.kt)("p",null,"But that will only give you something like ",(0,o.kt)("inlineCode",{parentName:"p"},"?start=5")),(0,o.kt)("p",null,"You probably want to get the key-value pair, without the ",(0,o.kt)("inlineCode",{parentName:"p"},"?"),"\xa0\xa0and the ",(0,o.kt)("inlineCode",{parentName:"p"},"="),"\xa0. Here's a snippet which allows you to easily extract that information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n    const query = new URLSearchParams(this.props.location.search);\n    for (let param of query.entries()) {\n        console.log(param); // yields \\['start', '5'\\]\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),"\xa0 is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"entries()"),"\xa0\xa0method. ",(0,o.kt)("inlineCode",{parentName:"p"},"entries()"),"\xa0 returns an Iterator - basically a construct which can be used in a ",(0,o.kt)("inlineCode",{parentName:"p"},"for...of..."),"\xa0 loop (as shown above)."),(0,o.kt)("p",null,"When looping through ",(0,o.kt)("inlineCode",{parentName:"p"},"query.entries()"),"\xa0, you get ",(0,o.kt)("strong",{parentName:"p"},"arrays")," where the first element is the ",(0,o.kt)("strong",{parentName:"p"},"key name")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),"\xa0) and the second element is the assigned ",(0,o.kt)("strong",{parentName:"p"},"value")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),"\xa0)."),(0,o.kt)("h2",{id:"fragment"},(0,o.kt)("strong",{parentName:"h2"},"Fragment:")),(0,o.kt)("p",null,"You can pass it easily like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="/my-path#start-position">Go to Start</Link>\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Link \n    to={{\n        pathname: '/my-path',\n        hash: 'start-position'\n    }}\n    >Go to Start</Link>\n")),(0,o.kt)("p",null,"React router makes it easy to extract the fragment. You can simply access ",(0,o.kt)("inlineCode",{parentName:"p"},"props.location.hash"),"."))}g.isMDXComponent=!0}}]);