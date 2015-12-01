'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions.js');

var Counter = React.createClass({
  getInitialState : function ()
  {
    return {val : 60};
  },
  update : function update(){
    if (this.state.val === 0)
    {
      AppActions.timeout();
    }
    else
    {
      this.setState({val : this.state.val-1});
    }
  },
  componentDidMount : function componentDidMount(){
    this.intervalFn = setInterval(this.update,1000);
  },
  componentWillUnmount : function componentWillUnmount(){
    clearInterval(this.intervalFn);
  },
  render : function render(){
    return (
      <div>
        {this.state.val}
      </div>
    );
  }
});

module.exports = Counter;
