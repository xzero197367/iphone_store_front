// Form validation
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

// Error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

// Form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset error messages
  hideAllErrors();

  // Validate form
  let isValid = true;

  // Name validation
  if (!nameInput.value.trim()) {
    showError(nameInput, nameError, "Please enter your name");
    isValid = false;
  }

  // Email validation
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, emailError, "Please enter a valid email address");
    isValid = false;
  }

  // Phone validation (optional)
  if (phoneInput.value && !validatePhone(phoneInput.value)) {
    showError(phoneInput, phoneError, "Please enter a valid phone number");
    isValid = false;
  }

  // Subject validation
  if (!subjectInput.value) {
    showError(subjectInput, subjectError, "Please select a subject");
    isValid = false;
  }

  // Message validation
  if (!messageInput.value.trim()) {
    showError(messageInput, messageError, "Please enter your message");
    isValid = false;
  }

  // If form is valid, submit it
  if (isValid) {
    // In a real application, you would send the form data to a server here
    // For this example, we'll just show a success message
    contactForm.reset();
    successMessage.style.display = "block";

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }
});

// Validate email format
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate phone format
function validatePhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return re.test(String(phone));
}

// Show error message
function showError(input, errorElement, message) {
  input.style.borderColor = "#dc3545";
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// Hide all error messages
function hideAllErrors() {
  const errorElements = document.querySelectorAll(".error-message");
  const inputs = document.querySelectorAll(".form-control");

  errorElements.forEach((error) => {
    error.style.display = "none";
  });

  inputs.forEach((input) => {
    input.style.borderColor = "#ddd";
  });
}

// Input event listeners to clear errors on input
nameInput.addEventListener("input", () => {
  nameInput.style.borderColor = "#ddd";
  nameError.style.display = "none";
});

emailInput.addEventListener("input", () => {
  emailInput.style.borderColor = "#ddd";
  emailError.style.display = "none";
});

phoneInput.addEventListener("input", () => {
  phoneInput.style.borderColor = "#ddd";
  phoneError.style.display = "none";
});

subjectInput.addEventListener("change", () => {
  subjectInput.style.borderColor = "#ddd";
  subjectError.style.display = "none";
});

messageInput.addEventListener("input", () => {
  messageInput.style.borderColor = "#ddd";
  messageError.style.display = "none";
});

// FAQ Accordion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle active class on header
    header.classList.toggle("active");

    // Toggle content visibility
    const content = header.nextElementSibling;
    content.classList.toggle("active");
  });
});
