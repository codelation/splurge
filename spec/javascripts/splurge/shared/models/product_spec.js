(function() {
  "use strict";

  var image, master, product, store, variants;

  module('App.Product', {
    setup: function() {
      Ember.run(function() {
        store = dataStore();
        product = store.find('product', 'some-shirt');
      });
    },
    teardown: function() {
      store   = undefined;
      product = undefined;
    }
  });

  // ---------------------------------------------------------
  // Relationships
  // ---------------------------------------------------------

  test('#master', function() {
    Ember.run(function() {
      master = product.get('master');
    });
    equal(master.get('id'), 'shirt-master');
  });

  test('#variants', function() {
    Ember.run(function() {
      variants = product.get('variants');
    });
    equal(variants.get('length'), 2);
  });

  // ---------------------------------------------------------
  // Attributes
  // ---------------------------------------------------------

  test('#availableOn', function() {
    ok(product.get('availableOn').isSame(moment('January 1, 2014', 'MMMM D, YYYY')));
  });

  test('#description', function() {
    equal(product.get('description'), 'Some description about some shirt.');
  });

  test('#displayPrice', function() {
    equal(product.get('price'), 24.99);
  });

  test('#metaDescription', function() {
    equal(product.get('metaDescription'), 'This shirt is awesome!');
  });

  test('#metaKeywords', function() {
    equal(product.get('metaKeywords'), 'some, shirt, tshirt, codelation');
  });

  test('#name', function() {
    equal(product.get('name'), 'Some Shirt');
  });

  test('#permalink', function() {
    equal(product.get('permalink'), 'some-shirt');
  });

  test('#price', function() {
    equal(product.get('price'), 24.99);
  });


  // ---------------------------------------------------------
  // Computed Properties
  // ---------------------------------------------------------

  test('#masterImage', function() {
    Ember.run(function() {
      image = product.get('masterImage');
    });
    equal(image.get('id'), 'shirt-front');
  });

})();
