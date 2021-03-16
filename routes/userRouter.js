const express = require('express');
const router = express.Router();
const {
  enableMFA,
  disableMFA,
  changePassword,
} = require('../Controllers/userController');

// update password for authenticated user
router.post('/changeUserPassword', changePassword);

// enable mfa
router.post('/enableMFA', enableMFA);

// disable mfa
router.post('/disableMFA', disableMFA);

module.exports = router;
