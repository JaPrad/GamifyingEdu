class Projectile {
  constructor(x, y, velocity, angle, diameter) {
    velocity /= conversionFactor;

    this.pos = createVector(x, y);
    this.vel = createVector(velocity * cos(angle), -velocity * sin(angle));
    this.acc = createVector(0, 10 / conversionFactor); // Aceeleration due to gravity
    this.d = diameter;
    this.r = diameter / 2;
  }

  show() {
    stroke(0);
    fill(0);
    circle(this.pos.x, this.pos.y, this.d);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}
