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
        <div>
          {this.props.config.turnText}
          <CounterReact/>
        </div>
        <div>
          <Card name={this.props.config.card}/>
        </div>
        <div>
          <Button config={{handler : AppActions.nextCard, icon : 'fa fa-check'}}/>
        </div>
      </div>
    );
  }
});

module.exports = PlayMode;
