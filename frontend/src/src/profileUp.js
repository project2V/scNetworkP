function updatePreview() {
    const fileInput = document.getElementById('profile-pic');
    const preview = document.getElementById('preview');
    
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");

load();

bdark.addEventListener("click", (e) => {
  body.classList.toggle("darkmode");
  store(body.classList.contains("darkmode"));
});

function load() {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    localStorage.setItem("darkmode", "false");
    body.classList.remove("darkmode");
  } else if (darkmode === "true") {
    body.classList.add("darkmode");
  }
}

function store(value) {
  localStorage.setItem("darkmode", value);
}
document.getElementById("hamburger").addEventListener("click", function() {
  document.querySelector(".menu").classList.toggle("active");
});
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
