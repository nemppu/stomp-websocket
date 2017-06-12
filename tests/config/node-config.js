TEST = {
  destination: "/topic/chat.general",
  login: "guest",
  password: "guest",
  url: "ws://localhost:15674/ws",
  badUrl: "ws://localhost:61625",
  timeout: 2000,
  debug: function (str) {
    console.log(str);
  }
};

WebSocket = require('websocket').w3cwebsocket;

Stomp = require('../../lib/stomp').Stomp;

Stomp.setInterval = function(interval, f) {
  return setInterval(f, interval);
};

Stomp.clearInterval = function(id) {
  return clearInterval(id);
};
