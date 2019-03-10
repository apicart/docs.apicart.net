# Event Dispatcher
The Event Dispatcher is a component from the [apicart/js-utils](https://github.com/apicart/js-utils#event-dispatcher-utilseventdispatcher) package. 
This components allow other components to communicate with each other through events.
You can attach handlers to these events, create them and trigger them manually.

In the example bellow, we will create a simple event. Then we will create an event listener that will listen to this event. In the end, we will trigger the event and remove the event listener manually (you can found the detailed description of all the parameters in the link above).

```JS
// Add the "listener1" listener, this listener will listen on the "send-number" event.
Utils.eventDispatcher.addListener('listener1', 'send-number', function (number) {
    console.log(number); // Will show the number 1 in the browser console
});

// Add the "listener2" listener, this listener will listen on the "send-number" event and will be triggered only once because of the "true" value in the last parameter
Utils.eventDispatcher.addListener('listener2', 'send-number', function (number) {
    console.log(number); // Will show the number 1 in the browser console and will be triggered only once
}, true);

// Trigger the "send-number" event with number 1 as the argument
Utils.eventDispatcher.dispatchEvent('send-number', 1);

// Remove the "listener1" manually from the "send-number" event. Now, there is no handler available so nothing will happen
Utils.eventDispatcher.removeListener('listener1', 'send-number');
```
