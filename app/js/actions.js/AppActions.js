var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
  timeout: function timeout(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.TIMEOUT
    })
  }
}

module.exports = AppActions
