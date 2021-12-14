const { query } = require('../database/mysql')

const getUsers = () => {
  const sqlString = `SELECT id, name, sex, email, create_at, updated_at FROM User;`
  query(sqlString)
}

module.exports = {
    getUsers
}
