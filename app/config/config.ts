export default {
  development: {
    postgres: {
      client: 'postgres',
      connection: {
        host: 'postgres',
        port: 5432,
        database: 'rest_api_dev',
        user: 'dev_user',
        password: 'password'
      }
    }
  },
  production: {
    postgres: {
      client: 'postgres',
      connection: {
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD
      }
    }
  }
};
