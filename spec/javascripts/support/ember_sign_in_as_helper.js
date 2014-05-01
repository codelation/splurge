function signInAs(userId) {
  var store = dataStore(),
      user = store.find('user', userId),
      controller = controllerFor('currentUser');

  controller.set('content', user);
}
