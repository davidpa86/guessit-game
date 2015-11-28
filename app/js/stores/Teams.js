var Backbone = require('backbone');
var Team = require('./Team.js');

'use strict';

var Teams = Backbone.Collection.extend({
  model : Team,
});

module.exports = {
  teams : new Teams()
};
