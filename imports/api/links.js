import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url'
import { check, Match } from 'meteor/check'

Meteor.methods({
  'insert.link': function (url) {
    check(url, Match.Where(url => validUrl.isUri(url)));

    // saving url
    const token = Math.random().toString(32).slice(-5);
    Links.insert({ url, token, count: 0 })
  }
})

export const Links = new Mongo.Collection('links');
