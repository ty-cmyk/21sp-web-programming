let angles = [];
let angleV = [];
var sliderA;
var sliderB;
let r = 4;



function setup () {
  createCanvas(600, 600)
  sliderA = createSlider (1, 5, 2)
  sliderB = createSlider (1, 100, 2)
  let total = floor(width / (r * 2));
  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, 2 * TWO_PI);
    angleV[i] = 0.01 + i / 100
  }
  
  
 }

 function draw () {
   
   background(0)
   translate(300, 300);
   fill(2, 200, 80);
   stroke(2, 200, 80);

      for (let i = 0; i < angles.length; i++) {
        let y = map(sin(angles[i]), -1, 1, -200, 200);
        strokeWeight(1);
        let x = sliderB.value();
        // map(i, 0, angles.length, -300, 300);
        line(x, 0, x, y);
        circle(x, y, r * sliderA.value());
        rotate(sin(angles[i], + sliderB.value()))
        angles[i] += 0.01;
      // angles[i] += angleV[i];
      
   }
   
  //  angle += angleV;
 }