import express from "express";
import "dotenv/config";
const app = express();
const port = 3000;

const objData = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
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

app.get("/objectdata", (req, res) => {
  res.json(objData);
});

app.listen(port, () => {
  console.log(`"Example app listening on port" ${process.env.PORT}`);
});
