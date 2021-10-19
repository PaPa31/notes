"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[38305],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=d(n),g=a,f=l["".concat(s,".").concat(g)]||l[g]||p[g]||c;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=l;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<c;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),i=["components"],o={id:"17-20-refactoring-reducers-continued",title:"17.20 Refactoring Reducers Continued",date:new Date("2021-07-18T08:42:05.000Z")},s=void 0,d={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued",id:"react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued",isDocsHomePage:!1,title:"17.20 Refactoring Reducers Continued",description:"burgerBuilders.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"17-20-refactoring-reducers-continued",title:"17.20 Refactoring Reducers Continued",date:"2021-07-18T08:42:05.000Z"},sidebar:"Docs",previous:{title:"17.19 Refactoring Reducers",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers"},next:{title:"18.0 Lesson",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-0-lesson"}},u=[{value:"<code>burgerBuilders.js</code>",id:"burgerbuildersjs",children:[]},{value:"<code>reducers/order.js</code>",id:"reducersorderjs",children:[]}],p={toc:u};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"burgerbuildersjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"burgerBuilders.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\burgerBuilder.js" {3,18,22}',title:'"src\\store\\reducers\\burgerBuilder.js"',"{3,18,22}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "../utility";\n// import { setIngredients } from "./../actions/burgerBuilder";\n\nconst initialState = {\n  ingredients: null,\n  totalPrice: 4,\n  error: false,\n};\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nconst addIngredient = (state, action) => {\n  const updatedIngredient = {\n    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n  };\n  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);\n  const updatedState = {\n    ingredients: updatedIngredients,\n    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n  };\n  return updateObject(state, updatedState);\n};\n\nconst removeIngredient = (state, action) => {\n  const updatedIng = {\n    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n  };\n  const updatedIngs = updateObject(state.ingredients, updatedIng);\n  const updatedSt = {\n    ingredients: updatedIngs,\n    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],\n  };\n  return updateObject(state, updatedSt);\n};\n\nconst setIngredients = (state, action) => {\n  return updateObject(state, {\n    ingredients: {\n      salad: action.ingredients.salad,\n      bacon: action.ingredients.bacon,\n      cheese: action.ingredients.cheese,\n      meat: action.ingredients.meat,\n    },\n    totalPrice: 4,\n    error: false,\n  });\n};\n\nconst fetchIngredientsFailed = (state, action) => {\n  return updateObject(state, { error: true });\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return addIngredient(state, action);\n\n    case actionTypes.REMOVE_INGREDIENT:\n      return removeIngredient(state, action);\n\n    case actionTypes.SET_INGREDIENTS:\n      return setIngredients(state, action);\n\n    case actionTypes.FETCH_INGREDIENTS_FAILED:\n      return fetchIngredientsFailed(state, action);\n\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')),(0,c.kt)("h2",{id:"reducersorderjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"reducers/order.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\order.js" {10,12,14,16,18,25,27-50,52,54,56,58}',title:'"src\\store\\reducers\\order.js"',"{10,12,14,16,18,25,27-50,52,54,56,58}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "../utility";\n\nconst initialState = {\n  orders: [],\n  loading: false,\n  purchased: false,\n};\n\nconst purchaseInit = (state, action) => {\n  return updateObject(state, { purchased: false });\n};\n\nconst purchaseBurgerStart = (state, action) => {\n  return updateObject(state, { loading: true });\n};\n\nconst purchaseBurgerSuccess = (state, action) => {\n  const newOrder = updateObject(action.orderData, { id: action.orderId });\n  return updateObject(state, {\n    loading: false,\n    purchased: true,\n    orders: state.orders.concat(newOrder),\n  });\n};\n\nconst purchaseBurgerFail = (state, action) => {\n  return updateObject(state, { loading: false });\n};\n\nconst fetchOrderStart = (state, action) => {\n  return updateObject(state, { loading: true });\n};\n\nconst fetchOrderSuccess = (state, action) => {\n  return updateObject(state, { orders: action.orders, loading: false });\n};\n\nconst fetchOrdersFail = (state, action) => {\n  return updateObject(state, { loading: false });\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.PURCHASE_INIT:\n      return purchaseInit(state, action);\n    case actionTypes.PURCHASE_BURGER_START:\n      return purchaseBurgerStart(state, action);\n    case actionTypes.PURCHASE_BURGER_SUCCESS:\n      return purchaseBurgerSuccess(state, action);\n    case actionTypes.PURCHASE_BURGER_FAIL:\n      return purchaseBurgerFail(state, action);\n    case actionTypes.FETCH_ORDERS_START:\n      return fetchOrderStart(state, action);\n    case actionTypes.FETCH_ORDERS_SUCCESS:\n      return fetchOrderSuccess(state, action);\n    case actionTypes.FETCH_ORDERS_FAIL:\n      return fetchOrdersFail(state, action);\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}l.isMDXComponent=!0}}]);