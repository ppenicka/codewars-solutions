// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function rangeExtraction (list) {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    let k = 0;
    while (list[i+k] - list[i+k+1] === -1) k++;
    if (k > 1) {
      res.push(list[i] + '-' + list[i+k]);
      i=i+k;
    } else {
      res.push(list[i]);
    }
  }
  return res.toString();
}

// TESTS
console.log(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 24]) === "-6,-3-1,3-5,7-11,14,15,17-20,24");