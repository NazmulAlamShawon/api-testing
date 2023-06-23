const express = require("express");

const app = express();
app.get("/getUsers", (req, res) => {
  res.send("hello world");
});
app.get("/getTraining", (req, res) => {
  const traininer = {
    trainerId: 10,
    trainerName: "full stack developer",
    active: true,
  };
  res.send(traininer);
});
app.get("/readAllUser", (req, res) => {
  res.send("list of users");
});

app.get("/getUserDetails", (req, res) => {
  const userObj = {
    id: 1,
    name: "Nazmul Alam",
    status: true,
  };
  res.send(userObj);
});

//  get

// user api
// post
app.post("/createUser", (req, res) => {
  res.send("list of user");
});
app.put("/updateUser", (req, res) => {
  res.send("list of update user");
});
app.put("/deletUser", (req, res) => {
  res.send("list of delet user");
});

// product api
app.post("/createProduct", (req, res) => {
  res.send("list of product");
});
app.put("/updateProduct", (req, res) => {
  res.send("list of update product");
});
app.put("/deletProduct", (req, res) => {
  res.send("list of delet product");
});
app.listen(4000);
