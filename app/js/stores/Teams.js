var Backbone = require('backbone');
Backbone.LocalStorage = require("backbone.localstorage");
var Team = require('./Team.js');

var Teams = Backbone.Collection.extend({
  model : Team,
  localStorage: new Backbone.LocalStorage('guessit-teams-backbone')
});

module.exports = new Teams();
