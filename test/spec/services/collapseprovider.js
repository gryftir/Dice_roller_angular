'use strict';

describe('Service: CollapseProvider', function () {

  // load the service's module
  beforeEach(module('Collapse'));

  // instantiate service
  var CollapseProvider;
  beforeEach(inject(function (_CollapseProvider_) {
    CollapseProvider = _CollapseProvider_;
  }));

  it('should do something', function () {
    expect(!!CollapseProvider).toBe(true);
  });

});
