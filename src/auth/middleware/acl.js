'use strict';

module.exports = (capability) => {

  return (req, res, next) => {
    // Does the user have capability
    if (req.user.hasRole(capability)) {
      next();
    }
    else {
      next('You do not have the required role to do this.')
    };
  };

};