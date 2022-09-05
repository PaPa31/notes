"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[77144],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),u=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,g=l["".concat(d,".").concat(m)]||l[m]||c[m]||o;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},89204:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(87462),a=(r(67294),r(3905));const o={id:"15-07-redux-and-ui-state",title:"15.07 Redux And Ui State",date:new Date("2021-07-13T15:41:53.000Z")},i=void 0,s={unversionedId:"react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state",id:"react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state",title:"15.07 Redux And Ui State",description:"BurgerBuilder",source:"@site/courses/react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state.md",sourceDirName:"react-complete-guide/15-add-redux-to-our-project",slug:"/react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"15-07-redux-and-ui-state",title:"15.07 Redux And Ui State",date:"2021-07-13T15:41:53.000Z"},sidebar:"Courses",previous:{title:"15.06 Working On The Total Price Calculation",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation"},next:{title:"15.08 Adjusting Checkout And Contact Data",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-08-adjusting-checkout-and-contact-data"}},d={},u=[{value:"<code>BurgerBuilder</code>",id:"burgerbuilder",level:2}],p={toc:u};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"burgerbuilder"},(0,a.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBulder.js" {46,100}',title:'"BurgerBulder.js"',"{46,100}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actionTypes from "../../store/actions";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n    error: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    // axios\n    //   .get(\n    //     "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n    //   )\n    //   .then((response) => {\n    //     this.setState({ ingredients: response.data });\n    //   })\n    //   .catch((error) => {\n    //     this.setState({ error: true });\n    //   });\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    // alert("You continue!");\n\n    const queryParams = [];\n    for (let i in this.state.ingredients) {\n      queryParams.push(\n        encodeURIComponent(i) +\n          "=" +\n          encodeURIComponent(this.state.ingredients[i])\n      );\n    }\n    queryParams.push("price=" + this.state.totalPrice);\n    const queryString = queryParams.join("&");\n\n    this.props.history.push({\n      pathname: "/checkout",\n      search: "?" + queryString,\n    });\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.state.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n    if (this.state.loading) {\n      orderSummary = <Spinner />;\n    }\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),\n    onIgredientRemoved: (ingName) =>\n      dispatch({\n        type: actionTypes.REMOVE_INGREDIENT,\n        ingredientName: ingName,\n      }),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')))}c.isMDXComponent=!0}}]);