const express = require("express");
const cors = require("cors");
const { Client } = require('pg')

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  const PORT = 5001;

  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "biodata"
  });

  client.connect();

  app.get("/", (req, res) => {
    res.json({ message: "Hello Orenda" });
  });

  app.get("/biodata", (req, res) => {
    client.query(`SELECT * FROM bio`, (err, res) => {
      if (!err) {
        console.log(res.rows);
      } else {
        console.log(err.message);
      }
      client.end;
    });
  });

  app.listen(PORT, () => {
    console.log(`"Server is Running on Port ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});