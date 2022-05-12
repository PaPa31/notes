"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[68144],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),p=o,f=c["".concat(m,".").concat(p)]||c[p]||u[p]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12055:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"13-08-handling-form-submission",title:"13.08 Handling Form Submission",date:new Date("2021-04-20T23:24:50.000Z")},m=void 0,l={unversionedId:"react-complete-guide/13-forms-and-form-validation/13-08-handling-form-submission",id:"react-complete-guide/13-forms-and-form-validation/13-08-handling-form-submission",title:"13.08 Handling Form Submission",description:"ContactData.js",source:"@site/courses/react-complete-guide/13-forms-and-form-validation/13-08-handling-form-submission.md",sourceDirName:"react-complete-guide/13-forms-and-form-validation",slug:"/react-complete-guide/13-forms-and-form-validation/13-08-handling-form-submission",permalink:"/hm/ru/courses/react-complete-guide/13-forms-and-form-validation/13-08-handling-form-submission",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/13-forms-and-form-validation/13-08-handling-form-submission.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"13-08-handling-form-submission",title:"13.08 Handling Form Submission",date:"2021-04-20T23:24:50.000Z"},sidebar:"Courses",previous:{title:"13.07 Handling User Input",permalink:"/hm/ru/courses/react-complete-guide/13-forms-and-form-validation/13-07-handling-user-input"},next:{title:"13.09 Adding Custom Form Validation",permalink:"/hm/ru/courses/react-complete-guide/13-forms-and-form-validation/13-09-adding-custom-form-validation"}},d={},u=[{value:"<code>ContactData.js</code>",id:"contactdatajs",level:2}],c={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contactdatajs"},(0,a.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ContactData.js" {68-73,77,110,120}',title:'"ContactData.js"',"{68-73,77,110,120}":!0},'import React, { Component } from "react";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "",\n      },\n    },\n    loading: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n    this.setState({ loading: true });\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ingredients,\n      price: this.props.price,\n      orderData: formData,\n    };\n    axios\n      .post("/orders.json", order)\n      .then((response) => {\n        this.setState({ loading: false });\n        this.props.history.push("/");\n      })\n      .catch((error) => {\n        this.setState({ loading: false });\n      });\n  };\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n    this.setState({ orderForm: updatedOrderForm });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success">ORDER</Button>\n      </form>\n    );\n    if (this.state.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\nexport default ContactData;\n')))}p.isMDXComponent=!0}}]);