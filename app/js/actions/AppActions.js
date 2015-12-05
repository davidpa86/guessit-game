var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
  timeout: function timeout(item){
    AppDispatcher.dispatch({
      actionType : AppConstants.timeout
    });
  },

  play : function play(){
    AppDispatcher.dispatch({
      actionType : AppConstants.playing
    });
  },

  nextCard : function nextCard (){
    AppDispatcher.dispatch({
      actionType : AppConstants.nextCard
    });
  },

  configDone : function configDone(config){
    AppDispatcher.dispatch({
      actionType : AppConstants.configurationDone,
      config : config
    });
  },

  startRound : function startRound(){
    AppDispatcher.dispatch({
      actionType : AppConstants.startRound
    });
  },

  restart : function restart(){
    AppDispatcher.dispatch({
      actionType : AppConstants.newGame
    });
  },

  addCharacter : function addCharacter(character){
    AppDispatcher.dispatch({
      actionType : AppConstants.addCharacter,
      character : character
    });
  }
};

module.exports = AppActions;
