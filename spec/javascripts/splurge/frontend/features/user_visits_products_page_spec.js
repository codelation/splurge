(function() {
  "use strict";

  module('User visits products page.');

  test('A list of 5 products is shown', function() {
    visit('/products');

    andThen(function() {
      equal(find('.products li').length, 5);
    });
  });

  test('Clicking a featured product takes you to the product page', function() {
    visit('/');
    click('.featured-products li:contains("A Lovely Poster") a');

    andThen(function() {
      equal(currentURL(), '/products/a-lovely-poster');
      equal(find('main h1').text(), 'A Lovely Poster');
    });
  });

})();
