"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[2418],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=s(r),g=a,f=l["".concat(d,".").concat(g)]||l[g]||p[g]||c;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=l;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},47462:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),i=["components"],o={id:"17-19-refactoring-reducers",title:"17.19 Refactoring Reducers",date:new Date("2021-07-17T21:13:28.000Z")},d=void 0,s={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers",id:"react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers",title:"17.19 Refactoring Reducers",description:"reducers/burgerBuilder.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-19-refactoring-reducers.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"17-19-refactoring-reducers",title:"17.19 Refactoring Reducers",date:"2021-07-17T21:13:28.000Z"},sidebar:"Courses",previous:{title:"17.17 Fetching Orders via Redux",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-17-fetching-orders-via-redux"},next:{title:"17.20 Refactoring Reducers Continued",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-20-refactoring-reducers-continued"}},u={},p=[{value:"<code>reducers/burgerBuilder.js</code>",id:"reducersburgerbuilderjs",level:2},{value:"<code>reducers/order.js</code>",id:"reducersorderjs",level:2},{value:"New <code>utility.js</code>",id:"new-utilityjs",level:2}],l={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"reducersburgerbuilderjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"reducers/burgerBuilder.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\burgerBuilder.js" {2,20,22-28,31,33,36-41,43,52,54}',title:'"src\\store\\reducers\\burgerBuilder.js"',"{2,20,22-28,31,33,36-41,43,52,54}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "../utility";\n\nconst initialState = {\n  ingredients: null,\n  totalPrice: 4,\n  error: false,\n};\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      const updatedIngredient = {\n        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n      };\n      const updatedIngredients = updateObject(\n        state.ingredients,\n        updatedIngredient\n      );\n      const updatedState = {\n        ingredients: updatedIngredients,\n        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n      };\n      return updateObject(state, updatedState);\n    case actionTypes.REMOVE_INGREDIENT:\n      const updatedIng = {\n        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n      };\n      const updatedIngs = updateObject(state.ingredients, updatedIng);\n      const updatedSt = {\n        ingredients: updatedIngs,\n        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n      };\n      return updateObject(state, updatedSt);\n    case actionTypes.SET_INGREDIENTS:\n      return updateObject(state, {\n        ingredients: {\n          salad: action.ingredients.salad,\n          bacon: action.ingredients.bacon,\n          cheese: action.ingredients.cheese,\n          meat: action.ingredients.meat,\n        },\n        totalPrice: 4,\n        error: false,\n      });\n    case actionTypes.FETCH_INGREDIENTS_FAILED:\n      return updateObject(state, { error: true });\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')),(0,c.kt)("h2",{id:"reducersorderjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"reducers/order.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\order.js" {2,13,15,17-18,22,24,26,28,30}',title:'"src\\store\\reducers\\order.js"',"{2,13,15,17-18,22,24,26,28,30}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "../utility";\n\nconst initialState = {\n  orders: [],\n  loading: false,\n  purchased: false,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.PURCHASE_INIT:\n      return updateObject(state, { purchased: false });\n    case actionTypes.PURCHASE_BURGER_START:\n      return updateObject(state, { loading: true });\n    case actionTypes.PURCHASE_BURGER_SUCCESS:\n      const newOrder = updateObject(action.orderData, { id: action.orderId });\n      return updateObject(state, {\n        loading: false,\n        purchased: true,\n        orders: state.orders.concat(newOrder),\n      });\n    case actionTypes.PURCHASE_BURGER_FAIL:\n      return updateObject(state, { loading: false });\n    case actionTypes.FETCH_ORDERS_START:\n      return updateObject(state, { loading: true });\n    case actionTypes.FETCH_ORDERS_SUCCESS:\n      return updateObject(state, { orders: action.orders, loading: false });\n    case actionTypes.FETCH_ORDERS_FAIL:\n      return updateObject(state, { loading: false });\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')),(0,c.kt)("h2",{id:"new-utilityjs"},"New ",(0,c.kt)("inlineCode",{parentName:"h2"},"utility.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\utility.js" {}',title:'"src\\store\\utility.js"',"{}":!0},"export const updateObject = (oldObject, updatedProperties) => {\n  return {\n    ...oldObject,\n    ...updatedProperties,\n  };\n};\n")))}g.isMDXComponent=!0}}]);