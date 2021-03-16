const { successHandler, errorHandler } = require('../Utils/responseHandler');

const changePassword = (req, res) => {
  console.log(req.body);
  return successHandler(res, 200, null);
};

const enableMFA = (req, res) => {
  console.log(req.body);
  return successHandler(res, 200, null);
};

const disableMFA = (req, res) => {
  console.log(req.body);
  return successHandler(res, 200, null);
};

module.exports = {
  changePassword,
  enableMFA,
  disableMFA,
};
