"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[60961],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={id:"8-18-removing-igredients-safely",title:"8.18 Removing Igredients Safely",date:new Date("2021-04-10T19:13:48.000Z")},l=void 0,a={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-18-removing-igredients-safely",id:"react-complete-guide/08-real-app-burger-builder/8-18-removing-igredients-safely",title:"8.18 Removing Igredients Safely",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-18-removing-igredients-safely.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-18-removing-igredients-safely",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-18-removing-igredients-safely",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-18-removing-igredients-safely.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"8-18-removing-igredients-safely",title:"8.18 Removing Igredients Safely",date:"2021-04-10T19:13:48.000Z"},sidebar:"Courses",previous:{title:"8.17 Connecting State To Build Controls",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-17-connecting-state-to-build-controls"},next:{title:"8.19 Displaying And Updating Burger Price",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price"}},s={},d=[{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2},{value:"BuildControls.js",id:"buildcontrolsjs",level:2},{value:"BuildControl.js",id:"buildcontroljs",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {42-53,57-63,70-71}',title:'"BurgerBuilder.js"',"{42-53,57-63,70-71}":!0},'import React, { Component, Fragment } from "react";\nimport BuildControls from "../components/Burger/BuildControls/BuildControls";\nimport Burger from "../components/Burger/Burger";\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    ingredients: {\n      salad: 0,\n      bacon: 0,\n      cheese: 0,\n      meat: 0,\n    },\n    totalPrice: 4,\n  };\n\n  addIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    const updateCount = oldCount + 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceAddition = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice + priceAddition;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n  };\n\n  removeIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    if (oldCount <= 0) {\n      return;\n    }\n    const updateCount = oldCount - 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceDeduction = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice - priceDeduction;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n  };\n\n  render() {\n    const disabledInfo = {\n      ...this.state.ingredients,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n\n    return (\n      <Fragment>\n        <Burger ingredients={this.state.ingredients} />\n        <BuildControls\n          ingredientAdded={this.addIngredientHandler}\n          ingredientRemoved={this.removeIngredientHandler}\n          disabled={disabledInfo}\n        />\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n')),(0,o.kt)("h2",{id:"buildcontrolsjs"},"BuildControls.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BuildControls.js" {18-19}',title:'"BuildControls.js"',"{18-19}":!0},'import React from "react";\nimport BuildControl from "./BuildControl/BuildControl";\nimport classes from "./BuildControls.module.css";\nconst controls = [\n  { label: "Salad", type: "salad" },\n  { label: "Bacon", type: "bacon" },\n  { label: "Cheese", type: "cheese" },\n  { label: "Meat", type: "meat" },\n];\n\nconst buildControls = (props) => (\n  <div className={classes.BuildControls}>\n    {controls.map((ctrl) => (\n      <BuildControl\n        key={ctrl.label}\n        label={ctrl.label}\n        added={() => props.ingredientAdded(ctrl.type)}\n        removed={() => props.ingredientRemoved(ctrl.type)}\n        disabled={props.disabled[ctrl.type]}\n      />\n    ))}\n  </div>\n);\n\nexport default buildControls;\n')),(0,o.kt)("h2",{id:"buildcontroljs"},"BuildControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BuildControl.js" {9-10}',title:'"BuildControl.js"',"{9-10}":!0},'import React from "react";\nimport classes from "./BuildControl.module.css";\n\nconst buildControl = (props) => (\n  <div className={classes.BuildControl}>\n    <div className={classes.Label}>{props.label}</div>\n    <button\n      className={classes.Less}\n      onClick={props.removed}\n      disabled={props.disabled}\n    >\n      Less\n    </button>\n    <button className={classes.More} onClick={props.added}>\n      More\n    </button>\n  </div>\n);\n\nexport default buildControl;\n')))}u.isMDXComponent=!0}}]);