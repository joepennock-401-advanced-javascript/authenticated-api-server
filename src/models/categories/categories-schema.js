'use strict';

/** 3rd party dependencies */
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')('mongoose');

/** Mongoose schema to model data for categories DB */
const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('categories', categories);