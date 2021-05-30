// Copied from editor.p5js.org

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(255,0,0);
  line(mouseX,0, mouseX, height);
  line(0,mouseY, width, mouseY);
  
  if (mouseIsPressed){  
    print("x = "+ mouseX+ ", y = "+mouseY);
};
}
