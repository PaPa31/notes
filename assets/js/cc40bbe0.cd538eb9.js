"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[29113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},63015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={id:"8-20-adding-order-button",title:"8.20 Adding Order Button",date:new Date("2021-04-10T21:12:16.000Z")},i=void 0,d={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button",id:"react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button",title:"8.20 Adding Order Button",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-20-adding-order-button.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"8-20-adding-order-button",title:"8.20 Adding Order Button",date:"2021-04-10T21:12:16.000Z"},sidebar:"Courses",previous:{title:"8.19 Displaying And Updating Burger Price",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-19-displaying-and-updating-burger-price"},next:{title:"8.21 Creating Order Summary Modal",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-21-creating-order-summary-modal"}},s={},l=[{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2},{value:"BuildControls.js",id:"buildcontrolsjs",level:2},{value:"BuildControls.module.css",id:"buildcontrolsmodulecss",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {25,28-37,50,67,86}',title:'"BurgerBuilder.js"',"{25,28-37,50,67,86}":!0},'import React, { Component, Fragment } from "react";\nimport BuildControls from "../components/Burger/BuildControls/BuildControls";\nimport Burger from "../components/Burger/Burger";\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    ingredients: {\n      salad: 0,\n      bacon: 0,\n      cheese: 0,\n      meat: 0,\n    },\n    totalPrice: 4,\n    purchasable: false,\n  };\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    this.setState({ purchasable: sum > 0 });\n  }\n\n  addIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    const updateCount = oldCount + 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceAddition = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice + priceAddition;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  removeIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    if (oldCount <= 0) {\n      return;\n    }\n    const updateCount = oldCount - 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceDeduction = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice - priceDeduction;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  render() {\n    const disabledInfo = {\n      ...this.state.ingredients,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n\n    return (\n      <Fragment>\n        <Burger ingredients={this.state.ingredients} />\n        <BuildControls\n          ingredientAdded={this.addIngredientHandler}\n          ingredientRemoved={this.removeIngredientHandler}\n          disabled={disabledInfo}\n          purchasable={this.state.purchasable}\n          price={this.state.totalPrice}\n        />\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n')),(0,o.kt)("h2",{id:"buildcontrolsjs"},"BuildControls.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BuildControls.js" {3-5}',title:'"BuildControls.js"',"{3-5}":!0},"...\n\n    <button className={classes.OrderButton} disabled={!props.purchasable}>\n      ORDER NOW\n    </button>\n  </div>\n);\n\nexport default buildControls;\n")),(0,o.kt)("h2",{id:"buildcontrolsmodulecss"},"BuildControls.module.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="BuildControls.module.css" {12-53}',title:'"BuildControls.module.css"',"{12-53}":!0},".BuildControls {\n  width: 100%;\n  background-color: #cf8f2e;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  box-shadow: 0 2px 1px #ccc;\n  margin: auto;\n  padding: 10px 0;\n}\n\n.OrderButton {\n  background-color: #dad735;\n  outline: none;\n  cursor: pointer;\n  border: 1px solid #966909;\n  color: #966909;\n  font-family: inherit;\n  font-size: 1.2em;\n  padding: 15px 30px;\n  box-shadow: 2px 2px 2px #966909;\n}\n\n.OrderButton:hover,\n.OrderButton:active {\n  background-color: #a0db41;\n  border: 1px solid #966909;\n  color: #966909;\n}\n\n.OrderButton:disabled {\n  background-color: #c7c6c6;\n  cursor: not-allowed;\n  border: 1px solid #ccc;\n  color: #888888;\n}\n\n.OrderButton:not(:disabled) {\n  animation: enable 0.3s linear;\n}\n\n@keyframes enable {\n  0% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n")))}c.isMDXComponent=!0}}]);