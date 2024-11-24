document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const message = document.getElementById('message');
  
     // Check if username is empty
    if (username.length === 0) {
      message.textContent = "Username cannot be empty!";
      return;
    }
    if (password.length === 0) {
      message.textContent = "pasword cannot be empty!";
      return;
    }
    if (email.length === 0) {
      message.textContent = "email cannot be empty!";
      return;
    }
    if (confirmPassword.length === 0) {
      message.textContent = "confirmpassword  cannot be empty!";
      return;
    }
    if (password !== confirmPassword) {
        message.style.color = "red";
      message.textContent = "write your password well!";
      return;
    }
  
    if (password.length < 8) {
      message.style.color = "red"; 
      message.textContent = "Password must be at least 8 characters!";
      return;
    }
  
    message.style.color = "green";
    message.textContent = "Registration successful!";
  });
  
  