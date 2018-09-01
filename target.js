/* Eddy Ahlqvist - 2018 */

class Target {
  constructor() {
    this.x = 0 - 60;
    this.y = random(50, 200);
    this.width = random(60, 100);
    this.height = 8;
    this.speed = random (1.5, 3.5);
    this.yspeed = 5;
    this.streak = 0;
    this.record = 0;
  }

  // Draw the moving target
  show() {
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height);
  }

  // Move the target
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

  // Streak info
  streakInfo() {
    if (addStreak = true) {
      textSize(24);
      fill(255);
      text("Streak: " + this.streak, 15, height -55);
      textSize(32);
      text("Record: " + this.record, 15, height -20);
    }
    if (this.streak > this.record) {
      this.record++;
    }
    if (this.x > width) {
      this.streak = 0;
      sunSize = 50;
    }
  }

  // Hit detection
  hitDetection() {
    if ((projectile.x > this.x && projectile.x < this.x+this.width) && (projectile.y <= this.y + this.height && projectile.y >= this.y)) {
      falling = true;
      fire = !fire
      this.streak++;
      sunSize += 3;
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
