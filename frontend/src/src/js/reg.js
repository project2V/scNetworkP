const usn = document.getElementById("nombre");
const usa = document.getElementById("apellido");
const usc = document.getElementById("dni");
const usl = document.getElementById("telefono");
const usd = document.getElementById("email");
const usp = document.getElementById("contraseña");
const uscp = document.getElementById("localidad");
const btn = document.getElementById("regbtn");

function soloLetras(e) {
  let key = e.keyCode || e.charCode;
  let isLetter = (key >= 65 && key <= 90) || (key >= 97 && key <= 122);
  if (!isLetter && key !== 8 && key !== 32) {
    return false;
  }
}

function soloNumeros(e) {
  let key = e.keyCode || e.charCode;
  let isNumber = key >= 48 && key <= 57;
  if (!isNumber && key !== 8 && key !== 32) {
    return false;
  }
}

function contIn(campo) {
  if (campo.value > 8) {
    campo.value = campo.value.slice(0, 8);
  }
}

btn.addEventListener("click", async (event) => {
  if (usn.value == "") {
    alert("Ningún campo puede estar vacío");
  } else if (usa.value == "") {
    alert("Ningún campo puede estar vacío");
  } else if (usc.value == "") {
    alert("Ningún campo puede estar vacío");
  }
  if (usp.value != uscp.value) {
    alert("Las contraseñas no coinciden");
  }
});
