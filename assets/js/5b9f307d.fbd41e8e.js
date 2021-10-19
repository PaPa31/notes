"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[23862],{3905:function(n,e,t){t.d(e,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),l=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=l(n.components);return r.createElement(u.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,u=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(g,a(a({ref:e},d),{},{components:t})):r.createElement(g,a({ref:e},d))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s.mdxType="string"==typeof n?n:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57396:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"18-14-forwarding-unauthenticated-users",title:"18.14 Forwarding Unauthenticated Users",date:new Date("2021-07-22T09:04:33.000Z")},u=void 0,l={unversionedId:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users",id:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users",isDocsHomePage:!1,title:"18.14 Forwarding Unauthenticated Users",description:"BuildControls.js",source:"@site/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users.md",sourceDirName:"react-complete-guide/18-adding-authentication-to-our-burger-project",slug:"/react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"18-14-forwarding-unauthenticated-users",title:"18.14 Forwarding Unauthenticated Users",date:"2021-07-22T09:04:33.000Z"},sidebar:"Docs",previous:{title:"18.13 Adding a Logout Link",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-13-adding-a-logout-link"},next:{title:"18.15 Redirecting the User To the Checkout Page",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page"}},d=[{value:"<code>BuildControls.js</code>",id:"buildcontrolsjs",children:[]},{value:"<code>NavigationItems.js</code>",id:"navigationitemsjs",children:[]},{value:"<code>Auth.js</code>",id:"authjs",children:[]},{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",children:[]}],c={toc:d};function p(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"buildcontrolsjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"BuildControls.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\components\\Burger\\BuildControls\\BuildControls.js" {30}',title:'"src\\components\\Burger\\BuildControls\\BuildControls.js"',"{30}":!0},'import React from "react";\nimport BuildControl from "./BuildControl/BuildControl";\nimport classes from "./BuildControls.module.css";\nconst controls = [\n  { label: "Salad", type: "salad" },\n  { label: "Bacon", type: "bacon" },\n  { label: "Cheese", type: "cheese" },\n  { label: "Meat", type: "meat" },\n];\n\nconst buildControls = (props) => (\n  <div className={classes.BuildControls}>\n    <p>\n      Current Price: <strong>{props.price.toFixed(2)}</strong>\n    </p>\n    {controls.map((ctrl) => (\n      <BuildControl\n        key={ctrl.label}\n        label={ctrl.label}\n        added={() => props.ingredientAdded(ctrl.type)}\n        removed={() => props.ingredientRemoved(ctrl.type)}\n        disabled={props.disabled[ctrl.type]}\n      />\n    ))}\n    <button\n      className={classes.OrderButton}\n      disabled={!props.purchasable}\n      onClick={props.ordered}\n    >\n      {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}\n    </button>\n  </div>\n);\n\nexport default buildControls;\n')),(0,i.kt)("h2",{id:"navigationitemsjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"NavigationItems.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\components\\Navigation\\NavigationItems\\NavigationItems.js" {10,12}',title:'"src\\components\\Navigation\\NavigationItems\\NavigationItems.js"',"{10,12}":!0},'import React from "react";\nimport NavigationItem from "./NavigationItem/NavigationItem";\nimport classes from "./NavigationItems.module.css";\n\nconst navigationItems = (props) => (\n  <ul className={classes.NavigationItems}>\n    <NavigationItem link="/" exact>\n      Burger Builder\n    </NavigationItem>\n    {props.isAuthenticated ? (\n      <NavigationItem link="/orders">Orders</NavigationItem>\n    ) : null}\n    {!props.isAuthenticated ? (\n      <NavigationItem link="/auth">Authenticate</NavigationItem>\n    ) : (\n      <NavigationItem link="/logout">Logout</NavigationItem>\n    )}\n  </ul>\n);\n\nexport default navigationItems;\n')),(0,i.kt)("h2",{id:"authjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"Auth.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Auth\\Auth.js" {3,138-141,145,163}',title:'"src\\containers\\Auth\\Auth.js"',"{3,138-141,145,163}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport { Redirect } from "react-router-dom";\nimport Button from "../../components/UI/Button/Button";\nimport Input from "../../components/UI/Input/Input";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport * as actions from "../../store/actions/index";\nimport classes from "./Auth.module.css";\n\nclass Auth extends Component {\n  state = {\n    controls: {\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Mail Address",\n        },\n        value: "",\n        validation: {\n          required: true,\n          isEmail: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      password: {\n        elementType: "input",\n        elementConfig: {\n          type: "password",\n          placeholder: "Password",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 6,\n        },\n        valid: false,\n        touched: false,\n      },\n    },\n    isSignup: true,\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (!rules) {\n      return true;\n    }\n\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    if (rules.isEmail) {\n      const pattern = /[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    if (rules.isNumeric) {\n      const pattern = /^\\d+$/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, controlName) => {\n    const updatedControls = {\n      ...this.state.controls,\n      [controlName]: {\n        ...this.state.controls[controlName],\n        value: event.target.value,\n        valid: this.checkValidity(\n          event.target.value,\n          this.state.controls[controlName].validation\n        ),\n        touched: true,\n      },\n    };\n    this.setState({ controls: updatedControls });\n  };\n\n  submitHandler = (event) => {\n    event.preventDefault();\n    this.props.onAuth(\n      this.state.controls.email.value,\n      this.state.controls.password.value,\n      this.state.isSignup\n    );\n  };\n\n  switchAuthModeHandler = () => {\n    this.setState((prevState) => {\n      return { isSignup: !prevState.isSignup };\n    });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.controls) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.controls[key],\n      });\n    }\n\n    let form = formElementsArray.map((formElement) => (\n      <Input\n        key={formElement.id}\n        elementType={formElement.config.elementType}\n        elementConfig={formElement.config.elementConfig}\n        value={formElement.config.value}\n        invalid={!formElement.config.valid}\n        shouldValidate={formElement.config.validation}\n        touched={formElement.config.touched}\n        changed={(event) => this.inputChangedHandler(event, formElement.id)}\n      />\n    ));\n\n    if (this.props.loading) {\n      form = <Spinner />;\n    }\n\n    let errorMessage = null;\n\n    if (this.props.error) {\n      errorMessage = <p>{this.props.error.message}</p>;\n    }\n\n    let authRedirect = null;\n    if (this.props.isAuthenticated) {\n      authRedirect = <Redirect to="/" />;\n    }\n\n    return (\n      <div className={classes.Auth}>\n        {authRedirect}\n        {errorMessage}\n        <form onSubmit={this.submitHandler}>\n          {form}\n          <Button btnType="Success">Submit</Button>\n          <Button clicked={this.switchAuthModeHandler} btnType="Danger">\n            SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}\n          </Button>\n        </form>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    loading: state.auth.loading,\n    error: state.auth.error,\n    isAuthenticated: state.auth.token !== null,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onAuth: (email, password, isSignup) =>\n      dispatch(actions.auth(email, password, isSignup)),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Auth);\n')),(0,i.kt)("h2",{id:"burgerbuilderjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\BurgerBuilder\\BurgerBuilder.js" {38,40-42,79,114}',title:'"src\\containers\\BurgerBuilder\\BurgerBuilder.js"',"{38,40-42,79,114}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../store/actions/index";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasing: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    this.props.onInitIngredients();\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    if (this.props.isAuthenticated) {\n      this.setState({ purchasing: true });\n    } else {\n      this.props.history.push("/auth");\n    }\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    this.props.onInitPurchase();\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.props.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            isAuth={this.props.isAuthenticated}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.burgerBuilder.ingredients,\n    price: state.burgerBuilder.totalPrice,\n    error: state.burgerBuilder.error,\n    isAuthenticated: state.auth.token !== null,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),\n    onIgredientRemoved: (ingName) =>\n      dispatch(actions.removeIngredient(ingName)),\n    onInitIngredients: () => dispatch(actions.initIngredients()),\n    onInitPurchase: () => dispatch(actions.purchaseInit()),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')))}p.isMDXComponent=!0}}]);