const loginForm = async (event) => {
  event.preventDefault();

  //Grabbing the values from our homepage.handlebars
  const email = document.querySelector("emailInput").value.trim();
  const password = document.querySelector("passwordInput").value.trim();

  //If email and password match then we make an update using a POST HTTP request, that speaks directly to the userRoutes.js to fetch the POST route for 'login'.
  // API folder to index.js '/users', and then to 'login' post in userRoutes.js
  if (email && password === true) {
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/questions");
    } else {
      alert("Invalid Login, please input the correct credentials!");
    }
  }
};
