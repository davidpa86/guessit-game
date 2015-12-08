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
          <h2>
            <span className='fa fa-hourglass-end'/> {AppLocalesFn('timeout')}
          </h2>
        </div>
        <div>
          <h2>{AppLocalesFn('turn').replace('%TEAM%',this.props.team)}</h2>
        </div>
        <div>
          <Button config={{handler : AppActions.play, icon : 'fa fa-play'}}/>
        </div>
      </div>
    );
  }
});

module.exports = Timeout;
