const express = require('express');
const router = express.Router();

const { registerUser, loginUser, currentUser, getAllUsers } = require('../controller/user-controller');
const validateToken = require('../middleware/validateJWT');

router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.get('/users/current', validateToken, currentUser);
router.get('/users/all', getAllUsers);

module.exports = router;
