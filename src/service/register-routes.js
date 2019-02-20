const home = require('../routes/home.route');
const join = require('../routes/join.route');


module.exports = {

  register: (app) => {
    app.get('/', home);
    app.post('/join', join);
  },

};
