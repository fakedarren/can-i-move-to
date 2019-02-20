const cities = require('../data/cities');
const stories = require('../data/stories');


module.exports = (req, res, next) => {
  res.render('pages/home', {
    cities,
    stories,
  });
};
