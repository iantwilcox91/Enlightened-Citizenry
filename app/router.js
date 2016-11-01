import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislators');
  this.route('legislators-results', {path: '/legislators-results/:zip'});
  this.route('house');
  this.route('house-results', {path: '/house-results/:zip'});
  this.route('senate');
  this.route('senate-results', {path: '/senate-results/:zip'});
  this.route('bills');
  this.route('bills-results', {path: '/bills-results/:zip'});
});

export default Router;
