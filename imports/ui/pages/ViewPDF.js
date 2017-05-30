import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Documents from '../../api/documents/documents';
import { removeDocument } from '../../api/documents/methods';
import NotFound from './NotFound';
import container from '../../modules/container';

const handleEdit = (_id) => {
  browserHistory.push(`/listings/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/listings');
      }
    });
  }
};

const ViewPDF = ({ doc }) => {
  return doc ? (
    <div className="ViewPDF">
      <div className="main-banner">
        <div className="tab-desc">
          For Sale
        </div>
        <div className="tab-address">
          {doc.address} <br />
          ${doc.price}
        </div>
        <div className="tab-offer">
          <i className="ion-chatbubble-working"></i> Make An Offer
        </div>
      </div>
      <div className="container">
        { doc.body } <br />
      </div>
    </div>
  ) : <NotFound />;
};

ViewPDF.propTypes = {
  doc: PropTypes.object,
};

export default container((props, onData) => {
  const documentId = props.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, { doc });
  }
}, ViewPDF);
