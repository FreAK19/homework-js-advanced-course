'use strict';

const utils = require('./index');

/**
 * @param {String} name - name of character
 */

function Character(name) {
  this.name = name;
  this.hp = 100;
}

Character.prototype.greet = function() {
  console.log('Приветствую!')
};


/**
 * @param {String} name - name of character
 * @param {String} weapon - weapon of character
 */

function Warrior(name, weapon) {
  Character.call(this, name);
  this.weapon = weapon;
  this.stamina = 100;
}

utils.extend(Warrior, Character);

Warrior.prototype.attack = function(person) {
  const damage = Math.floor(Math.random() * 10);

  person.hp -= damage;
  person.stamina -= 10;

  return damage;
};


/**
 * Knight extended from Warrior function
 * @param {String} name - name of character
 * @param {String} weapon - weapon of character
 */

function Knight(name, weapon) {
  Warrior.call(this, name, weapon);
  this.mp = 100;
}

utils.extend(Knight, Warrior);

Knight.prototype.heal = function(person) {
  const heal = Math.floor(Math.random() * 10);

  person.hp += heal;
  person.mp -= 10;

  return heal;
};

module.exports = {
  Character,
  Warrior,
  Knight
};