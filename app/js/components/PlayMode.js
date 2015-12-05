var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');
var GuessitStore = require('../stores/GuessitStore.js');

var CounterReact = require('../components/Counter.js');
var Button = require('../components/Button.js');
var Card = require('../components/Card.js');

var PlayMode = React.createClass({
  render : function render(){
    return (
      <div>
        {this.props.config.turnText}
        <CounterReact/>
        <Card name={this.props.config.card}/>
        <Button config={{handler : AppActions.nextCard, name : AppLocalesFn('next')}}/>
      </div>
    );
  }
});

module.exports = PlayMode;
