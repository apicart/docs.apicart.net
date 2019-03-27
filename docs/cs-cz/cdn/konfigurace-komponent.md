# Konfigurace komponent
Apicart umožňuje nastavit, jaké komponenty chcete využívat. Všechny komponenty se stahují z našeho CDN.
Komponenty, které lze stáhnout, mají v popisu `CDN alias`. Tento alias se použije při tvorbě url pro CDN,
díky kterému CDN pozná, jaké komponenty vám má poskytnout.

Schéma adresy, které CDN požaduje je následující
```
https://cdn.apicart.net/?components=<component1,component2,...>
```

Řekněme, že budeme chtít dropdown s produkty a tlačítko pro vkládání produktů do košíku.
Dropdown má alias `cart-dropdown` a tlačítko `cart-quantity-manipulator`. Tyto dva aliasy spojíme čárkou a vložíme jako hodnotu
do parametru `components`. Výsledek bude vypadat takto
```
https://cdn.apicart.net/?components=cart-dropdown,cart-quantity-manipulator
```

Pokud byste chtěli všechny komponenty, je možné použít jako hodnotu slovo `all`.
```
https://cdn.apicart.net/?components=all
```

Závislosti mezi komponentami jsou řešeny automaticky. Pokud uvedete neexistující komponentu
vrátí se z cdn kód `400` obsahující popis chyby.