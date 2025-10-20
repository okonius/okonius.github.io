const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');


const popups = [
  {
    title: "Hello!",
    message: "This is a popup."
  },
  {
    title: "Hi there",
    message: "I make your life harder <3"
  },
  {
    title: "Did you know?",
    message: "That I like disturbing you?"
  },
  {
    title: "Please <3",
    message: "Don't close ME!!!!!!"
  }
];

function showPopup() {
  const randomIndex = Math.floor(Math.random() * popups.length);
  popupTitle.textContent = popups[randomIndex].title;
  popupMessage.textContent = popups[randomIndex].message;
  popup.style.display = 'block';
}

function hidePopup() {
  popup.style.display = 'none';
}

window.onload = function() {
  showPopup();
};

closeBtn.onclick = function() {
  hidePopup();
  setTimeout(showPopup, 5000);
};
