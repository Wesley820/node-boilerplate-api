require('../start/bootstrap');

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Dialect
  |--------------------------------------------------------------------------
  |
  | Dialect is the bank that will connect to your application when the
  | default is postgres.
  |
  */
  dialect: process.env.DB_DIALECT || 'postgres',

  /*
  |--------------------------------------------------------------------------
  | Host
  |--------------------------------------------------------------------------
  |
  | Here will be the host that your application will use to connect to the
  | database, when not set the default is locahost.
  |
  */
  host: process.env.DB_HOST || 'localhost',

  /*
  |--------------------------------------------------------------------------
  | Port
  |--------------------------------------------------------------------------
  |
  | Set the port of your respective database, which by default is set to 5432.
  |
  */
  port: process.env.DB_PORT || 5432,

  /*
  |--------------------------------------------------------------------------
  | Username
  |--------------------------------------------------------------------------
  |
  | Username is one of the access credentials for connecting to the database.
  |
  */
  username: process.env.DB_USERNAME,

  /*
  |--------------------------------------------------------------------------
  | Password
  |--------------------------------------------------------------------------
  |
  | Password is one of the access credentials for connecting to the database.
  |
  */
  password: process.env.DB_PASSWORD,

  /*
  |--------------------------------------------------------------------------
  | Database
  |--------------------------------------------------------------------------
  |
  | Here will be the name of the application database, remember to create the
  | database before running the migrations.
  |
  */
  database: process.env.DB_NAME,

  /*
  |--------------------------------------------------------------------------
  | Storage
  |--------------------------------------------------------------------------
  |
  | Defines the location where the sqlite bank will be stored. NOTE: Storage
  | is used only in a test environment, if you do tests with a database,
  | decompose this line:
  |
  */
  // storage: '../database/tests.sqlite',

  /*
  |--------------------------------------------------------------------------
  | Logging
  |--------------------------------------------------------------------------
  |
  | Logging is a Boolean that defines whether queries will be shown on the
  | application's console, which by default is only true when the application
  | is running in the development environment.
  |
  */
  logging: !!process.env.NODE_ENV === 'development',

  /*
  |--------------------------------------------------------------------------
  | Define
  |--------------------------------------------------------------------------
  |
  | In define will be all other database configurations by default it is set
  | that the data creation information is created automatically and that the
  | writing pattern is underscore.
  |
  */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
