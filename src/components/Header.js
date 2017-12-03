import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/auth/google">Login with Google</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/profile"><i className="fa fa-user" aria-hidden="true"></i> My Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/api/logout"><i className="fa fa-sign-out" aria-hidden="true"> </i>Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Disliker <i className="fa fa-thumbs-o-down" aria-hidden="true"></i></a>
        <ul className="navbar-nav mr-auto">
        </ul>
        {this.renderContent()}
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
