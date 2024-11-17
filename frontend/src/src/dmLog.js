const body = document.querySelector("body");
const section = document.getElementById("logSection");
const logh4 = document.getElementById("logH4");
const logh2 = document.getElementById("logH2");
const logp = document.getElementById("logP");
const logp1 = document.getElementById("logP1");
const logp2 = document.getElementById("logP2");
const logp3 = document.getElementById("logP3");
const logLabel = document.getElementById("logLabel");
const logLabel1 = document.getElementById("logLabel1");
const logButton = document.getElementById("logButton");
const logButton1 = document.getElementById("logButton1");
const logA = document.getElementById("logA");
const divForm = document.getElementById("divForm");

const load = () => {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    localStorage.setItem("darkmode", "false");
    body.classList.remove("darkmode");
  } else if (darkmode === "true") {
    body.classList.add("darkmode");
    section.setAttribute("style", "background-color: rgb(35, 35, 35)");
    logh4.setAttribute("style", "color: white");
    logh2.setAttribute("style", "color: white");
    logp.setAttribute("style", "color: white");
    logp1.setAttribute("style", "color: white");
    logp2.setAttribute("style", "color: white");
    logLabel.setAttribute("style", "color: white");
    logLabel1.setAttribute("style", "color: white");
    logButton.setAttribute("style", "color: white");
    logButton1.setAttribute("style", "color: white");
    logA.setAttribute("style", "color: white");
    logp3.setAttribute("style", "color: white");
    divForm.setAttribute("data-bs-theme", "dark");
  }
};

load();
