const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getUsername(user){
    const username = await pool.query("SELECT * FROM usernames WHERE username = ($1)", [user])
    if (username.rows[0] == undefined){
        return 'User does not exist';
    }
    return username.rows[0].username;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getUsername,
};
