/*
*  Tasks for lesson10
* */

/**
 * Carry out all props (exclude prototype properties) from objects `sources` in object `target`
 * @param {Object} target - target object which will take all props
 * @param {...Object} sources - origin objects
 */

function mixin(target, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(sources[i]))
  }
  return target;
}

//  const obj1 = {name: 'Andrew'};
//  const obj2 = Object.create(obj1, {
//    age: {value: 20, enumerable: true}
//  });
//  console.log(obj2.name);
//  console.log(mixin({}, obj2));

module.exports = {
  extend,
  mixin
};
/**
 * Inheritance between two functions
 * @param {Function} Subclass - child function
 * @param {Function} Superclass - parent function
 */

function extend(Subclass, Superclass) {
  Subclass.prototype = Object.create(Superclass.prototype);
  Superclass.prototype.constructor = Superclass;
}

