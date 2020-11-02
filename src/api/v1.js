'use strict';

/** 3rd party dependencies */
const express = require('express');

/** Custom modules */
const routeHandlers = require('./route-handlers.js');
const modelFinder = require('../middleware/model-finder.js');

/** Create a new instance of the express router */
const router = express.Router();
router.param('model', modelFinder.load);

/** API routes that work for all models */
// router.get('/:model', routeHandlers.getAll); // get all records from DB
// router.get('/:model/:id', routeHandlers.getOne); // get one record from DB by ID
router.post('/:model', routeHandlers.addRecord); // add one new record to DB
// router.put('/:model/:id', routeHandlers.updateRecord); // update one record in DB by ID
// router.delete('/:model/:id', routeHandlers.deleteRecord); // delete one record from DB by ID

router.get('/test', (req, res, next) => {
  res.status(200).send(`this thing on?`);
});

module.exports = router;