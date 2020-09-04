/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
|
| App is the class that constitutes the http server here are the
| middlewares and other configurations.
|
| To understand more about the express framework:
| https://expressjs.com/
|
*/

import './bootstrap';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import corsConfig from '../config/cors';
import bodyConfig from '../config/bodyParser';

import routes from './routes';

// Uncomment the line below if you want to use a database.
// import '../database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsConfig));
    this.app.use(bodyParser.json(bodyConfig));
    this.app.use(helmet());
  }

  routes() {
    routes(this.app);
  }
}

export default new App().app;
