const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let connString = getConnString(process.env.CONN_STRING);
    const conn = await mongoose.connect(connString);
    console.log('DB Connected', conn.connection.host, conn.connection.name);
  } catch (err) {
    console.log('ERR', err);
    process.exit(1);
  }
};

function getConnString(value) {
  let connString = value
    .replace('<DB_USER_NAME>', process.env.DB_USER_NAME)
    .replace('<DB_PASSWORD>', process.env.DB_PASSWORD)
    .replace('<DB_NAME>', process.env.DB_NAME);
  return connString;
}

module.exports = {
  connectDB,
};
