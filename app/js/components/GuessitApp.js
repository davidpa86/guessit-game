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
var ResultsPanel = require('../components/ResultsPanel.js');

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
        return (<Configuration/>);

      case AppConstants.addCharacters:
        return (<AddCharacterMode config={{
                                            teams : GuessitStore.teams.pluck("name"),
                                            characters : GuessitStore.characters
                                          }}/>);

      case AppConstants.playing:
        return (<PlayMode config={{
                                    turnText : AppLocalesFn('turn').replace('%TEAM%',GuessitStore.currentTeam.get('name')),
                                    card : GuessitStore.currentCard
                                  }}/>);
      case AppConstants.timeout:
        return (<Timeout team={GuessitStore.currentTeam.get('name')}/>);

      case AppConstants.gamefinished:
        GuessitStore.teams.sort();
        return (<ResultsPanel teams={GuessitStore.teams}/>);

      case AppConstants.startRound:
        return (<StartRound team={GuessitStore.currentTeam.get('name')} round={GuessitStore.currentRound}/>);
    }
  },

  _onChange: function() {
    this.setState(GuessitStore.getState());
  }
});

module.exports = GuessitApp;
