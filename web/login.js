function login() {
   var username = document.querySelector('input[name="username"]').value;
   var password = document.querySelector('input[name="password"]').value;

   // Perform client-side validation (e.g., checking for empty fields)
   if (!username || !password) {
       alert("Please enter both username and password.");
       return false;
   }

   // Simulate authentication (replace with your logic)
   if (username === "yourUsername" && password === "yourPassword") {
       // Successful login, redirect to the dashboard or another page
       window.location = "dashboard.html"; // Change the URL to your desired location
   } else {
       // Failed login, redirect to the welcome page
       window.location = "welcome.html"; // Change the URL to your desired location
   }

   return false;
}
