Package.describe({
  name: 'devian:mdns',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'A wrapper around the mdns node module with callbacks running in fibers.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'mdns': "2.5.1"
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('mdns.js', 'server');
  api.export('Mdns')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('devian:mdns');
  api.addFiles('mdns-tests.js');
});
