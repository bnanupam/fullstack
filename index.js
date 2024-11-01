import express from "express";
import "dotenv/config";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello nodejs world");
});
app.get("/twitter", (req, res) => {
  res.send("Hi Ashok Singh");
});
app.get("/login", (req, res) => {
  res.send(`<h1>You need to login here</h1>`);
});
app.get("/youtube", (req, res) => {
  res.send("Now watch the youtube!");
});

app.listen(port, () => {
  console.log(`"Example app listening on port" ${process.env.PORT}`);
});
