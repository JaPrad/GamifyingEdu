class Target {
  constructor(x, y, width, velocity) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.v = velocity;
  }

  update() {
    this.x -= this.v / conversionFactor;
  }

  show() {
    fill(102, 124, 62);
    stroke(102, 124, 62);

    strokeWeight(this.w / 2);
    line(
      this.x - this.w / 2,
      this.y + this.w / 4,
      this.x + this.w / 2,
      this.y + this.w / 4
    );
    strokeWeight(this.w / 8);
    line(this.x, this.y, this.x - this.w / 2, this.y - this.w / 2);
  }
}

class DestroyedTarget {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.w = width;
  }

  show() {
    fill(0);
    stroke(0);

    strokeWeight(this.w / 2);
    line(
      this.x - this.w / 2,
      this.y + this.w / 4,
      this.x + this.w / 2,
      this.y + this.w / 4
    );
    strokeWeight(this.w / 8);
    line(this.x, this.y, this.x - this.w / 2, this.y - this.w / 3);
  }
}
