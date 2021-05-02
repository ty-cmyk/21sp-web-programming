// let rotateBy = 5;
// let r, g, b;

// function setup() {
//   createCanvas(800, 800);
//   background(240);
//   r = random(255);
//   g = random(255);
//   b = random(255);
//   angleMode(DEGREES);
// }
// function draw() {
//     //Circle Button
//     stroke(r, g, b);
//     strokeWeight(2);
//     fill(r, g, b, 10);
//     circle (400, 400, 50);
// }
//     var things = [
//         circle (400, 400, 50),
//         circle (400, 400, 50),
//         rect (400, 400, 400),
//     ]

// things.forEach(function(val, i) {
//     console.log(i)
// })

// var nums = [100, 25, 46, 72];

// var nums = 23;

// function setup() {
//     createCanvas(400, 400)
// }

// function draw() {
//     background(0);

//     for (var i = 0; i < 4; i++) {
//         ellipse(i * 100 + 100, 200, num[i], num[i]);
//     }

//     // ellipse(100, 200, num, num);

//     // ellipse(100, 200, num[0], num[0]);
//     // ellipse(200, 200, num[1], num[1]);
//     // ellipse(300, 200, num[2], num[2]);
// }

let squares = [];
let rv, gv, bv;

function setup() {
    createCanvas(1000, 1000)
    rv = random(255);
    gv = random(255);
    bv = random(255);
    angleMode(DEGREES);
    // for (let i=0; i < 500; i++) {
    //     let x = random(width);
    //     let y = random(height);
    //     let w = random(10, 40);
    //     let h = random(10, 40);
    //     squares[i] = new Square (x, y, w, h);
    // }
}
function mousePressed() {
    rv = random(255);
    gv = random(255);
    bv = random(255);
}
function mousePressed() {
    let w = random(10, 50, 20, 20);
    let h = random(10, 50, 20, 20);
    let color = random(rv, gv, bv)
    let sq = new Square(mouseX, mouseY, w, h, color);
    squares.push(sq);
}

function draw() {
    background(0);

    for (let i = 0; i < squares.length; i++) {
        squares[i].move();
        squares[i].show();
    }
}

class Square {
    constructor (x,y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 1;
        this.drag = 0.95
    }

    // clicked (x, y) {
    //     let d = dist(x, y, this.x, this.y);
    //     if (d < this.r) {
    //     console.log("CLICKED THE BUBBLE!")
    //     }
    // }
    move () {
        this.x = this.x + random(-this.speed, this.speed) 
        this.y = this.y + random(-this.speed, this.speed) 
}

    show() {
        stroke(255, 60);
        strokeWeight(6);
        fill(rv, gv, bv);
        rect(this.x, this.y, this.w *2, this.h *2)
    }
}