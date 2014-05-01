(function() {
  "use strict";

  App.Image = DS.Model.extend({
    // ---------------------------------------------------------
    // Relationships
    // ---------------------------------------------------------

    variant: DS.belongsTo('variant'),

    // ---------------------------------------------------------
    // Attributes
    // ---------------------------------------------------------

    alt:        DS.attr('string'),
    height:     DS.attr('number', { key: 'attachment_height' }),
    largeUrl:   DS.attr('string'),
    miniUrl:    DS.attr('string'),
    position:   DS.attr('number'),
    productUrl: DS.attr('string'),
    smallUrl:   DS.attr('string'),
    width:      DS.attr('number', { key: 'attachment_width' })

    // ---------------------------------------------------------
    // Computed Properties
    // ---------------------------------------------------------


  });

})();
