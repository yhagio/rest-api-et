import UserDB from '../dataAccess/user';

export default class User {
  public static async findOne(trx, userId: string): Promise<any> {
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

  public static async all(trx, limit: number): Promise<any> {
    return UserDB.all(trx, limit);
  }
}
