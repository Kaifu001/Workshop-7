let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 30; i++) {
        bubbles.push(new Bubble(random(width), random(height, height + 100)));
    }
}

function draw() {
    background(0, 50, 100);
    for (let b of bubbles) {
        b.move();
        b.display();
    }
}

class Bubble {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.radius = random(5, 20);
        this.speed = random(1, 3);
    }

    move() {
        this.position.y -= this.speed; 
        this.position.x += random(-1, 1); 

        
        if (this.position.y < -this.radius) {
            this.position.y = height + this.radius;
            this.position.x = random(width);
        }
    }

    display() {
        noStroke();
        fill(173, 216, 230, 150); 
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
