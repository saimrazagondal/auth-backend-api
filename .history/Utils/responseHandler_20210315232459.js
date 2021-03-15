const successHandler = (status, data, res) => {
  res.status(status).json({
    status: 'success',
    data
  })
};
const errorHandler = (status, data, res) => {
  res.status(status).json({
    status: 'error',
    data
  })
};