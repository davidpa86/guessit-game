var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');
var Button = require('../components/Button.js');

var AddCharacterMode = React.createClass({
  getInitialState : function ()
  {
    return {
      team : 0,
      character : 1,
      newCharacter : ''
    };
  },

  handleChange : function handleChange(e){
    this.setState({newCharacter: e.target.value});
  },

  onClick : function onClick ()
  {
    AppActions.addCharacter(this.state.newCharacter);
    var character = this.state.character+1;
    var team = this.state.team;
    if (character > this.props.config.characters)
    {
      character = 1;
      team++;
    }
    if (team >= this.props.config.teams.length)
    {
      AppActions.startRound();
    }
    else {
      this.setState({newCharacter: '', team : team, character : character});
    }
  },

  render : function render(){
    var teamName = this.props.config.teams[this.state.team];
    var text = teamName + ', ' + AppLocalesFn('character') + ' ' + this.state.character + '/' + this.props.config.characters;
    return (
      <div>
        <div>
          <h3>{text}</h3>
        </div>
        <div>
          <input type="text" value={this.state.newCharacter} onChange={this.handleChange}/>
        </div>
        <div>
          <Button config={{disabled : !this.state.newCharacter, handler: this.onClick, icon : "fa fa-arrow-right"}}/>
        </div>
      </div>
    );
  }
});

module.exports = AddCharacterMode;
