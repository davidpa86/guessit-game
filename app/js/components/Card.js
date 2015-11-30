'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var GuessitStore = require('../stores/GuessitStore.js');

var Card = React.createClass({
  getInitialState: function() {
    return {name : GuessitStore.getNextCard()};
  },
  componentDidMount: function() {
    GuessitStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GuessitStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({name : GuessitStore.getNextCard()});
  },

  render : function render(){
    return (
              <div>
                {this.state.name}
              </div>
            );
  }
});

module.exports = Card;
