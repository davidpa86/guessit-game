var exports = require('./app.jsx');
var Backbone = exports.backbone;
var guessit = exports.app;

(function(){
  'use strict';

  var Teams = Backbone.Collection.extend({
    model : guessit.team,
  });

  guessit.teams = new Teams();
})()
