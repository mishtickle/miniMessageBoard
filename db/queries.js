const pool = require('./pool');

async function getAllMessages() {
    await pool.query("CREATE TABLE IF NOT EXISTS messages (message STRING, name STRING, date DATE)")
    const { rows } = await pool.query("SELECT * FROM messages;");
    return rows;
}
  
  module.exports = {
    getAllMessages,
    // insertUsername,
    // getUsername,
    // deleteUsers
  };
  