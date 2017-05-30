import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Partners from '../partners';

Meteor.publish('partners.list', () => Partners.find());

Meteor.publish('partners.view', (_id) => {
  check(_id, String);
  return Partners.find(_id);
});
