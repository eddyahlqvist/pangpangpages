/* Eddy Ahlqvist - 2018 */

class Weapon {
  constructor() {
    this.x = width / 2;
    this.y = height;
    this.col = 210;
  }

  // Draw the gun
  show() {

    // Barrel of the gun
    fill(18,35,38);
    rect(this.x, this.y, 8, -40);

    // Base of the gun
    strokeWeight(1);
    stroke(this.col);
    ellipse (this.x + 4, this.y, 45);
    noStroke();
    fill(this.col);
    rect (width/2 + 2, height, 4, -36)
  }

  // Release the projectile
  motion() {
    if (fire) {
      projectile.y -= projectile.speed;
    }
  }

}
