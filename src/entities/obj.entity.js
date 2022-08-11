const mongoose = require('mongoose');

class ObjEntity {
  constructor() {}

  static validadeObject(obj) {
    if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj)) {
      throw new Error('Empty Team Object');
    }
    if (obj === null || obj === undefined) {
      throw new Error('Team not found!');
    }
  }

  static validadeId(id) {
    if (!id) {
      throw new Error('ID is required!');
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID!');
    }
  }
}

module.exports = ObjEntity;
