const cities = require('../data/cities');
const stories = require('../data/stories');


module.exports = {

  register: (app) => {
    app.get('/', (req, res, next) => {
      res.render('pages/home', {
        cities,
        stories,
      });
    });
  },

};
