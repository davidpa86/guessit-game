'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');

var Button = React.createClass({
  onClick : function (){
    if (this.props.config.type === AppConstants.buttonTypeDone)
    {
      AppActions.clickDone();
    }
    else if (this.props.config.type === AppConstants.buttonTypeNextCard)
    {
      AppActions.clickNextCard();
    }
  },
  render : function render(){
    return (
      <button onClick={this.onClick}>
        {this.props.config.name}
      </button>
    );
  }
});

module.exports = Button;
