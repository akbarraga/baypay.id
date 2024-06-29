const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/**
 * LOGIN 
*/
document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle sign-up logic here
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;

    // Store user credentials in localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert("Account created! Please sign in.");
});

document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Perform your authentication here
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;

    // Retrieve stored user credentials from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) { // Authenticate user
        alert("Login berhasil"); // Show success notification
        window.location.href = "index.html"; // Redirect to main page
    } else {
        alert("Invalid email or password");
    }
});
/*end login */