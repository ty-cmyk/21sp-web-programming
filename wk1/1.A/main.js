let stroke1 = prompt("enter a basic color name in lowercase", "purple")
let stroke2 = prompt("enter another basic color in lowercase", "teal")
function setup() {
  createCanvas(1000, 800);
}

function draw() {
    background("#80BDFF");
    
    //ground
    fill("#f1f1f1");
    stroke("#ccc");
    strokeWeight(10);
    quad (-5,600,1010,575,1010, 810, -5, 810);
    
    //shadow
    fill("#e3e3e3");
    noStroke();
    ellipse(250, 700, 300, 100)

    //tree
  
    fill("#4C413B");
    stroke("#333");
    strokeWeight(5);
    strokeJoin(ROUND);
    triangle(625, 400, 650, 600, 600, 600);
    
  
    fill("#284939");
    stroke("#284939")
    strokeWeight(5);
    strokeJoin(ROUND);
    triangle(625, 50, 750, 300, 500, 300);
    triangle(625, 100, 770, 500, 480, 500);
    
    //tree shadow
    fill("#e3e3e3");
    stroke("#e3e3e3")
    strokeWeight(5);
    strokeJoin(ROUND);
    triangle(955, 650, 650, 605, 600, 605);
    triangle(2000, 900, 750, 670, 850, 600);
  
    //body
    fill("#f1f1f1");
    stroke("#ccc");
    strokeWeight(10);
    ellipse(250, 600, 250, 240);
    ellipse(250, 440, 180);
    ellipse(250, 280, 170);
  
    // carrot nose
    fill("#ff780f")
    stroke("#ffa500");
    strokeWeight(5);
    strokeJoin(ROUND);
    triangle(245, 300, 240, 270, 140, 310);
  
    //hat
    //brim
      stroke(stroke2);
      strokeWeight(25);
      strokeJoin(ROUND);
      line(150,202,350,212)
    //top
      fill("#098")
      stroke(stroke2);
      strokeWeight(15);
      quad(190, 90, 340, 100, 315, 200, 195, 193)
  
  //eyebrows
    noFill();
    stroke("#F9C0FF");
    strokeWeight(15);
    arc(211, 236, 30, 10, PI, TWO_PI);
    arc(275, 241, 30, 10, PI, TWO_PI);
  
    noFill();
    stroke("#666");
    strokeWeight(2);
    arc(211, 230, 35, 15, PI, TWO_PI);
    arc(275, 235, 35, 15, PI, TWO_PI);
  
    //eyes
    fill("#fff")
    stroke("#999");
    strokeWeight(2);
    ellipse(210, 250, 28);
    ellipse(275, 255, 28);
    
    //pupils
    fill("#333")
    noStroke()
    ellipse(212, 252, 25);
    ellipse(276, 257, 25);
  
    fill("#000")
    noStroke()
    ellipse(212, 252, 15);
    ellipse(276, 257, 15);
    
  
    //highlights
    fill("#d8d8d8")
    noStroke();
    ellipse(275, 254, 5);
    ellipse(212, 249, 5);
  
    //mouth
    fill("#FFE1ED")
    ellipse(298, 285, 35);
    fill(stroke1)
    noStroke()
    ellipse(212, 322, 13);
    ellipse(236, 327, 15);
    ellipse(260, 325, 18);
    ellipse(286, 315, 20);
  
    //scarf
    stroke(stroke2);
    strokeWeight(60);
    line(180,370,310,368)
  
    //buttons
    fill(stroke1)
    noStroke()
    ellipse(250, 415, 20);
    ellipse(250, 455, 20);
    ellipse(250, 495, 20);
  
    //arms
      //left
        strokeWeight(10);
        stroke("#333");
        beginShape(LINES);
        vertex(170, 420);
        vertex(100, 450);
        vertex(100, 450);
        vertex(60, 400);
        vertex(60, 400);
        vertex(60, 360);
        vertex(60, 400);
        vertex(30, 360);
        vertex(60, 400);
        vertex(10, 390);
        endShape();
      //right
        beginShape(LINES);
        vertex(330, 420);
        vertex(400, 450);
        vertex(400, 450);
        vertex(340, 500);
        vertex(340, 500);
        vertex(300, 500);
        vertex(340, 500);
        vertex(300, 500);
        vertex(340, 500);
        vertex(320, 480);
        vertex(340, 500);
        vertex(310, 520);
        endShape();
    
  
    
        
  
}