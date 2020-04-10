// https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
  let result = [];
  let skip = 0;
  const length = a.length > b.length ? a.length : b.length;

  for (let i = 1; i <= length; i++) {
    let sum = skip;
    sum += a[a.length - i] ? Number(a[a.length - i]) : 0;
    sum += b[b.length - i] ? Number(b[b.length - i]) : 0;

    if (sum > 9) {
      sum = sum - 10;
      skip = 1;
    } else skip = 0;

    result.unshift(String(sum));
  }

  if (skip === 1) result.unshift('1');
  return result.join('');
}

// TESTS
console.log(add("1", "1") === "2");
console.log(add("123", "456") === "579");
console.log(add("888", "222") === "1110");
console.log(add("1372", "69") === "1441");
console.log(add("12", "456") === "468");
console.log(add("101", "100") === "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089') === "91002328220491911630239667963");
