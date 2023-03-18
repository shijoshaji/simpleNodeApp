const asyncHandler = require('express-async-handler')

/**
 *
 * @desc Create Contacts
 * @route POST api/contacts
 * @access PUBLIC
 */
const createContact = asyncHandler(async (req, res) => {
  const { name, email, country } = req.body;
  console.log('lol', name, email, country);
  if (!name || !email || !country) {
    res.status(400);
    throw new Error('All fields required');
  }
  res.status(201).json({
    msg: 'Contact Created',
    data: req.body,
  });
});

/**
 *
 * @desc Get All Contacts
 * @route GET api/contacts
 * @access PUBLIC
 */
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: ' Fetch all the contacts',
  });
});

/**
 *
 * @desc Get Contacts based on ID
 * @route GET api/contacts/:id
 * @access PUBLIC
 */
const getContactsBasedonID = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: ' Fetch contact based on id',
  });
});

/**
 *
 * @desc Update Contacts based on ID
 * @route PUT api/contacts/:id
 * @access PUBLIC
 */
const updateContactsBasedonID = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: ' Update contact based on id',
  });
});

/**
 *
 * @desc Delete Contacts based on ID
 * @route DELETE api/contacts/:id
 * @access PUBLIC
 */
const deleteContactsBasedonID = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: ' Delete contact based on id',
  });
});

module.exports = {
  createContact,
  getAllContacts,
  getContactsBasedonID,
  updateContactsBasedonID,
  deleteContactsBasedonID,
};
