// Import the necessary Firebase Authentication functions
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Get a reference to the Firebase authentication instance
const auth = getAuth(app);

// Register function
function register() {
  // Get input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validation checks (you can add these checks here)
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!isValidPassword(password)) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // Attempt to create a new user account
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      const user = userCredential.user;
      console.log("User registered: " + user.uid);
      // You can redirect the user to a success page or perform other actions here.
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration error: " + errorCode + " - " + errorMessage);
      // Handle registration errors (e.g., display an error message to the user).
    });
}

// Email validation function
function isValidEmail(email) {
  // Use a regular expression to check for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation function
function isValidPassword(password) {
  return password.length >= 6;
}

// Add an event listener to the "Register" button
document.getElementById("button_container").addEventListener("click", register);