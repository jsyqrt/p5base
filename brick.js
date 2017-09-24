function Brick() {
  this.pos = createVector(random(20, width-20), random(20, height- 100));
  this.c = createVector(255, 69, 0);
  this.r = 20;

  this.show = function() {
    fill(this.c.x, this.c.y, this.c.z);
    noStroke();
    rect(this.pos.x, this.pos.y, this.r*2, this.r);
  }

}
