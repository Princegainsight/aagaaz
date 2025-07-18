//PX Script Tag
document.addEventListener('DOMContentLoaded', function() {
            
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-VOA4L8B9NFGB-2");




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
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

});
      });

 // Fallback in case name is not available

//Log out Button function    
function logout() {
            localStorage.removeItem('userName');
            window.location.href = 'index.html';
        };
