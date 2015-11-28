var Backbone = require('backbone');

'use strict';

var Card = Backbone.Model.extend({
  defaults : {
    name : ""
  }
});

module.exports = Card;
