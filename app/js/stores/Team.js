var Backbone = require('backbone');

var Team = Backbone.Model.extend({
  defaults : {
    name : "",
    points : []
  }
});

module.exports = Team;
