'use strict';

/** 3rd party dependencies */

/** Custom modules */
const Model = require('../mongo-collection.js');
const categoriesSchema = require('../categories/categories-schema.js');

/**
 * Class representing a new category.
 * @extends Model
 */
class Categories extends Model {

  /**
   * Takes in a category specific schema and passes it to the generic Model via super().
   * @constructor
   */
  constructor () {
    super(categoriesSchema);
  };

};

module.exports = Categories;