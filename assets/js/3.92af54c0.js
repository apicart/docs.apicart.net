(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("This quick guide will guide you through registration, installation and configuration and will show you how to begin with the components! Let's get started!")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("ol",[n("li",[t._v("First of all, you must "),n("a",{attrs:{href:"https://admin.apicart.dev/en-us/security/registration",target:"_blank",rel:"noopener noreferrer"}},[t._v("sign-up"),n("OutboundLink")],1),t._v(" in order to use our services. After submitting the form you will receive a confirmation e-mail.")]),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("ol",[n("li",[t._v("In the "),n("a",{attrs:{href:"https://admin.apicart.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("administration"),n("OutboundLink")],1),t._v(", in the top right corner, there is a circle with your profile photo. Click on it and you will see a dropdown menu. In this menu, choose "),n("strong",[t._v("installation")]),t._v(".")]),t._v(" "),n("li",[t._v("On the installation page, there are 2 API access keys.")]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._m(11),t._v(" "),n("p",[t._v("Public and private keys differ in API access rights.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("Apicart provides prepared components like "),n("router-link",{attrs:{to:"/components/web/v1/cart.html#cart-quantity-manipulator"}},[t._v("buttons")]),t._v(" for adding / removing products from cart, "),n("router-link",{attrs:{to:"/components/web/v1/cart.html#cart-dropdown"}},[t._v("cart dropdown")]),t._v(" or "),n("router-link",{attrs:{to:"/components/web/v1/cart.html#cart-overview"}},[t._v("cart overview")]),t._v(".\nIf you want to use everything as in example below, just use the word "),n("code",[t._v("all")]),t._v(".")],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),n("ol",{attrs:{start:"3"}},[n("li",[t._v("In order to generate the buy buttons we need to add the initialization code.\nThe detailed configuration is described in a separated "),n("router-link",{attrs:{to:"/components/web/v1/cart.html#cart-quantity-manipulator"}},[t._v("section")]),t._v(".")],1)]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),n("ol",{attrs:{start:"5"}},[n("li",[t._v("As in the previous example, we need to add the cart dropdown initialization code into the "),n("code",[t._v("init")]),t._v(" function.\nThe detailed configuration is described in a separated "),n("router-link",{attrs:{to:"/components/web/v1/cart.html#cart-dropdown"}},[t._v("section")]),t._v(".")],1)]),t._v(" "),t._m(21),n("ol",{attrs:{start:"6"}},[n("li",[t._v("DONE! If you reload the page now, the dropdown and the buy button will appear. If you click on the "),n("code",[t._v("Add To Cart")]),t._v(" button\nthe product price in the cart dropdown will immediately change and you will see a new data in graphs in your "),n("a",{attrs:{href:"https://admin.apicart.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("administration"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(22),t._v(" "),n("ol",[n("li",[t._v("If you want activate the production environment, you need to register on the "),n("a",{attrs:{href:"https://admin.apicart.net/en-us/security/registration",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://admin.apicart.net"),n("OutboundLink")],1),t._v("\nor click on the "),n("code",[t._v("Live environment")]),t._v(" button in the administration (it will create the production environment automatically)")]),t._v(" "),n("li",[t._v("Sign in to your profile on production environment and fill in the billing info")]),t._v(" "),t._m(23)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The whole example is using the "),n("strong",[t._v("testing environment")]),t._v(". There is "),n("strong",[t._v("no billing information required")]),t._v(" because we provide the "),n("strong",[t._v("testing environment for free")]),t._v(". If you want to switch to the production (paid) environment, read "),n("a",{attrs:{href:"#switching-to-the-production-environment"}},[t._v("how to switch to the production environemnt")]),t._v(".")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registration","aria-hidden":"true"}},[this._v("#")]),this._v(" Registration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("In the registration email, click on the "),a("code",[this._v("Activate my account")]),this._v(" button. You will be redirected on the registration page. Setup your password and sign in to your account.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ol",[n("li",[t._v("Before we start working with components, we need to add some products into our internet store. Click on the "),n("code",[t._v("Items overview")]),t._v(" in the administration in the left sidebar.")]),t._v(" "),n("li",[t._v("On the "),n("code",[t._v("Items overview")]),t._v(" page, in the top right corner, there is a white circle. Click on it and choose "),n("code",[t._v("Add item")]),t._v(".")]),t._v(" "),n("li",[t._v("Now in the top part of the white block, you should see a warning about "),n("code",[t._v("Blocked data provider")]),t._v(" and a generated url. Copy the generated url, and click on the "),n("code",[t._v("allowed data providers")]),t._v(" link.")]),t._v(" "),n("li",[t._v("Now, on the "),n("code",[t._v("Edit domain")]),t._v(" page, click on the "),n("code",[t._v("Data providers")]),t._v(" tab in the top menu, paste the copied url into the last available input and click save.")]),t._v(" "),n("li",[t._v("Go back to the "),n("code",[t._v("Add new item page")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-products"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-products","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating Products")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ol",[n("li",[t._v("On the product form page, set the unique identifier to "),n("code",[t._v("1")]),t._v(", "),n("code",[t._v("Product 1")]),t._v(" as a name, price will be 1, tax rate for example 21 and click on the "),n("code",[t._v("Create item")]),t._v(" button.")]),t._v(" "),n("li",[t._v("Now, you should be on the "),n("code",[t._v("Item detail")]),t._v(" page and in the bottom of the white block, there should be "),n("code",[t._v("Item data source")]),t._v(" url. Copy this url somewhere,\nbecause you will use in the following steps.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("Replace the "),a("code",[this._v("<public api key>")]),this._v(" in the code below by your public API key\n"),a("code",[this._v("<head></head>")]),this._v(" (or immediately behind the script that loads the components from the CDN, see below). The result will looks like this (the three dots is the previous content):")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-HTML extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apicartConfig "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apicartConfig "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apicartConfigure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apicartConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apicartConfigure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<public api key>"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"api-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-keys","aria-hidden":"true"}},[this._v("#")]),this._v(" API Keys")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("Public key")]),this._v(": this key is intended for a publicly accessible places like a web site.")]),this._v(" "),a("li",[a("strong",[this._v("Private key")]),this._v(": this key allows you to send some API queries that you can not send with a public key for security reasons. It can be used for example on the backend part of the application. Do not publish this key anywhere!!")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"getting-started-with-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started With Components!")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("First of all, we need to load all the components and tools we need for this example. Just add following line into your page.")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-HTML extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.apicart.dev/v1/?components=all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{attrs:{start:"2"}},[a("li",[this._v("Now, when we have everything we need, we can begin! Every e-commerce platform needs a "),a("code",[this._v("Buy Button")]),this._v(" so lets add one by creating an element into which the button will be rendered.")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-HTML extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("buy-button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-url")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<Item data source url from administration>"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-HTML extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apicartConfigure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.buy-button'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                apicart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cartQuantityManipulator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    itemUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data-url'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    submitButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Add To Cart'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{attrs:{start:"4"}},[a("li",[this._v("After reloading the page you will see the "),a("code",[this._v("Add To Cart")]),this._v(" button. To see the contents of the cart, we will need to add a cart dropdown.")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-HTML extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cart-dropdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-HTML extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apicartConfigure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            apicart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cartDropdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.cart-dropdown'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                leftPosition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                infoBlock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%name%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                removalButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<button data-apicart-cart-remove-item=\"%dataUrl%\">Remove</button>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                toggleButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cart %itemsCount% items for $%itemsPrice%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                footerBlocks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div style=\"text-align: center\">Items count <strong>%itemsCount% pcs</strong></div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div style=\"text-align: center\">Total price <strong>$%itemsPrice%</strong></div>'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                showQuantityManipulator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"switching-to-the-production-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switching-to-the-production-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Switching To The Production Environment")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("Replace the testing API keys for the production API keys in the configuration("),a("code",[this._v("apicartConfigure")]),this._v(") on your page and its DONE!")])}],!1,null,null,null);a.default=e.exports}}]);