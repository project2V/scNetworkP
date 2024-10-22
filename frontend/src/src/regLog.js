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

  console.log(inpO);

  try {
    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      body: JSON.stringify(inpO),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      document.createElement = (
        <div class="border rounded-lg shadow relative max-w-sm">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div class="p-6 pt-0 text-center">
            <svg
              class="w-20 h-20 text-red-600 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">
              Usuario registrado correctamente!
            </h3>
            <a
              href="login.html"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      );
    } else {
      document.createElement = (
        <div class="border rounded-lg shadow relative max-w-sm">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div class="p-6 pt-0 text-center">
            <svg
              class="w-20 h-20 text-red-600 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">
              {" "}
              No se ha podido registrar, intente de nuevo
            </h3>
            <a
              href="location.reload()"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
            >
              Volver a intentar
            </a>
          </div>
        </div>
      );
    }
  } catch (error) {
    console.log(error, "Cannot create connection");
    alert("Error de conexión. Por favor, intenta más tarde.");
  }
});

function registrarUsuario() {
  localStorage.setItem('usuarioRegistrado', 'true');
  ocultarBotonRegistro();
}
function ocultarBotonRegistro() {
  const botonRegistro = document.getElementById('regbtn');
  if (localStorage.getItem('usuarioRegistrado') === 'true') {
      botonRegistro.style.display = 'none';
  }
}

window.onload = ocultarBotonRegistro;