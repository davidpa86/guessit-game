var Backbone = require('backbone');
var Card = require('./Card.js');
Backbone.LocalStorage = require("backbone.localstorage");

var Cards = Backbone.Collection.extend({
  model : Card,
  localStorage: new Backbone.LocalStorage('guessit-cards-backbone')
});

module.exports = new Cards();
