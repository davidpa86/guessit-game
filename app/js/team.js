var exports = require('./app.jsx');
var Backbone = exports.backbone;
var guessit = exports.app;

(function(){
  'use strict';
  guessit.team = Backbone.Model.extend({
    defaults : {
      name : "",
      members : 0,
      points : 0
    }
  });
})()
