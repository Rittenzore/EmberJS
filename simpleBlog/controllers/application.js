import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update() {
      this.get('model').pushObject({
        name: 'Your Name',
        text: this.get('text'),
        photo: 'https://lh3.googleusercontent.com/proxy/lJuXnU24n-VRKD4-zw1IdfwdpWz9Cm0HX2hQKVihkGfY_nqXF8XlEoyowJOrqkBTOmRmaVCLivHrJTmg7_iTmfiRYDLlOdlHuop5Y24LemA42wtjfv57'
      });
    }
  }
});
