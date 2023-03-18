const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter email'],
    },
    country: {
      type: String,
      required: [true, 'Please enter country'],
    },
  },
  {
    timestamps: true,
  }
);

// NOTE: 'contacts' - its the table name created in mongoDB
module.exports = mongoose.model('contacts', contactSchema);
