# Cart
- **CDN alias**: `cart`
- **Object**: `apicart.cart`

This component wraps all the functionality related to the cart.

## Manager
- **Object**: `apicart.cart.manager`

The manager takes care of every interaction related to the cart such as creating, storing, deleting, etc.

**createNewCart(*bool* $forceSave): *object***
```js
createNewCart(); // Creates new cart, returns its object
createNewCart(true); // Creates new cart, overrides existing, returns its object
```

**finish(): *cart.manager***
```JS
finish(); // Synchronizes cart via API, returns new cart
```

**removeCart(): *cart.manager***
```JS
removeCart(); // Removes existing cart
```

**save(*object* $cart, *string|null* $synchronizationQuery, *array|object|null* $synchronizationQueryData, *function|null* $callback): *cart.manager***
```JS
TODO
```

**setSynchronizationStatus(*bool* $synchronized): *cart.manager***
```JS
setSynchronizationStatus(true); // True => synchronization was successfull
setSynchronizationStatus(false); // False => synchronization failed
```

**findItem(*number|string* $idOrUrl): *object***
```JS
findItem(1); // Finds an item its "id" parameter is equal to 1
findItem('https://path.to/some/item'); // Finds an item according to the given url
```

**getItemTotalPrice(*object|int|string* $item): *number***
```JS
getItemTotalPrice('https://path.to/some/item') // Returns total price of the selected item, price * quantity.
```

**getItemsCount(): *number***
```JS
getItemsCount(); // Returns cart items count, summary of item * its count
```

**getItemsPrice(): *number***
```JS
getItemsPrice(); // Returns actual cart price
```

**hasItems(): *bool***
```JS
hasItems(); // Returns true, if cart is not empty
```

**removeAllItems(): *cart.manager***
```JS
removeAllItems(); // Removes all items from cart
```

**addItem(*string* $url, *int|null* $quantity, *function|null* $callback): *cart.manager***
```JS
addItem('https://path.to/some/item', 2, function (itemData, quantity) {
    alert('Item ' +  itemData.dataUrl +' was successfully added in number of pieces ' + quantity +'!'); // Adds an item to the cart according to specified number of pieces and runs the callback
});
```

**removeItem(*string* $idOrUrl, *int|null* $quantity, *function|null* $callback): *cart.manager***
```JS
removeItem('https://path.to/some/item'); // Removes the item from the cart completely
removeItem('https://path.to/some/item', 2, function (itemData, quantity) {
    alert('Item ' +  itemData.dataUrl +' was successfully removed in number of pieces ' + quantity +'!'); // Removes an item from the cart according to specified number of pieces and runs the callback
});
```

**addParameter(*string* $keyPath, *mixed* $value): *cart.manager***
```JS
addParameter('address.town', 'Prague'); // Adds a parameter into the cart, the parameter can be nested arbitrarily
```

**removeParameter(*string* $keyPath)**
```JS
removeParameter('address.town'); // Removes parameter from the cart
```

## API
- **Object**: `apicart.cart.api`

The API takes care of every interaction related to the cart API such as sending a request.

::: warning TODO
This section is not yet documented
:::

## Events
- **Object**: `apicart.cart.events`

### DOM
These events are triggered for example when clicking on an element or when some element content changes.

**Data attribute name => event => value**
- **data-apicart-cart-add-item => click => item url adress**: When clicking on element with this attribute, the specified item will be added into the cart
- **data-apicart-cart-remove-item => click => item url adress**: When clicking on element with this attribute, the specified item will be removed from the cart
- **data-apicart-cart-add-parameter => change => keyPath**: When the content or value of the element with this attribute changes, the specified parameter will be added into the cart
- **data-apicart-cart-remove-parameter => click => keyPath**: When clicking on element with this attribute, the specified parameter will be removed from the cart

```HTML
<button data-apicart-cart-add-item="https://path.to/some/item">Buy</button>
<button data-apicart-cart-remove-item="https://path.to/some/item">Remove from cart</button>
<input data-apicart-cart-add-parameter="address.town">
<button data-apicart-cart-remove-parameter="address.town">Remove parameter</button>
```

### Event Dispatcher
These events are triggered via [Event Dispatcher](https://github.com/apicart/js-utils#event-dispatcher-utilseventdispatcher).
Learn more in the [documentation](/event-dispatcher.html).

**Event name => passed, parameters**
- **FINISHED => isRequestOk, orderHash**: Triggered when the cart is finished.
- **ITEM_ADDED => itemData, quantity**: Triggered when an item is added into the cart.
- **ITEM_REMOVED => itemData, quantity**: Triggered when an item is removed from the cart.
- **PARAMETER_ADDED => keyPath, value**: Triggered when some parameter is added into the cart.
- **PARAMETER_REMOVED => keyPath**: Triggered when some parameter is removed from the cart.
- **MERGED => cart**: Triggered when two carts are merged. For example after login.
- **SYNCHRONIZED => cart**: Triggered when the cart synchronization finishes.
- **UPDATED => cart**: Triggered on every cart change.

## Prepared Components

### Cart Dropdown
- **CDN alias**: `cart-dropdown`
- **Object**: `apicart.cartDropdown`

**Parameters overview**
```JS
cartDropdown.render({
    // Target element, into which the cart dropdown will be rendered.
    el: <object Element|element id>,

    // If true, the cart will be placed to the left, otherwise to the right, default value is false
    leftPosition: <bool>,

    // The value of this parameter will be displayed in the dropdown button, if not provided, only the number of items is visible by default
    // It is possible to insert html or a function that will return html
    // During the rendering process, it is possible to specify %itemsCount% and %itemsPrice% in any part of the html or string (in case of function, the parameters are passed in the same order)
    // These keys will be replaced by the current cart values
    toggleButton: <string|function|null>,

    // Blocks in the dropdown footer
    // You can insert html, each field entry is converted into a separate cell
    // Like the toggle button, you can use the %itemsCount% and %itemsPrice% keys
    footerBlocks: <array|function[]|null>,

    // Item information
    // The item's parameters are available during rendering
    // You can insert keys that the item json contains. For example, %itemDescription%
    // This key will be replaced by the value of the parameter of the same name from the item product json. See configuration example below
    infoBlock: <string|null>,

    // Cart items array, default value => the items will be provided automatically
    items: <cart items array|null>,

    // Button for removing an item from the cart, default value is a simple cross
    // As with the infoBlock parameter, it is possible to use with the item's parameter names
    removalButton: <string|null>,

    // If true and the item has imageUrl parameter, the image of the item will be viewed in the drodown
    showItemsImage: <bool>,

    // If false, the cart quantity manipulator will not be visible, the default value => true
    showQuantityManipulator: <bool>
});
```

**Configuration example**
```HTML
<div id="cart-dropdown"></div>
```

```JS
cartDropdown.render({
    el: '#cart-dropdown',
    leftPosition: true,
    showItemsImage: true,
    removalButton: '<i class="fa fa-times-circle" data-apicart-cart-remove-item="%dataUrl%"></i>',
    toggleButton: '<strong>%itemsCount%</strong>',
    infoBlock: '<strong>%name%</strong>',
    footerBlocks: [
        '<div>Items count: %itemsCount%<br>Items price: $ %itemsPrice%</div>',
        '<div><a href="#">Finish order</a></div>'
    ]
});
```

### Cart Quantity Manipulator
- **CDN alias**: `cart-quantity-manipulator`
- **Object**: `apicart.cartQuantityManipulator`

**Parameters Overview**
```JS
cartQuantityManipulator.render({
    // Target element, into which the button will be rendered.
    el: <objekt Element|id elementu>,

    // Item url address
    itemUrl: <string>,

    // Text or html that will be inside the button
    // If is set to null, every time you click on + or -, the number of products in the cart changes immediately
    submitButton: <string|null>
});
```

**Configuration example (example for multiple buttons)**
```HTML
<div class="quantity-manipulator" dat-item-url="https://path.to/some/item"></div>
```

```JS
var quantityManipulators = document.querySelectorAll('.quantity-manipulator');
Utils.loops.forEach(quantityManipulators, function (key, quantityManipulator) {
    apicart.cartQuantityManipulator.render({
        el: quantityManipulator,
        itemUrl: quantityManipulator.getAttribute('data-item-url'),
        submitButton: 'Buy'
    });
});
```

### Cart Overview
- **CDN alias**: `cart-overview`
- **Object**: `apicart.cartOverview`

**Parameters Overview**
```JS
cartOverview.render({
    // Target element, into which the cart overview will be rendered.
    el: <objekt Element|id elementu>,

    // Blocks in the dropdown footer
    // You can insert html, each field entry is converted into a separate cell
    // Like the toggle button, you can use the %itemsCount% and %itemsPrice% keys
    footerBlocks: <array|function[]|null>,

    // Item information
    // The item's parameters are available during rendering
    // You can insert keys that the item json contains. For example, %itemDescription%
    // This key will be replaced by the value of the parameter of the same name from the item product json. See configuration example below
    infoBlocks: <array|null>,

    // Cart items array, default value => the items will be provided automatically
    items: <cart items array|null>,

    // Button for removing an item from the cart, default value is a simple cross
    // As with the infoBlock parameter, it is possible to use with the item's parameter names
    removalButton: <string|null>,

    // If true and the item has imageUrl parameter, the image of the item will be viewed in the drodown
    showItemsImage: <bool>,

    // If false, the cart quantity manipulator will not be visible, the default value => true
    showQuantityManipulator: <bool>
});
```

**Configuration example**
```HTML
<div id="cart-overview"></div>
```

```JS
cartOverview.render({
    el: '#cart-overview',
    showQuantityManipulator: true,
    showItemsImage: true,
    removalButton: '<i class="fa fa-times-circle" data-apicart-cart-remove-item="%dataUrl%"></i>',
    infoBlocks: [
        '<strong>%name%</strong>'
    ],
    footerBlocks: [
        '<p>Total price: %itemsPrice%</p>',
        '<div><a href="#">Finish order</a></div>'
    ]
});
```
