var guessit = guessit || {};
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

(function(){
  'use strict';

  var GuessitApp = React.createClass({
    render : function render(){
      return (
        <div>
          Hello world!
        </div>
      );
    }
  });

  ReactDOM.render(
		<GuessitApp/>,
		document.getElementById('container')
	);
})()

module.exports = {
  app : guessit,
  react : React,
  reactDOM : ReactDOM,
  backbone : Backbone
};
