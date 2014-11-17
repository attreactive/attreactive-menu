/**
 * AttrEactive Menu
 */

var Menu = require("./Menu");

function menuFactory(items) {
  return items.reduce(function(menu, item) {
    var url = item.url;
    var title = item.title;
    var childs = item.childs;
    var childMenu = childs ? menuFactory(childs) : null;

    delete item.url;
    delete item.title;
    delete item.childs;

    menu.addItem(url, title, item, childMenu);

    return menu;
  }, new Menu());
}

module.exports = menuFactory;
