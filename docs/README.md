# Getting Started
This quick guide will guide you through registration, installation and configuration and will show you how to begin with the components! Let's get started!

::: warning Note
The whole example is using the **testing environment**. There is **no billing information required** because we provide the **testing environment for free**. If you want to switch to the production (paid) environment, read [how to switch to the production environemnt](#switching-to-the-production-environment).
:::

## Registration
1. First of all, you must [sign-up](https://admin.apicart.dev/en/security/registration) in order to use our services. After submitting the form you will receive a confirmation e-mail.
2. In the registration email, click on the `Activate my account` button. You will be redirected on the registration page. Setup your password and sign in to your account.

## Configuration
1. Before we start working with components, we need to add some products into our internet store. Click on the `Items overview` in the administration in the left sidebar.
2. On the `Items overview` page, in the top right corner, there is a white circle. Click on it and choose `Add item`.
3. Now in the top part of the white block, you should see a warning about `Blocked data provider` and a generated url. Copy the generated url, and click on the `allowed data providers` link.
4. Now, on the `Edit domain` page, click on the `Data providers` tab in the top menu, paste the copied url into the last available input and click save.
5. Go back to the `Add new item page`

## Creating Products
1. On the product form page, set the unique identifier to `1`, `Product 1` as a name, price will be 1, tax rate for example 21 and click on the `Create item` button.
2. Now, you should be on the `Item detail` page and in the bottom of the white block, there should be `Item data source` url. Copy this url somewhere,
because you will use in the following steps.

## Installation
1. In the [administration](https://admin.apicart.dev/), in the top right corner, there is a circle with your profile photo. Click on it and you will see a dropdown menu. In this menu, choose **installation**.
2. On the installation page, there are 2 API access keys.
3. Replace the `<public api key` in the code below by your public API key
`<head></head>` (or immediately behind the script that loads the components from the CDN, see below). The result will looks like this (the three dots is the previous content):

```HTML
<head>
    ...
    <script>
        window.apicartConfig = window.apicartConfig || [];
        function apicartConfigure(config){apicartConfig.push(config)}
        apicartConfigure({
            token: "<public api key>",
        });
    </script>
    ...
</head>
```

### API Keys
Public and private keys differ in API access rights.
- **Public key**: this key is intended for a publicly accessible places like a web site.
- **Private key**: this key allows you to send some API queries that you can not send with a public key for security reasons. It can be used for example on the backend part of the application. Do not publish this key anywhere!!

## Getting Started With Components!
Apicart provides prepared components like [buttons](/components/web/v1/cart.html#cart-quantity-manipulator) for adding / removing products from cart, [cart dropdown](/components/web/v1/cart.html#cart-dropdown) or [cart overview](/components/web/v1/cart.html#cart-overview).
If you want to use everything as in example below, just use the word `all`.

1. First of all, we need to load all the components and tools we need for this example. Just add following line into your page.
```HTML
<script src="https://cdn.apicart.dev/v1/?components=all"></script>
```

2. Now, when we have everything we need, we can begin! Every e-commerce platform needs a `Buy Button` so lets add one by creating an element into which the button will be rendered.
```HTML
<body>
    ...
    <div class="buy-button" data-url="<Item data source url from administration>"></div>
</body>
```

3. In order to generate the buy buttons we need to add the initialization code.
The detailed configuration is described in a separated [section](/components/web/v1/cart.html#cart-quantity-manipulator).
```HTML
<script>
    apicartConfigure({
        ...
        init: function () {
            Utils.loops.forEach(document.querySelectorAll('.buy-button'), function (key, button) {
                apicart.cartQuantityManipulator.render({
                    el: button,
                    itemUrl: button.getAttribute('data-url'),
                    submitButton: 'Add To Cart'
                });
            });
        }
    });
</script>
```

4. After reloading the page you will see the `Add To Cart` button. To see the contents of the cart, we will need to add a cart dropdown.
```HTML
<body>
    <div class="cart-dropdown"></div>
    ...
</body>
```

5. As in the previous example, we need to add the cart dropdown initialization code into the `init` function.
The detailed configuration is described in a separated [section](/components/web/v1/cart.html#cart-dropdown).
```HTML
<script>
    apicartConfigure({
        ...
        init: function () {
            ...
            apicart.cartDropdown.render({
                el: '.cart-dropdown',
                leftPosition: true,
                infoBlock: '%name%',
                removalButton: '<button data-apicart-cart-remove-item="%dataUrl%">Remove</button>',
                toggleButton: 'Cart %itemsCount% items for $%itemsPrice%',
                footerBlocks: [
                    '<div style="text-align: center">Items count <strong>%itemsCount% pcs</strong></div>',
                    '<div style="text-align: center">Total price <strong>$%itemsPrice%</strong></div>'
                ],
                showQuantityManipulator: true
            });
        }
    });
</script>
```

6. DONE! If you reload the page now, the dropdown and the buy button will appear. If you click on the `Add To Cart` button
the product price in the cart dropdown will immediately change and you will see a new data in graphs in your [administration](https://admin.apicart.dev).

## Switching To The Production Environment

1. If you want activate the production environment, you need to register on the [https://admin.apicart.net](https://admin.apicart.net/en/security/registration)
or click on the `Live environment` button in the administration (it will create the production environment automatically)
2. Sign in to your profile on production environment and fill in the billing info
3. Replace the testing API keys for the production API keys in the configuration(`apicartConfigure`) on your page and its DONE!
