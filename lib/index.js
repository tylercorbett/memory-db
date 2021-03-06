const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  create(obj) {
    const _id = shortid.generate();
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }
  findById(_id) {
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    return obj;
  }
  find() {
    const all = this.store;
    return Object.values(all);
  }
  findByIdAndUpdate(_id, newItem) {
    this.store[_id] = newItem;
    const item = this.store[_id];
    if(!item) {
      throw 'No Item Id';
    }
    return item;
  }
  findByIdAndDelete(_id) {
    delete this.store[_id];
    return { deleted: 1 };
  }
  drop() {
    this.store = {};
  }
}
  
  
module.exports = MemoryDatabase;
  
