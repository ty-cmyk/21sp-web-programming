
let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;

function setup () {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1, 3);

}

function draw () {
  background(200);
  drawShape();
  rectX += speed;
  noStroke();
  fill('red');
  if (rectX > width) {
    noLoop ();
    text('Your score was ' + clickCount, 100, 200);
  }
}
console.log(mousePressed);
function mousePressed () {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) { 
    
    clickCount++;
    console.log('hit', clickCount);
    
  }


}
function drawShape () {
  fill('orange');
  stroke('red');
  rect(rectX, rectY, rectWidth, rectHeight); 
}