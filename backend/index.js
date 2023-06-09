// console.log(' lets try API');
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// imports
const contactRoute = require('./routes/contact-routes');
const userRoute = require('./routes/user-routes');
const errHandler = require('./middleware/errHandler');
const { connectDB } = require('./config/dbConnect');

connectDB();
//
app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});

// app.get('/api/contacts', (req, res) => {
//   res.send(200).json({
//     msg: 'Get all contacts',
//   });
// });

// body parser as json for req.body
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', contactRoute);
app.use('/api', userRoute);
app.use(errHandler);
