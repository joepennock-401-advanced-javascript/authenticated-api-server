'use strict';

module.exports = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`Recieved a ${req.method} request to route ${req.path} @ ${req.time}`);
  next();
};