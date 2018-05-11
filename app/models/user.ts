import UserDB from '../dataAccess/user';

export default {
  all,
  findOne
};

async function findOne(trx, userId: string): Promise<any> {
  if (!userId) {
    throw { error: 'userId is required' };
  }

  if (userId.length !== 36) {
    throw { error: 'Valid userId is required' };
  }

  const user = await UserDB.findOne(trx, userId);
  if (!user) {
    throw { error: 'User not found.' };
  }
  return user;
}

async function all(trx, limit: number): Promise<any> {
  return UserDB.all(trx, limit);
}
