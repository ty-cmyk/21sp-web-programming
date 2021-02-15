const rectW = 150;
const rectH = 200;
const roundCorners = 10;
let firstRowX = 125;
let firstRowY = 100;
let secRowX = 125;
let secRowY = 350;
let thirdRowX = 125;
let thirdRowY = 600;
let myCards = [];

function setup () {
  createCanvas(1200, 900);
  background(0);
  for(let i = 0; i < 5; i++) {
  //First Row 
    rect(firstRowX, firstRowY, rectW, rectH, roundCorners);
      myCards.push({ x: firstRowX, y: firstRowY, id: i});
      firstRowX += 200;
  // Second Row
    rect(secRowX, secRowY, rectW, rectH, roundCorners);
      myCards.push({ x: secRowX, y: secRowY, id: i});
      secRowX += 200;
  // Third Row
    rect(thirdRowX, thirdRowY, rectW, rectH, roundCorners);
      myCards.push({ x: thirdRowX, y: thirdRowY, id: i});
      thirdRowX += 200;
  }
  
}
console.log(myCards);

function mousePressed () {
  for (let j = 0; j < myCards.length; j++) {
    let distance = dist(mouseX, mouseY, myCards[j].x, myCards[j].y);
  if (distance < rectH, rectW / 2) {
  console.log('Card has been clicked');
  }
  }
}

