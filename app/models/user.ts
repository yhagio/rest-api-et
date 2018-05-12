import UserDB from '../dataAccess/user';
import { IUser, UserFields } from '../utils/schema/schema';

export default {
  all,
  findOne,
  create
};

async function findOne(trx, userId: string): Promise<IUser> {
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

async function all(trx, limit: number): Promise<IUser[]> {
  return UserDB.all(trx, limit);
}

async function create(trx, user: IUser): Promise<UserFields.user_id> {
  const { email, username, password } = user;

  if (!username || !email || !password) {
    throw { error: 'username or email or password is missing.' };
  }

  const [userId] = await UserDB.create(trx, user);

  if (!userId) {
    throw { error: 'Something went wrong when creating user.' };
  }

  return userId;
}
