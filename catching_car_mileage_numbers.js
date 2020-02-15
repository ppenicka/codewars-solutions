// Solution to the kata at: https://www.codewars.com/kata/52c4dd683bfd3b434c000292

function isInteresting(number, awesomePhrases) {
  if (isInterestingBoolean(number, awesomePhrases)) {
    return 2;
  } else if (isInterestingBoolean(number + 1, awesomePhrases) || isInterestingBoolean(number + 2, awesomePhrases)) {
    return 1;
  } else {
    return 0;
  }
}

function isInterestingBoolean(number, awesomePhrases) {
  if (number < 100) {
    return false;
  } else if (awesomePhrases.indexOf(number) !== -1) {
    return true;
  } else if (/\b[1-9]0+\b/.test(number.toString())) {
    return true;
  } else if (/\b(0+|1+|2+|3+|4+|5+|6+|7+|8+|9+)\b/.test(number.toString())) {
    return true;
  } else if (isIncrementing(number) || isDecrementing(number) || isPalindrome(number)) {
    return true;
  } else {
    return false;
  }
}

function isIncrementing(number) {
  let arr = number.toString().split('');

  for (let i = 0; i < arr.length - 1; i++) {
    if (!((arr[i] - arr[i+1] === -1) || (arr[i] === '9' && arr[i+1] === '0'))) {
      return false;
    }
  }

  return true;
}

function isDecrementing(number) {
  let arr = number.toString().split('');

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] - arr[i+1] !== 1) {
      return false;
    }
  }

  return true;
}

function isPalindrome(number) {
  let arr = number.toString().split('');

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isInteresting(3, [1337, 256]));
console.log(isInteresting(1336, [1337, 256]));
console.log(isInteresting(1337, [1337, 256]));
console.log(isInteresting(11208, [1337, 256]));
console.log(isInteresting(11209, [1337, 256]));
console.log(isInteresting(11211, [1337, 256]));
console.log(isInteresting(10000, [1337, 256]));
console.log(isInteresting(88888, [1337, 256]));
console.log(isInteresting(67890, [1337, 256]));
console.log(isInteresting(122, [1337, 256]));
console.log(isInteresting(67890, [1337, 256]));
