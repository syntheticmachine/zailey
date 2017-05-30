import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents';
import container from '../../modules/container';
import { removeDocument } from '../../api/documents/methods';

const handleNav = _id => browserHistory.push(`/listings/${_id}`);
const handlePDF = _id => browserHistory.push(`/pdf/${_id}`);
const handleEdit = (_id) => {
  browserHistory.push(`/listings/${_id}/edit`);
};
const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Listing deleted!', 'success');
        browserHistory.push('/');
      }
    });
  }
};

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, address, city, state }) => (
      <ListGroupItem key={ _id }>
        <div className="col-sm-5">
          <h5>{address}<br />{city}, {state}</h5>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-view pdf" onClick={ () => handlePDF(_id) }><i className="ion-document"></i> PDF</button>
        </div>
        <div className="col-sm-3">
          <button className="btn btn-view" onClick={ () => handleNav(_id) }>View</button>
        </div>
        <div className="col-sm-1">
          <button className="btn btn-view grey" onClick={ () => handleEdit(_id) }><i className="ion-gear-b"></i></button>
        </div>
        <div className="col-sm-1">
          <button className="btn btn-view red" onClick={ () => handleRemove(_id) }><i className="ion-trash-a"></i></button>
        </div>

      </ListGroupItem>
    ))}
  </ListGroup> :
  <div className="no-results">
    <p>Looks like you don't have any listings yet.</p>
    <img className="building" src="http://zailey.com/wp-content/uploads/2017/05/building.png" />
    <Link className="btn btn-primary" to="/listings/new">Create Your First Listing</Link>
  </div>
);

DocumentsList.propTypes = {
  documents: PropTypes.array,
};

export default container((props, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  if (subscription.ready()) {
    const documents = Documents.find({ownedBy: Meteor.user()._id}).fetch();
    onData(null, { documents });
  }
}, DocumentsList);
