'use strict';

/** Class handling all of the logic regarding persisting data with MongoDB via Mongoose */
class Model {

  cosntructor(schema){
    this.schema = schema;
  };

  jsonSchema() {
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  };

  get(id){
    if (!id) {
      return this.schema.find({});
    }
    else {
      return this.schema.findById(id);
    };
  };

  post(record){
    let newRecord = new this.schema(record);
    return newRecord.save();
  };

  put(id, record){
    return this.schema.findByIdAndUpdate(id, record, { new: true });
  };

  delete(id){
    return this.schema.findByIdAndDelete(id);
  };

};

module.exports = Model;