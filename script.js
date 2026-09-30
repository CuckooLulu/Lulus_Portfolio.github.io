const cafeButton = document.querySelector("#cafe_button");
const greetingButton = document.querySelector("#greeting_button");
const portfolioButton = document.querySelector("#portfolio_button");

cafeButton.addEventListener("click", function() {
  const message = document.querySelector("#cafe_message");
  message.textContent = "This project helped me practice HTML and CSS!";
  cafeButton.textContent ="Note Viewed!";
});

greetingButton.addEventListener("click", function() {
  const message = document.querySelector("#greeting_message");
  message.textContent = "This project helped me practice JavaScript!";
  greetingButton.textContent ="Note Viewed!";
});

portfolioButton.addEventListener("click", function() {
  const message = document.querySelector("#portfolio_message");
  message.textContent = "This project helped me practice HTML, CSS, and JavaScript!";
  portfolioButton.textContent ="Note Viewed!";
});