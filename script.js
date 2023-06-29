//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showTextWithDelay(text, delayMs) {
  await delay(delayMs);
  console.log(text); // Display the text on the screen (change this line to suit your needs)
}

// Example usage
showTextWithDelay("Hello, world!", 2000); // Display "Hello, world!" after a 2-second delay
