import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislators');
  this.route('legislators-results');
  this.route('house');
  this.route('house-results');
  this.route('senate');
  this.route('bills');
});

export default Router;
