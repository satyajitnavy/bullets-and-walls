var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(800, 400);
  bullet = createSprite(20, 200, 40, 10);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet.shapeColor = "white";

  wall = createSprite(750, 200, thickness, height / 2);
  thickness = random(22, 83);
  wall.shapeColor = "80,80,80";
}

function draw() {
  background("black");
  bullet.velocityX = 9;

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red";
    }
    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}