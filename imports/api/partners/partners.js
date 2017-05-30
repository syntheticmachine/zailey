import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Partners = new Mongo.Collection('Partners');
export default Partners;

Partners.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Partners.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Partners.schema = new SimpleSchema({
  industry: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  city: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  state: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  companyName: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  phone: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  email: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  website: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  bio: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },

});

Partners.attachSchema(Partners.schema);
