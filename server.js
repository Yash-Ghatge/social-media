const express = require("express");
const user = require("./models/userSchema");
const bodyparser = require("body-parser");
const db = require("./models/db");
const bcrypt = require('bcrypt')
require('dotenv').config();


const server = new express();
server.use(bodyparser.json());
const Port = process.env.Port || 3000;

const userRoutes = require('./userRoutes');
const PostRoutes = require('./postRoutes');
const FeedRoutes = require('./feedRoutes');


server.use('/user',userRoutes)
server.use('/user',PostRoutes)
server.use('/user',FeedRoutes)

  server.listen(Port, () => {
    console.log("Server is runing on port 3000...");
  });