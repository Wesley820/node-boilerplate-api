/*
|--------------------------------------------------------------------------
| HTTP server
|--------------------------------------------------------------------------
|
| This file imports a new http server instance.
|
*/

import app from './start/app';

app.listen(process.env.PORT || 3333);
