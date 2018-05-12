import * as express from 'express';
import DB from '../database';
import User from '../models/user';

export default {
  all,
  findOne
};

async function all(req: express.Request, res: express.Response): Promise<void> {
  const trx = await DB.startTransaction();
  try {
    const users = await User.all(trx, req.query.limit);
    await trx.commit();
    res.status(200).send(users);
  } catch (error) {
    await trx.rollback();
    res.status(500).send(error);
  }
}

async function findOne(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const trx = await DB.startTransaction();
  try {
    const user = await User.findOne(trx, req.params.userId);
    await trx.commit();
    res.status(200).send(user);
  } catch (error) {
    await trx.rollback();
    res.status(500).send(error);
  }
}
