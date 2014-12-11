Tinytest.add('Check kizzy function', function (test) {
    test.equal(typeof(lscache.set), "function");
    test.equal(typeof(lscache.get), "function");
});
