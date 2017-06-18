# Upgrade (Work in Progress)

## Auto Reconnect

### Updating older code to support auto reconnect

If you were creating your stomp client using Stomp.client

```javascript
    var url = "ws://localhost:61614/stomp";
    var client = Stomp.client(url);
    
    // Add the following if you need automatic reconnect (delay is in milli seconds)
    client.reconnect_delay = 5000;
```

If you were using Stomp.over like:

```javascript
    <script src="http://cdn.sockjs.org/sockjs-0.3.min.js"></script>
    <script>
        // use SockJS implementation instead of the browser's native implementation
        var ws = new SockJS(url);
        var client = Stomp.over(ws);
        [...]
    </script>
```

Change it to:

```javascript
    <script src="http://cdn.sockjs.org/sockjs-0.3.min.js"></script>
    <script>
        // use SockJS implementation instead of the browser's native implementation
        var client = Stomp.over(function(){
                                   return new SockJS(url);
                                });
    
        // Add the following if you need automatic reconnect (delay is in milli seconds)
        client.reconnect_delay = 5000;
        [...]
    </script>
```

Notes:

* After each connect (i.e., initial connect as well each reconnection) the connectCallback
  will be called.
* After reconnecting, it will not automatically subscribe to queues that were subscribed.
  So, if all subscriptions are part of the connectCallback (which it would in most of the cases),
  you will not need to do any additional handling.


## NodeJS

## SockJS


