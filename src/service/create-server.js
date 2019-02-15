const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const exphbs = require('express-handlebars');


const config = require('../config');
const handlebarsHelpers = require('../lib/handlebars-helpers');


const app = express();
const hbs = exphbs.create({
  layoutsDir: `${__dirname}/../views/layouts`,
  partialsDir: `${__dirname}/../views/partials`,
  defaultLayout: 'main',
  helpers: handlebarsHelpers,
});


app.engine('handlebars', hbs.engine);


app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(`${__dirname}/../public`));


app.use((req, res, next) => {
  res.locals = { config }; // eslint-disable-line no-param-reassign
  next();
});


module.exports = {
  create: () => app,
};
