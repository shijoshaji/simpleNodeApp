const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error('User not authorised');
      }
      //   console.log('decoded', decoded);
      console.log('Validating the token');
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(400);
      throw new Error('Token Missing');
    }
  }
});

module.exports = validateToken;
