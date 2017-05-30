import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Partners from '../../api/partners/partners';
import container from '../../modules/container';
import { removePartner } from '../../api/partners/methods';

const handleNav = _id => browserHistory.push(`/`);
const handleEdit = (_id) => {
  browserHistory.push(`/partners/${_id}/edit`);
};
const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removePartner.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Partner deleted!', 'success');
        browserHistory.push('/');
      }
    });
  }
};

const PartnersList = ({ partners }) => (
  partners.length > 0 ? <ListGroup className="PartnersList">
    {partners.map(({ _id, companyName, city, state, phone, website, industry }) => (
      <div className="col-sm-4" key={ _id }>
        <div className="partners-container">
          <h3>{companyName}</h3>
          <p>{industry}</p>
          <p>{city}, {state}</p>
          <p>{phone}</p>
          <a className="border-button" target="_blank" href={ 'http://' + website}>View Website</a>
          {/* <button className="btn btn-view red" onClick={ () => handleRemove(_id) }><i className="ion-trash-a"></i></button> */}
        </div>
      </div>
    ))}
  </ListGroup> :
  <div className="no-results">
    <p>No Local Partners In Your Area. We'll Update You When Any Become Available.</p>
    <img className="building" src="http://zailey.com/wp-content/uploads/2017/05/search.png" />
  </div>
);

PartnersList.propTypes = {
  partners: PropTypes.array,
};

export default container((props, onData) => {
  const subscription = Meteor.subscribe('partners.list');
  if (subscription.ready()) {
    const partners = Partners.find({city: Meteor.user().profile.location.city}).fetch();
    onData(null, { partners });
  }
}, PartnersList);
