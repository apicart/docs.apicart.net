# Store API

::: warning Note
Apicart Store API listen at [https://store-api.apicart.net](https://store-api.apicart.net).

Full GraphQL schema for Store API is available [here](https://docs.store-api.apicart.net).
:::


## Item files

Mutation handling items in cart (e.g. `addCartItems` or `removeCartItems`) getting data from item files. These files describe the item and define, for example, its name or price.

These files ensure the security and validity of the data sent to the API. A potential attacker cannot add a item to a cart at a price other than that listed in the item file.

Item files are created automatically through the "Item" module in Apicart administration and their URLs are always on the item detail. You can also create these files yourself if you have the option to post them to some publicly available URL.

Currently supported foramt is JSON. You can view content of [valid item file here](https://sandbox.apicart.net/data/product/0001.json) (this file is actually used on https://sandbox.apicart.net/).

In order to add a item to the cart it must contain four mandatory information: 

 - `id` (a unique product identifier e.g. `IT0001`)
 - `name` (item name e.g. `Children's handmade knitted scarf`)
 - `price` (item price e.g. `12`)
 - `taxRate` (tax rate e.g `22`)


## Available queries

### Test examples

**Test if API is working**.
```graphql
query availabilityTest($input: AvailabilityTestQueryInput!) {
  availabilityTest(input: $input) {
    all
    database
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__"
  }
}
```

### Cart examples

**Get informations about specific cart**.

```graphql
query findCart($input: FindCartQueryInput!){
  findCart(input: $input) {
    cart {
      items {
        quantity
        item{externalId, name, price, dataUrl} 
        parameters{key,value}
      }
      parameters{key,value}
    }
  } 
}
```

or get **ALL** available data about cart:

```graphql
query findCart($input: FindCartQueryInput!){
  findCart(input: $input) {
    cart {
      all
    }
  } 
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cartHash": "__CART_HASH__"
  }
}
```


**Get cart for customer** + merge old ones if already exists. *(You can use "all" field too.)*

```graphql
query getCustomerCart($input: GetCustomerCartQueryInput!){
  getCustomerCart(input: $input) {
    cart {
      hash
      state{code}
      customer{hash}
      items {
        quantity
        item{externalId, name, price}, 
        parameters{key,value}
      } 
      parameters{key,value}
    }
  } 
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cartHash": "__CART_HASH__",
    "customerHash": "__CUSTOMER_HASH__"
  }
}
```


### Customer examples

**Get informations about specific customer.** *(You can use "all" field too.)*

```graphql
query findCustomer($input: FindCustomerQueryInput!){
  findCustomer(input: $input) {
    customer {
      hash
      parameters{key,value}
    }
  } 
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "customerHash": "__CUSTOMER_HASH__"
  }
}
```


### Order examples

**Get informations about specific order.** *(You can use "all" field too.)*

```graphql
query findOrder($input: FindOrderQueryInput!){
  findOrder(input: $input) {
    order {
      hash
      parameters{key,value}
    }
  } 
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "orderHash": "__ORDER_HASH__"
  }
}
```

### Payment method examples

Find available **payment methods** (enabled or all) defined via Apicart administration. *(You can use "all" field too.)*

```graphql
query findPaymentMethods($input: FindPaymentMethodsQueryInput!){
  findPaymentMethods(input: $input) {
    paymentMethods {
      id
      name
      description
      image
      price
    }
  } 
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "onlyEnabled": true
  }
}
```


### Shipping method examples

Find available **shipping methods** (enabled or all) defined via Apicart administration. *(You can use "all" field too.)*

```graphql
query findShippingMethods($input: FindShippingMethodsQueryInput!){
  findShippingMethods(input: $input) {
    shippingMethods {
      id
      name
      description
      image
      price
    }
  } 
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "onlyEnabled": true
  }
}
```


## Available mutations

### Cart examples

**Full synchronization** of cart from client.

```graphql
mutation fullCartSynchronization($input: FullCartSynchronizationMutationInput!){
  fullCartSynchronization(input: $input) {
   result
  } 
}
```
*with variables*
```json
{
  "input": { 
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cart": {
      "hash": "__CART_HASH__",
      "state": "active",
      "customerHash": "__CUSTOMER_HASH__",
      "items": [
        {
          "dataUrl": "https://sandbox.apicart.net/data/product/0001.json",
          "quantity": 3,
            "parameters": {
              "is_gift": true
            }
        }, 
        {
          "dataUrl": "https://sandbox.apicart.net/data/product/0002.json",
          "quantity": 1,
          "parameters": {
            "discount": 5
          }
        }
      ],
      "parameters": {
        "externalId": 456,
        "billingAddress": {
          "firstName": "John",
          "lastName": "Doe",
          "streetAndNumber": "Long street 334/20",
          "zip": 11001,
          "city": "Prague",
          "email": "john.doe@gmail.com"
        },
        "shippingAddress": {
          "firstName": "John",
          "lastName": "Doe",
          "streetAndNumber": "Long street 334/20",
          "zip": 11001,
          "city": "Prague",
          "email": "john.doe@gmail.com"
        },
        "paymentMethod": {
          "id": 1
        },
        "shippingMethod": {
          "id": 1
        }
      }
    }
  }
}
```

#### Items 

**Add new** items or **update existing** ones at specific cart.

```graphql
mutation addCartItems($input: AddCartItemsMutationInput!){
  addCartItems(input: $input) {
    message
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cartHash": "__CART_HASH__",
    "items": [
      {
        "dataUrl": "https://sandbox.apicart.net/data/product/0002.json",
        "quantity": 3
      }, 
      {
        "dataUrl": "https://sandbox.apicart.net/data/product/0003.json",
        "quantity": 1,
        "parameters": {
          "is_gift": true
        }
      }
    ]
  }
}
```

**Remove existing** items from cart.

```graphql
mutation removeCartItems($input: RemoveCartItemsMutationInput!){
  removeCartItems(input: $input) {
    message
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cartHash": "__CART_HASH__",
    "items": [
      { // remove only one piece
        "dataUrl": "https://sandbox.apicart.net/data/product/0001.json", 
        "quantity": 1
      },
      {	// remove whole item
        "dataUrl": "https://sandbox.apicart.net/data/product/0002.json"
      }
    ]
  }
}
```

#### Parameters

**Add new** parameters or **update existing** ones of specific cart.

```graphql
mutation addCartParameters($input: AddCartParametersMutationInput!){
  addCartParameters(input: $input) {
    message
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cartHash": "__CART_HASH__",
    "parameters": {
      "externalId": 4545,
      "shippingAddress": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "paymentMethod": {
        "id": 1
      }
    }
  }
}
```

**Remove existing** parameters from cart.

```graphql
mutation removeCartParameters($input: RemoveCartParametersMutationInput!){
  removeCartParameters(input: $input) {
    message
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cartHash": "__CART_HASH_",
    "parameters": [
      "billingAddress", "paymentMethod", "externalId"
    ]
  }
}
```

**Finish** cart and return new order.  *(You can use "all" field too.)*


```graphql
mutation finishCart($input: FinishCartMutationInput!){
  finishCart(input: $input) {
    order {
      hash
      variableSymbol
      items {
        all
      }
    }
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "cartHash": "__CART_HASH__"
  }
}
```


### Customer examples

**Full synchronization** of customer from client.

```graphql
mutation fullCustomerSynchronization($input: FullCustomerSynchronizationMutationInput!){
  fullCustomerSynchronization(input: $input) {
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "customer": {
      "hash": "__CUSTOMER_HASH__",
      "state": "active",
      "parameters": {
        "externalId": 11,
        "is_internal": true,
        "is_vip": "no"
      }
    }
  }
}
```

#### Parameters

**Add new** parameters or **update existing** ones to specific customer.

```graphql
mutation addCustomerParameters($input: AddCustomerParametersMutationInput!){
  addCustomerParameters(input: $input) {
    message
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "customerHash": "__CUSTOMER_HASH__",
    "parameters": {
      "externalId": "ABC123",
      "billingAddress": {
        "firstName": "john",
        "lastName": "Doe",
        "zip": 11001
      },
      "shippingAddress": {
        "firstName": "John",
        "lastName": "Doe",
        "zip": 11001,
        "city": "Prague"
      },
      "is_vip": false,
      "is_internal": true
    }
  }
}
```

**Remove existing** parameters from customer.

```graphql
mutation removeCustomerParameters($input: RemoveCustomerParametersMutationInput!){
  removeCustomerParameters(input: $input) {
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_TOKEN_HERE__",
    "customerHash": "__CUSTOMER_HASH__",
    "parameters": [
      "is_vip", "shippingAddress", "externalId"
    ]
  }
}
```


### Order examples

Change **order state**. *(Allowed only with Store API private token.)*

```graphql
mutation changeOrderState($input: ChangeOrderStateMutationInput!){
  changeOrderState(input: $input) {
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_PRIVATE_TOKEN_HERE__",
    "orderHash": "__ORDER_HASH__",
    "orderStateCode": "paid"
  }
}
```

#### Parameters

**Add new** parameters or **update existing** ones for specific order. *(Allowed only with Store API private token.)*

```graphql
mutation addOrderParameters($input: AddOrderParametersMutationInput!){
  addOrderParameters(input: $input) {
    message
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_PRIVATE_TOKEN_HERE__",
    "orderHash": "__ORDER_HASH__",
    "parameters": {
      "externalId": 4545,
      "billingAddress": {
        "firstName": "John",
        "lastName": "Doe",
        "zip": 11001
      },
      "shippingAddress": {
        "firstName": "John",
        "lastName": "Doe",
        "zip": 11001,
        "city": "Prague"
      },
      "paymentMethod": {
        "id": 1
      },
      "shippingMethod": {
        "id": 1
      }
    }
  }
}
```

**Remove existing** parameters from specific order. *(Allowed only for Store API private token.)*

```graphql
mutation removeOrderParameters($input: RemoveOrderParametersMutationInput!){
  removeOrderParameters(input: $input) {
    message
    result
  }
}
```
*with variables*
```json
{
  "input": {
    "token": "__YOUR_STORE_PRIVATE_TOKEN_HERE__",
    "orderHash": "__ORDER_HASH",
    "parameters": [
      "billingAddress", "paymentMethod", "externalId"
    ]
  }
}
```
