// Counter logic
let count = 0;
const counterEl = document.getElementById("count");
const loader = document.getElementById("loader");

const interval = setInterval(() => {
  if (count >= 100) {
    clearInterval(interval);

    // Fade out loader
    loader.classList.add("fade-out");

    // Redirect to main page after fade-out animation (1 second)
    setTimeout(() => {
      window.location.href = "main.html"; // Redirect to main page
    }, 1000);
  } else {
    count++;
    counterEl.textContent = count;
  }
}, 30);

// Change "NOW" font periodically
const fonts = [
  "'Playfair Display', serif",
  "'Roboto Serif', serif",
  "'Crimson Text', serif",
  "'Libre Baskerville', serif",
  "'Merriweather', serif"
];

let currentFont = 0;
const nowEl = document.getElementById("now");

setInterval(() => {
  currentFont = (currentFont + 1) % fonts.length;
  nowEl.style.fontFamily = fonts[currentFont];
}, 600);