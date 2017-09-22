function Paddle(lorr) {
  this.lorr = lorr;
  this.r = 20;
  
  this.getPos = function (lorr) {
    if (lorr === "left") {
      return createVector(40, height/2);
    } else if (lorr === "right") {
      return createVector(width - 40, height/2);
    }
  }

  this.pos = this.getPos(lorr);
  this.step = 0;

  this.show = function () {
    fill(255, 255, 255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.move = function () {
    if ((this.pos.y > this.r + 20) && (this.pos.y < height-this.r-20)) {
      this.pos.y += this.step;
    } else if ((this.pos.y <= (this.r + 20))) {
      this.pos.y = this.r + 30;
    } else if ((this.pos.y >= (height - this.r -20))) {
      this.pos.y = height - this.r - 30;
    }
  }

  this.hits = function(ball) {
    if (dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y) <= this.r + ball.r) {
      return true;
    } else return false;
  } 
}
