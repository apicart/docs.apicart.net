# Store API

::: warning Note
Apicart Store API poslouchá na [https://store-api.apicart.net](https://store-api.apicart.net).

Celé GraphQL schéma pro Store API je dostupné [zde](https://docs.store-api.apicart.net).
:::

## Produktové soubory

Mutace manipulující s produkty v košíku (např. `addCartItems` nebo `removeCartItems`) získávají data z tzv. produktových souborů. Tyto soubory popisují daný produkt a definují např. jeho název nebo cenu.

Díky těmto souborům je zajištěna bezpečnost a validita dat zasílaných na API. Potencionální útočník si nemůže do košíku přidat produkt za jinou cenu než za tu, která je uvedena v produktovém souboru.

Produktové soubory se Vám vytváří automaticky přes modul "Produkty" v Apicart administraci a jejich URL najdete vždy na detailu produktu. Zároveň si tyto soubory můžete vytvořit sami pokud máte možnost je vystavit na některé veřejně dostupné URL adrese.

V současné době je podporovaný formát JSON. Obsah validního produktového souboru si můžete [prohlédnout zde](https://sandbox.apicart.net/data/product/0001.json) (tento soubor se reálně používá na https://sandbox.apicart.net/).

Aby bylo možné přidat produkt do košíku musí obsahovat čtyři povinné informace: 

 - `id` (unikátní identifikátor produktu např. `PR0001`)
 - `name` (název produktu např. `Dětská ručně pletená šála`)
 - `price` (cena produktu např. `899`)
 - `taxRate` (sazba daně např. `21`)


## Dostupné queries

### Testovací příklady

**Test zda API funguje**.
```graphql
query availabilityTest($input: AvailabilityTestQueryInput!) {
  availabilityTest(input: $input) {
    all
    database
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__"
  }
}
```

### Příklady s košíkem

**Získání informací o určitém košíku**.

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

nebo pro získání **VŠECH** dostupných informací:

```graphql
query findCart($input: FindCartQueryInput!){
  findCart(input: $input) {
    cart {
      all
    }
  } 
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cartHash": "__HASH_KOSIKU__"
  }
}
```


**Získání košíku určitého zákazníka** + sloučení dalších již existujících košíků daného uživatele. *(Můžete použít field "all".)*

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
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cartHash": "__HASH_KOSIKU__",
    "customerHash": "__HASH_ZAKAZNIKA__"
  }
}
```


### Příklady se zákazníkem

**Získání informací o určitém zákazníkovi.** *(Můžete použít field "all".)*

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
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "customerHash": "__HASH_ZAKAZNIKA__"
  }
}
```


### Příklady s objednávkou

**Získání informací o určité objednávce.** *(Můžete použít field "all".)*

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
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "orderHash": "__HASH_OBJEDNAVKY__"
  }
}
```

### Příklady s platební metodou

Získání dostupných **platebních metod** (zapnutých nebo všech) definovaných přes Apicart administraci. *(Můžete použít field "all".)*

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
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "onlyEnabled": true
  }
}
```


### Příklady s dopravní metodou

Získání dostupných **dopravních metod** (zapnutých nebo všech) definovaných přes Apicart administraci. *(Můžete použít field "all".)*

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
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "onlyEnabled": true
  }
}
```


## Dostupné mutations

### Příklady s košíkem

**Úplna synchronizace** košíku.

```graphql
mutation fullCartSynchronization($input: FullCartSynchronizationMutationInput!){
  fullCartSynchronization(input: $input) {
   result
  } 
}
```
*s parametry*
```json
{
  "input": { 
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cart": {
      "hash": "__HASH_KOSIKU__",
      "state": "active",
      "customerHash": "__HASH_ZAKAZNIKA__",
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
          "firstName": "Jan",
          "lastName": "Novák",
          "streetAndNumber": "Dlouhá ulice 334/20",
          "zip": 11001,
          "city": "Praha",
          "email": "jan.novak@gmail.com"
        },
        "shippingAddress": {
          "firstName": "Jan",
          "lastName": "Novák",
          "streetAndNumber": "Dlouhá ulice 334/20",
          "zip": 11001,
          "city": "Praha",
          "email": "jan.novak@gmail.com"
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

#### Položky v košíku 

**Přidání nových** nebo **úprava exsitujících** položek v určitém košíku.

```graphql
mutation addCartItems($input: AddCartItemsMutationInput!){
  addCartItems(input: $input) {
    message
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cartHash": "__HASH_KOSIKU__",
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

**Odebrání existujících** položek z určitého košíku.

```graphql
mutation removeCartItems($input: RemoveCartItemsMutationInput!){
  removeCartItems(input: $input) {
    message
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cartHash": "__HASH_KOSIKU__",
    "items": [
      { // odebrání pouze jednoho kusu
        "dataUrl": "https://sandbox.apicart.net/data/product/0001.json", 
        "quantity": 1
      },
      {	// odebrání celé položky
        "dataUrl": "https://sandbox.apicart.net/data/product/0002.json"
      }
    ]
  }
}
```

#### Parametry košíku

**Přidání nových** nebo **úprava exsitujících** parametrů určitého košíku.

```graphql
mutation addCartParameters($input: AddCartParametersMutationInput!){
  addCartParameters(input: $input) {
    message
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cartHash": "__HASH_KOSIKU__",
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

**Odebrání existujících** parametrů z košíku.

```graphql
mutation removeCartParameters($input: RemoveCartParametersMutationInput!){
  removeCartParameters(input: $input) {
    message
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cartHash": "__CART_HASH_",
    "parameters": [
      "billingAddress", "paymentMethod", "externalId"
    ]
  }
}
```

**Dokončení** košíku a vrácení vytvořené objednávky. *(Můžete použít field "all".)*


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
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "cartHash": "__HASH_KOSIKU__"
  }
}
```


### Příklady se zákazníkem

**Úplná synchronizace** zákazníka.

```graphql
mutation fullCustomerSynchronization($input: FullCustomerSynchronizationMutationInput!){
  fullCustomerSynchronization(input: $input) {
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "customer": {
      "hash": "__HASH_ZAKAZNIKA__",
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

#### Parametry zákazníka

**Přidání nových** nebo **úprava existujících** parametrů určitého zákazníka.

```graphql
mutation addCustomerParameters($input: AddCustomerParametersMutationInput!){
  addCustomerParameters(input: $input) {
    message
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "customerHash": "__HASH_ZAKAZNIKA__",
    "parameters": {
      "externalId": "ABC123",
      "billingAddress": {
        "firstName": "Jan",
        "lastName": "Novák",
        "zip": 11001
      },
      "shippingAddress": {
        "firstName": "Jan",
        "lastName": "Novák",
        "zip": 11001,
        "city": "Praha"
      },
      "is_vip": false,
      "is_internal": true
    }
  }
}
```

**Odebrání existujících** parametrů od zákazníka.

```graphql
mutation removeCustomerParameters($input: RemoveCustomerParametersMutationInput!){
  removeCustomerParameters(input: $input) {
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_TOKEN_ZDE__",
    "customerHash": "__HASH_ZAKAZNIKA__",
    "parameters": [
      "is_vip", "shippingAddress", "externalId"
    ]
  }
}
```


### Příklady s objednávkou

Změna **stavu existující objednávky**. *(Povoleno pouze se Store API privátním tokenem.)*

```graphql
mutation changeOrderState($input: ChangeOrderStateMutationInput!){
  changeOrderState(input: $input) {
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_PRIVATNI_TOKEN_ZDE__",
    "orderHash": "__HASH_OBJEDNAVKY__",
    "orderStateCode": "paid"
  }
}
```

#### Parameters

**Přidání nových** nebo **úprava existujících** parametrů určité objednávky. *(Povoleno pouze se Store API privátním tokenem.)*

```graphql
mutation addOrderParameters($input: AddOrderParametersMutationInput!){
  addOrderParameters(input: $input) {
    message
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_PRIVATNI_TOKEN_ZDE__",
    "orderHash": "__HASH_OBJEDNAVKY__",
    "parameters": {
      "externalId": 4545,
      "billingAddress": {
        "firstName": "Jan",
        "lastName": "Novák",
        "zip": 11001
      },
      "shippingAddress": {
        "firstName": "Jan",
        "lastName": "Novák",
        "zip": 11001,
        "city": "Praha"
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

**Odebrání existujícíh** parametrů určité objednávky. *(Povoleno pouze se Store API privátním tokenem.)*

```graphql
mutation removeOrderParameters($input: RemoveOrderParametersMutationInput!){
  removeOrderParameters(input: $input) {
    message
    result
  }
}
```
*s parametry*
```json
{
  "input": {
    "token": "__VAS_STORE_PRIVATNI_TOKEN_ZDE__",
    "orderHash": "__HASH_OBJEDNAVKY__",
    "parameters": [
      "billingAddress", "paymentMethod", "externalId"
    ]
  }
}
```
