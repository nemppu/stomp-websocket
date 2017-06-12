QUnit.module("Stomp Connection");

QUnit.test("Should not connect to an invalid Stomp server", function (assert) {
  var done = assert.async();

  var client = Stomp.client(TEST.badUrl);
  client.connect("foo", "bar",
    function () {
      assert.ok(false, 'Should not connect to invalid Stomp Server');
      done();
    },
    function () {
      assert.ok(true, 'Error in connecting to invalid Stomp Server');
      done();
    });
  stop(TEST.timeout);
});

QUnit.test("Connect to a valid Stomp server", function (assert) {
  var done = assert.async();

  var client = Stomp.client(TEST.url);
  client.connect(TEST.login, TEST.password,
    function () {
      assert.ok(true, 'Connected to valid Stomp Server');
      done();
    });
});

QUnit.test("Disconnect", function (assert) {
  var done = assert.async();

  var client = Stomp.client(TEST.url);
  client.connect(TEST.login, TEST.password,
    function () {
      // once connected, we disconnect
      client.disconnect(function () {
        assert.ok(true, 'Disconnected from Stomp Server');
        done();
      });
    });
});