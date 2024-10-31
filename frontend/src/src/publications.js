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
    const publicaciones = await response.json();

    const publicacionesContainer = document.getElementById("publicaciones");
    publicaciones.forEach((publicacion) => {
      const div = document.createElement("div");
      div.classList.add("publicacion");
      div.innerHTML = `
                        <h2>${publicacion.title}</h2>
                        <img>${publicacion.content}<img>
                        <p>${publicacion.description}</p>
                    `;
      publicacionesContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Error al obtener publicaciones:", error);
  }
});

const createPublication = async (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const description = document.getElementById("description").value;
  const publicationDate = document.getElementById("publicationDate").value;

  const inpO = {
    title: title,
    content: content,
    description: description,
    publicationDate: publicationDate,
  };

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
  } catch (error) {
    console.log(error, "Cannot create connection");
    alert("Error de conexión. Por favor, intenta más tarde.");
  }
};
