import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {name: 'Rittenzore',
       text: 'This is a comment',
       photo: 'https://sun7-9.userapi.com/2Kkp6xWTMhnvc7PYBRuVi22VKThmZIne4CIuYw/bXVkow4Qbl0.jpg'
      },
      {name: 'someoneElse',
       text: 'This is a comment 2',
       photo: 'https://sun9-29.userapi.com/c857532/v857532114/1c1cf4/rtwV8wg_zLE.jpg'
      }

    ]
  }
});