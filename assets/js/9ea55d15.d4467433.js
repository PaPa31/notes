"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[623],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={id:"17-10-connecting-contact-data-container-and-actions",title:"17.10 Connecting Contact Data Container & Actions",date:new Date("2021-07-16T22:40:45.000Z")},i=void 0,d={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions",id:"react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions",title:"17.10 Connecting Contact Data Container & Actions",description:"ContactData.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"17-10-connecting-contact-data-container-and-actions",title:"17.10 Connecting Contact Data Container & Actions",date:"2021-07-16T22:40:45.000Z"},sidebar:"Courses",previous:{title:"17.09 Adding Order Actions",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-09-adding-order-actions"},next:{title:"17.11 Order Reducer",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer"}},c={},l=[{value:"<code>ContactData.js</code>",id:"contactdatajs",level:2},{value:"<code>actions/index.js</code>",id:"actionsindexjs",level:2}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contactdatajs"},(0,a.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Checkout\\ContactData\\ContactData.js" {3,5,181,197,203,207-210}',title:'"src\\containers\\Checkout\\ContactData\\ContactData.js"',"{3,5,181,197,203,207-210}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../../store/actions/index";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 5,\n          maxLength: 5,\n        },\n        valid: false,\n        touched: false,\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "",\n        valid: true,\n        validation: {\n          required: false,\n        },\n      },\n    },\n    formIsValid: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ings,\n      price: this.props.price,\n      orderData: formData,\n    };\n    this.props.onOrderBurger(order);\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedFormElement.valid = this.checkValidity(\n      updatedFormElement.value,\n      updatedFormElement.validation\n    );\n    updatedFormElement.touched = true;\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n\n    let formIsValid = true;\n    for (let inputIdentifier in updatedOrderForm) {\n      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;\n    }\n    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            invalid={!formElement.config.valid}\n            shouldValidate={formElement.config.validation}\n            touched={formElement.config.touched}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success" disabled={!this.state.formIsValid}>\n          ORDER\n        </Button>\n      </form>\n    );\n    if (this.props.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n    loading: state.loading,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(ContactData, axios));\n')),(0,a.kt)("h2",{id:"actionsindexjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions/index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\index.js" {6}',title:'"src\\store\\actions\\index.js"',"{6}":!0},'export {\n  addIngredient,\n  initIngredients,\n  removeIngredient,\n} from "./burgerBuilder";\nexport { purchaseBurgerStart } from "./order";\n')))}u.isMDXComponent=!0}}]);