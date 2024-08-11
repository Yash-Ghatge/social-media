const express = require('express')
const router = express.Router();
const user = require("./models/userSchema");


router.post("/signin", async (req, res) => {
    try {
      const data = req.body;
      const newuser = new user(data);
      
      const saveuser = await newuser.save();
      console.log(saveuser);
      res.status(200).send('Sign In')

     
    } catch (err) {
      console.log(err);
      res.status(404).send("error");
    }
  });

  module.exports = router;