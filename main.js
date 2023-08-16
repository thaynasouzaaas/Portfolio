const textToType = "Desenvolvedora Front-end";

function animateTyping() {
  const typingText = document.querySelector('.sub-titulo');
  let currentIndex = 0;
  const typingSpeed = 100;

  function typeText() {
    typingText.textContent = textToType.slice(0, currentIndex);
    currentIndex++;

    if (currentIndex <= textToType.length) {
      setTimeout(typeText, typingSpeed);
    }
  }

  typeText();
}

window.addEventListener('load', animateTyping);
