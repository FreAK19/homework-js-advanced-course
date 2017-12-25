'use strict';

/**
 * @param {String} name - name of character
 */

class Character {
  constructor(name) {
    this.name = name;
    this.hp = 100;
  }

  greet() {
    console.log('Приветствую!')
  }
}


/**
 * @param {String} name - name of character
 * @param {String} weapon - weapon of character
 */

class Warrior extends Character {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
    this.stamina = 100;
  }

  attack(person) {
    const damage = Math.floor(Math.random() * 10);

    person.hp -= damage;
    person.stamina -= 10;

    return damage;
  }
}


/**
 * Knight extended from Warrior function
 * @param {String} name - name of character
 * @param {String} weapon - weapon of character
 */

class Knight extends Warrior {
  constructor(name, weapon) {
    super(name, weapon);
    this.mp = 100;
  }

  heal(person) {
    const heal = Math.floor(Math.random() * 10);

    person.hp += heal;
    person.mp -= 10;

    return heal;
  }
}

module.exports = {
  Character,
  Warrior,
  Knight
};