function Tank() {
  this.pos = createVector(width/2, height-20);
  this.v = createVector(0, 0);
  this.r = 10;
  this.sd = createVector(0, 0); // shoot direction, (0, -1) up, (1, 0) right, (0, 1) down, (-1, 0) left.
  this.bullets = [];
  this.step = 3;
  this.bullet_step = 5;
  this.shoot_cycle = 2;

  this.show = function() {
    fill(255, 0, 255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    for(var i=0; i<this.bullets.length; i++) {
      if (this.bullets[i].v.x == 0) {
        if (this.bullets[i].v.y == 0) {
          this.bullets.splice(i, 1);
        }
      }
      if (this.bullets[i]) {
        this.bullets[i].show();
        if (this.bullets[i].pos.x < 0 || this.bullets[i].pos.x > width || this.bullets[i].pos.y < 0 || this.bullets[i].pos.y > height) {
          this.bullets.splice(i, 1);
        }
      }
    }
  }

  this.move = function() {
    var bullet = new Bullet();
    var p = createVector(this.pos.x, this.pos.y);
    bullet.pos = p;
    bullet.v = this.sd.copy();
    this.bullets.push(bullet);
    for(var i=0; i<this.bullets.length; i++) {
      this.bullets[i].move();
    }
    this.pos.add(this.v);
  }

  this.move_direction_change = function(direction) {
    if (direction === "up") {
      this.v.x = 0;
      this.v.y = -this.step;
    } else if (direction === "down") {
      this.v.x = 0;
      this.v.y = this.step;
    } else if (direction === "left") {
      this.v.x = -this.step;
      this.v.y = 0;
    } else if (direction === "right") {
      this.v.x = this.step;
      this.v.y = 0;
    }
  }

  this.bullet_direction_change = function(direction) {
    if (direction === "up") {
      this.sd.x = 0;
      this.sd.y = -this.bullet_step;
    } else if (direction === "down") {
      this.sd.x = 0;
      this.sd.y = this.bullet_step;
    } else if (direction === "left") {
      this.sd.x = -this.bullet_step;
      this.sd.y = 0;
    } else if (direction === "right") {
      this.sd.x = this.bullet_step;
      this.sd.y = 0;
    }
  }
    
}

function Bullet() {
  this.pos = createVector(0, 0);
  this.r = 1;
  this.v = createVector(0, 0);
  
  this.show = function() {
    fill(255, 255, 255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.move = function() {
    this.pos.add(this.v);
  }
}

