# Customer
- **CDN alias**: `customer`
- **Object**: `apicart.customer`

This component wraps all the functionality related to the customer.

## How to sign customer in/out
::: warning TODO
This section is not yet documented
:::

## Manager
- **Object**: `apicart.customer.manager`

The manager takes care of every interaction related to the customer such as creating, storing, deleting, etc.

**createNewCustomer(*bool* $forceSave): *customer.manager***
```JS
createNewCustomer(); // Creates new customer
createNewCustomer(true); // Creates new customer, overrides existing customer
```

**finish(): *void***
```JS
finish(); // Synchronizes customer via API. If customer is not signed in, creates a new one
```

**getCustomer(): *object***
```JS
getCustomer(); // Returns customer object
```

**removeCustomer(): *customer.manager***
```JS
removeCustomer(); // Removes customer
```

**save(*object* $customer, *string* $synchronizationQuery, *string* $synchronizationQueryData, *function* $callback): *customer.manager***
```JS
TODO
```

**addParameter(*string* $keyPath, *mixed* $value): *customer.manager***
```JS
addParameter('name', 'Praha'); // Adds parameter. The parameter can be nested arbitrarily
```

**addParameter(*string* $keyPath): *customer.manager***
```JS
removeparameter('name'); // Removed parameter
```

**setCustomerHash(*string|null* $hash): *customer.manager***
```JS
setCustomerHash('12345'); // Changes customer hash
```

## API
- **Object**: `apicart.customer.api`

The API takes care of every interaction related to the customer API such as sending a request.

::: warning TODO
This section is not yet documented
:::

## Události
- **Object**: `apicart.customer.events`

### DOM
These events are triggered for example when clicking on an element or when some element content changes.

**Data attribute name => event => value**
- **data-apicart-customer-add-parameter => change => keyPath**: When the content or value of the element with this attribute changes, the specified parameter will be added into the customer object
- **data-apicart-customer-remove-parameter => click => keyPath**: When clicking on element with this attribute, the specified parameter will be removed from the customer object

```HTML
<input data-apicart-customer-add-parameter="name">
<button data-apicart-customer-remove-parameter="name">Remove parameter</button>
```

### Event Dispatcher
These events are triggered via [Event Dispatcher](https://github.com/apicart/js-utils#event-dispatcher-utilseventdispatcher).
Learn more in the [documentation](/event-dispatcher.html).

**Event name => passed, parameters**
- **HASH_CHANGED => hash**: Triggered when the customer hash changes (for example after login).
- **PARAMETER_ADDED => keyPath, value**: Triggered when some parameter is added into the cart.
- **PARAMETER_REMOVED => keyPath**: Triggered when some parameter is removed from the cart.
- **MERGED => cart**: Triggered when two carts are merged. For example after login.
- **SYNCHRONIZED => cart**: Triggered when the cart synchronization finishes.
- **UPDATED => cart**: Triggered on every cart change.
