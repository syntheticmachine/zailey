import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../components/DocumentsList';

const Documents = () => (
  <div className="Documents small-container">
    <Row>
      <Col xs={ 12 }>
        <DocumentsList />
      </Col>
    </Row>
  </div>
);

export default Documents;
