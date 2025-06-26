const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req,resp)=>{
    const users = await User.find().select('-password').lean()
    if(!users?.length){
        return resp.status(400).json({message: "No users found !"})
    }
    resp.json(users)
})

// @desc Create new user
// @route Post /users
// @access Private
const createNewUser = asyncHandler(async (req,resp)=>{
    const { username, password, roles } = req.body;

    // Confirms data
    if(!username || !password || !Array.isArray(roles) || !roles.length){
        return resp.status(400).json({ message : 'All fields are required !'})
    }

    // Check for duplicate 
    const duplicate = await User.findOne({username}).lean().exec();

    if(duplicate){
        return resp.status(409).json({message: 'Duplicate username'})
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = { username, "password":hashedPwd, roles}

    // Crete and store new user 
    const user = await User.create(userObject)

    if(user)
    {
        resp.status(201).json({ message: `New user ${username} cretaed !`})
    }else{
      resp.status(400).json({ message: 'Invalid user data received'})
    }

})

// @desc Update a user
// @route Patch /users
// @access Private
const updateUser = asyncHandler(async (req,resp)=>{
    const {id, username, roles, active, password } = req.body;
    if(!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean'){
        console.log('BODY:', req.body);
        return resp.status(400).json({message : 'All fields are required !'})
    }

    const user = await User.findById(id).exec()

    if(!user){
        return resp.status(400).json({message : 'user not found'})
    }

    // Duplicate check
    const duplicate = await User.findOne({username}).lean().exec()
    // Allow updates to the oriiginal user 

    if(duplicate && duplicate?._id.toString() !== id){
        return resp.status(409).json({message : 'Duplicate usernme '})
    }

    user.username = username
    user.roles = roles
    user.active = active

    if(password){
        // Hash password
        user.password = await bcrypt.hash(password, 10)
    }

    const updatedUser = await user.save()

    resp.json({ message: `${updatedUser.username} Updated !`})

});

// @desc Delete a user
// @route Patch /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'User ID required!' });
  }

  const note = await Note.findOne({ user: id }).lean().exec();
  if (note) {
    return res.status(400).json({ message: 'User has assigned notes' });
  }

  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({ message: 'User not found!' });
  }

  await user.deleteOne(); // 🔥 deletion happens here

  const reply = `Username ${user.username} with ID ${user._id} deleted`; // ✅ this works

  res.json({ message: reply });
});

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}