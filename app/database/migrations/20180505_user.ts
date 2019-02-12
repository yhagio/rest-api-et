exports.up = async knex => {
  await knex.raw(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
      user_id uuid DEFAULT gen_random_uuid (),
      first_name VARCHAR,
      last_name VARCHAR,
      username VARCHAR NOT NULL,
      email VARCHAR NOT NULL,
      password VARCHAR NOT NULL,
      PRIMARY KEY (user_id)
    );`);
};

exports.down = async knex => {
  await knex.raw(`
  DROP EXTENSION pgcrypto;
  DROP TABLE IF EXISTS users;
 `);
};
