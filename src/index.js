require('dotenv').config();


const routes = require('./service/register-routes');
const server = require('./service/create-server');


const app = server.create();
const port = process.env.PORT || 3000;


routes.register(app);
app.listen(port);


console.log(`Application running at http://localhost:${port}`);
