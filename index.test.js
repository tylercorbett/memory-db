const MemoryDatabase = require('./index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });
  it('creates an object in the databse', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });
  it('can find an object by id', () => {
    const cat = { _id: 123, name: 'fluffy' };
    const createdCat = db.create(cat);
    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });
  it('throws an error when trying to find an object that does not exist', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });
  it('can return every object in the store', () => {
    const obj1 = { name: 'foo' };
    const obj2 = { name: 'bar' };
    const createOBj1 = db.create(obj1);
    const createOBj2 = db.create(obj2);


    const foundObjs = db.find();

    expect(foundObjs[0].name).toEqual('foo');
  });
});
