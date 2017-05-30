import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Documents from './documents';
import rateLimit from '../../modules/rate-limit.js';

export const upsertDocument = new ValidatedMethod({
  name: 'documents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    address: { type: String, optional: true },
    city: { type: String, optional: true },
    state: { type: String, optional: true },
    zip: { type: String, optional: true },
    beds: { type: String, optional: true },
    baths: { type: String, optional: true },
    sqft: { type: String, optional: true },
    price: { type: String, optional: true },
    air: { type: String, optional: true },
    hardwood: { type: String, optional: true },
    rv: { type: String, optional: true },
    fireplace: { type: String, optional: true },
    deck: { type: String, optional: true },
    pool: { type: String, optional: true },
    solar: { type: String, optional: true },
    office: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(document) {
    document.authorName = Meteor.user().profile.name.first + ' ' + Meteor.user().profile.name.last;
    document.authorPhone = Meteor.user().profile.name.phone;
    document.authorEmail = Meteor.user().emails[0].address;
    document.ownedBy = Meteor.user()._id;
    return Documents.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
