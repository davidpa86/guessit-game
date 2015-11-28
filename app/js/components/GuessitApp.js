'use strict';

var React = require('react');

//Store
var GuessitStore = require('../stores/GuessitStore.js');

var AppConstants = require('../constants/AppConstants.js');

//Importing React views
var CounterReact = require('../components/Counter.js');

var GuessitApp = React.createClass({
  getInitialState: function() {
    return GuessitStore.getState();
  },

  componentDidMount: function() {
    GuessitStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GuessitStore.removeChangeListener(this._onChange);
  },
  render : function render(){
    if (this.state.gameState === AppConstants.PLAYING)
    {
      return (<CounterReact/>);
    }
    else {
      return (<div>Timeout!</div>);
    }
  },
  _onChange: function() {
    this.setState(GuessitStore.getState());
  }
});

module.exports = GuessitApp;
