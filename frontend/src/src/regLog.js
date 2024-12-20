const registerForm = document.querySelector("#reg-form");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("nombre").value;
  const surname = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const phoneNumber = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("contrasena").value;
  const address = document.getElementById("localidad").value;

  const inpO = {
    name: name,
    surname: surname,
    dni: dni,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    address: address,
  };

  try {
    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      body: JSON.stringify(inpO),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();

    if (response.ok) {
      window.location.href = "login.html";
    } else {
      alert("Error al registrar");
    }
  } catch (error) {
    console.log(error, "Cannot create connection");
    alert("Error de conexión. Por favor, intenta más tarde.");
  }
});
