# Začínáme
Tento rychlý průvodce vás provede registrací a instalací až první práci s komponentami! Pojďme na to!

::: warning Poznámka
Registrace je pro účel ukázky ukázaná na **testovacím prostředí**. Zde **nejsou potřeba fakturační údaje**, jelikož **testování poskytujeme zdarma**. Pro přechod na produkční prostředí se podívejte na do sekce **[přechod na placenou verzi](#prechod-na-placenou-verzi)**.
:::

## Registrace
1. Pro využívání našich služeb se nejdříve musíte [zaregistrovat](https://admin.apicart.dev/cs/security/registration).
Po vyplnění formuláře vám bude odeslán potvrzovací e-mail.
2. V registračním e-mailu klikněte na tlačítko `Aktivovat můj účet`. Budete přesměrováni na stránku pro zadání hesla. Zadejte heslo, potrďte formulář a přihlašte se ke svému účtu. Tím máte registraci hotovou!

## Konfigurace
1. Před tím než začneme pracovat s komponentami, je potřeba do e-shopu vložit nějaké produkty. Klikněte na `Přehled produktů` v administraci v levém menu.
2. Na stránce `Přehled produktů` je v pravém horním rohu bílé kolečko. Klikněte na něj a zvolte `Přidat produkt`.
3. Nyní, v horní části formuláře by mělo být upozornění ohledně nepovoleného zdroje dat a vygenerovaná url. Vygenerovanou url si zkopírujte a klikněte na odkaz vedle ni `povolených zdrojů dat`.
4. Budete přesměrování na stránku `Správa domény`. Klikněte na záložku `Zdroje dat` v horním menu, zkopírovanou adresu vložte do posledního volného inputu na této záložce a klikněte na uložit.
5. Vraťte se zpět stránku `Přidat nový produkt`

## Vytvoření produktů
1. Na stránce s produktovým formulářem vložte `1` do pole unikátní identifikátor, `Product 1` jako jméno, cenu nastavte na 1, daň například 21 a klikněte na uložit.
2. Po uložení byste měli být na stránce vytvořené položky. Na konci bílého bloku je položka `Zdroj` a vygenerovaná url. Tuto url si někam uložte, budete ji potřebovat v následujících krocích.

## Instalace
1. V [administraci](https://admin.apicart.dev/cs) najdete v pravém horním rohu kolečko s vaší profilovou fotkou.
Po kliknutí se vám zobrazí menu. V tomto menu zvolte **instalace**.
2. Na stránce instalace najdete 2 klíče pro přístup do API
3. Nahraďte `<veřejný API klíč>` v kódu níže vaším veřejným API klíčem
`<head></head>` (nebo těsně za skript pro načtení komponent z CDN, viz níže). Výsledný kód bude pobdobný kódu uvedenému níže.

```HTML
<head>
    ...
    <script>
        window.apicartConfig = window.apicartConfig || [];
        function apicartConfigure(config){apicartConfig.push(config)}
        apicartConfigure({
            token: "<veřejný api klíč>",
        });
    </script>
    ...
</head>
```

### API klíče
Veřejný a privátní klíč se liší v právech pro přístup k API.
- **Veřejný klíč**: je určen pro vložení např. na webovou stránku a taková místa, kde je věřejně přístupný.
- **Privátní klíč**: umožňuje posílat některé dotazy na API, které s veřejným klíčem z důvodu bezpečnosti nelze. Je určen například pro backendové částí aplikace. Tento klíč nikde nezveřejňujte!!

## Začínáme s komponentami!
Apicart obsahuje předpřipravené komponenty jako [tlačítka](/cs/komponenty/web/v1/kosik.html#tlacitko-pro-pridani-produktu) pro přidání/odebrání produktů z košíku, [dropdown košíku](/cs/komponenty/web/v1/kosik.html#kosikovy-dropdown) nebo třeba [přehled košíku](/cs/komponenty/web/v1/kosik.html#prehled-kosiku).
Pokud chcete použít vše, stejně jako pro zjednodušení příkladu použijeme nyní, stačí použít slovo `all`.

1. Před tím než začneme něco vytvářet, je potřeba si do stránky vložit skript, který nám poskytne potřebné nástroje.
```HTML
<script src="https://cdn.apicart.dev/v1/?components=all"></script>
```

2. Skripty máme načtené. Můžeme začít! Každý e-shop má tlačítkou koupit. Tak si ho přidáme. Vytvoříme element, do kterého se vloží tlačítko koupit.
```HTML
<body>
    ...
    <div class="buy-button" data-url="<zkopírovaná url ze zdroje z administrace"></div>
</body>
```

3. Tlačítko je potřeba vygenerovat. Do konfiguračního skriptu tedy přidáme jeho inicializaci (tři tečky znamenají předchozí obsah).
Na detailní nastavení se můžete podívat [sem](/cs/komponenty/web/v1/kosik.html#tlacitko-pro-pridani-produktu).
```HTML
<script>
    apicartConfigure({
        ...
        init: function () {
            Utils.loops.forEach(document.querySelectorAll('.buy-button'), function (key, button) {
                apicart.cartQuantityManipulator.render({
                    el: button,
                    itemUrl: button.getAttribute('data-url'),
                    submitButton: 'Do košíku'
                });
            });
        }
    });
</script>
```

4. Po načtení stránky uvidíte tlačítko `Do košíku`. Abychom viděli obsah košíku, přidáme si dropdown.
```HTML
<body>
    <div class="cart-dropdown"></div>
    ...
</body>
```

5. Stejně jako v předešlém příkladu je potřeba dropdown inicializovat.
Do funkce `init` tedy přidáme inicializaci košíkového dropdownu.
Vysvětlivky k nastavení jsou sepsány v samostatné [sekci](/cs/komponenty/web/v1/kosik.html#prehled-kosiku).
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
                removalButton: '<button data-apicart-cart-remove-item="%dataUrl%">Odebrat</button>',
                toggleButton: 'Košík %itemsCount% ks za %itemsPrice% Kč',
                footerBlocks: [
                    '<div style="text-align: center">Počet kusů <strong>%itemsCount% Ks</strong></div>',
                    '<div style="text-align: center">Celková cena <strong>%itemsPrice%</strong></div>'
                ],
                showQuantityManipulator: true
            });
        }
    });
</script>
```

6. HOTOVO! Pokud teď přenačtete stránku, zobrazí se dropdown a tlačítko koupit. Při kliknutí na tlačítko `Do košíku`
se okamžitě změní cena produktu v košíku a uvidíte i záznam ve vašem [adminu](https://admin.apicart.net).

## Přechod na placenou verzi

1. Pokud chcete aktivovat produkční prostředí, musíte se zaregistrovat na [https://admin.apicart.net](https://admin.apicart.net) nebo
můžete v administraci v levém panelu kliknout na tlačítko `Produční prostředí` (produkční prostředí se pak vytvoří automaticky)
2. Přihlašte se a zadejte fakturační údaje
3. Vyměňte testovací API klíče za produkční a máte hotovo!
