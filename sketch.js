let textIndex = 0;  // To track the current character in the text
let swayAmount = 1;  // The amount of sway for each character
let swaySpeed = 0.01;  // Speed of the sway movement
let textPosition = [];  // Stores position and angle of each character
let textContent = `**Harmio** is an invasive species in the United States, considered even potentially deadly for horses. In Finland, the same plant is regarded as a beautiful weed or ornamental plant, which arrived here from southern Russia with the horses of the Tsar's army before Finland's independence. In utopias, things considered negative are often absent. However, negativity can be viewed from multiple perspectives, across species, and even epistemically. In the video work, nostalgic and authentic old footage of haymaking in Isokyrö during the 1960s highlights the themes of disappearance, nourishment, and death from the horse's perspective, while the creeping **Harmio** or unwanted plant taps in the background of the soundtrack.

A better utopia often includes the problematic complete disappearance of certain human groups and beings. (One popular thought is that nature will thrive when humans, as a species, disappear.) What if we compared thoughts on organizing human coexistence to the care of gardens, crops, or haymaking for horses? The idea of "removables," the unnecessary or harmful, the part that is not visible—the weeds and the concept of invasive species—conceals something deep about our approach to nature, others, phenomena, and existence.

Anger is often felt toward what should be eradicated, and no means are spared. Sometimes, destruction is unpredictable, as in Mao's campaign against sparrows eating grain ("birds are capitalist animals"). Sparrows were mercilessly slaughtered, nearly to extinction. This, however, led to a rampant increase in pest insects, and ultimately, famine. What would be a way (to be) to create art where "utopia," a place where nothing would bother us anymore, wouldn't be something that followed a massacre, its consequence, or require death and destruction?

In the video work created from **Harmio**, I reflect not only on **Harmio**, but also on the identity and borders of my homeland, the movements and mixing of armies, and generally on the anthropocentric way of viewing nationalities, identity, borders, and harnessing nature for one's interests.

The horse originally roamed freely on nature's plains like a bird in the sky, grazing nature’s grasses with the instincts and wisdom of its own kind. The problematic nature of invasive species intertwines with themes of domestication, cultivation, fence-posting, control, nourishment, and closed doors, from which emerges the peculiar kingship typical of humans—a mood where modesty pretends not to desire ownership of land, money, or attention, yet the whole world is expected to kiss one’s sandal.

But does the work resolve the issues of conscious, posthumanist, and change-oriented art? Does anything change, or do the lines only deepen, both on the inside and outside of borders? Does a safer space breathe in and out, or in any direction?

**Harmio** simply sways in the wind. It probably cares. It's a bit of a weed.

**Heini Heikkilä, Harmio. 2025. Video Work, 00:07:52**`;

let offsetY = 100; // The initial Y position for text to start drawing from
let scrollSpeed = 2; // How fast the screen scrolls

function setup() {
  createCanvas(windowWidth, windowHeight);  // Set canvas to full window size
  textFont('CourierNew');  // Use any font you want here
  textSize(40);
  textAlign(LEFT,CENTER );
  
  // Set the background to black
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  // Resize canvas to match new window size
  background(0);  // Reset the background to black
}

function draw() {
  // Draw the black background (reset on every frame)
  background (4000, 3);
  
  let x = 100;  // Starting X position for the text
  let y = offsetY;  // Starting Y position for the text
  
  let lineHeight = 25;  // Line spacing
  let swaySpeedX = 0.02;  // Speed for horizontal sway movement
  
  // Loop through and draw the text with sway effect for the characters revealed so far
  for (let i = 0; i < textIndex; i++) {
    let char = textContent.charAt(i);
    
    // Calculate position based on the line height and x position
    let posX = x + (i % 50) * 20; // 60 characters per line, you can adjust the number of characters per line
    let posY = y + Math.floor(i / 50) * lineHeight; // Move to the next line after 60 characters
    
    // Add swing effect with sine wave for horizontal and vertical sway
    let swingX = sin(frameCount * swaySpeedX + i * 0.1) * 5;  // Horizontal swing
    let swingY = cos(frameCount * swaySpeed + i * 0.1) * 5;  // Vertical swing
    
    // Interpolate the color from green to orange to gold
    let greenValue = map(i, 0, textContent.length, 240, 0);  // Green decreases
    let redValue = map(i, 0, textContent.length, 0, 240);  // Red increases
    let blueValue = 0;  // Blue stays at 0
    let colorValue = color(redValue, greenValue, blueValue);
    
    // Set the text color
    fill(colorValue);
    
    // Draw the character with the sway effect
    text(char, posX + swingX, posY + swingY);
  }
  
  // Simulate typing effect by incrementing the textIndex over time
  if (textIndex < textContent.length) {
    textIndex++;
  }
  
  // Scroll the screen down as more text is typed
  if (textIndex % 5 === 0) {
    offsetY -= scrollSpeed;  // Scroll the screen down a little as new lines of text appear
  }
}