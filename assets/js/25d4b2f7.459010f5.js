"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[945],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65800:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"9-09-posting-data-to-server",title:"9.09 Posting Data To Server",date:new Date("2021-04-13T15:42:14.000Z")},c=void 0,p={unversionedId:"react-complete-guide/09-reaching-out-web-http-ajax/9-09-posting-data-to-server",id:"react-complete-guide/09-reaching-out-web-http-ajax/9-09-posting-data-to-server",isDocsHomePage:!1,title:"9.09 Posting Data To Server",description:'`jsx title="NewPost.js" {1,9,12-23,46-48}',source:"@site/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-09-posting-data-to-server.md",sourceDirName:"react-complete-guide/09-reaching-out-web-http-ajax",slug:"/react-complete-guide/09-reaching-out-web-http-ajax/9-09-posting-data-to-server",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-09-posting-data-to-server",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-09-posting-data-to-server.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"9-09-posting-data-to-server",title:"9.09 Posting Data To Server",date:"2021-04-13T15:42:14.000Z"},sidebar:"Docs",previous:{title:"9.08 Fetching Data On Update",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-08-fetching-data-on-update"},next:{title:"9.10 Sending Delete Request",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-10-sending-delete-request"}},u=[],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NewPost.js" {1,9,12-23,46-48}',title:'"NewPost.js"',"{1,9,12-23,46-48}":!0},'import axios from "axios";\nimport React, { Component } from "react";\nimport "./NewPost.css";\n\nclass NewPost extends Component {\n  state = {\n    title: "",\n    content: "",\n    author: "Pash",\n  };\n\n  postDataHandler = () => {\n    const post = {\n      title: this.state.title,\n      body: this.state.content,\n      author: this.state.author,\n    };\n    axios\n      .post("https://jsonplaceholder.typicode.com/posts", post)\n      .then((response) => {\n        console.log(response);\n      });\n  };\n\n  render() {\n    return (\n      <div className="NewPost">\n        <h1>Add a Post</h1>\n        <label>Title</label>\n        <input\n          type="text"\n          value={this.state.title}\n          onChange={(event) => this.setState({ title: event.target.value })}\n        />\n        <label>Content</label>\n        <textarea\n          rows="4"\n          value={this.state.content}\n          onChange={(event) => this.setState({ content: event.target.value })}\n        />\n        <label>Author</label>\n        <select\n          value={this.state.author}\n          onChange={(event) => this.setState({ author: event.target.value })}\n        >\n          <option value="Pash">Pash</option>\n          <option value="Mash">Mash</option>\n          <option value="Chel">Chel</option>\n        </select>\n        <button onClick={this.postDataHandler}>Add Post</button>\n      </div>\n    );\n  }\n}\n\nexport default NewPost;\n')))}d.isMDXComponent=!0}}]);