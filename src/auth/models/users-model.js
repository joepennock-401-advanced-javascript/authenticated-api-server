'use strict';

/** 3rd party dependencies */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/** Mongoose schema to model data for users DB */
const users = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'guest', enum: ['guest', 'author', 'editor', 'admin'] }
});

const roles = {
  guest: ['read'],
  author: ['read', 'create'],
  editor: ['read', 'update', 'delete'],
  admin: ['read', 'create', 'update', 'delete'],
};

users.pre('save', async function () {
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
});

users.methods.hasRole = function (capability) {
  return roles[this.role].includes(capability);
};

users.methods.generateToken = function () {
  let obj = {
    username: this.username,
    role: this.role,
    permissions: roles[this.role],
  };
  let token = jwt.sign(obj, process.env.SECRET);
  return token;
};

users.statics.validateBasic = async function (un, pw) {
  let user = await this.findOne({ username: un });
  let isValid = await bcrypt.compare(pw, user.password);

  if (isValid) {
    return user; 
  }
  else {
    return undefined; 
  };
};

users.statics.validateToken = async function (token) {
  try{
    const parsedToken = jwt.verify(token, process.env.SECRET);
    const user = this.findOne({ username: parsedToken.username });
    return user;
  }
  catch(err) {
    throw new Error(err.message);
  };
};

module.exports = mongoose.model('users', users);