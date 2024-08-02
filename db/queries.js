const pool = require('./pool');

async function getAllMessages() {
    await pool.query("CREATE TABLE IF NOT EXISTS messages (message, name, date)")
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  }
  
//   async function insertUsername(username) {
//     await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
//   }
  
//   async function getUsername(user){
//       const username = await pool.query("SELECT * FROM usernames WHERE username = ($1)", [user])
//       if (username.rows[0] == undefined){
//           return 'User does not exist';
//       }
//       return username.rows[0].username;
//   }
  
//   async function deleteUsers(){
//       await pool.query("DELETE FROM usernames")
//   }
  
  module.exports = {
    getAllMessages,
    // insertUsername,
    // getUsername,
    // deleteUsers
  };
  