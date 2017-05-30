/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const getUserData = () => ({
  email: document.querySelector('[name="emailAddress"]').value,
  password: document.querySelector('[name="password"]').value,
  profile: {
    name: {
      first: document.querySelector('[name="firstName"]').value,
      last: document.querySelector('[name="lastName"]').value,
      phone: document.querySelector('[name="userPhone"]').value,
    },
    location: {
      city: document.querySelector('[name="userCity"]').value,
      state: document.querySelector('[name="userState"]').value,
    },
  },
});

const signup = () => {
  const user = getUserData();

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Welcome!', 'success');
    }
  });
};

const validate = () => {
  $(component.signupForm).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      userPhone: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      userCity: {
        required: true,
      },
      userState: {
        required: true,
      },
    },
    messages: {
      firstName: {
        required: 'First Name Required',
      },
      lastName: {
        required: 'Last Name Required',
      },
      emailAddress: {
        required: 'Email Address Required',
        email: 'Email Address Not Valid',
      },
      password: {
        required: 'Password Required',
        minlength: 'Password Must Be At Least 6 Characters',
      },
      userCity: {
        required: 'City Required',
      },
      userPhone: {
        required: 'Phone Number Required',
      },
      userState: {
        required: 'State Required',
      },
    },
    submitHandler() { signup(); },
  });
};

export default function handleSignup(options) {
  component = options.component;
  validate();
}
