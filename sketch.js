var tank;
var bricks;

function setup() {
  createCanvas(600, 600);
  tank = new Tank();
  bricks = [];
  for(var i=0; i<100; i++) {
    bricks.push(new Brick());
  }
}

function draw() {
  background(100);
  tank.move();
  for(var i=0; i<bricks.length; i++) {
    for(var j=0; j<tank.bullets.length; j++) {
      if(tank.bullets[j].hits(bricks[i])) {
        bricks.splice(i, 1);
        tank.bullets.splice(j,1);
      }
    }
    if(bricks[i]) bricks[i].show();
  }
  tank.show();
}

function keyPressed() {

  key = String.fromCharCode(keyCode);
  if (key === "w" || key === "W") {
    tank.move_direction_change("up");
  } else if (key === "s" || key === "S") {
    tank.move_direction_change("down");
  } else if (key === "a" || key === "A") {
    tank.move_direction_change("left");
  } else if (key === "d" || key === "D") {
    tank.move_direction_change("right");
  }

  if (key === "i" || key === "I") {
    tank.bullet_direction_change("up");
  } else if (key === "k" || key === "K") {
    tank.bullet_direction_change("down");
  } else if (key === "j" || key === "J") {
    tank.bullet_direction_change("left");
  } else if (key === "l" || key === "L") {
    tank.bullet_direction_change("right");
  }

}

function keyReleased() {
  tank.v.x = 0;
  tank.v.y = 0;
  tank.sd.x = 0;
  tank.sd.y = 0;
}
