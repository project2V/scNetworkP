import { renderButtons } from "./renderButtons.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/pub/getpublications",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.getItem("token", data.token);
      renderButtons();
    }

    if (response.ok) {
      console.log("Publicaciones obtenidas");
    }

    const publicacionesContainer = document.getElementById("publicaciones");
    data.forEach((publicacion) => {
      const article = document.createElement("article");
      article.classList.add("contenedor-publi");
      article.innerHTML = `
                        <h3>${publicacion.title}</h3>
                        <h5><b>Categoría:</b> ${publicacion.category}</h5>
                        <div class="contenidoPubli">
                          <p><b>Problema:</b> ${publicacion.description1}</p>
                          <p><b>Posible solución:</b> ${publicacion.description2}</p>
                          <p><b>Monto estimado:</b>$${publicacion.amount}</p>
                        </div>
                        `;
      publicacionesContainer.appendChild(article);
    });
  } catch (error) {
    console.error("Error al obtener publicaciones:", error);
  }
});
const postPublication = document.querySelector("#postBtn");

postPublication.addEventListener("click", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description1 = document.getElementById("description1").value;
  const category = document.getElementById("category").value;
  const description2 = document.getElementById("description2").value;
  const amount = document.getElementById("amount").value;

  const inpO = {
    title: title,
    description1: description1,
    category: category,
    description2: description2,
    amount: amount,
  };
  console.log(inpO);

  try {
    const response = await fetch("http://localhost:4000/api/pub/create", {
      method: "POST",
      body: JSON.stringify(inpO),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    console.log(response);

    if (response.ok) {
      alert("Publicación creada con éxito");
      location.reload();
    } else {
      alert("Error al crear la publicación");
      location.reload();
      console.log(error);
    }
  } catch (error) {
    console.log(error, "Cannot create connection");
    alert("Error de conexión. Por favor, intenta más tarde.");
  }
});
