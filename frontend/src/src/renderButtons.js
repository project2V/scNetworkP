const renderButtons = async () => {
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");
  if (localStorage.getItem("token")) {
    loginButton.style.display = "none";
    registerButton.style.display = "none";
  } else {
    loginButton.style.display = "block";
    registerButton.style.display = "block";
  }
};
