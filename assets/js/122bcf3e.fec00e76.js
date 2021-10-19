"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46506],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63148:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],p={},i=void 0,u={unversionedId:"api/python3/python",id:"api/python3/python",isDocsHomePage:!1,title:"python",description:"Openapi python and python3 AMNESIA",source:"@site/docs/api/python3/python.md",sourceDirName:"api/python3",slug:"/api/python3/python",permalink:"/hm/docs/api/python3/python",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/api/python3/python.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1614884209,formattedLastUpdatedAt:"3/4/2021",frontMatter:{},sidebar:"Docs",previous:{title:"API for Love Project",permalink:"/hm/docs/api/love-project/love-project"},next:{title:"Venv Isolate Dependencies",permalink:"/hm/docs/api/python3/venv-isolate-dependencies"}},c=[{value:"Openapi python and python3 AMNESIA",id:"openapi-python-and-python3-amnesia",children:[]},{value:"gRPC",id:"grpc",children:[]},{value:"Installing <code>grpcio</code>",id:"installing-grpcio",children:[]},{value:"ModuleNotFoundError: No module named &#39;example_pb2&#39;",id:"modulenotfounderror-no-module-named-example_pb2",children:[]},{value:"ModuleNotFoundError: No module named &#39;grpc&#39;",id:"modulenotfounderror-no-module-named-grpc",children:[]}],s={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"openapi-python-and-python3-amnesia"},"Openapi python and python3 AMNESIA"),(0,a.kt)("p",null,"If you run this command when run ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m openapi_server\n")),(0,a.kt)("p",null,"you'll get the error when you'll run the ",(0,a.kt)("inlineCode",{parentName:"p"},"client"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ValueError: Invalid value for `display_name`, must not be `None`\n")),(0,a.kt)("p",null,"you need run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m openapi_server\n")),(0,a.kt)("h2",{id:"grpc"},"gRPC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FileNotFoundError: [Errno 2] No such file or directory: 'c++': 'c++'\n")),(0,a.kt)("p",null,"Resolve:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install build-essential\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"from: ",(0,a.kt)("a",{href:"https://github.com/grpc/grpc/issues/24556",class:"external"},"github.com"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m pip install --upgrade pip setuptools wheel\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"from: ",(0,a.kt)("a",{href:"https://packaging.python.org/tutorials/installing-packages/",class:"external"},"packaging.python.org"))),(0,a.kt)("h2",{id:"installing-grpcio"},"Installing ",(0,a.kt)("inlineCode",{parentName:"h2"},"grpcio")),(0,a.kt)("p",null,"After that, you can successfully install ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcio"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install grpcio grpcio-tools\n")),(0,a.kt)("h2",{id:"modulenotfounderror-no-module-named-example_pb2"},"ModuleNotFoundError: No module named 'example_pb2'"),(0,a.kt)("p",null,"Need to be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="example_pb2_grpc.py"',title:'"example_pb2_grpc.py"'},"from codegen import example_pb2 as example__pb2\n")),(0,a.kt)("h2",{id:"modulenotfounderror-no-module-named-grpc"},"ModuleNotFoundError: No module named 'grpc'"),(0,a.kt)("p",null,"Try:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deactivate\n")),(0,a.kt)("p",null,"If response is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deactivate: command not found\n")),(0,a.kt)("p",null,"Then you need run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"source env/bin/activate\n")),(0,a.kt)("p",null,"see: ",(0,a.kt)("a",{parentName:"p",href:"venv-isolate-dependencies"},"venv isolated dependencies")))}d.isMDXComponent=!0}}]);