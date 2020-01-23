import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/api/links'
import { WebApp } from 'meteor/webapp'
import connectRoute from 'connect-route'

Meteor.startup(() => {
  Meteor.publish('links', () => {
    return Links.find({}, { sort: { count: -1 } });
  })
});

function onRoute(req, res, next) {
  const link = Links.findOne({ token: req.params.token });
  if (link) {
    Links.update(link, { $inc: { count: 1 } })
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    next();
  }
}

const middleware = connectRoute(function (router) {
  router.get('/:token', onRoute)
})
WebApp.connectHandlers.use(middleware)