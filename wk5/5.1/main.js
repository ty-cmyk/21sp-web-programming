//Timers

let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10;
const distance = 5;

function setup () {
  createCanvas(500, 500);
  background(0);
   
}

function drawBlock (x,y, color) {
  fill(color || '#B4DB3B')
  rect(x, y, 50, 50);
}

function keyTyped () {
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map (keyToNumber, 0, 9, 10, 255);
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
  

}
window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
    drawBlock(blockX, blockY, blockColor);
    blockY += distance;
    } else {
      blockY = 0;
      blockX += 50;
    }
    if (blockY - 0 > height && blockX - 0 > width) {
      //cancels draw timer
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 2000);

