const User = require('.../models/User')
const Note = require('.../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (requestAnimationFrame,resp)=>{
    const users = await User.find().select('-password').lean()
    if(!users){
        return resp.status(400).json({message: "No users found !"})
    }
    resp.json(users)
})

// @desc Create new user
// @route Post /users
// @access Private
const createNewUser = asyncHandler(async (requestAnimationFrame,resp)=>{
    const { username, password, roles } = req.body;

    // Confirms data
    if(!username || !password || !Array.isArray(roles) || !roles.length){
        return resp.status(400).json({ message : 'All fields are required !'})
    }
})

// @desc Update a user
// @route Patch /users
// @access Private
const updateUser = asyncHandler(async (requestAnimationFrame,resp)=>{

})

// @desc Delete a user
// @route Patch /users
// @access Private
const deleteUser = asyncHandler(async (requestAnimationFrame,resp)=>{

})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}