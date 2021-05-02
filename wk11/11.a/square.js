let squares = [];


function setup() {
    createCanvas(1000, 1000)
    for (let i=0; i < 500; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(10, 40);
        let h = random(10, 40);
        squares[i] = new Square (x, y, w, h);
    }
}


function draw() {
    background(0);
    for (let i = 0; i < squares.length; i++) {
        squares[i].show();
    }
}

class Square {
    constructor (x,y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        stroke(255, 60);
        noFill ();
        strokeWeight(4);
        rect(this.x, this.y, this.w *2, this.h *2)
    }
}


