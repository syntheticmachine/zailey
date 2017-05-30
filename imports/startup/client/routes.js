import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';
import Documents from '../../ui/pages/Documents.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import NewPartner from '../../ui/pages/NewPartner.js';
import EditDocument from '../../ui/pages/EditDocument.js';
import ViewDocument from '../../ui/pages/ViewDocument.js';
import ViewPDF from '../../ui/pages/ViewPDF.js';
import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ authenticate } />
        <Route name="listings" path="/listings" component={ Documents } />
        <Route name="newListing" path="/listings/new" component={ NewDocument } />
        <Route name="newPartner" path="/partners/new" component={ NewPartner } />
        <Route name="editListing" path="/listings/:_id/edit" component={ EditDocument } />
        <Route name="viewListing" path="/listings/:_id" component={ ViewDocument } />
        <Route name="viewPDF" path="/pdf/:_id" component={ ViewPDF } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});
