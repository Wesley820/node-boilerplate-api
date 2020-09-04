# Node boilerplate API

Standard node for API server with JWT and pre-configured automated tests

# Techs

- Node.js
- Express
- Jest
- JWT
- Sequelize
- Nodemon
- Yarn

# Objective

Developing a base structure for several types of applications that need an API, it happens that it is overwhelming to always have to configure everything from scratch to have a server with a database. This structure provides the database connection part, pre-configured jwt and the automated testing part with Jest, this structure can be easily divided, adapting to the needs of each project.

## Main integrations

- Eslint integrated
- Pre-configured automated tests
- Connection with sequelize integrated ORM
- JWT verification middleware added

# Installation

The project was built using Yarn but nothing prevents you from using NPM, just delete the yarn.lock file from the file directory.

To do the installation run the following commands:

```bash
git clone https://github.com/Wesley820/node-boilerplate-api.git
cd node-boilerplate-api
```

If using Yarn run:

```bash
yarn
```

If using NPM run:

```bash
npm install
```

Here don't forget to delete the `yarn.lock` file as NPM will create a file called `package-lock.json` which has the same functionality in the application.)

# Run project

## Development

Run:

```bash
yarn start
```

or

```bash
npm run start
```

## Tests

Run:

```bash
yarn test
```

or

```bash
npm run test
```

# How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-modification`;
- Commit your changes: `git commit -m 'mod: My modification'`;
- Push to your branch: `git push origin my-modification`;

After the merge of your pull request is done, you can delete your branch.

# License

[MIT License](/LICENSE)
