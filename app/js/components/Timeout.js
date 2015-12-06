var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');
var Button = require('../components/Button.js');

var Timeout = React.createClass({
  render : function render(){
    return (
      <div>
        <div>
          <h3>{AppLocalesFn('timeout')}</h3>
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

module.exports = Timeout;
