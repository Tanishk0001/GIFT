const giftBox = document.getElementById('giftBox');
const content = document.getElementById('content');
const photo = document.getElementById('photo');
const message = document.getElementById('message');
const video = document.getElementById('video');
const finalMessage = document.getElementById('finalMessage');
const clickMeText = document.getElementById('clickMeText');
const emoji = document.getElementById('emoji');

const photos = [
  './p1.jpg',
  './p2.jpg',
  './p3.jpg',
  './p4.jpg',
];

const messages = [
  'Surprise! You are amazing!',
  'Keep shining like a star!',
  'Today is your lucky day!',
  'You deserve the best!',
];

let index = 0;

giftBox.addEventListener('click', () => {
  content.style.display = 'block';
  // Show image and message
  photo.src = photos[index];
  message.textContent = messages[index];

  // Show "click me" text and blinking emoji (for all but the last image)
  if (index !== photos.length - 1) {
    clickMeText.style.display = 'block';
  } else {
    clickMeText.style.display = 'none'; // Hide the "click me" text for the last photo
  }

  // Video appears only on the last image (index 3 in this case)
  if (index === photos.length - 1) {
    video.style.display = 'block';
  } else {
    video.style.display = 'none';
  }

  // Final message
  finalMessage.textContent = '❤️';

  // Cycle through the photos and messages
  index = (index + 1) % photos.length;
});
