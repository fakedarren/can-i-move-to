const home = require('../routes/home.route');
const join = require('../routes/join.route');
const cities = require('../data/cities.json');

module.exports = {

  register: (app) => {
    app.get('/', home);
    cities.forEach(city => {
      const path = city.toLowerCase();
      app.get(`/${path}`, home);
    });
    app.post('/join', join);
  },

};
