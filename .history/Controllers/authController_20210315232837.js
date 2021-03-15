// TODO
const { successHandler, errorHandler } = require('../Utils/responseHandler')

const Login = (req, res) => {
  console.log(req);
  return successHandler(res, 200, null)
}

module.exports = {
  Login
}