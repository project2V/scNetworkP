import { renderButtons } from "./renderButtons.mjs";
let archive;

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

    const responseUser = await fetch(
      "http://localhost:4000/api/auth/getUserInfo",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    const user = await responseUser.json();

    const publicacionesContainer = document.getElementById("publicaciones");
    data.forEach((publicacion) => {
      const article = document.createElement("article");
      article.classList.add("contenedor-publi");
      article.innerHTML = `
                        <p class="userNamePubli"><span>${
                          publicacion.User.name
                        }</span></p>
                        <h3>${publicacion.title}</h3>
                        <h5><b>Categoría:</b> ${publicacion.category}</h5>
                        <div class="contenidoPubli">
                          <img id="contentImage" src="${
                            publicacion.content
                          }" alt="Imagen de la publicación">
                          <p><b>Problema:</b> ${publicacion.description1}</p>
                          <p><b>Posible solución:</b> ${
                            publicacion.description2
                          }</p>
                          <p><b>Monto estimado:</b> $${publicacion.amount}</p>
                        </div>
                        <div class="botonesPubli">
                          <button style="display:  ${
                            publicacion.User.id == user.id ? "block" : "none"
                          }" id="deleteBtn" class="boton-eliminar" data-id="${
        publicacion.id
      }">Eliminar</button></div>`;
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

  const responseUser = await fetch(
    "http://localhost:4000/api/auth/getUserInfo",
    {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );

  const user = await responseUser.json();
  console.log(user);

  const title = document.getElementById("title").value;
  const contentInput = document.getElementById("content"); // Input de tipo file
  const description1 = document.getElementById("description1").value;
  const category = document.getElementById("category").value;
  const description2 = document.getElementById("description2").value;
  const amount = document.getElementById("amount").value;

  const file = contentInput.files[0];
  if (!file) {
    alert("Por favor, selecciona una imagen para la publicación.");
    return;
  }

  try {
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "scNetworkP");

    const uploadResponse = await fetch(
      "https://api.cloudinary.com/v1_1/dxkcbumcu/upload",
      {
        method: "POST",
        body: uploadData,
      }
    );

    const uploadResult = await uploadResponse.json();

    if (!uploadResponse.ok) {
      console.error("Error al subir la imagen:", uploadResult);
      alert("Error al subir la imagen. Intenta nuevamente.");
      return;
    }

    const imageUrl = uploadResult.secure_url;
    console.log("Imagen subida con éxito:", imageUrl);

    const inpO = {
      title: title,
      content: imageUrl,
      description1: description1,
      category: category,
      description2: description2,
      amount: amount,
    };
    console.log("Datos a enviar:", inpO);

    const response = await fetch(
      `http://localhost:4000/api/pub/create/${user.id}`,
      {
        method: "POST",
        body: JSON.stringify(inpO),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Publicación creada con éxito");
      location.reload();
    } else {
      console.error("Error al crear la publicación:", data);
      alert("Error al crear la publicación");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un error al procesar la solicitud. Intenta más tarde.");
  }
});
