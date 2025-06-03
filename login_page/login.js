// DOM Elements
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const dashboard = document.getElementById("dashboard");
const showRegisterLink = document.getElementById("showRegister");
const showLoginLink = document.getElementById("showLogin");
const loginFormElement = document.getElementById("loginFormElement");
const registerFormElement = document.getElementById("registerFormElement");
const logoutBtn = document.getElementById("logoutBtn");

// Error and success message elements
const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");
const registerSuccess = document.getElementById("registerSuccess");

// User info elements
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const memberSince = document.getElementById("memberSince");

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
  checkAuthStatus();
});

// Form switching
showRegisterLink.addEventListener("click", function (e) {
  e.preventDefault();
  showRegisterForm();
});

showLoginLink.addEventListener("click", function (e) {
  e.preventDefault();
  showLoginForm();
});

// Form submissions
loginFormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  handleLogin();
});

registerFormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  handleRegister();
});

// Logout
logoutBtn.addEventListener("click", function () {
  handleLogout();
});

// Functions
function showLoginForm() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  dashboard.classList.add("hidden");
  clearMessages();
}

function showRegisterForm() {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
  dashboard.classList.add("hidden");
  clearMessages();
}

function showDashboard() {
  loginForm.classList.add("hidden");
  registerForm.classList.add("hidden");
  dashboard.classList.remove("hidden");
}

function clearMessages() {
  loginError.classList.add("hidden");
  registerError.classList.add("hidden");
  registerSuccess.classList.add("hidden");
}

function showError(element, message) {
  element.textContent = message;
  element.classList.remove("hidden");
}

function showSuccess(element, message) {
  element.textContent = message;
  element.classList.remove("hidden");
}

function handleRegister() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  clearMessages();

  // Validation
  if (!name || !email || !password || !confirmPassword) {
    showError(registerError, "Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    showError(registerError, "Passwords do not match");
    return;
  }

  if (password.length < 6) {
    showError(registerError, "Password must be at least 6 characters long");
    return;
  }

  // Check if user already exists
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find((user) => user.email === email)) {
    showError(registerError, "An account with this email already exists");
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    name: name,
    email: email,
    password: password, // In a real app, this should be hashed
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  showSuccess(
    registerSuccess,
    "Account created successfully! You can now sign in."
  );

  // Clear form
  registerFormElement.reset();

  // Switch to login form after 2 seconds
  setTimeout(() => {
    showLoginForm();
  }, 2000);
}

function handleLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  clearMessages();

  if (!email || !password) {
    showError(loginError, "Please enter both email and password");
    return;
  }

  // Check credentials
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    showError(loginError, "Invalid email or password");
    return;
  }

  // Set current user
  localStorage.setItem("currentUser", JSON.stringify(user));

  // Update dashboard
  updateDashboard(user);
  showDashboard();

  // Clear form
  loginFormElement.reset();
}

function handleLogout() {
  localStorage.removeItem("currentUser");
  showLoginForm();
}

function checkAuthStatus() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const user = JSON.parse(currentUser);
    updateDashboard(user);
    showDashboard();
  } else {
    showLoginForm();
  }
}

function updateDashboard(user) {
  userName.textContent = user.name;
  userEmail.textContent = user.email;
  memberSince.textContent = new Date(user.createdAt).toLocaleDateString();
}

// Demo data (optional - remove in production)
function addDemoUser() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.length === 0) {
    const demoUser = {
      id: "demo",
      name: "Demo User",
      email: "demo@example.com",
      password: "demo123",
      createdAt: new Date().toISOString(),
    };
    users.push(demoUser);
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// Add demo user on first load
addDemoUser();
