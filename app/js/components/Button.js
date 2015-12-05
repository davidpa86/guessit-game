var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');

var Button = React.createClass({
  render : function render(){
    return (
      <button disabled={this.props.config.disabled || false} onClick={this.props.config.handler}>
        {this.props.config.name}
      </button>
    );
  }
});

module.exports = Button;
