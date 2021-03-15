const successHandler = (res, status, data) => {
  return res.status(status).json({
    status: 'success',
    data
  });
};
const errorHandler = (res, status, data) => {
  return res.status(status).json({
    status: 'error',
    data
  });
};

module.exports = {
  successHandler,
  errorHandler
}