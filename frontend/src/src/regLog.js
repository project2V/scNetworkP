const registerForm = document.querySelector("#reg-form");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const inpO = Object.fromEntries(formData.entries());

  console.log(inpO);
  try {
    const asd = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(inpO),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(asd.json());
  } catch (error) {
    console.log(error, "Cannot create connection");
  }
});
