import * as express from 'express';

export function findOne(req: express.Request, res: express.Response): void {
  res.status(200).json({
    user: 'Hello',
    req: req.params.id
  });
}
