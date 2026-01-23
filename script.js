const text = "welcome to my page fellow human!";
const speed = 75;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;