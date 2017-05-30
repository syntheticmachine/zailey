import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';
import container from '../../modules/container';

const renderNavigation = user => (user ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ user }) => (
  <header>
    <div className="container">
      <div className="logo-section col-sm-1">
        <div className="zailey-brand">
          <Link to="/"><img src="http://zailey.com/wp-content/uploads/2017/04/zailey-white.png" /></Link>
        </div>
      </div>
      <div className="col-sm-11 navigation">
        { renderNavigation(user) }
      </div>
    </div>
  </header>
);

AppNavigation.propTypes = {
  user: PropTypes.object,
};

export default container((props, onData) => {
  onData(null, { user: Meteor.user() });
}, AppNavigation);
