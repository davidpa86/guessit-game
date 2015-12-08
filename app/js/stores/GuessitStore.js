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
  characters : 0,
  roundCards : null,
  currentTeam : null,
  currentCard : null,
  currentRound : 0,

  getState : function getState(){
    return {
      gameState : this.gameState,
      currentTeam : null,
      currentCard : this.currentCard
    };
  },

  restart : function restart()
  {
    this.gameState = AppConstants.configuration;
    this.cards.reset();
    this.teams.reset();
    this.rounds = 0;
    this.characters = 0;
    this.roundCards = null;
    this.currentTeam = null;
    this.currentCard = null;
    this.currentRound = 0;
  },

  addCharacter : function addCharacter(character){
    this.cards.create({name : character});
  },

  startRound : function startRound()
  {
    GuessitStore.shuffle();
    GuessitStore.gameState = AppConstants.startRound;
    GuessitStore.nextCard();
  },

  roundDone : function roundDone() {
    this.currentRound++;
    if (this.currentRound === this.rounds)
    {
      this.gameState = AppConstants.gamefinished;
    }
    else {
      this.changeTurnTeam();
      this.startRound();
    }
  },

  shuffle : function ()
  {
    this.roundCards = this.cards.pluck("name");
    for(var j, x, i = this.roundCards.length; i; j = Math.floor(Math.random() * i), x = this.roundCards[--i], this.roundCards[i] = this.roundCards[j], this.roundCards[j] = x);
  },

  nextCard : function nextCard()
  {
    if (this.roundCards.length > 0)
    {
      this.currentCard = this.roundCards[0];
      this.roundCards.splice(0,1);
    }
    else {
      this.roundDone();
    }
  },

  addConfig : function (config)
  {
    this.rounds = config.rounds;
    var points = [];
    for (var j=0; j<this.rounds; ++j)
    {
      points.push(0);
    }
    this.characters = config.characters;
    this.gameState = AppConstants.addCharacters;
    for (var i=1; i<=config.teams; ++i)
    {
      this.teams.create({name : AppLocalesFn('team')+' '+i, points : points});
    }
    this.currentTeam = this.teams.at(0);
  },

  changeTurnTeam : function()
  {
    var team = this.teams.shift();
    this.teams.push(team);
    this.currentTeam = this.teams.at(0);
  },

  timeout : function timeout(){
    this.roundCards.push(this.currentCard);
    this.nextCard();
    this.changeTurnTeam();
    this.gameState = AppConstants.timeout;
  },

  addPoint : function addPoint(){
    var points = this.currentTeam.get('points');
    points[this.currentRound]++;
    this.currentTeam.set('points', points);
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
      GuessitStore.timeout();
      GuessitStore.emitChange();
    break;

    case AppConstants.nextCard :
      GuessitStore.addPoint();
      GuessitStore.nextCard();
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

    case AppConstants.newGame :
      GuessitStore.restart();
      GuessitStore.emitChange();
    break;

    case AppConstants.startRound :
      GuessitStore.startRound();
      GuessitStore.emitChange();
    break;
  }
});

module.exports = GuessitStore;
