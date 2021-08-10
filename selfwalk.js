// Inspired by the work of Daniel Schiffman / The Coding Train.
//
// https://thecodingtrain.com/CodingChallenges/162-self-avoiding-walk.html
// Modifications done by me to original code.

let allAlternatives = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 }
];

function reset(){
  
    var canvas = createCanvas(400, 400);
  canvas.parent("selfWalker");
  cols = floor(width / spacing);
  rows = floor(height / spacing);
  x = cols / 2;
  y = rows / 2;
  background(51);

   var resetButton = createButton("reset");
  resetButton.position(0,0);
  resetButton.parent("selfWalker");
  resetButton.mousePressed(reset);
  
 /* var slowButton = createButton("slower");
  slowButton.position(50,0);
  slowButton.parent("selfWalker");
  resetButton.mousePressed(faster);
  
  var fasterButton = createButton("faster");
  fasterButton.position(110,0);
  fasterButton.parent("selfWalker");
  fasterButton.mousePressed(slower);
 */

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = false;
    }
  }
  grid[x][y] = true;
  
  
  
}


let x;
let y;

let grid;
let spacing = 15;
let cols, rows;
function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
 reset();
}

function isValid(i, j) {
  if (i < 0 || i >= cols || j < 0 || j >= rows) {
    return false;
  }
  return !grid[i][j];
}

function draw() {
  stroke(23, 255, 0);
  strokeWeight(spacing * 0.3);
  point(x * spacing, y * spacing);
  frameRate(10);

  let alternatives = [];
  for (let alternative of allAlternatives) {
    let newX = x + alternative.dx;
    let newY = y + alternative.dy;
    if (isValid(newX, newY)) {
      alternatives.push(alternative);
    }
  }

  if (alternatives.length > 0) {
    let step = random(alternatives);

    strokeWeight(2);
    stroke(23, 255, 0);
    beginShape();
    vertex(x * spacing, y * spacing);
    x += step.dx;
    y += step.dy;
    vertex(x * spacing, y * spacing);
    endShape();
    grid[x][y] = true;
  } else {
    console.log("Cannot move!");
  }
}
