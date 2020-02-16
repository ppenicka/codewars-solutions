// https://www.codewars.com/kata/551e467e24b7a4e0b20001e8

let Point = (function () {
  let inside = false;

  let Point = function (x, y) {
      if (!inside) {
         throw new Error('Constructor cannot be called directly. Use Point.create(x, y) instead.');
      }

      inside = false;
      this.x = x;
      this.y = y;
  };

  Point.create = function (x, y) {
      inside = true;
      return new Point(x, y);
  };

  return Point;
})();


// TESTS
var pt = Point.create(0, 0);
console.log(pt.x === 0);
console.log(pt.y === 0);
console.log(pt instanceof Point);
