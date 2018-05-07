import app from './app';
import PostgresDB from './database';
const PORT = 3000;

Promise.resolve()
  .then(async () => {
    console.log('Migrating DB ...');
    await PostgresDB.migrate();
    console.log('Migration Done.');
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Express server listening on port ' + PORT);
    });
  })
  .catch(err => console.error(err));
