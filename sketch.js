function draw()
{
  background('#00ff00');
  ellipse(windowWidth / 2, windowHeight / 2, 100, 100);
  fill('#07C');
  noStroke();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
