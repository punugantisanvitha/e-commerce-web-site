function passwordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash')
        eyeIcon.classList.add('fa-eye');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Validate username pattern
        let usernamePattern = /^[a-zA-Z0-9_]{4,}$/;
        if (!usernamePattern.test(usernameInput.value)) {
            alert("Invalid username. It should contain at least 4 characters and only include letters, numbers, and underscores.");
            return;
        }

        // Validate password pattern
        let passwordPattern = /^.{6,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            alert("Invalid password. It should contain at least 6 characters, including at least one letter and one number.");
            return;
        }

        var userData = {
            username: usernameInput.value,
            password: passwordInput.value
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        alert("SignUp successful");

        // Redirect to login page
        window.location.href = 'login.html';
    });
});