describe('Settings Service Test', function() {
  var typeUtils,
      typeEnum;

  beforeEach(function() {
    module('pi.common');
  });

  beforeEach(inject(function(_typeUtils_, _typeEnum_) {
      typeUtils = _typeUtils_;
      typeEnum = _typeEnum_;
  }));

  it('should get type of string', function() {
    expect(typeUtils.typeOf('asd')).toBe(typeEnum.string);
  });

  it('should get type of number', function() {
    expect(typeUtils.typeOf(123)).toBe(typeEnum.int);
    expect(typeUtils.typeOf(123)).toBe(typeEnum.number);
    expect(typeUtils.typeOf(123.123)).toBe(typeEnum.decimal);
    expect(typeUtils.typeOf(123.123)).toBe(typeEnum.number);
  });

  it('should get type of boolean', function() {
    expect(typeUtils.typeOf(false)).toBe(typeEnum.bool);
    expect(typeUtils.typeOf(true)).toBe(typeEnum.bool);
  });

  it('should get type of object', function() {
    expect(typeUtils.typeOf({})).toBe(typeEnum.object);
    expect(typeUtils.typeOf({asd: 'asd'})).toBe(typeEnum.object);
  });

});
