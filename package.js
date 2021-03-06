Package.describe({
  summary: "lscache is a simple HTML5 localStorage with TTL support.",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-lscache.git",
  name: "rexzh0u:lscache"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('lib/lscache/lscache.js', 'client');
  api.addFiles('lib/main.js', 'client');
  api.export('lscache');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rexzh0u:lscache');
  api.addFiles('rexzh0u:lscache-tests.js', 'client');
});
