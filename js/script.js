// Toggle Dark Mode
const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Bonus: Greeting message and prevent page reload on submit
const contactForm = document.getElementById("contactForm");
const greetingMessage = document.getElementById("greetingMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const visitorName = document.getElementById("visitorName").value.trim();
    const visitorEmail = document.getElementById("email").value.trim();

    if (visitorName && visitorEmail) {
        greetingMessage.textContent = `Hello, ${visitorName}! Thank you for visiting.`;
        contactForm.reset();
    }
});