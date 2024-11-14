const token = localStorage.getItem("token");
const div = document.getElementById("create-div");

if (token && token !== undefined) {
  div.style.display = "block";
} else {
  div.style.display = "none";
}
