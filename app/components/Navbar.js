var React = require('react');
var ReactRouter = require('react-router');
var textcolorblack = require('../styles').textcolorblack;
var bloglink = require('../styles').bloglink;


var Link = ReactRouter.Link;


function Navbar(){
  return (
    <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" 
                  className="navbar-toggle collapsed" 
                  data-toggle="collapse" 
                  data-target="#bs-example-navbar-collapse-1" 
                  aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <p className="navbar-brand" style={textcolorblack} >Tile of The Dashboard</p>
            </div>
            <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse" >
              <ul className="nav navbar-nav">
                <li>
                  <Link to='/'>Home<span className="sr-only">(current)</span></Link>
                </li>
              </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a style={bloglink} target="_blank" href="https://iotdemos.wordpress.com">Blog</a></li>
              </ul>
            </div>
            </div>
        </nav>
  )
}
module.exports = Navbar;
