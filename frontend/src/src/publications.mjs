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
                          <img src="${publicacion.content.value}" alt="Imagen de la publicación">
                          <p><b>Problema:</b> ${publicacion.description1}</p>
                          <p><b>Posible solución:</b> ${publicacion.description2}</p>
                          <p><b>Monto estimado:</b>$${publicacion.amount}</p>
                        </div>
                        <div class="botonesPubli">
                          <button id="deleteBtn" class="boton-eliminar" data-id="${publicacion.id}">Eliminar</button>
                        `;
      publicacionesContainer.appendChild(article);
    });

    document.querySelectorAll(".boton-eliminar").forEach((deletepBtn) => {
      deletepBtn.addEventListener("click", async (event) => {
        const deleteBt = document.getElementById("deleteBtn");
        const id = deleteBt.getAttribute("data-id");
        event.preventDefault();
        try {
          const response = await fetch(
            `http://localhost:4000/api/pub/delete/${id}`,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }
          );
          const data = await response.json();
          if (response.ok) {
            alert("Publicación eliminada con éxito");
            location.reload();
          } else {
            alert("Error al eliminar la publicación");
            console.log("Error:", data);
          }
        } catch (error) {
          console.log(error, "No se pudo borrar");
          alert("Error de conexión. Por favor, intenta más tarde.");
        }
      });
    });
  } catch (error) {
    console.log(error);
    console.error("Error al obtener publicaciones:", error);
  }
});
const postPublication = document.querySelector("#postBtn");

postPublication.addEventListener("click", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const description1 = document.getElementById("description1").value;
  const category = document.getElementById("category").value;
  const description2 = document.getElementById("description2").value;
  const amount = document.getElementById("amount").value;

  const inpO = {
    title: title,
    content: content,
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
    console.log(response);

    if (response.ok) {
      alert("Publicación creada con éxito");
      location.reload();
    } else {
      alert("Error al crear la publicación");
      event.preventDefault();
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    event.preventDefault();
  }
});
