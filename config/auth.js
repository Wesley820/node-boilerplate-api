export default {
  /*
  |--------------------------------------------------------------------------
  | Secret
  |--------------------------------------------------------------------------
  |
  | Defines a random hash that will be used to build jwt tokens.
  |
  */
  secret: process.env.APP_SECRET,

  /*
  |--------------------------------------------------------------------------
  | ExpiresIn
  |--------------------------------------------------------------------------
  |
  | Defines the lifetime of a jwt token. The default is 7 days.
  |
  */
  expiresIn: '7d',
};
