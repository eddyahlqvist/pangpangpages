/* Eddy Ahlqvist - 2018 */

class Projectile {
  constructor() {
    this.x = width / 2;
    this.y = height-44;
    this.width = 8;
    this.height = 8;
    this.speed = 5;
  }

  // Draw the projectile
  show() {
    fill (255,0,0);
    rect(this.x, this.y, this.width, this.height);
    fill(255);
  }

}
