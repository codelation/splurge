(function() {
  "use strict";

  App.ProductsShowRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.find('product', params.product_permalink);
    },
    serialize: function(model) {
      return { product_permalink: model.get('permalink') };
    }
  });

})();
