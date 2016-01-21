describe('Stack Test', function() {
  var piStack;

  beforeEach(function() {
    module('pi.common');
  });

  beforeEach(inject(function(_piStack_) {
      piStack = _piStack_;
  }));

  it('should create new stack', function() {
    var stack = piStack.create();
    expect(stack).toBeDefined();
  });

  it('should create new stack, add and retrieve all elements', function() {
    var stack = piStack.create();
    stack.add('new-key', 'the-value');
    expect(stack.length()).toBe(1);
    expect(stack.get('new-key').value).toBe('the-value');
    // expect(stack.keys()).toBe(['new-key']);
  });
});
