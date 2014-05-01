(function() {
  "use strict";

  App.FeaturedProductView = Ember.View.extend({
    tagName: 'li',
    classNameBindings: ['isFourthChild:omega'],

    isFourthChild: function() {
      return this.get('index') % 4 === 0;
    }.property('index')
  });

})();
