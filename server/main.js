import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/api/links'

Meteor.startup(() => {
  Meteor.publish('links', () => {
    return Links.find({});
  })
});
