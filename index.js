'use strict';

/** 3rd party dependencies */
require('dotenv').config();
const server = require('./src/server.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

server.start(process.env.PORT);