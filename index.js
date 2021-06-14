const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const port = 5000;

const app = express();

const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ya1bp.mongodb.net/cure-your-pc?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const servicesCollection = client.db("cure-your-pc").collection("services");

  console.log("Database Connected");
});

app.get("/", (req, res) => {
  res.send("Server Home");
});

app.listen(port);
