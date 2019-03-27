# Event Dispatcher
Event Dispatcher je komponenta z [apicart/js-utils](https://github.com/apicart/js-utils#event-dispatcher-utilseventdispatcher) balíčku. Tato komponenta umožňuje komunikaci mezi komponentami na základě událostí.
Vy na tyto události můžete "naslouchat" ale také je spouštět a vytvářet.

V následujícím příkladu si vytvoříme událost, zavěsíme na ni posluchače a spustíme ji (na detailní popis jednotlivých parametrů funkcí se podívejte v dokumentaci viz výše).

```JS
// Přidáme posluchače s označemín "posluchac1", který poslouchá na událost "posli-cislo".
Utils.eventDispatcher.addListener('posluchac1', 'posli-cislo', function (cislo) {
    console.log(cislo); // Zobrazí 1 v konzoli prohlížeče po spuštění události viz níže
});

// Přidáme posluchače s označemín "posluchac2", který poslouchá na událost "posli-cislo", ale díky parametru "true" pouze jednou
Utils.eventDispatcher.addListener('posluchac2', 'posli-cislo', function (cislo) {
    console.log(cislo); // Zobrazí 1 v konzoli prohlížeče po spuštění události viz níže, ale pouze jednou
}, true);

// Spustíme událost "posli-cislo" s hodnotou 1.
Utils.eventDispatcher.dispatchEvent('posli-cislo', 1);

// Manuálně odebereme "posluchace1" z události "posli-cislo". Nyní už se při spuštění události nic neprovede.
Utils.eventDispatcher.removeListener('posluchac1', 'posli-cislo');
```
