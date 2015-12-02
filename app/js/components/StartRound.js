var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');

var AddCharacterMode = React.createClass({
  onClick : function onClick()
  {
    AppActions.play();
  },
  render : function render(){
    return (
      <div>
        <h3>Play</h3>
        <button onClick={this.onClick}>{AppLocalesFn('start')}</button>
      </div>
    );
  }
});

module.exports = AddCharacterMode;
