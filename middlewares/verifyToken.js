function verifyToken(req, res, next) {
  console.log('checking token...');
  next();
}

module.exports = {
  verifyToken,
};
