const checkSession = () => {
  const token = localStorage.getItem("token");
  if (token) {
    document.getElementById("logout").style.display = "block";
  } else {
    document.getElementById("logout").style.display = "none";
  }
};

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (token && token !== undefined) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("postBtn").style.display = "block";
  } else {
    document.getElementById("postBtn").style.display = "none";
    document.getElementById("myModal").style.display = "none";
  }
};

window.onload = checkAuth();
checkSession();

const logout = async () => {
  localStorage.removeItem("token");
  location.reload();
};
const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", logout);
