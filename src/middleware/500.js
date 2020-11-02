'use strict';

/** Will handle all error messages resulting from internal server side errors. */
module.exports = (err, req, res, next) => {
  let obj = {
    error: err,
    message: 'Internal sever error. All aboard the Struggle Bus!'
  };
  res.status(500).json(obj);
};