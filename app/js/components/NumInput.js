var React = require('react');
var AppActions = require('../actions/AppActions.js');

var NumInput = React.createClass({
  propTypes : {
    min : React.PropTypes.number,
    max : React.PropTypes.number,
    step : React.PropTypes.number,
    val : React.PropTypes.number,
    label : React.PropTypes.string,
    type : React.PropTypes.oneOf(["number","range"])
  },
  getDefaultProps : function (){
    return {
      min : 0,
      max : 0,
      step : 1,
      val : 0,
      label : "",
      type : "range"
    };
  },
  render : function render(){
    return (
      <div>
        {this.props.label}
        <br/>
        <input
                ref="sliderInput"
                type={this.props.type}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                defaultValue={this.props.val}/>
      </div>
    );
  }
});

module.exports = NumInput;
