const successHandler = (res, status, data) => {
  res.status(status).json({
    status: 'success',
    data
  });
};
const errorHandler = (res, status, data) => {
  res.status(status).json({
    status: 'error',
    data
  });
};