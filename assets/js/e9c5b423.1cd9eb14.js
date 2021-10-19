"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[29356],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),d=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,g=l["".concat(c,".").concat(m)]||l[m]||p[m]||i;return n?t.createElement(g,a(a({ref:r},u),{},{components:n})):t.createElement(g,a({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},74053:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"17-04-creating-action-creators",title:"17.04 Creating Action Creators",date:new Date("2021-07-15T00:21:02.000Z")},c=void 0,d={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-04-creating-action-creators",id:"react-complete-guide/17-redux-advanced-burger-project/17-04-creating-action-creators",isDocsHomePage:!1,title:"17.04 Creating Action Creators",description:"index.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-04-creating-action-creators.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-04-creating-action-creators",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-04-creating-action-creators",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-04-creating-action-creators.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"17-04-creating-action-creators",title:"17.04 Creating Action Creators",date:"2021-07-15T00:21:02.000Z"},sidebar:"Docs",previous:{title:"17.03 Preparing Folder Structure",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-03-preparing-folder-structure"},next:{title:"17.05 Executing Synchronous Code",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-05-executing-synchronous-code"}},u=[{value:"<code>index.js</code>",id:"indexjs",children:[]},{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",children:[]},{value:"New <code>index.js</code>",id:"new-indexjs",children:[]}],p={toc:u};function l(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"indexjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\index.js" {9,12}',title:'"src\\index.js"',"{9,12}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { BrowserRouter } from "react-router-dom";\nimport { createStore } from "redux";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\nimport burgerBuilderReducer from "./store/reducers/burgerBuilder";\n\nconst store = createStore(\n  burgerBuilderReducer,\n  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n);\n\nconst app = (\n  <Provider store={store}>\n    <BrowserRouter>\n      <App />\n    </BrowserRouter>\n  </Provider>\n);\nReactDOM.render(app, document.getElementById("root"));\nregisterServiceWorker();\n')),(0,i.kt)("h2",{id:"burgerbuilderjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\BurgerBuilder\\BurgerBuilder.js" {10,127,129}',title:'"src\\containers\\BurgerBuilder\\BurgerBuilder.js"',"{10,127,129}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as burgerBuilderActions from "../../store/actions/index";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n    error: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    // axios\n    //   .get(\n    //     "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n    //   )\n    //   .then((response) => {\n    //     this.setState({ ingredients: response.data });\n    //   })\n    //   .catch((error) => {\n    //     this.setState({ error: true });\n    //   });\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.state.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n    if (this.state.loading) {\n      orderSummary = <Spinner />;\n    }\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch(burgerBuilderActions.addIngredient(ingName)),\n    onIgredientRemoved: (ingName) =>\n      dispatch(burgerBuilderActions.removeIngredient(ingName)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,i.kt)("h2",{id:"new-indexjs"},"New ",(0,i.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\index.js" {}',title:'"src\\store\\actions\\index.js"',"{}":!0},'export { addIngredient, removeIngredient } from "./burgerBuilder";\nexport {} from "./order";\n')))}l.isMDXComponent=!0}}]);