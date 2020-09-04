export default {
  /*
  |--------------------------------------------------------------------------
  | Limit
  |--------------------------------------------------------------------------
  |
  | Defines the limit of JSON that can be sent by the client. If payload
  | is over 1mb it will not be processed.
  |
  */
  limit: '1mb',

  /*
  |--------------------------------------------------------------------------
  | Type
  |--------------------------------------------------------------------------
  |
  | Which content types are processed as JSON payloads. You are free to
  | add your own types here, but the request body should be parseable
  | by `JSON.parse` method.
  |
  */
  type: [
    'application/json',
    'application/json-patch+json',
    'application/vnd.api+json',
    'application/csp-report',
  ],

  /*
  |--------------------------------------------------------------------------
  | Strict
  |--------------------------------------------------------------------------
  |
  | When `strict` is set to true, body parser will only parse Arrays and
  | Object. Otherwise everything parseable by `JSON.parse` is parsed.
  |
  */
  strict: true,
};
