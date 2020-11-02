'use strict';

/** 3rd party dependencies */
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')('mongoose');

/** Mongoose schema to model data for the products DB */
const products = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  inStock: { type: String, required: true },
});

module.exports = mongoose.model('products', products);