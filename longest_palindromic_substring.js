// https://www.codewars.com/kata/5dcde0b9fcb0d100349cb5c0

function longest_palindrome (s) {
  let arr = s.split('');

  for (let i = 0; i <= arr.length; i+=2) {
    arr.splice(i, 0, '|');
  }

  let centerIndex = 0;
  let leftIndex = 0;
  let rightIndex = 0;
  let expansionAtIndex = [0];

  for (let i = 0; i < arr.length; i++) {
    console.log("functionlongest_palindrome -> expansionAtIndex", expansionAtIndex)

    let expansion = 0;
    expansionAtIndex[i] = 0;

    if (i <= rightIndex) {
      let mirrorIndex = 2*centerIndex - rightIndex;
      if (mirrorIndex - expansionAtIndex[mirrorIndex] >= leftIndex) {
        expansion = expansionAtIndex[mirrorIndex];
        expansionAtIndex[i] = expansion;
      } else {
        expansion = rightIndex - i;
        expansionAtIndex[i] = expansion;
      }
    }

    while ((i - expansion >= 0) && (i + expansion < arr.length)) {
      if (arr[i - expansion] === arr[i + expansion]) {
        if (expansionAtIndex[centerIndex] < expansion) {
          centerIndex = i;
          leftIndex = i - expansion;
          rightIndex = i + expansion;
          expansionAtIndex[i] = expansion;
        }
        expansion ++;
      } else break
    }
  }

  return arr.slice(leftIndex, rightIndex+1)
            .filter(item => item !== '|')
            .join('');
}



// TESTS
// console.log(longest_palindrome('babad') === 'bab');
// console.log(longest_palindrome('madam') === 'madam');
// console.log(longest_palindrome('dde') === 'dd');
// console.log(longest_palindrome('ababbab') === 'babbab');
// console.log(longest_palindrome('abababa') === 'abababa');
// console.log(longest_palindrome('banana') === 'anana');
// console.log(longest_palindrome('abba') === 'abba');
// console.log(longest_palindrome('cbbd') === 'bb');
// console.log(longest_palindrome('zz') === 'zz');
// console.log(longest_palindrome('dddd') === 'dddd');
// console.log(longest_palindrome('') === '');
console.log(longest_palindrome('yytyyffyfftyyyytffyfyfyyftfyfftffttyfyyyfftfffttyftttttftyfttytftytytyfftfftttffffyttytfttttytyyftyftffytfttfftfyytyytftttfffffyyyfyttyffyytttftftftfftyfyyytftyyffyffytyttytyytyyffffytfttyyyffttytttyfyyyffyffftyyyfttttyfyytyyfytyfttffyytyffftttfftffyftttyftffyfffyttttfyyffyffyfytffttttfyftfyyyfftfyttfffttyyttfytfffftyyfttytfttyfyfyfftfytffffttfytyfttyttyytttftyfyyyyyfyytytyttftfyftfttty') === 'ttyytyytt');
