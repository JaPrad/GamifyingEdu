// Define the function before setup() i.e. at the top if defining in same js file
// Call the function under draw()
function pointCoord() {
  stroke(255,0,0);
  line(mouseX,0, mouseX, height);
  line(0,mouseY, width, mouseY);
  if (mouseIsPressed){console.log("x = "+ mouseX+ ", y = "+mouseY);}
  }


