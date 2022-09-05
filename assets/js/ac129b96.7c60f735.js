"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[97476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>l});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),l=o,g=d["".concat(s,".").concat(l)]||d[l]||m[l]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"19-2-fixing-the-redirect-to-the-frontpage",title:"19.2 Fixing the Redirect to the Frontpage",date:new Date("2021-07-22T19:45:19.000Z")},i=void 0,c={unversionedId:"react-complete-guide/19-improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage",id:"react-complete-guide/19-improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage",title:"19.2 Fixing the Redirect to the Frontpage",description:"SideDrawer.js",source:"@site/courses/react-complete-guide/19-improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage.md",sourceDirName:"react-complete-guide/19-improving-our-burger-project",slug:"/react-complete-guide/19-improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage",permalink:"/hm/courses/react-complete-guide/19-improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/19-improving-our-burger-project/19-2-fixing-the-redirect-to-the-frontpage.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"19-2-fixing-the-redirect-to-the-frontpage",title:"19.2 Fixing the Redirect to the Frontpage",date:"2021-07-22T19:45:19.000Z"},sidebar:"Courses",previous:{title:"19.0 Lesson",permalink:"/hm/courses/react-complete-guide/19-improving-our-burger-project/19-0-lesson"}},s={},p=[{value:"<code>SideDrawer.js</code>",id:"sidedrawerjs",level:2},{value:"<code>CheckoutSummary.module.css</code>",id:"checkoutsummarymodulecss",level:2},{value:"<code>App.js</code>",id:"appjs",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sidedrawerjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"SideDrawer.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\components\\Navigation\\SideDrawer\\SideDrawer.js" {15}',title:'"src\\components\\Navigation\\SideDrawer\\SideDrawer.js"',"{15}":!0},'import React, { Fragment } from "react";\nimport Logo from "../../Logo/Logo";\nimport Backdrop from "../../UI/Backdrop/Backdrop";\nimport NavigationItems from "../NavigationItems/NavigationItems";\nimport classes from "./SideDrawer.module.css";\n\nconst sideDrawer = (props) => {\n  let attachedClasses = [classes.SideDrawer, classes.Close];\n  if (props.open) {\n    attachedClasses = [classes.SideDrawer, classes.Open];\n  }\n  return (\n    <Fragment>\n      <Backdrop show={props.open} clicked={props.closed} />\n      <div className={attachedClasses.join(" ")} onClick={props.closed}>\n        <div className={classes.Logo}>\n          <Logo />\n        </div>\n        <nav>\n          <NavigationItems isAuthenticated={props.isAuth} />\n        </nav>\n      </div>\n    </Fragment>\n  );\n};\n\nexport default sideDrawer;\n')),(0,o.kt)("h2",{id:"checkoutsummarymodulecss"},(0,o.kt)("inlineCode",{parentName:"h2"},"CheckoutSummary.module.css")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src\\components\\Order\\CheckoutSummary\\CheckoutSummary.module.css" {}',title:'"src\\components\\Order\\CheckoutSummary\\CheckoutSummary.module.css"',"{}":!0},".CheckoutSummary {\n  text-align: center;\n  width: 80%;\n  margin: auto;\n}\n")),(0,o.kt)("h2",{id:"appjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\App.js" {31}',title:'"src\\App.js"',"{31}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport { Redirect, Route, Switch, withRouter } from "react-router-dom";\nimport Layout from "./components/Layout/Layout";\nimport Auth from "./containers/Auth/Auth";\nimport Logout from "./containers/Auth/Logout/Logout";\nimport BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";\nimport Checkout from "./containers/Checkout/Checkout";\nimport Orders from "./containers/Orders/Orders";\nimport * as actions from "./store/actions/index";\n\nclass App extends Component {\n  componentDidMount() {\n    this.props.onTryAutoSignup();\n  }\n  render() {\n    let routes = (\n      <Switch>\n        <Route path="/auth" component={Auth} />\n        <Route path="/" exact component={BurgerBuilder} />\n        <Redirect to="/" />\n      </Switch>\n    );\n\n    if (this.props.isAuthenticated) {\n      routes = (\n        <Switch>\n          <Route path="/checkout" component={Checkout} />\n          <Route path="/orders" component={Orders} />\n          <Route path="/logout" component={Logout} />\n          <Route path="/auth" component={Auth} />\n          <Route path="/" exact component={BurgerBuilder} />\n          <Redirect to="/" />\n        </Switch>\n      );\n    }\n\n    return (\n      <div>\n        <Layout>{routes}</Layout>\n      </div>\n    );\n  }\n}\n\nconst mapStatetoProps = (state) => {\n  return {\n    isAuthenticated: state.auth.token !== null,\n  };\n};\n\nconst mapDispatchtoProps = (dispatch) => {\n  return {\n    onTryAutoSignup: () => dispatch(actions.authCheckState()),\n  };\n};\n\nexport default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(App));\n')))}m.isMDXComponent=!0}}]);