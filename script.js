// TYPING ANIMATION
const text = "Hello World";
let index = 0;
const speed = 150;
const element = document.getElementById("helloText");

function typeEffect() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

// CLICK EFFECT
element.addEventListener("click", () => {
  element.style.color = "#ffeb3b";
  element.style.textShadow = "0 0 30px #ffeb3b";
});
