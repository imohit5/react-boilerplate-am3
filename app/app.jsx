var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory}= require('react-router');


//Foundation css
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

var name = 'Mohit Arun'
var message = 'This messsage is from Prop'

ReactDOM.render(

  <p>BoilerPlate3 </p>

  , document.getElementById('app'));
