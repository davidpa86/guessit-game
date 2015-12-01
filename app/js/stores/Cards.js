var Backbone = require('backbone');
var Card = require('./Card.js');

var Cards = Backbone.Collection.extend({
  model : Card,
});

module.exports = new Cards();
