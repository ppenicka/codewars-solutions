function bowlingScore(frames) {
  let score = 0;

  let framesArr = frames.split(' ');          // get array of frames
  for (let i = 0; i < 10; i++) {              // split frames into arrays of rolls
    framesArr[i] = framesArr[i].split('');
  }

  // first 9 frames
  for (let i = 0; i < 9; i++) {
    if (framesArr[i][0] === 'X') {            // strike
      score += 10;
      let next = framesArr[i+1][0];

      let nextnext;
      if (i === 8) nextnext = framesArr[i+1][1]
      else {
        if (next === 'X') nextnext = framesArr[i+2][0];
        else nextnext = framesArr[i+1][1];
      }

      if (nextnext === '/') score += 10;
      else {
        score += (next === 'X') ? 10 : parseInt(next);
        score += (nextnext === 'X') ? 10 : parseInt(nextnext);
      }
    } else if (framesArr[i][1] === '/') {     // spare
      score += 10;
      let next = framesArr[i+1][0];
      score += (next === 'X') ? 10 : parseInt(next);
    } else {                                  // regular scores
      score += parseInt(framesArr[i][0]);
      score += parseInt(framesArr[i][1]);
    }
  }

  // last frame
  for (let i = 0; i < framesArr[9].length; i++) {
    score += (framesArr[9][i] === 'X') ? 10 :
    (framesArr[9][i] === '/') ? (10 - framesArr[9][i-1]) : parseInt(framesArr[9][i]);
  }

  return score;
}


console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11') === 20);
console.log(bowlingScore('3/ 26 18 42 18 70 51 00 61 1/X') === 84);
console.log(bowlingScore('9/ 8/ 04 X 61 23 41 31 42 XX1') === 97);
console.log(bowlingScore('90 42 23 8/ 9/ 7/ X X 52 XXX') === 155);
console.log(bowlingScore('X X X X X X X X X XXX') === 300);