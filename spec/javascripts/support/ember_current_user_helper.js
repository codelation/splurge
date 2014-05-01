function currentUser() {
  var controller = controllerFor('currentUser');
  return controller.get('content');
}
