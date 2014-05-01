//= require splurge/frontend
//= require splurge/shared/all
//= require_tree ../support
//= require_self

// Set up app for testing
App.setupForTesting();
App.injectTestHelpers();
App.ApplicationAdapter = DS.FixtureAdapter.extend({
  simulateRemoteResponse: false
});

// Include additional Ember test helpers
emq.globalize();
setResolver(Ember.DefaultResolver.create({ namespace: App }));
