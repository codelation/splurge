(function() {
  "use strict";

  App.Router.map(function() {
    // Spree Specific Routes
    this.route('index', { path: '/' });

    this.resource('products', function() {
      this.route('show', { path: '/:product_permalink' });
    });

    this.route('cart');
    this.route('search');

    // Additional Routes
    this.route('about');
    this.route('contact');
  });

})();
