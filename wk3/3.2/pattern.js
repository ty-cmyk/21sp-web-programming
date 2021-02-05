
function setup () {
  createCanvas(600, 600);
  
}
  
  function createTile (originX, originY, primaryColor, mainLineColor, lCircleFill, sCircleFill, secondLineColor) {
    translate(originX, originY,);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(mainLineColor);
    strokeWeight(5);
    line(0,0, 200, 200);
    line(200,0, 0, 200);
    line(0, 200, 100, 0);
    line(200, 200, 100, 0);
    line(0, 0, 100, 200);
    line(100, 200, 200, 0);
    noStroke();
    fill (lCircleFill);
    circle(100, 50, 25);
    circle(25, 100, 25);
    circle(175, 100, 25);
    circle(100, 150, 25);
    fill (sCircleFill);
    circle(55, 20, 15);
    circle(145, 20, 15);
    circle(55, 180, 15);
    circle(145, 180, 15);
    noFill();
    stroke(secondLineColor);
    strokeWeight(5);
    beginShape(LINES);
    
    vertex(25, 100);
    vertex(100, 50);
    
    vertex(100, 50);
    vertex(175, 100);
    
    vertex(175, 100);
    vertex(100, 150);
    
    vertex(100, 150);
    vertex(25, 100);
    
    endShape();
    
  }
  
  function draw () {
    //first column
    noStroke();
    createTile(0, 0, '#B3FFE8', '#94BF91', '#BF6545', '#608C5E', '#FFC4B3');
    
    noStroke();
    createTile(0, 200, '#B3FFE8', '#608C5E', '#BF6545', '#B37B6B', '#F4EAE9');
    
    noStroke();
    createTile(0, 200, '#B3FFE8', '#94BF91', '#BF6545', '#608C5E', '#FFC4B3');
    //2nd column
    noStroke();
    createTile(200, -400, '#B3FFE8', '#608C5E', '#BF6545', '#B37B6B', '#F4EAE9');
    
    noStroke();
    createTile(0, 200, '#B3FFE8', '#94BF91', '#BF6545', '#608C5E', '#FFC4B3');
    
    noStroke();
    createTile(0, 200, '#B3FFE8', '#608C5E', '#BF6545', '#B37B6B', '#F4EAE9');
    //3rd column
    noStroke();
    createTile(200, -400, '#B3FFE8', '#94BF91', '#BF6545', '#608C5E', '#FFC4B3');
    
    noStroke();
    createTile(0, 200, '#B3FFE8', '#608C5E', '#BF6545', '#B37B6B', '#F4EAE9');
    
    noStroke();
    createTile(0, 200, '#B3FFE8', '#94BF91', '#BF6545', '#608C5E', '#FFC4B3');
    
  }
  
  
  