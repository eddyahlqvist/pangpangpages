let fire = false;
let falling = false;
let addStreak =false;
let streak = 0;
let record = 0;

function setup() {
  createCanvas (640, 480);
  weapon = new Weapon();
  target = new Target();
  projectile = new Projectile();
}

function draw() {
  background (47,79,79);
  fill(135,206,235);
  rect(0, 0, width, height/1.5); //Adds the sky

  fill(255, 255, 0);
  ellipse(width/6, height/6, 50);
  noStroke();
  target.streakInfo();
  target.show();
  target.motion();
  target.hitDetection();
  projectile.show();
  weapon.show();
  weapon.shoot();
}

function mouseClicked() {
  fire = true;
}


//Eddy Ahlqvist 2018
