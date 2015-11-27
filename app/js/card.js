var exports = require('./app.jsx');
var Backbone = exports.backbone;
var guessit = exports.app;

(function(){
  'use strict';

  guessit.card = Backbone.Model.extend({
    defaults : {
      name : ""
    }
  });
})()
