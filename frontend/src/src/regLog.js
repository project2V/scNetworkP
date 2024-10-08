const registerForm = document.querySelector("#reg-form");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nom = document.getElementById("nombre").value;
  const ape = document.getElementById("apellido").value;
  const dni1 = document.getElementById("dni").value;
  const tef = document.getElementById("telefono").value;
  const emc = document.getElementById("email").value;
  const pass = document.getElementById("contrasena").value;
  const loc = document.getElementById("localidad").value;
  const inpO = {
    name: nom,
    surname: ape,
    dni: dni1,
    phoneNumber: tef,
    email: emc,
    password: pass,
    address: loc,
  };
  console.log(inpO);
  const asd = await fetch("http://localhost:4000/register", {
    method: "POST",
    body: JSON.stringify(inpO),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (asd.ok) {
    const data = await asd.json();
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } else {
    const error = await asd.json();
    alert(error.message);
  }
});
