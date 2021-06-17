// Define the function before setup() i.e. at the top
// Call the function under draw()
function pointCoord() {
  stroke(255,0,0);
  line(mouseX,0, mouseX, height);
  line(0,mouseY, width, mouseY);
  if (mouseIsPressed){print("x = "+ mouseX+ ", y = "+mouseY);}
  }

export {pointCoord};

