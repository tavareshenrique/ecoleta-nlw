import knex from 'knex';

const connection = knex({
  client: 'postgresql',
  connection: {
    database: 'nlw',
    user: 'postgres',
    password: 'docker',
  },
});

export default connection;
