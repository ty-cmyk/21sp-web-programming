
let myCard;
const DOWN = 'down';
const UP = 'up';
let startX = 100 ;
let startY = 100;
let cards = [];
const gameState = {

}
function setup () {
  createCanvas(1350, 900);
  background(0);
  
  for(let j = 0; j < 2; j++) {
    for(let i = 0; i < 6; i++) {
      cards.push(new Card (startX, startY));
      startX += 120; 
      console(startX);
    }
    startY += 150;
    startX = 100;
  }
  
  let myCard = new Card();
  myCard.show();
}

function mousePressed () {
  for (let k = 0; k < cards.length; k++) {
    if (cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped');
    }
  }
  console.log(myCard.didHit (mouseX, mouseY));

}

class Card {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 100;
    this.face = DOWN;
    this.show();
  }
  show () {
    if (this.face === DOWN) {
      fill('#454545')
      rect(this.x, this.y, this.width, this.height, 10);
    }
    else  {
      fill('#aaa')
      rect(this.x, this.y, this.width, this.height, 10);
    }
    
  }
}

didHit (mouseX, mouseY) {
  if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
        this.flip();
        return true;
  } else {
      return false;
  }
}

flip () {
  if (this.face === DOWN) {
    this.face = UP;
  }
  else {
    this.face = DOWN;
  }
  this.show();
}




/* const rectW = 150;
const rectH = 200;
const roundCorners = 10;
let firstRowX = 100;
let firstRowY = 100;
let secRowX = 100;
let secRowY = 350;
let thirdRowX = 100;
let thirdRowY = 600;
let myCards = [];

function setup () {
  createCanvas(1350, 900);
  background(0);
  for(let i = 0; i < 6; i++) {
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
 */
