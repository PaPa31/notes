"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[44138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),g=a,m=l["".concat(d,".").concat(g)]||l[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},32280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"12-04-navigation-to-checkout-page",title:"12.04 Navigation To Checkout Page",date:new Date("2021-04-19T21:14:49.000Z")},i=void 0,s={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page",id:"react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page",title:"12.04 Navigation To Checkout Page",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"12-04-navigation-to-checkout-page",title:"12.04 Navigation To Checkout Page",date:"2021-04-19T21:14:49.000Z"},sidebar:"Courses",previous:{title:"12.03 Setting Up Routing And Routes",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes"},next:{title:"12.05 Navigation Back And To Next Page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page"}},d={},u=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"burgerbuilderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {97-120}',title:'"BurgerBuilder.js"',"{97-120}":!0},'import React, { Component, Fragment } from "react";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    ingredients: null,\n    totalPrice: 4,\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n    error: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    axios\n      .get(\n        "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n      )\n      .then((response) => {\n        this.setState({ ingredients: response.data });\n      })\n      .catch((error) => {\n        this.setState({ error: true });\n      });\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    this.setState({ purchasable: sum > 0 });\n  }\n\n  addIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    const updateCount = oldCount + 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceAddition = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice + priceAddition;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  removeIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    if (oldCount <= 0) {\n      return;\n    }\n    const updateCount = oldCount - 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceDeduction = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice - priceDeduction;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    // alert("You continue!");\n    // this.setState({ loading: true });\n    // const order = {\n    //   ingredients: this.state.ingredients,\n    //   price: this.state.totalPrice,\n    //   customer: {\n    //     name: "Pash Pa",\n    //     address: {\n    //       street: "Teststreet 1",\n    //       zipCode: "34234",\n    //       country: "Russia",\n    //     },\n    //     email: "test@test.com",\n    //   },\n    //   deliveryMethod: "fastest",\n    // };\n    // axios\n    //   .post("/orders.json", order)\n    //   .then((response) => {\n    //     this.setState({ loading: false, purchasing: false });\n    //   })\n    //   .catch((error) => {\n    //     this.setState({ loading: false, purchasing: false });\n    //   });\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.state.ingredients,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.state.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.state.ingredients) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.state.ingredients} />\n          <BuildControls\n            ingredientAdded={this.addIngredientHandler}\n            ingredientRemoved={this.removeIngredientHandler}\n            disabled={disabledInfo}\n            purchasable={this.state.purchasable}\n            ordered={this.purchaseHandler}\n            price={this.state.totalPrice}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.state.ingredients}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.state.totalPrice}\n        />\n      );\n    }\n    if (this.state.loading) {\n      orderSummary = <Spinner />;\n    }\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\nexport default withErrorHandler(BurgerBuilder, axios);\n')))}p.isMDXComponent=!0}}]);