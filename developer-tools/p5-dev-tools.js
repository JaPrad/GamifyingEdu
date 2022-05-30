// START
// title: Log Coordinates
// uuid: 943e3e78-e4e0-4ace-a5bc-7e115a371fd4
// instuction: Call the function under draw()
// return-value: x & y coordinate of the point on which mouse is clicked
function logCoordinates() {
  stroke(255, 0, 0);
  line(mouseX, 0, mouseX, height); // line parallel to y-axis
  line(0, mouseY, width, mouseY); // line parallel to x-axis
  if (mouseIsPressed) {
    console.log(`x = ${mouseX}, y = ${mouseY}`); // logs coordinates
  }
}
// END

// START
// title: Slider
// uuid: 8ec1dd4e-d502-44b4-884a-d6af7edf6431
// instruction: Call <object-name>.show() under draw()
// return-value: <object-name>.value() gives slider value
class Slider {
  constructor(
    x,
    y,
    size,
    minValue,
    maxValue,
    step = 1,
    initialValue = minValue,
    lineColor = [255, 255, 255],
    circleColor = [0, 0, 0]
  ) {
    this.initialX = x - size / 2; // Starting x coordinate of line
    this.finalX = x + size / 2; // Ending x coordinate of line
    this.y = y;

    this.minValue = minValue;
    this.numOfSteps = floor((maxValue - minValue) / step); // Number of Steps
    this.stepSize = size / this.numOfSteps; // Length of Each step in pixels

    this.value = initialValue;

    this.lineColor = lineColor;
    this.circleColor = circleColor;
  }

  show() {
    strokeWeight(3);
    stroke(...this.lineColor);
    line(this.initialX, this.y, this.finalX, this.y);

    noStroke();
    fill(...this.circleColor);

    if (
      mouseIsPressed &&
      mouseX >= this.initialX &&
      mouseX <= this.finalX + 5 &&
      mouseY >= this.y - 10 &&
      mouseY <= this.y + 10
    ) {
      circle(mouseX, this.y, 10);

      this.value =
        this.minValue + floor((mouseX - this.initialX) / this.stepSize); // Value derived from slider
    } else {
      let circleX =
        this.initialX + (this.value - this.minValue) * this.stepSize;
      circle(circleX, this.y, 10);
    }
  }
}
// END

// START
// title: Play-Pause Button
// uuid: 9b001feb-c5d4-4a99-b8bb-616d85d46d94
// instruction: Call <object-name>.show() under draw() and <object-name>.update() under mouseClicked() or similar
// return-value: <object-name>.status() gives value -1 if paused and 1 if unpaused

class PlayPauseButton {
  constructor(x, y, size, buttonColor = [255, 255, 255]) {
    this.x = x;
    this.y = y;
    this.d = size;
    this.color = buttonColor;

    this.status = -1; //-1 if paused, 1 if unpaused
  }
  show() {
    strokeWeight(4);
    stroke(...this.color);
    noFill();
    circle(this.x, this.y, this.d);

    if (this.status === -1) {
      fill(...this.color);
      triangle(
        this.x + this.d / 4,
        this.y,
        this.x - this.d / 8,
        this.y + this.d / 4,
        this.x - this.d / 8,
        this.y - this.d / 4
      );
    } else if (this.status === 1) {
      line(
        this.x + this.d / 6,
        this.y - this.d / 4,
        this.x + this.d / 6,
        this.y + this.d / 4
      );
      line(
        this.x - this.d / 6,
        this.y - this.d / 4,
        this.x - this.d / 6,
        this.y + this.d / 4
      );
    }
}
  
  update(){
    if (dist(mouseX, mouseY, this.x, this.y) <= this.d / 2 ) {
      this.status *= -1;
    }
  } 
}
// END
