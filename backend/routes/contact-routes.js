const express = require('express');
const router = express.Router();

const {
  createContact,
  getAllContacts,
  getContactsBasedonID,
  deleteContactsBasedonID,
  updateContactsBasedonID,
} = require('../controller/contact-controller');


router.get('/contacts', getAllContacts);

router.get('/contacts/:id', getContactsBasedonID);

router.put('/contacts/:id', updateContactsBasedonID);

router.delete('/contacts/:id', deleteContactsBasedonID);

router.post('/contacts', createContact);

module.exports = router;
