'use strict';

module.exports = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`Recieved a ${req.method} request to route ${req.path} @ ${timestamp}`);
  next();
};