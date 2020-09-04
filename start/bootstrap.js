/*
|--------------------------------------------------------------------------
| Bootstrap
|--------------------------------------------------------------------------
|
| This file is responsible for loading environment variables according to
| the application environment, whether for testing, production or
| development.
|
*/

const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});
