/*
|--------------------------------------------------------------------------
| Truncate
|--------------------------------------------------------------------------
|
| Used to clean all tables in the database, this type of file is useful for
| automated tests, so that before executing each test it clears any
| information from the database.
|
*/

/* import database from '../../database';

export default function truncate() {
  return Promise.all(
    Object.keys(database.connection.models).map((model) => {
      return database.connection.models[model].destroy({
        truncate: true,
        force: true,
      });
    }),
  );
}
*/
