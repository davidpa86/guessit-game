'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/AppActions.js');

var Counter = React.createClass({
  getInitialState : function ()
  {
    return {val : 5};
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
        <div id="container-counter">
          {this.state.val}
        </div>
      </div>
    );
  }
});

module.exports = Counter;
