QUnit.module("Web Sockets");

QUnit.test("check Web Sockets support", function (assert) {
  assert.ok(WebSocket, "this browser support Web Sockets");
});
