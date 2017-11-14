"use strict";

var React = require('react');


var Home =React.createClass({
    render: function() {
        return(
            <div className="jumbotron" >
                <h1> Squirrel Courses</h1>
                <p>Free Course searcher Using React, React Router, and Flux for ultra responsive web app</p>
            </div>
        );
    }
}); 

module.exports = Home;