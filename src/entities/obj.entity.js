const { ObjectId } = require('mongoose').Types;

class ObjEntity {
  constructor() {}

  static validadeObject(obj) {
    if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj))
      throw { name: 'ValidationError', message: 'Object is empty!' };

    if (obj === null || obj === undefined)
      throw { name: 'ValidationError', message: 'Object null or undefined!' };
  }

  static validadeId(id) {
    if (!id) throw { name: 'ValidationError', message: 'ID is required!' };

    if (!ObjectId.isValid(id))
      throw { name: 'ValidationError', message: 'Invalid ID!' };
  }
}

module.exports = { ObjEntity };
