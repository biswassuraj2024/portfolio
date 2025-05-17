const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


  const phrases = ["Suraj Biswas", "a Student", "a Web Developer", "a Graphic Designer"];
  const el = document.getElementById("animated-text");

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);
    el.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;

      if (!isDeleting) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      setTimeout(type, 1000);
    }
  }

  type();

