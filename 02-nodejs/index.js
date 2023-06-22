'use strict'

const express = require('express')

const User = require('./models/User');
const UserService = require('./controller');

// Setup Express.js app
const app = express()

// TODO: everything else
const controller = new UserService();

app.get('/users',
  async (req, res, next) => {
    try {
      let users = await controller.findAll();
      let csvData = ["_id", "name", "email"].join(",") + "\r\n"
      users.forEach((user) => {
        csvData += [user["_id"], user.name, user.email].join(",") + "\r\n"
      })

      res
        .set({
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="users.csv"`,
        })
        .send(csvData)
    } catch (error) {
      next(error);
    }
  });

app.post('/users',
  async (req, res, next) => {
    try {
      let user = await controller.findAll();
      res.send(user);
    } catch (error) {
      next(error);
    }
  });

app.listen(3000)