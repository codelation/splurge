(function() {
  "use strict";

  App.Variant = DS.Model.extend({
    // ---------------------------------------------------------
    // Relationships
    // ---------------------------------------------------------

    images:  DS.hasMany('image',  { embed: true }),
    // TODO: Figure out what's going on with product options/variants
    // options: DS.hasMany('option', { embed: true }),
    product: DS.belongsTo('product'),

    // ---------------------------------------------------------
    // Attributes
    // ---------------------------------------------------------

    description:  DS.attr('string'),
    displayPrice: DS.attr('string'),
    inStock:      DS.attr('boolean'),
    isMaster:     DS.attr('boolean'),
    // TODO: Figure out what's going on with product options/variants
    // optionsText:  DS.attr('string'),
    name:         DS.attr('string'),
    permalink:    DS.attr('string'),
    price:        DS.attr('number'),
    sku:          DS.attr('string')

    // ---------------------------------------------------------
    // Computed Properties
    // ---------------------------------------------------------


  });

})();
