import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
class Content extends Component {
  render() {
    return (
      <div>
        <h1>Node.University</h1>
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav ">
            <li >
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Content;