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

const ViewDocument = ({ doc }) => {

  const pool = () => { if(doc.pool === 'yes') {
    return(<div className="col-sm-4">Pool</div>); }
  }
  const air = () => { if(doc.air === 'yes') {
    return(<div className="col-sm-4">Central Air</div>); }
  }
  const solar = () => { if(doc.solar === 'yes') {
    return(<div className="col-sm-4">Solar Panels</div>); }
  }
  const office = () => { if(doc.office === 'yes') {
    return(<div className="col-sm-4">Seperate Office</div>); }
  }
  const deck = () => { if(doc.deck === 'yes') {
    return(<div className="col-sm-4">Deck</div>); }
  }
  const rv = () => { if(doc.rv === 'yes') {
    return(<div className="col-sm-4">RV Parking</div>); }
  }
  const hardwood = () => { if(doc.hardwood === 'yes') {
    return(<div className="col-sm-4">Hardwood Flooring</div>); }
  }
  const fireplace = () => { if(doc.fireplace === 'yes') {
    return(<div className="col-sm-4">Fireplace</div>); }
  }

  return doc ? (
    <div className="ViewDocument">
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
        { pool() } { air() } { rv() } { office() } { deck() } { hardwood() } { fireplace() } { solar() }
      </div>
    </div>
  ) : <NotFound />;
};

ViewDocument.propTypes = {
  doc: PropTypes.object,
};

export default container((props, onData) => {
  const documentId = props.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, { doc });
  }
}, ViewDocument);
