

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(128,0,50);
  }
  
  function draw() {
    if (mouseIsPressed === true) {
      fill(0,0,90);
      stroke(0,200,0);
      strokeWeight(3)
      triangle(mouseX, 300, 300, mouseY, 300, 80);
    }
    
  }