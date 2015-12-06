var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var GuessitStore = require('../stores/GuessitStore.js');

var Card = React.createClass({
  render : function render(){
    return (
              <div className='paper'>
                <div className='paper-content'>
                  <p>{this.props.name}</p>
                </div>
              </div>
            );
  }
});

module.exports = Card;
