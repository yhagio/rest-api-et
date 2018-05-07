export default class UserDB {
  public static findOne(trx, userId: string) {
    return trx
      .select('*')
      .from('users')
      .where({ user_id: userId })
      .first();
  }

  public static all(trx, limit = 100) {
    return trx
      .select('*')
      .from('users')
      .limit(limit);
  }
}
