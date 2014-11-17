/**
 * AttrEactive Menu
 */
/* global afterEach beforeEach describe it jest pit xdescribe xit */
/* global expect */

jest.autoMockOff();

var Menu = require("../Menu");

describe('Menu', function() {
  it('should work', function() {
    var usersMenu = new Menu();
    usersMenu.addItem('/users/new', 'New user', {icon: 'user'}, null);

    var menu = new Menu();
    menu.addItem('/', 'Dashboard', {icon: 'file'}, null);
    menu.addItem('/users/', 'Users', {icon: 'users'}, usersMenu);

    expect(menu.compile('/')).toEqual([
      {url: '/', title: 'Dashboard', highlighted: true, childs: [], icon: 'file'},
      {url: '/users/', title: 'Users', highlighted: false, childs: [
        {url: '/users/new', title: 'New user', highlighted: false, childs: [], icon: 'user'}
      ], icon: 'users'}
    ]);

    expect(menu.compile('/users/')).toEqual([
      {url: '/', title: 'Dashboard', highlighted: false, childs: [], icon: 'file'},
      {url: '/users/', title: 'Users', highlighted: true, childs: [
        {url: '/users/new', title: 'New user', highlighted: false, childs: [], icon: 'user'}
      ], icon: 'users'}
    ]);

    expect(menu.compile('/users/new')).toEqual([
      {url: '/', title: 'Dashboard', highlighted: false, childs: [], icon: 'file'},
      {url: '/users/', title: 'Users', highlighted: true, childs: [
        {url: '/users/new', title: 'New user', highlighted: true, childs: [], icon: 'user'}
      ], icon: 'users'}
    ]);

    expect(menu.compile('/users/1')).toEqual([
      {url: '/', title: 'Dashboard', highlighted: false, childs: [], icon: 'file'},
      {url: '/users/', title: 'Users', highlighted: true, childs: [
        {url: '/users/new', title: 'New user', highlighted: false, childs: [], icon: 'user'}
      ], icon: 'users'}
    ]);
  });
});
