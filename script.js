document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store the user's name in local storage
    localStorage.setItem('userName', name);
    localStorage.setItem('email', email);


    // Redirect to welcome page
    window.location.href = 'welcome.html';
});