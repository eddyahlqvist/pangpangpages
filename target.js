class Target {
  constructor() {
    this.x = 0 - 60;
    this.y = random(50, 200);
    this.width = random(60, 100);
    this.height = 8;
    this.speed = random (1.5, 3.5);
    this.yspeed = 5;
  }

  show() {
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height);
  }

  motion() {
    this.x += this.speed;
    if (this.x - this.width * 2 > width) {
      this.x = 0 - this.width;
      this.y = random(50, 200);
      this.speed = random (1.5, 3.5);
      this.width = random(60, 100);
    }
    if (this.y > height){
      falling = false;
    }
  }

  hitDetection() {
    if ((projectile.x > target.x && projectile.x < target.x+target.width) && (projectile.y <= target.y + target.height && projectile.y >= target.y)) {
      falling = true;
      fire = !fire;
      projectile.y = projectile.y = height - 44;
    }
    if (projectile.y < 0) {
      fire = !fire;
      projectile.y = projectile.y = height - 44;
    }
  }

  hit() {
    if (falling){
      target.y += target.yspeed;
    }
  }
}
