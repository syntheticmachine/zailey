import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import PartnersList from '../components/PartnersList';
import DocumentsList from '../components/DocumentsList';
import { createContainer } from 'meteor/react-meteor-data';


const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};
const userPhone = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.phone}` : '';
};
const userLocation = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.location : '';
  return user ? `${name.city}, ${name.state}` : '';
};
const userEmail = () => {
  const user = Meteor.user();
  const name = user && user.emails ? user.emails[0] : '';
  return user ? `${name.address}` : '';
};
const userIcon = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first.slice(0, 1)}` : '';
};

const Index = ({ user }) => (
  <div className="Index">
    <div className="container">
      <div className="col-md-4 widget-container">
        <div className="widget">
          <div className="user-circle">
            <span className="user-letter">{ userIcon() }</span>
          </div>
          <p className="name">{ userName() }</p>
          <div className="userInfo">
            <p className="phone"><i className="ion-ios-telephone-outline"></i>{ userPhone() }</p>
            <p className="email"><i className="ion-ios-email-outline"></i>{ userEmail() }</p>
            <p><i className="ion-ios-location-outline"></i> { userLocation() }</p>
          </div>
        </div>
      </div>
      <div className="col-md-8 widget-container">
        <div className="widget home-list">
          <h4 className="widget-title">Your Listings</h4>
          <DocumentsList />
        </div>
      </div>
      <div className="widget-container">
        <div className="col-sm-12 widget partner-list">
          <h4 className="widget-title">Local Partners</h4>
          <PartnersList />
        </div>
      </div>
    </div>
  </div>
);

Index.propTypes = {
  user: PropTypes.object,
};

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, Index);
