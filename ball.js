function Ball() {
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.v = createVector(5, 5);
  //this.v = createVector(random(-1, 1), random(-1, 1));

  this.show = function () {
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  this.move = function (v) {
    var d = v || this.v;
    this.pos.add(d);
    if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
      this.pos.x = width/2;
      this.pos.y = height/2;
    }
  }
  
  this.bounce = function () {
    if (this.pos.x < this.r || this.pos.x > width -this.r) {
      this.v.x *= -1;
    } else if (this.pos.y < this.r || this.pos.y > height -this.r) {
      this.v.y *= -1;
    }
  }

}

