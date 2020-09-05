/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are the gateway to your application, you can organize them
| however you want.
|
| If you want to learn more about routes, visit:
| https://expressjs.com/en/guide/routing.html.
|
*/

import { Router } from 'express';

// If there are routes protected by authentication with this line:
// import authMiddleware from '../app/middlewares/auth';

const Route = Router();

// Uses authentication middleware globally.
// Route.use(authMiddleware);

Route.get('/', async (request, response) => {
  return response.json({ greeting: 'Hello boilerplate API' });
});

export default Route;
