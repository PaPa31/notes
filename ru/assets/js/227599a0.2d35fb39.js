"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[98380],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,g=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},73565:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"15-06-working-on-the-total-price-calculation",title:"15.06 Working On The Total Price Calculation",date:new Date("2021-07-13T00:20:56.000Z")},c=void 0,u={unversionedId:"react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation",id:"react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation",title:"15.06 Working On The Total Price Calculation",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation.md",sourceDirName:"react-complete-guide/15-add-redux-to-our-project",slug:"/react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation",permalink:"/hm/ru/courses/react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"15-06-working-on-the-total-price-calculation",title:"15.06 Working On The Total Price Calculation",date:"2021-07-13T00:20:56.000Z"},sidebar:"Courses",previous:{title:"15.05 Connecting Burger Builder Container To Our Store",permalink:"/hm/ru/courses/react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store"},next:{title:"15.07 Redux And Ui State",permalink:"/hm/ru/courses/react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state"}},d={},p=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",level:2},{value:"<code>reducer.js</code>",id:"reducerjs",level:2}],l={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"burgerbuilderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {102,112,136}',title:'"BurgerBuilder.js"',"{102,112,136}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actionTypes from "../../store/actions";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n    error: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    // axios\n    //   .get(\n    //     "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n    //   )\n    //   .then((response) => {\n    //     this.setState({ ingredients: response.data });\n    //   })\n    //   .catch((error) => {\n    //     this.setState({ error: true });\n    //   });\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    this.setState({ purchasable: sum > 0 });\n  }\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    // alert("You continue!");\n\n    const queryParams = [];\n    for (let i in this.state.ingredients) {\n      queryParams.push(\n        encodeURIComponent(i) +\n          "=" +\n          encodeURIComponent(this.state.ingredients[i])\n      );\n    }\n    queryParams.push("price=" + this.state.totalPrice);\n    const queryString = queryParams.join("&");\n\n    this.props.history.push({\n      pathname: "/checkout",\n      search: "?" + queryString,\n    });\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.state.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.state.purchasable}\n            ordered={this.purchaseHandler}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n    if (this.state.loading) {\n      orderSummary = <Spinner />;\n    }\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),\n    onIgredientRemoved: (ingName) =>\n      dispatch({\n        type: actionTypes.REMOVE_INGREDIENT,\n        ingredientName: ingName,\n      }),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,a.kt)("h2",{id:"reducerjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {13-18,29,38}',title:'"reducer.js"',"{13-18,29,38}":!0},'import * as actionTypes from "./actions";\n\nconst initialState = {\n  ingredients: {\n    salad: 0,\n    bacon: 0,\n    cheese: 0,\n    meat: 0,\n  },\n  totalPrice: 4,\n};\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n        },\n        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n      };\n    case actionTypes.REMOVE_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n        },\n        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],\n      };\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}m.isMDXComponent=!0}}]);