//Importing Backbone collections
var Cards = require('../stores/Cards.js');
var Teams = require('../stores/Teams.js');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var AppLocalesFn = require('../constants/AppLocales');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var GuessitStore = assign({}, EventEmitter.prototype, {
  gameState : AppConstants.configuration,
  cards : Cards,
  teams : Teams,
  rounds : 0,
  characters :0,
  roundCards : null,

  getState : function getState(){
    return {
      gameState : this.gameState
    };
  },

  addCharacter : function addCharacter(character){
    this.cards.create({name : character});
  },

  roundDone : function roundDone() {
    this.rounds--;
    if (this.round === 0)
    {
      this.gameState = AppConstants.gamefinished;

    }
    else {
      this.gameState = AppConstants.startRound;
    }
  },

  shuffle : function ()
  {
    this.roundCards = this.cards.pluck("name");
    for(var j, x, i = this.roundCards.length; i; j = Math.floor(Math.random() * i), x = this.roundCards[--i], this.roundCards[i] = this.roundCards[j], this.roundCards[j] = x);
  },

  getNextCard : function getNextCard()
  {
    if (this.roundCards.length > 0)
    {
      card = this.roundCards[0];
      this.roundCards.splice(0,1);
      return card;
    }
    else {
      this.roundDone();
    }
  },

  addConfig : function (config)
  {
    for (var i=1; i<=config.teams; ++i)
    {
      this.teams.create({name : AppLocalesFn('team')+' '+i});
    }
    this.rounds = config.rounds;
    this.characters = config.characters;
    GuessitStore.gameState = AppConstants.addCharacters;
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
    case AppConstants.timeout :
      GuessitStore.gameState = AppConstants.timeout;
      GuessitStore.emitChange();
    break;

    case AppConstants.clickNextCard :
      GuessitStore.emitChange();
    break;

    case AppConstants.configurationDone :
      GuessitStore.addConfig(action.config);
      GuessitStore.emitChange();
    break;

    case AppConstants.addCharacter :
      GuessitStore.addCharacter(action.character);
      GuessitStore.emitChange();
    break;

    case AppConstants.playing :
      GuessitStore.gameState = AppConstants.playing;
      GuessitStore.emitChange();
    break;

    case AppConstants.startRound :
      GuessitStore.shuffle();
      GuessitStore.gameState = AppConstants.startRound;
      GuessitStore.emitChange();
    break;
  }
});

module.exports = GuessitStore;
