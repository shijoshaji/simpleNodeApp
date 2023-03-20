const express = require('express');
const router = express.Router();

const { registerUser, loginUser, currentUser, getAllUsers } = require('../controller/user-controller');

router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.get('/users/current', currentUser);
router.get('/users/all', getAllUsers);

module.exports = router;
