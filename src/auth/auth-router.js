'use strict';

/** 3rd party dependencies */
const express = require('express');

/** Custom modules */
const basicAuth = require('../auth/middleware/basic.js');
const bearerAuth = require('../auth/middleware/bearer.js');
const users = require('../auth/models/users-model.js');
const acl = require('./middleware/acl.js');

/** Create an instance of the express router module */
const router = express.Router();

/** Auth routes */
router.post('/signup', signup);
router.post('/signin', basicAuth, signin);

/** bearer auth test route */
router.get('/secret', bearerAuth, (req, res, next) => {
  res.status(200).send(`welcome, ${req.user.username}`);
});

/** bearer auth and acl test route */
router.get('/secretarea', bearerAuth, acl('create'), acl('update'), (req, res, next) => {
  console.log(req.token);
  res.status(200).send(`${req.user.username} is now in secretarea`);
});

 /** Auth route handlers */
 
async function signup(req, res, next){

  try{

    let obj = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    };

    console.log({obj});
    let record = new users(obj);
    let newUser = await record.save();
    let token = record.generateToken();

    res.set('auth', token);

    let userObj = {
      token: token,
      user: newUser,
    };
    
    res.status(200).json(userObj);

  } catch(err) {
    console.log(err);
  };

};

function signin(req, res, next){
  res.set('auth', req.token);
  let obj = {
    token: req.token,
    user: req.user,
  };
  
  res.status(200).json(obj);
};

module.exports = router;
