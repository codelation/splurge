function controllerFor(controller) {
  return App.__container__.lookup('controller:' + controller);
}
