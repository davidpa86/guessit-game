var Backbone = require('backbone');

'use strict';

var Team = Backbone.Model.extend({
  defaults : {
    name : "",
    members : 0,
    points : 0
  }
});

module.exports = Team;
