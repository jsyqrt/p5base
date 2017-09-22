var ball;
var lpaddle;
var rpaddle;
var step;

function setup() {
  createCanvas(600, 400);
  ball = new Ball();
  lpaddle = new Paddle("left");
  rpaddle = new Paddle("right");
  step = 5;
}

function draw() {
  background(100);

  ball.show();
  ball.move();
  ball.bounce();

  lpaddle.show();
  lpaddle.move();
  rpaddle.show();
  rpaddle.move();

  if (lpaddle.hits(ball) || rpaddle.hits(ball)) {
    ball.v.x *= -1;
    ball.v.y *= -1;
  }
}

function keyPressed() {
  keyCode = String.fromCharCode(keyCode);
  if (keyCode === "q" || keyCode === "Q") {
    lpaddle.step = -step;
  } else if (keyCode === "a" || keyCode === "A") {
    lpaddle.step = step;
  } else if (keyCode === "p" || keyCode === "P") {
    rpaddle.step = -step;
  } else if (keyCode === "l" || keyCode === "L") {
    rpaddle.step = step;
  }
}

function keyReleased() {
  lpaddle.step = 0;
  rpaddle.step = 0;
}
