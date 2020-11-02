'use strict';

/** 3rd party depencencies */

/** Custom modules */
const Model = require('../mongo-collection.js');
const productSchema = require('../products/products-schema.js');

/**
 * Class representing a new product.
 * @extends Model
 */
class Product extends Model {

  /**
   * Takes in a product specific schema and passes it to the generic Model class via super().
   * @constructor
   */
  constructor () {
    super(productSchema);
  };

};

module.exports = Product;