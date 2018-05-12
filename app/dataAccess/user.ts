export default {
  findOne,
  all,
  create
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

function create(trx, user) {
  return trx
    .insert(user)
    .into('users')
    .returning('user_id');
}
