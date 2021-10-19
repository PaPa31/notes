"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[1735],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=u(n),g=o,T=d["".concat(i,".").concat(g)]||d[g]||l[g]||a;return n?r.createElement(T,s(s({ref:e},p),{},{components:n})):r.createElement(T,s({ref:e},p))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54588:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],c={id:"18-10-logging-users-out",title:"18.10 Logging Users Out",date:new Date("2021-07-21T14:39:18.000Z")},i=void 0,u={unversionedId:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out",id:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out",isDocsHomePage:!1,title:"18.10 Logging Users Out",description:"actionTypes.js",source:"@site/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out.md",sourceDirName:"react-complete-guide/18-adding-authentication-to-our-burger-project",slug:"/react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"18-10-logging-users-out",title:"18.10 Logging Users Out",date:"2021-07-21T14:39:18.000Z"},sidebar:"Docs",previous:{title:"18.09 Adding A Spinner",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-09-adding-a-spinner"},next:{title:"18.11 Accessing Protected Resources",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources"}},p=[{value:"<code>actionTypes.js</code>",id:"actiontypesjs",children:[]},{value:"<code>actions/auth.js</code>",id:"actionsauthjs",children:[]},{value:"<code>reducers/auth.js</code>",id:"reducersauthjs",children:[]}],l={toc:p};function d(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"actiontypesjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actionTypes.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\actionTypes.js" {18}',title:'"src\\store\\actions\\actionTypes.js"',"{18}":!0},'export const ADD_INGREDIENT = "ADD_INGREDIENT";\nexport const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";\nexport const SET_INGREDIENTS = "SET_INGREDIENTS";\nexport const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED";\n\nexport const PURCHASE_BURGER_START = "PURCHASE_BURGER_START";\nexport const PURCHASE_BURGER_SUCCESS = "PURCHASE_BURGER_SUCCESS";\nexport const PURCHASE_BURGER_FAIL = "PURCHASE_BURGER_FAIL";\nexport const PURCHASE_INIT = "PURCHASE_INIT";\n\nexport const FETCH_ORDERS_START = "FETCH_ORDERS_START";\nexport const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";\nexport const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";\n\nexport const AUTH_START = "AUTH_START";\nexport const AUTH_SUCCESS = "AUTH_SUCCESS";\nexport const AUTH_FAIL = "AUTH_FAIL";\nexport const AUTH_LOGOUT = "AUTH_LOGOUT";\n')),(0,a.kt)("h2",{id:"actionsauthjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions/auth.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\auth.js" {25-37,58}',title:'"src\\store\\actions\\auth.js"',"{25-37,58}":!0},'import axios from "axios";\nimport * as actionTypes from "./actionTypes";\n\nexport const authStart = () => {\n  return {\n    type: actionTypes.AUTH_START,\n  };\n};\n\nexport const authSuccess = (token, userId) => {\n  return {\n    type: actionTypes.AUTH_SUCCESS,\n    idToken: token,\n    userId: userId,\n  };\n};\n\nexport const authFail = (error) => {\n  return {\n    type: actionTypes.AUTH_FAIL,\n    error: error,\n  };\n};\n\nexport const logout = () => {\n  return {\n    type: actionTypes.AUTH_LOGOUT,\n  };\n};\n\nexport const checkAuthTimeout = (expirationTime) => {\n  return (dispatch) => {\n    setTimeout(() => {\n      dispatch(logout());\n    }, expirationTime * 1000);\n  };\n};\n\nexport const auth = (email, password, isSignup) => {\n  return (dispatch) => {\n    dispatch(authStart());\n    const authData = {\n      email: email,\n      password: password,\n      returnSecureToken: true,\n    };\n    let url =\n      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsmwPeH2yE7yqvoeYolCLgB9ju50rYivo";\n    if (!isSignup) {\n      url =\n        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsmwPeH2yE7yqvoeYolCLgB9ju50rYivo";\n    }\n    axios\n      .post(url, authData)\n      .then((response) => {\n        console.log(response);\n        dispatch(authSuccess(response.data.idToken, response.data.localId));\n        dispatch(checkAuthTimeout(response.data.expiresIn));\n      })\n      .catch((err) => {\n        dispatch(authFail(err.response.data.error));\n      });\n  };\n};\n')),(0,a.kt)("h2",{id:"reducersauthjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducers/auth.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\auth.js" {31-33,43-44}',title:'"src\\store\\reducers\\auth.js"',"{31-33,43-44}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "./../utility";\n\nconst initialState = {\n  token: null,\n  userId: null,\n  error: null,\n  loading: false,\n};\n\nconst authStart = (state, action) => {\n  return updateObject(state, { error: null, loading: true });\n};\n\nconst authSuccess = (state, action) => {\n  return updateObject(state, {\n    token: action.idToken,\n    userId: action.userId,\n    error: null,\n    loading: false,\n  });\n};\n\nconst authFail = (state, action) => {\n  return updateObject(state, {\n    error: action.error,\n    loading: false,\n  });\n};\n\nconst authLogout = (state, action) => {\n  return updateObject(state, { token: null, userId: null });\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.AUTH_START:\n      return authStart(state, action);\n    case actionTypes.AUTH_SUCCESS:\n      return authSuccess(state, action);\n    case actionTypes.AUTH_FAIL:\n      return authFail(state, action);\n    case actionTypes.AUTH_LOGOUT:\n      return authLogout(state, action);\n\n    default:\n      return state;\n  }\n};\nexport default reducer;\n')))}d.isMDXComponent=!0}}]);