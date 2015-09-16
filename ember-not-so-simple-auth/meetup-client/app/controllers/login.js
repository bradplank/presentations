import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate() {
      var data = this.getProperties('identification', 'password');
      this.set('errorMessage', null);
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data).catch((message) => {
        this.set('errorMessage', message.error.message);
      });
    }
  }
});
