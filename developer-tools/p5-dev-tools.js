// Call the function under draw()
function showCoordinates() {
  stroke(255, 0, 0);
  line(mouseX, 0, mouseX, height); // line parallel to y-axis
  line(0, mouseY, width, mouseY); // line parallel to x-axis
  if (mouseIsPressed) {
    console.log(`x = ${mouseX}, y = ${mouseY}`); //log coordinates
  }
}
