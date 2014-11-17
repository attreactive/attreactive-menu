/**
 * AttrEactive Menu
 */
/* global afterEach beforeEach describe it jest pit xdescribe xit */
/* global expect */

jest.autoMockOff();

var menuFactory = require("../menuFactory");

describe('Menu', function() {
  it('should work', function() {
    var menu = menuFactory([
      {url: '/', title: 'Dashboard', icon: 'file'},
      {url: '/users/', title: 'Users', childs: [
        {url: '/users/new', title: 'New user', icon: 'user'}
      ], icon: 'users'}
    ]);

    expect(menu.compile('/')).toEqual([
      {url: '/', title: 'Dashboard', highlighted: true, childs: [], icon: 'file'},
      {url: '/users/', title: 'Users', highlighted: false, childs: [
        {url: '/users/new', title: 'New user', highlighted: false, childs: [], icon: 'user'}
      ], icon: 'users'}
    ]);
  });
});
