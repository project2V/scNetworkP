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

    if (response.ok) {
      console.log("Publicaciones obtenidas");
    }
    const publicaciones = await response.json();

    const publicacionesContainer = document.getElementById("publicaciones");
    publicaciones.forEach((publicacion) => {
      const div = document.createElement("div");
      div.classList.add("publicacion");
      div.innerHTML = `
                        <h2>${publicacion.title}</h2>
                        <p>${publicacion.description1}</p>
                        <p>${publicacion.description2}</p>
                        <p>${publicacion.amount}</p>
                        `;
      publicacionesContainer.appendChild(div);
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
  const description2 = document.getElementById("description2").value;
  const amount = document.getElementById("amount").value;

  const inpO = {
    title: title,
    description1: description1,
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
