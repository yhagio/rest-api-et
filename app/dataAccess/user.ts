export default {
  findOne,
  all
};

function findOne(trx, userId: string) {
  return trx
    .select('*')
    .from('users')
    .where({ user_id: userId })
    .first();
}

function all(trx, limit = 100) {
  return trx
    .select('*')
    .from('users')
    .limit(limit);
}
