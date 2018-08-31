class Weapon {
  constructor() {
    this.x = width / 2;
    this.y = height;
  }

  show() {
    //Barrel of the gun
    fill(18,35,18);
    rect(this.x, this.y, 8, -40);

    //Base of the gun
    ellipse (this.x + 4, this.y, 45);
    fill(210);
    rect (width/2 - 21, height -5, 50, 5)
    rect (width/2 + 2, height -5, 4, -36)
  }

  shoot() {
    if (fire) {
      projectile.y -= projectile.speed;
    }
  }

}
