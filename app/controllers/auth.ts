import * as express from 'express';
import DB from '../database';
import User from '../models/user';
import { IUser } from '../utils/schema/schema';

export default {
  signUp
  // login,
  // requestPasswordReset,
  // resetPassword
};

async function signUp(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const trx = await DB.startTransaction();
  try {
    // User information check
    // Check in DB if user exists (username or email)
    // Store user in DB
    // Send email notification (welcome)
    // Sign the user in + JWT token
    const user: IUser = req.body.user;

    const userId = await User.create(trx, user);

    await trx.commit();
    res.status(200).send({ userId });
  } catch (error) {
    // console.error('>>>>>> ....\n', error);
    console.log('>>>>> error\n', error);
    await trx.rollback();
    res.status(500).send({ error: error.message });
  }
}

// async function login(
//   req: express.Request,
//   res: express.Response
// ): Promise<void> {
//   const trx = await DB.startTransaction();
//   try {
//     await trx.commit();
//     res.status(200).send();
//   } catch (error) {
//     await trx.rollback();
//     res.status(500).send(error);
//   }
// }
// async function requestPasswordReset(
//   req: express.Request,
//   res: express.Response
// ): Promise<void> {
//   const trx = await DB.startTransaction();
//   try {
//     await trx.commit();
//     res.status(200).send();
//   } catch (error) {
//     await trx.rollback();
//     res.status(500).send(error);
//   }
// }
// async function resetPassword(
//   req: express.Request,
//   res: express.Response
// ): Promise<void> {
//   const trx = await DB.startTransaction();
//   try {
//     await trx.commit();
//     res.status(200).send();
//   } catch (error) {
//     await trx.rollback();
//     res.status(500).send(error);
//   }
// }
