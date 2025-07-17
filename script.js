document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; // Account for security

    // Optional: Create a user object to store and log the user information
    const user = {
        name: name,       // You can adjust if needed
        email: email,
        
    };

    // Store the entire user object in local storage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Redirect to welcome page
    window.location.href = 'welcome.html';
});
