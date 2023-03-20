const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter email'],
      unique: [true, 'Email already exists'],
    },
    password: {
      type: String,
      required: [true, 'Please enter password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', userSchema);
