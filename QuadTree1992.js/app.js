const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let squareSideLength = 0;
let square = []
let inputLength = 0;

rl.on('line', function (input) {
  if (squareSideLength === 0) {
    squareSideLength = +input;
  } else {
    square[inputLength] = input;
    
    inputLength++;
    if (squareSideLength === inputLength) {
      let result = resolve(square);
      if (result.length === 1) {
        console.log(`(${result})`)
      } else {
        console.log(result)
      }
    }
  }
    
  })
  .on('close', function () {
    console.log('close')
    process.exit();
});

let resolve = (square) => {
  let length = square.length;
  loop: for (let x=0; x<length; x++) {
    for (let y=0; y<length; y++) {
      if (square[0][0] !== square[x][y]) {
        return `(${divideSqure(square)})`
        break loop;
      }
    }
  }
  return square[0][0]
}

function divideSqure(square) {
  let length = square.length;
  let benchmark = length/2;
  let tl=[], tr=[], bl=[], br=[], tree=[tl, tr, bl, br], result='';

  for (let i=0; i<benchmark; i++) {
    tl[i] = square[i].substr(0, benchmark);
    tr[i] = square[i].substr(benchmark, benchmark);
    bl[(benchmark-1)-i] = square[(length-1)-i].substr(0, benchmark);
    br[(benchmark-1)-i] = square[(length-1)-i].substr(benchmark, benchmark);
  }

  for (let t=0; t<tree.length; t++) {
    result += resolve(tree[t]);
  }
  return result;
}
