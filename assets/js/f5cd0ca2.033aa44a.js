"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[22406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={id:"3-15-props-and-state",title:"3.15 Props And State",date:new Date("2021-03-07T18:06:13.000Z")},s=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-15-props-and-state",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-15-props-and-state",title:"3.15 Props And State",description:"props and state are CORE\xa0concepts of React. Actually, only changes in props and/or state trigger React to re-render your components and potentially update the DOM\xa0in the browser (a detailed look at how React checks whether to really touch the real DOM\xa0is provided in section 6).",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-15-props-and-state.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-15-props-and-state",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-15-props-and-state",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-15-props-and-state.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"3-15-props-and-state",title:"3.15 Props And State",date:"2021-03-07T18:06:13.000Z"},sidebar:"Courses",previous:{title:"3.13 Children Prop",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-13-children-prop"},next:{title:"3.16 Handling Events With Methods",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-16-handling-events-with-methods"}},i={},l=[{value:"Props",id:"props",level:2},{value:"State",id:"state",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"props")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," are ",(0,o.kt)("strong",{parentName:"p"},"CORE\xa0concepts")," of React. Actually, only changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," trigger React to re-render your components and potentially update the DOM\xa0in the browser (a detailed look at how React checks whether to really touch the real DOM\xa0is provided in section 6)."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"props")," allow you to pass data from a parent (wrapping) component to a child (embedded)\xa0component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AllPosts Component:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'const posts = () => {\n    return (\n        <div>\n            <Post title="My first Post" />\n        </div>\n    );\n}\n')),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," is the custom property (",(0,o.kt)("inlineCode",{parentName:"p"},"prop"),") set up on the custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Post"),"\xa0component. We basically replicate the default HTML\xa0attribute behavior we already know (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'<input type="text">'),"\xa0informs the browser about how to handle that input)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Post Component:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Post.js"',title:'"Post.js"'},"const post = (props) => {\n    return (\n        <div>\n            <h1>{props.title}</h1>\n        </div>\n    );\n}\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," component receives the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," argument. You can of course name this argument whatever you want - it's your function definition, React doesn't care!\xa0But React will pass one argument to your component function =>\xa0An object, which contains all properties you set up on ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post ... />"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{props.title}")," then dynamically outputs the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object - which is available since we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," property inside ",(0,o.kt)("inlineCode",{parentName:"p"},"AllPosts")," component (see above)."),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"Whilst props allow you to pass data down the component tree (and hence trigger an UI\xa0update), state is used to change the component, well, state from within. Changes to state also trigger an UI\xa0update."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NewPost Component:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Post.js"',title:'"Post.js"'},"class NewPost extends Component { // state can only be accessed in class-based components!\n    state = {\n        counter: 1\n    };  \n\n    render () { // Needs to be implemented in class-based components! Needs to return some JSX!\n        return (\n            <div>{this.state.counter}</div>\n        );\n    }\n}\n")),(0,o.kt)("p",null,"Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewPost")," component contains ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". Only class-based components can define and use ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". You can of course pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," down to functional components, but these then can't directly edit it."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"state")," simply is a property of the component class, you have to call it ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," though - the name is not optional. You can then access it via ",(0,o.kt)("inlineCode",{parentName:"p"},"this.state")," in your class JSX code (which you return in the required ",(0,o.kt)("inlineCode",{parentName:"p"},"render()"),"\xa0method)."),(0,o.kt)("p",null,"Whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," changes (taught over the next lectures), the component will re-render and reflect the new state. The difference to ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," is, that this happens within one and the same component - you don't receive new data (",(0,o.kt)("inlineCode",{parentName:"p"},"props"),") from outside!"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(47793).Z},"State Learning Card PDF")))}d.isMDXComponent=!0},47793:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/3-15-state-learning-card-401f361dfc4276d8d44612c35296165c.pdf"}}]);