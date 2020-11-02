'use strict';

/* TODO: Routes needed
  - CREATE a new record in a database, using the POST method on a custom API
  - GET ALL records in a database, using the GET method on a custom API
    - return an object containing count, and a results[] array
  - GET ONE using the GET method with an ID parameter on a custom API
  - UPDATE using the PUT and PATCH methods with an ID parameter on a custom API
  As a developer, I want the API to return the record I updated in JSON format
  - DELETE an existing record with DELETE method with an ID parameter on a custom API
*/

/** 3rd party dependencies */

/** Custom modules */
const mongoCollection = require('../models/mongo-collection.js');

/** API route handlers */

const routeHandlers = {};

routeHandlers.getAll = async (req, res, next) => {

  try{
    req.model.get();
  }
  catch(err) {
    console.log(err.message);
    next('can\'t get all');
  };

};

routeHandlers.getOne = async (req, res, next) => {

  try{

  }
  catch(err) {

  };

};

routeHandlers.addRecord = async (req, res, next) => {
  console.log(req.model);
  try{
    let record = await req.model.post(req.body);
    console.log({record});
    res.status(201).json(record);
  }
  catch(err) {
    console.log(err.message);
    next('can\'t post new record');
  };

};

routeHandlers.updateRecord = async (req, res, next) => {

  try{

  }
  catch(err) {

  };

};

routeHandlers.deleteRecord = async (req, res, next) => {

  try{

  }
  catch(err) {

  };

};

module.exports = routeHandlers;