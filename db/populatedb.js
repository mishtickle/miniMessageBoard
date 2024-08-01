#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config(); 

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
  console.log(process.env.CONNECTION_STRING);
  const client = new Client({
    connectionString: "postgres://messageboard98-main-db-0daa9f851465b5855:Z7k6eztqA2bP23xeseJQfk7djX5gn1@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/messageboard98-main-db-0daa9f851465b5855",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
