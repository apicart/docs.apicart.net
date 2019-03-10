# Košík
- **CDN alias**: `cart`
- **Objekt**: `apicart.cart`

Tato komponenta zapouzdřuje veškerou funkcionalitu týkající se košíku.

## Manager
- **Objekt**: `apicart.cart.manager`

Manager se stará o veškerou interakci s objektem košíku jako je vytváření, ukládání, mazání atd.

**createNewCart(*bool* $forceSave): *object***
```js
createNewCart(); // Vytvoří košík a vrátí jeho objekt
createNewCart(true); // Vytvoří košík, přepíše existující a vrátí jeho objekt
```

**finish(): *cart.manager***
```JS
finish(); // Sesynchronizuje košík a API a vytvoří nový košík
```

**removeCart(): *cart.manager***
```JS
removeCart(); // Odebere existující košík
```

**save(*object* $cart, *string|null* $synchronizationQuery, *array|object|null* $synchronizationQueryData, *function|null* $callback): *cart.manager***
```JS
TODO
```

**setSynchronizationStatus(*bool* $synchronized): *cart.manager***
```JS
setSynchronizationStatus(true); // True => synchronizace se zdařila
setSynchronizationStatus(false); // False => synchronizace se nezdařila
```

**findItem(*number|string* $idOrUrl): *object***
```JS
findItem(1); // Najde položku, která má "id" parameter roven 1
findItem('https://path.to/some/item'); // Najde položku dle url, ze které byla stažena
```

**getItemTotalPrice(*object|int|string* $item): *number***
```JS
getItemTotalPrice('https://path.to/some/item') // Získá kompletní cenu položky v košíku, cena * počet kusů.
```

**getItemsCount(): *number***
```JS
getItemsCount(); // Vrátí počet položek v košíku, počet položek * počet kusů dané položky
```

**getItemsPrice(): *number***
```JS
getItemsPrice(); // Vrátí celkovou cenu položek v košíku
```

**hasItems(): *bool***
```JS
hasItems(); // Vrací true, pokud má košík nějaké položky
```

**removeAllItems(): *cart.manager***
```JS
removeAllItems(); // Odebere všechny položky z košíku
```

**addItem(*string* $url, *int|null* $quantity, *function|null* $callback): *cart.manager***
```JS
addItem('https://path.to/some/item', 2, function (itemData, quantity) {
    alert('Položka ' +  itemData.dataUrl +' přidána v počtu kusů ' + quantity +'!'); // Přidá položku do košíku o zadaném počtu kusů a provede callback
});
```

**removeItem(*string* $idOrUrl, *int|null* $quantity, *function|null* $callback): *cart.manager***
```JS
removeItem('https://path.to/some/item'); // Odebere celou položku z košíku
removeItem('https://path.to/some/item', 2, function (itemData, quantity) {
    alert('Položka ' +  itemData.dataUrl +' byla odebrána v počtu kusů ' + quantity +'!'); // Odebere položku o zadaném počtu kusů a provede callback
});
```

**addParameter(*string* $keyPath, *mixed* $value): *cart.manager***
```JS
addParameter('adresa.mesto', 'Praha'); // Přidá parametr do košíku, může být libovolně zanořený
```

**removeParameter(*string* $keyPath)**
```JS
removeParameter('adresa.mesto'); // Odebere parametr z košíku
```

## API
- **Objekt**: `apicart.cart.api`

Tato komponenta zapouzdřuje veškerou komunikaci s API týkající se košíku.

::: warning TODO
Sekce ještě není zdokumentována
:::

## Události
- **Objekt**: `apicart.cart.events`

### DOM
Tyto události se spouští např. při kliknutí či změně elementu.

**Název data atributu => události => hodnota**
- **data-apicart-cart-add-item => click => url adresa položky**: Při kliknutí na element obsahující tento atribut se přidá položka do košíku
- **data-apicart-cart-remove-item => click => url adresa položky**: Při kliknutí na element obsahující tento atribut se odebere položka z košíku
- **data-apicart-cart-add-parameter => change => keyPath**: Při změně obsahu/hodnoty elementu se přidá parameter ke košíku
- **data-apicart-cart-remove-parameter => click => keyPath**: Při kliknutí na element obsahující tento atribut se odebere parametr z košíku

```HTML
<button data-apicart-cart-add-item="https://path.to/some/item">Přidat do košíku</button>
<button data-apicart-cart-remove-item="https://path.to/some/item">Odebrat do košíku</button>
<input data-apicart-cart-add-parameter="adresa.mesto">
<button data-apicart-cart-remove-parameter="adresa.mesto">Odebrat parameter</button>
```

### Event Dispatcher
Tyto události jsou spouštěny pomocí [Event Dispatcheru](https://github.com/apicart/js-utils#event-dispatcher-utilseventdispatcher) a je na ně možné navazovat funkcionalitu.
Více se dozvíte v [dokumentaci](/cs/event-dispatcher.html).

**Název události => předané, parametry**
- **FINISHED => isRequestOk, orderHash**: Spouští se v momentě ukončení košíku.
- **ITEM_ADDED => itemData, quantity**: Spouští se v momentě přidání položky do košíku.
- **ITEM_REMOVED => itemData, quantity**: Spouští se v momentě odebrání z košíku.
- **PARAMETER_ADDED => keyPath, value**: Spouští se v momentě přidání parametru do košíku.
- **PARAMETER_REMOVED => keyPath**: Spouští se v momentě odebrání parametru z košíku.
- **MERGED => cart**: Spouští se v momentě spojení košíku přihlášeného uživatele s aktuálním lokálním košíkem.
- **SYNCHRONIZED => cart**: Spouští se v momentě dokončení synchronizace košíku.
- **UPDATED => cart**: Spouští se v momentě jakékoliv změny košíku.

## Předpřipravené komponenty

### Košíkový dropdown
- **CDN alias**: `cart-dropdown`
- **Objekt**: `apicart.cartDropdown`

**Přehled všech parametrů**
```JS
cartDropdown.render({
    // Cílový element, do kterého se má dropdown vykreslit
    el: <objekt Element|id elementu>,

    // Dropdown bude umístěný vlevo/ vpravo, defaultní hodnota => false, tedy vpravo
    leftPosition: <bool>,

    // Hodnota tohoto parametru se zobrazí v rozbalovacím tlačítku dropdownu, defaultně je uveden pouze počet položek
    // Je možné vložit html nebo funkci, která bude vracet html
    // Během vykreslování je možné uvést na libovolné místo klíče %itemsCount% a %itemsPrice% (u funkce jsou předány jako parametry ve stejém pořadí)
    // Tyto klíče budou nahrazeny aktuálními hodnotami košíku
    toggleButton: <string|function|null>,

    // Bloky v patičce dropdownu
    // Je možné vložit html, každá položka pole je převedena do samostatné buňky
    // Stejně jako u toggle button je možné pracovat s klíči %itemsCount% a %itemsPrice%
    footerBlocks: <array|function[]|null>,

    // Informace o položce
    // Během vykreslování jsou k dispozici parametry položky
    // Do řetězce je tedy možné vložit klíče, které položka obsahuje. Tedy například %itemDescription%
    // Tento klíč bude nahrazen hodnotou stejnojmenného parametru u položky v produktovém jsonu. Viz příklad konfigurace níže
    infoBlock: <string|null>,

    // Pole položek košíku, defaultní hodnota => automaticky se získají položky z košíku
    items: <pole položek|null>,

    // Tlačítko pro odebrání položky z košíku, defaultní hodnota je křížek
    // Stejně jako u parametru infoBlock je možné pracovat s názvy parametrů položky
    removalButton: <string|null>,

    // Pokud je nastaveno na true a položka má parametr imageUrl, zobrazí se obrázek u položky v dropdownu
    showItemsImage: <bool>,

    // Pokud je nastaveno na false, vypne zobrazení manipulátoru počtu kusů položky v košíku, defaultní hodnota => true
    showQuantityManipulator: <bool>
});
```

**Ukázka konfigurace**
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
        '<div>Počet položek: %itemsCount%<br>Celková cena: %itemsPrice% Kč</div>',
        '<div><a href="#">Dokončit objednávku</a></div>'
    ]
});
```

### Tlačítko pro přidání produktů
- **CDN alias**: `cart-quantity-manipulator`
- **Objekt**: `apicart.cartQuantityManipulator`

**Přehled všech parametrů**
```JS
cartQuantityManipulator.render({
    // Cílový element, do kterého se má tlačítko vykreslit
    el: <objekt Element|id elementu>,

    // Url adresa položky, se kterou bude toto tlačítko pracovat
    itemUrl: <string>,

    // Text nebo html, které bude uvnitř tlačítka
    // Pokud je submit button null, tak při každém kliknutí na + nebo - se okamžitě změní počet produktů v košíku
    submitButton: <string|null>
});
```

**Ukázka konfigurace (pro více tlačítek najednou)**
```HTML
<div class="quantity-manipulator" dat-item-url="https://path.to/some/item"></div>
```

```JS
var quantityManipulators = document.querySelectorAll('.quantity-manipulator');
Utils.loops.forEach(quantityManipulators, function (key, quantityManipulator) {
    apicart.cartQuantityManipulator.render({
        el: quantityManipulator,
        itemUrl: quantityManipulator.getAttribute('data-item-url'),
        submitButton: 'Přidat do košíku'
    });
});
```

### Přehled košíku
- **CDN alias**: `cart-overview`
- **Objekt**: `apicart.cartOverview`

**Přehled všech parametrů**
```JS
cartOverview.render({
    // Cílový element, do kterého se má tlačítko vykreslit
    el: <objekt Element|id elementu>,

    // Bloky v patičce přehledu
    // Je možné vložit html, každá položka pole je převedena do samostatné buňky
    // Stejně jako u toggle button je možné pracovat s klíči %itemsCount% a %itemsPrice%
    footerBlocks: <array|function[]|null>,

    // Informace o položce
    // Během vykreslování jsou k dispozici parametry položky
    // Do řetězce je tedy možné vložit klíče, které položka obsahuje. Tedy například %itemDescription%
    // Tento klíč bude nahrazen hodnotou stejnojmenného parametru u položky v produktovém jsonu. Viz příklad konfigurace níže
    infoBlocks: <array|null>,

    // Pole položek košíku, defaultní hodnota => automaticky se získají položky z košíku
    items: <pole položek|null>,

    // Tlačítko pro odebrání položky z košíku, defaultní hodnota je křížek
    // Stejně jako u parametru infoBlock je možné pracovat s názvy parametrů položky
    removalButton: <string|null>,

    // Pokud je nastaveno na true a položka má parametr imageUrl, zobrazí se obrázek u položky v dropdownu
    showItemsImage: <bool>,

    // Pokud je nastaveno na false, vypne zobrazení manipulátoru počtu kusů položky v košíku, defaultní hodnota => true
    showQuantityManipulator: <bool>
});
```

**Ukázka konfigurace**
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
        '<p>Celková cena: %itemsPrice%</p>',
        '<div><a href="#">Dokončit objednávku</a></div>'
    ]
});
```