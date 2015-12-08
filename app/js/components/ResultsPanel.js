var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppConstants = require('../constants/AppConstants.js');
var AppLocalesFn = require('../constants/AppLocales.js');
var Button = require('../components/Button.js');

var ResultsPanel = React.createClass({
  render : function render(){
    var points = this.props.teams.pluck('points');
    var getRows = function getRows(array, index){
      var text = '';
      var sum = 0;
      for (var i=0; i<array.length; ++i)
      {
        if (i !== 0)
        {
          text += ' + ';
        }
        text += array[i];
        sum += array[i];
      }
      var row;
      if (array.length > 1)
      {
        text += ' = ';
        row = <span>{text} <b>{sum}</b></span>;
      }
      else {
        row = <span><b>{sum}</b></span>;
      }
      return (
        <tr key={ index }>
          <td>
            {this.props.teams.at(index).get('name')}
          </td>
          <td>
            {row}
          </td>
        </tr>
      );
    };
    var rows = points.map(getRows.bind(this));
    return (
      <div>
        <div>
          <h2>{AppLocalesFn('result')}</h2>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>{AppLocalesFn('team')}</th>
                <th>{AppLocalesFn('points')}</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
        <div>
          <Button config={{handler: AppActions.restart, icon : 'fa fa-refresh'}}></Button>
        </div>
      </div>
    );
  }
});

module.exports = ResultsPanel;
