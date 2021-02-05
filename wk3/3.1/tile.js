function setup () {
    createCanvas(200, 200);
    
  }
  
  function createTile () {
    translate(0, 0,);
    fill('#B3FFE8');
    rect(0, 0, 200, 200);
    stroke('#94BF91');
    strokeWeight(5);
    line(0,0, 200, 200);
    line(200,0, 0, 200);
    line(0, 200, 100, 0);
    line(200, 200, 100, 0);
    line(0, 0, 100, 200);
    line(100, 200, 200, 0);
    noStroke();
    fill ('#BF6545');
    circle(100, 50, 25);
    circle(25, 100, 25);
    circle(175, 100, 25);
    circle(100, 150, 25);
    fill ('#608C5E');
    circle(55, 20, 15);
    circle(145, 20, 15);
    circle(55, 180, 15);
    circle(145, 180, 15);
    noFill();
    stroke('#FFC4B3');
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
    noStroke();
    createTile();
    
  }
  
  
  