var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');
var Button = require('../components/Button.js');

var Timeout = React.createClass({
  render : function render(){
    return (
      <div>
        <h3>{AppLocalesFn('timeout')}</h3>
        <div>{AppLocalesFn('turn').replace('%TEAM%',this.props.team)}</div>
        <Button config={{handler : AppActions.play, name : AppLocalesFn('start')}}/>
      </div>
    );
  }
});

module.exports = Timeout;
