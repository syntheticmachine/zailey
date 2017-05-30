/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertDocument } from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Listing updated!' : 'Listing added!';
  const upsert = {
    address: document.querySelector('[name="address"]').value.trim(),
    city: document.querySelector('[name="city"]').value.trim(),
    state: document.querySelector('[name="state"]').value.trim(),
    zip: document.querySelector('[name="zip"]').value.trim(),
    sqft: document.querySelector('[name="sqft"]').value.trim(),
    beds: document.querySelector('[name="beds"]').value.trim(),
    baths: document.querySelector('[name="baths"]').value.trim(),
    pool: document.querySelector('[name="pool"]').value.trim(),
    rv: document.querySelector('[name="rv"]').value.trim(),
    solar: document.querySelector('[name="solar"]').value.trim(),
    deck: document.querySelector('[name="deck"]').value.trim(),
    air: document.querySelector('[name="air"]').value.trim(),
    office: document.querySelector('[name="office"]').value.trim(),
    fireplace: document.querySelector('[name="fireplace"]').value.trim(),
    hardwood: document.querySelector('[name="hardwood"]').value.trim(),
    price: document.querySelector('[name="price"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertDocument.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.documentEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/listings/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.documentEditorForm).validate({
    rules: {
      address: {
        required: true,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      zip: {
        required: true,
      },
      beds: {
        required: true,
      },
      baths: {
        required: true,
      },
      sqft: {
        required: false,
      },
      price: {
        required: false,
      },
      pool: {
        required: false,
      },
      fireplace: {
        required: false,
      },
      rv: {
        required: false,
      },
      solar: {
        required: false,
      },
      deck: {
        required: false,
      },
      air: {
        required: false,
      },
      office: {
        required: false,
      },
      hardwood: {
        required: false,
      },
      body: {
        required: false,
      },
    },
    messages: {
      address: {
        required: 'Address Required',
      },
      city: {
        required: 'City Required',
      },
      state: {
        required: 'State Required',
      },
      zip: {
        required: 'Zipcode Required',
      },
      beds: {
        required: 'Beds Required',
      },
      baths: {
        required: 'Baths Required',
      },
      price: {
        required: 'Price Required',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function documentEditor(options) {
  component = options.component;
  validate();
}
