const { successHandler, errorHandler } = require('../Utils/responseHandler');

const Login = (req, res) => {
  console.log(req.body);
  return successHandler(res, 200, null);
};

const Register = (req, res) => {
  console.log(req.body);
  return successHandler(res, 200, null);
};

const resetPassword = (req, res) => {
  console.log(req.body);
  return successHandler(res, 200, null);
};

const sendOtpEmail = (req, res) => {
  console.log(req.body);
  return successHandler(res, 200, null);
};

module.exports = {
  Login,
  Register,
  resetPassword,
  sendOtpEmail,
};
