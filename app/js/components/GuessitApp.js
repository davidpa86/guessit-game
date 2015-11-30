'use strict';

var React = require('react');

//Store
var GuessitStore = require('../stores/GuessitStore.js');
var AppConstants = require('../constants/AppConstants.js');

//Importing React views
var PlayMode = require('../components/PlayMode.js');

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
    switch (this.state.gameState)
    {
      case AppConstants.playing:
        return this.renderPlayMode();
        break;
      case AppConstants.timeout:
        return this.renderTimeoutMode();
        break;
    }
  },
  renderPlayMode : function renderPlayMode()
  {
    return (<PlayMode/>);
  },

  renderTimeoutMode : function renderTimeoutMode()
  {
    return (<div>Timeout!</div>);
  },

  _onChange: function() {
    this.setState(GuessitStore.getState());
  }
});

module.exports = GuessitApp;
