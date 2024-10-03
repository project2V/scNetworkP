const registerForm = document.querySelector("#reg-form");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const datosFormulario = new FormData(registerForm);
});
