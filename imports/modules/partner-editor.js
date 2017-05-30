/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertPartner } from '../api/partners/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { partner } = component.props;
  const confirmation = partner && partner._id ? 'Partner updated!' : 'Partner added!';
  const upsert = {
    industry: document.querySelector('[name="industry"]').value.trim(),
    city: document.querySelector('[name="city"]').value.trim(),
    state: document.querySelector('[name="state"]').value.trim(),
    companyName: document.querySelector('[name="companyName"]').value.trim(),
    phone: document.querySelector('[name="phone"]').value.trim(),
    email: document.querySelector('[name="email"]').value.trim(),
    website: document.querySelector('[name="website"]').value.trim(),
    bio: document.querySelector('[name="bio"]').value.trim(),
  };

  if (partner && partner._id) upsert._id = partner._id;

  upsertPartner.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.partnerEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/`);
    }
  });
};

const validate = () => {
  $(component.partnerEditorForm).validate({
    rules: {
      industry: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      companyName: {
        required: true,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
      },
      website: {
        required: true,
      },
      bio: {
        required: false,
      },
    },
    messages: {
      industry: {
        required: 'Industry Required',
      },
      city: {
        required: 'City Required',
      },
      state: {
        required: 'State Required',
      },
      companyName: {
        required: 'Company Name Required',
      },
      phone: {
        required: 'Phone Required',
      },
      email: {
        required: 'Email Required',
      },
      website: {
        required: 'Website Required',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function partnerEditor(options) {
  component = options.component;
  validate();
}
