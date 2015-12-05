var Backbone = require('backbone');
Backbone.LocalStorage = require("backbone.localstorage");
var Team = require('./Team.js');

var Teams = Backbone.Collection.extend({
  model : Team,
  localStorage: new Backbone.LocalStorage('guessit-teams-backbone'),
  comparator : function (Model){
    var points = 0;
    var modelPoints = Model.get('points');
    for (var i=0; i<modelPoints.length; ++i)
    {
      points += modelPoints[i];
    }
    return -points;
  }
});

module.exports = new Teams();
