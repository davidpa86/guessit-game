var React = require('react');

//Store
var GuessitStore = require('../stores/GuessitStore.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales');

//Importing React views
var PlayMode = require('../components/PlayMode.js');
var Configuration = require('../components/ConfigSection.js');
var Configuration = require('../components/ConfigSection.js');
var AddCharacterMode = require('../components/AddCharacterMode.js');
var StartRound = require('../components/StartRound.js');
var Timeout = require('../components/Timeout.js');

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
      case AppConstants.configuration:
        return this.renderConfigurationMode();
      case AppConstants.addCharacters:
        return this.renderAddCharacters();
      case AppConstants.playing:
        return this.renderPlayMode();
      case AppConstants.timeout:
        return this.renderTimeoutMode();
      case AppConstants.gamefinished:
        return this.renderResults();
      case AppConstants.startRound:
        return this.renderStartRound();
    }
  },

  renderPlayMode : function renderPlayMode()
  {
    return (<PlayMode config={{
                                turnText : AppLocalesFn('turn').replace('%TEAM%',GuessitStore.currentTeam.get('name')),
                                card : GuessitStore.currentCard
                              }}/>);
  },

  renderStartRound : function renderStartRound()
  {
    return (<StartRound team={GuessitStore.currentTeam.get('name')} round={GuessitStore.currentRound}/>);
  },

  renderResults : function renderResults(){
    return (
              <div>
                Resultados
              </div>
            );
  },

  renderConfigurationMode : function renderConfigurationMode()
  {
    return (<Configuration/>);
  },

  renderTimeoutMode : function renderTimeoutMode()
  {
    return (<Timeout team={GuessitStore.currentTeam.get('name')}/>);
  },

  renderAddCharacters : function renderAddCharacters(){
    var config = {teams : GuessitStore.teams.pluck("name"), characters : GuessitStore.characters};
    return (<AddCharacterMode config={config}/>);
  },

  _onChange: function() {
    this.setState(GuessitStore.getState());
  }
});

module.exports = GuessitApp;
