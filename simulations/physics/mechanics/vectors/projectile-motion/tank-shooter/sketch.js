let conversionFactor = 2; //Conversion of x axis

let ppButton; // Play Pause Button
let angleSlider;

let gameOver = "no";

let gunAngle; // Angle of projectile
let gunLen = 47; // Length of gun
let gunColor = 100; // 0 if hit
let projectile = null; // Null value if object not created/deleted
let firingVelocity = 140;

let target = null;
let targetStatus = "active"; // "destroyed" if hit by projectile
let destroyedTargets = []; // Array to store destroyed target objects

score = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  frameRate(60); // Setting frame rate

  angleSlider = new Slider(80, height / 2 + 110, 100, 0, 92, 15);
  ppButton = new PlayPauseButton(30, 30, 40);
}

function draw() {
  background(135, 206, 235); // Sky blue

  // Controls & Display
  ppButton.show();
  angleSlider.show();
  gunAngle = angleSlider.value;

  fill(255);
  stroke(255);
  strokeWeight(1);
  textSize(30);
  textAlign(CENTER);

  textSize(30);
  text("Score", width - 50, 30);
  text(score, width - 50, 60); //Displaying score

  stroke(0);
  strokeWeight(4);
  text("Control Panel", 100, height / 2 - 50);

  strokeWeight(1);
  textSize(23);
  fill(0);
  stroke(0);
  text("Fire", 45, height / 2);
  text("Firing Velocity", 75, height / 2 + 45);
  text("Gun Angle", 65, height / 2 + 90);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  text(firingVelocity, 182, height / 2 + 45);
  text(gunAngle, 150, height / 2 + 90);

  textSize(13);
  fill(0, 0, 255);
  noStroke();
  stroke(0, 0, 255);
  text("Change", 70, height / 2 + 63); // Text to chage firing velocity

  if (isNaN(firingVelocity)) {
    // For invalid input
    firingVelocity = Number(
      window.prompt("Please enter a valid number. Enter new velocity")
    );
  }

  noFill();
  stroke(255);
  rectMode(CENTER);
  strokeWeight(3);
  rect(45, height / 2 - 10, 70, 40); // Box for fire

  noStroke();
  fill(0, 200, 0, 50);
  rect(100, height / 2 + 20, 250, 200); // Contol Panel green background

  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Enemy Distance", width - 70, height / 2 - 50, 100);

  if (target != null) {
    textSize(25);
    strokeWeight(1);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    text(floor(target.x) * conversionFactor, width - 70, height / 2 + 50); // Display distance of target
  }

  noStroke();
  fill(225, 0, 0, 120);
  rect(width - 70, height / 2, 150, 150); // Enemy Details red background

  stroke(255, 0, 0); // Distance Scale
  fill(0);
  line(0, height - 60, width, height - 60);
  for (let i = 0; i <= width; i += 50) {
    strokeWeight(0.5);
    line(i, height - 65, i, height - 55); // Markings

    fill(255, 0, 0);
    textSize(15);
    text(i * conversionFactor, i, height - 45); // Numbering
  }

  if (gameOver === "yes") {
    // When Game Over
    textSize(80);
    fill(245, 0, 0);
    stroke(245, 0, 0);
    text("GAME OVER", width / 2, height / 2);
  }

  // End of Controls & Display

  translate(0, height); // Make bottom-left the origin

  if (target == null && gameOver === "no") {
    target = new Target(width, -17, 25, 0.5); // Create target object
  } else if (target.x > 50 && gameOver === "no") {
    if (ppButton.status == 1) {
      target.update();
    } // Move target
    target.show();
  } else {
    // If target is near
    gunColor = 0; // gun hit
    gameOver = "yes";
    target.show(); // target stalls
  }

  if (target != null && projectile != null && gameOver === "no") {
    // If target and projectile objects exist

    if (
      dist(projectile.pos.x, projectile.pos.y, target.x, target.y) <
        projectile.r + target.w / 2 + 80 / conversionFactor &&
      projectile.pos.y > target.y
    ) {
      // If projectile hits target or lands near target

      destroyedTargets.push(new DestroyedTarget(target.x, target.y, target.w));
      target = null; // Delete target
      projectile = null; // Delete projectile

      score += 40; // Increase Score
    }
  }

  if (projectile != null && gameOver === "no") {
    // If projectile object is present
    projectile.show();

    if (ppButton.status == 1) {
      projectile.update();
    } // If unpaused, move projectile

    if (projectile.pos.y > 0 && projectile.vel.y > 0) {
      // When projectile hits ground

      projectile = null; // Delete projectile
      score -= 10; // Reduce score for wasting
    }
  }

  for (let i = 0; i < destroyedTargets.length; i++) {
    destroyedTargets[i].show();
  } // Display all destroyed tank objects stored in the list

  strokeWeight(10);
  stroke(gunColor);
  fill(gunColor);
  line(0, 0, gunLen * cos(gunAngle), -gunLen * sin(gunAngle)); // Drawing gun
  ellipse(0, -7, 50, 50); // Drawing gun holder

  stroke(0, 255, 0);
  line(-5, -2, width + 5, -2); // Drawing grass
}

function mouseClicked() {
  ppButton.update(); // Update play or pause

  if (
    mouseX >= 10 &&
    mouseX <= 82 &&
    mouseY >= height / 2 - 10 - 20 &&
    mouseY <= height / 2 - 10 + 20
  ) {
    // If mouse clicked over "Fire" button

    if (projectile === null && gameOver === "no") {
      projectile = new Projectile(0, 0, firingVelocity, gunAngle, 5); //Creating projectile object
    }
  }

  if (
    mouseX >= 48 &&
    mouseX <= 95 &&
    mouseY >= height / 2 + 45 &&
    mouseY <= height / 2 + 70
  ) {
    //To change velocity
    firingVelocity = Number(window.prompt("Enter new velocity"));
  }
}
