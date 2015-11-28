var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
  timeout: function timeout(){
    AppDispatcher.dispatch({
      actionType:AppConstants.TIMEOUT
    })
  }
}

module.exports = AppActions;
