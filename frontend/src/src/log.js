const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("contraseña").value;

  const inpO = {
    email: email,
    password: password,
  };
  console.log(inpO);

  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(inpO),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      window.location.href = "publicaciones3.html";
    } else {
      console.log(response);
      alert("Error al intentar iniciar sesión: intente de nuevo");
    }
  } catch (error) {
    console.log(error, "Cannot create connection");
    alert("Error de conexión. Por favor, intenta más tarde.");
  }
});


