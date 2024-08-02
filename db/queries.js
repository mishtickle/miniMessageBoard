const pool = require('./pool');

async function getAllMessages() {
    await pool.query("CREATE TABLE IF NOT EXISTS messages (message, name, date)")
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}
  
  module.exports = {
    getAllMessages,
    // insertUsername,
    // getUsername,
    // deleteUsers
  };
  