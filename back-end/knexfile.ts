// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'nlw',
      user: 'postgres',
      password: 'docker',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'nlw',
      user: 'postgres',
      password: 'docker',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'nlw',
      user: 'postgres',
      password: 'docker',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
  },
};
