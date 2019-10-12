const readline = require('readline');
const readlineFunc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0;
let dp = [];
let term = [];
let reward = [];

readlineFunc
.on('line', function (input) {
  input = Number(input);

  if (n===0) {
    n = input;
    
    for (let i=0; i<n; i++) dp.push(0)
    return;
  }

  if (term.length === reward.length) term.push(input)
  else reward.push(input)

  if (reward.length === n) {
    solve();
  }


})
.on('close', function () {
  console.log('close')
  process.exit();
});

let solve = () => {
  let result = 0;

  for (let i=0; i<n; i++) {
    for (let j=0; j<=i; j++) {
      dp[i] = Math.max(dp[i], dp[j])

      if (term[j]+j == i+1) {
        dp[i] = Math.max(dp[i], dp[j]+reward[j])
      }
    }

    result = Math.max(result, dp[i])
  }

  console.log(result)
}


