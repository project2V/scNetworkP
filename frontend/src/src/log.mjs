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
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      localStorage.setItem("token", data.token);
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
