import * as Knex from 'knex';
import * as Path from 'path';

import config from '../config';

const postgresConfig = config.postgres;

export const knex = Knex(postgresConfig);

export default class PostgresDB {
  public static get Connection() {
    if (!this.connection) {
      this.connection = Knex(config.postgres);
    }
    return this.connection;
  }

  public static startTransaction(): Promise<Knex.Transaction> {
    return new Promise((resolve, reject) => {
      return PostgresDB.Connection.transaction(trx => {
        return resolve(trx);
      }).catch(reject);
    }) as Promise<Knex.Transaction>;
  }

  public static async migrate(): Promise<void> {
    const migrationKnex = await PostgresDB.getMigrations();
    await migrationKnex.migrate.latest();
    await migrationKnex.destroy();
  }

  private static connection: Knex;

  private static getMigrations(): Knex {
    const migrationConfig = {
      ...postgresConfig,
      migrations: {
        directory: Path.normalize(`${__dirname}/migrations`),
        tableName: 'knex_migrations'
      }
    };
    return Knex(migrationConfig);
  }
}
