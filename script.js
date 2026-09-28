const buttons = document.querySelectorAll(".project_button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    const projectCard = button.parentElement;

    const message = projectCard.querySelector(".project_message");

    message.textContent = "This project helped me practice HTML and CSS!";
  });
});
