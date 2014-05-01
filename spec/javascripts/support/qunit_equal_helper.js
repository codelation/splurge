(function() {
  "use strict";

  function getStringFromValue(value) {
    var string = '';
    if (value === null) {
      string = 'null';
    } else if (value === undefined) {
      string = 'undefined';
    } else if (typeof value === 'string') {
      string = '"' + value.toString() + '"';
    } else {
      string = value.toString();
    }
    return string;
  }

  equal = function(actual, expected, message) {
    var actualString = getStringFromValue(actual),
        expectedString = getStringFromValue(expected);

    if (message === null || message === undefined) {
      message = '';
    }

    message += ' Expected: ' + expectedString + ' Actual: ' + actualString;

    QUnit.equal(actual, expected, message);
  };

})();
