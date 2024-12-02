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
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const formatText = (event) => {
  let input = document.getElementById("amount");
  let valor = input.value.replace(/\./g, ""); // Eliminar puntos existentes
  let format = "";
  for (let i = 0; i < valor.length; i += 3) {
    if (i > 0) format += ".";
    format += valor.substring(i, i + 3);
  }
  input.value = format;
};
