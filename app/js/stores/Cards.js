var Backbone = require('backbone');
var Card = require('./Card.js');

'use strict';

var Cards = Backbone.Collection.extend({
  model : Card,
});

module.exports = {
  cards : new Cards()
};
