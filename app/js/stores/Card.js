var Backbone = require('backbone');

var Card = Backbone.Model.extend({
  defaults : {
    name : ""
  }
});

module.exports = Card;
