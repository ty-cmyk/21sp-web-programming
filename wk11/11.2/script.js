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
function mouseDragged() {
    let w = random(10, 50);
    let h = random(10, 50);
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
    }


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