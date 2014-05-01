(function() {
  "use strict";

  module('User visits home page.');

  test('The title should include the store name', function() {
    visit('/');
    andThen(function() {
      ok(find('title').text().indexOf('The Dummy Store') > -1);
    });
  });

  test('4 featured products are displayed', function() {
    visit('/');
    andThen(function() {
      equal(find('.featured-products li').length, 4);
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
