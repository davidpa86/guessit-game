var exports = require('./app.jsx');
var Backbone = exports.backbone;
var guessit = exports.app;

(function(){
  'use strict';

  var Teams = Backbone.Collection.extend({
    model : guessit.card,
  });

  guessit.cards = new Teams();
})()
