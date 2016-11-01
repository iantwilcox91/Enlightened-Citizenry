import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=6eeb2ca57f9c450fa2d5cc4ae9a3cd87';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
