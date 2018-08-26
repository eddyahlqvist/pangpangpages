let fire = false;
let falling = false;

function setup() {
  createCanvas (640, 480);
  weapon = new Weapon();
  target = new Target();
  projectile = new Projectile();
}

function draw() {
  background (47,79,79);
  fill(135,206,235);
  rect(0, 0, width, height/2);

  noStroke();

  target.show();
  target.motion();
  target.hit();
  target.hitDetection();

  projectile.show();

  weapon.show();
  weapon.shoot();
}

function mouseClicked() {
  fire = true;
}


//Eddy Ahlqvist 2018
