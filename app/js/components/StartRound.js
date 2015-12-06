var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');
var Button = require('../components/Button.js');

var StartRoundMode = React.createClass({
  render : function render(){
    return (
      <div>
        <div>
          <p>{AppLocalesFn('round') + ' '+(this.props.round+1)}</p>
        </div>
        <div>
          <p>{AppLocalesFn('turn').replace('%TEAM%',this.props.team)}</p>
        </div>
        <div>
          <Button config={{handler : AppActions.play, icon : 'fa fa-play'}}/>
        </div>
      </div>
    );
  }
});

module.exports = StartRoundMode;
