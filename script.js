// Bring in toggle buttons
const buttons = document.querySelectorAll(".faq-toggle");

// Loop through buttons nodelist
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the active class on the parent node
    button.parentNode.classList.toggle("active");
  });
});
