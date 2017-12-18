const Magic = (function () {
  const Vector = function (x, y) {
    this.x = x;
    this.y = y;
  };
  Vector.prototype.plus = function (newVector) {
    return {
      x: this.x + newVector.x,
      y: this.y + newVector.y,
    };
  };
  Vector.prototype.minus = function (newVector) {
    return {
      x: this.x - newVector.x,
      y: this.y - newVector.y,
    };
  };
  Vector.prototype.length = Math.sqrt((this.x ** 2) + (this.y ** 2));
  return {
    Vector,
  };
})();
const y = new Magic.Vector(3, 6);
console.log(y.plus(new Magic.Vector(5, -1)));
console.log(y.minus(new Magic.Vector(4, -10)));
console.log(new Magic.Vector(34, -8));

module.exports = Magic;
