var Backbone = require('backbone');

var Team = Backbone.Model.extend({
  defaults : {
    name : "",
    points : 0
  }
});

module.exports = Team;
