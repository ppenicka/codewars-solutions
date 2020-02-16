// https://www.codewars.com/kata/53583765d5493bfdf5001b35

var Cat = (function () {
  let _totalWeight = 0;
  let _averageWeight = 0;
  let _numberOfCats = 0;

  let Cat = function (name, weight) {
    if (name === undefined || weight === undefined) {
      throw new Error('Please provide both name and weight arguments to the constructor.')
    } else {
      let _name = name;
      let _weight = weight;
      _numberOfCats++;
      _totalWeight += weight;
      _averageWeight = _totalWeight / _numberOfCats;

      Object.defineProperty(this, 'name', {
        get () {return _name;},
        set (newValue) {
          _name = newValue;
        },
        enumerable: true,
        configurable: true
      })

      Object.defineProperty(this, 'weight', {
        get () {return _weight;},
        set (newValue) {
          _totalWeight = _totalWeight - _weight + newValue;
          _averageWeight = _totalWeight / _numberOfCats;
          _weight = newValue;
        },
        enumerable: true,
        configurable: true
        });
    }
  }

  Cat.averageWeight = function () {
    return _averageWeight;
  }

  return Cat;
 }());

let fluffy = new Cat('fluffy', 15);
let garfield = new Cat('garfield', 25);

console.log(fluffy.weight === 15);
console.log(fluffy instanceof Cat === true);
console.log(fluffy.averageWeight === undefined);
console.log(typeof Cat.averageWeight === "function");
console.log(Cat.averageWeight() === 20);