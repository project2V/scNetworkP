const token = localStorage.getItem("token");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const deletePublicationBtns = document.getElementsByClassName("boton-eliminar");

export const renderButtons = async () => {
  if (localStorage.getItem("token") && token !== undefined) {
    loginButton.style.display = "none";
    registerButton.style.display = "none";
    for (let btn of deletePublicationBtns) {
      btn.style.display = "block";
    }
  } else {
    for (let btn of deletePublicationBtns) {
      btn.style.display = "none";
    }
    loginButton.style.display = "block";
    registerButton.style.display = "block";
  }
};
