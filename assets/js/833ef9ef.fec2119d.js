"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[82639],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(v,s(s({ref:n},u),{},{components:t})):a.createElement(v,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},70806:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),s=["components"],l={id:"listenable-events",title:"Listenable Events",date:new Date("2021-03-07T19:38:23.000Z")},i=void 0,c={unversionedId:"react/listenable-events",id:"react/listenable-events",isDocsHomePage:!1,title:"Listenable Events",description:"Source:\xa0reactjs.org",source:"@site/docs/react/listenable-events.md",sourceDirName:"react",slug:"/react/listenable-events",permalink:"/hm/docs/react/listenable-events",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/react/listenable-events.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1617282576,formattedLastUpdatedAt:"4/1/2021",frontMatter:{id:"listenable-events",title:"Listenable Events",date:"2021-03-07T19:38:23.000Z"},sidebar:"Docs",previous:{title:"React Element",permalink:"/hm/docs/react/element"},next:{title:"Render Element",permalink:"/hm/docs/react/render-element"}},u=[{value:"Clipboard Events",id:"clipboard-events",children:[]},{value:"Composition Events",id:"composition-events",children:[]},{value:"Keyboard Events",id:"keyboard-events",children:[]},{value:"Focus Events",id:"focus-events",children:[]},{value:"Form Events",id:"form-events",children:[]},{value:"Generic Events",id:"generic-events",children:[]},{value:"Mouse Events",id:"mouse-events",children:[]},{value:"Selection Events",id:"selection-events",children:[]},{value:"Touch Events",id:"touch-events",children:[]},{value:"UI Events",id:"ui-events",children:[]},{value:"Wheel Events",id:"wheel-events",children:[]},{value:"Media Events",id:"media-events",children:[]},{value:"Image Events",id:"image-events",children:[]},{value:"Animation Events",id:"animation-events",children:[]},{value:"Transition Events",id:"transition-events",children:[]},{value:"Other Events",id:"other-events",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Source:\xa0",(0,r.kt)("a",{href:"https://reactjs.org/docs/events.html#supported-events",class:"external"},"reactjs.org")),(0,r.kt)("h2",{id:"clipboard-events"},"Clipboard Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonCopy onCut onPaste\n\n# Properties:\nDOMDataTransfer clipboardData\n")),(0,r.kt)("h2",{id:"composition-events"},"Composition Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonCompositionEnd onCompositionStart onCompositionUpdate\n# Properties:\nstring data\n")),(0,r.kt)("h2",{id:"keyboard-events"},"Keyboard Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonKeyDown onKeyPress onKeyUp\n\n# Properties:\nboolean altKey\nnumber charCode\nboolean ctrlKey\nboolean getModifierState(key)\nstring key\nnumber keyCode\nstring locale\nnumber location\nboolean metaKey\nboolean repeat\nboolean shiftKey\nnumber which\n")),(0,r.kt)("p",null,"The key property can take any of the values documented in the ",(0,r.kt)("a",{href:"https://www.w3.org/TR/uievents-key/#named-key-attribute-values",class:"external"},"DOM Level 3 Events spec (w3.org)"),"."),(0,r.kt)("h2",{id:"focus-events"},"Focus Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonFocus onBlur\n# These focus events work on all elements in the React DOM, not just form elements.\n\n# Properties:\nDOMEventTarget relatedTarget\n")),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{href:"https://reactjs.org/docs/events.html#onfocus",class:"external"}," onFocus (reactjs.org)")," and ",(0,r.kt)("a",{href:"https://reactjs.org/docs/events.html#onblur",class:"external"}," onBlur(reactjs.org)")),(0,r.kt)("h2",{id:"form-events"},"Form Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonChange onInput onInvalid onSubmit\n")),(0,r.kt)("p",null,"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," event, see ",(0,r.kt)("a",{href:"https://reactjs.org/docs/forms.html",class:"external"}," Forms (reactjs.org)")),(0,r.kt)("h2",{id:"generic-events"},"Generic Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Events names\nonError onLoad\n")),(0,r.kt)("h2",{id:"mouse-events"},"Mouse Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit\nonDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave\nonMouseMove onMouseOut onMouseOver onMouseUp\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"onMouseEnter"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"onMouseLeave"),"\xa0events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Properties:\nboolean altKey\nnumber button\nnumber buttons\nnumber clientX\nnumber clientY\nboolean ctrlKey\nboolean getModifierState(key)\nboolean metaKey\nnumber pageX\nnumber pageY\nDOMEventTarget relatedTarget\nnumber screenX\nnumber screenY\nboolean shiftKey\n")),(0,r.kt)("h2",{id:"selection-events"},"Selection Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonSelect\n")),(0,r.kt)("h2",{id:"touch-events"},"Touch Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonTouchCancel onTouchEnd onTouchMove onTouchStart\n\n# Properties:\nboolean altKey\nDOMTouchList changedTouches\nboolean ctrlKey\nboolean getModifierState(key)\nboolean metaKey\nboolean shiftKey\nDOMTouchList targetTouches\nDOMTouchList touches\n")),(0,r.kt)("h2",{id:"ui-events"},"UI Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonScroll\n\n# Properties:\nnumber detail\nDOMAbstractView view\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Starting with React 17, the ",(0,r.kt)("inlineCode",{parentName:"p"},"onScroll")," event ",(0,r.kt)("strong",{parentName:"p"},"does not bubble")," in React. This matches the browser behavior and prevents the confusion when a nested scrollable element fires events on a distant parent."))),(0,r.kt)("h2",{id:"wheel-events"},"Wheel Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonWheel\n\n# Properties:\nnumber deltaMode\nnumber deltaX\nnumber deltaY\nnumber deltaZ\n")),(0,r.kt)("h2",{id:"media-events"},"Media Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted\nonEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay\nonPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend\nonTimeUpdate onVolumeChange onWaiting\n")),(0,r.kt)("h2",{id:"image-events"},"Image Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonLoad onError\n")),(0,r.kt)("h2",{id:"animation-events"},"Animation Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonAnimationStart onAnimationEnd onAnimationIteration\n\n# Properties:\nstring animationName\nstring pseudoElement\nfloat elapsedTime\n")),(0,r.kt)("h2",{id:"transition-events"},"Transition Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonTransitionEnd\n\n# Properties:\nstring propertyName\nstring pseudoElement\nfloat elapsedTime\n")),(0,r.kt)("h2",{id:"other-events"},"Other Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Event names:\nonToggle\n")))}p.isMDXComponent=!0}}]);