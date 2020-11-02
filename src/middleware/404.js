'use strict';

/** Handles all error messages for routes that are not found/don't exist */
module.exports = (req, res, next) => {
  let obj = {
    message: '404 error, this resource is not found!',
  };
  res.status(404).json(obj);
};