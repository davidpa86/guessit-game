var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');

var Button = React.createClass({
  render : function render(){
    var content;
    if (this.props.config.icon) {
      content = <span className={this.props.config.icon}></span>;
    }
    else {
      content = this.props.config.name || '';
    }
    return (
      <button className={this.props.config.class || ''} disabled={this.props.config.disabled || false} onClick={this.props.config.handler}>
        {content}
      </button>
    );
  }
});

module.exports = Button;
