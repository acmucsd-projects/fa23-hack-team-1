const express = require('express');
const { response } = require('../app');
const userModel = require('../models/user');
const router = express.Router();

/* GET users listing. */
router.get("/register", async(req, res) => {
  const users = await userModel.find().exec(); 
  res.status(200).json({users});
});

router.post("/register", async (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;
  
  // If any field is empty, let user know
  if (!newUsername || !newPassword) {
    res.json({message: "empty"});
    //create modal box to warn about empty
    console.log("Cannot have empty fields");
  } 
  else if (await userModel.findOne({username: newUsername})){
    res.json({message: "exist"});
    //handle existing user credentials by creating modal box saying username taken
    
    console.log("username already exist!")
  } else {
    const newUser = await userModel.create({
      username:newUsername,
      password:newPassword,
    });
    newUser.save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user with the given ID exists
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await user.deleteOne();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
