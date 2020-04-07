const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const cors = require('cors');
//const jsonparser = ors = require('cos');
// app.use(bodyparser.json());
const jsonparser = bodyparser.json();
var courses = [
  { id: 1, name: "kaka" },
  { id: 2, name: "chichi" },
  { id: 3, name: "hihi" },
];
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/accounts/", (req, res) => {
  res.send(courses);
});

app.get("/accounts/:id/", jsonparser, (req, res) => {
  const course = courses.find( c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("course not found");
    return;
  }
  res.send(course);
});

app.post("/posts", (req, res) => {
    console.log(JSON.stringify( req.body.name));
    const course = {
    id: courses.length + 1,
    name: JSON.stringify( req.body.name)
  };
  courses.push(course);
  res.send(courses);
});

dotenv.config();
// app.use(cors);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running on port " + port);
});
