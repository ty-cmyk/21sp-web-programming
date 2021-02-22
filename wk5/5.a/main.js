const DOWN = 'down';
const UP = 'up';
let startX = 100;
let startY = 100;
let cards = [];
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

let cardfaceArray = [];

let cardback;

function preload() {
    cardback = loadImage('images/cardback.png');
    cardfaceArray = [
        loadImage('images/cactus-1.png'),
        loadImage('images/cactus-2.png'),
        loadImage('images/cactus-3.png'),
        loadImage('images/cactus-4.png'),
        loadImage('images/cactus-5.png'),
        loadImage('images/cactus-6.png'),
    ];
}

function setup() {
  createCanvas(925, 1000);
  let selectedFaces = [];
  for (let z = 0; z < 6; z++) {
      const randomIndex = floor(random(cardfaceArray.length));
      const face = cardfaceArray[randomIndex];
      selectedFaces.push(face);
      selectedFaces.push(face);
      //remove the used cardface so it doesn't get randomly selected again
      cardfaceArray.splice(randomIndex, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);

  for (let j = 0; j < 3; j++) { //rows
      for (let i = 0; i < 4; i++) { //columns
          const faceImage = selectedFaces.pop();
          cards.push(new Card(startX, startY, faceImage)); // new class instance - "cookie"
          startX +=200; // increments
      }
      startY += 250;
      startX = 100; //restart at 100 each row
  }
}


function draw () {
    background('lightBlue');

    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        text('You win!', 400, 425);
        noLoop();
    }

    for (let k = 0; k < cards.length; k++) {
        
      if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }

        cards[k].show();
    }

  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('#fff');
  textSize(25);
  text('ATTEMPTS: ' + gameState.attempts, 100, 900);
  text('MATCHES:  ' + gameState.numMatched, 400, 900)
}

function mousePressed () {

  if (gameState.waiting) {
    return; //will stop function
  }

  for (let k = 0; k < cards.length; k++) {
    
    // first check flipped cards length and then we can trigger flip
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) { //did hit method built into class; making sure only two cards will flip at a time
      console.log('flipped', cards[k]); // flip also built into class
      gameState.flippedCards.push(cards[k]);
    }

  }

    if (gameState.flippedCards.length === 2) { // 2 cards are flipped
      gameState.attempts++;
      if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
        // IF THEY MATCH:
        // mark cards as matched so they don't flip back
        gameState.flippedCards[0].isMatch = true;
        gameState.flippedCards[1].isMatch = true;
        //empty the flipped cards array
        gameState.flippedCards.length = 0;
        // increment score
        gameState.numMatched++;
        loop();
      } else {
        // IF THEY DON'T MATCH
        gameState.waiting = true;
        const loopTimeout = window.setTimeout(() => {
          loop();
          window.clearTimeout(loopTimeout);
        }, 1000)
      }
    }
  }



  // CARD
  class Card {
    constructor (x, y, cardFaceImg) { // x and y parameters to change positions
        this.x = x; //property
        this.y = y; //property
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () { // method - a method is like a function, but specific to a class
        if (this.face === UP || this.isMatch) {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
    } else {
        fill('maroon');
        rect(this.x, this.y, this.width, this.height, 10); // added an extra argument; 10 is border radius
        image(cardback, this.x, this.y);
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
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
    // pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    //swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
    }
    return array;
}