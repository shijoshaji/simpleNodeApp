const asyncHandler = require('express-async-handler');
const { Error } = require('mongoose');

const Contact = require('../models/contact-models');

/**
 *
 * @desc Create Contacts
 * @route POST api/contacts
 * @access PUBLIC
 */
const createContact = asyncHandler(async (req, res) => {
  const { name, email, country } = req.body;
  if (!name || !email || !country) {
    res.status(400);
    throw new Error('All fields required');
  }
  const newContact = await Contact.create({
    name,
    email,
    country,
  });
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
  const contactList = await Contact.find();
  res.status(200).json({
    msg: ' Fetch all the contacts',
    data: contactList,
  });
});

/**
 *
 * @desc Get Contacts based on ID
 * @route GET api/contacts/:id
 * @access PUBLIC
 */
const getContactsBasedonID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('ID Not Found');
  }
  res.status(200).json({
    msg: ' Fetch contact based on id',
    data: contact,
  });
});

/**
 *
 * @desc Update Contacts based on ID
 * @route PUT api/contacts/:id
 * @access PUBLIC
 */
const updateContactsBasedonID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('ID Not Found');
  }

  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json({
    msg: ' Update contact based on id',
    data: updatedContact,
  });
});

/**
 *
 * @desc Delete Contacts based on ID
 * @route DELETE api/contacts/:id
 * @access PUBLIC
 */
const deleteContactsBasedonID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('ID Not Found');
  }
  await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json({
    msg: ' Delete contact based on id',
    data: contact,
  });
});

module.exports = {
  createContact,
  getAllContacts,
  getContactsBasedonID,
  updateContactsBasedonID,
  deleteContactsBasedonID,
};
