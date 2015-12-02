var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var GuessitStore = require('../stores/GuessitStore.js');

var CounterReact = require('../components/Counter.js');
var Button = require('../components/Button.js');
var Card = require('../components/Card.js');

var PlayMode = React.createClass({
  render : function render(){
    var buttonType = {type : AppConstants.buttonTypeNextCard, name : 'NEXT'};
    return (
      <div>
        <CounterReact/>
        <Card/>
        <Button config={buttonType}/>
      </div>
    );
  }
});

module.exports = PlayMode;
