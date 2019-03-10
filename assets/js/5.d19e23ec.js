(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"components-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Components configuration")]),t._v(" "),a("p",[t._v("Apicart allows you to select components you want to use. All components are downloaded from our CDN.\nComponents that can be downloaded have "),a("code",[t._v("CDN alias")]),t._v(" in the description. This alias is used when creating the CDN url.")]),t._v(" "),a("p",[t._v("The alias tells CDN which component you want do download.")]),t._v(" "),a("p",[t._v("The scheme of the adress looks like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://cdn.apicart.net/?components=<component1,component2,...>\n")])])]),a("p",[t._v("Lets say, you want a cart dropdown component and a button for adding products into the cart.\nThe dropdown alias is "),a("code",[t._v("cart-dropdown")]),t._v(" and the button component alias is "),a("code",[t._v("cart-quantity-manipulator")]),t._v(".\nNow, connect these two aliases by a comma and set it as a "),a("code",[t._v("components parameter value")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://cdn.apicart.net/?components=cart-dropdown,cart-quantity-manipulator\n")])])]),a("p",[t._v("If you want all components, simply set the value to "),a("code",[t._v("all")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://cdn.apicart.net/?components=all\n")])])]),a("p",[t._v("The dependencies between components are solved automatically.\nIf you want to download a nonexisting component, the CDN will return response with the code "),a("code",[t._v("400")]),t._v(" and the error description.")])])}],!1,null,null,null);e.default=o.exports}}]);