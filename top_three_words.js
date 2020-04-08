// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords (text) {
  let res = [];
  let map = {};

  let split = text.match(/\b[\w']+\b/g);

  if (split) {
    for (let word of split) {
      const key = word.toLowerCase();
      if (map.hasOwnProperty(key)) {
        map[key] = map[key] + 1;
      } else {
        map[key] = 1;
      }
    }
  }

  let sortable = [];
  for (let word in map) {
    sortable.push([word, map[word]]);
  }

  sortable.sort((a, b) => {
    if (a[1] < b[1]) return 1
    if (a[1] > b[1]) return -1
    if (a[1] === b[1]) return 0
  })

  for (let i = 0; i < 3; i++) {
    if (sortable[i]) {
      res.push(sortable[i][0]);
    }
  }

  return res;
}


// TESTS
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ['e', 'd', 'a']
console.log(topThreeWords("a a c b b")); // ['a', 'b', 'c']
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ['e', 'ddd', 'aa']
console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"]
console.log(topThreeWords("  , e   .. ")); // ["e"]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []
console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`)); // ['a', 'of', 'on']