const text = "welcome to my page fellow human!";
const speed = 75; // prędkość w milisekundach
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Uruchom funkcję po załadowaniu strony
window.onload = typeWriter;