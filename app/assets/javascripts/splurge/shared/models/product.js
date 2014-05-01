(function() {
  "use strict";

  App.Product = DS.Model.extend({
    // ---------------------------------------------------------
    // Relationships
    // ---------------------------------------------------------

    master: DS.belongsTo('variant'),
    variants: DS.hasMany('variant'),

    // ---------------------------------------------------------
    // Attributes
    // ---------------------------------------------------------

    availableOn:     DS.attr('date'),
    description:     DS.attr('string'),
    displayPrice:    DS.attr('string'),
    metaDescription: DS.attr('string'),
    metaKeywords:    DS.attr('string'),
    name:            DS.attr('string'),
    permalink:       DS.attr('string'),
    price:           DS.attr('number'),

    // ---------------------------------------------------------
    // Computed Properties
    // ---------------------------------------------------------

    masterImage: function() {
      var images = this.get('master.images');

      if (Ember.isEmpty(images)) {
        return;
      }

      return images.sortBy('position').get('firstObject');
    }.property('master.images.each.position')
  });

})();
