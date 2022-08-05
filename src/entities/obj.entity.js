class ObjEntity {
  constructor() {}

  static validadeObject(obj) {
    if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj)) {
      throw new Error('Empty object resquested');
    }
  }

  static validadeId(id) {
    if (!id || isNaN(id) || id < 0) {
      throw new Error('Invalid ID!');
    }
  }
}

module.exports = ObjEntity;
