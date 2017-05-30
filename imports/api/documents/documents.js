import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Documents = new Mongo.Collection('Documents');
export default Documents;

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
  ownedBy: {
    type: String,
    label: 'User who created the document.',
    optional: true,
  },
  authorName: {
    type: String,
    label: 'About the author',
    optional: true,
  },
  authorPhone: {
    type: String,
    label: 'Author Phone Number',
    optional: true,
  },
  authorEmail: {
    type: String,
    label: 'Author Email Address',
    optional: true,
  },
  address: {
    type: String,
    label: 'Listing Address',
  },
  city: {
    type: String,
    label: 'Listing City',
  },
  state: {
    type: String,
    label: 'Listing State',
  },
  zip: {
    type: String,
    label: 'Listing Zip',
  },
  beds: {
    type: String,
    label: 'Listing Beds',
  },
  baths: {
    type: String,
    label: 'Listing Baths',
  },
  sqft: {
    type: String,
    label: 'Listing SQFT',
  },
  price: {
    type: String,
    label: 'Listing Price',
  },
  rv: {
    type: String,
    label: 'RV Parking',
  },
  hardwood: {
    type: String,
    label: 'Hardwood Flooring',
  },
  office: {
    type: String,
    label: 'Seperate Office',
  },
  deck: {
    type: String,
    label: 'Deck',
  },
  fireplace: {
    type: String,
    label: 'Pool',
  },
  pool: {
    type: String,
    label: 'Pool',
  },
  solar: {
    type: String,
    label: 'Solar',
  },
  air: {
    type: String,
    label: 'Air',
  },
  body: {
    type: String,
    label: 'Listing Description',
    optional: true,
  },
});

Documents.attachSchema(Documents.schema);
