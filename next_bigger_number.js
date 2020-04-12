// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger (n) {
  let arr = (n + '').split('');

  for (let i = arr.length - 2; i >= 0; i--) {
    let rest = arr.slice(i + 1, arr.length);
    rest.sort();

    for (let j = 0; j < rest.length; j++) {
      if (arr[i] < rest[j]) {
        let k = arr[i];
        arr[i] = rest[j];
        rest[j] = k;
        rest.sort();

        for (let z = 0; z < rest.length; z++) {
          arr[arr.length - 1 - z] = rest[rest.length - 1 - z];
        }

        return parseInt(arr.join(''));
      }
    }
  }

  return -1;
}

// TESTS
console.log(nextBigger(12) === 21)
console.log(nextBigger(513) === 531)
console.log(nextBigger(2017) === 2071)
console.log(nextBigger(414) === 441)
console.log(nextBigger(144) === 414)
console.log(nextBigger(8077893796) === 8077893967)
console.log(nextBigger(504351) === 504513)