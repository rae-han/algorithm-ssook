// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

let e={ x: 1, y: 0 }, w={ x: -1, y: 0 }, s={ x: 0, y: 1}, n={ x: 0, y: -1 };


let row=4, col=6;
let map=['101111', '101010', '101011', '111011'];
// let map=['110110', '110110', '111111', '111101'];

// rl.on('line', function (input) {
      
//   })
//   .on('close', function () {
//     console.log('close')
//     process.exit();
//   });

let solveBFS = (check, location) => {
  console.log(map)
  console.log(check, location)

  if((location.x+1) == col && (location.y+1) == row) {
    console.log(`########  ######## ########  ########`)
    console.log(`#`)
    console.log(`# Get out of the maz! ${location.distance}`);
    console.log(`#`)
    console.log(`########  ######## ########  ########`)
    return;
  }

  if(location.y+1 == row) {
    return;
  }

  console.log('solving')

  // if ((location.x+1) != col && check[location.y][location.x+1] != 1 && map[location.y][location.x+1] == 1) {
  //   console.log('east')
  //   location.x++;
  //   location.distance++;
  //   check[location.y][location.x] = 1;
  //   solveBFS(check, location);
  // }

  // if(location.x != 0 && check[location.y][location.x-1] != 1 && map[location.y][location.x-1] == 1) {
  //   console.log('west')
  //   location.x--;
  //   location.distance++;
  //   check[location.y][location.x] = 1;
  //   solveBFS(check, location);
  // }

  if((location.y+1) != row && check[location.y+1][location.x] != 1 && map[location.y+1][location.x] == 1) {
    console.log('south')
    location.y++;
    location.distance++;
    console.log(check)
    console.log(check[location.y][location.x])
    check[location.y][location.x] = '1';
    solveBFS(check, location);
  }

  // if(location.y != 0 && check[location.y-1][location.x] != 1 && map[location.y-1][location.x] == 1) {
  //   console.log('north')
  //   location.y--;
  //   location.distance++;
  //   check[location.y][location.x] =1;
  //   solveBFS(check, location)
  // }
}

let BFSAlgorithm = () => {
  let check = [];
  let location = { x: 0, y: 0, distance: 1 }

  check.length = row;
  for (let r=0; r<row; r++) {
    check[r] = [];
    for (let c=0; c<col; c++) {
      check[r].push('0')
    }
    check[r] = check[r].join('');
  }

  solveBFS(check, location);  
}

BFSAlgorithm();
