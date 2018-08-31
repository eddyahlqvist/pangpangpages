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
    if ((this.x - this.width > width) || (this.y > height)) {
      this.x = 0 - this.width;
      this.y = random(50, 200);
      this.speed = random (1.5, 3.5);
      this.width = random(60, 100);
      falling = false;
    }
  }

  streakInfo() {
    if (addStreak = true) {
      textSize(24);
      fill(255);
      text("Streak: " + streak, 15, height -55);
      textSize(32);
      text("Record: " + record, 15, height -20);
    }
    if (streak > record) {
      record++;
    }
    if (this.x > width) {
      streak = 0;
    }
  }

  hitDetection() {
    if ((projectile.x > this.x && projectile.x < this.x+this.width) && (projectile.y <= this.y + this.height && projectile.y >= this.y)) {
      falling = true;
      fire = !fire
      streak++;
      addStreak = true;
      projectile.y = projectile.y = height - 44;
    }
    if (projectile.y < 0) {
      fire = !fire;
      projectile.y = projectile.y = height - 44;
    }
    if (falling){
      this.y += this.yspeed;
    }
  }

}
