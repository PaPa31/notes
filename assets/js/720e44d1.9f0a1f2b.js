"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[8602],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,m=c["".concat(o,".").concat(g)]||c[g]||s[g]||a;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var d={};for(var o in r)hasOwnProperty.call(r,o)&&(d[o]=r[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99879:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const a={id:"8-19-displaying-and-updating-burger-price",title:"8.19 Displaying And Updating Burger Price",date:new Date("2021-04-10T19:41:22.000Z")},l=void 0,d={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price",id:"react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price",title:"8.19 Displaying And Updating Burger Price",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"8-19-displaying-and-updating-burger-price",title:"8.19 Displaying And Updating Burger Price",date:"2021-04-10T19:41:22.000Z"},sidebar:"Courses",previous:{title:"8.18 Removing Igredients Safely",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-18-removing-igredients-safely"},next:{title:"8.20 Adding Order Button",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button"}},o={},u=[{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2},{value:"BuildControls.js",id:"buildcontrolsjs",level:2}],p={toc:u};function s(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {10}',title:'"BurgerBuilder.js"',"{10}":!0},"...\n\n    return (\n      <Fragment>\n        <Burger ingredients={this.state.ingredients} />\n        <BuildControls\n          ingredientAdded={this.addIngredientHandler}\n          ingredientRemoved={this.removeIngredientHandler}\n          disabled={disabledInfo}\n          price={this.state.totalPrice}\n        />\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n")),(0,i.kt)("h2",{id:"buildcontrolsjs"},"BuildControls.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BuildControls.js" {5-7}',title:'"BuildControls.js"',"{5-7}":!0},"...\n\nconst buildControls = (props) => (\n  <div className={classes.BuildControls}>\n    <p>\n      Current Price: <strong>{props.price.toFixed(2)}</strong>\n    </p>\n    {controls.map((ctrl) => (\n      <BuildControl\n        key={ctrl.label}\n        label={ctrl.label}\n        added={() => props.ingredientAdded(ctrl.type)}\n        removed={() => props.ingredientRemoved(ctrl.type)}\n        disabled={props.disabled[ctrl.type]}\n      />\n    ))}\n  </div>\n);\n\nexport default buildControls;\n")))}s.isMDXComponent=!0}}]);