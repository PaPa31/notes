"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[33492],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(t),h=a,m=l["".concat(c,".").concat(h)]||l[h]||p[h]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},57151:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return l}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"18-15-redirecting-user-to-checkout-page",title:"18.15 Redirecting the User To the Checkout Page",date:new Date("2021-07-22T10:09:41.000Z")},c=void 0,u={unversionedId:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page",id:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page",isDocsHomePage:!1,title:"18.15 Redirecting the User To the Checkout Page",description:"Auth.js",source:"@site/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page.md",sourceDirName:"react-complete-guide/18-adding-authentication-to-our-burger-project",slug:"/react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-15-redirecting-user-to-checkout-page.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"18-15-redirecting-user-to-checkout-page",title:"18.15 Redirecting the User To the Checkout Page",date:"2021-07-22T10:09:41.000Z"},sidebar:"Docs",previous:{title:"18.14 Forwarding Unauthenticated Users",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-14-forwarding-unauthenticated-users"},next:{title:"18.16 Persistent Auth State with localStorage",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-16-persistent-auth-state-with-local-storage"}},d=[{value:"<code>Auth.js</code>",id:"authjs",children:[]},{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",children:[]},{value:"<code>actionTypes.js</code>",id:"actiontypesjs",children:[]},{value:"<code>actions/auth.js</code>",id:"actionsauthjs",children:[]},{value:"<code>index.js</code>",id:"indexjs",children:[]},{value:"<code>reducers/auth.js</code>",id:"reducersauthjs",children:[]},{value:"<code>burgerBuilder.js</code>",id:"burgerbuilderjs-1",children:[]}],p={toc:d};function l(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"Auth.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Auth\\Auth.js" {45-49,146,170-171,179}',title:'"src\\containers\\Auth\\Auth.js"',"{45-49,146,170-171,179}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport { Redirect } from "react-router-dom";\nimport Button from "../../components/UI/Button/Button";\nimport Input from "../../components/UI/Input/Input";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport * as actions from "../../store/actions/index";\nimport classes from "./Auth.module.css";\n\nclass Auth extends Component {\n  state = {\n    controls: {\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Mail Address",\n        },\n        value: "",\n        validation: {\n          required: true,\n          isEmail: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      password: {\n        elementType: "input",\n        elementConfig: {\n          type: "password",\n          placeholder: "Password",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 6,\n        },\n        valid: false,\n        touched: false,\n      },\n    },\n    isSignup: true,\n  };\n\n  componentDidMount() {\n    if (!this.props.buildingBurger && this.props.authRedirectPath !== "/") {\n      this.props.onSetAuthRedirectPath();\n    }\n  }\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (!rules) {\n      return true;\n    }\n\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    if (rules.isEmail) {\n      const pattern = /[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    if (rules.isNumeric) {\n      const pattern = /^\\d+$/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, controlName) => {\n    const updatedControls = {\n      ...this.state.controls,\n      [controlName]: {\n        ...this.state.controls[controlName],\n        value: event.target.value,\n        valid: this.checkValidity(\n          event.target.value,\n          this.state.controls[controlName].validation\n        ),\n        touched: true,\n      },\n    };\n    this.setState({ controls: updatedControls });\n  };\n\n  submitHandler = (event) => {\n    event.preventDefault();\n    this.props.onAuth(\n      this.state.controls.email.value,\n      this.state.controls.password.value,\n      this.state.isSignup\n    );\n  };\n\n  switchAuthModeHandler = () => {\n    this.setState((prevState) => {\n      return { isSignup: !prevState.isSignup };\n    });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.controls) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.controls[key],\n      });\n    }\n\n    let form = formElementsArray.map((formElement) => (\n      <Input\n        key={formElement.id}\n        elementType={formElement.config.elementType}\n        elementConfig={formElement.config.elementConfig}\n        value={formElement.config.value}\n        invalid={!formElement.config.valid}\n        shouldValidate={formElement.config.validation}\n        touched={formElement.config.touched}\n        changed={(event) => this.inputChangedHandler(event, formElement.id)}\n      />\n    ));\n\n    if (this.props.loading) {\n      form = <Spinner />;\n    }\n\n    let errorMessage = null;\n\n    if (this.props.error) {\n      errorMessage = <p>{this.props.error.message}</p>;\n    }\n\n    let authRedirect = null;\n    if (this.props.isAuthenticated) {\n      authRedirect = <Redirect to={this.props.authRedirectPath} />;\n    }\n\n    return (\n      <div className={classes.Auth}>\n        {authRedirect}\n        {errorMessage}\n        <form onSubmit={this.submitHandler}>\n          {form}\n          <Button btnType="Success">Submit</Button>\n          <Button clicked={this.switchAuthModeHandler} btnType="Danger">\n            SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}\n          </Button>\n        </form>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    loading: state.auth.loading,\n    error: state.auth.error,\n    isAuthenticated: state.auth.token !== null,\n    buildingBurger: state.burgerBuilder.building,\n    authRedirectPath: state.auth.authRedirectPath,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onAuth: (email, password, isSignup) =>\n      dispatch(actions.auth(email, password, isSignup)),\n    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Auth);\n')),(0,i.kt)("h2",{id:"burgerbuilderjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\BurgerBuilder\\BurgerBuilder.js" {41,126-127}',title:'"src\\containers\\BurgerBuilder\\BurgerBuilder.js"',"{41,126-127}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../store/actions/index";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasing: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    this.props.onInitIngredients();\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    if (this.props.isAuthenticated) {\n      this.setState({ purchasing: true });\n    } else {\n      this.props.onSetAuthRedirectPath("/checkout");\n      this.props.history.push("/auth");\n    }\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    this.props.onInitPurchase();\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.props.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            isAuth={this.props.isAuthenticated}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.burgerBuilder.ingredients,\n    price: state.burgerBuilder.totalPrice,\n    error: state.burgerBuilder.error,\n    isAuthenticated: state.auth.token !== null,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),\n    onIgredientRemoved: (ingName) =>\n      dispatch(actions.removeIngredient(ingName)),\n    onInitIngredients: () => dispatch(actions.initIngredients()),\n    onInitPurchase: () => dispatch(actions.purchaseInit()),\n    onSetAuthRedirectPath: (path) =>\n      dispatch(actions.setAuthRedirectPath(path)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,i.kt)("h2",{id:"actiontypesjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"actionTypes.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\actionTypes.js" {20}',title:'"src\\store\\actions\\actionTypes.js"',"{20}":!0},'export const ADD_INGREDIENT = "ADD_INGREDIENT";\nexport const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";\nexport const SET_INGREDIENTS = "SET_INGREDIENTS";\nexport const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED";\n\nexport const PURCHASE_BURGER_START = "PURCHASE_BURGER_START";\nexport const PURCHASE_BURGER_SUCCESS = "PURCHASE_BURGER_SUCCESS";\nexport const PURCHASE_BURGER_FAIL = "PURCHASE_BURGER_FAIL";\nexport const PURCHASE_INIT = "PURCHASE_INIT";\n\nexport const FETCH_ORDERS_START = "FETCH_ORDERS_START";\nexport const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";\nexport const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";\n\nexport const AUTH_START = "AUTH_START";\nexport const AUTH_SUCCESS = "AUTH_SUCCESS";\nexport const AUTH_FAIL = "AUTH_FAIL";\nexport const AUTH_LOGOUT = "AUTH_LOGOUT";\n\nexport const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH";\n')),(0,i.kt)("h2",{id:"actionsauthjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"actions/auth.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\auth.js" {66-71}',title:'"src\\store\\actions\\auth.js"',"{66-71}":!0},'import axios from "axios";\nimport * as actionTypes from "./actionTypes";\n\nexport const authStart = () => {\n  return {\n    type: actionTypes.AUTH_START,\n  };\n};\n\nexport const authSuccess = (token, userId) => {\n  return {\n    type: actionTypes.AUTH_SUCCESS,\n    idToken: token,\n    userId: userId,\n  };\n};\n\nexport const authFail = (error) => {\n  return {\n    type: actionTypes.AUTH_FAIL,\n    error: error,\n  };\n};\n\nexport const logout = () => {\n  return {\n    type: actionTypes.AUTH_LOGOUT,\n  };\n};\n\nexport const checkAuthTimeout = (expirationTime) => {\n  return (dispatch) => {\n    setTimeout(() => {\n      dispatch(logout());\n    }, expirationTime * 1000);\n  };\n};\n\nexport const auth = (email, password, isSignup) => {\n  return (dispatch) => {\n    dispatch(authStart());\n    const authData = {\n      email: email,\n      password: password,\n      returnSecureToken: true,\n    };\n    let url =\n      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsmwPeH2yE7yqvoeYolCLgB9ju50rYivo";\n    if (!isSignup) {\n      url =\n        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsmwPeH2yE7yqvoeYolCLgB9ju50rYivo";\n    }\n    axios\n      .post(url, authData)\n      .then((response) => {\n        console.log(response);\n        dispatch(authSuccess(response.data.idToken, response.data.localId));\n        dispatch(checkAuthTimeout(response.data.expiresIn));\n      })\n      .catch((err) => {\n        dispatch(authFail(err.response.data.error));\n      });\n  };\n};\n\nexport const setAuthRedirectPath = (path) => {\n  return {\n    type: actionTypes.SET_AUTH_REDIRECT_PATH,\n    path: path,\n  };\n};\n')),(0,i.kt)("h2",{id:"indexjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\index.js" {1}',title:'"src\\store\\actions\\index.js"',"{1}":!0},'export { auth, logout, setAuthRedirectPath } from "./auth";\nexport {\n  addIngredient,\n  initIngredients,\n  removeIngredient,\n} from "./burgerBuilder";\nexport { fetchOrders, purchaseBurger, purchaseInit } from "./order";\n')),(0,i.kt)("h2",{id:"reducersauthjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"reducers/auth.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\auth.js" {9,36-40,52-53}',title:'"src\\store\\reducers\\auth.js"',"{9,36-40,52-53}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "./../utility";\n\nconst initialState = {\n  token: null,\n  userId: null,\n  error: null,\n  loading: false,\n  authRedirectPath: "/",\n};\n\nconst authStart = (state, action) => {\n  return updateObject(state, { error: null, loading: true });\n};\n\nconst authSuccess = (state, action) => {\n  return updateObject(state, {\n    token: action.idToken,\n    userId: action.userId,\n    error: null,\n    loading: false,\n  });\n};\n\nconst authFail = (state, action) => {\n  return updateObject(state, {\n    error: action.error,\n    loading: false,\n  });\n};\n\nconst authLogout = (state, action) => {\n  return updateObject(state, { token: null, userId: null });\n};\n\nconst setAuthRedirectPath = (state, action) => {\n  return updateObject(state, {\n    authRedirectPath: action.path,\n  });\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.AUTH_START:\n      return authStart(state, action);\n    case actionTypes.AUTH_SUCCESS:\n      return authSuccess(state, action);\n    case actionTypes.AUTH_FAIL:\n      return authFail(state, action);\n    case actionTypes.AUTH_LOGOUT:\n      return authLogout(state, action);\n    case actionTypes.SET_AUTH_REDIRECT_PATH:\n      return setAuthRedirectPath(state, action);\n\n    default:\n      return state;\n  }\n};\nexport default reducer;\n')),(0,i.kt)("h2",{id:"burgerbuilderjs-1"},(0,i.kt)("inlineCode",{parentName:"h2"},"burgerBuilder.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\burgerBuilder.js" {9,27,40,55}',title:'"src\\store\\reducers\\burgerBuilder.js"',"{9,27,40,55}":!0},'import * as actionTypes from "../actions/actionTypes";\nimport { updateObject } from "../utility";\n// import { setIngredients } from "./../actions/burgerBuilder";\n\nconst initialState = {\n  ingredients: null,\n  totalPrice: 4,\n  error: false,\n  building: false,\n};\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nconst addIngredient = (state, action) => {\n  const updatedIngredient = {\n    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n  };\n  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);\n  const updatedState = {\n    ingredients: updatedIngredients,\n    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n    building: true,\n  };\n  return updateObject(state, updatedState);\n};\n\nconst removeIngredient = (state, action) => {\n  const updatedIng = {\n    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n  };\n  const updatedIngs = updateObject(state.ingredients, updatedIng);\n  const updatedSt = {\n    ingredients: updatedIngs,\n    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],\n    building: true,\n  };\n  return updateObject(state, updatedSt);\n};\n\nconst setIngredients = (state, action) => {\n  return updateObject(state, {\n    ingredients: {\n      salad: action.ingredients.salad,\n      bacon: action.ingredients.bacon,\n      cheese: action.ingredients.cheese,\n      meat: action.ingredients.meat,\n    },\n    totalPrice: 4,\n    error: false,\n    building: false,\n  });\n};\n\nconst fetchIngredientsFailed = (state, action) => {\n  return updateObject(state, { error: true });\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return addIngredient(state, action);\n\n    case actionTypes.REMOVE_INGREDIENT:\n      return removeIngredient(state, action);\n\n    case actionTypes.SET_INGREDIENTS:\n      return setIngredients(state, action);\n\n    case actionTypes.FETCH_INGREDIENTS_FAILED:\n      return fetchIngredientsFailed(state, action);\n\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}l.isMDXComponent=!0}}]);