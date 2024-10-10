const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const password = document.getElementById("contraseña").value;

  const inpO = {
    name: name,
    dni: dni,
    password: password,
  };
  console.log(inpO);

  try {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(inpO),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      window.location.href = "publicaciones.html";
    } else {
      alert("Error al intentar iniciar sesión: intente de nuevo");
    }
  } catch (error) {
    console.log(error, "Cannot create connection");
    alert("Error de conexión. Por favor, intenta más tarde.");
  }
});
