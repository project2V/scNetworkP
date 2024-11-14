const token = localStorage.getItem("token");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

export const renderButtons = async () => {
  if (localStorage.getItem("token") && token !== undefined) {
    loginButton.style.display = "none";
    registerButton.style.display = "none";
  } else {
    loginButton.style.display = "block";
    registerButton.style.display = "block";
  }
};
