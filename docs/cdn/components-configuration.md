# Components configuration
Apicart allows you to select components you want to use. All components are downloaded from our CDN.
Components that can be downloaded have `CDN alias` in the description. This alias is used when creating the CDN url.

The alias tells CDN which component you want do download.

The scheme of the adress looks like this:
```
https://cdn.apicart.net/?components=<component1,component2,...>
```

Lets say, you want a cart dropdown component and a button for adding products into the cart.
The dropdown alias is `cart-dropdown` and the button component alias is `cart-quantity-manipulator`.
Now, connect these two aliases by a comma and set it as a `components parameter value`.
```
https://cdn.apicart.net/?components=cart-dropdown,cart-quantity-manipulator
```

If you want all components, simply set the value to `all`.
```
https://cdn.apicart.net/?components=all
```

The dependencies between components are solved automatically.
If you want to download a nonexisting component, the CDN will return response with the code `400` and the error description.