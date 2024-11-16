const body = document.querySelector("body");
const div = document.getElementById("regDiv");

const load = () => {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    localStorage.setItem("darkmode", "false");
    body.classList.remove("darkmode");
  } else if (darkmode === "true") {
    body.classList.add("darkmode");
    div.setAttribute("data-bs-theme", "dark");
  }
};
load();
