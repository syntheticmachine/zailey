import React from 'react';
import { browserHistory, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const AuthenticatedNavigation = () => (
  <div>
    <div className="col-sm-8 left-nav">
      <Link to="/"><i className="ion-android-home"></i> Dashboard</Link>
      <Link to="/listings/new"><i className="ion-android-add-circle"></i> Create New Listing</Link>
      <Link to="/"><i className="ion-search"></i> Local Partners</Link>
      <a href="http://zailey.com/listing-boost/"><i className="ion-arrow-graph-up-right"></i> Boost Your Listing</a>
      {/* <Link to="/"><i className="ion-chatbubble-working"></i> Offers</Link> */}
    </div>
    <div className="col-sm-4 text-right">
      <a onClick={ handleLogout }><i></i>Logout</a>
    </div>
  </div>
);

export default AuthenticatedNavigation;
