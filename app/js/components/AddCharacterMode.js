var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');

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
    //TODO:
    console.log("action add card");
    var character = this.state.character+1;
    var team = this.state.team;
    if (character > this.props.config.characters)
    {
      character = 1;
      team++;
    }
    if (team >= this.props.config.teams.models.length)
    {
      //TODO: Call action
      console.log("DONE");
    }
    else {
      this.setState({newCharacter: '', team : team, character : character});
    }
  },

  render : function render(){
    //TODO: Send Array of names insteand full collection
    var team = this.props.config.teams.at(this.state.team);
    var text = team.get('name') + ', ' + AppLocalesFn('character') + this.state.character + '/' + this.props.config.characters;
    return (
      <div>
        <h3>{text}</h3>
        <input type="text" value={this.state.newCharacter} onChange={this.handleChange}/>
        <br/>
        <button disabled={!this.state.newCharacter} onClick={this.onClick}>{AppLocalesFn('next')}</button>
      </div>
    );
  }
});

module.exports = AddCharacterMode;
