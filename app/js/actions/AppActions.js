var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
  timeout: function timeout(item){
    AppDispatcher.dispatch({
      actionType : AppConstants.timeout
    });
  },

  clickNextCard : function clickNextCard (){
    AppDispatcher.dispatch({
      actionType : AppConstants.clickNextCard
    });
  },

  configDone : function configDone(config){
    AppDispatcher.dispatch({
      actionType : AppConstants.configurationDone,
      config : config
    });
  }
};

module.exports = AppActions;
