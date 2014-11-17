/**
 * AttrEactive Menu
 */

var cls = require("cls");

var Menu = cls.extend({
  init: function() {
    this._items = [];
  },

  addItem: function(url, title, meta, childMenu) {
    this._items.push({
      url: url,
      title: title,
      meta: meta || {},
      childMenu: childMenu
    });
  },

  compile: function(location) {
    return this._items.map(function(item) {
      var childs = item.childMenu ? item.childMenu.compile(location) : [];

      var compiledItem = Object.keys(item.meta).reduce(function(compiledItem, key) {
        compiledItem[key] = item.meta[key];
        return compiledItem;
      }, {});

      compiledItem.url = item.url;
      compiledItem.title = item.title;
      compiledItem.highlighted = this._isHighlighted(location, item, childs);
      compiledItem.childs = childs;

      return compiledItem;
    }, this);
  },

  _isHighlighted: function(location, item, childs) {
    if (item.url == location) {
      return true;
    }

    if (item.url != '/' && location.indexOf(item.url) === 0) {
      return true;
    }

    return childs.some(function(child) {
      return child.highlighted;
    });
  }
});

module.exports = Menu;
