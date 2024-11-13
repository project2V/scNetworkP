const checkSession = () => {
  const token = localStorage.getItem("token");
  if (token) {
    document.getElementById("logout").style.display = "block";
  } else {
    document.getElementById("logout").style.display = "none";
  }
};
checkSession();

const logout = async () => {
  localStorage.removeItem("token");
  location.reload();
};
const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", logout);
