// sketch.js
let canvas;
function setup() {
    const canvasContainer = document.getElementById('sketch-canvas');
    const canvasWidth = canvasContainer.clientWidth;
    const canvasHeight = canvasContainer.clientHeight;
  
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-canvas');
    background(255);
  
    setInterval(updateCanvasPosition, 1000); // Call updateCanvasPosition every 10 seconds
  }
  function updateCanvasPosition() {
    const canvasContainer = document.getElementById('sketch-canvas');
    const columnWidth = canvasContainer.clientWidth;
    const columnHeight = canvasContainer.clientHeight;
  
    const circleDiameter = 50; // Set the circle diameter
    const canvasX = random(circleDiameter / 2, columnWidth - circleDiameter / 2);
    const canvasY = random(circleDiameter / 2, columnHeight - circleDiameter / 2);
  
    canvasContainer.style.position = 'absolute';
    canvasContainer.style.left = canvasX + 'px';
    canvasContainer.style.top = canvasY + 'px';
    resizeCanvas(columnWidth, columnHeight);
    }
  
  function draw() {
    stroke('#000000'); // Black stroke color
    strokeWeight(2); // Set stroke weight to 2 pixels
    ellipse(width / 2, height / 2, min(width, height)/2); // Draw a circle at the center of the canvas
    resizeCanvas(canvasWidth, canvasHeight);
}
  
function windowResized() {
    const canvasContainer = document.getElementById('sketch-canvas');
    const canvasWidth = canvasContainer.clientWidth;
    const canvasHeight = canvasContainer.clientHeight;
    resizeCanvas(canvasWidth, canvasHeight);
  }
  