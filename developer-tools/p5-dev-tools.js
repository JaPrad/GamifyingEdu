
// START
// Call the function under draw()
function showCoordinates() {
  stroke(255, 0, 0);
  line(mouseX, 0, mouseX, height); // line parallel to y-axis
  line(0, mouseY, width, mouseY); // line parallel to x-axis
  if (mouseIsPressed) {
    console.log(`x = ${mouseX}, y = ${mouseY}`); //log coordinates
  }
}
// END

// START
// Call <object-name>.show() under draw()
class Slider {
  constructor(x, y, size, minValue, maxValue, step = 1, initialValue = minValue, lineColor = [255,255,255], circleColor = [0,0,0]){
    this.initialX = x - size/2; // Starting x coordinate of line
    this.finalX = x + size/2; // Ending x coordinate of line 
    this.y = y
    
    this.minValue = minValue;
    this.numOfSteps = floor((maxValue - minValue) / step); // Number of Steps
    this.stepSize = size / this.numOfSteps; // Length of Each step in pixels
    
    this.value = initialValue;
    
    this.lineColor = lineColor;
    this.circleColor = circleColor;
  }
  
  show(){
    
    strokeWeight(3)
    stroke(...this.lineColor)
    line(this.initialX, this.y, this.finalX, this.y);
    
    noStroke()
    fill(...this.circleColor)
    
    if (mouseIsPressed && mouseX >= this.initialX && mouseX <= this.finalX+5 && mouseY >= this.y-10 && mouseY <= this.y+10){
      
      circle(mouseX, this.y, 10);
      
      this.value = this.minValue + floor((mouseX - this.initialX)/this.stepSize) // Value derived from slider
    }
    
    else {
      let circleX = this.initialX + ((this.value - this.minValue) * this.stepSize);
      circle(circleX, this.y, 10);
    }
  }
}
// END

