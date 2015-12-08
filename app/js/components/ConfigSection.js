var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var GuessitStore = require('../stores/GuessitStore.js');
var NumInput = require('../components/NumInput.js');
var Button = require('../components/Button.js');
var AppLocalesFn = require('../constants/AppLocales.js');

var ConfigSection = React.createClass({
  onClick : function onClick()
  {
    var config = {
      teams : parseInt(ReactDOM.findDOMNode(this.refs.teams.refs.sliderInput).value),
      characters :  parseInt(ReactDOM.findDOMNode(this.refs.characters.refs.sliderInput).value),
      rounds : parseInt(ReactDOM.findDOMNode(this.refs.rounds.refs.sliderInput).value)
    };
    AppActions.configDone(config);
  },
  render : function render(){
    return (
      <div>
        <div>
          <h2>{AppLocalesFn('configuration')}</h2>
        </div>
        <div>
          <NumInput
                    ref="teams"
                    min={1}
                    max={4}
                    step={1}
                    val={2}
                    label={AppLocalesFn('teams')}/>
          <NumInput
                    min={1}
                    max={10}
                    step={1}
                    label={AppLocalesFn('characters')}
                    val={4}
                    ref="characters"/>
          <NumInput
                    min={1}
                    max={3}
                    step={1}
                    label={AppLocalesFn('rounds')}
                    val={3}
                    ref="rounds"/>
        </div>
        <div>
          <Button config={{handler : this.onClick, icon : "fa fa-arrow-right"}}/>
        </div>
      </div>
    );
  }
});

module.exports = ConfigSection;
