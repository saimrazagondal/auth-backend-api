const successHandler = (status, data, res) => {
  res.status(status).json({
    status: 'success',
    data
  })
}