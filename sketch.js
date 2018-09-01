/* Eddy Ahlqvist - 2018 */

//  Global Variables
let fire = false;
let falling = false;
let addStreak = false;
let sunSize = 50;

function setup() {
  createCanvas (640, 480);
  weapon = new Weapon();
  target = new Target();
  projectile = new Projectile();
}

function draw() {

  // Background color
  background (47,79,79);

  // Sky color and shape
  fill(135,206,235);
  rect(0, 0, width, height/1.5);

  // Sun color and shape
  fill(255, 255, 0);
  ellipse(width/6, height/6, sunSize);
  noStroke();

  // Function calls
  target.streakInfo();
  target.show();
  target.motion();
  target.hitDetection();
  projectile.show();
  weapon.show();
  weapon.motion();
}

// Mouse functions
function mousePressed() {
  weapon.col = 98;
}
function mouseReleased() {
  fire = true;
  weapon.col = 210;
}
