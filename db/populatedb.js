#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    message STRING NOT NULL,
    name STRING NOT NULL,
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
    connectionString: "postgresql://hamish:1Hammer1$@localhost:5432/messages"
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
