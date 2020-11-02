'use strict';

/** 3rd party dependencies */
const express = require('express');
const cors = require('cors');

/** Custom modules */
const authRouter = require('./auth/auth-router.js');
const apiRouter = require('./api/v1.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');

/** Create a new instance of express */
const app = express();

/** Global middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

/** Custom middleware */
app.use(logger); // Logs method used, route called and time.

/** Tell express to use custom routers */
app.use('/auth', authRouter);
app.use('/api/v1', apiRouter);

/** Generic test route to prove proper connection */
app.get('/', (req, res, next) => {
  res.send('hello');
});

/** Error handling routes */
app.use('*', notFound);
app.use(serverError);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, console.log('listening on', port))
  },
};