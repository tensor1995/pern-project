const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const Joi = require("joi");
// const cors = require("cors");
dotenv.config();

// app.use(cors);
app.use(bodyparser.json());

const port = 3000;

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

app.get("/accounts/:id/", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("course not found");
    return;
  }
  res.send(course);
});

app.post("/accounts", (req, res) => {

    const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  const {error} = validateData(req.body);
 
  if (error) {
    console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
    return;
  } else {
    courses.push(course);
    res.send(courses);
  }

});

app.put("/accounts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);
  if (!course) {
    res.status(404).send("record NA");
  }

  const {error} = validateData(req.body);
 
  if (error) {
    console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
    return;
  } else {
    course.name = req.body.name;
    res.send(course);
  }
});

validateData = (course) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(course, schema);
  return result;

};

app.listen(port);
