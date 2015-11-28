//Importing Backbone collections
var Cards = require('../stores/Cards.js');
var Teams = require('../stores/Teams.js');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var GuessitStore = assign({}, EventEmitter.prototype, {
  gameState : AppConstants.PLAYING,

  getState : function getState(){
    return {
      gameState : this.gameState
    };
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AppConstants.TIMEOUT :
      GuessitStore.gameState = AppConstants.TIMEOUT;
      GuessitStore.emitChange();
    break;
  }
});

module.exports = GuessitStore;
