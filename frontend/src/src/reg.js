const registerForm = document.querySelector("#reg-form");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const datosFormulario = new FormData(registerForm);

  fetch("http://localhost:4000/register", {
    method: "POST",
    body: datosFormulario,
  })
    .then((response) => response.json())
    .then((usuario) => {
      document.querySelector(
        "#result"
      ).innerHTML = `Se han registrado los datos en el servidor.<br> Nombre de Usuario:${usuario.nombre}<br> Clave:${usuario.clave}`;
    });
});
