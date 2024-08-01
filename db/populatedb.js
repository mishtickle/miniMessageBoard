#! /usr/bin/env node

const { Client } = require("pg");
import dotenv from "dotenv"
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    message VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO messages (message, name, date) 
VALUES
  ('My first message', 'Andrew', '2024/08/01'),
  ('I love coding', 'Simon', '2024/08/01'),
  ('Living the dream', 'Bob', '2024/08/01');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
