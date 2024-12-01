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
      }">Eliminar</button>
      <button style="display: ${
        publicacion.User.id == user.id ? "block" : "none"
      }" class="boton-editar" id="editBtn" data-id="${
        publicacion.id
      }">Editar</button></div>
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

    const editPublication = document.querySelector("#editBtn");

    editPublication.addEventListener("click", async (event) => {
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
      const editPublicationC = async (event) => {
        console.log("object");
      };

      const user = await responseUser.json();
      document.getElementsByClassName("modal-footer")[0].innerHTML = `
<button id="editPubBtn" type="button" class="saveChanges btn btn-primary saveChanges" onclick="editPublicationC(event)">Guardar</button>
`;
      const id = event.target.getAttribute("data-id");
      document
        .getElementsByClassName("saveChanges")[0]
        .setAttribute("data-id", id);

      const modal = document.getElementById("myModal");
      const btn = document.getElementById("editBtn");
      const span = document.getElementsByClassName("close")[0];
      document.getElementById("publicationId").innerText = "Editar publicación";

      btn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      const response = await fetch(
        `http://localhost:4000/api/pub/getpublicationdata/${id}`
      );

      const data = await response.json();
      console.log(data);

      const title = document.getElementById("title");
      const contentInput = document.getElementById("content");
      const description1 = document.getElementById("description1");
      const category = document.getElementById("category");
      const description2 = document.getElementById("description2");
      const amount = document.getElementById("amount");

      title.value = data.title;
      // contentInput.value = data.content;
      description1.value = data.description1;
      category.value = data.category;
      description2.value = data.description2;
      amount.value = data.amount;
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

// const editPBtn = document.getElementById("editPubBtn");

// if (editPBtn) {
//   editPBtn.addEventListener("click", async (event) => {
//     event.preventDefault();

//     const id = event.target.getAttribute("data-id");
//     console.log(id);

//     const title = document.getElementById("title").value;
//     const contentInput = document.getElementById("content").value;
//     const description1 = document.getElementById("description1").value;
//     const category = document.getElementById("category").value;
//     const description2 = document.getElementById("description2").value;
//     const amount = document.getElementById("amount").value;

//     const inpO = {
//       title: title,
//       content: contentInput, // Supongo que 'imageUrl' no está definido, usa 'contentInput' si es necesario.
//       description1: description1,
//       category: category,
//       description2: description2,
//       amount: amount,
//     };

//     const response = await fetch(`http://localhost:4000/api/pub/edit/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(inpO), // Asegúrate de enviar los datos correctamente
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("Publicación editada con éxito");
//       location.reload();
//     } else {
//       alert("Error al editar la publicación");
//       console.log("Error:", data);
//     }
//   });
// } else {
//   console.error("Elemento editPubBtn no encontrado.");
// }
