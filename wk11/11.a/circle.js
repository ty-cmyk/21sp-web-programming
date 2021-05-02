let circles = [];

function setup() {
    createCanvas(1000, 1000)
    for (let i=0; i < 500; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 80);
        circles[i] = new Circle (x, y, r);
    }
}


function draw() {
    background(0);
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
}

class Circle {
    constructor (x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    show() {
        fill(155, 200, 50, 60);
        noStroke ();
        ellipse(this.x, this.y, this.r *2)
    }
}

