// script.js

// Function to get a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to move the image to a random position on the page
  function moveImageRandomly() {
    const image = document.getElementById('movingImage');
  
    // Get the dimensions of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    // Get the dimensions of the image
    const imageWidth = image.width;
    const imageHeight = image.height;
  
    // Calculate the maximum values to avoid the image getting out of the screen
    const maxX = windowWidth - imageWidth;
    const maxY = windowHeight - imageHeight;
  
    // Generate random x and y coordinates for the image
    const randomX = getRandomNumber(0, maxX);
    const randomY = getRandomNumber(0, maxY);
  
    // Apply the random positions to the image
    image.style.left = randomX + 'px';
    image.style.top = randomY + 'px';
  }
  
  // Move the image to a random position when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    moveImageRandomly();
  
    // Call moveImageRandomly() every 10 seconds
    setInterval(moveImageRandomly, 10000);
  });
  
  // Move the image to a random position when the window is resized
  window.addEventListener('resize', () => {
    moveImageRandomly();
  });
  