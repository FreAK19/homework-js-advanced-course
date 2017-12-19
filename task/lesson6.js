/*
*  Task lesson 6
*  Create polyfill function for remove, after, before and replaceWith new method
* */

const remove = function (elem) {
  return elem.parentElement.removeChild(elem);
};

const after = function (elem, node) {
  elem.insertAdjacentElement('afterend', node);
};

const before = function (elem, node) {
  elem.insertAdjacentElement('beforebegin', node);
};

const replaceWith = function (elem, replacer) {
  elem.parentNode.replaceChild(elem, replacer);
};
