import * as express from 'express';
import UserRouter from './user';

export default function Routes(app: express.Application) {
  const router: express.Router = express.Router();

  app.use('/', router);
  app.use('/ping', (_, res) => {
    res.status(200).json({ ok: 'Pong' });
  });
  app.use('/api/users', UserRouter);
}
