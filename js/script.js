const quizBtn = document.querySelector(".btn");
const notification = document.querySelector(".notification");
const leaveBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn');
const main = document.querySelector('.container');

// When the quiz button is clicked
quizBtn.onclick = function() {
  notification.classList.add("active");
  main.classList.add("active");
};

// When the exit button is clicked
leaveBtn.onclick = function() {
  notification.classList.remove("active");
  main.classList.remove("active");
};

// When the continue button is clicked, go to the new page
continueBtn.onclick = function() {
  window.location.href = "./pages/page.html";
};