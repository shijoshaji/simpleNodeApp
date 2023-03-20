const asyncHandler = require('express-async-handler');
const User = require('../models/user-models');
// to encrypt password
const bcrypt = require('bcrypt');

/**
 *
 * @desc Get All Users
 * @route GET api/users/all
 * @access PUBLIC
 */
const getAllUsers = asyncHandler(async (req, res) => {
  const userList = await User.find();
  res.status(200).json({
    msg: 'Fetch all the users',
    data: userList,
  });
});

/**
 *
 * @desc Create User
 * @route POST api/users/register
 * @access PUBLIC
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('All fields are required');
  }
  const availableUser = await User.findOne({ email });
  if (availableUser) {
    res.status(400);
    throw new Error('Email exists');
  }
  // hash password
  const hashedPwd = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hashedPwd,
  });

  res.status(201).json({
    msg: 'Created USER',
    data: {
      username: username,
      email: email,
    },
  });
});

/**
 *
 * @desc User Login
 * @route POST api/users/login
 * @access PUBLIC
 */
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'Login USER',
  });
});

/**
 *
 * @desc Get Current User
 * @route GET api/users/current
 * @access PRIVATE
 */
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'Current USER',
  });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  getAllUsers,
};