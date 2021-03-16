const express = require('express');
const router = express.Router();
const {
  Login,
  Register,
  resetPassword,
  sendOtpEmail,
} = require('../Controllers/authController');

/**
 * @param email
 * @param password
 */
router.post('/login', Login);

/**
 * @param firstName
 * @param lastName
 * @param DOB
 * @param email
 * @param password
 */
router.post('/register', Register);

/**
 * @param email
 * @param code
 * @param password
 */
router.post('/resetPassword', resetPassword);

/**
 * @param email
 */
router.post('/sendOtpEmail', sendOtpEmail);

// Params: TO BE DISCUSSED
// This api will confirm a users account by setting verified status to true
router.post('/verifyAccount', (req, res) => {
  console.log(req.body);
  res.json({ message: 'success' });
});

/** *****************************************   FUTURE APIS   ****************************************** */

/**
 * Sign in with google
 * Sign in with facebook
 * Register with google
 * Register with facebook
 *  */

module.exports = router;
