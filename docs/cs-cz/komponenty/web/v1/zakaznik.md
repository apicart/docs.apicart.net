# Zákazník
- **CDN alias**: `customer`
- **Objekt**: `apicart.customer`

Tato komponenta zapouzdřuje veškerou funkcionalitu týkající se zákazníka.

## Přihlašování/odhlašování zákazníka

::: warning TODO
Sekce ještě není zdokumentována
:::

## Manager
- **Objekt**: `apicart.customer.manager`

Manager se stará o veškerou interakci s objektem zákazníka jako je vytváření, ukládání, mazání atd.

**createNewCustomer(*bool* $forceSave): *customer.manager***
```JS
createNewCustomer(); // Vytvoří a uloží nový objekt zákazníka
createNewCustomer(true); // Vytvoří a uloží nový objekt zákazníka, přepíše existujcí
```

**finish(): *void***
```JS
finish(); // Sesynchronizuje zákazníka s API. Pokud zákazník není přihlášený, vytvoří nového
```

**getCustomer(): *object***
```JS
getCustomer(); // Vrací objekt zákazníka
```

**removeCustomer(): *customer.manager***
```JS
removeCustomer(); // Smaže zákazníka
```

**save(*object* $customer, *string* $synchronizationQuery, *string* $synchronizationQueryData, *function* $callback): *customer.manager***
```JS
TODO
```

**addParameter(*string* $keyPath, *mixed* $value): *customer.manager***
```JS
addParameter('adresa.mesto', 'Praha'); // Přídá parametr. Může být libovolně zanořený
```

**addParameter(*string* $keyPath): *customer.manager***
```JS
removeparameter('adresa.mesto'); // Odebere parametr. Může být libovolně zanořený
```

**setCustomerHash(*string|null* $hash): *customer.manager***
```JS
setCustomerHash('12345'); // Změní hash zákazníka
```

## API
- **Objekt**: `apicart.customer.api`

Tato komponenta zapouzdřuje veškerou komunikaci s API týkající se zákazníka.

::: warning TODO
Sekce ještě není zdokumentována
:::

## Události
- **Objekt**: `apicart.customer.events`

### DOM
Tyto události se spouští např. při kliknutí či změně elementu.

**Název data atributu => události => hodnota**
- **data-apicart-customer-add-parameter => change => keyPath**: Při změně obsahu/hodnoty elementu se přidá parameter do objektu uživatele
- **data-apicart-customer-remove-parameter => click => keyPath**: Při kliknutí na element obsahující tento atribut se odebere parametr z objektu uživatele

```HTML
<input data-apicart-customer-add-parameter="jmeno">
<button data-apicart-customer-remove-parameter="jmeno">Odebrat parameter</button>
```

### Event Dispatcher
Tyto události jsou spouštěny pomocí [Event Dispatcheru](https://github.com/apicart/js-utils#event-dispatcher-utilseventdispatcher) a je na ně možné navazovat funkcionalitu.
Více se dozvíte v [dokumentaci](/cs-cz/event-dispatcher.html).

**Název události => předané, parametry**
- **HASH_CHANGED => hash**: Spuštěna při změně zákazníkova hashe (například po příhlášení).
- **PARAMETER_ADDED => keyPath, value**: Spouští se v momentě přidání parametru k objektu uživatele.
- **PARAMETER_REMOVED => keyPath**: Spouští se v momentě odebrání parametru z objektu uživatele.
- **MERGED => customer**: Spouští se v momentě spojení uživatele (např. po přihlášení) s aktuálním lokálním uživatelem.
- **SYNCHRONIZED => customer**: Spouští se v momentě dokončení synchronizace uživatele.
- **UPDATED => customer**: Spouští se v momentě jakékoliv změny uživatele.
