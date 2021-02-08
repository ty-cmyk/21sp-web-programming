let rotateBy = 5;
let r, g, b;

function setup() {
  createCanvas(800, 800);
  background(240);
  r = random(255);
  g = random(255);
  b = random(255);
  angleMode(DEGREES);
}
//Make Rotation
function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360);
  console.log(alt);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 0);
  ellipse(100, 400 + alt, 100, 300 * alt);
}

// Drawing function
function draw() {
  //Circle Button
  stroke(r, g, b);
  strokeWeight(2);
  fill(r, g, b, 10);
  circle (400, 400, 50);
  //Interaction
  if (mouseIsPressed === true) {
  translate (400, 400);
  rotate(rotateBy);
  makeArm(rotateBy);
  rotateBy +=5;
  }
}
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
  
}