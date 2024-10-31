const body = document.querySelector("body");

load();

function load() {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    localStorage.setItem("darkmode", "false");
    body.classList.remove("darkmode");
  } else if (darkmode === "true") {
    body.classList.add("darkmode");
  }
}
