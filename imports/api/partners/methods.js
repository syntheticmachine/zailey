import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Partners from './partners';
import rateLimit from '../../modules/rate-limit.js';

export const upsertPartner = new ValidatedMethod({
  name: 'partners.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    industry: { type: String, optional: true },
    city: { type: String, optional: true },
    state: { type: String, optional: true },
    companyName: { type: String, optional: true },
    phone: { type: String, optional: true },
    email: { type: String, optional: true },
    website: { type: String, optional: true },
    bio: { type: String, optional: true },
  }).validator(),
  run(partner) {
    return Partners.upsert({ _id: partner._id }, { $set: partner });
  },
});

export const removePartner = new ValidatedMethod({
  name: 'partners.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Partners.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertPartner,
    removePartner,
  ],
  limit: 5,
  timeRange: 1000,
});
