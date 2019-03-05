const cities = require('../data/cities');
const stories = require('../data/stories');


module.exports = (req, res, next) => {
  const page = req.path.substring(1);
  const city = page ? page.charAt(0).toUpperCase() + page.slice(1) : 'Barcelona';

  res.render('pages/home', {
    city,
    cities,
    stories,
  });
};
