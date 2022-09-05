"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,p={unversionedId:"api/python3/python",id:"api/python3/python",title:"python",description:"Openapi python and python3 AMNESIA",source:"@site/docs/api/python3/python.md",sourceDirName:"api/python3",slug:"/api/python3/python",permalink:"/hm/docs/api/python3/python",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/api/python3/python.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1614884209,formattedLastUpdatedAt:"Mar 4, 2021",frontMatter:{},sidebar:"Docs",previous:{title:"API for Love Project",permalink:"/hm/docs/api/love-project/"},next:{title:"Venv Isolate Dependencies",permalink:"/hm/docs/api/python3/venv-isolate-dependencies"}},i={},u=[{value:"Openapi python and python3 AMNESIA",id:"openapi-python-and-python3-amnesia",level:2},{value:"gRPC",id:"grpc",level:2},{value:"Installing <code>grpcio</code>",id:"installing-grpcio",level:2},{value:"ModuleNotFoundError: No module named &#39;example_pb2&#39;",id:"modulenotfounderror-no-module-named-example_pb2",level:2},{value:"ModuleNotFoundError: No module named &#39;grpc&#39;",id:"modulenotfounderror-no-module-named-grpc",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"openapi-python-and-python3-amnesia"},"Openapi python and python3 AMNESIA"),(0,a.kt)("p",null,"If you run this command when run ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m openapi_server\n")),(0,a.kt)("p",null,"you'll get the error when you'll run the ",(0,a.kt)("inlineCode",{parentName:"p"},"client"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ValueError: Invalid value for `display_name`, must not be `None`\n")),(0,a.kt)("p",null,"you need run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m openapi_server\n")),(0,a.kt)("h2",{id:"grpc"},"gRPC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FileNotFoundError: [Errno 2] No such file or directory: 'c++': 'c++'\n")),(0,a.kt)("p",null,"Resolve:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install build-essential\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"from: ",(0,a.kt)("a",{href:"https://github.com/grpc/grpc/issues/24556",class:"external"},"github.com"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m pip install --upgrade pip setuptools wheel\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"from: ",(0,a.kt)("a",{href:"https://packaging.python.org/tutorials/installing-packages/",class:"external"},"packaging.python.org"))),(0,a.kt)("h2",{id:"installing-grpcio"},"Installing ",(0,a.kt)("inlineCode",{parentName:"h2"},"grpcio")),(0,a.kt)("p",null,"After that, you can successfully install ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcio"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install grpcio grpcio-tools\n")),(0,a.kt)("h2",{id:"modulenotfounderror-no-module-named-example_pb2"},"ModuleNotFoundError: No module named 'example_pb2'"),(0,a.kt)("p",null,"Need to be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="example_pb2_grpc.py"',title:'"example_pb2_grpc.py"'},"from codegen import example_pb2 as example__pb2\n")),(0,a.kt)("h2",{id:"modulenotfounderror-no-module-named-grpc"},"ModuleNotFoundError: No module named 'grpc'"),(0,a.kt)("p",null,"Try:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deactivate\n")),(0,a.kt)("p",null,"If response is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deactivate: command not found\n")),(0,a.kt)("p",null,"Then you need run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"source env/bin/activate\n")),(0,a.kt)("p",null,"see: ",(0,a.kt)("a",{parentName:"p",href:"venv-isolate-dependencies"},"venv isolated dependencies")))}s.isMDXComponent=!0}}]);