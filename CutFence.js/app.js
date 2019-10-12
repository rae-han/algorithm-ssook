const readline = require('readline');
const readlineFunc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let trialsCnt = 0;
let inputCnt = 0;
let fencesData = [];

readlineFunc
.on('line', function (input) {
  if (trialsCnt === 0) {
    trialsCnt = +input;
    fencesData.length = +input;
  } else { 
    if (fencesData[inputCnt] === undefined) {
      fencesData[inputCnt] = {
        width: +input,
        height: []
      }
    } else {
      fencesData[inputCnt].height = input.split(' ').map(Number);
      fencesData[inputCnt].height.length = fencesData[inputCnt].width;
      inputCnt++;
    }
    
    if(trialsCnt === inputCnt) {
      // fn = fences number
      for(let fn=0; fn < fencesData.length; fn++) {
        console.log(solve(fencesData[fn].height));
      }
    }
  }
})
.on('close', function () {
  console.log('close')
  process.exit();
});

let solve = (fence) => {
  if(fence.length === 1) {
    return fence[0];
  }

  
}
