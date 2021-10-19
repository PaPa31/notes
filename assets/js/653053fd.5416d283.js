"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[50703],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,h=l["".concat(d,".").concat(m)]||l[m]||p[m]||a;return r?t.createElement(h,i(i({ref:n},u),{},{components:r})):t.createElement(h,i({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9019:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"17-14-combining-reducers",title:"17.14 Combining Reducers",date:new Date("2021-07-17T13:22:14.000Z")},d=void 0,c={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-14-combining-reducers",id:"react-complete-guide/17-redux-advanced-burger-project/17-14-combining-reducers",isDocsHomePage:!1,title:"17.14 Combining Reducers",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-14-combining-reducers.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-14-combining-reducers",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-14-combining-reducers",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-14-combining-reducers.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"17-14-combining-reducers",title:"17.14 Combining Reducers",date:"2021-07-17T13:22:14.000Z"},sidebar:"Docs",previous:{title:"17.13 Redirect to Improve UX",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-13-redirect-to-improve-ux"},next:{title:"17.15 Handling Purchases And Updating UI",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-15-handling-purchases-and-updating-ui"}},u=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",children:[]},{value:"<code>ContactData.js</code>",id:"contactdatajs",children:[]},{value:"<code>Checkout.js</code>",id:"checkoutjs",children:[]},{value:"<code>actions/order.js</code>",id:"actionsorderjs",children:[]},{value:"<code>actions/index.js</code>",id:"actionsindexjs",children:[]}],p={toc:u};function l(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"burgerbuilderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\BurgerBuilder\\BurgerBuilder.js" {105-107}',title:'"src\\containers\\BurgerBuilder\\BurgerBuilder.js"',"{105-107}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as burgerBuilderActions from "../../store/actions/index";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasing: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    this.props.onInitIngredients();\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.props.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.burgerBuilder.ingredients,\n    price: state.burgerBuilder.totalPrice,\n    error: state.burgerBuilder.error,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch(burgerBuilderActions.addIngredient(ingName)),\n    onIgredientRemoved: (ingName) =>\n      dispatch(burgerBuilderActions.removeIngredient(ingName)),\n    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,a.kt)("h2",{id:"contactdatajs"},(0,a.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Checkout\\ContactData\\ContactData.js" {89,195-197}',title:'"src\\containers\\Checkout\\ContactData\\ContactData.js"',"{89,195-197}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../../store/actions/index";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 5,\n          maxLength: 5,\n        },\n        valid: false,\n        touched: false,\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "fastest",\n        valid: true,\n        validation: {\n          required: false,\n        },\n      },\n    },\n    formIsValid: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ings,\n      price: this.props.price,\n      orderData: formData,\n    };\n    this.props.onOrderBurger(order);\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedFormElement.valid = this.checkValidity(\n      updatedFormElement.value,\n      updatedFormElement.validation\n    );\n    updatedFormElement.touched = true;\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n\n    let formIsValid = true;\n    for (let inputIdentifier in updatedOrderForm) {\n      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;\n    }\n    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            invalid={!formElement.config.valid}\n            shouldValidate={formElement.config.validation}\n            touched={formElement.config.touched}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success" disabled={!this.state.formIsValid}>\n          ORDER\n        </Button>\n      </form>\n    );\n    if (this.props.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.burgerBuilder.ingredients,\n    price: state.burgerBuilder.totalPrice,\n    loading: state.order.loading,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(ContactData, axios));\n')),(0,a.kt)("h2",{id:"checkoutjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Checkout.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Checkout\\Checkout.js" {39}',title:'"src\\containers\\Checkout\\Checkout.js"',"{39}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport { Redirect, Route } from "react-router-dom";\nimport CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";\nimport ContactData from "./ContactData/ContactData";\n\nclass Checkout extends Component {\n  checkoutCancelledHandler = () => {\n    this.props.history.goBack();\n  };\n\n  checkoutContinuedHandler = () => {\n    this.props.history.replace("/checkout/contact-data");\n  };\n  render() {\n    let summary = <Redirect to="/" />;\n    if (this.props.ings) {\n      summary = (\n        <div>\n          <CheckoutSummary\n            ingredients={this.props.ings}\n            checkoutCancelled={this.checkoutCancelledHandler}\n            checkoutContinued={this.checkoutContinuedHandler}\n          />\n          <Route\n            path={this.props.match.path + "/contact-data"}\n            component={ContactData}\n          />\n        </div>\n      );\n    }\n\n    return summary;\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.burgerBuilder.ingredients,\n  };\n};\n\nexport default connect(mapStateToProps)(Checkout);\n')),(0,a.kt)("h2",{id:"actionsorderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions/order.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\order.js" {32}',title:'"src\\store\\actions\\order.js"',"{32}":!0},'import axios from "../../axios-orders";\nimport * as actionTypes from "./actionTypes";\n\nexport const purchaseBurgerSuccess = (id, orderData) => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_SUCCESS,\n    orderId: id,\n    orderData: orderData,\n  };\n};\n\nexport const purchaseBurgerFail = (error) => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_FAIL,\n    error: error,\n  };\n};\n\nexport const purchaseBurgerStart = () => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_START,\n  };\n};\n\nexport const purchaseBurger = (orderData) => {\n  return (dispatch) => {\n    dispatch(purchaseBurgerStart());\n    axios\n      .post("/orders.json", orderData)\n      .then((response) => {\n        console.log(response.data);\n        dispatch(purchaseBurgerSuccess(response.data.name, orderData));\n      })\n      .catch((error) => {\n        dispatch(purchaseBurgerFail(error));\n      });\n  };\n};\n')),(0,a.kt)("h2",{id:"actionsindexjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions/index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\index.js" {5,11,15-19,21}',title:'"src\\index.js"',"{5,11,15-19,21}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { BrowserRouter } from "react-router-dom";\nimport { applyMiddleware, combineReducers, compose, createStore } from "redux";\nimport thunk from "redux-thunk";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\nimport burgerBuilderReducer from "./store/reducers/burgerBuilder";\nimport orderReducer from "./store/reducers/order";\n\nconst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\nconst rootReducer = combineReducers({\n  burgerBuilder: burgerBuilderReducer,\n  order: orderReducer,\n});\n\nconst store = createStore(\n  rootReducer,\n  composeEnhancers(applyMiddleware(thunk))\n);\n\nconst app = (\n  <Provider store={store}>\n    <BrowserRouter>\n      <App />\n    </BrowserRouter>\n  </Provider>\n);\nReactDOM.render(app, document.getElementById("root"));\nregisterServiceWorker();\n')))}l.isMDXComponent=!0}}]);