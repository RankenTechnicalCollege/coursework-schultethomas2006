document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageArea = document.getElementById('messageArea');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        messageArea.innerHTML = '';
        messageArea.className = '';

        if (email === '' || password === '') {
            messageArea.innerHTML = 'You seem to have forgotten your username and password.';
            messageArea.className = 'text-danger';
        } else if (email === 'admin@example.com' && password === 'password') {
            messageArea.innerHTML = 'Welcome back Admin!';
            messageArea.className = 'text-success';
        } else {
            messageArea.innerHTML = "That email and password doesn't seem to be right. Try again.";
            messageArea.className = 'text-danger';
        }
    });
});